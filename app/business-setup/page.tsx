'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Building2,
  CircleHelp,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { BusinessSetupEnquiryForm } from '@/components/sections/BusinessSetupEnquiryForm';
import { BusinessSetupProcess } from '@/components/sections/BusinessSetupProcess';
import { Link } from '@/components/ui/link';
import { COMPANY, IMAGES } from '@/lib/data';

const journeySteps = [
  {
    number: '01',
    category: 'PLAN',
    title: 'Define Your Business Activity',
    description:
      'Identify what your company will do, the products or services you plan to offer, and your intended markets. Your activity helps determine the appropriate licence and any specific approvals.',
  },
  {
    number: '02',
    category: 'CHOOSE',
    title: 'Select Your Business Structure',
    description:
      'Explore Mainland, Free Zone or Offshore structures. Compare their permitted activities, ownership rules, operating scope and suitability for your objectives.',
  },
  {
    number: '03',
    category: 'REGISTER',
    title: 'Choose and Register Your Trade Name',
    description:
      'Select a suitable company name and submit it for approval with the relevant authority, following applicable naming guidelines.',
  },
  {
    number: '04',
    category: 'APPROVALS',
    title: 'Complete Initial Approvals & Documents',
    description:
      'Prepare the required application, shareholder details and supporting documents. Obtain initial approval, and arrange the relevant company agreements and additional permissions where required.',
  },
  {
    number: '05',
    category: 'PREPARE',
    title: 'Arrange Your Business Location',
    description:
      'Identify the office, workspace or facility permitted for your chosen licence. Complete tenancy, facility or address requirements applicable to your setup.',
  },
  {
    number: '06',
    category: 'LAUNCH',
    title: 'Obtain Your Licence & Prepare to Operate',
    description:
      'Submit the final documentation, complete the required payments and obtain your business licence. Check whether immigration, establishment, tax, banking or other registrations apply before starting operations.',
  },
] as const;

const structures = [
  {
    number: '01',
    title: 'Mainland',
    href: '/services/mainland-company-setup',
    description:
      'Explore Mainland company formation for businesses seeking to operate across the UAE market, subject to the applicable licence, activity and regulatory rules.',
    Icon: Building2,
  },
  {
    number: '02',
    title: 'Free Zone',
    href: '/services/free-zone-company-setup',
    description:
      'Discover Free Zone formation options based on your business activity, licensing needs, chosen authority and operational requirements.',
    Icon: Layers3,
  },
  {
    number: '03',
    title: 'Offshore',
    href: '/services/offshore-company-setup',
    description:
      'Understand offshore company structures and their potential suitability for international business purposes, subject to jurisdictional restrictions.',
    Icon: Globe2,
  },
] as const;

const formationServices = [
  {
    number: '01',
    title: 'Free Zone Company Formation',
    description:
      'A flexible route for eligible businesses seeking a UAE presence through a free zone authority. Explore licensing options for consulting, professional services, trading and other permitted activities.',
    idealFor: 'Entrepreneurs, startups and international founders.',
    href: '/services/free-zone-company-setup',
    image: IMAGES.dubaiTwilight,
    alt: 'Dubai skyline at twilight',
  },
  {
    number: '02',
    title: 'Mainland Company Formation',
    description:
      'Establish a company under the relevant mainland licensing framework, with options based on your business activity and operating requirements.',
    idealFor: 'Businesses targeting UAE customers, local operations and wider commercial opportunities.',
    href: '/services/mainland-company-setup',
    image: IMAGES.meeting,
    alt: 'Business team discussing company formation',
  },
  {
    number: '03',
    title: 'Offshore Company Formation',
    description:
      'Explore suitable offshore structures for eligible international business purposes, including certain holding arrangements.',
    idealFor: 'Business owners seeking specific international structuring solutions.',
    href: '/services/offshore-company-setup',
    image: IMAGES.skylineAerial,
    alt: 'Aerial view of Dubai business districts',
  },
] as const;

const benefits = [
  {
    number: '01',
    title: 'Guidance Built Around You',
    description: 'Explore setup options shaped around your business goals, activity and budget.',
  },
  {
    number: '02',
    title: 'Clarity in Every Step',
    description: 'Understand requirements, relevant costs and processes before moving forward.',
  },
  {
    number: '03',
    title: 'Support Beyond Setup',
    description: "Explore relevant business services for your company's journey ahead.",
  },
  {
    number: '04',
    title: 'Practical, Not Generic',
    description: 'No one-size-fits-all advice. Just practical guidance and clearer decisions.',
  },
] as const;

function AnimatedSection({
  children,
  className,
  id,
  hero = false,
}: {
  children: ReactNode;
  className: string;
  id?: string;
  hero?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={reduceMotion ? false : { opacity: 0, y: hero ? 0 : 14 }}
      animate={hero && !reduceMotion ? { opacity: 1, y: 0 } : undefined}
      whileInView={!hero && !reduceMotion ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-8 max-w-3xl sm:mb-10 ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#426B3C]">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-black sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-3xl text-sm leading-6 text-[#333333] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function BusinessSetupPage() {
  return (
    <div className="business-setup-page bg-[#F8FAF6] text-[#171717]">
      <AnimatedSection hero className="bg-white px-5 pb-12 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:px-[6%] lg:pb-16 lg:pt-36">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 xl:grid-cols-[1fr_1fr] xl:gap-12">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.17em] text-[#426B3C]">
              Business Setup
            </p>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-black">
              UAE Company Formation
            </p>
            <h1 className="max-w-[660px] font-serif text-[clamp(2.25rem,4.2vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-black">
              Start Your UAE Business
              <span className="block">
                With <span className="text-[#426B3C]">Clarity &amp; Confidence</span>
              </span>
            </h1>
            <p className="mt-4 max-w-[650px] text-sm leading-6 text-[#333333]">
              Turning a business idea into a company starts with the right decisions. From choosing
              your business activity and company structure to completing registration and licensing,
              every step should align with your business goals.
            </p>
            <p className="mt-3 max-w-[650px] text-sm leading-6 text-[#333333]">
              Whether you plan to launch a new venture, expand internationally, or establish a
              presence in the UAE, understanding the setup process can help you plan with greater
              confidence.
            </p>
            <div className="mt-5 flex max-w-[610px] items-center gap-4 rounded-2xl border border-[#E5E9E2] bg-[#F8FAF6] px-4 py-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border-r border-[#B9C9AF] pr-4 font-serif text-3xl font-semibold text-[#426B3C]">
                K
              </span>
              <div>
                <h2 className="font-serif text-lg font-semibold text-black">
                  A More Informed Start
                </h2>
                <p className="mt-1 text-xs leading-5 text-[#333333]">
                  Understand your options, requirements and next steps before moving forward.
                </p>
              </div>
            </div>
          </div>

          <figure className="relative m-0 overflow-hidden rounded-[1.35rem] border border-[#E5E9E2] bg-[#EDFBE2]">
            <img
              src="/services-dubai-sunset.jpg"
              alt="Dubai skyline and contemporary UAE architecture at sunset"
              className="aspect-[4/3] w-full object-cover xl:aspect-[1.28/1]"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-xl border border-white/30 bg-[#0C2D48]/75 px-4 py-3 text-white">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D8E9CE]">
                Business in the UAE
              </span>
              <span className="mt-1 block font-serif text-base">A clearer way forward</span>
            </figcaption>
          </figure>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#F8FAF6] px-5 py-12 sm:px-8 sm:py-14 lg:px-[6%]">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Your Business Journey"
            title="How to Set Up a Business in the UAE"
            description="A structured overview of the typical company formation journey. The exact sequence and requirements depend on your chosen jurisdiction, business activity and legal structure."
          />
          <div className="relative">
            <div aria-hidden="true" className="absolute left-[3%] right-[3%] top-5 hidden h-px bg-[#8EAB7E] lg:block" />
            <ol className="relative grid gap-x-5 gap-y-7 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
              {journeySteps.map((step) => (
                <li key={step.number} className="relative border-t border-[#DDE6D7] pt-4 lg:border-0 lg:pt-0">
                  <div className="mb-4 flex items-center justify-between lg:justify-start lg:gap-3">
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#8EAB7E] bg-[#EDFBE2] font-serif text-sm font-semibold text-[#315D34]">
                      {step.number}
                    </span>
                    <span className="h-px flex-1 bg-[#DDE6D7] sm:hidden" />
                    <span className="text-[9px] font-bold tracking-[0.12em] text-[#426B3C]">
                      {step.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold leading-tight text-black">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#333333]">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-7 flex items-start gap-3 rounded-xl border border-[#DDE6D7] bg-white px-4 py-3.5 text-xs leading-5 text-[#333333]">
            <CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-[#426B3C]" aria-hidden="true" />
            <p>
              <strong className="font-semibold text-black">Important:</strong> These steps are a
              general guide, not a fixed process for every company. Requirements, documents,
              approvals and timelines vary by authority, activity and company structure.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-[6%]">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Explore Your Options"
            title="Which UAE Business Structure Fits Your Goals?"
            description="Start by understanding the differences between these company formation routes before choosing your direction."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {structures.map(({ Icon, ...structure }) => (
              <Link
                key={structure.number}
                href={structure.href}
                className="flex h-full flex-col rounded-2xl border border-[#E5E9E2] bg-white p-5 text-inherit no-underline shadow-[0_8px_24px_rgba(12,45,72,0.04)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#426B3C] sm:p-6 sm:last:col-span-2 xl:last:col-span-1"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-7 w-7 text-[#426B3C]" aria-hidden="true" />
                  <span className="font-serif text-xl font-semibold text-[#426B3C]">
                    {structure.number}
                  </span>
                  <span className="text-[9px] font-bold tracking-[0.13em] text-black">
                    BUSINESS SETUP
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-black">
                  {structure.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-[#333333]">{structure.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 border-t border-[#DDE6D7] pt-3 text-[10px] font-bold tracking-[0.1em] text-[#315D34]">
                  EXPLORE THIS STRUCTURE <ArrowUpRight className="h-4 w-4 text-[#426B3C]" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#EDFBE2] px-5 py-12 sm:px-8 sm:py-14 lg:px-[6%]">
        <div className="mx-auto max-w-[1440px] border-l-2 border-[#709260] pl-5 sm:pl-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#426B3C]">
            Built Around Your Goals
          </p>
          <h2 className="mt-3 max-w-4xl font-serif text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-5xl">
            Make Your Next Business Move a More Informed One
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#333333] sm:text-base">
            The right setup begins with understanding your vision, business activity, budget and
            long-term plans. A considered approach can help you identify relevant options and
            prepare for the requirements ahead.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#F8FAF6] px-5 py-12 sm:px-8 sm:py-14 lg:px-[6%]">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="UAE Business Formation"
            title="Company Formation and Business Setup Services in Dubai"
            description="Find the right way to set up your business. Explore formation routes based on your business activity, licensing needs and operational requirements."
          />
          <div className="space-y-5">
            {formationServices.map((service, index) => (
              <Link
                key={service.number}
                href={service.href}
                className="grid overflow-hidden rounded-2xl border border-[#E5E9E2] bg-white text-inherit no-underline shadow-[0_8px_24px_rgba(12,45,72,0.04)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#426B3C] lg:grid-cols-2"
              >
                <div className={`relative min-h-52 bg-[#EDFBE2] sm:min-h-64 lg:min-h-72 ${index % 2 ? 'lg:order-2' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className={`flex flex-col justify-center bg-white p-5 sm:p-7 lg:p-9 ${index % 2 ? 'lg:order-1' : ''}`}>
                  <span className="font-serif text-4xl font-semibold leading-none text-[#426B3C]">
                    {service.number}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-black sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#333333]">{service.description}</p>
                  <div className="mt-4 border-t border-[#DDE6D7] pt-3">
                    <p className="text-[9px] font-bold tracking-[0.16em] text-[#426B3C]">IDEAL FOR</p>
                    <p className="mt-1 text-sm leading-5 text-[#333333]">{service.idealFor}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.1em] text-[#315D34]">
                    EXPLORE SERVICE <ArrowUpRight className="h-4 w-4 text-[#426B3C]" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-[6%]">
        <div className="mx-auto grid max-w-[1440px] gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:gap-12">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#426B3C]">
              Why Work With Us
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-black sm:text-4xl">
              Why Choose <span className="block">Klay Consultants?</span>
            </h2>
            <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-[#315D34]">
              Your Business Goals. Our Guidance. One Clearer Path Forward.
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#333333]">
              Setting up a business in the UAE should feel exciting, not overwhelming. At Klay
              Consultants, we take the time to understand your vision, business activity and budget
              to help you explore the right setup options.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#333333]">
              From choosing between Mainland and Free Zone to navigating licensing, documentation
              and company formation, we help make complex decisions easier to understand.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#333333]">
              Our support goes beyond getting your business started. With guidance on relevant
              services such as banking assistance, accounting, VAT and Corporate Tax, we help you
              prepare for the journey ahead.
            </p>
          </div>
          <ol className="grid gap-0 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit.number} className="border-t border-[#DDE6D7] p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-serif text-2xl font-semibold text-[#426B3C]">{benefit.number}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#426B3C]" aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-serif text-lg font-semibold text-black">{benefit.title}</h3>
                <p className="mt-1 text-xs leading-5 text-[#333333]">{benefit.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#F8FAF6] px-5 py-12 sm:px-8 sm:py-14 lg:px-[6%]">
        <div className="mx-auto max-w-[1440px] border-y border-[#DDE6D7] py-8 sm:py-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#426B3C]">
            Our Approach
          </p>
          <h2 className="mt-3 max-w-4xl font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-black sm:text-5xl lg:text-6xl">
            No one-size-fits-all <span className="text-[#426B3C]">advice.</span>
          </h2>
          <div className="mt-5 h-px w-16 bg-[#709260]" />
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#333333] sm:text-base">
            Just practical guidance, clearer decisions and support built around your ambitions.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-[6%]">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#426B3C]">
            Klay / Business Setup
          </p>
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#333333]">
            Our Process — 04 Steps
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-black sm:text-4xl">
            A Clearer Way Forward
          </h2>
          <div className="mb-7 mt-5 max-w-2xl border-l-2 border-[#709260] pl-4 sm:mb-9 sm:pl-6">
            <h3 className="font-serif text-2xl font-semibold leading-tight text-black sm:text-3xl">
              From Business Idea <span className="block text-[#315D34]">to Business Launch.</span>
            </h3>
            <p className="mt-3 font-serif text-lg italic text-[#426B3C]">
              “A clear process. A more confident start.”
            </p>
            <p className="mt-2 text-sm leading-6 text-[#333333]">
              From your first idea to company registration, explore the key stages of your UAE
              business setup journey.
            </p>
          </div>
          <BusinessSetupProcess />
        </div>
      </AnimatedSection>

      <AnimatedSection id="business-enquiry" className="bg-[#EDFBE2] px-5 py-12 sm:px-8 sm:py-14 lg:px-[6%]">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-7 max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#426B3C]">
              Plan · Prepare · Proceed
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-black sm:text-4xl">
              Let&apos;s Discuss Your Business Setup
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#333333]">
              Tell us about your plans. Our team will help you understand the next steps for
              establishing your business in the UAE.
            </p>
          </div>
          <div className="grid items-start gap-6 xl:grid-cols-[0.8fr_1.2fr] xl:gap-8">
            <div className="rounded-2xl border border-[#E5E9E2] bg-white p-5 sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#426B3C]">
                Contact
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-black">
                We&apos;re here to help.
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#333333]">
                Share your business setup questions with our team.
              </p>
              <div className="mt-5 space-y-3 border-t border-[#DDE6D7] pt-4">
                <a href={`mailto:${COMPANY.email}`} className="flex min-h-10 items-center gap-3 text-sm text-black">
                  <Mail className="h-4 w-4 shrink-0 text-[#426B3C]" aria-hidden="true" />
                  {COMPANY.email}
                </a>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="flex min-h-10 items-center gap-3 text-sm text-black">
                  <Phone className="h-4 w-4 shrink-0 text-[#426B3C]" aria-hidden="true" />
                  {COMPANY.phone}
                </a>
                <p className="flex items-start gap-3 text-sm leading-5 text-[#333333]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#426B3C]" aria-hidden="true" />
                  {COMPANY.address}
                </p>
              </div>
              <img
                src={IMAGES.dubaiSkylineWide}
                alt="Dubai skyline"
                loading="lazy"
                className="mt-5 h-36 w-full rounded-xl object-cover"
              />
            </div>
            <BusinessSetupEnquiryForm />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
