import { FilloutStandardEmbed } from '@fillout/react';
import { Image } from '@/components/ui/image';
import { COMPANY, IMAGES } from '@/lib/data';
import { ArrowUpRight, Clock3, Headset, ShieldCheck, Sparkles } from 'lucide-react';
import './contact.css';

const contactMethods = [
  {
    icon: '☎',
    label: 'CALL US',
    title: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/\s/g, '')}`,
  },
  {
    icon: '✉',
    label: 'EMAIL US',
    title: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
];

const trustItems = [
  {
    icon: Headset,
    title: 'Expert Guidance',
    description: 'Professional assistance for UAE business setup.',
  },
  {
    icon: Clock3,
    title: 'Quick Response',
    description: 'We aim to respond to enquiries promptly.',
  },
  {
    icon: ShieldCheck,
    title: 'Confidential & Secure',
    description: 'Your information is handled responsibly.',
  },
  {
    icon: Sparkles,
    title: 'End-to-End Support',
    description: 'Support throughout your business journey.',
  },
];

export default function ContactPage() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'THE EXCHANGE TOWER Business Bay Dubai'
  )}`;

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="section-eyebrow">GET IN TOUCH</span>
          <h1>
            Contact <span>Klay</span> Consultants
          </h1>
          <p>
            Have a question about setting up your business in the UAE? Our team is here to help you
            understand your options and guide you through the next steps.
          </p>
          <a href="#contact-form" className="contact-primary-btn">
            Let&apos;s Talk <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="contact-hero-image">
          <Image
            src="/services-dubai-sunset.jpg"
            alt="Dubai skyline at golden hour"
            fill
            priority
            sizes="(max-width: 700px) 90vw, 55vw"
          />
        </div>
      </section>

      <section className="contact-main" id="contact-form">
        <div className="contact-info">
          <span className="section-eyebrow">WE&apos;RE HERE TO HELP</span>
          <h2>Let&apos;s Start a Conversation</h2>
          <p className="contact-description">
            Reach out to our team through any of the following channels. We look forward to helping
            you with your UAE business journey.
          </p>

          <div className="contact-info-list">
            {contactMethods.map(({ icon, label, title, href }) => (
              <a key={label} href={href} className="contact-info-card">
                <span className="contact-icon" aria-hidden="true">{icon}</span>
                <span className="contact-info-copy">
                  <span className="contact-info-label">{label}</span>
                  <span className="contact-info-title">{title}</span>
                </span>
                <ArrowUpRight className="contact-arrow" size={17} aria-hidden="true" />
              </a>
            ))}

            <div className="contact-info-card">
              <span className="contact-icon" aria-hidden="true">⌖</span>
              <span className="contact-info-copy">
                <span className="contact-info-label">VISIT OUR OFFICE</span>
                <span className="contact-info-title">
                  THE EXCHANGE TOWER - Office No.2522, Business Bay, Dubai, UAE
                </span>
              </span>
            </div>
          </div>

          <div className="contact-location-image">
            <Image
              src={IMAGES.dubaiSkylineWide}
              alt="Dubai Business Bay skyline"
              fill
              sizes="(max-width: 700px) 88vw, 36vw"
            />
            <div className="location-overlay">
              <div>
                <span>OUR LOCATION</span>
                <h3>Business Bay, Dubai</h3>
              </div>
              <a href={directionsUrl} target="_blank" rel="noreferrer">
                Get Directions <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <span className="section-eyebrow">SEND AN ENQUIRY</span>
          <h2>Send Us a Message</h2>
          <p>Tell us a little about your requirements and our team will get back to you.</p>
          <div className="contact-fillout-embed">
            <FilloutStandardEmbed filloutId="tGKUNBZM4wus" dynamicResize />
          </div>
        </div>
      </section>

      <section className="contact-trust" aria-label="What to expect">
        {trustItems.map(({ icon: Icon, title, description }) => (
          <div className="trust-item" key={title}>
            <div className="trust-icon"><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
