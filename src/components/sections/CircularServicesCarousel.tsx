import { useMotionValue, useReducedMotion, useSpring, motion } from 'framer-motion';
import type { ComponentType, PointerEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/components/ui/link';

type ServiceItem = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
};

function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 280, damping: 24 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 280, damping: 24 });
  const Icon = item.icon;

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    rotateX.set(y * -10);
    rotateY.set(x * 10);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24, rotateX: -8 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className="h-full"
    >
      <Link
        href={item.href}
        className="group flex h-full min-h-[236px] flex-col rounded-2xl border border-gray-200 bg-white p-5 text-gray-900 shadow-[0_12px_34px_rgba(12,45,72,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C88A2D] sm:min-h-[250px] sm:p-6 lg:min-h-[270px] lg:p-7"
      >
        <span className="flex items-start justify-between gap-3 sm:gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-[#C88A2D] sm:h-12 sm:w-12">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-right text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-500 sm:text-[10px] sm:tracking-[0.16em]">
            Our Services
          </span>
        </span>

        <span className="mt-6 block text-base font-semibold leading-snug tracking-tight text-gray-950 sm:mt-8 sm:text-lg">
          {item.title}
        </span>
        <span className="mt-2 block flex-1 text-sm leading-6 text-gray-600">
          {item.description}
        </span>
        <span className="mt-4 inline-flex items-center gap-2 border-t border-gray-200 pt-4 text-xs font-semibold text-gray-900 sm:mt-5">
          Learn more
          <ArrowUpRight
            className="h-4 w-4 text-[#C88A2D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </span>
      </Link>
    </motion.article>
  );
}

export function CircularServicesCarousel({ items }: { items: readonly ServiceItem[] }) {
  if (items.length === 0) return null;

  return (
    <div
      className="grid auto-rows-fr grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
      role="list"
      aria-label="Company formation and business setup services"
    >
      {items.map((item, index) => (
        <div key={`${item.href}-${item.title}`} role="listitem" className="h-full">
          <ServiceCard item={item} index={index} />
        </div>
      ))}
    </div>
  );
}
