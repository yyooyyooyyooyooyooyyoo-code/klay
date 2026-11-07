import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { Link } from '@/components/ui/link';

interface ServicePackageCardProps {
  number: string;
  title: string;
  features: string[];
  bookingHref: string;
  badge?: string;
  price?: string;
  pricingUnit?: string;
  image?: string;
  expandable?: boolean;
}

export function ServicePackageCard({
  number,
  title,
  image,
  features,
  bookingHref,
  badge,
  price,
  pricingUnit,
  expandable = false,
}: ServicePackageCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/85 bg-gradient-to-br from-white/90 via-white/80 to-[#EDFBE2]/55 p-5 shadow-[0_10px_28px_rgba(12,45,72,0.07)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(12,45,72,0.12)] sm:p-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-gradient text-xs font-bold tracking-wide text-palette-gold shadow-glass">
          {number}
        </span>
        {badge && (
          <span className="rounded-full border border-gold-500/30 bg-gold-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-black">
            {badge}
          </span>
        )}
      </div>

      {image && (
        <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-xl border border-white/80 bg-white/40">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold leading-snug text-black sm:text-xl">{title}</h3>
      {(price || pricingUnit) && (
        <p className="mt-2 text-sm font-medium text-black">
          {price}
          {price && pricingUnit ? ' ' : ''}
          {pricingUnit && <span className="text-black">{pricingUnit}</span>}
        </p>
      )}

      {expandable ? (
        <details className="group/details mt-5 border-t border-navy-900/10 pt-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-black outline-none transition-colors hover:text-palette-gold focus-visible:ring-2 focus-visible:ring-gold-500 [&::-webkit-details-marker]:hidden">
            <span>View {features.length} inclusions</span>
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open/details:rotate-180" />
          </summary>
          <ul className="mt-4 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-black">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-palette-gold" strokeWidth={2.5} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </details>
      ) : (
        <ul className="mt-5 flex-1 space-y-3 border-t border-navy-900/10 pt-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-black">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-palette-gold" strokeWidth={2.5} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        href={bookingHref}
        className="site-button mt-6 inline-flex min-h-11 items-center justify-center gap-2 px-5 text-xs font-semibold uppercase tracking-wide"
      >
        Book a Meet
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
