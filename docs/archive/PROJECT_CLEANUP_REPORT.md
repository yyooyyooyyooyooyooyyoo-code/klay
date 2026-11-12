# Project Cleanup Report

## What changed

- Removed 187.4 MB of unused 1080p source video masters from `source-assets/videos/`. The active website uses the smaller 720p encodes in `public/videos/`.
- Removed 51 source modules not reachable from the active application entry (`main.tsx` -> `App.tsx`): unused UI primitives, an unused FAQ component, toast hook, and shader helper. Active route pages, sections, layouts, and their dependencies were retained.
- Kept build-tool configuration (`vite.config.ts`, `tailwind.config.ts`) even though they are not imported by application code; the tools load them directly.
- Removed the TypeScript incremental cache. `dist/` and `node_modules/` are excluded from the delivery ZIP.
- Fixed the Vite `/api` proxy target to match the Express server's default port (`3001`); development can start without a production build, while `npm start` checks that `dist/` exists.
- Improved the Express production server with an explicit production build check, API 404 handling, HTML revalidation caching, media caching, and a real 404 response.
- Rewrote the README with correct build, development, deployment, and project-structure instructions.

## Why the project was large

The main size problem was duplicate video material:
- Original 1080p masters: approximately 187.4 MB total.
- Optimized 720p versions used by the website: approximately 11.0 MB total.
- The original masters were stored inside the project even though the pages referenced only `/videos/...` assets under `public/`.

The uploaded ZIP was about 199.4 MB. The cleaned source ZIP is approximately 11.9 MB.

## How to keep the project small

1. Keep only web-ready media in `public/`; archive camera/master originals outside the website repository.
2. Use MP4 H.264 at 720p for short decorative background videos; use WebM as an optional alternative only if tested on target browsers.
3. Compress images to WebP/AVIF where hosting/browser support permits, and serve responsive sizes.
4. Do not include `node_modules/`, `dist/`, caches, test artifacts, or local environment files in source ZIPs.
5. Lazy-load below-the-fold video and images; keep poster images and avoid autoplaying multiple large videos at once.
6. Audit dependencies before removing them. The dependency manifest and lockfile are retained to avoid breaking the current build.

## Verification status

Static project inspection and cleanup were completed. JavaScript syntax checks and XML parsing for all sitemap files passed. A full dependency installation/build could not be completed in this environment because `npm ci` timed out. TypeScript validation is therefore pending; the global compiler cannot resolve `vite/client` without installed project dependencies.

Before release, run in an environment with npm registry access:

```bash
npm ci
npm run typecheck
npm run build
npm start
```

Then test the homepage, every route directly, one blog article, one service detail, `/api/health`, and a non-existent URL. Confirm the production host serves `dist/` and that redirects and DNS are correct.
