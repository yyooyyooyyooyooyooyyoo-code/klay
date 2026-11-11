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
const { getPageSeo, getPrerenderRoutes, getPublicSeoRoutes, getStructuredData } = require(path.join(root, 'lib', 'seo.ts'));
const { getBlogArticleRoute, isPublicRootPostSlug } = require(path.join(root, 'src', 'config', 'routes.ts'));

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
    ...BLOG_PREVIEW
      .filter((post) => isPublicRootPostSlug(post.slug))
      .map((post) => ({ path: getBlogArticleRoute(post.slug), image: post.image })),
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

  const sitemapNames = ['sitemap-pages.xml', 'sitemap-blog.xml', 'sitemap-images.xml'];
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
  const knownPaths = new Set(
    getPrerenderRoutes().map((route) => route.path.replace(/\/+$/, '') || '/'),
  );
  const canonicals = new Set();
  const titles = new Set();
  const descriptions = new Set();
  const errors = [];

  for (const route of routes) {
    const seo = getPageSeo(route.path);
    if (!seo.title.trim()) errors.push(`${route.path}: title is empty`);
    if (!seo.description.trim()) errors.push(`${route.path}: description is empty`);
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

  const expectedSitemaps = ['sitemap-pages.xml', 'sitemap-blog.xml', 'sitemap-images.xml'];
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

if (process.argv.includes('--generate')) generateSitemaps();
if (process.argv.includes('--validate')) validateBuild();
if (process.argv.includes('--report')) require('./migration-report.cjs');
