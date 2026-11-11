import fs from 'node:fs/promises';
import path from 'node:path';
import { PassThrough } from 'node:stream';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
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

function replaceMeta(html, selector, replacement) {
  const expression = new RegExp(`<meta\\s+${selector}[^>]*>`, 'i');
  if (!expression.test(html)) throw new Error(`Metadata tag not found: ${selector}`);
  return html.replace(expression, replacement);
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

    let stream;
    stream = renderToPipeableStream(element, {
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

try {
  const { SiteApp } = await vite.ssrLoadModule('/App.tsx');
  const { getPageSeo, getPrerenderRoutes, getStructuredData } = await vite.ssrLoadModule('/lib/seo.ts');
  const routes = getPrerenderRoutes();
  const baseHtml = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

  for (const route of routes) {
    const seo = getPageSeo(route.path);
    let markup = await renderMarkup(
      React.createElement(
        StaticRouter,
        { location: `${route.path}/`.replace('//', '/') },
        React.createElement(SiteApp),
      ),
    );
    const priorityImage = route.path === '/services' ? '/services-dubai-sunset.jpg' : seo.image;
    const priorityImageAttribute = `src="${escapeHtml(priorityImage)}"`;
    const priorityImageTag = markup.match(new RegExp(`<img\\b(?=[^>]*${priorityImageAttribute})[^>]*>`));
    if (priorityImageTag && !/\bfetchpriority=/i.test(priorityImageTag[0])) {
      markup = markup.replace(
        priorityImageTag[0],
        priorityImageTag[0].replace('<img', '<img fetchpriority="high"'),
      );
    }
    const jsonLd = JSON.stringify(getStructuredData(route.path)).replace(/</g, '\\u003c');
    let html = baseHtml
      .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`)
      .replace(
        /<link\s+rel="canonical"[^>]*>/i,
        `<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`,
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
    html = html.replace(
      /<script id="seo-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script id="seo-jsonld" type="application/ld+json">${jsonLd}</script>`,
    );
    html = html.replace(
      '<div id="root" data-prerendered="false"></div>',
      `<div id="root" data-prerendered="true">${markup}</div>`,
    );

    const outputPath = route.path === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.path.slice(1), 'index.html');
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, html);
  }

  await fs.writeFile(
    path.join(distDir, '404.html'),
    '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,follow"><title>Page not found | Klay Consultants</title><style>body{font-family:Arial,sans-serif;max-width:48rem;margin:10vh auto;padding:2rem;color:#102b42}a{color:#8b6a18}</style></head><body><main><h1>Page not found</h1><p>The page may have moved or the address may be incorrect.</p><a href="/">Return to Klay Consultants</a></main></body></html>',
  );
  console.log(`Prerendered ${routes.length} public routes and created a noindex 404 page.`);
} finally {
  await vite.close();
}
