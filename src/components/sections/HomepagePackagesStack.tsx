import { useEffect, useRef } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { Link } from '@/components/ui/link';

type Package = {
  name: string;
  badge?: string;
  features: readonly string[];
};

type HomepagePackagesStackProps = {
  packages: readonly Package[];
  bookingHref: string;
};

function fallAngle(progress: number) {
  const amount = Math.min(1, Math.max(0, progress));
  const landingPoint = 0.78;
  if (amount <= landingPoint) {
    const eased = amount / landingPoint;
    return -90 * eased * eased * eased;
  }

  const settle = (amount - landingPoint) / (1 - landingPoint);
  return -90 + 6 * Math.sin(Math.PI * settle) * (1 - settle);
}

export function HomepagePackagesStack({ packages, bookingHref }: HomepagePackagesStackProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const panels = Array.from(section.querySelectorAll<HTMLElement>('[data-package-panel]'));
    const cards = Array.from(section.querySelectorAll<HTMLElement>('[data-package-card]'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const update = () => {
      frame = 0;
      const desktop = window.matchMedia('(min-width: 1024px)').matches;
      if (!desktop || reducedMotion.matches) {
        cards.forEach((card) => { card.style.transform = 'none'; });
        return;
      }

      const viewportHeight = window.innerHeight;
      cards.forEach((card, index) => {
        const nextPanel = panels[index + 1];
        if (!nextPanel) {
          card.style.transform = 'none';
          return;
        }

        const nextPanelTop = nextPanel.getBoundingClientRect().top + window.scrollY;
        const progress = Math.min(
          1,
          Math.max(0, 1 - (nextPanelTop - window.scrollY) / viewportHeight),
        );
        card.style.transform = `rotateX(${fallAngle(progress)}deg)`;
      });
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    reducedMotion.addEventListener('change', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      reducedMotion.removeEventListener('change', scheduleUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative flex flex-col gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
      {packages.map((item, index) => (
        <div
          key={`${item.name}-${index}`}
          data-package-panel
          className="relative"
          style={{ zIndex: index + 1, perspective: '1400px' }}
        >
          <article
            data-package-card
            className="mx-auto grid w-full max-w-6xl gap-6 overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_14px_38px_rgba(12,45,72,0.1)] sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:p-10"
            style={{ transformOrigin: '50% 100%', backfaceVisibility: 'hidden', willChange: 'transform' }}
          >
            <div className="flex flex-col">
              <div className="mb-6 flex items-center lg:mb-auto">
                <span className="text-sm font-bold tracking-[0.16em] text-gold-ink">
                  {String(index + 1).padStart(2, '0')} / {String(packages.length).padStart(2, '0')}
                </span>
              </div>
              {item.badge ? (
                <span className="mb-4 inline-flex w-fit rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-gold-ink">
                  {item.badge}
                </span>
              ) : null}
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl lg:mt-4 lg:text-4xl">
                {item.name}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-black">
                Explore the package features and discuss how they align with your business setup requirements.
              </p>
              <Link
                href={bookingHref}
                className="site-button mt-6 inline-flex min-h-11 w-fit items-center justify-center gap-2 px-5 text-sm font-semibold lg:mt-8"
              >
                Book <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-black">
                Package features
              </p>
              <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-black">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold-500/30 bg-[#EDFBE2]/70">
                      <Check className="h-3 w-3 text-palette-gold" strokeWidth={2.5} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
