import { ArrowRight, Calendar, Instagram } from 'lucide-react';
import { lazy, Suspense, type ComponentType } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { LongFormArticleContent } from '@/components/blog/LongFormArticleContent';
import { MarkdownArticleContent } from '@/components/blog/MarkdownArticleContent';
import { PageCTA } from '@/components/sections/MarketingPages';
import { GlassCard } from '@/components/ui/glass-card';
import { Image } from '@/components/ui/image';
import { Link } from '@/components/ui/link';
import { BLOG_REDIRECTS, getBlogPost, loadBlogArticle, type BlogArticle, type BlogPostSummary } from '@/content/blog';
import { CONTACT_CHANNELS } from '@/lib/contact';
import { getBlogArticleRoute } from '@/lib/routes';
import { NotFoundPage } from '@/pages/NotFoundPage';

type ArticleViewProps = { post: BlogPostSummary };

// One lazy component per article so only the article being read is downloaded.
// During prerendering the server waits for it, so the full text is in the HTML.
const articleViews = new Map<string, ComponentType<ArticleViewProps>>();

function getArticleView(slug: string): ComponentType<ArticleViewProps> | undefined {
  const cached = articleViews.get(slug);
  if (cached) return cached;
  const pending = loadBlogArticle(slug);
  if (!pending) return undefined;
  const View = lazy(() =>
    pending.then((article) => ({
      default: ({ post }: ArticleViewProps) => <ArticleLayout post={post} article={article} />,
    })),
  );
  articleViews.set(slug, View);
  return View;
}

function trimSlash(path: string) {
  return path.replace(/\/+$/, '') || '/';
}

export default function BlogArticlePage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const { pathname } = useLocation();

  const redirectTarget = BLOG_REDIRECTS[slug];
  if (redirectTarget) return <Navigate to={getBlogArticleRoute(redirectTarget)} replace />;

  const post = getBlogPost(slug);
  const ArticleView = post ? getArticleView(post.slug) : undefined;
  if (!post || !ArticleView) return <NotFoundPage />;

  const canonicalPath = getBlogArticleRoute(post.slug);
  if (trimSlash(pathname) !== trimSlash(canonicalPath)) return <Navigate to={canonicalPath} replace />;

  return (
    <Suspense fallback={<ArticleLayout post={post} />}>
      <ArticleView post={post} />
    </Suspense>
  );
}

function ArticleLayout({ post, article }: { post: BlogPostSummary; article?: BlogArticle }) {
  const details = article?.details;
  const body = article?.body;

  return (
    <div className="relative z-[1]">
      <article className="section-padding pb-12 pt-20 sm:pt-24">
        <div className="mx-auto max-w-4xl">
          <Link href="/blog" className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-gold-ink">
            <ArrowRight className="h-4 w-4 rotate-180" />
            All articles
          </Link>
          {post.image && (
            <figure className="mt-3">
              <div className="overflow-hidden rounded-3xl bg-white/70">
                <Image
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  title={details?.imageTitle}
                  aria-describedby={details?.imageDescription ? 'article-image-description' : undefined}
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
              {details?.imageCaption && (
                <figcaption className="mt-2 text-center text-sm text-black/70">{details.imageCaption}</figcaption>
              )}
              {details?.imageDescription && (
                <span id="article-image-description" className="sr-only">{details.imageDescription}</span>
              )}
            </figure>
          )}
          <div className="mb-3">
            <span className="rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold text-gold-ink">{post.category}</span>
          </div>
          <h1 className="text-balance text-3xl font-bold leading-tight text-black sm:text-4xl">{post.title}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-black">
            <Calendar className="h-4 w-4" />
            {post.date}
          </div>
          {details?.tags && (
            <div className="mt-3 flex flex-wrap gap-2" aria-label="Article tags">
              {details.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-black/10 px-3 py-1 text-xs text-black">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <GlassCard className="mt-4 p-6 sm:p-10">
            {!body ? (
              <div className="space-y-4" aria-busy="true">
                <p className="text-lg leading-relaxed text-black">{post.excerpt}</p>
                <div className="h-4 w-3/4 animate-pulse rounded bg-black/10" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-black/10" />
              </div>
            ) : body.kind === 'markdown' ? (
              <MarkdownArticleContent markdown={body.markdown} />
            ) : (
              <LongFormArticleContent article={body} />
            )}
          </GlassCard>
          <div className="mt-5 flex justify-center">
            <a
              href={CONTACT_CHANNELS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-black transition-colors hover:border-palette-gold hover:text-gold-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a68724]"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              Follow us on Instagram
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </article>
      {body?.kind === 'markdown' && <PageCTA title="Need help with your UAE plans?" />}
    </div>
  );
}
