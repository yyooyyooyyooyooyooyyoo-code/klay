import { PageHero } from '@/components/sections/MarketingPages';
import { GlassCard } from '@/components/ui/glass-card';
import { COMPANY } from '@/lib/data';

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy notice" description="How to contact Klay Consultants about information shared through this website." />
      <section className="section-padding pb-16">
        <GlassCard className="mx-auto max-w-4xl space-y-5 p-7 sm:p-10">
          <p className="leading-relaxed text-black">
            When you contact us, you may choose to share details such as your name, email address,
            phone number and information about your enquiry. The website contact form prepares an
            email in your own email application; it does not submit your details to a website server.
          </p>
          <h2 className="text-xl font-semibold text-black">Using your enquiry details</h2>
          <p className="leading-relaxed text-black">
            Information you send to us may be used to respond to your enquiry and discuss the services
            you requested. Please avoid sending sensitive personal information unless it is needed
            and you have agreed an appropriate way to share it with our team.
          </p>
          <h2 className="text-xl font-semibold text-black">Questions</h2>
          <p className="leading-relaxed text-black">
            For questions about an enquiry or information you have sent, contact us at{' '}
            <a className="font-medium text-black underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>
        </GlassCard>
      </section>
    </>
  );
}
