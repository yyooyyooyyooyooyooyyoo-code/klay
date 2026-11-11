const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const siteOrigin = 'https://klayconsultants.com';

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

const { BLOG_PREVIEW } = require(path.join(root, 'lib', 'data.ts'));
const { getPrerenderRoutes, getPublicSeoRoutes, SITE_ORIGIN } = require(path.join(root, 'lib', 'seo.ts'));
const {
  WORDPRESS_CATEGORY_SLUGS,
  WORDPRESS_PAGE_ROUTES,
  WORDPRESS_POST_SLUGS,
  WORDPRESS_SITEMAP_PAGE_ROUTES,
  WORDPRESS_TAG_SLUGS,
  USER_PROVIDED_POST_SLUGS,
  canonicalizeInternalRoute,
  getBlogArticleRoute,
  getWordPressCategoryRoute,
  getWordPressTagRoute,
} = require(path.join(root, 'src', 'config', 'routes.ts'));

const localPostSlugs = new Set(BLOG_PREVIEW.map((post) => post.slug));
const publicPagePaths = new Set(
  getPublicSeoRoutes().filter((route) => route.source === 'page').map((route) => route.path),
);
const sitemapPagePaths = new Set(WORDPRESS_SITEMAP_PAGE_ROUTES);
const auditDate = new Date().toISOString().slice(0, 10);

function routeKey(pathname) {
  return canonicalizeInternalRoute(pathname).replace(/\/+$/, '') || '/';
}

function sourceUrl(pathname) {
  return new URL(pathname, SITE_ORIGIN).href;
}

function escapeTable(value) {
  return String(value).replace(/\|/g, '&#124;').replace(/\s+/g, ' ').trim();
}

function getRenderedPagePath(routePath) {
  return routePath === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, routePath.slice(1), 'index.html');
}

function inspectLinks() {
  if (!fs.existsSync(distDir)) throw new Error('dist/ is missing; build prerendered pages before generating migration reports.');

  const prerenderRoutes = getPrerenderRoutes();
  const knownRoutes = new Set(prerenderRoutes.map((route) => routeKey(route.path)));
  const pageCache = new Map();
  const linkRows = new Map();
  const brokenLinks = [];
  let totalAnchors = 0;
  let externalLinks = 0;
  let actionLinks = 0;
  let unsupportedLinks = 0;
  let buttons = 0;
  let verifiedInternalOccurrences = 0;

  function recordLink(href, label, status, routePath) {
    const key = `${href}\t${label}\t${status}`;
    const row = linkRows.get(key) || { href, label, status, count: 0, pages: new Set() };
    row.count += 1;
    row.pages.add(routePath);
    linkRows.set(key, row);
  }

  function readPage(routePath) {
    const key = routeKey(routePath);
    if (!pageCache.has(key)) {
      const file = getRenderedPagePath(routePath);
      if (!fs.existsSync(file)) throw new Error(`Missing prerendered HTML for ${routePath}: ${file}`);
      pageCache.set(key, fs.readFileSync(file, 'utf8'));
    }
    return pageCache.get(key);
  }

  for (const route of prerenderRoutes) {
    const html = readPage(route.path);
    buttons += (html.match(/<button\b/gi) || []).length;
    for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)) {
      totalAnchors += 1;
      const href = match[1].trim();
      const label = escapeTable(
        match[2]
          .replace(/<[^>]*>/g, ' ')
          .replace(/&nbsp;/g, ' ')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&#x27;/g, "'")
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>'),
      ) || '(no text)';
      if (!href) {
        brokenLinks.push({ from: route.path, href, label, reason: 'empty href' });
        recordLink(href, label, 'broken empty href', route.path);
        continue;
      }
      let target;
      try {
        target = new URL(href, `${SITE_ORIGIN}${route.path}`);
      } catch {
        brokenLinks.push({ from: route.path, href, label, reason: 'invalid URL' });
        recordLink(href, label, 'broken invalid URL', route.path);
        continue;
      }

      if (target.protocol === 'mailto:' || target.protocol === 'tel:') {
        actionLinks += 1;
        recordLink(href, label, 'contact action - destination unverified', route.path);
        continue;
      }
      if (!['http:', 'https:'].includes(target.protocol)) {
        unsupportedLinks += 1;
        recordLink(href, label, 'unsupported URL scheme - runtime behavior unverified', route.path);
        continue;
      }
      if (target.origin !== siteOrigin) {
        externalLinks += 1;
        recordLink(href, label, 'external - live destination unverified', route.path);
        continue;
      }

      const targetPath = routeKey(target.pathname);
      let status = 'verified prerendered route';
      let validationPage;
      if (path.posix.extname(target.pathname)) {
        const staticPath = path.join(distDir, target.pathname.replace(/^\/+/, ''));
        if (!fs.existsSync(staticPath)) {
          status = 'broken local file';
          brokenLinks.push({ from: route.path, href, label, reason: 'local file is missing' });
        }
      } else if (!knownRoutes.has(targetPath)) {
        status = 'broken local route';
        brokenLinks.push({ from: route.path, href, label, reason: 'route is not prerendered' });
      } else {
        validationPage = readPage(targetPath);
      }

      if (target.hash && status === 'verified prerendered route') {
        const fragment = decodeURIComponent(target.hash.slice(1));
        const fragmentPattern = new RegExp(`(?:id|name)="${fragment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`);
        if (!fragmentPattern.test(validationPage || html)) {
          status = 'broken fragment';
          brokenLinks.push({ from: route.path, href, label, reason: 'fragment target is missing' });
        }
      }
      if (status === 'verified prerendered route') verifiedInternalOccurrences += 1;
      recordLink(href, label, status, route.path);
    }
  }

  return {
    totalAnchors,
    externalLinks,
    actionLinks,
    unsupportedLinks,
    buttons,
    verifiedInternalOccurrences,
    brokenLinks,
    linkRows: Array.from(linkRows.values()).sort((left, right) => left.href.localeCompare(right.href)),
    prerenderedPageCount: prerenderRoutes.length,
  };
}

function buildUrlInventory() {
  const pages = WORDPRESS_PAGE_ROUTES.map((wordpressPath) => ({
    type: 'page',
    wordpressUrl: sourceUrl(wordpressPath),
    reactPath: wordpressPath,
    inWordPressSitemap: sitemapPagePaths.has(wordpressPath),
    status: publicPagePaths.has(wordpressPath) ? 'route implemented' : 'route not implemented',
  }));
  const posts = WORDPRESS_POST_SLUGS.map((slug) => ({
    type: 'post',
    wordpressUrl: sourceUrl(`/${slug}/`),
    reactPath: getBlogArticleRoute(slug),
    inWordPressSitemap: true,
    status: localPostSlugs.has(slug)
      ? 'matching slug and local content exist; source content and metadata unverified'
      : 'missing local content',
  }));
  const userProvidedPosts = USER_PROVIDED_POST_SLUGS.map((slug) => ({
    type: 'user-provided-post',
    wordpressUrl: null,
    proposedUrl: sourceUrl(`/${slug}/`),
    reactPath: getBlogArticleRoute(slug),
    inWordPressSitemap: false,
    status: 'user-provided article; route and sitemap enabled; WordPress publication not verified',
  }));
  const categories = WORDPRESS_CATEGORY_SLUGS.map((slug) => ({
    type: 'category',
    wordpressUrl: sourceUrl(`/category/${slug}/`),
    reactPath: getWordPressCategoryRoute(slug),
    inWordPressSitemap: true,
    status: 'route not implemented',
  }));
  const tags = WORDPRESS_TAG_SLUGS.map((slug) => ({
    type: 'tag',
    wordpressUrl: sourceUrl(`/tag/${slug}/`),
    reactPath: getWordPressTagRoute(slug),
    inWordPressSitemap: true,
    status: 'route not implemented',
  }));

  return {
    generatedAt: auditDate,
    wordpressOrigin: SITE_ORIGIN,
    evidence: {
      publishedPagesFromWordPressRestApi: WORDPRESS_PAGE_ROUTES.length,
      pagesInWordPressSitemap: WORDPRESS_SITEMAP_PAGE_ROUTES.length,
      postsInWordPressSitemap: WORDPRESS_POST_SLUGS.length,
      categoriesInWordPressSitemap: WORDPRESS_CATEGORY_SLUGS.length,
      tagsInWordPressSitemap: WORDPRESS_TAG_SLUGS.length,
      totalWordPressSitemapUrls:
        WORDPRESS_SITEMAP_PAGE_ROUTES.length
        + WORDPRESS_POST_SLUGS.length
        + WORDPRESS_CATEGORY_SLUGS.length
        + WORDPRESS_TAG_SLUGS.length,
    },
    mappings: [...pages, ...posts, ...userProvidedPosts, ...categories, ...tags],
  };
}

function writeReports() {
  const inventory = buildUrlInventory();
  const linkAudit = inspectLinks();
  const implementedPages = inventory.mappings.filter((item) => item.type === 'page' && item.status === 'route implemented').length;
  const implementedPosts = inventory.mappings.filter((item) => item.type === 'post' && item.status.startsWith('matching slug')).length;
  const missingPosts = WORDPRESS_POST_SLUGS.length - implementedPosts;
  const missingPages = WORDPRESS_PAGE_ROUTES.length - implementedPages;
  const missingTaxonomyUrls = WORDPRESS_CATEGORY_SLUGS.length + WORDPRESS_TAG_SLUGS.length;
  const userProvidedArticleCount = USER_PROVIDED_POST_SLUGS.length;
  const userProvidedArticleLabel = userProvidedArticleCount === 1 ? 'article is' : 'articles are';
  const sourceSitemapCovered = WORDPRESS_SITEMAP_PAGE_ROUTES.length + implementedPosts;
  const sourceSitemapTotal = inventory.evidence.totalWordPressSitemapUrls;

  fs.writeFileSync(
    path.join(root, 'seo-url-migration.json'),
    `${JSON.stringify(inventory, null, 2)}\n`,
    'utf8',
  );

  const seoReport = [
    '# WordPress to React SEO Migration Report',
    '',
    `Generated: ${auditDate}`,
    '',
    '## Scope and evidence',
    '',
    '- URL inventory is based on the public WordPress REST API and sitemap snapshot reviewed during this migration.',
    '- The published WordPress page inventory contains 10 pages; its sitemap includes 4 page URLs, 44 post URLs, 2 category URLs and 48 tag URLs (98 sitemap URLs total).',
    '- A matching React route or slug is not evidence that the original WordPress article body, images, schema or metadata were preserved.',
    '- No WPGraphQL integration is present in this repository; the public `/graphql` endpoint returned 404 during the source audit. The public REST API was reachable, but is not yet a configured content source for this app.',
    '',
    '## Route coverage',
    '',
    `- Published WordPress pages with a React route: ${implementedPages}/10; routes still missing: ${missingPages}.`,
    `- Sitemap posts with a matching local slug and local article data: ${implementedPosts}/44; matching content and metadata have not been compared against WordPress.`,
    `- Sitemap posts without local article data: ${missingPosts}/44.`,
    `- Category and tag archive routes not implemented: ${missingTaxonomyUrls} (2 categories, 48 tags).`,
    `- WordPress sitemap URLs represented by a route or matching post slug: ${sourceSitemapCovered}/${sourceSitemapTotal}; ${sourceSitemapTotal - sourceSitemapCovered} source sitemap URLs remain uncovered.`,
    `- ${BLOG_PREVIEW.length - implementedPosts - USER_PROVIDED_POST_SLUGS.length} local article entries are not in the captured WordPress post sitemap; they are excluded from the public sitemap and marked noindex.`,
    `- ${userProvidedArticleCount} user-provided ${userProvidedArticleLabel} included in the React sitemap but not verified as published in the captured WordPress sitemap.`,
    '- User-provided articles use their supplied bodies, SEO metadata, images and proposed root-level slugs; WordPress publication status is unverified.',
    '- The migration inventory, including each verified source URL and implementation status, is in `seo-url-migration.json`.',
    '',
    '## SEO and delivery',
    '',
    '- Canonical URLs use the HTTPS apex origin `https://klayconsultants.com`.',
    '- Core page titles and descriptions captured from the live source are preserved verbatim, including unusually long descriptions and source-generated prefixes. Lengths were not capped or rewritten.',
    '- Article metadata, article body fidelity, image equivalence, structured-data parity, redirect requirements and backlink destinations have not been fully verified.',
    '- The generated sitemap includes only the routes classified as public by the React route registry. Category/tag archives and missing article/page routes are not included.',
    '- A route can be prerendered and still be missing source content; do not treat route generation as proof of content parity.',
    '',
    '## Analytics, forms and release blockers',
    '',
    '- The audited Google Tag Manager container `GTM-MHNJGSWX` and Google Analytics 4 measurement ID `G-NS77XMTC7B` are configured. SPA page-view collection is enabled; Ads/Meta tag firing and conversion events remain unverified after migration.',
    '- The contact and lead-form user journeys have not been verified end to end. In particular, `BusinessSetupEnquiryForm` does not currently submit a lead.',
    '- Production route behavior, 301 redirects, form submissions, cookie/consent behavior, Search Console and post-release analytics require verification on the deployed host.',
    '- The React project does not have a CMS/API endpoint configured for retrieving the 20 missing article bodies or comparing the 24 local article entries with their WordPress source.',
    '',
  ].join('\n');
  fs.writeFileSync(path.join(root, 'seo-migration-report.md'), seoReport, 'utf8');

  const brokenLinkRows = linkAudit.brokenLinks.map((item, index) => (
    `| ${index + 1} | ${escapeTable(item.from)} | ${escapeTable(item.href)} | ${escapeTable(item.label)} | ${escapeTable(item.reason)} |`
  ));
  const auditedLinkRows = linkAudit.linkRows.map((item) => {
    const pages = Array.from(item.pages);
    const pageSample = pages.slice(0, 3).join(', ');
    const pageSummary = pages.length > 3 ? `${pageSample}, and ${pages.length - 3} more` : pageSample;
    return `| ${escapeTable(item.label)} | ${escapeTable(pageSummary)} | ${escapeTable(item.href)} | ${escapeTable(item.status)} | ${item.count} |`;
  });
  const linkReport = [
    '# Internal Link and Clickable Element Audit',
    '',
    `Generated: ${auditDate}`,
    '',
    'This report inspects links and buttons in the generated prerendered HTML. It verifies local route/file targets against the build output; it does not make live HTTP requests to external destinations, test client-side click handlers, or submit forms.',
    '',
    '## Summary',
    '',
    `- Prerendered pages inspected: ${linkAudit.prerenderedPageCount}.`,
    `- Anchor occurrences inspected: ${linkAudit.totalAnchors}.`,
    `- Internal links to generated routes verified: ${linkAudit.verifiedInternalOccurrences}.`,
    `- Broken internal links or fragments: ${linkAudit.brokenLinks.length}.`,
    `- External links requiring live verification: ${linkAudit.externalLinks}.`,
    `- Telephone/email action links: ${linkAudit.actionLinks}; destination formatting is not proof of successful contact.`,
    `- Button elements found in initial HTML: ${linkAudit.buttons}; runtime behavior is not verified by this static audit.`,
    '',
    '## Clickable destinations',
    '',
    '| Link text | Example rendered page(s) | Destination | Status | Occurrences |',
    '|---|---|---|---|---:|',
    ...(auditedLinkRows.length ? auditedLinkRows : ['| None found | - | - | - | 0 |']),
    '',
    '## Broken internal links',
    '',
    '| # | Source page | Destination | Link text | Reason |',
    '|---:|---|---|---|---|',
    ...(brokenLinkRows.length ? brokenLinkRows : ['| - | - | - | None detected | - |']),
    '',
    `Unsupported URL schemes: ${linkAudit.unsupportedLinks}. External destinations and form submissions are intentionally marked unverified, not reported as working based solely on markup.`,
    '',
  ].join('\n');
  fs.writeFileSync(path.join(root, 'link-audit-report.md'), linkReport, 'utf8');

  const checklist = [
    '# WordPress to React Migration Checklist',
    '',
    `Generated: ${auditDate}`,
    '',
    '## Implemented in this workspace',
    '',
    '- [x] Add an explicit inventory of the captured WordPress pages, post slugs, categories and tags.',
    '- [x] Preserve verified core-page paths, titles, descriptions and canonical origin in the React site.',
    '- [x] Route matching WordPress post slugs at their root-level URLs.',
    '- [x] Add user-provided articles at their proposed root-level URLs and include them in the React blog and sitemap.',
    '- [x] Exclude local-only articles from the public sitemap and apply noindex to those article routes.',
    '- [x] Generate route-specific prerendered HTML and validate metadata, canonical tags, JSON-LD, sitemap entries and local links during the build.',
    '- [x] Configure the captured GTM container and GA4 ID with SPA page-view tracking.',
    '',
    '## Remaining before production cutover',
    '',
    `- [ ] Obtain and import the ${missingPosts} missing WordPress article bodies, images and source metadata; compare the ${implementedPosts} matching local article records against their WordPress originals.`,
    `- [ ] Implement the ${missingTaxonomyUrls} published category/tag archive URLs with correct content, pagination and metadata, or provide an approved redirect/noindex disposition for each.`,
    `- [ ] Implement or agree on redirects/alternatives for the ${missingPages} published WordPress pages without a React route.`,
    '- [ ] Provide a durable WordPress export or CMS/API endpoint and credentials/configuration approach that remains available after the production domain changes.',
    '- [ ] Confirm user-provided articles are published at their proposed URLs in WordPress before treating those routes as source-verified.',
    '- [ ] Compare all source and React internal links, image URLs, canonical tags, structured data and backlink destinations; approve redirects only for verified retired URLs.',
    '- [ ] Complete the business enquiry and contact form submission flows and test the full confirmation journey.',
    '- [ ] Verify GTM, GA4 page views, Ads/Meta tags and conversion events in the deployed environment, including consent requirements.',
    '- [ ] Test production direct loads, refreshes, HTTP status codes, 404/noindex behavior, redirects, robots.txt and every sitemap URL.',
    '- [ ] Confirm hosting publishes the generated `dist/` output and does not leave WordPress rewrite, sitemap or robots rules in control.',
    '',
    '## Release status',
    '',
    'Migration is not ready for production cutover while source content, taxonomy routes, three published pages, form submission behavior and production tracking remain unresolved.',
    '',
  ].join('\n');
  fs.writeFileSync(path.join(root, 'migration-checklist.md'), checklist, 'utf8');

  if (linkAudit.brokenLinks.length) {
    throw new Error(`Migration reports generated, but ${linkAudit.brokenLinks.length} broken internal links were found; see link-audit-report.md.`);
  }
  console.log(`Generated migration inventory and reports; verified ${linkAudit.verifiedInternalOccurrences} internal link occurrences.`);
}

writeReports();
