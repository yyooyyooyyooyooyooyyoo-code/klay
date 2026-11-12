import { FilloutStandardEmbed } from '@fillout/react';
import { useEffect, useRef, useState } from 'react';

type LazyFilloutEmbedProps = {
  filloutId: string;
  /** When true (default) the iframe is only mounted once the box is within ~600px of the viewport. */
  lazy?: boolean;
  rootMargin?: string;
};

// Safety net: never keep the placeholder over the form if the iframe load event is missed.
const PLACEHOLDER_TIMEOUT_MS = 15000;

function FormLoadingPlaceholder({ overlay }: { overlay: boolean }) {
  // Same 256px height as Fillout's own initial box, so nothing shifts when the iframe mounts.
  return (
    <div
      className={
        overlay
          ? 'pointer-events-none absolute inset-x-0 top-0 flex h-64 flex-col justify-between bg-white p-4'
          : 'flex h-64 flex-col justify-between p-4'
      }
    >
      <div aria-hidden="true" className="flex flex-col gap-3">
        <span className="block h-3 w-1/3 rounded-full bg-[#E5E9E2] motion-safe:animate-pulse" />
        <span className="block h-10 w-full rounded-lg bg-[#EEF2EB] motion-safe:animate-pulse" />
        <span className="block h-3 w-1/4 rounded-full bg-[#E5E9E2] motion-safe:animate-pulse" />
        <span className="block h-10 w-full rounded-lg bg-[#EEF2EB] motion-safe:animate-pulse" />
      </div>
      <span role="status" className="block text-xs text-[#5F6B5A]">
        Loading form…
      </span>
    </div>
  );
}

/**
 * Fillout standard embed that renders a light skeleton until the form iframe has loaded.
 * With `lazy`, the iframe (and Fillout's network requests) only start when the box nears the
 * viewport. Server render always outputs the placeholder, so this is SSR/prerender safe.
 */
export function LazyFilloutEmbed({ filloutId, lazy = true, rootMargin = '600px 0px' }: LazyFilloutEmbedProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(!lazy);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shouldMount) return;
    const box = boxRef.current;
    if (!box || typeof IntersectionObserver === 'undefined') {
      setShouldMount(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(box);
    return () => observer.disconnect();
  }, [shouldMount, rootMargin]);

  useEffect(() => {
    const box = boxRef.current;
    if (!box || !shouldMount || loaded) return;
    // `load` does not bubble, but it does pass through ancestors in the capture phase.
    const onLoad = (event: Event) => {
      if (event.target instanceof HTMLIFrameElement) setLoaded(true);
    };
    box.addEventListener('load', onLoad, true);
    const timer = window.setTimeout(() => setLoaded(true), PLACEHOLDER_TIMEOUT_MS);
    return () => {
      box.removeEventListener('load', onLoad, true);
      window.clearTimeout(timer);
    };
  }, [shouldMount, loaded]);

  return (
    <div ref={boxRef} className="relative" aria-busy={!loaded}>
      {shouldMount ? <FilloutStandardEmbed filloutId={filloutId} dynamicResize /> : null}
      {!loaded ? <FormLoadingPlaceholder overlay={shouldMount} /> : null}
    </div>
  );
}
