import {
  ArrowRight,
  Banknote,
  Check,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ResilientImage } from '@/components/ui/resilient-image';
import { Link } from '@/components/ui/link';
import { IMAGES } from '@/lib/data';

const missionImage =
  'https://klayconsultants.com/wp-content/uploads/2026/03/Artboard-13@3x-819x1024.png';
const visionImage =
  'https://klayconsultants.com/wp-content/uploads/2026/03/Artboard-12@3x-819x1024.png';

const aboutVideos = [
  { title: 'USA', src: '/videos/USA%2002.mp4', poster: '/videos/posters/USA%2002.jpg' },
  { title: 'Italy', src: '/videos/Italy%2001.mp4', poster: '/videos/posters/Italy%2001.jpg' },
  { title: 'India', src: '/videos/IND%2001.mp4', poster: '/videos/posters/IND%2001.jpg' },
];

const process = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Understand',
    paragraphs: [
      'We start by understanding your business goals, target market, and expansion plans.',
      'This helps us identify the right direction before choosing jurisdiction or structure.',
    ],
  },
  {
    number: '02',
    icon: Layers3,
    title: 'Structure',
    paragraphs: ['We define the right setup for you:', 'Everything is aligned with how you plan to operate.'],
    points: ['Mainland, Free Zone, or Offshore', 'Business activity & ownership model'],
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Plan',
    paragraphs: ['We map the full setup process:', 'So there are no surprises later.'],
    points: ['Licensing requirements', 'Visa eligibility', 'Banking readiness', 'Compliance needs'],
  },
  {
    number: '04',
    icon: FileCheck2,
    title: 'Incorporate',
    paragraphs: ['We handle your company registration with the relevant UAE authorities.'],
    timing: 'Up to 4 working days. 24-hour setup available for urgent cases.',
  },
  {
    number: '05',
    icon: Banknote,
    title: 'Activate',
    paragraphs: ['We support everything required to make your business operational:'],
    points: ['Visa processing', 'Bank account alignment', 'Documentation setup'],
  },
  {
    number: '06',
    icon: ShieldCheck,
    title: 'Support',
    paragraphs: ['After setup, we continue to support you with:', 'Because setup is just the beginning.'],
    points: ['AML compliance', 'ESR filing', 'Business structuring for growth'],
  },
];

const editorialSections = [
  {
    eyebrow: 'OUR MISSION',
    title: 'Helping Businesses Start Right',
    image: missionImage,
    fallback: IMAGES.meeting,
    alt: 'Business professionals discussing plans in a modern workspace',
    paragraphs: [
      'Our mission is to help entrepreneurs and businesses establish and operate companies in the UAE through clear structuring, compliant incorporation, and practical advisory support.',
      'We aim to simplify the complexities of business setup by guiding clients through the right jurisdiction choices, correct activity selection, and operational alignment from the beginning.',
      'By integrating incorporation, banking alignment, visa processing, and compliance support, we help businesses build strong foundations that reduce regulatory risk and support sustainable growth.',
      'Our focus is not only on helping companies start but on helping them start correctly.',
    ],
  },
  {
    eyebrow: 'OUR VISION',
    title: 'A Trusted Partner for UAE Business Growth',
    image: visionImage,
    fallback: IMAGES.dubaiMarina,
    alt: 'Dubai skyline representing regional and global business opportunities',
    paragraphs: [
      'Our vision is to become a trusted advisory partner for businesses entering and operating in the UAE.',
      'We strive to build a reputation for clarity, reliability, and structured guidance in company formation and regulatory alignment across UAE jurisdictions.',
      'As the business environment continues to evolve, we aim to support entrepreneurs and organizations with practical insights that help them adapt, scale, and operate with confidence.',
      'Through consistent advisory support and value-driven guidance, we seek to contribute to the growth of businesses choosing the UAE as their base for regional and global expansion.',
    ],
  },
];

function StoryVideo({ title, src, poster }: (typeof aboutVideos)[number]) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!('IntersectionObserver' in window)) {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      aria-label={`${title} video`}
      className="aspect-[9/16] w-full rounded-xl bg-navy-900 object-cover"
      src={isNearViewport ? src : undefined}
      poster={poster}
      autoPlay={isNearViewport}
      muted
      loop
      playsInline
      controls
      preload="none"
    />
  );
}

export default function AboutPage() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-white/30 via-[#EDFBE2]/20 to-white/25 text-black">
      {editorialSections.map((section, index) => (
        <section
          key={section.eyebrow}
          className={`section-padding py-14 sm:py-16 lg:py-24 ${index === 0 ? 'bg-[#F2F6F9]/55' : ''}`}
        >
          <div className={`mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16 ${index === 0 ? '' : 'lg:[&>div:first-child]:order-2'}`}>
            <ScrollReveal delay={index * 80} className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -inset-3 rounded-[2.3rem] bg-gradient-to-br from-[#EDFBE2]/70 via-white/30 to-gold-400/10" />
              <div className="relative aspect-[4/5] max-h-[650px] overflow-hidden rounded-[2rem] border border-white/80 bg-[#EDFBE2]/45 shadow-[0_18px_48px_rgba(12,45,72,0.1)]">
                {index === 0 ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/videos/KLAY-VID-compressed.mp4"
                    poster="/services-dubai-sunset.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                  />
                ) : (
                  <ResilientImage
                    src={section.image}
                    fallbackSrc={section.fallback}
                    alt={section.alt}
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/25 via-transparent to-white/5" />
              </div>
              <div className="absolute -bottom-4 -right-3 h-16 w-16 rounded-2xl border border-gold-500/20 bg-[#EDFBE2]/70 shadow-sm backdrop-blur-xl sm:-right-5 sm:h-20 sm:w-20" />
            </ScrollReveal>
            <ScrollReveal delay={index * 100 + 80} className="relative">
              <div className="absolute -left-4 top-0 h-20 w-20 rounded-full bg-gold-400/10 blur-2xl" aria-hidden="true" />
              <div className="relative rounded-[1.75rem] border border-white/80 bg-white/70 p-6 shadow-[0_12px_36px_rgba(12,45,72,0.06)] backdrop-blur-xl sm:p-8 lg:p-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-palette-gold">
                  {section.eyebrow}
                </p>
                {index === 0 ? (
                  <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">
                    {section.title}
                  </h1>
                ) : (
                  <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">
                    {section.title}
                  </h2>
                )}
                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#000000] sm:text-base">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <div className="mt-7 h-px w-20 bg-gradient-to-r from-gold-500 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      <section className="section-padding py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-palette-gold">
              <span className="h-2 w-2 rounded-full bg-gold-500" />
              How We Work
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Our 6-D Process
            </h2>
          </ScrollReveal>

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="absolute bottom-8 left-12 top-8 w-px bg-gradient-to-b from-gold-500/60 via-navy-800/20 to-gold-500/60 sm:hidden" aria-hidden="true" />
            <div className="absolute left-[12%] right-[12%] top-[52px] hidden h-px bg-gradient-to-r from-gold-500/50 via-navy-800/20 to-gold-500/50 lg:block" aria-hidden="true" />
            {process.map(({ number, icon: Icon, title, paragraphs, points, timing }, index) => (
              <ScrollReveal key={number} delay={(index % 3) * 70} className="relative h-full">
                <article className={`relative h-full rounded-2xl border border-white/85 p-6 shadow-[0_10px_30px_rgba(12,45,72,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg sm:p-7 ${index % 2 === 0 ? 'bg-gradient-to-br from-[#EDFBE2]/65 via-white/80 to-white/70' : 'bg-white/80'}`}>
                  <div className="relative z-10 mb-5 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/35 bg-[#EDFBE2] text-sm font-bold text-black shadow-sm">
                      {number}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-gradient text-palette-gold shadow-glass">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-black">{title}</h3>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#000000]">
                    {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {points && (
                    <ul className="mt-4 space-y-2.5">
                      {points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-black">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-palette-gold" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  {timing && (
                    <p className="mt-4 rounded-xl border border-gold-500/20 bg-gold-500/10 p-3 text-sm font-medium leading-relaxed text-black">
                      {timing}
                    </p>
                  )}
                  {number === '04' && (
                    <p className="mt-3 text-[11px] leading-relaxed text-black">
                      Draft timing statement supplied for this page; confirm availability and processing requirements before publication.
                    </p>
                  )}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-12 sm:py-16 lg:py-20">
        <ScrollReveal className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-gradient p-7 shadow-glass-lg sm:p-10 lg:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(232,167,46,0.18),transparent_38%)]" aria-hidden="true" />
            <div className="absolute -bottom-28 -left-12 h-72 w-72 rounded-full bg-[#EDFBE2]/70 blur-3xl" aria-hidden="true" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div className="max-w-3xl">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-palette-gold">Build on a strong foundation</p>
                <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Let&apos;s Build Your UAE Business Foundation
                </h2>
                <p className="mt-5 max-w-2xl leading-relaxed text-white sm:text-lg">
                  Have a business idea or planning your next expansion? Connect with Klay Consultants
                  to discuss your business setup requirements and explore the right structure for your goals.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[220px] lg:flex-col">
                <Link
                  href="/contact"
                  className="site-button inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold"
                >
                  Book a Meeting <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="site-button inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold"
                >
                  Explore Our Services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="pointer-events-none absolute right-8 top-8 hidden h-20 w-20 rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-sm lg:block" aria-hidden="true" />
          </div>
        </ScrollReveal>
      </section>

      <section aria-labelledby="about-videos-heading" className="section-padding pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-palette-gold">
              Klay Consultants
            </p>
            <h2
              id="about-videos-heading"
              className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
            >
              Our Story in Motion
            </h2>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aboutVideos.map((video) => (
              <article
                key={video.src}
                className="overflow-hidden rounded-2xl border border-white/85 bg-white/70 p-3 shadow-[0_12px_36px_rgba(12,45,72,0.08)] backdrop-blur-xl"
              >
                <StoryVideo {...video} />
                <h3 className="px-2 pb-1 pt-4 text-base font-semibold text-black">
                  {video.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
