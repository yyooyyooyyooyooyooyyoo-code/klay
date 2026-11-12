import type { BlogArticle } from './types';
import { BLOG_POSTS, BLOG_REDIRECTS } from './posts';

export { BLOG_POSTS, BLOG_REDIRECTS };
export type { BlogArticle, BlogPostSummary } from './types';

const articleModules = import.meta.glob<{ default: BlogArticle }>('./articles/*.ts');

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

/** Loads the full article for a slug (code-split: one small chunk per article). */
export function loadBlogArticle(slug: string): Promise<BlogArticle> | undefined {
  const load = articleModules[`./articles/${slug}.ts`];
  return load?.().then((module) => module.default);
}

