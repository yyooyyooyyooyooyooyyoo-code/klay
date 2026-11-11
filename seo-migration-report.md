# WordPress to React SEO Migration Report

Generated: 2026-11-11

## Scope and evidence

- URL inventory is based on the public WordPress REST API and sitemap snapshot reviewed during this migration.
- The published WordPress page inventory contains 10 pages; its sitemap includes 4 page URLs, 44 post URLs, 2 category URLs and 48 tag URLs (98 sitemap URLs total).
- A matching React route or slug is not evidence that the original WordPress article body, images, schema or metadata were preserved.
- No WPGraphQL integration is present in this repository; the public `/graphql` endpoint returned 404 during the source audit. The public REST API was reachable, but is not yet a configured content source for this app.

## Route coverage

- Published WordPress pages with a React route: 8/10; routes still missing: 2.
- Sitemap posts with a matching local slug and local article data: 25/44; matching content and metadata have not been compared against WordPress.
- Sitemap posts without local article data: 19/44.
- Category and tag archive routes not implemented: 50 (2 categories, 48 tags).
- WordPress sitemap URLs represented by a route or matching post slug: 29/98; 69 source sitemap URLs remain uncovered.
- 39 local article entries are not in the captured WordPress post sitemap; they are excluded from the public sitemap and marked noindex.
- 6 user-provided articles are included in the React sitemap but not verified as published in the captured WordPress sitemap.
- User-provided articles use their supplied bodies, SEO metadata, images and proposed root-level slugs; WordPress publication status is unverified.
- The migration inventory, including each verified source URL and implementation status, is in `seo-url-migration.json`.

## SEO and delivery

- Canonical URLs use the HTTPS apex origin `https://klayconsultants.com`.
- Core page titles and descriptions captured from the live source are preserved verbatim, including unusually long descriptions and source-generated prefixes. Lengths were not capped or rewritten.
- Article metadata, article body fidelity, image equivalence, structured-data parity, redirect requirements and backlink destinations have not been fully verified.
- The generated sitemap includes only the routes classified as public by the React route registry. Category/tag archives and missing article/page routes are not included.
- A route can be prerendered and still be missing source content; do not treat route generation as proof of content parity.

## Analytics, forms and release blockers

- The audited Google Tag Manager container `GTM-MHNJGSWX` and Google Analytics 4 measurement ID `G-NS77XMTC7B` are configured. SPA page-view collection is enabled; Ads/Meta tag firing and conversion events remain unverified after migration.
- The contact and lead-form user journeys have not been verified end to end. In particular, `BusinessSetupEnquiryForm` does not currently submit a lead.
- Production route behavior, 301 redirects, form submissions, cookie/consent behavior, Search Console and post-release analytics require verification on the deployed host.
- The React project does not have a CMS/API endpoint configured for retrieving the 20 missing article bodies or comparing the 24 local article entries with their WordPress source.
