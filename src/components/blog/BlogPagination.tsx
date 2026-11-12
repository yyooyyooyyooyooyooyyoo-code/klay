import { Link } from '@/components/ui/link';
import { getBlogPageRoute } from '@/lib/routes';

interface BlogPaginationProps {
  currentPage: number;
  pageCount: number;
}

const itemBase =
  'inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a68724]';
const itemIdle = `${itemBase} border-black/10 bg-white/70 text-black hover:border-palette-gold hover:text-gold-ink`;
const itemCurrent = `${itemBase} border-[#0C2D48] bg-[#0C2D48] text-white`;

/** Page numbers to show; long ranges collapse to first, last and the current page's neighbours. */
function visiblePages(currentPage: number, pageCount: number): (number | 'gap')[] {
  if (pageCount <= 9) return Array.from({ length: pageCount }, (_, index) => index + 1);
  const pages = [1, currentPage - 1, currentPage, currentPage + 1, pageCount]
    .filter((page, index, list) => page >= 1 && page <= pageCount && list.indexOf(page) === index)
    .sort((a, b) => a - b);
  return pages.flatMap((page, index) => (index > 0 && page - pages[index - 1] > 1 ? ['gap' as const, page] : [page]));
}

export function BlogPagination({ currentPage, pageCount }: BlogPaginationProps) {
  if (pageCount <= 1) return null;

  return (
    <nav aria-label="Blog pages" className="mt-12 sm:mt-16">
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {currentPage > 1 && (
          <li>
            <Link href={getBlogPageRoute(currentPage - 1)} rel="prev" className={itemIdle}>
              <span aria-hidden="true" className="mr-1.5">&larr;</span>
              Previous
            </Link>
          </li>
        )}
        {visiblePages(currentPage, pageCount).map((page, index) =>
          page === 'gap' ? (
            <li key={`gap-${index}`} aria-hidden="true" className="px-1 text-sm text-black/60">
              &hellip;
            </li>
          ) : (
            <li key={page}>
              <Link
                href={getBlogPageRoute(page)}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
                className={page === currentPage ? itemCurrent : itemIdle}
              >
                {page}
              </Link>
            </li>
          ),
        )}
        {currentPage < pageCount && (
          <li>
            <Link href={getBlogPageRoute(currentPage + 1)} rel="next" className={itemIdle}>
              Next
              <span aria-hidden="true" className="ml-1.5">&rarr;</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
