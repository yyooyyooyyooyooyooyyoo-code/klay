# Content guide: blog articles

Every article has two parts:

1. A **summary** in `src/content/blog/posts.ts` (the `BLOG_POSTS` array, newest first). It drives the blog listing, page metadata, sitemap and JSON-LD.
2. A **body** in `src/content/blog/articles/<slug>.ts`, loaded lazily (one small code-split chunk per article).

The article URL is `/blog/<slug>/` for new articles. Articles carried over from the old WordPress site (slugs listed in `src/lib/routes.ts`) are served at `/<slug>/`, and `/blog/<slug>` redirects there. The types are defined in `src/content/blog/types.ts`.

## Choosing a slug

- Lowercase, words separated by hyphens, no spaces or special characters: `uae-golden-visa-2026-eligibility-cost-application-guide`.
- Make it descriptive and keep it stable. Changing a slug later changes the URL, so you must add a redirect (see "Renaming or removing").
- The slug must be identical in the summary, the file name (`articles/<slug>.ts`) and any `/blog/<slug>` links pointing at it.

## Adding an article

### 1. Prepare the cover image

Name it in lowercase-kebab-case, drop the PNG/JPG into `public/images/blog/` and run `npm run images`. You get `name.webp` and `name-800.webp`. Use `/images/blog/name.webp` in the summary. Send covers at 1600x900.

### 2. Add the summary to `posts.ts`

Add an object at the top of `BLOG_POSTS` (newest first):

| Field | Required | Notes |
| --- | --- | --- |
| `slug` | yes | See above. |
| `title` | yes | Heading shown on the page and in listings. |
| `excerpt` | yes | One or two sentences for the listing card. |
| `date` | yes | Format `'11 Nov 2026'` (day, three-letter month, year). Used for `datePublished`, and as the sitemap lastmod when `updated` is not set. |
| `updated` | no | Same format. Set it when you materially edit an article; used for lastmod and `dateModified`. |
| `category` | yes | Free text: `'Blog'` for about half of the articles, others use topic names such as `'UAE Business Setup'`. |
| `image` | yes | `/images/blog/name.webp`. |
| `imageAlt` | no, recommended | Describes the image. |
| `metaTitle` | yes | Keep to about 60 characters (the build warns above 70). Must be unique across the site. |
| `metaDescription` | yes | Keep to about 160 characters (the build warns above 170). Must be unique across the site. |
| `focusKeyword` | no | Main search phrase. |

### 3. Create the body `articles/<slug>.ts`

The file default-exports a `BlogArticle`: `{ details, body }`.

`details` (all optional): `imageTitle`, `imageCaption`, `imageDescription`, `imageTags` (string array), `metaKeywords` (comma-separated string), `tags` (string array), `audience`.

`body` is one of two kinds.

**Long-form (structured)**: `{ kind: 'longform', ...LongFormArticle }`

| Field | Required | Notes |
| --- | --- | --- |
| `introduction` | yes | A string, or an array of paragraph strings. |
| `sections` | yes | Array of sections, see below. |
| `faqs` | yes | Array of `{ question, answer }` (may be empty). |
| `cta` | yes | Closing call-to-action text. The renderer appends a "Book a free consultation." link automatically, so do not repeat it. |
| `disclaimer` | no | Shown at the end. |
| `externalLinks` | no | Array of `{ href, label }`. |
| `relatedLinks` | yes | Array of `{ href, label }`; internal links use `/blog/<slug>`. |

Each section has a required `heading` and any of: `paragraphs` (string array), `list` (numbered), `bulletList`, `table` (`{ headers, rows }`), `paragraphsAfter` (paragraphs shown after the list, bullet list and table, before subsections), `subsections` (array of `{ heading, paragraphs, list?, bulletList? }`) and `misconceptions` (array of `{ claim, correction }`).

**Markdown**: `{ kind: 'markdown', markdown }`. Put the text in `articles/<slug>.md` and import it with Vite's `?raw` suffix (see `aml-compliance-in-the-uae-what-every-business-must-know.ts`). The renderer supports headings (`#` to `######`), paragraphs, bullet and numbered lists, pipe tables, and `**bold**`, `*italic*` and `` `code` `` inline.

### Minimal complete example

Summary, added at the top of `BLOG_POSTS` in `posts.ts`:

```ts
{
  slug: 'example-uae-business-checklist',
  title: 'Example UAE Business Checklist',
  excerpt: 'A short checklist of the points to confirm before applying for a UAE trade licence.',
  date: '11 Nov 2026',
  category: 'Blog',
  image: '/images/blog/example-uae-business-checklist.webp',
  imageAlt: 'Checklist on a desk in a Dubai office',
  metaTitle: 'Example UAE Business Checklist Before Licensing',
  metaDescription: 'Use this checklist to confirm your activities, jurisdiction, ownership and documents before applying for a UAE trade licence.',
  focusKeyword: 'UAE business checklist',
},
```

Body, saved as `src/content/blog/articles/example-uae-business-checklist.ts`:

```ts
import type { BlogArticle } from '../types';

const article: BlogArticle = {
  details: {
    imageTitle: 'UAE Business Checklist',
    imageCaption: 'Confirm the basics before you apply.',
    imageDescription: 'A checklist of items to confirm before applying for a UAE trade licence.',
    imageTags: ['UAE business checklist'],
    metaKeywords: 'UAE business checklist, UAE trade licence',
    tags: ['UAE business checklist', 'UAE trade licence'],
    audience: 'Founders planning a UAE company',
  },
  body: {
    kind: 'longform',
    introduction: 'Before applying for a trade licence, confirm a few basics so the application goes smoothly.',
    sections: [
      {
        heading: 'What to confirm first',
        paragraphs: ['Start with the points below.'],
        bulletList: ['Business activities', 'Jurisdiction', 'Ownership structure'],
      },
    ],
    faqs: [
      {
        question: 'Can I change my activities later?',
        answer: 'Often yes, but it usually needs an amendment and approvals, so plan activities carefully at the start.',
      },
    ],
    cta: 'Speak to Klay Consultants to review your plan before you apply.',
    disclaimer: 'This article is general information and not legal advice. Verify current requirements with the relevant authority.',
    relatedLinks: [
      { href: '/blog/uae-company-incorporation-process-2026', label: 'UAE company incorporation process 2026' },
    ],
  },
};

export default article;
```

### 4. Validate

Run `npm run build`. It type-checks, regenerates sitemaps and redirects, prerenders the page and runs the SEO validation. The build fails on a broken internal link (for example a `relatedLinks` entry pointing to a slug that does not exist), a missing or duplicate meta title/description, or a non-indexable page. Fix any reported error and rebuild. Title/description length warnings should be cleared too.

## Editing an article

Edit the body in `articles/<slug>.ts` (or its `.md`) and, if the meta text changed, the summary in `posts.ts`. Set `updated: '<date>'` on the summary so the sitemap lastmod and `dateModified` reflect the change. Run `npm run build`.

## Renaming or removing

When a slug changes, or an article is merged into another or deleted, the old URL must redirect so links and search rankings are not lost:

1. Remove the old summary from `BLOG_POSTS` and the old file from `articles/` (and its `.md`, if any).
2. Add `'old-slug': 'new-slug'` to `BLOG_REDIRECTS` at the bottom of `posts.ts`. The target must be a live article.
3. Update every `relatedLinks` entry that still points to `/blog/old-slug` (the build reports these as broken links).
4. Rename or remove the image files in `public/images/blog/` only if nothing else uses them.
5. Run `npm run build`. `public/_redirects` is regenerated automatically and applied by both Netlify and `server.js`.

## Related links

Write internal links as `/blog/<slug>` (no domain, no trailing slash); for legacy root-URL articles that path redirects automatically. Link only to existing articles; the build validates this. Aim for a few genuinely related articles per post.
