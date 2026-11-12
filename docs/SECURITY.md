# Security headers, compression and caching

Settings live in `scripts/seo.cjs` (generates the Hostinger `.htaccess`, production), `netlify.toml` (Netlify preview) and `server.js` (`npm start` on any Node host). They are kept in sync by hand: `SECURITY_HEADERS` and `cacheControlFor()` in `server.js` mirror the `[[headers]]` blocks in `netlify.toml` and the `.htaccess` template in `scripts/seo.cjs`. Change all three together.

## Security headers (sent on every response)

| Header | Value |
| --- | --- |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Permissions-Policy` | disables accelerometer, camera, display-capture, geolocation, gyroscope, hid, idle-detection, magnetometer, microphone, midi, payment, serial, usb and xr-spatial-tracking |

`server.js` also disables `X-Powered-By`. The Netlify site (every context; it is a preview only) additionally sends `X-Robots-Tag: noindex, nofollow` on every path; the Hostinger `.htaccess` never does.

`Permissions-Policy` blocks camera, microphone and geolocation for embedded Fillout iframes too. If a form ever needs one of them, re-allow it for the embed origin, for example `camera=(self "https://embed.fillout.com")`.

HTTP to HTTPS and `www` to apex redirects for production are in the generated Hostinger `.htaccess` (`scripts/seo.cjs`); `server.js` does the same when `CANONICAL_HOST` is set.

## Compression

`server.js` uses the `compression` package (gzip/brotli) for compressible responses such as HTML, JS, CSS, JSON, XML and SVG. Images and video are skipped. Netlify compresses on its own.

## Cache rules

| Path | Cache-Control |
| --- | --- |
| HTML pages (and other unhashed root files) | `public, max-age=0, must-revalidate` |
| `/assets/*` (hashed Vite output) | `public, max-age=31536000, immutable` |
| `/images/*`, `/videos/*` | `public, max-age=2592000` (30 days) |
| favicons, `icon-*.png`, `site.webmanifest` | `public, max-age=86400` (1 day) |
| `sitemap*.xml`, `robots.txt` | `public, max-age=3600` (1 hour) |

## Content-Security-Policy (not enabled yet)

No CSP is sent today. Roll the policy below out first as `Content-Security-Policy-Report-Only`, watch the browser console and reports for violations (Google Tag Manager, Fillout and zite.com forms with Cloudflare Turnstile, Google Fonts, Pexels images), then switch to an enforcing `Content-Security-Policy`.

```
default-src 'self'; script-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://www.google-analytics.com https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https://images.pexels.com https://*.google-analytics.com https://*.googletagmanager.com https://*.g.doubleclick.net https://*.google.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://*.google.com; frame-src https://*.fillout.com https://*.zite.com https://challenges.cloudflare.com https://www.googletagmanager.com; media-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self' https://*.fillout.com; frame-ancestors 'self'; upgrade-insecure-requests
```

To enable it, add the header to both `netlify.toml` (the `/*` block) and `SECURITY_HEADERS` in `server.js`.
