import { Image } from '@/components/ui/image';
import { LazyFilloutEmbed } from '@/components/ui/LazyFilloutEmbed';
// Styles live in ./ContactPage.css and are loaded with the main stylesheet (see src/main.tsx).

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-bg" aria-hidden="true">
          <Image
            src="/images/site/Man%20Overlooking%20Dubai%20Sunset.png"
            alt="Man checking his phone while overlooking Dubai sunset"
            fill
            priority
            className="contact-bg-img"
            sizes="100vw"
          />
        </div>

        <div className="contact-hero-container">
          <div className="contact-hero-left">
            <div className="contact-hero-content">
              <span className="section-eyebrow">GET IN TOUCH</span>
              <h1>
                Contact <span>Klay</span> Consultants
              </h1>
              <p>
                Have a question about setting up your business in the UAE? Our team is here to help you
                understand your options and guide you through the next steps.
              </p>
            </div>

            <div className="contact-form-card" id="contact-form">
              <div className="contact-fillout-embed">
                <LazyFilloutEmbed filloutId="tGKUNBZM4wus" lazy={false} />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
