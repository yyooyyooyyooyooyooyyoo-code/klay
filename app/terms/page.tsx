import { PageHero } from '@/components/sections/MarketingPages';
import { GlassCard } from '@/components/ui/glass-card';
import { COMPANY } from '@/lib/data';

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Website Terms" title="Terms of use" description="Important information about using the Klay Consultants website." />
      <section className="section-padding pb-16">
        <GlassCard className="mx-auto max-w-4xl space-y-5 p-7 sm:p-10">
          <h2 className="text-xl font-semibold text-black">Website information</h2>
          <p className="leading-relaxed text-black">
            The information on this website is provided for general informational purposes. It is
            not a substitute for advice tailored to your business, legal, tax or immigration
            circumstances. Requirements, fees and authority processes may change.
          </p>
          <h2 className="text-xl font-semibold text-black">Confirming requirements</h2>
          <p className="leading-relaxed text-black">
            Service descriptions, package details and indicative estimates are starting points for
            discussion and do not guarantee eligibility, approval, a particular processing time or
            final costs. Confirm current requirements with the relevant authority and obtain
            professional advice appropriate to your circumstances.
          </p>
          <h2 className="text-xl font-semibold text-black">Contact</h2>
          <p className="leading-relaxed text-black">
            If you have a question about information on this website, contact{' '}
            <a className="font-medium text-black underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>
        </GlassCard>
      </section>
    </>
  );
}
