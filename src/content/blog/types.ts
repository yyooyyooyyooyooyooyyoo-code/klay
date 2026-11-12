/** Lightweight data shown in blog listings and used for page metadata. */
export interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  /** Publish date, e.g. '11 Nov 2026'. */
  date: string;
  /** Optional last-updated date in the same format; used for sitemap lastmod and dateModified. */
  updated?: string;
  category: string;
  /** Cover image path under /public, e.g. '/images/blog/dubai-executive-at-sunset.webp'. */
  image: string;
  imageAlt?: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword?: string;
}

export interface BlogArticleDetails {
  imageTitle?: string;
  imageCaption?: string;
  imageDescription?: string;
  imageTags?: readonly string[];
  metaKeywords?: string;
  tags?: readonly string[];
  audience?: string;
}

export type LongFormSection = {
  heading: string;
  paragraphs?: readonly string[];
  /** Numbered list. */
  list?: readonly string[];
  bulletList?: readonly string[];
  table?: { headers: readonly string[]; rows: readonly (readonly string[])[] };
  /** Paragraphs shown after the list/table (e.g. a closing remark below a bullet list). */
  paragraphsAfter?: readonly string[];
  subsections?: readonly {
    heading: string;
    paragraphs: readonly string[];
    /** Numbered list. */
    list?: readonly string[];
    bulletList?: readonly string[];
  }[];
  misconceptions?: readonly { claim: string; correction: string }[];
};

export type LongFormArticle = {
  /** One paragraph, or several paragraphs as an array. */
  introduction: string | readonly string[];
  sections: readonly LongFormSection[];
  faqs: readonly { question: string; answer: string }[];
  cta: string;
  disclaimer?: string;
  externalLinks?: readonly { href: string; label: string }[];
  relatedLinks: readonly { href: string; label: string }[];
};

export type BlogArticleBody =
  | ({ kind: 'longform' } & LongFormArticle)
  | { kind: 'markdown'; markdown: string };

/** Full article module: src/content/blog/articles/<slug>.ts */
export interface BlogArticle {
  details: BlogArticleDetails;
  body: BlogArticleBody;
}
