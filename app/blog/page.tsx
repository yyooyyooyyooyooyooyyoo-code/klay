import { BlogCard } from '@/components/ui/blog-card';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { BLOG_PREVIEW } from '@/lib/data';
import { isPublicRootPostSlug } from '@/src/config/routes';

const publishedArticles = BLOG_PREVIEW.filter((post) => isPublicRootPostSlug(post.slug));

export default function BlogPage() {
  return (
    <section className="section-padding py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-palette-gold">
            Insights &amp; Resources
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
            Business Setup Insights
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black sm:text-lg">
            Practical guides and updates to help you navigate business setup and residency options in the UAE.
          </p>
        </ScrollReveal>
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publishedArticles.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 70} className="h-full">
              <BlogCard {...post} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
