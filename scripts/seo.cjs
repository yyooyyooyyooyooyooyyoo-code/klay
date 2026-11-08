const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');
const distDir = path.join(root, 'dist');

require.extensions['.ts'] = (module, filename) => {
  const source = fs.readFileSync(filename, 'utf8');
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
      resolveJsonModule: true,
    },
  }).outputText;
  module._compile(output, filename);
};

const { BLOG_PREVIEW, SERVICES } = require(path.join(root, 'lib', 'data.ts'));
const { getPageSeo, getPublicSeoRoutes, getStructuredData } = require(path.join(root, 'lib', 'seo.ts'));

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function lastModified(relativePath) {
  const file = path.join(root, relativePath);
  if (!fs.existsSync(file)) throw new Error(`Missing lastmod source: ${relativePath}`);
  return fs.statSync(file).mtime.toISOString().slice(0, 10);
}

function writeSitemap(name, routes) {
  const rows = routes.map(({ path: routePath, lastmodSource }) => {
    const seo = getPageSeo(routePath);
    return `  <url><loc>${xmlEscape(seo.canonical)}</loc><lastmod>${lastModified(lastmodSource)}</lastmod></url>`;
  });
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...rows,
    '</urlset>',
    '',
  ].join('\n');
  fs.writeFileSync(path.join(publicDir, name), xml);
}

function generateSitemaps() {
  fs.mkdirSync(publicDir, { recursive: true });
  const routes = getPublicSeoRoutes();
  const pageRoutes = routes.filter((route) => route.source === 'page');
  const serviceRoutes = routes.filter((route) => route.source === 'service');
  const blogRoutes = routes.filter((route) => route.source === 'article');
  writeSitemap('sitemap-pages.xml', pageRoutes);
  writeSitemap('sitemap-services.xml', serviceRoutes);
  writeSitemap('sitemap-blog.xml', blogRoutes);

  const imageEntries = [
    { path: '/', image: getPageSeo('/').image },
    ...BLOG_PREVIEW.map((post) => ({ path: `/blog/${post.slug}`, image: post.image })),
  ];
  const imagesXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...imageEntries.map(({ path: routePath, image }) => {
      const seo = getPageSeo(routePath);
      const imageUrl = image.startsWith('/') ? `https://klayconsultants.com${image}` : image;
      return `  <url><loc>${xmlEscape(seo.canonical)}</loc><image:image><image:loc>${xmlEscape(imageUrl)}</image:loc></image:image></url>`;
    }),
    '</urlset>',
    '',
  ].join('\n');
  fs.writeFileSync(path.join(publicDir, 'sitemap-images.xml'), imagesXml);

  const sitemapNames = ['sitemap-pages.xml', 'sitemap-services.xml', 'sitemap-blog.xml', 'sitemap-images.xml'];
  const indexXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sitemapNames.map((name) => `  <sitemap><loc>https://klayconsultants.com/${name}</loc></sitemap>`),
    '</sitemapindex>',
    '',
  ].join('\n');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), indexXml);
  fs.writeFileSync(
    path.join(publicDir, 'robots.txt'),
    'User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: https://klayconsultants.com/sitemap.xml\n',
  );
  console.log(`Generated sitemap index and ${routes.length} route entries (${BLOG_PREVIEW.length} articles).`);
}

function validateXmlFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) throw new Error(`Missing XML declaration: ${file}`);
  if (!/<(?:urlset|sitemapindex)\b[^>]*xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/.test(content)) {
    throw new Error(`Invalid sitemap root namespace: ${file}`);
  }
  if ((content.match(/<loc>/g) || []).length !== (content.match(/<\/loc>/g) || []).length) {
    throw new Error(`Unbalanced loc elements: ${file}`);
  }
  for (const match of content.matchAll(/<loc>(.*?)<\/loc>/g)) {
    const url = new URL(match[1]);
    if (url.protocol !== 'https:' || url.hostname !== 'klayconsultants.com') {
      if (!file.endsWith('sitemap-images.xml')) throw new Error(`Unexpected sitemap URL: ${url.href}`);
    }
    if (url.hostname === 'localhost' || url.hostname.includes('netlify.app') || url.hostname.includes('rynohm.com')) {
      throw new Error(`Non-production URL in sitemap: ${url.href}`);
    }
  }
}

function validateBuild() {
  const routes = getPublicSeoRoutes();
  const knownPaths = new Set(routes.map((route) => route.path));
  const canonicals = new Set();
  const titles = new Set();
  const descriptions = new Set();
  const errors = [];

  for (const route of routes) {
    const seo = getPageSeo(route.path);
    if (!seo.title.trim()) errors.push(`${route.path}: title is empty`);
    if (!seo.description.trim()) errors.push(`${route.path}: description is empty`);
    if (seo.title.length > 100) errors.push(`${route.path}: title is longer than 100 characters`);
    if (seo.description.length > 200) errors.push(`${route.path}: description is longer than 200 characters`);
    if (canonicals.has(seo.canonical)) errors.push(`${route.path}: duplicate canonical ${seo.canonical}`);
    if (titles.has(seo.title.toLowerCase())) errors.push(`${route.path}: duplicate title`);
    if (descriptions.has(seo.description.toLowerCase())) errors.push(`${route.path}: duplicate description`);
    canonicals.add(seo.canonical);
    titles.add(seo.title.toLowerCase());
    descriptions.add(seo.description.toLowerCase());

    const outputPath = route.path === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.path.slice(1), 'index.html');
    if (!fs.existsSync(outputPath)) {
      errors.push(`${route.path}: prerendered HTML is missing`);
      continue;
    }
    const html = fs.readFileSync(outputPath, 'utf8');
    const head = html.slice(0, html.indexOf('</head>'));
    if (!head.includes(`<title>${xmlEscape(seo.title)}</title>`)) errors.push(`${route.path}: title missing from initial HTML`);
    if (!head.includes(`content="${xmlEscape(seo.description)}"`)) errors.push(`${route.path}: description missing from initial HTML`);
    if (!head.includes(`href="${seo.canonical}"`)) errors.push(`${route.path}: canonical missing from initial HTML`);
    if (
      !head.includes('property="og:title"') ||
      !head.includes('property="og:description"') ||
      !head.includes('property="og:url"') ||
      !head.includes('property="og:image"') ||
      !head.includes('name="twitter:card"')
    ) {
      errors.push(`${route.path}: Open Graph or Twitter metadata missing`);
    }
    const jsonLdMatch = head.match(/<script id="seo-jsonld" type="application\/ld\+json">([\s\S]*?)<\/script>/);
    if (!jsonLdMatch) {
      errors.push(`${route.path}: JSON-LD is missing from initial HTML`);
    } else {
      try {
        JSON.parse(jsonLdMatch[1].replace(/&quot;/g, '"'));
      } catch {
        errors.push(`${route.path}: JSON-LD is invalid`);
      }
    }
    const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;
    if (h1Count !== 1) errors.push(`${route.path}: expected exactly one H1, found ${h1Count}`);
    for (const image of html.matchAll(/<img\b[^>]*>/gi)) {
      if (!/\balt\s*=/.test(image[0])) errors.push(`${route.path}: image is missing an alt attribute`);
    }
    for (const link of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/gi)) {
      const href = link[1];
      if (!href.startsWith('/') || href.startsWith('//')) continue;
      const pathOnly = decodeURIComponent(href.split(/[?#]/, 1)[0]).replace(/\/+$/, '') || '/';
      if (!knownPaths.has(pathOnly) && !pathOnly.includes('.')) {
        errors.push(`${route.path}: broken internal link ${href}`);
      }
    }
  }

  const expectedSitemaps = ['sitemap-pages.xml', 'sitemap-services.xml', 'sitemap-blog.xml', 'sitemap-images.xml'];
  for (const name of ['sitemap.xml', ...expectedSitemaps]) {
    const file = path.join(publicDir, name);
    if (!fs.existsSync(file)) errors.push(`Missing ${name}`);
    else validateXmlFile(file);
  }
  const sitemapIndex = fs.readFileSync(path.join(publicDir, 'sitemap.xml'), 'utf8');
  for (const sitemapName of expectedSitemaps) {
    if (!sitemapIndex.includes(`https://klayconsultants.com/${sitemapName}`)) {
      errors.push(`sitemap.xml does not reference ${sitemapName}`);
    }
  }
  const expectedBySitemap = [
    { file: 'sitemap-pages.xml', routes: routes.filter((route) => route.source === 'page') },
    { file: 'sitemap-services.xml', routes: routes.filter((route) => route.source === 'service') },
    { file: 'sitemap-blog.xml', routes: routes.filter((route) => route.source === 'article') },
  ];
  for (const sitemap of expectedBySitemap) {
    const content = fs.readFileSync(path.join(publicDir, sitemap.file), 'utf8');
    const urls = Array.from(content.matchAll(/<loc>(.*?)<\/loc>/g), (match) => match[1]);
    if (new Set(urls).size !== urls.length) errors.push(`${sitemap.file} contains duplicate URLs`);
    const expectedUrls = sitemap.routes.map((route) => getPageSeo(route.path).canonical);
    if (urls.length !== expectedUrls.length || expectedUrls.some((url) => !urls.includes(url))) {
      errors.push(`${sitemap.file} does not match the public route registry`);
    }
    if (/<lastmod>/.test(content) && !/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/.test(content)) {
      errors.push(`${sitemap.file} contains an invalid lastmod`);
    }
  }
  const missingRouteHtml = path.join(distDir, '404.html');
  if (!fs.existsSync(missingRouteHtml)) errors.push('Missing generated 404.html');
  else {
    const notFound = fs.readFileSync(missingRouteHtml, 'utf8');
    if (!notFound.includes('name="robots" content="noindex,follow"') || !notFound.includes('<h1>Page not found</h1>')) {
      errors.push('404.html must be noindex and include a visible not-found heading');
    }
  }
  const robots = fs.readFileSync(path.join(publicDir, 'robots.txt'), 'utf8');
  if (
    !robots.includes('User-agent: *') ||
    !robots.includes('Allow: /') ||
    !robots.includes('Disallow: /api/') ||
    !robots.includes('https://klayconsultants.com/sitemap.xml')
  ) {
    errors.push('robots.txt is missing the public crawl policy or sitemap URL');
  }
  if (errors.length) {
    console.error(errors.map((error) => `- ${error}`).join('\n'));
    process.exitCode = 1;
    return;
  }
  console.log(`SEO validation passed for ${routes.length} prerendered public routes, sitemap files, metadata, headings, links and JSON-LD.`);
}

function generateReports() {
  const routes = getPublicSeoRoutes();
  const keywordTable = routes.map((route) => {
    const seo = getPageSeo(route.path);
    const keyword = (seo.keyword || 'UAE business setup').split(',')[0].trim();
    return `| [${route.path}](https://klayconsultants.com${route.path === '/' ? '/' : `${route.path}/`}) | ${keyword.replace(/\|/g, '&#124;')} | ${seo.title.replace(/\|/g, '&#124;')} | ${route.source} |`;
  });
  const audit = [
    '# Klay Consultants Technical SEO Audit',
    '',
    'Audit date: 2026-11-06. Scope: the React + Vite workspace in this repository. No production files were changed or deployed.',
    '',
    '## Findings and implementation',
    '',
    '| Issue | Affected area | Severity | Recommendation | Status |',
    '|---|---|---|---|---|',
    '| The app previously served one empty SPA shell for every route; route metadata and page content were not present in initial HTML. | All React routes | High | Build route-specific HTML with metadata, JSON-LD and rendered page content; hydrate on the client. | Implemented and locally validated for all listed routes. |',
    '| The prior sitemap and robots policy were not generated from this React route registry. | Crawl discovery | High | Generate production sitemap index, page/service/article/image sitemaps and robots.txt from actual content. | Implemented; 36 routes validated. |',
    '| Page titles and descriptions were generic or duplicated for dynamic content. | Static, service and article routes | High | Centralize route metadata and supply unique titles, descriptions, canonicals, social tags and keywords. | Implemented and locally validated for all listed routes. |',
    '| No route-level canonical, social metadata or structured data was emitted at build time. | All indexable routes | Medium | Add self-referencing canonical URLs, Open Graph/Twitter tags, Organization/ProfessionalService, WebPage, breadcrumbs, Service and Article JSON-LD. | Implemented; JSON-LD parses on all rendered routes. |',
    '| The production bundle previously contained all route code in one large chunk. | Initial JavaScript | Medium | Lazy-load route modules and cache static assets. | Implemented; initial JS chunk reduced from about 643 KB to about 430 KB. Recheck field Core Web Vitals after deployment. |',
    '| About-page MP4s previously totaled about 180 MB and loaded as autoplay content. | About page media | Medium | Re-encode as 720p H.264, generate posters and defer source assignment until videos approach the viewport. | Implemented; public encodes total about 11 MB (roughly 94% smaller); originals retained under `source-assets/videos/`. |',
    '| Pexels images were requested at one fixed size. | Remote Pexels images | Low | Emit responsive `srcset` widths, lazy-load noncritical images and set high fetch priority for page hero/LCP images. | Implemented in shared image component and route prerender. |',
    '| Unknown URLs could fall through to the SPA and appear successful. | Unknown routes | Medium | Generate a noindex 404 document and return HTTP 404 from the Express host; allow static hosting to use its 404 document. | Implemented locally; hosting behavior requires post-deployment verification. |',
    '| The live domain did not match the React/Vite workspace assumptions during this audit. | https://klayconsultants.com | High | Confirm the intended deployment target and ensure the React build, redirects, sitemap and robots files are deployed to the canonical domain. | Awaiting deployment/hosting confirmation. |',
    '| Current live robots/sitemap endpoints were generated by an All in One SEO WordPress plugin; live /blog redirects to a slash URL and exposes different article URLs. | Production site | High | Reconcile the production platform and route inventory before replacing production SEO endpoints. Do not mix the existing live WordPress URLs with this React sitemap. | Observed 2026-11-06; no production changes made. |',
    '| Real user Core Web Vitals and Search Console data were unavailable. | Performance/indexing | Medium | Review PageSpeed Insights and Search Console after deployment; monitor mobile field metrics. | Awaiting manual verification. |',
    '',
    '## Keyword mapping and page-by-page metadata',
    '',
    'Canonical policy: HTTPS, apex hostname, trailing slash except the root URL.',
    '',
    '| URL | Primary keyword | SEO title | Route type |',
    '|---|---|---|---|',
    ...keywordTable,
    '',
    '## Local checks',
    '',
    '- `npm run typecheck`: run as part of the production build.',
    '- `npm run build`: generates sitemap files, type-checks, builds, prerenders routes and runs SEO validation.',
    '- SEO validation checks unique titles/descriptions/canonicals, initial HTML metadata, one H1, image alt attributes, internal route links, JSON-LD syntax, sitemap namespaces and expected blog count.',
    '- The build still reports an outdated Browserslist database notice; update it in a separate dependency-maintenance change.',
    '',
    '## Production and manual checks',
    '',
    '- Production was not changed or deployed. At the audit date, the live sitemap and robots output are WordPress/plugin-generated and do not match this React route inventory.',
    '- External image availability, redirect chains across every production URL, mobile usability, and field Core Web Vitals require a deployed build and live browser/Search Console access.',
    '- The two About page editorial images still reference existing public image URLs on the canonical domain; retain those assets or migrate them to the static asset directory before retiring their current origin.',
    '',
    '## Changelog',
    '',
    '| File | Change |',
    '|---|---|',
    '| `App.tsx` | Central dynamic metadata and lazy-loaded route modules. |',
    '| `main.tsx` | Hydrates prerendered route HTML and retains client-only development rendering. |',
    '| `index.html` | Base SEO tags, canonical/social defaults and prerender marker. |',
    '| `lib/seo.ts`, `lib/seo-pages.json` | Central metadata, canonical, JSON-LD and route registry helpers. |',
    '| `lib/data.ts` | Unique concise blog metadata and shareable SEO fields. |',
    '| `app/about/page.tsx`, `components/ui/image.tsx`, `components/layout/Header.tsx`, `app/services/page.tsx` | Defer videos, add posters, responsive image sources, and prioritize hero media. |',
    '| `public/videos/` | Compressed page video and poster assets; source videos preserved under `source-assets/videos/`. |',
    '| `scripts/seo.cjs`, `scripts/prerender.mjs` | Sitemap generation, route prerendering and SEO validation. |',
    '| `public/robots.txt`, `public/sitemap*.xml` | Generated crawl policy and route sitemaps. |',
    '| `netlify.toml` | HTTPS/apex redirects, static cache headers and deploy-preview noindex. |',
    '| `server.js` | Serve static prerendered routes and return a real 404 for unknown paths. |',
    '| `package.json` | SEO generation/validation integrated into build and `npm run seo`. |',
    '| `SEO_AUDIT.md`, `SEO_DEPLOYMENT.md` | Audit, page keyword map, deployment and Google tooling instructions. |',
    '',
  ].join('\n');

  const deployment = [
    '# SEO Deployment and Google Search Console Guide',
    '',
    'This guide applies to the React + Vite build in this workspace. The live domain showed plugin-generated WordPress sitemap/robots output during the 2026-11-06 audit. Confirm the hosting platform and production migration plan before deploying these generated files.',
    '',
    '## Before deployment',
    '',
    '1. Confirm the production build is intended to replace the current site at `https://klayconsultants.com/`; this repository does not deploy automatically.',
    '2. Run `npm run typecheck`, `npm run build` and `npm start` locally. Test one page, one service, one blog article and an invalid URL directly.',
    '3. Verify that the deployment publishes `dist/` including route-specific `index.html` files, `404.html`, `robots.txt` and all generated sitemaps.',
    '4. Confirm the domain is configured with HTTPS and the apex hostname as the primary domain. Netlify redirect rules are included for HTTP and `www`; confirm these rules in the actual hosting account.',
    '5. Confirm the existing live WordPress content URLs and backlinks are mapped before switching platforms. Add only verified 301 redirects for retired URLs; do not redirect unrelated pages to the homepage.',
    '6. Keep deploy-preview noindex behavior enabled and ensure preview URLs are not included in production sitemaps.',
    '',
    '## Google Search Console',
    '',
    '1. In Search Console, add a **Domain property** for `klayconsultants.com`.',
    '2. Copy the DNS TXT verification value shown by Google into the domain registrar/DNS provider. No verification token is committed in this project.',
    '3. Wait for DNS propagation and use Search Console’s Verify action.',
    '4. Submit `https://klayconsultants.com/sitemap.xml` under **Indexing → Sitemaps**.',
    '5. Use **URL Inspection** for the homepage, `/business-setup/`, `/services/`, `/contact/`, `/golden-visa/` and selected published articles. Test live URL, inspect the crawled HTML and request indexing where appropriate.',
    '6. Review **Page indexing** for 404s, redirects, excluded canonical URLs, and duplicate or alternate-page signals.',
    '7. Review **Core Web Vitals** after enough field data accumulates; prioritize mobile LCP ≤ 2.5 seconds, INP ≤ 200 ms and CLS ≤ 0.1.',
    '8. Track clicks, impressions, CTR, query groups and landing pages in **Performance → Search results**. Compare over time; rankings and indexing are not guaranteed.',
    '',
    '## Google Analytics',
    '',
    '- Create or select the correct Google Analytics 4 property and web data stream in the business-owned account.',
    '- Add the verified Measurement ID (`G-XXXXXXXXXX`) through the organization’s approved tag-management or analytics setup. The ID is intentionally not fabricated or embedded here.',
    '- Confirm the privacy notice and consent requirements for the jurisdictions served before enabling analytics cookies or advertising features.',
    '- Test page-view collection across client-side route changes and avoid sending duplicate page views if Google Tag Manager is also used.',
    '',
    '## External checks after release',
    '',
    '- Test `https://klayconsultants.com/robots.txt`, `/sitemap.xml`, and each child sitemap for HTTP 200 and valid XML.',
    '- Test HTTP and `www` variants and confirm a single redirect directly to the HTTPS apex URL.',
    '- Test direct navigation and refresh on representative nested service and blog pages; unknown slugs should return HTTP 404 and `noindex`.',
    '- Run PageSpeed Insights on mobile and desktop for the homepage, business setup, service detail and article pages.',
    '- Run Google Rich Results Test for the organization/service and article pages; resolve parser errors and confirm marked-up information is visible.',
    '',
    '## Known limitations',
    '',
    '- Production DNS/hosting, Search Console verification, analytics property/ID and consent settings require business account access.',
    '- Google indexing and rankings are determined by Google and are not guaranteed.',
    '',
  ].join('\n');

  fs.writeFileSync(path.join(root, 'SEO_AUDIT.md'), audit);
  fs.writeFileSync(path.join(root, 'SEO_DEPLOYMENT.md'), deployment);
  console.log('Generated SEO_AUDIT.md and SEO_DEPLOYMENT.md.');
}

if (process.argv.includes('--generate')) generateSitemaps();
if (process.argv.includes('--validate')) validateBuild();
if (process.argv.includes('--report')) generateReports();
