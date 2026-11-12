# Changelog: November 2026 cleanup

Summary of the project cleanup carried out in November 2026. Work was done in the working tree and was not committed as part of the cleanup.

## Content and git

- Resolved the unfinished git merge of branch `aman` into `work`: 85 articles combined.
- 3 duplicate-body articles were turned into 301 redirects (`BLOG_REDIRECTS`), leaving 82.
- 20 new articles were added from the Vol 7/8 PDFs, for a total of 102.

## Project structure

- Reorganised under `src/`: `pages`, `components`, `content`, `lib`, `styles`.
- Reports moved to `docs/` (the WordPress-migration-era ones are now in `docs/archive/`).
- The monolithic 10,900-line blog page was split into one module per article (`src/content/blog/articles/<slug>.ts`), loaded lazily.

## Bundle size

- Article JavaScript: 1,072 KB to about 23 KB plus one small chunk per article.
- Main bundle: 577 KB to 266 KB.

## SEO

- All public pages are now indexable. Previously 40 blog articles and 7 service pages were noindex and missing from the sitemaps.
- `sitemap-services` added to the sitemap index.
- Sitemap `lastmod` now comes from article `updated`/`date` or git history.
- Security headers, gzip/brotli compression and cache rules added (see SECURITY.md); favicons and web manifest added.
- `BlogPosting` JSON-LD now includes author and `dateModified`.
- Cleaned WordPress-export junk out of page titles and descriptions.
- A local 1200x630 share image replaces the dead WordPress `/wp-content` image.
- About page images are self-hosted.
- 43 broken related links fixed.
- Build-time SEO validation added (`scripts/seo.cjs --validate`).

## Assets

- Blog images: 177 MB of PNG to 13.4 MB of WebP, plus 5.6 MB of 800 px variants.
- Logo: 246 KB to 14 KB.
- Videos: 18 MB to 9 MB (renamed without spaces).

## Performance

- Navbar WebGL animates only on interaction, and the refraction effect is desktop-only.
- Background bars and blur are lighter on touch devices.
- The golden-visa shader and the testimonial carousel pause when offscreen.
- framer-motion removed from the main bundle.
- SSR warnings: 88 to 0.

## Cleanup

- Removed 40 unused npm packages, an unused component and about 3,400 lines of dead code.

## Open items

- Only 2 of the 20 new articles have custom covers (`100-percent-foreign-ownership-uae`, `uae-company-incorporation-documents-checklist`); the other 18 reuse existing images. Some matches (tech/AI, health) are weak. Ask the client for 1600x900 covers (see README, Images).
- The PDFs say regulatory details should be verified before publishing; have the 20 new articles reviewed.
- Possible double `page_view` from GTM plus gtag: check in Google Tag Manager.
- Some articles cover overlapping topics: three on Free Zone vs Mainland, several Golden Visa guides, and two on shareholder transfer. Consider merging or differentiating them (using `BLOG_REDIRECTS` for any merge).
