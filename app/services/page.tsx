import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Globe2 } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ServicePackageCard } from '@/components/ui/service-package-card';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { Link } from '@/components/ui/link';
import { Image } from '@/components/ui/image';
import { JURISDICTION_SERVICES, SERVICE_PACKAGES } from '@/lib/data';

const bookingHref = '/contact';

const heroServices = [
  {
    title: 'Company Formation',
    description: 'Build your UAE business on the right foundation.',
    href: '/services/mainland-company-setup',
    icon: Building2,
  },
  {
    title: 'Free Zone Solutions',
    description: 'Find the right jurisdiction for your plans.',
    href: '/services/free-zone-company-setup',
    icon: Globe2,
  },
  {
    title: 'Corporate Advisory',
    description: 'Get guidance tailored to your business goals.',
    href: '/contact',
    icon: BriefcaseBusiness,
  },
];

export default function ServicesPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative isolate overflow-hidden text-black">
      <section className="relative isolate flex min-h-[640px] items-center overflow-hidden rounded-b-[2rem] bg-[#082C4B] py-14 sm:min-h-[660px] sm:py-16 xl:min-h-[min(700px,calc(100svh-5rem))] xl:rounded-b-[3rem] xl:py-20">
        <Image
          src="/services-dubai-sunset.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          priority
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] xl:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,44,75,0.5)_0%,rgba(8,44,75,0.78)_55%,#082C4B_100%)] xl:bg-[linear-gradient(90deg,rgba(8,44,75,0.97)_0%,rgba(8,44,75,0.9)_38%,rgba(8,44,75,0.68)_67%,rgba(8,44,75,0.48)_100%)]"
        />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#D4AF37]/15 blur-[100px]" />

        <div className="section-padding relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,1.35fr)_minmax(380px,0.75fr)] xl:gap-16">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-white"
            >
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8C37A]/35 bg-[#082C4B]/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#E8C37A] backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#E8C37A] shadow-[0_0_14px_rgba(232,195,122,0.8)]" />
                Our Services
              </span>
              <h1 className="text-balance text-6xl font-extrabold leading-[1.08] tracking-[-0.035em] text-[#FFFFFF]">
                UAE Business Setup &amp;{' '}
                <span className="bg-gradient-to-r from-[#E8C37A] via-[#D4AF37] to-[#E8C37A] bg-clip-text text-transparent">
                  Corporate Services
                </span>{' '}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
                Explore our UAE company formation packages, free zone solutions, corporate advisory
                and business support services. Find the right option for your business goals with
                guidance from Klay Consultants.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <motion.div whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8C37A] to-[#D4AF37] px-6 py-3 text-sm font-bold leading-[1.2] text-[#000000] shadow-[0_8px_28px_rgba(212,175,55,0.24)] transition-shadow hover:shadow-[0_10px_34px_rgba(212,175,55,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8C37A]"
                  >
                    Book a Meeting <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
                  <Link
                    href="#packages"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold leading-[1.2] text-white backdrop-blur-sm transition-colors hover:border-[#E8C37A]/70 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8C37A]"
                  >
                    Explore Services <ArrowDown className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <div className="relative mx-auto w-full max-w-xl xl:ml-auto">
              <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-[#D4AF37]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/[0.12] p-3 shadow-[0_24px_80px_rgba(2,18,34,0.35)] backdrop-blur-xl sm:p-4">
                <div className="px-4 pb-3 pt-2 sm:px-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E8C37A]">
                    How we can help
                  </p>
                  <p className="mt-1 text-sm text-white">The right support for your next move.</p>
                </div>
                <div className="space-y-2">
                  {heroServices.map(({ title, description, href, icon: Icon }, index) => (
                    <motion.div
                      key={title}
                      initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.18 + index * 0.12 }}
                    >
                      <Link
                        href={href}
                        className="group flex min-h-[82px] items-center gap-4 rounded-2xl border border-white/10 bg-[#082C4B]/35 px-4 py-4 text-white transition-[transform,background-color,border-color] duration-300 hover:translate-x-1 hover:border-[#E8C37A]/45 hover:bg-white/[0.11] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E8C37A] sm:px-5"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E8C37A]/25 bg-[#D4AF37]/10 text-[#E8C37A] transition-colors group-hover:bg-[#D4AF37]/20">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-semibold text-[#FFFFFF]">{title}</span>
                          <span className="mt-1 block text-sm leading-snug text-white">{description}</span>
                        </span>
                        <ArrowUpRight
                          className="h-5 w-5 shrink-0 text-[#E8C37A] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <p className="px-4 pb-2 pt-4 text-center text-xs text-white sm:px-5">
                  Clear guidance. Thoughtful setup. UAE-wide support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="section-padding py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-palette-gold">Business setup packages</p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
              UAE Business Setup Packages
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-black">
              Explore packages and inclusions designed to support your UAE business setup.
            </p>
          </ScrollReveal>
          <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_PACKAGES.map((service, index) => (
              <ScrollReveal key={service.title} delay={(index % 3) * 65} className="h-full">
                <ServicePackageCard
                  number={String(index + 1).padStart(2, '0')}
                  title={service.title}
                  badge={service.badge}
                  features={service.features}
                  bookingHref={bookingHref}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="jurisdictions" className="section-padding relative isolate overflow-hidden bg-gradient-to-b from-[#EDFBE2]/25 via-white/15 to-transparent py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-9 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-palette-gold">Explore your options</p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Explore UAE Free Zones &amp; Business Jurisdictions
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-black">
                Explore jurisdiction-specific licenses, visas and support. Expand each card to view the listed items.
              </p>
            </div>
            <Link
              href="#packages"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-palette-gold"
            >
              Back to packages <ArrowRight className="h-4 w-4 -rotate-45" />
            </Link>
          </ScrollReveal>
          <div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
            {JURISDICTION_SERVICES.map((service, index) => (
              <ScrollReveal key={service.number} delay={(index % 3) * 55} className="h-full">
                <ServicePackageCard
                  number={service.number}
                  title={service.title}
                  features={service.features}
                  bookingHref={bookingHref}
                  expandable
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection layout="marquee" />
    </div>
  );
}
