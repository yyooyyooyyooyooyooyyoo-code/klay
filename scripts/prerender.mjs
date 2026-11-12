import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { PassThrough } from 'node:stream';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// DIST_DIR lets a build be checked in another folder without touching the served dist/.
const distDir = process.env.DIST_DIR ? path.resolve(root, process.env.DIST_DIR) : path.join(root, 'dist');
const vite = await createServer({
  configFile: path.join(root, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Replaces exactly one match and fails loudly when the template no longer has it.
 * The replacement is passed as a function so `$&`, `$'` and `` $` `` in page text are kept literally.
 */
function replaceOnce(html, pattern, replacement, label) {
  let found = false;
  const result = html.replace(pattern, (match) => {
    found = true;
    return typeof replacement === 'function' ? replacement(match) : replacement;
  });
  if (!found) throw new Error(`Template tag not found: ${label}`);
  return result;
}

function replaceMeta(html, selector, replacement) {
  return replaceOnce(html, new RegExp(`<meta\\s+${selector}[^>]*>`, 'i'), replacement, selector);
}

function renderMarkup(element) {
  return new Promise((resolve, reject) => {
    let markup = '';
    let renderError;
    const destination = new PassThrough();
    destination.on('data', (chunk) => {
      markup += chunk.toString();
    });
    destination.on('end', () => resolve(markup));
    destination.on('error', reject);

    const stream = renderToPipeableStream(element, {
      onAllReady() {
        if (renderError) {
          reject(renderError);
          return;
        }
        stream.pipe(destination);
      },
      onShellError: reject,
      onError(error) {
        renderError = error;
      },
    });
  });
}

/** Marks the page's LCP image as high priority (and never lazy) when the component did not already. */
function prioritizeImage(markup, src) {
  const attribute = `src="${escapeHtml(src)}"`;
  const tag = markup.match(new RegExp(`<img\\b(?=[^>]*${attribute.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})[^>]*>`));
  if (!tag || /\bfetchpriority=/i.test(tag[0])) return markup;
  const prioritized = tag[0].replace(/\sloading="lazy"/i, ' loading="eager"').replace('<img', '<img fetchpriority="high"');
  return markup.replace(tag[0], () => prioritized);
}

// Served by Hostinger (.htaccess ErrorDocument), Netlify and server.js for every unknown URL, at any depth: absolute paths only, no canonical.
const NOT_FOUND_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,follow">
<title>Page not found | Klay Consultants</title>
<link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48">
<link rel="icon" href="/favicon-48.png" type="image/png" sizes="48x48">
<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
<meta name="theme-color" content="#0C2D48">
<style>
body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;max-width:48rem;margin:10vh auto;padding:0 1.25rem;color:#102b42;line-height:1.6}
img{display:block;margin-bottom:2rem}
h1{font-size:2rem;line-height:1.2;margin:0 0 1rem}
a{color:#8b6a18;font-weight:600}
ul{display:flex;flex-wrap:wrap;gap:.5rem 1.5rem;list-style:none;padding:0;margin:1.5rem 0 0}
</style>
</head>
<body>
<main>
<a href="/" aria-label="Klay Consultants home"><img src="/klay-logo.png" alt="Klay Consultants" width="144" height="50"></a>
<h1>Page not found</h1>
<p>The page may have moved or the address may be incorrect.</p>
<ul>
<li><a href="/">Home</a></li>
<li><a href="/services/">Services</a></li>
<li><a href="/blog/">Blog</a></li>
<li><a href="/contact-us/">Contact us</a></li>
</ul>
</main>
</body>
</html>
`;

try {
  const { SiteApp } = await vite.ssrLoadModule('/src/App.tsx');
  const { getPageSeo, getPrerenderRoutes, getStructuredData, SITE_ORIGIN } = await vite.ssrLoadModule('/src/lib/seo.ts');
  const { loadBlogArticle } = await vite.ssrLoadModule('/src/content/blog/index.ts');
  const routes = getPrerenderRoutes();
  const baseHtml = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');
  if (baseHtml.includes('data-prerendered="true"')) {
    throw new Error(`${path.join(distDir, 'index.html')} is already prerendered; run "vite build" before prerendering.`);
  }

  for (const route of routes) {
    const seo = getPageSeo(route.path);
    let markup = await renderMarkup(
      React.createElement(StaticRouter, { location: route.path }, React.createElement(SiteApp)),
    );
    const priorityImage = route.path.replace(/\/+$/, '') === '/services'
      ? '/images/site/services-dubai-sunset.webp'
      : seo.image.replace(SITE_ORIGIN, '');
    markup = prioritizeImage(markup, priorityImage);

    const articleSlug = route.source === 'article' ? route.path.replace(/\/+$/, '').split('/').pop() : undefined;
    const article = articleSlug ? await loadBlogArticle(articleSlug) : undefined;
    if (articleSlug && !article) throw new Error(`${route.path}: article module src/content/blog/articles/${articleSlug}.ts is missing`);
    const jsonLd = JSON.stringify(getStructuredData(route.path, article?.details)).replace(/</g, '\\u003c');

    let html = replaceOnce(baseHtml, /<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`, '<title>');
    html = replaceOnce(
      html,
      /<link\s+rel="canonical"[^>]*>/i,
      `<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`,
      'link rel="canonical"',
    );
    html = replaceMeta(html, 'name="description"', `<meta name="description" content="${escapeHtml(seo.description)}" />`);
    html = replaceMeta(html, 'name="robots"', `<meta name="robots" content="${seo.noindex ? 'noindex,follow' : 'index,follow'}" />`);
    html = replaceMeta(html, 'name="keywords"', `<meta name="keywords" content="${escapeHtml(seo.keyword)}" />`);
    html = replaceMeta(html, 'property="og:type"', `<meta property="og:type" content="${seo.type}" />`);
    html = replaceMeta(
      html,
      'property="og:title"',
      `<meta property="og:title" content="${escapeHtml(seo.openGraphTitle ?? seo.title)}" />`,
    );
    html = replaceMeta(html, 'property="og:description"', `<meta property="og:description" content="${escapeHtml(seo.description)}" />`);
    html = replaceMeta(html, 'property="og:url"', `<meta property="og:url" content="${escapeHtml(seo.canonical)}" />`);
    html = replaceMeta(html, 'property="og:image"', `<meta property="og:image" content="${escapeHtml(seo.image)}" />`);
    html = replaceMeta(html, 'name="twitter:card"', '<meta name="twitter:card" content="summary_large_image" />');
    html = replaceMeta(html, 'name="twitter:title"', `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`);
    html = replaceMeta(html, 'name="twitter:description"', `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`);
    html = replaceMeta(html, 'name="twitter:image"', `<meta name="twitter:image" content="${escapeHtml(seo.image)}" />`);
    html = replaceOnce(
      html,
      /<script id="seo-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script id="seo-jsonld" type="application/ld+json">${jsonLd}</script>`,
      'script#seo-jsonld',
    );
    html = replaceOnce(
      html,
      '<div id="root" data-prerendered="false"></div>',
      `<div id="root" data-prerendered="true">${markup}</div>`,
      'div#root',
    );

    const outputPath = route.path === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.path.slice(1), 'index.html');
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, html);
  }

  await fs.writeFile(path.join(distDir, '404.html'), NOT_FOUND_HTML);
  // Apache/LiteSpeed (Hostinger): root .htaccess (normally copied from public/ by Vite) and per-folder cache files.
  const { writeDistHtaccess } = createRequire(import.meta.url)('./seo.cjs');
  const htaccessFiles = writeDistHtaccess(distDir);
  console.log(`Prerendered ${routes.length} public routes, a noindex 404 page and ${htaccessFiles.join(', ')}.`);
} finally {
  await vite.close();
}
