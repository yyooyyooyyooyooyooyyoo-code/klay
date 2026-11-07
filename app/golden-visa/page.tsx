'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  FileText,
  GraduationCap,
  Landmark,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import AdmitOneTicket from '@/components/AdmitOneTicket';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { LiquidButton } from '@/components/ui/liquid-button';
import { Link } from '@/components/ui/link';

const eligibilityCategories = [
  {
    id: 'investors',
    label: '01 — Investors',
    title: 'Investors (Real Estate & Business)',
    description:
      'Property investment, business ownership or structured portfolios can create a pathway to long-term residency when the underlying structure is aligned.',
    points: [
      'Property investment (typically AED 2 million+)',
      'Business ownership or company shares',
      'Structured investment portfolios',
    ],
    icon: Landmark,
  },
  {
    id: 'entrepreneurs',
    label: '02 — Entrepreneurs',
    title: 'Entrepreneurs',
    description:
      'Founders and owners of active businesses may qualify when their venture is properly positioned and documented.',
    points: [
      'Startup founders',
      'Owners of UAE-registered businesses',
      'Scalable or innovation-driven ventures',
    ],
    icon: BriefcaseBusiness,
  },
  {
    id: 'professionals',
    label: '03 — Skilled Professionals',
    title: 'Skilled Professionals',
    description:
      'Professionals in approved roles can qualify depending on the category, salary thresholds and supporting documentation.',
    points: [
      'Salary typically AED 30,000+',
      'Approved job roles (engineers, executives, etc.)',
      'Employment documentation and legal structure',
    ],
    icon: Users,
  },
  {
    id: 'students',
    label: '04 — Students & Graduates',
    title: 'Students & Graduates',
    description:
      'High-performing graduates may qualify through recognized university pathways when eligibility is met.',
    points: [
      'High-performing UAE or international graduates',
      'Recognized universities (top 100 / 500 lists)',
      'Academic records and supporting proof',
    ],
    icon: GraduationCap,
  },
  {
    id: 'talent',
    label: '05 — Specialized Talent',
    title: 'Specialized Talent',
    description:
      'Exceptional talent in fields such as science, medicine, media and creative industries may be considered under specific categories.',
    points: [
      'Doctors',
      'Scientists',
      'Creatives',
      'Influencers',
    ],
    icon: Stethoscope,
  },
  {
    id: 'nomination',
    label: '06 — Nomination-based',
    title: 'Nomination-Based Golden Visa UAE',
    description:
      'Some pathways are nomination-led and depend on profile positioning, supporting documents and authority review.',
    points: [
      'Government-backed nominations',
      'Requires strong profile positioning and documentation',
      'Outcome depends on structure and authority assessment',
    ],
    icon: Sparkles,
  },
];

const requirementGroups = [
  {
    id: 'investors',
    label: 'Investors',
    items: [
      'Valid passport',
      'Clean financial records',
      'Property valuation or business capital proof',
      'Supporting legal documentation',
      'Emirates ID & medical fitness',
      'Health insurance',
    ],
  },
  {
    id: 'professionals',
    label: 'Professionals',
    items: [
      'Valid passport',
      'Clean financial records',
      'Employment contract + salary proof',
      'Approved activity alignment',
      'Emirates ID & medical fitness',
      'Health insurance',
    ],
  },
  {
    id: 'entrepreneurs',
    label: 'Entrepreneurs',
    items: [
      'Valid passport',
      'Clean financial records',
      'Trade license and financials',
      'Ownership structure and legal alignment',
      'Emirates ID & medical fitness',
      'Health insurance',
    ],
  },
];

const costBreakdown = [
  { label: 'Government fees', value: 'AED 3,000 – AED 7,000+' },
  { label: 'Medical & Emirates ID', value: 'Additional charges' },
  { label: 'Legal & structuring fees', value: 'Varies' },
];

const investmentRoutes = [
  'AED 2 million property investment',
  'Business investment or ownership',
  'Salary-based eligibility',
];

const processSteps = [
  'Eligibility assessment',
  'Structuring (business / investment / employment)',
  'Document preparation',
  'Application submission',
  'Approval & Emirates ID issuance',
];

const rejectionReasons = [
  'Poor company structuring',
  'Weak or incomplete documentation',
  'AML or compliance misalignment',
  'Incorrect activity selection in trade license',
  'Unclear source of funds',
];

const advantagesList = [
  'Long-term stability (10 years)',
  'No local sponsor required',
  'Sponsor family members easily',
  'Freedom to live outside the UAE without losing residency (conditions apply)',
  'Business ownership flexibility',
  'Access to UAE banking and investment ecosystem',
];

const disadvantagesList = [
  'High entry threshold (investment or salary)',
  'Strict compliance checks',
  'Documentation-heavy process',
  'Not a citizenship pathway',
];

const familyBenefits = [
  'Sponsor spouse, children, and parents',
  'No age restriction for children in some cases',
  'Long-term security for dependents',
];

const comparisonRoutes = [
  {
    route: 'Investment',
    bestFor: 'Investors, property buyers',
    details: 'Typically relevant when capital or ownership structure is already in place and documents are aligned.',
  },
  {
    route: 'Salary-based',
    bestFor: 'Executives, professionals',
    details: 'A common route for eligible specialists, provided the role, salary and legal status fit the category.',
  },
  {
    route: 'Nomination-based',
    bestFor: 'Unique profiles',
    details: 'Often dependent on profile positioning, authority review and careful preparation of supporting evidence.',
  },
];

const differentiation = [
  {
    title: 'Lawyer-led process',
    text: 'Your application is handled by professionals who understand UAE immigration law, not just paperwork.',
  },
  {
    title: 'Structure before application',
    text: 'We align company setup, business activity, financial records and compliance framework before filing anything.',
  },
  {
    title: 'Risk mitigation',
    text: 'We identify issues early, including weak documentation, incorrect structuring and compliance gaps.',
  },
  {
    title: 'End-to-end advisory',
    text: 'From company formation to Golden Visa approval, the process is managed as one coordinated strategy.',
  },
];

const faqItems = [
  {
    question: 'What is the UAE Golden Visa?',
    answer:
      'The UAE Golden Visa is a long-term residency program for eligible investors, entrepreneurs, professionals and talented individuals, offering renewable residency without the need for a local sponsor.',
  },
  {
    question: 'Who can apply for Golden Visa UAE?',
    answer:
      'Eligibility varies by category and can include investors, entrepreneurs, skilled professionals, students or graduates, and recognized talent, subject to the applicable authority requirements and documentation.',
  },
  {
    question: 'Is the UAE Golden Visa valid for 10 years?',
    answer:
      'The program commonly supports renewable long-term residency, and the precise duration depends on the specific category and authority processes involved.',
  },
  {
    question: 'What is the minimum investment for property investors?',
    answer:
      'Requirements can vary, and property-related eligibility often depends on valuation, title deed documentation and the applicable conditions for the route being considered.',
  },
  {
    question: 'How much does the UAE Golden Visa cost?',
    answer:
      'Government fees, medical and Emirates ID charges, and legal or advisory costs are different, so it is best to review the specific route and supporting costs before making assumptions.',
  },
  {
    question: 'Can Golden Visa holders sponsor their family?',
    answer:
      'Family sponsorship is generally a key benefit of the program, but the specific rules and dependent conditions depend on the applicable regulations and circumstances.',
  },
  {
    question: 'What documents are required?',
    answer:
      'A typical application requires a valid passport, financial records, relevant supporting documents for the category, health insurance and the necessary legal paperwork for the chosen route.',
  },
  {
    question: 'Can a Golden Visa application be rejected?',
    answer:
      'Yes. Incomplete documentation, weak structure, non-alignment of records and compliance issues can create problems, which is why careful preparation matters.',
  },
  {
    question: 'What is the difference between Dubai and Abu Dhabi processing?',
    answer:
      'The overall eligibility is federal in character, but the application route and authority handling can differ by emirate and by the specific category.',
  },
  {
    question: 'How can I discuss my eligibility?',
    answer:
      'The best next step is to speak with an adviser to review your profile, category, documents and the most suitable route before filing anything.',
  },
];

function ResponsiveGoldenVisaTicket() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(741);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      if (entry) setWidth(Math.min(741, entry.contentRect.width));
    });
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="mx-auto w-full min-w-0 max-w-[741px]">
      <AdmitOneTicket
        name="GOLDEN VISA"
        presenter="KLAY CONSULTANTS"
        event="UAE RESIDENCY ADVISORY"
        venue="UAE"
        dates="ELIGIBILITY · STRUCTURE"
        stubText="GOLDEN"
        watermark=""
        width={width}
        texture={{
          engine: 'generative',
          colorBack: '#251a08',
          colorFront: '#d4af37',
          colorHighlight: '#f6df98',
          shape: 'warp',
          type: 'random',
          size: 0.5,
          colorSteps: 4,
          originalColors: false,
          scale: 1,
          rotation: 0,
          offsetX: 0,
          offsetY: 0,
          speed: 0.4,
        }}
      />
    </div>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  variant?: 'light' | 'dark';
};

function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  variant = 'light',
}: SectionHeaderProps) {
  const isDark = variant === 'dark';

  return (
    <div className={`mb-10 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
      {eyebrow ? (
        <div
          className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] ${
            isDark ? 'border-[#d4af37]/25 bg-[#d4af37]/10 text-[#E8C37A]' : 'border-[#d4af37]/25 bg-[#d4af37]/10 text-[#D4AF37]'
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-[#e8c37a]" />
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          isDark ? 'text-white' : 'text-[#000000]'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${isDark ? 'text-white' : 'text-[#000000]'}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function GoldenVisaPage() {
  const [selectedCategory, setSelectedCategory] = useState(eligibilityCategories[0].id);
  const [selectedRequirements, setSelectedRequirements] = useState(requirementGroups[0].id);

  const activeCategory = eligibilityCategories.find((category) => category.id === selectedCategory) ?? eligibilityCategories[0];
  const activeRequirements =
    requirementGroups.find((group) => group.id === selectedRequirements) ?? requirementGroups[0];

  return (
    <div className="golden-visa-page relative overflow-hidden bg-transparent text-[#000000]">
      <section className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_72%_45%,_rgba(212,175,55,0.12),_transparent_34%),linear-gradient(115deg,_#090a0c_0%,_#0c1b2d_48%,_#090a0c_100%)]">
        <div className="pointer-events-none absolute inset-0 flex items-end overflow-hidden" aria-hidden="true">
          {Array.from({ length: 15 }, (_, index) => (
            <span
              key={index}
              className="golden-visa-hero__bar"
              style={{
                height: `${30 + Math.abs(index - 7) * 10}%`,
                animationDelay: `${index * 0.1}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 mx-auto grid min-h-[min(760px,calc(100vh-5rem))] max-w-[1440px] items-center gap-10 px-5 py-14 sm:gap-12 sm:px-6 sm:py-20 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8 lg:py-24">
          <div className="min-w-0 max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E8C37A]">
              <span className="h-2 w-2 rounded-full bg-[#e8c37a]" />
              UAE Golden Visa · Residency Advisory
            </p>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              UAE Golden Visa
            </h1>
            <p className="mt-3 text-xl font-semibold leading-tight text-[#E8C37A] sm:text-2xl">
              Structure First. Apply with Confidence.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white sm:text-lg">
              Explore your potential UAE Golden Visa pathway with a clearer understanding of
              eligibility, documentation and next steps.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LiquidButton
                href="/contact"
                variant="gold"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Discuss Your Eligibility
              </LiquidButton>
              <LiquidButton href="/contact" variant="outline-gold" size="lg">
                Speak to Our Advisory Team
              </LiquidButton>
            </div>
            <p className="mt-5 max-w-xl text-xs leading-relaxed text-white">
              Eligibility, residency duration and approval depend on the applicable category,
              requirements and decisions of the relevant authorities.
            </p>
          </div>
          <ResponsiveGoldenVisaTicket />
        </div>
      </section>
      <main>
        <section className="bg-[#f8f1e3]/85 py-20 text-[#000000] sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">Structure first</p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Structure First. Apply with Confidence.
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-[#000000]">
                  Planning long-term residency in the UAE isn’t just about submitting a form. The Golden Visa UAE is a powerful pathway to 10-year residency, but approvals are not random. They are built on structure, documentation, and legal alignment.
                </p>
                <p className="text-lg leading-relaxed text-[#000000]">
                  At Klay Consultants, your Golden Visa UAE application is handled by lawyers, not agents. That changes everything.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/85 py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="What is the UAE Golden Visa?"
              title="What is the UAE Golden Visa?"
              description="The UAE Golden Visa is a long-term residency program that allows investors, entrepreneurs, professionals, and exceptional talent to live, work, and grow in the UAE without needing a local sponsor."
            />

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6 text-[#000000]">
                <p className="text-lg leading-relaxed text-[#000000]">
                  Unlike standard visas, it offers:
                </p>
                <ul className="space-y-4">
                  {['10-year renewable residency', 'Full business ownership', 'Family sponsorship (spouse, children, parents)', 'Stability for long-term planning'].map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-2xl border border-[#d9dfe6] bg-[#f6f8fb] p-4">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#0c2d48] text-[#FFFFFF]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-base font-medium text-[#000000]">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-[28px] border border-[#d4af37]/20 bg-[linear-gradient(135deg,_rgba(212,175,55,0.07),_rgba(12,45,72,0.02))] p-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#D4AF37]">SEO Focus</p>
                  <p className="mt-3 text-xl font-semibold text-[#000000]">If you’re asking “what is Golden Visa UAE?”</p>
                  <p className="mt-3 text-base leading-relaxed text-[#000000]">
                    The UAE Golden Visa is a long-term residency program for eligible investors, entrepreneurs, professionals, and talented individuals, offering 5 to 10 years of renewable residency without the need for a local sponsor. This is not just a visa. It’s a residency strategy.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -left-12 top-10 h-28 w-28 rounded-full bg-[#d4af37]/20 blur-3xl" />
                <div className="relative rounded-[32px] border border-[#d4af37]/25 bg-[linear-gradient(145deg,_#0d1b2a,_#102b41_50%,_#071420)] p-6 shadow-[0_30px_80px_rgba(8,14,23,0.24)]">
                  <div className="rounded-[24px] border border-[#d4af37]/20 bg-[linear-gradient(135deg,_rgba(212,175,55,0.16),_rgba(255,255,255,0.08))] p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">Residency</p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">Long-term platform</h3>
                      </div>
                      <div className="rounded-full border border-[#f3d892]/20 bg-[#d4af37]/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#E8C37A]">UAE</div>
                    </div>

                    <div className="space-y-3 text-sm text-white">
                      {['Renewable residency', 'Business ownership access', 'Family sponsorship', 'Structured long-term planning'].map((item) => (
                        <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/3 px-3 py-3">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d4af37] text-[#000000]">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f7fb]/85 py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Who can apply?"
              title="Who Can Apply for Golden Visa UAE?"
              description="Eligibility is not one-size-fits-all. The UAE Golden Visa categories include:"
            />

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-3">
                {eligibilityCategories.map((category) => {
                  const Icon = category.icon;
                  const isActive = selectedCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex w-full items-start gap-4 rounded-[24px] border p-4 text-left transition-all ${
                        isActive
                          ? 'border-[#d4af37] bg-[#0c2d48] text-white shadow-[0_20px_45px_rgba(12,45,72,0.18)]'
                          : 'border-[#dfe6ee] bg-white text-[#000000] hover:border-[#d4af37]/60'
                      }`}
                    >
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${isActive ? 'border-[#d4af37]/40 bg-[#d4af37]/12 text-[#E8C37A]' : 'border-[#0c2d48]/10 bg-[#f5f7fa] text-[#000000]'}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${isActive ? 'text-[#E8C37A]' : 'text-[#000000]'}`}>
                          {category.label}
                        </p>
                        <p className="mt-2 text-lg font-semibold">{category.title}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-[#dfe6ee] bg-white p-6 shadow-[0_24px_60px_rgba(12,45,72,0.07)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28 }}
                    className="h-full"
                  >
                    <div className="mb-5 inline-flex items-center rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                      {activeCategory.label}
                    </div>
                    <h3 className="text-2xl font-semibold text-[#000000] sm:text-3xl">{activeCategory.title}</h3>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-[#000000]">{activeCategory.description}</p>
                    <div className="mt-6 space-y-3">
                      {activeCategory.points.map((point) => (
                        <div key={point} className="flex items-start gap-3 rounded-2xl border border-[#edf2f7] bg-[#f8fafc] p-3.5">
                          <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#0c2d48] text-[#FFFFFF]">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-base text-[#000000]">{point}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 rounded-2xl border border-[#d4af37]/20 bg-[#f7f0db] p-4 text-sm leading-relaxed text-[#000000]">
                      Important: Eligibility alone doesn’t guarantee approval. Structuring does.
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0d1b2a]/95 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Golden Visa requirements"
              title="Golden Visa UAE Requirements"
              description="To qualify, you typically need:"
              align="left"
              variant="dark"
            />

            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="space-y-3">
                {requirementGroups.map((group) => (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => setSelectedRequirements(group.id)}
                    className={`w-full rounded-[20px] border px-4 py-4 text-left transition-all ${
                      selectedRequirements === group.id
                        ? 'border-[#d4af37] bg-[#d4af37]/10 text-white'
                        : 'border-white/10 bg-white/4 text-white hover:border-white/25'
                    }`}
                  >
                    <span className="text-base font-semibold">{group.label}</span>
                  </button>
                ))}
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/4 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeRequirements.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.26 }}
                  >
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/12 text-[#E8C37A]">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[#D4AF37]">Applicant type</p>
                        <h3 className="mt-1 text-2xl font-semibold text-white">{activeRequirements.label}</h3>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {activeRequirements.items.map((item) => (
                        <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0b1520] p-3.5">
                          <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#d4af37] text-[#000000]">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-base text-white">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 rounded-2xl border border-[#d4af37]/25 bg-[#d4af37]/10 p-4 text-sm leading-relaxed text-[#E8C37A]">
                      Important: Missing alignment between these documents is one of the biggest reasons for rejection.
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f1e3]/85 py-20 text-[#000000] sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Cost & investment"
              title="Golden Visa UAE Cost & Investment"
              description="Let’s address the question everyone asks: “How much does UAE Golden Visa cost?”"
            />

            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[30px] border border-[#d4af37]/20 bg-white p-6 shadow-[0_18px_48px_rgba(12,45,72,0.05)]">
                <h3 className="text-2xl font-semibold text-[#000000]">Typical cost breakdown</h3>
                <div className="mt-6 space-y-3">
                  {costBreakdown.map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-4 rounded-2xl border border-[#edf2f7] bg-[#f7fafc] p-4">
                      <span className="text-base font-medium text-[#000000]">{item.label}</span>
                      <span className="text-sm font-semibold text-[#D4AF37]">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-[#d4af37]/20 bg-[#f6f0dd] p-4 text-base leading-relaxed text-[#000000]">
                  You may have seen “23 lakh Golden Visa UAE” claims. These are usually tied to structured investment or nomination pathways, not direct government pricing. This is where most people get misled.
                </div>
              </div>

              <div className="rounded-[30px] border border-[#d4af37]/20 bg-[linear-gradient(145deg,_#0d1b2a,_#0f2e42_50%,_#0d1b2a)] p-6 text-white shadow-[0_20px_60px_rgba(12,45,72,0.12)]">
                <h3 className="text-2xl font-semibold">Investment routes</h3>
                <div className="mt-6 space-y-4">
                  {investmentRoutes.map((route, index) => (
                    <div key={route} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/4 p-3.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4af37] text-sm font-semibold text-[#000000]">{index + 1}</span>
                      <span className="text-base leading-relaxed text-white">{route}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 rounded-2xl border border-[#d4af37]/25 bg-[#d4af37]/10 p-4 text-sm leading-relaxed text-[#E8C37A]">
                  Government fees, medical and Emirates ID charges, legal or advisory fees, and investment capital requirements are distinct. They should not be treated as one combined cost.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/85 py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Process"
              title="How to Apply for Golden Visa UAE"
              description="Here’s the simplified process:"
            />

            <div className="relative">
              <div className="absolute left-5 top-8 hidden h-[calc(100%-3rem)] w-px bg-[#d4af37]/40 lg:block lg:left-1/2" />
              <div className="grid gap-5 lg:grid-cols-2">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className={`relative rounded-[28px] border border-[#e8edf3] bg-[#f8fafc] p-5 shadow-[0_12px_40px_rgba(12,45,72,0.04)] lg:p-6 ${index % 2 === 0 ? 'lg:translate-y-8' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0c2d48] text-lg font-semibold text-[#FFFFFF]">
                        0{index + 1}
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[#D4AF37]">Step {index + 1}</p>
                        <h3 className="mt-1 text-xl font-semibold text-[#000000]">{step}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="mt-10 text-center text-lg leading-relaxed text-[#000000]">
              Sounds simple. It isn’t. Most delays happen in Step 2.
            </p>
          </div>
        </section>

        <section className="bg-[radial-gradient(ellipse_at_72%_45%,_rgba(212,175,55,0.12),_transparent_34%),linear-gradient(115deg,_#090a0c_0%,_#0c1b2d_48%,_#090a0c_100%)] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Risk awareness"
              title="Common Reasons for Golden Visa Rejection"
              description="Potential documentation or compliance concerns where appropriate."
              align="left"
              variant="dark"
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {rejectionReasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-[26px] border border-white/10 bg-white/4 p-5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/12 text-[#E8C37A]">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <p className="text-lg font-semibold">{reason}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-[#d4af37]/20 bg-[#d4af37]/10 p-5 text-base leading-relaxed text-[#E8C37A]">
              This is why applications handled like paperwork often fail.
            </div>
          </div>
        </section>

        <section className="bg-[#f7f8fa]/85 py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Advantages"
              title="Advantages of Golden Visa UAE"
              description="Long-term residency, flexibility and family planning make this a strategic route for eligible applicants."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {advantagesList.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-[26px] border border-[#e1e7ee] bg-white p-5 shadow-[0_12px_30px_rgba(12,45,72,0.04)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/12 text-[#D4AF37]">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <p className="text-lg leading-relaxed text-[#000000]">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white/85 py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">Disadvantages</p>
                <h2 className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl lg:text-5xl">Disadvantages of Golden Visa UAE</h2>
                <p className="mt-4 text-lg leading-relaxed text-[#000000]">Let’s be honest:</p>
                <ul className="mt-5 space-y-4">
                  {disadvantagesList.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-2xl border border-[#ebf0f5] bg-[#f8fafc] p-4">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#0c2d48] text-[#FFFFFF]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-base text-[#000000]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[30px] border border-[#edf2f7] bg-[linear-gradient(135deg,_#f8f1e3,_#fff)] p-6 shadow-[0_18px_50px_rgba(12,45,72,0.05)]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0c2d48] text-[#FFFFFF]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <p className="text-2xl font-semibold text-[#000000]">If someone is selling it as “easy” or “guaranteed,” they’re cutting corners.</p>
                <p className="mt-5 text-base leading-relaxed text-[#000000]">
                  The Golden Visa route is valuable, but it remains a structured immigration strategy with defined eligibility conditions and compliance requirements. It is not a citizenship pathway, and outcomes depend on category, documentation and authority review.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0d1b2a]/95 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Family benefits"
              title="Golden Visa UAE Benefits for Family"
              description="A long-term resident route can also secure the future of your family."
              align="left"
              variant="dark"
            />

            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div className="space-y-4">
                {familyBenefits.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[20px] border border-white/10 bg-white/4 p-4">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#d4af37] text-[#000000]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-base leading-relaxed text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-[32px] border border-[#d4af37]/20 bg-[linear-gradient(145deg,_rgba(212,175,55,0.14),_rgba(13,27,42,0.65))] p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-[#D4AF37]">Family planning</p>
                <p className="mt-4 text-3xl font-semibold leading-tight text-white">This is why many investors choose this route over standard visas.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f1e3]/85 py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Property investors"
              title="Golden Visa UAE for Property Investors"
              description="Buying property is one of the most popular routes."
            />

            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="rounded-[32px] border border-[#d4af37]/20 bg-[#0d1b2a] p-6 text-white shadow-[0_20px_60px_rgba(12,45,72,0.12)]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#D4AF37]">Requirements typically include</p>
                <div className="mt-6 space-y-3">
                  {['Minimum AED 2 million property value', 'Completed or mortgaged property (with conditions)', 'Proper title deed documentation'].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/4 p-3.5">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#d4af37] text-[#000000]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-base text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-[#dfe7ee] bg-white p-6 shadow-[0_18px_40px_rgba(12,45,72,0.04)]">
                <p className="text-xl font-semibold text-[#000000]">But here’s the catch:</p>
                <p className="mt-4 text-lg leading-relaxed text-[#000000]">
                  Not all properties qualify. Not all structures work. Property valuation, ownership structure and documentation must be reviewed carefully before moving ahead.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#0c2d48] px-5 py-3 font-semibold text-white transition hover:bg-[#123a5c]">
                    Discuss Your Property Eligibility
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-[#0c2d48]/15 bg-white px-5 py-3 font-semibold text-[#000000] transition hover:border-[#0c2d48]/30">
                    Contact Our Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0c2d48]/95 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Route comparison"
              title="Golden Visa UAE by Investment vs Salary vs Nomination"
              description="The most suitable route depends on individual circumstances and eligibility."
              align="left"
              variant="dark"
            />

            <div className="overflow-x-auto rounded-[28px] border border-white/10 bg-white/4 backdrop-blur-sm">
              <table className="min-w-full text-left">
                <thead className="border-b border-white/10 bg-white/3 text-[#E8C37A]">
                  <tr>
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em]">Route</th>
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em]">Best for</th>
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em]">Route-specific considerations</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRoutes.map((route) => (
                    <tr key={route.route} className="border-b border-white/10 last:border-b-0">
                      <td className="px-5 py-5 text-lg font-semibold text-white">{route.route}</td>
                      <td className="px-5 py-5 text-base text-white">{route.bestFor}</td>
                      <td className="px-5 py-5 text-base leading-relaxed text-white">{route.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-white/85 py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Difference"
              title="Why Klay Consultants is Different"
              description="Most “Golden Visa UAE agents” focus on submission. We focus on approval strategy."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {differentiation.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-[28px] border border-[#e6ecf2] bg-[#f8fafc] p-5 shadow-[0_18px_40px_rgba(12,45,72,0.04)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0c2d48] text-lg font-semibold text-[#FFFFFF]">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000]">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[#000000]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f1e3]/85 py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Abu Dhabi vs Dubai"
              title="Golden Visa UAE Abu Dhabi vs Dubai"
              description="Golden Visa eligibility is federal, but the application path differs by emirate."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[30px] border border-[#dfe6ee] bg-white p-6 shadow-[0_20px_50px_rgba(12,45,72,0.04)]">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#D4AF37]">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#000000]">Abu Dhabi</h3>
                </div>
                <p className="text-base leading-relaxed text-[#000000]">
                  The process is prominently routed through TAMM, and its Golden Visa pages specifically mention nomination as the step to initiate the application process. That makes Abu Dhabi feel more nomination-led on the front end.
                </p>
              </div>

              <div className="rounded-[30px] border border-[#dfe6ee] bg-[#0d1b2a] p-6 text-white shadow-[0_20px_50px_rgba(12,45,72,0.12)]">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#E8C37A]">
                    <Landmark className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Dubai</h3>
                </div>
                <p className="text-base leading-relaxed text-white">
                  The process is handled through GDRFA Dubai, which has Golden Visa service pages and a dedicated Golden Visa Appointment service for verification. The UAE government also says visa applications can be made through ICP and GDRFA, as well as related apps and typing centers.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[26px] border border-[#d4af37]/20 bg-[#f1e2b7] p-5 text-base leading-relaxed text-[#000000]">
              Choosing the wrong jurisdiction can slow your application.
            </div>
          </div>
        </section>

        <section className="bg-white/85 py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Clear answers for common questions about Golden Visa UAE eligibility, process and family sponsorship."
            />

            <Accordion type="single" collapsible className="mx-auto max-w-4xl rounded-[28px] border border-[#e7edf3] bg-[#f8fafc] p-3">
              {faqItems.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`} className="rounded-2xl border-b-0 px-3 last:border-b-0">
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#000000] hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-[#000000]">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-[radial-gradient(ellipse_at_72%_45%,_rgba(212,175,55,0.12),_transparent_34%),linear-gradient(115deg,_#090a0c_0%,_#0c1b2d_48%,_#090a0c_100%)] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[32px] border border-[#d4af37]/25 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.22),_transparent_30%),linear-gradient(135deg,_#091821_0%,_#0d1b2a_40%,_#08141b_100%)] px-6 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:px-8 lg:px-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">Next steps</p>
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Your Next Chapter Starts with a Conversation.
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-white sm:text-lg">
                    Explore your potential Golden Visa pathway with a clearer understanding of the requirements, documentation and next steps.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <LiquidButton href="/contact" variant="gold" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                    Discuss Your Eligibility
                  </LiquidButton>
                  <LiquidButton href="/contact" variant="outline-gold" size="lg">
                    Contact Our Team
                  </LiquidButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
