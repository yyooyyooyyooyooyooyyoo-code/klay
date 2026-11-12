import { useEffect, useRef, useState } from 'react';
import { FilloutStandardEmbed } from '@fillout/react';

/**
 * Performance: the Fillout iframe pulls ~90 requests / 2.6 MB (including large font files). The form
 * is mounted only once it reaches the viewport, or when a visitor taps/clicks the form area to open it.
 */
function useDeferredEmbed() {
  const [ready, setReady] = useState(false);

  return [ready, () => setReady(true)] as const;
}

export function HomeHeroContactForm() {
  const [embedReady, mountEmbed] = useDeferredEmbed();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (embedReady || typeof IntersectionObserver === 'undefined' || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          mountEmbed();
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [embedReady, mountEmbed]);

  /*
    Contrast: the card sits on the right of the hero, where the navy overlay fades to 45% and the
    skyline shows through. With the old bg-white/10 tint the card's backdrop reached about
    rgb(103,129,149) at its lightest, so the 12px gold eyebrow (2.4:1) and even the white/85 copy
    (3.4:1) failed WCAG AA. A navy/45 tint keeps the frosted glass but holds the lightest backdrop
    near rgb(53,84,108): gold #E8C37A is then 4.8:1+, white/85 6.3:1+, white 8:1+.
  */
  return (
    <div className="w-full max-w-[560px] rounded-[2rem] border border-white/25 bg-[#0C2D48]/45 p-5 shadow-[0_28px_70px_rgba(4,17,29,0.3)] backdrop-blur-xl sm:p-7">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E8C37A]">
          Get in touch
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Tell us about your plans
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-white/85">
          Share your details and the service you are interested in.
        </p>
      </div>

      {/*
        The Fillout embed starts 256px tall and grows to the form's height once the iframe loads,
        which pushed the whole hero around (CLS). Reserve the loaded height instead. Values were
        measured per embed width (726/695/675px) and rounded down at each range, so the box never
        ends up taller than the form and the look after load is unchanged. The same box is the
        placeholder until the embed is mounted, so deferring it shifts nothing.
      */}
      <div
        ref={containerRef}
        className="w-full min-w-0 min-h-[695px] min-[530px]:min-h-[675px] lg:min-h-[695px] min-[1200px]:min-h-[675px]"
        onPointerEnter={embedReady ? undefined : mountEmbed}
        onTouchStart={embedReady ? undefined : mountEmbed}
        onClick={embedReady ? undefined : mountEmbed}
        onKeyDown={(event) => {
          if (!embedReady && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            mountEmbed();
          }
        }}
        role={embedReady ? undefined : 'button'}
        tabIndex={embedReady ? undefined : 0}
        aria-busy={!embedReady}
      >
        {embedReady && <FilloutStandardEmbed filloutId="v3wLQqgVGhus" dynamicResize />}
      </div>
    </div>
  );
}
