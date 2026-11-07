import { Link } from '@/components/ui/link';
import { PageHero } from '@/components/sections/MarketingPages';

export function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="Page not found"
        title="We couldn't find that page"
        description="The page may have moved or the address may be incorrect."
      />
      <section className="section-padding pb-16 text-center">
        <Link
          href="/"
          className="site-button inline-flex min-h-12 items-center justify-center px-6 text-sm font-semibold"
        >
          Return home
        </Link>
      </section>
    </>
  );
}
