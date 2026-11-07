# SEO Deployment and Google Search Console Guide

This guide applies to the React + Vite build in this workspace. The live domain showed plugin-generated WordPress sitemap/robots output during the 2026-11-06 audit. Confirm the hosting platform and production migration plan before deploying these generated files.

## Before deployment

1. Confirm the production build is intended to replace the current site at `https://klayconsultants.com/`; this repository does not deploy automatically.
2. Run `npm run typecheck`, `npm run build` and `npm start` locally. Test one page, one service, one blog article and an invalid URL directly.
3. Verify that the deployment publishes `dist/` including route-specific `index.html` files, `404.html`, `robots.txt` and all generated sitemaps.
4. Confirm the domain is configured with HTTPS and the apex hostname as the primary domain. Netlify redirect rules are included for HTTP and `www`; confirm these rules in the actual hosting account.
5. Confirm the existing live WordPress content URLs and backlinks are mapped before switching platforms. Add only verified 301 redirects for retired URLs; do not redirect unrelated pages to the homepage.
6. Keep deploy-preview noindex behavior enabled and ensure preview URLs are not included in production sitemaps.

## Google Search Console

1. In Search Console, add a **Domain property** for `klayconsultants.com`.
2. Copy the DNS TXT verification value shown by Google into the domain registrar/DNS provider. No verification token is committed in this project.
3. Wait for DNS propagation and use Search Console’s Verify action.
4. Submit `https://klayconsultants.com/sitemap.xml` under **Indexing → Sitemaps**.
5. Use **URL Inspection** for the homepage, `/business-setup/`, `/services/`, `/contact/`, `/golden-visa/` and selected published articles. Test live URL, inspect the crawled HTML and request indexing where appropriate.
6. Review **Page indexing** for 404s, redirects, excluded canonical URLs, and duplicate or alternate-page signals.
7. Review **Core Web Vitals** after enough field data accumulates; prioritize mobile LCP ≤ 2.5 seconds, INP ≤ 200 ms and CLS ≤ 0.1.
8. Track clicks, impressions, CTR, query groups and landing pages in **Performance → Search results**. Compare over time; rankings and indexing are not guaranteed.

## Google Analytics

- Create or select the correct Google Analytics 4 property and web data stream in the business-owned account.
- Add the verified Measurement ID (`G-XXXXXXXXXX`) through the organization’s approved tag-management or analytics setup. The ID is intentionally not fabricated or embedded here.
- Confirm the privacy notice and consent requirements for the jurisdictions served before enabling analytics cookies or advertising features.
- Test page-view collection across client-side route changes and avoid sending duplicate page views if Google Tag Manager is also used.

## External checks after release

- Test `https://klayconsultants.com/robots.txt`, `/sitemap.xml`, and each child sitemap for HTTP 200 and valid XML.
- Test HTTP and `www` variants and confirm a single redirect directly to the HTTPS apex URL.
- Test direct navigation and refresh on representative nested service and blog pages; unknown slugs should return HTTP 404 and `noindex`.
- Run PageSpeed Insights on mobile and desktop for the homepage, business setup, service detail and article pages.
- Run Google Rich Results Test for the organization/service and article pages; resolve parser errors and confirm marked-up information is visible.

## Known limitations

- Production DNS/hosting, Search Console verification, analytics property/ID and consent settings require business account access.
- Google indexing and rankings are determined by Google and are not guaranteed.
