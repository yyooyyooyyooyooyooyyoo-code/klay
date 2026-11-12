import { Image } from '@/components/ui/image';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GlassCard, GlassPanel } from '@/components/ui/glass-card';
import { Link } from '@/components/ui/link';
import { LiquidButton } from '@/components/ui/liquid-button';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { HomeHeroContactForm } from '@/components/sections/HomeHeroContactForm';
import { SetupCalculator } from '@/components/sections/SetupCalculator';
import { HomepagePackagesStack } from '@/components/sections/HomepagePackagesStack';
import { CircularServicesCarousel } from '@/components/sections/CircularServicesCarousel';
import {
  HOMEPAGE_ADVANTAGES,
  HOMEPAGE_PACKAGES,
  HOMEPAGE_PROCESS_STEPS,
  HOMEPAGE_SERVICES,
  HOMEPAGE_SETUP_FACTORS,
  IMAGES,
} from '@/lib/data';
import { ROUTES } from '@/lib/routes';

const contactUrl = ROUTES.contact;

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative isolate min-h-[min(780px,calc(100vh-5rem))] overflow-hidden py-16 sm:py-20 lg:flex lg:items-center lg:py-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src={IMAGES.heroSkyline}
            alt="Dubai waterfront and skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="section-padding mx-auto w-full max-w-[1440px]">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <ScrollReveal className="max-w-2xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-sm backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-gold-400" />
                Business Setup Consultants in Dubai
              </span>
              <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Shaping Ideas,{' '}
                <span className="text-gradient-gold">Transforming Businesses</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white sm:text-lg">
                Dreaming of starting a business in Dubai, UAE? Klay Consultants helps entrepreneurs
                and investors with company formation, trade licensing, free zone and mainland
                business setup, and ongoing business support. Get expert guidance to establish your
                business in the UAE.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LiquidButton
                  href={ROUTES.contact}
                  size="lg"
                  icon={<ArrowRight className="h-5 w-5" />}
                >
                  Book a Consultation
                </LiquidButton>
                <LiquidButton
                  href={ROUTES.services}
                  variant="outline-gold"
                  size="lg"
                >
                  Explore Our Services
                </LiquidButton>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120} className="relative mx-auto flex w-full justify-center lg:justify-end">
              <HomeHeroContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="services" className="section-padding py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mx-auto mb-8 max-w-4xl text-center sm:mb-12 lg:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">Our Services</p>
            <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Company Formation &amp; Business Setup
            </h2>
            <h3 className="mt-4 text-base font-semibold text-black sm:mt-5 sm:text-xl">
              Services in Dubai · UAE Business Formation
            </h3>
            <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-black">
              Set up your company in Dubai, UAE with experts who can handle approvals and paperwork
              and help guide you through any red tape.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <CircularServicesCarousel items={HOMEPAGE_SERVICES} />
          </ScrollReveal>
        </div>
      </section>

      <section id="packages" className="relative isolate py-16 sm:py-20 lg:py-24">
        <div className="section-padding mx-auto max-w-7xl">
          <ScrollReveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
              Business Setup Packages
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Choose the Right UAE Business Structure
            </h2>
          </ScrollReveal>
          <HomepagePackagesStack packages={HOMEPAGE_PACKAGES} bookingHref={contactUrl} />
        </div>
      </section>

      <section id="cost-estimate" className="section-padding py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <GlassPanel variant="light" className="relative overflow-hidden border border-gray-200 !bg-white p-7 shadow-glass-lg sm:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-ink">
                  <span className="h-2 w-2 rounded-full bg-gold-500" />
                  Instant UAE Setup Estimate
                </span>
                <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">
                  UAE Business Setup Packages and Costs
                </h2>
                <h3 className="mt-3 text-lg font-semibold text-black">
                  Estimate Your Company Setup Cost in the UAE
                </h3>
                <p className="mt-4 leading-relaxed text-black">
                  Setting up a company in the UAE doesn’t have a one-size-fits-all price. Your cost
                  depends on multiple factors like jurisdiction, business activity, visa requirements,
                  and structuring needs.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {HOMEPAGE_SETUP_FACTORS.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-3.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-gradient text-palette-gold">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-black">{title}</span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-black">{text}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>
            <div className="w-full">
              <SetupCalculator />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="why-klay" className="section-padding relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#EDFBE2]/40 via-white/25 to-transparent" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why Klay Consultants"
              title="Why Choose Klay Consultants?"
              description="Thoughtful guidance designed to help you make informed decisions at every step."
            />
          </ScrollReveal>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {HOMEPAGE_ADVANTAGES.map(({ number, icon: Icon, title, description, points, closing, emphasis }, index) => (
              <ScrollReveal key={number} delay={(index % 3) * 60}>
                <GlassCard className={`h-full border border-gray-200 !bg-white p-6 shadow-glass transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg sm:p-7 ${index === 2 ? 'sm:row-span-2' : ''}`}>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.14em] text-gold-ink">{number}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-gradient text-palette-gold">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-black">{title}</h3>
                  {description && <p className="mt-2 text-sm leading-relaxed text-black">{description}</p>}
                  {points && (
                    <ul className="mt-4 space-y-2.5">
                      {points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-black">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-palette-gold" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  {emphasis && (
                    <p className="mt-4 rounded-xl border border-gold-500/15 bg-gold-500/10 p-3 text-sm font-semibold leading-relaxed text-black">
                      {emphasis}
                    </p>
                  )}
                  {closing && <p className="mt-5 border-t border-navy-900/10 pt-4 text-sm font-semibold text-gold-ink">{closing}</p>}
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-padding py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">How It Works</p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
                Our Business Setup Process
              </h2>
            </div>
            <Link
              href={contactUrl}
              className="site-button inline-flex h-11 w-fit items-center justify-center gap-2 px-5 text-sm font-semibold"
            >
              Book a meeting <ArrowUpRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HOMEPAGE_PROCESS_STEPS.map(({ icon: Icon, title, description }, index) => (
              <ScrollReveal key={title} delay={(index % 3) * 60}>
                <article className="group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-glass transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold tracking-tight text-gold-ink-large">{String(index + 1).padStart(2, '0')}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-gradient text-palette-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-black">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black">{description}</p>
                  <Link
                    href={contactUrl}
                    className="site-button mt-5 inline-flex min-h-10 items-center gap-2 px-4 text-sm font-semibold"
                  >
                    Book Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
