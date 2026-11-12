# WordPress to React Migration Checklist

Generated: 2026-11-11

## Implemented in this workspace

- [x] Add an explicit inventory of the captured WordPress pages, post slugs, categories and tags.
- [x] Preserve verified core-page paths, titles, descriptions and canonical origin in the React site.
- [x] Route matching WordPress post slugs at their root-level URLs.
- [x] Add user-provided articles at their proposed root-level URLs and include them in the React blog and sitemap.
- [x] Exclude local-only articles from the public sitemap and apply noindex to those article routes.
- [x] Generate route-specific prerendered HTML and validate metadata, canonical tags, JSON-LD, sitemap entries and local links during the build.
- [x] Configure the captured GTM container and GA4 ID with SPA page-view tracking.

## Remaining before production cutover

- [ ] Obtain and import the 12 missing WordPress article bodies, images and source metadata; compare the 32 matching local article records against their WordPress originals.
- [ ] Implement the 50 published category/tag archive URLs with correct content, pagination and metadata, or provide an approved redirect/noindex disposition for each.
- [ ] Implement or agree on redirects/alternatives for the 2 published WordPress pages without a React route.
- [ ] Provide a durable WordPress export or CMS/API endpoint and credentials/configuration approach that remains available after the production domain changes.
- [ ] Confirm user-provided articles are published at their proposed URLs in WordPress before treating those routes as source-verified.
- [ ] Compare all source and React internal links, image URLs, canonical tags, structured data and backlink destinations; approve redirects only for verified retired URLs.
- [ ] Complete the business enquiry and contact form submission flows and test the full confirmation journey.
- [ ] Verify GTM, GA4 page views, Ads/Meta tags and conversion events in the deployed environment, including consent requirements.
- [ ] Test production direct loads, refreshes, HTTP status codes, 404/noindex behavior, redirects, robots.txt and every sitemap URL.
- [ ] Confirm hosting publishes the generated `dist/` output and does not leave WordPress rewrite, sitemap or robots rules in control.

## Release status

Migration is not ready for production cutover while source content, taxonomy routes, three published pages, form submission behavior and production tracking remain unresolved.
