# SEO Deployment and Search Console Guide

This repository builds a React + Vite replacement for `https://klayconsultants.com/`. The route inventory and generated reports describe a partial migration, not proof of full WordPress content parity. Do not cut over production until the outstanding items in [migration-checklist.md](./migration-checklist.md) are resolved or explicitly accepted.

## Current route and content status

- Captured WordPress sitemap inventory: 44 posts, 4 page URLs, 2 categories and 48 tags (98 URLs).
- Published WordPress REST API inventory: 10 pages. Seven have React page routes; `/thank-you/`, `/customer-cabinet/` and `/cost-calculator/` do not.
- Twenty sitemap posts have no local article data. Twenty-four have matching slugs and local data, but their original WordPress content and metadata have not been compared.
- The user-provided DIFC and ADGM will article is routed at its proposed root-level slug and included in the React sitemap; publication at that URL in WordPress is not verified.
- The user-provided inheritance and succession article is routed at its proposed root-level slug and included in the React sitemap; publication at that URL in WordPress is not verified.
- The user-provided AML compliance article is routed at its proposed root-level slug and included in the React sitemap; publication at that URL in WordPress is not verified.
- The user-provided UAE business bank account opening article is routed at its proposed root-level slug and included in the React sitemap; publication at that URL in WordPress is not verified.
- The user-provided ESR filing article is routed at its proposed root-level slug and included in the React sitemap; publication at that URL in WordPress is not verified.
- The user-provided UAE business setup compliance article is routed at its proposed root-level slug and included in the React sitemap; publication at that URL in WordPress is not verified.
- Category and tag archives are not implemented. Local-only articles are excluded from the public sitemap and marked noindex.
- No WPGraphQL integration is configured in this repository. A stable CMS export/API source is needed for the missing content and verification.
- The contact and lead-form submission paths, production redirects, and conversion tracking are not fully verified.

Generated build-time deliverables are `seo-url-migration.json`, `seo-migration-report.md`, `link-audit-report.md`, and `migration-checklist.md`. The build writes these files without overwriting `SEO_AUDIT.md`.

## Before deployment

1. Resolve or formally accept every open item in `migration-checklist.md`, especially missing WordPress content and form submissions.
2. Confirm the production hosting platform, deployment target and redirect configuration. This repository does not deploy automatically.
3. Run `npm run typecheck`, `npm run build` and `npm start`. Test the implemented paths directly, refresh nested paths, and verify unknown URLs return an actual 404 with `noindex`.
4. Confirm the host publishes `dist/` including route-specific HTML, `404.html`, `robots.txt` and the generated sitemap files.
5. Add only verified 301 redirects for retired source URLs; do not redirect unrelated pages to the homepage.
6. Confirm HTTPS and the apex hostname are canonical. Verify that preview deployments remain noindex and are absent from production sitemaps.

## Google Search Console

1. In Search Console, add a **Domain property** for `klayconsultants.com`.
2. Publish the DNS TXT verification value shown by Google through the business-owned DNS account. Do not commit verification tokens.
3. Submit `https://klayconsultants.com/sitemap.xml` under **Indexing → Sitemaps** after the production cutover.
4. Inspect the homepage, `/bussines-setup-page/`, `/services/`, `/contact-us/`, `/golden-visa/` and selected published posts. Confirm live HTML, canonical URL, status code and rendered content before requesting indexing.
5. Monitor **Page indexing** for missing pages, 404s, redirects, canonical conflicts and excluded URLs. Compare against `seo-url-migration.json`.
6. Review Core Web Vitals and search performance after field data accumulates; indexing and ranking outcomes are not guaranteed.

## Analytics and tracking

- The audited GTM container `GTM-MHNJGSWX` and GA4 measurement ID `G-NS77XMTC7B` are configured in the app. Keep access within business-owned Google accounts.
- Client-side page-view events are enabled. Verify actual GA4 collection after deployment and ensure the GTM configuration does not also create duplicate page views.
- Google Ads/Meta tag firing, conversion labels, lead attribution, cookie consent and privacy requirements have not been verified end to end.
- Test lead and contact submissions and their confirmation events in the deployed environment. The current business setup enquiry form does not submit a lead.

## External checks after release

- Test `robots.txt`, the sitemap index and each linked child sitemap for HTTP 200 and valid XML.
- Test HTTP and `www` variants and confirm a single redirect to the HTTPS apex hostname.
- Test direct navigation, refresh, status codes and canonical metadata for every migrated URL and each approved redirect.
- Test missing/unknown paths return HTTP 404 rather than a success-shaped SPA response.
- Run PageSpeed Insights and Rich Results Test on representative page and article routes.
- Verify external links, forms, telephone/email actions, analytics and conversion events in a browser; the static link audit does not test external hosts or client-side behavior.
