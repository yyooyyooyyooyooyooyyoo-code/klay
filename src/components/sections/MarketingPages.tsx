import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { LiquidButton } from '@/components/ui/liquid-button';

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="section-padding pb-12 pt-16 sm:pb-16 sm:pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold-ink">
          <span className="h-2 w-2 rounded-full bg-gold-500" />
          {eyebrow}
        </div>
        <h1 className="text-balance text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-black sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

export function PageCTA({
  title = 'Ready to take the next step?',
  description = 'Talk with our team about your requirements and get clear guidance on the options available to you.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-padding py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-navy-gradient p-8 text-center shadow-glass-lg sm:p-12">
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white">{description}</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <LiquidButton href="/contact" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              Contact Our Team
            </LiquidButton>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className="site-button inline-flex min-h-[54px] items-center justify-center px-8 font-semibold"
            >
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-black">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-palette-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
