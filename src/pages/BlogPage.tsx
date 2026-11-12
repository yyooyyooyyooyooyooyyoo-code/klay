import { Navigate, useParams } from 'react-router-dom';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { BlogCard } from '@/components/ui/blog-card';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { BLOG_POSTS } from '@/content/blog';
import { BLOG_POSTS_PER_PAGE, ROUTES } from '@/lib/routes';
import { NotFoundPage } from '@/pages/NotFoundPage';

// Newest first; posts with the same date keep their order in posts.ts.
const publishedArticles = BLOG_POSTS
  .map((post, index) => ({ post, index, time: Date.parse(post.date) || 0 }))
  .sort((a, b) => b.time - a.time || a.index - b.index)
  .map(({ post }) => post);

const pageCount = Math.max(1, Math.ceil(publishedArticles.length / BLOG_POSTS_PER_PAGE));

export default function BlogPage() {
  // Undefined on /blog/; set on /blog/page/:page.
  const { page: pageParam } = useParams<{ page?: string }>();
  let currentPage = 1;
  if (pageParam !== undefined) {
    if (!/^[1-9]\d*$/.test(pageParam)) return <NotFoundPage />;
    currentPage = Number(pageParam);
    if (currentPage === 1) return <Navigate to={ROUTES.blog} replace />;
    if (currentPage > pageCount) return <NotFoundPage />;
  }

  const firstIndex = (currentPage - 1) * BLOG_POSTS_PER_PAGE;
  const pageArticles = publishedArticles.slice(firstIndex, firstIndex + BLOG_POSTS_PER_PAGE);

  return (
    <section className="section-padding py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
            Insights &amp; Resources
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
            Business Setup Insights
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black sm:text-lg">
            Practical guides and updates to help you navigate business setup and residency options in the UAE.
          </p>
          {currentPage > 1 && (
            <p className="mt-4 text-sm font-semibold text-gold-ink">
              Page {currentPage} of {pageCount}
            </p>
          )}
        </ScrollReveal>
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pageArticles.map((post, index) => (
            <ScrollReveal key={post.slug} delay={(index % 3) * 70} className="h-full">
              <BlogCard {...post} priority={index === 0} />
            </ScrollReveal>
          ))}
        </div>
        <BlogPagination currentPage={currentPage} pageCount={pageCount} />
      </div>
    </section>
  );
}
