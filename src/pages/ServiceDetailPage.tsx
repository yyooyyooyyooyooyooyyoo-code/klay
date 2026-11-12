import { useParams } from 'react-router-dom';
import { SERVICES } from '@/lib/data';
import { PageCTA, PageHero, FeatureList } from '@/components/sections/MarketingPages';
import { GlassCard } from '@/components/ui/glass-card';
import { NotFoundPage } from '@/pages/NotFoundPage';

export default function ServiceDetailPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const service = SERVICES.find((item) => item.slug === slug);
  if (!service) return <NotFoundPage />;

  return (
    <>
      <PageHero eyebrow="UAE Business Services" title={service.title} description={service.short} />
      <section className="section-padding pb-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <GlassCard className="p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-black">About this service</h2>
            <p className="mt-4 leading-relaxed text-black">{service.description}</p>
            <h3 className="mt-8 text-lg font-semibold text-black">Key benefits</h3>
            <div className="mt-4">
              <FeatureList items={service.benefits} />
            </div>
          </GlassCard>
          <GlassCard className="p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-black">What to expect</h2>
            <ol className="mt-5 space-y-4">
              {service.process.map((step, index) => (
                <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-black">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gold-gradient text-xs font-bold text-black">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </GlassCard>
        </div>
      </section>
      <section className="section-padding py-8">
        <div className="mx-auto max-w-6xl">
          <GlassCard className="p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-black">Information to prepare</h2>
            <p className="mb-5 mt-2 text-sm text-black">
              Requirements can vary by authority and application. These are common items to discuss during your consultation.
            </p>
            <FeatureList items={service.requirements} />
          </GlassCard>
        </div>
      </section>
      <PageCTA title={`Discuss ${service.title}`} />
    </>
  );
}
