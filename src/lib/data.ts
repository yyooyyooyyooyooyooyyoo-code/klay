import {
  Building2,
  Globe2,
  Anchor,
  ShieldCheck,
  Plane,
  FileText,
  Users,
  Landmark,
  Banknote,
  BriefcaseBusiness,
  ClipboardCheck,
  Clock3,
  Layers3,
  Sparkles,
  Stamp,
  TrendingUp,
  WalletCards,
} from 'lucide-react';
import { ROUTES } from './routes';

export const SERVICES = [
  {
    slug: 'mainland-company-setup',
    icon: Building2,
    title: 'Mainland Company Setup',
    short: 'Establish your business in the UAE Mainland with full commercial rights and the ability to trade across all Emirates.',
    description:
      'Mainland companies are licensed by the Department of Economic Development (DED) and can operate across the entire UAE market without restriction. Ideal for businesses that need to serve the local market, bid on government contracts, or open physical branches anywhere in the country.',
    features: [
      '100% foreign ownership available',
      'Trade across all UAE Emirates',
      'Eligible for government contracts',
      'No restriction on office location',
    ],
    benefits: [
      'Unrestricted market access across the UAE',
      'Ability to bid for government tenders',
      'Flexibility to open multiple branches',
      'Diverse license activity options',
    ],
    process: [
      'Consultation & activity selection',
      'Trade name reservation & initial approval',
      'Documentation & MOA drafting',
      'Office space lease agreement (Ejari)',
      'License issuance & establishment card',
    ],
    requirements: [
      'Passport copy of shareholder(s)',
      'Passport-size photograph',
      'Proposed trade name options',
      'Business activity details',
    ],
  },
  {
    slug: 'free-zone-company-setup',
    icon: Globe2,
    title: 'Free Zone Company Setup',
    short: 'Set up in a UAE Free Zone with 100% foreign ownership, tax benefits and streamlined licensing.',
    description:
      'UAE Free Zones are special economic zones designed for international business, offering 100% foreign ownership, zero corporate tax (in most cases), full repatriation of profits, and fast-track licensing. Each Free Zone caters to specific industries and activity types.',
    features: [
      '100% foreign ownership',
      'Zero or low corporate tax',
      'Fast-track licensing process',
      'Repatriation of all profits',
    ],
    benefits: [
      'Full ownership without a local sponsor',
      'Simplified setup and licensing',
      'World-class infrastructure & facilities',
      'Access to warehousing and co-working spaces',
    ],
    process: [
      'Free Zone selection based on activity',
      'Application & license type determination',
      'Lease agreement & documentation',
      'License & visa processing',
    ],
    requirements: [
      'Passport copy of shareholder(s)',
      'Business plan (for certain zones)',
      'Proposed company name',
      'Activity details & license type',
    ],
  },
  {
    slug: 'offshore-company-setup',
    icon: Anchor,
    title: 'Offshore Company Setup',
    short: 'Register an offshore company for international business, asset protection and holding structures.',
    description:
      'UAE offshore companies are non-resident entities incorporated under specific Free Zone authorities. They cannot conduct business within the UAE mainland but are powerful vehicles for international trade, asset holding, and tax-efficient corporate structuring.',
    features: [
      'International asset protection',
      'No physical office required',
      'Confidential ownership structures',
      'Ideal for holding companies',
    ],
    benefits: [
      'Confidentiality of ownership',
      'No UAE corporate tax on offshore income',
      'No minimum capital requirement',
      'Holding & intellectual property structures',
    ],
    process: [
      'Structure & jurisdiction consultation',
      'Name reservation & application',
      'Due diligence & documentation',
      'Registration & certificate issuance',
    ],
    requirements: [
      'Passport copy & proof of address',
      'Bank reference letter',
      'Detailed CV of shareholder(s)',
      'Business activity description',
    ],
  },
  {
    slug: 'golden-visa',
    icon: Plane,
    title: 'Golden Visa',
    short: 'Long-term residency for investors, entrepreneurs, skilled professionals and exceptional talents.',
    description:
      'The UAE Golden Visa grants long-term residency (5 or 10 years) to investors, entrepreneurs, skilled professionals, scientists, outstanding students and humanitarian pioneers. It provides stability and a clear path to building a life in the UAE.',
    features: [
      '5 or 10 year residency',
      'No sponsor required',
      'Family sponsorship included',
      'Path to long-term settlement',
    ],
    benefits: [
      'Long-term stability in the UAE',
      'Sponsor family members including dependents',
      'No restriction on maximum stay outside the UAE',
      'Full right to work and live in the UAE',
    ],
    process: [
      'Eligibility assessment',
      'Document preparation & attestation',
      'Application submission to ICP',
      'Medical & biometrics appointment',
      'Visa stamping & Emirates ID',
    ],
    requirements: [
      'Passport copy with 6+ months validity',
      'Passport-size photographs',
      'Eligibility category documentation',
      'Proof of income or investment',
    ],
  },
  {
    slug: 'pro-services',
    icon: FileText,
    title: 'PRO Services',
    short: 'Government liaison, document processing and visa applications handled end-to-end.',
    description:
      'Our PRO (Public Relations Officer) services cover all government-related transactions, from visa and labour card processing to license renewals, document attestation, and chamber of commerce registrations.',
    features: [
      'Visa & labour card processing',
      'Document attestation services',
      'License renewals & amendments',
      'Government liaison representation',
    ],
    benefits: [
      'Save time on government transactions',
      'Avoid application errors & rejections',
      'Dedicated PRO representation',
      'Compliance with all regulations',
    ],
    process: [
      'Service requirement assessment',
      'Document collection & verification',
      'Government portal submission',
      'Processing & delivery',
    ],
    requirements: [
      'Passport copy of applicant',
      'Emirates ID (if applicable)',
      'Company documents (if sponsored)',
      'Application-specific requirements',
    ],
  },
  {
    slug: 'corporate-bank-account',
    icon: Landmark,
    title: 'Corporate Bank Account',
    short: 'Assistance opening corporate bank accounts with leading UAE and international banks.',
    description:
      'We guide you through the UAE banking landscape, helping you select the right bank, prepare compliance documentation, and complete the account opening process with confidence.',
    features: [
      'Bank selection guidance',
      'Compliance & KYC preparation',
      'Account opening assistance',
      'Multi-currency account options',
    ],
    benefits: [
      'Access to top-tier UAE banking',
      'Multi-currency account capabilities',
      'Online & mobile banking access',
      'Trade finance & business credit facilities',
    ],
    process: [
      'Bank selection & eligibility check',
      'Documentation & compliance preparation',
      'Bank submission & compliance review',
      'Account activation',
    ],
    requirements: [
      'Company license & MOA',
      'Shareholder passport & visa',
      'Business plan & financials (some banks)',
      'Proof of business address',
    ],
  },
  {
    slug: 'trademark-registration',
    icon: ShieldCheck,
    title: 'Trademark Registration',
    short: 'Protect your brand identity with UAE and international trademark registration.',
    description:
      'Register your trademark to protect your brand, products, and services. We handle the entire registration process with the UAE Ministry of Economy, including search, filing, and prosecution.',
    features: [
      'UAE & international trademark filing',
      'Trademark search & clearance',
      'Opposition & renewal management',
      'Brand portfolio management',
    ],
    benefits: [
      'Exclusive brand protection',
      'Legal right to prevent infringement',
      'Valuable business asset',
      'Foundation for franchise expansion',
    ],
    process: [
      'Trademark search & clearance',
      'Application filing',
      'Examination & publication',
      'Registration certificate',
    ],
    requirements: [
      'Logo or word mark image',
      'List of classes & goods/services',
      'Power of Attorney',
      'Company license copy',
    ],
  },
] as const;

export const NAV_LINKS = [
  { label: 'Home', href: ROUTES.home },
  { label: 'About', href: ROUTES.about },
  { label: 'Services', href: ROUTES.services },
  { label: 'Golden Visa', href: ROUTES.goldenVisa },
  { label: 'Business Setup', href: ROUTES.businessSetup },
  { label: 'Blog', href: ROUTES.blog },
  { label: 'Contact', href: ROUTES.contact },
];

export const COMPANY = {
  name: 'Klay Consultants',
  tagline: 'Your UAE Business Starts With One Smart Decision',
  phone: '+971 56 229 2260',
  email: 'info@klayconsultants.com',
  address: 'THE EXCHANGE TOWER - Office No.2522, Business Bay, DUBAI, UNITED ARAB EMIRATES',
  website: 'https://klayconsultants.com',
  hours: 'Sunday – Thursday, 9:00 AM – 6:00 PM (GST)',
};

// Self-hosted copies of free Pexels photos: name.webp is 1600px wide, name-800.webp 800px (see components/ui/image.tsx).
export const IMAGES = {
  heroSkyline: '/images/site/hero-skyline.webp',
  heroSkylineAlt: '/images/site/hero-skyline-alt.webp',
  dubaiMarina: '/images/site/dubai-marina.webp',
  dubaiMarinaNight: '/images/site/dubai-marina-night.webp',
  burjKhalifa: '/images/site/burj-khalifa.webp',
  dubaiCreek: '/images/site/dubai-creek.webp',
  dubaiTwilight: '/images/site/dubai-twilight.webp',
  handshake: '/images/site/handshake.webp',
  meeting: '/images/site/meeting.webp',
  dubaiSkylineWide: '/images/site/dubai-skyline-wide.webp',
  burjAlArab: '/images/site/burj-al-arab.webp',
  skylineAerial: '/images/site/skyline-aerial.webp',
};

export const HOMEPAGE_SERVICES = [
  {
    icon: Building2,
    title: 'UAE Business Formation',
    description: 'Set up your company in Dubai, UAE with experts who can handle approvals and paperwork and help guide you through any red tape.',
    href: '/services/mainland-company-setup',
  },
  {
    icon: WalletCards,
    title: 'Corporate Taxes and VAT',
    description: 'We can provide expert insights on UAE tax laws, accounting, VAT compliance, corporate tax filing, and tax advisory services.',
    href: '/services',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Dubai Business Visa',
    description: 'Acquire your Dubai business visa to set up and conduct business, conferences, and explore networking opportunities in Dubai with ease.',
    href: '/golden-visa',
  },
  {
    icon: Stamp,
    title: 'Trade Licensing',
    description: 'Secure your trade license with our expert trade licensing services to conduct business in Dubai.',
    href: '/services/mainland-company-setup',
  },
  {
    icon: Plane,
    title: 'Golden Visa',
    description: 'Get long-term residency as an Indian expat that gives the ability to live, work and access various services in Dubai, UAE.',
    href: '/golden-visa',
  },
  {
    icon: FileText,
    title: 'PRO Services for Entrepreneurs',
    description: 'Let our experts interface with government authorities and help you navigate renewals and regulations.',
    href: '/services/pro-services',
  },
] as const;

export const HOMEPAGE_PACKAGES = [
  {
    name: 'UAE Free Zone',
    badge: 'LOWEST PRICE OFFER',
    features: [
      'Zero Visa Package',
      'Up to 5 Business Activities',
      'Trade License & Approvals',
      'Free Corporate Tax Registration',
      'Bank Account Opening',
    ],
  },
  {
    name: 'All-Inclusive UAE Free Zone',
    badge: 'ALL-INCLUSIVE',
    features: [
      'One Visa Package',
      'Business License + Approvals',
      'Free Digital Bank Account',
      'Excise Files',
      'Free Flexi Desk',
      'Free VAT & Corporate Tax Registration',
      'Full Lifetime Access',
    ],
  },
  {
    name: 'Dubai Free Zone',
    badge: undefined,
    features: [
      'Zero Visa Package',
      'Business License + Approvals',
      'Free Digital Bank Account',
      'Free Flexi Desk',
      'Free VAT & Corporate Tax Registration',
    ],
  },
  {
    name: 'Ras Al Khaimah Economic Zone (RAKEZ)',
    badge: undefined,
    features: [
      'Biz Starter Package (0 Visa)',
      'All-Inclusive Package (1 Visa)',
      'Additional Visa Processing',
      'Investor / Partner Visa Assistance',
      'Employment Visa Support',
      'Optional Premium Service Upgrades',
    ],
  },
  {
    name: 'Creative City Fujairah',
    badge: undefined,
    features: [
      'Entrepreneur Package (0 Visa)',
      'Smart Package (1 Visa)',
      'Business One Visa (5 Quota)',
      'Business Multi Visa (15 Quota)',
      'Investor / Partner Visa',
      'Employment Visa',
      'Klay Consultants Fees',
    ],
  },
] as const;

export const HOMEPAGE_SETUP_FACTORS = [
  { icon: Globe2, title: 'Jurisdiction', text: 'Mainland, Free Zone, Offshore' },
  { icon: BriefcaseBusiness, title: 'Business Activity', text: 'License type & approvals' },
  { icon: Users, title: 'Visa Needs', text: '0 visa, 1 visa or team setup' },
  { icon: Landmark, title: 'Tax & Banking', text: 'Registration & account setup' },
] as const;

export const HOMEPAGE_ADVANTAGES = [
  {
    number: '01',
    icon: Layers3,
    title: 'Structure First, Not Just Setup',
    description: 'We focus on the right jurisdiction, activity, and structure before incorporation.',
    points: ['Banking delays', 'Visa complications', 'Operational restrictions', 'Costly restructuring later'],
    closing: undefined,
    emphasis: undefined,
  },
  {
    number: '02',
    icon: Globe2,
    title: 'Multi-Jurisdiction Expertise',
    description: 'Mainland, Free Zone, Offshore — each has different rules.',
    points: ['Business activity', 'Expansion plans', 'Ownership structure', 'Compliance requirements'],
    closing: undefined,
    emphasis: undefined,
  },
  {
    number: '03',
    icon: Clock3,
    title: 'Fast and Predictable Timelines',
    description: undefined,
    points: [
      'Defined timelines for each stage of setup',
      'Clear expectations from day one, no vague promises',
      'Parallel processing wherever possible to save time',
      'Proactive follow-ups with authorities and banks',
      'Minimal back-and-forth through proper documentation upfront',
      'Regular progress updates so you’re never in the dark',
    ],
    closing: 'No unnecessary back and forth. No confusion.',
    emphasis: undefined,
  },
  {
    number: '04',
    icon: Banknote,
    title: 'Flat Fee. No Surprises',
    description: 'Clear pricing. No hidden charges. No unexpected add-ons.',
    points: undefined,
    closing: undefined,
    emphasis: 'You know exactly what you’re paying for.',
  },
  {
    number: '05',
    icon: ShieldCheck,
    title: 'End-to-End Support',
    description: undefined,
    points: ['Bank account opening', 'AML compliance guidance', 'ESR filing support', 'Structuring for growth'],
    closing: undefined,
    emphasis: undefined,
  },
  {
    number: '06',
    icon: TrendingUp,
    title: 'Built for Scale',
    description: 'We build your setup to grow with you.',
    points: undefined,
    closing: undefined,
    emphasis: undefined,
  },
  {
    number: '07',
    icon: Sparkles,
    title: 'Advisory-Led Approach',
    description: undefined,
    points: ['Long-term scalability', 'Operational flexibility', 'Cost efficiency'],
    closing: undefined,
    emphasis: undefined,
  },
] as const;

export const HOMEPAGE_PROCESS_STEPS = [
  {
    icon: Clock3,
    title: 'Fast-Tracked Visa & License',
    description: 'Faster processing and approvals. A dedicated manager who handles everything for you.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Choose up to 5 Activities',
    description: 'Faster processing and approvals. A dedicated manager who handles everything for you.',
  },
  {
    icon: ClipboardCheck,
    title: 'Free VAT & C.T Registration',
    description: 'Mandatory VAT & Corporate Tax registration worth AED 1,000 each – at no extra cost.',
  },
  {
    icon: Building2,
    title: 'Free Flexi Desk',
    description: 'Your official UAE address with a smart, shared workspace.',
  },
  {
    icon: Landmark,
    title: 'Free Digital Bank Account',
    description: 'We handle the paperwork, approvals, and setup – all worth AED 3,000.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Our experts are on hand to give your business the attention it needs to succeed.',
  },
] as const;

export const SERVICE_PACKAGES: {
  title: string;
  badge?: string;
  features: string[];
}[] = [
  {
    title: 'UAE Free Zone',
    badge: 'LOWEST PRICE OFFER',
    features: [
      'Zero Visa Package',
      'Up To 5 Business Activities',
      'Trade License & Approvals',
      'Free Corporate Tax Registration',
      'Bank Account Opening',
    ],
  },
  {
    title: 'All-Inclusive UAE Free Zone',
    features: [
      'One Visa Package',
      'Business License + Approvals',
      'Free Digital Bank Account',
      'Exercise Files',
      'Free Flexi Desk',
      'Free VAT & C.T Registration',
      'Full Lifetime Access',
    ],
  },
  {
    title: 'Mergers & Acquisition Advisory',
    features: [
      'Legal Support for Structured Transactions',
      'Transaction Structuring and Regulatory Review',
      'Legal and Compliance Due Diligence',
      'Drafting and Review of Transaction Documents',
      'Ongoing Legal and Regulatory Support',
    ],
  },
  {
    title: 'Inheritance And Succession Planning',
    features: [
      'One Visa Package',
      'Business License + Approvals',
      'Free Digital Bank Account',
      'Exercise Files',
      'Free Flexi Desk',
      'Free VAT & C.T Registration',
      'Full Lifetime Access',
    ],
  },
  {
    title: 'Dubai Free Zone',
    features: [
      'Zero Visa Package',
      'Business License + Approvals',
      'Free Digital Bank Account',
      'Free Flexi Desk',
      'Free VAT & C.T Registration',
    ],
  },
];

export const JURISDICTION_SERVICES: {
  number: string;
  title: string;
  features: string[];
}[] = [
  {
    number: '06',
    title: 'Meydan Free Zone – Dubai',
    features: [
      'Regular Business License (per annum)',
      'Fawri License – Instant, 60 mins (per annum)',
      'Additional Business Activity (per activity)',
      'Investor / Partner Visa (per person, 3-year)',
      'Employment (Work) Visa (per person, 3-year)',
      'Klay Consultants professional fees',
    ],
  },
  {
    number: '07',
    title: 'International Free Zone Authority (IFZA) – Dubai Silicon Oasis',
    features: [
      '0-Visa License Package (per annum)',
      '1-Visa License Package (per annum)',
      '2-Visa License Package (per annum)',
      'Additional Business Activity (per activity)',
      'Investor / Partner Visa (per person, 2-year)',
      'Employment (Work) Visa (per person, 2-year)',
      'Medical Test – Standard (per person)',
      'Medical Test – VIP / Priority (per person)',
      'Klay Consultants professional fees*',
    ],
  },
  {
    number: '08',
    title: 'Ras Al Khaimah Economic Zone (RAKEZ)',
    features: [
      'Biz Starter Package – Includes 0 Visa (Per Annum)',
      'All-Inclusive Package – Includes 1 Visa (Per Annum)',
      'Additional Visa Processing (Per Individual)',
      'Investor / Partner Visa Assistance',
      'Employment (Work) Visa Support (Per Employee)',
      'Optional Premium Service Upgrades Available',
    ],
  },
  {
    number: '09',
    title: 'Creative City Free Zone – Fujairah',
    features: [
      'Entrepreneur Package (0 Visa, up to 2 Owners)',
      'Smart Package (1 Visa Included, Up to 3 Owners)',
      'Business One Visa Package (5 Visa Quota)',
      'Business Multi Visa Package (15 Visa Quota)',
      'Investor / Partner Visa (Per Person)',
      'Employment (Work) Visa (Per Person)',
    ],
  },
  {
    number: '10',
    title: 'SPC Free Zone (Sharjah Publishing City) – Sharjah',
    features: [
      'Business License – 1 Year (0 Visa)',
      'Visa Allocation (Per Visa Slot)',
      'Establishment Card',
      'E-Channel Registration',
      'Investor Visa with Emirates ID (Per Person)',
      'Employment (Work) Visa with Emirates ID',
      'Change of Status (If Already in UAE)',
      'Medical Test (Per Person)',
    ],
  },
  {
    number: '11',
    title: 'Ajman Free Zone (AFZ) – Ajman',
    features: [
      'Commercial / Trading License – AED 5,555/-',
      'Service / Professional License',
      'Freelance Package – AED 12,121/-',
      'Industrial License – AED 9,175/-',
      'E-Commerce License',
      'Investor / Partner Visa (2-Year, Per Person) – To Be Confirmed',
      'Employment (Work) Visa (2-Year, Per Person) – To Be Confirmed',
    ],
  },
  {
    number: '12',
    title: 'Dubai International Financial Centre – Dubai',
    features: [
      'Innovation License – Subsidised (Per Annum, 2 Years)',
      'Innovation Holding License (Per Annum)',
      'Standard Commercial License (Per Annum)',
      'Company Registration / Incorporation (One-Time)',
      'Branch Registration (One-Time)',
      'Establishment Card (Per Annum)',
      'Data Protection Registration – Initial',
      'Data Protection Registration – Annual Renewal',
      'Investor / Partner Visa (Per Person, 3-Year)',
      'Employment (Work) Visa (Per Person, 3-Year)',
    ],
  },
  {
    number: '13',
    title: 'Abu Dhabi Global Market (ADGM) – Abu Dhabi',
    features: [
      'Financial Activities – Initial Registration',
      'Financial Activities – Annual Renewal',
      'Non-Financial Activities – Initial Registration',
      'Non-Financial Activities – Annual Renewal',
      'Retail Activities – Initial Registration',
      'Retail Activities – Annual Renewal',
      'Tech Start-up – Incentivized (Per Annum, 3 Years)',
      'DLT Foundation (Blockchain/Web3) – Initial Registration',
      'DLT Foundation – Annual Renewal',
      'Special Purpose Vehicle (SPV) – Initial Registration',
      'Investor / Partner Visa (Per Person)',
      'Employment (Work) Visa (Per Person)',
    ],
  },
];
