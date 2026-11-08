import {
  Building2,
  Globe2,
  Anchor,
  ShieldCheck,
  Plane,
  FileText,
  Scale,
  Users,
  Briefcase,
  Landmark,
  Award,
  FileSignature,
  ScrollText,
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
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Golden Visa', href: '/golden-visa' },
  { label: 'Business Setup', href: '/business-setup' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
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

export const IMAGES = {
  heroSkyline: 'https://images.pexels.com/photos/29470840/pexels-photo-29470840.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroSkylineAlt: 'https://images.pexels.com/photos/35034246/pexels-photo-35034246.jpeg?auto=compress&cs=tinysrgb&w=1920',
  dubaiMarina: 'https://images.pexels.com/photos/29763203/pexels-photo-29763203.jpeg?auto=compress&cs=tinysrgb&w=1920',
  dubaiMarinaNight: 'https://images.pexels.com/photos/4857611/pexels-photo-4857611.jpeg?auto=compress&cs=tinysrgb&w=1920',
  burjKhalifa: 'https://images.pexels.com/photos/7168605/pexels-photo-7168605.jpeg?auto=compress&cs=tinysrgb&w=1920',
  dubaiCreek: 'https://images.pexels.com/photos/19834628/pexels-photo-19834628.jpeg?auto=compress&cs=tinysrgb&w=1920',
  dubaiTwilight: 'https://images.pexels.com/photos/33306216/pexels-photo-33306216.jpeg?auto=compress&cs=tinysrgb&w=1920',
  handshake: 'https://images.pexels.com/photos/33175650/pexels-photo-33175650.jpeg?auto=compress&cs=tinysrgb&w=1920',
  meeting: 'https://images.pexels.com/photos/7792841/pexels-photo-7792841.jpeg?auto=compress&cs=tinysrgb&w=1920',
  dubaiSkylineWide: 'https://images.pexels.com/photos/1488520/pexels-photo-1488520.jpeg?auto=compress&cs=tinysrgb&w=1920',
  burjAlArab: 'https://images.pexels.com/photos/19943376/pexels-photo-19943376.jpeg?auto=compress&cs=tinysrgb&w=1920',
  skylineAerial: 'https://images.pexels.com/photos/17865512/pexels-photo-17865512.jpeg?auto=compress&cs=tinysrgb&w=1920',
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

export const PRICING_TIERS = [
  {
    name: 'Starter',
    tagline: 'For solo founders launching their first UAE company',
    priceLabel: 'Enquire for pricing',
    highlighted: false,
    features: [
      'Single shareholder setup',
      'Standard trade license',
      '1 residency visa',
      'Bank account opening assistance',
      'PRO services (3 months)',
    ],
  },
  {
    name: 'Business',
    tagline: 'For growing teams that need more capacity and support',
    priceLabel: 'Enquire for pricing',
    highlighted: true,
    features: [
      'Up to 3 shareholders',
      'Premium trade license',
      '3 residency visas included',
      'Priority bank account opening',
      'PRO services (12 months)',
      'Tax registration & advisory',
      'Corporate bank account setup',
    ],
  },
  {
    name: 'Premium',
    tagline: 'For established companies with complex requirements',
    priceLabel: 'Enquire for pricing',
    highlighted: false,
    features: [
      'Unlimited shareholders',
      'Multi-activity license',
      '5+ residency visas',
      'Dedicated account manager',
      'PRO services (24 months)',
      'Trademark registration included',
      'Quarterly compliance review',
      'Priority government processing',
    ],
  },
] as const;

export const CALCULATOR_OPTIONS = {
  jurisdiction: [
    { label: 'Mainland', value: 'mainland', baseCost: 12500, visaCost: 3500 },
    { label: 'Free Zone', value: 'freezone', baseCost: 8900, visaCost: 2800 },
    { label: 'Offshore', value: 'offshore', baseCost: 6500, visaCost: 0 },
  ],
  activities: [
    { label: 'Trading / General Trading', value: 'trading', cost: 2500 },
    { label: 'Consultancy', value: 'consultancy', cost: 1500 },
    { label: 'E-commerce', value: 'ecommerce', cost: 2000 },
    { label: 'IT / Technology', value: 'it', cost: 1800 },
    { label: 'Manufacturing', value: 'manufacturing', cost: 4000 },
  ],
  visaCount: [
    { label: '1 Visa', value: 1, cost: 0 },
    { label: '2 Visas', value: 2, cost: 1 },
    { label: '3 Visas', value: 3, cost: 2 },
    { label: '4 Visas', value: 4, cost: 3 },
  ],
};

export const GOLDEN_VISA_CATEGORIES = [
  {
    icon: Briefcase,
    title: 'Investors & Business Owners',
    description: 'Investors in public investments or businesses meeting the minimum investment threshold.',
  },
  {
    icon: Users,
    title: 'Entrepreneurs',
    description: 'Entrepreneurs with an approved project of significant economic or technical value.',
  },
  {
    icon: Award,
    title: 'Skilled Professionals',
    description: 'Highly skilled professionals in specified fields earning above the minimum threshold.',
  },
  {
    icon: FileSignature,
    title: 'Scientists & Researchers',
    description: 'Active researchers and scientists with significant academic contributions.',
  },
  {
    icon: ScrollText,
    title: 'Outstanding Students',
    description: 'High-achieving students from accredited institutions in the UAE and abroad.',
  },
  {
    icon: Banknote,
    title: 'Special Talents',
    description: 'Individuals with exceptional talents in fields such as arts, sports, and innovation.',
  },
] as const;

export const FAQS = {
  goldenVisa: [
    {
      q: 'How long is the Golden Visa valid for?',
      a: 'The Golden Visa is granted for 5 or 10 years depending on the eligibility category and is renewable upon expiry, subject to meeting the criteria.',
    },
    {
      q: 'Can I include my family under the Golden Visa?',
      a: 'Yes. Golden Visa holders can sponsor spouses, children, and in some cases dependent parents. Each family member is subject to the relevant authority requirements at the time of application.',
    },
    {
      q: 'Do I need to be employed to qualify?',
      a: 'Not necessarily. The Golden Visa covers investors, entrepreneurs, and talented individuals. Each category has its own criteria. An eligibility assessment is the best starting point.',
    },
    {
      q: 'How long does the application process take?',
      a: 'Processing times vary by category and the completeness of your documentation. A typical application can take several weeks from submission to visa stamping.',
    },
    {
      q: 'Does the Golden Visa guarantee employment?',
      a: 'No. The Golden Visa grants residency. It does not guarantee a job or employment. It allows you to live in the UAE and seek employment or conduct business as permitted.',
    },
  ],
  wills: [
    {
      q: 'Why do I need a Will in the UAE?',
      a: 'Without a registered Will, your UAE assets may be distributed according to local Sharia principles. A registered Will allows non-Muslim residents to specify how their assets are distributed.',
    },
    {
      q: 'What is a Foundation and how is it different from a Will?',
      a: 'A Foundation is a legal entity registered under DIFC or ADGM that holds assets for specified purposes. A Will directs asset distribution upon death; a Foundation manages assets both during life and after.',
    },
    {
      q: 'Can I include overseas assets in my UAE Will?',
      a: 'A UAE registered Will typically covers your UAE assets. For overseas assets, you may need a Will in the relevant jurisdiction. We recommend discussing your full estate with our consultants.',
    },
    {
      q: 'How long does registration take?',
      a: 'Registration timelines depend on the authority (DIFC Wills Service, ADGM, or Notary Public) and document readiness. Typically it takes 2-4 weeks from submission of a complete application.',
    },
  ],
};

export const BLOG_PREVIEW = [
  {
    slug: 'uae-import-export-license-how-to-start-a-trading-business',
    title: 'UAE Import Export License: How to Start a Trading Business',
    excerpt:
      'Learn how to get an import export license in the UAE, including customs registration, costs, documentation, product approvals and jurisdiction options.',
    date: '8 Nov 2026',
    category: 'Blog',
    image: '/blog-img/Industrial%20Port%20with%20Container%20Crane.png',
    imageAlt: 'Container crane handling cargo at an industrial port',
    imageTitle: 'Industrial Port with Container Crane',
    metaTitle: 'UAE Import Export License: How to Start a Trading Business',
    metaDescription:
      'Learn how to get an import export license in the UAE, including customs registration, costs, documentation, product approvals and jurisdiction options.',
    metaKeywords:
      'Dubai Business Setup, klay consultants, UAE Company Formation, UAE Company Incorporation, UAE Trade License Requirements',
    focusKeyword: 'import export license UAE',
    tags: [
      'Dubai Business Setup',
      'klay consultants',
      'UAE Company Formation',
      'UAE Company Incorporation',
      'UAE Trade License Requirements',
    ],
    audience: 'Entrepreneurs planning a UAE import, export or trading business',
  },
  {
    slug: 'what-happens-if-you-die-without-a-will-in-the-uae',
    title: 'What Happens If You Die Without a Will in the UAE?',
    excerpt:
      'Discover what happens if you die without a will in the UAE. Learn how inheritance laws affect expats, bank accounts, property, business shares and guardianship.',
    date: '8 Nov 2026',
    category: 'Blog',
    image: '/blog-img/UAE%20Estate%20Planning%20Desk%20with%20Dubai%20Skyline.png',
    imageAlt: 'Estate planning desk overlooking the Dubai skyline',
    imageTitle: 'UAE Estate Planning Desk with Dubai Skyline',
    metaTitle: 'What Happens If You Die Without a Will in the UAE? | Klay Consultants',
    metaDescription:
      'Discover what happens if you die without a will in the UAE. Learn how inheritance laws affect expats, bank accounts, property, business shares and guardianship.',
    metaKeywords:
      'Abu Dhabi Wills, Business Succession UAE, DIFC Wills, Estate Planning UAE, Guardianship UAE, klay consultants, UAE Inheritance Law, UAE Legal Services, UAE Will, Wills for Expats',
    focusKeyword: 'If You Die Without a Will in the UAE',
    tags: [
      'Abu Dhabi Wills',
      'Business Succession UAE',
      'DIFC Wills',
      'Estate Planning UAE',
      'Guardianship UAE',
      'klay consultants',
      'UAE Inheritance Law',
      'UAE Legal Services',
      'UAE Will',
      'Wills for Expats',
    ],
    audience: 'UAE residents and expats planning for their families and assets',
  },
  {
    slug: 'difc-wills-vs-abu-dhabi-wills-registry-which-should-you-choose-klay-consultants',
    title: 'DIFC Wills vs Abu Dhabi Wills Registry: Which Should You Choose?',
    excerpt:
      'Compare DIFC Wills vs Abu Dhabi Wills Registry, including eligibility, UAE asset coverage, registration procedures, fees and suitability for expats.',
    date: '8 Nov 2026',
    category: 'Blog',
    image: '/blog-img/DIFC%20vs%20Abu%20Dhabi%20Wills%20in%20UAE.png',
    imageAlt: 'Comparison of DIFC and Abu Dhabi wills registries in the UAE',
    imageTitle: 'DIFC vs Abu Dhabi Wills in UAE',
    metaTitle: 'DIFC Wills vs Abu Dhabi Wills Registry: Which Should You Choose? | Klay Consultants',
    metaDescription:
      'Compare DIFC Wills vs Abu Dhabi Wills Registry, including eligibility, UAE asset coverage, registration procedures, fees and suitability for expats.',
    metaKeywords:
      'Abu Dhabi Expats, Abu Dhabi Wills, ADJD Wills Registry, DIFC Wills, DIFC Wills Service Centre, Dubai Expats, UAE Estate Planning, UAE Legal Services, UAE Wills, Wills for Expats',
    focusKeyword: 'DIFC Wills vs Abu Dhabi Wills Registry',
    tags: [
      'Abu Dhabi Expats',
      'Abu Dhabi Wills',
      'ADJD Wills Registry',
      'DIFC Wills',
      'DIFC Wills Service Centre',
      'Dubai Expats',
      'UAE Estate Planning',
      'UAE Legal Services',
      'UAE Wills',
      'Wills for Expats',
    ],
    audience: 'Non-Muslim expats comparing UAE will registries',
  },
  {
    slug: 'how-to-register-a-non-muslim-will-in-the-uae-step-by-step-klay-consultants',
    title: 'How to Register a Non-Muslim Will in the UAE: Step-by-Step',
    excerpt:
      'Learn how to register a non-Muslim will in the UAE, including DIFC and ADJD registries, required documents, registration steps, costs and timelines.',
    date: '8 Nov 2026',
    category: 'Blog',
    image: '/blog-img/UAE%20Will%20Registration%20Step-by-Step%20Guide.png',
    imageAlt: 'Step-by-step guide to registering a non-Muslim will in the UAE',
    imageTitle: 'UAE Will Registration Step-by-Step Guide',
    metaTitle: 'How to Register a Non-Muslim Will in the UAE: Step-by-Step | Klay Consultants',
    metaDescription:
      'Learn how to register a non-Muslim will in the UAE, including DIFC and ADJD registries, required documents, registration steps, costs and timelines.',
    metaKeywords:
      'ADJD Wills, Business Owners Will, DIFC Wills, Guardianship Will, Non-Muslim Will UAE, Register a Will in UAE, UAE Estate Planning, UAE Will, UAE Will Registration, Wills for Expats',
    focusKeyword: 'Register a Non-Muslim Will in the UAE',
    tags: [
      'ADJD Wills',
      'Business Owners Will',
      'DIFC Wills',
      'Guardianship Will',
      'Non-Muslim Will UAE',
      'Register a Will in UAE',
      'UAE Estate Planning',
      'UAE Will',
      'UAE Will Registration',
      'Wills for Expats',
    ],
    audience: 'Non-Muslim expats in the UAE planning their estates',
  },
  {
    slug: 'guardianship-for-minor-children-in-a-uae-will-klay-consultants',
    title: 'Guardianship for Minor Children in a UAE Will: What Expat Parents Need to Know',
    excerpt:
      'Learn how a guardianship UAE will helps expat parents nominate guardians for minor children, plan international relocation and protect their family’s future.',
    date: '8 Nov 2026',
    category: 'Blog',
    image: '/blog-img/UAE%20Will%20Guardianship%20for%20Expat%20Families.png',
    imageAlt: 'Guardianship planning in a UAE will for expat families',
    imageTitle: 'UAE Will Guardianship for Expat Families',
    metaTitle: 'Guardianship for Minor Children in a UAE Will | Klay Consultants',
    metaDescription:
      'Learn how a guardianship UAE will helps expat parents nominate guardians for minor children, plan international relocation and protect their family’s future.',
    metaKeywords:
      'ADJD Wills, DIFC Wills, Estate Planning UAE, Expat Parents UAE, Guardianship UAE, Guardianship Will UAE, Minor Children UAE, Non-Muslim Will UAE, UAE Will, UAE Wills for Expats',
    focusKeyword: 'guardianship UAE will',
    tags: [
      'ADJD Wills',
      'DIFC Wills',
      'Estate Planning UAE',
      'Expat Parents UAE',
      'Guardianship UAE',
      'Guardianship Will UAE',
      'Minor Children UAE',
      'Non-Muslim Will UAE',
      'UAE Will',
      'UAE Wills for Expats',
    ],
    audience: 'Expat parents in the UAE with minor children',
  },
  {
    slug: 'including-business-shares-in-your-uae-will-klay-consultants',
    title: 'Including Business Shares in Your UAE Will: Protecting Company Ownership',
    excerpt:
      'Learn how to include business shares in a UAE will, protect company ownership, plan succession, coordinate shareholder agreements and support business continuity.',
    date: '8 Nov 2026',
    category: 'Blog',
    image: '/blog-img/UAE%20Will%20Business%20Succession%20Planning.png',
    imageAlt: 'UAE will and business succession planning guide for company owners',
    imageTitle: 'UAE Will Business Succession Planning',
    metaTitle: 'Including Business Shares in Your UAE Will | Klay Consultants',
    metaDescription:
      'Learn how to include business shares in a UAE will, protect company ownership, plan succession, coordinate shareholder agreements and ensure business continuity.',
    metaKeywords:
      'Business Shares UAE, Business Succession UAE, Business Owners Will, Company Ownership UAE, Shareholder Agreement UAE, UAE Business Setup, UAE Estate Planning, UAE Will, Holding Company UAE, UAE Business Succession',
    focusKeyword: 'business shares in UAE will',
    tags: [
      'Business Shares UAE',
      'Business Succession UAE',
      'Business Owners Will',
      'Company Ownership UAE',
      'Shareholder Agreement UAE',
      'UAE Business Setup',
      'UAE Estate Planning',
      'UAE Will',
      'Holding Company UAE',
      'UAE Business Succession',
    ],
    audience: 'UAE business owners, founders and shareholders',
  },
  {
    slug: 'power-of-attorney-in-the-uae-a-guide-for-business-owners-expats-klay-consultants',
    title: 'Power of Attorney in the UAE: A Guide for Business Owners & Expats',
    excerpt:
      'Understand Power of Attorney requirements in the UAE, including types, notarisation, documents, business authorisations and how expats can appoint representatives.',
    date: '8 Nov 2026',
    category: 'Blog',
    image: '/blog-img/UAE%20Power%20of%20Attorney%20Business%20Guide.png',
    imageAlt: 'Power of Attorney guide for UAE business owners and expats',
    imageTitle: 'UAE Power of Attorney Business Guide',
    metaTitle: 'Power of Attorney in the UAE: A Guide for Business Owners & Expats',
    metaDescription:
      'Understand Power of Attorney UAE requirements, types, legal procedures, documentation, business authorisations and how expats can appoint representatives.',
    metaKeywords:
      'Power of Attorney UAE, UAE POA, General Power of Attorney, Special Power of Attorney, Business Owners UAE, UAE Notary Public, UAE Legal Documents, Property Management UAE, Company Representation UAE, Wills for Expats',
    focusKeyword: 'power of attorney UAE',
    tags: [
      'Power of Attorney UAE',
      'UAE POA',
      'General Power of Attorney',
      'Special Power of Attorney',
      'Business Owners UAE',
      'UAE Notary Public',
      'UAE Legal Documents',
      'Property Management UAE',
      'Company Representation UAE',
      'Wills for Expats',
    ],
    audience: 'UAE business owners, property investors and expats',
  },
  {
    slug: 'uae-will-vs-home-country-will-do-expats-need-both-klay-consultants',
    title: 'UAE Will vs Home Country Will: Do Expats Need Both? | Klay Consultants',
    excerpt:
      'UAE will vs home country will explained for expats. Learn how to coordinate wills, protect international assets and avoid conflicting inheritance instructions.',
    date: '8 Nov 2026',
    category: 'Blog',
    image: '/blog-img/UAE%20Dependent%20Visa%20Family%20Guide.png',
    imageAlt: 'Family guide image for expats coordinating UAE and home-country wills',
    imageTitle: 'UAE Will vs Home Country Will: Guide for Expats',
    metaTitle: 'UAE Will vs Home Country Will: Do Expats Need Both? | Klay Consultants',
    metaDescription:
      'UAE will vs home country will explained for expats. Learn how to coordinate wills, protect international assets and avoid conflicting inheritance instructions.',
    metaKeywords:
      'UAE will vs home country will, GCC Expats, Home Country Will, International Estate Planning, UAE Assets, UAE Estate Planning, UAE Will, UAE Will vs Home Country Will, UK Expats UAE, US Expats UAE, Wills for Expats',
    focusKeyword: 'UAE will vs home country will',
    tags: [
      'GCC Expats',
      'Home Country Will',
      'International Estate Planning',
      'UAE Assets',
      'UAE Estate Planning',
      'UAE Will',
      'UAE Will vs Home Country Will',
      'UK Expats UAE',
      'US Expats UAE',
      'Wills for Expats',
    ],
    audience: 'UAE expats with assets in multiple countries',
  },
  {
    slug: 'updating-revoking-and-amending-your-uae-will-klay-consultants',
    title: 'Updating, Revoking and Amending Your UAE Will | Klay Consultants',
    excerpt:
      'Learn when and how to update UAE will documents, amend provisions or revoke an existing will after marriage, divorce, property purchases or business changes.',
    date: '8 Nov 2026',
    category: 'Blog',
    image: '/blog-img/UAE%20Will%20Review%20in%20Dubai.png',
    imageAlt: 'UAE will review guide for updating, amending, or revoking a will',
    imageTitle: 'UAE Will Review in Dubai',
    metaTitle: 'Updating, Revoking and Amending Your UAE Will | Klay Consultants',
    metaDescription:
      'Learn when and how to update UAE will documents, amend provisions or revoke an existing will after marriage, divorce, property purchases or business changes.',
    metaKeywords:
      'update UAE will, Amend UAE Will, Business Owners UAE, Estate Planning UAE, klay consultants, Revoke UAE Will, UAE Estate Planning, UAE Will, UAE Will Review, Update UAE Will, Wills for Expats',
    focusKeyword: 'update UAE will',
    tags: [
      'Amend UAE Will',
      'Business Owners UAE',
      'Estate Planning UAE',
      'klay consultants',
      'Revoke UAE Will',
      'UAE Estate Planning',
      'UAE Will',
      'UAE Will Review',
      'Update UAE Will',
      'Wills for Expats',
    ],
    audience: 'UAE residents and expat will holders',
  },
  {
    slug: 'estate-planning-for-blended-families-and-unmarried-couples-in-the-uae-klay-consultants',
    title: 'Estate Planning for Blended Families and Unmarried Couples in the UAE | Klay Consultants',
    excerpt:
      'Explore estate planning for blended families and unmarried couples in the UAE. Understand wills, beneficiaries, guardianship, stepchildren and inheritance considerations.',
    date: '8 Nov 2026',
    category: 'Blog',
    image: '/blog-img/UAE%20Estate%20Planning%20for%20Modern%20Families.png',
    imageAlt: 'UAE estate planning guide for blended families and unmarried couples',
    imageTitle: 'UAE Estate Planning for Modern Families',
    metaTitle: 'Estate Planning for Blended Families and Unmarried Couples in the UAE | Klay Consultants',
    metaDescription:
      'Explore estate planning for blended families and unmarried couples in the UAE. Understand wills, beneficiaries, guardianship, stepchildren and inheritance considerations.',
    metaKeywords:
      'Planning for Blended Families and Unmarried Couples in the UAE, Blended Families UAE, Estate Planning for Expats, Estate Planning UAE, Guardianship UAE, klay consultants, Power of Attorney UAE, Stepchildren UAE, UAE Will, UAE Wills for Expats, Unmarried Couples UAE',
    focusKeyword: 'Planning for Blended Families and Unmarried Couples in the UAE',
    tags: [
      'Blended Families UAE',
      'Estate Planning for Expats',
      'Estate Planning UAE',
      'Guardianship UAE',
      'klay consultants',
      'Power of Attorney UAE',
      'Stepchildren UAE',
      'UAE Will',
      'UAE Wills for Expats',
      'Unmarried Couples UAE',
    ],
    audience: 'UAE residents and expat families planning their estates',
  },
  {
    slug: 'restructuring-your-uae-company-when-and-how-to-change-structure',
    title: 'Restructuring Your UAE Company: When and How to Change Structure',
    excerpt:
      'Explore UAE company restructuring options, including changing legal structure, shareholders, jurisdiction, holding companies, costs and regulatory requirements.',
    date: '8 Nov 2026',
    category: 'Blog',
    image: '/blog-img/UAE%20Company%20Restructuring%20Guide.png',
    imageAlt: 'Guide to restructuring a UAE company and changing its business structure',
    imageTitle: 'UAE Company Restructuring Guide',
    metaTitle: 'Restructuring Your UAE Company: When and How to Change Structure',
    metaDescription:
      'Explore UAE company restructuring options, including changing legal structure, shareholders, jurisdiction, holding companies, costs and regulatory requirements.',
    metaKeywords:
      'UAE company restructuring, Company Structure, Holding Company, Shareholding Changes, UAE Business Compliance, UAE Business Setup, UAE Company Restructuring, UAE Free Zone, UAE Mainland',
    focusKeyword: 'UAE company restructuring',
    tags: [
      'Company Structure',
      'Holding Company',
      'Shareholding Changes',
      'UAE Business Compliance',
      'UAE Business Setup',
      'UAE Company Restructuring',
      'UAE Free Zone',
      'UAE Mainland',
    ],
    audience: 'UAE business owners reviewing their company structure',
  },
  {
    slug: 'legal-heir-certificate-uae-will-probate-guide',
    title: 'Legal Heir Certificate UAE: Will & Probate Guide',
    excerpt:
      'Understand the legal heir certificate UAE process, required documents, inheritance laws, registered wills and probate procedures for families and beneficiaries.',
    date: '8 Nov 2026',
    category: 'Blog',
    image: '/blog-img/UAE%20Legal%20Heir%20Certificate%20Guide.png',
    imageAlt: 'UAE legal heir certificate and probate guide for families and beneficiaries',
    imageTitle: 'Legal Heir Certificate UAE: Will and Probate Guide',
    metaTitle: 'Legal Heir Certificate UAE: Will & Probate Guide',
    metaDescription:
      'Understand the legal heir certificate UAE process, required documents, inheritance laws, registered wills and probate procedures for families and beneficiaries.',
    metaKeywords:
      'legal heir certificate UAE, Beneficiaries in UAE, Inheritance in UAE, Legal Will UAE, UAE Estate Planning, UAE Inheritance Law, UAE Legal Heir Certificate, UAE Probate, UAE Will Registration',
    focusKeyword: 'legal heir certificate UAE',
    tags: [
      'Beneficiaries in UAE',
      'Inheritance in UAE',
      'Legal Will UAE',
      'UAE Estate Planning',
      'UAE Inheritance Law',
      'UAE Legal Heir Certificate',
      'UAE Probate',
      'UAE Will Registration',
    ],
    audience: 'UAE residents and families planning or administering estates',
  },
  {
    slug: 'how-to-transfer-a-corporate-bank-account-in-uae',
    title: 'How to Transfer a Corporate Bank Account in UAE',
    excerpt:
      'Learn about corporate bank account UAE transfers during restructuring, including required documents, bank approvals, fund transfers, account closure and compliance procedures.',
    date: '8 Nov 2026',
    category: 'Blog',
    image: '/blog-img/UAE%20Corporate%20Bank%20Account%20Transfer%20Guide.png',
    imageAlt: 'UAE corporate bank account transfer guide for business restructuring',
    imageTitle: 'How to Transfer a Corporate Bank Account in UAE',
    metaTitle: 'How to Transfer a Corporate Bank Account in UAE',
    metaDescription:
      'Learn about corporate bank account UAE transfers during restructuring, including required documents, bank approvals, fund transfers, account closure and compliance procedures.',
    metaKeywords:
      'corporate bank account UAE, Bank Account Closure, Business Bank Account, Company Restructuring UAE, Corporate Bank Account UAE, UAE Business Setup, UAE Company Liquidation, UAE Corporate Banking',
    focusKeyword: 'corporate bank account UAE',
    tags: [
      'Bank Account Closure',
      'Business Bank Account',
      'Company Restructuring UAE',
      'Corporate Bank Account UAE',
      'UAE Business Setup',
      'UAE Company Liquidation',
      'UAE Corporate Banking',
    ],
    audience: 'UAE business owners planning restructuring or liquidation',
  },
  {
    slug: 'open-personal-bank-account-uae',
    title: 'Open Personal Bank Account UAE: New Resident Guide',
    excerpt:
      'Learn how to open a personal bank account in the UAE as a new resident, including eligibility, required documents, banking options, minimum balances, and application steps.',
    date: '8 Nov 2026',
    category: 'Blog',
    image: '/blog-img/Skyline%20Portrait%20with%20Clean%20Sky%20Corner.png',
    imageAlt: 'Skyline portrait for a guide to opening a personal UAE bank account',
    imageTitle: 'UAE Personal Bank Account Guide for New Residents',
    metaTitle: 'Open Personal Bank Account UAE: New Resident Guide',
    metaDescription:
      'Learn how to open personal bank account UAE as a new resident, including eligibility, required documents, bank options, minimum balances, fees and application steps.',
    metaKeywords:
      'open personal bank account UAE, UAE Personal Banking, UAE Bank Account for New Residents, UAE Banking Requirements, Emirates ID Bank Account, UAE Salary Account, UAE Digital Banking, UAE Residency',
    focusKeyword: 'open personal bank account UAE',
    tags: [
      'Open Personal Bank Account UAE',
      'UAE Personal Banking',
      'UAE Bank Account for New Residents',
      'UAE Banking Requirements',
      'Emirates ID Bank Account',
      'UAE Salary Account',
      'UAE Digital Banking',
      'UAE Residency',
    ],
    audience: 'New UAE residents and relocating individuals',
  },
  {
    slug: 'uae-dependent-visa-sponsorship-family-visa-guide-klay-consultants',
    title: 'UAE Dependent Visa Sponsorship: Family Visa Guide | Klay Consultants',
    excerpt:
      'Learn about UAE dependent visa sponsorship, including eligibility, required documents, application steps, costs, and family residency requirements.',
    date: '8 Nov 2026',
    category: 'Family Visas',
    image: '/blog-img/UAE%20Dependent%20Visa%20Family%20Guide%20(1).png',
    metaTitle: 'UAE Dependent Visa Sponsorship: Family Visa Guide | Klay Consultants',
    metaDescription:
      'Learn about UAE dependent visa sponsorship, including eligibility, required documents, application steps, costs, and family residency requirements.',
    metaKeywords:
      'UAE dependent visa sponsorship, Children Visa UAE, Family Visa Sponsorship UAE, Golden Visa Family Sponsorship, Spouse Visa UAE, UAE Dependent Visa, UAE Family Visa, UAE Residency Visa, UAE Visa Requirements',
    focusKeyword: 'UAE dependent visa sponsorship',
    tags: [
      'Children Visa UAE',
      'Family Visa Sponsorship UAE',
      'Golden Visa Family Sponsorship',
      'Spouse Visa UAE',
      'UAE Dependent Visa',
      'UAE Family Visa',
      'UAE Residency Visa',
      'UAE Visa Requirements',
    ],
    audience: 'UAE residents sponsoring family members',
  },
  {
    slug: 'transfer-shareholders-uae-company',
    title: 'Adding, Removing or Transferring Shareholders in a UAE Company',
    excerpt:
      'Learn how to transfer shareholders in a UAE company, including adding or removing owners, share transfer agreements, required documents, approvals and costs.',
    date: '8 Nov 2026',
    category: 'Blog',
    image: '/blog-img/UAE%20Shareholder%20Services%20Infographic.png',
    imageAlt: 'Transfer shareholders UAE company – guide to adding, removing and transferring company ownership',
    imageTitle: 'UAE Company Shareholder Transfer Guide',
    metaTitle: 'Adding, Removing or Transferring Shareholders in a UAE Company',
    metaDescription:
      'Learn how to transfer shareholders in a UAE company, including adding or removing owners, share transfer agreements, required documents, approvals and costs.',
    metaKeywords:
      'transfer shareholders UAE company, Add Shareholder UAE, Remove Shareholder UAE, Share Transfer Agreement, UAE Business Setup, UAE Company Ownership, UAE Company Restructuring, UAE Shareholder Transfer',
    focusKeyword: 'transfer shareholders UAE company',
    tags: [
      'Add Shareholder UAE',
      'Remove Shareholder UAE',
      'Share Transfer Agreement',
      'UAE Business Setup',
      'UAE Company Ownership',
      'UAE Company Restructuring',
      'UAE Shareholder Transfer',
    ],
    audience: 'UAE company owners and shareholders',
  },
  {
    slug: 'adding-removing-transferring-shareholders-uae-company',
    title: 'Adding, Removing or Transferring Shareholders in a UAE Company',
    excerpt:
      'Learn how to add, remove or transfer shareholders in a UAE company, including legal steps, approvals, valuation, documents and residency implications.',
    date: '7 Nov 2026',
    category: 'Corporate Structuring',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'Adding, Removing or Transferring Shareholders in a UAE Company | Klay Consultants',
    metaDescription:
      'Learn how to add, remove or transfer shareholders in a UAE company, including legal steps, approvals, documentation, valuation and residency implications.',
    metaKeywords: 'shareholder changes UAE company, transfer shareholders UAE company, add shareholder UAE company, remove shareholder UAE company, UAE share transfer rules',
    audience: 'Business owners and founders',
  },
  {
    slug: 'convert-free-zone-to-mainland-uae',
    title: 'Convert Free Zone to Mainland UAE',
    excerpt:
      'Convert a Free Zone company to Mainland UAE or vice versa. Explore the process, costs, business options, and key considerations before making the move.',
    date: '7 Nov 2026',
    category: 'Company Restructuring',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'Convert Free Zone to Mainland UAE | Klay Consultants',
    metaDescription:
      'Convert a Free Zone company to Mainland UAE or vice versa. Explore the process, costs, business options, and key considerations before making the move.',
    metaKeywords: 'Free Zone to Mainland UAE, convert free zone to mainland, UAE company restructuring, UAE company formation, mainland company UAE',
    audience: 'Business owners and founders',
  },
  {
    slug: 'the-uae-court-system-dispute-resolution',
    title: 'The UAE Court System & Dispute Resolution: What Business Owners Should Know',
    excerpt:
      'Understand UAE dispute resolution for business owners, including onshore courts, DIFC and ADGM Courts, arbitration, and choosing the right forum.',
    date: '7 Nov 2026',
    category: 'Business Law UAE',
    image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'UAE Court System & Dispute Resolution: What Business Owners Should Know | Klay Consultants',
    metaDescription:
      'Understand UAE dispute resolution for business owners, including onshore courts, DIFC and ADGM Courts, arbitration, and choosing the right forum.',
    metaKeywords: 'UAE dispute resolution, UAE court system, DIFC Courts, ADGM Courts, arbitration UAE, commercial disputes UAE',
    audience: 'Business owners and founders',
  },
  {
    slug: 'shareholder-agreement-uae-why-it-matters',
    title: 'Shareholder Agreement UAE: Why It Matters',
    excerpt:
      'Why UAE founders need a shareholder agreement, including key clauses, exit rights, deadlock solutions, valuation methods, and dispute prevention.',
    date: '7 Nov 2026',
    category: 'Business Partners',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'Shareholder Agreement UAE: Why It Matters | Klay Consultants',
    metaDescription:
      'Why UAE founders need a shareholder agreement, including key clauses, exit rights, deadlock solutions, valuation methods, and dispute prevention.',
    metaKeywords: 'shareholder agreement UAE, UAE company formation, UAE founders, shareholder disputes, business partners UAE',
    audience: 'Founders, co-founders and investors',
  },
  {
    slug: 'can-foreigners-own-100-percent-of-a-uae-business',
    title: 'Can Foreigners Own 100% of a UAE Business? Ownership Rules Explained',
    excerpt:
      'A practical guide to 100% foreign ownership in the UAE, covering Mainland and Free Zone rules, restricted activities, and how to avoid outdated sponsor arrangements.',
    date: '6 Nov 2025',
    category: 'Business Setup',
    image: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'Can Foreigners Own 100% of a UAE Business? Ownership Rules Explained | Klay Consultants',
    metaDescription:
      'Can foreigners own 100% of a company in the UAE? How ownership rules work for Mainland and Free Zone companies, what is still restricted, and whether you need a local sponsor.',
    metaKeywords: '100% foreign ownership UAE, UAE ownership rules, Mainland vs Free Zone ownership, UAE business setup',
    audience: 'UK / EU / US / GCC founders',
  },
  {
    slug: 'profitable-business-ideas-uae-2026',
    title: 'Most Profitable Business Ideas to Start in the UAE in 2026',
    excerpt:
      'Explore trending UAE business ideas for 2026, from e-commerce and technology to wellness and consulting, with licensing routes and key risks to consider.',
    date: '6 Nov 2026',
    category: 'Business Ideas',
    image: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'Most Profitable Business Ideas to Start in the UAE in 2026 | Klay Consultants',
    metaDescription:
      'Trending business ideas in the UAE for 2026, from e-commerce and tech to wellness and consulting, with the licence route and key risks for each.',
    metaKeywords: 'profitable business ideas in UAE, business ideas UAE 2026, start a business in Dubai, UAE business setup',
    audience: 'UK / EU / US / GCC aspiring founders',
  },
  {
    slug: 'set-up-uae-company-remotely',
    title: 'Can You Set Up a UAE Company Remotely? A Guide for Non-Residents',
    excerpt:
      'A practical guide to setting up a UAE company from abroad, including what can be done remotely, when you may need to visit, and how to prepare your documents.',
    date: '6 Nov 2026',
    category: 'Business Setup',
    image: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'Can You Set Up a UAE Company Remotely? Non-Resident Guide | Klay Consultants',
    metaDescription:
      'Can you start a UAE company without moving there? What can be done remotely, what needs you in person, and how to prepare your documents.',
    metaKeywords: 'set up UAE company remotely, remote UAE company setup, UAE company non-resident, start UAE company from abroad',
    audience: 'Non-resident founders in the UK / EU / US / GCC',
  },
  {
    slug: 'tech-startup-setup-uae',
    title: 'Starting a Tech or AI Startup in the UAE: Licences, Free Zones and Funding',
    excerpt:
      'A guide to setting up a UAE tech or AI startup, covering licence options, startup-focused hubs, funding, visas and founder compliance.',
    date: '6 Nov 2026',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'Starting a Tech or AI Startup in the UAE: Licences & Free Zones | Klay Consultants',
    metaDescription:
      'How to set up a tech or AI startup in the UAE: licence options, startup-focused free zones, funding routes, visas and compliance for founders.',
    metaKeywords: 'tech startup setup UAE, AI startup UAE, UAE technology licence, UAE startup free zones, tech company setup Dubai',
    audience: 'Tech and AI founders in the UK / EU / US / GCC',
  },
  {
    slug: 'mainland-vs-freezone-2025',
    title: 'Mainland vs Free Zone: Which UAE Setup Is Right for You in 2025?',
    excerpt:
      'A practical comparison of Mainland and Free Zone company setups, covering ownership, costs, visas, and market access to help you choose the right structure.',
    date: '15 Oct 2025',
    category: 'Business Setup',
    image: 'https://images.pexels.com/photos/1488520/pexels-photo-1488520.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'Mainland vs Free Zone UAE: How to Choose | Klay Consultants',
    metaDescription:
      'Compare Mainland and Free Zone company setup in the UAE to understand ownership, cost, visas, market access and licence options before you decide.',
    metaKeywords: 'Mainland vs Free Zone UAE, UAE business setup comparison, UAE LLC vs Free Zone, Mainland company setup',
    audience: 'New founders and investors',
  },
  {
    slug: 'golden-visa-eligible-categories',
    title: 'Golden Visa UAE: A Complete Guide to Eligibility Categories',
    excerpt:
      'Everything you need to know about the UAE Golden Visa, from investors and entrepreneurs to skilled professionals and special talents.',
    date: '8 Oct 2025',
    category: 'Golden Visa',
    image: 'https://images.pexels.com/photos/8061942/pexels-photo-8061942.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'UAE Golden Visa: Eligibility Categories | Klay Consultants',
    metaDescription:
      'Explore UAE Golden Visa categories including investors, entrepreneurs, skilled professionals and exceptional talents, plus what applicants need to prepare.',
    metaKeywords: 'UAE Golden Visa, Golden Visa categories, UAE investor visa, entrepreneur visa UAE',
    audience: 'Investors, professionals and founders',
  },
  {
    slug: 'dubai-wills-for-non-muslims',
    title: 'Dubai Wills for Non-Muslims: Protecting Your Family Assets',
    excerpt:
      'How DIFC Wills help non-Muslim residents in the UAE protect their assets and ensure their wishes are carried out.',
    date: '1 Oct 2025',
    category: 'Wills & Foundations',
    image: 'https://images.pexels.com/photos/5668512/pexels-photo-5668512.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'Dubai Wills for Non-Muslims | Klay Consultants',
    metaDescription:
      'Learn how Dubai Wills can help non-Muslims protect family assets, control inheritance and plan estate matters in the UAE.',
    metaKeywords: 'Dubai Wills, UAE estate planning, DIFC will, non-Muslim will in Dubai',
    audience: 'Expats and families',
  },
  {
    slug: 'uae-business-setup-costs-2025',
    title: 'UAE Business Setup Costs in 2025: What Entrepreneurs Need to Budget For',
    excerpt:
      'A breakdown of the main setup costs in the UAE, from licensing and visas to office space, bank accounts and ongoing compliance.',
    date: '28 Sep 2025',
    category: 'Business Setup',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'UAE Business Setup Costs: 2025 Guide | Klay Consultants',
    metaDescription:
      'Understand the primary costs of setting up a business in the UAE, including licences, visas, office requirements, banking and compliance.',
    metaKeywords: 'UAE company formation cost, Dubai setup budget, business cost UAE, Mainland setup cost',
    audience: 'Startups and SMEs',
  },
  {
    slug: 'how-to-choose-uae-free-zone',
    title: 'How to Choose the Right UAE Free Zone for Your Business',
    excerpt:
      'Compare the leading UAE Free Zones by activity, visa quota, cost and operational flexibility before choosing where to incorporate.',
    date: '20 Sep 2025',
    category: 'Free Zones',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'Choose a UAE Free Zone for Your Business | Klay Consultants',
    metaDescription:
      'Choose the best UAE Free Zone for your business by comparing costs, licensing, visa quotas, activity rules and operational flexibility.',
    metaKeywords: 'UAE Free Zone, choose Free Zone UAE, Free Zone company setup, business licensing UAE',
    audience: 'Entrepreneurs and international founders',
  },
  {
    slug: 'golden-visa-investor-requirements',
    title: 'Golden Visa Investor Requirements: What You Need to Qualify',
    excerpt:
      'Learn how the UAE Golden Visa investment route works, what evidence is required and how to build a stronger application package.',
    date: '12 Sep 2025',
    category: 'Golden Visa',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'Golden Visa Investor Requirements in the UAE | Klay Consultants',
    metaDescription:
      'Find out what the UAE Golden Visa investor route requires, how investment criteria are measured and which documents are typically needed.',
    metaKeywords: 'Golden Visa investor requirements, UAE investor visa requirements, UAE residency by investment',
    audience: 'Investors and family office clients',
  },
  {
    slug: 'uae-corporate-tax-for-startups',
    title: 'UAE Corporate Tax for Startups: What New Founders Need to Know',
    excerpt:
      'A straightforward guide to UAE corporate tax registration, reporting obligations and the practical compliance steps startups should plan for.',
    date: '4 Sep 2025',
    category: 'Tax & Compliance',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'UAE Startup Corporate Tax Guide | Klay Consultants',
    metaDescription:
      'Learn the essentials of UAE corporate tax for startups, including registration, compliance obligations and the financial considerations new founders should plan for.',
    metaKeywords: 'UAE corporate tax for startups, UAE tax registration, startup tax compliance, business tax UAE',
    audience: 'Founders and finance leads',
  },
  {
    slug: 'employee-visa-process-uae',
    title: 'UAE Employee Visa Process: From Offer Letter to Emirates ID',
    excerpt:
      'A step-by-step look at the UAE work visa process, timelines and documentation needed for employers and employees alike.',
    date: '25 Aug 2025',
    category: 'Visa Services',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'UAE Employee Visa Process | Klay Consultants',
    metaDescription:
      'Follow the UAE employee visa process from offer letter and sponsorship through medical checks, biometrics and Emirates ID registration.',
    metaKeywords: 'UAE employee visa process, work visa UAE, Emirates ID UAE, visa sponsorship UAE',
    audience: 'Employers and employees',
  },
  {
    slug: 'uae-business-bank-account-guide',
    title: 'Opening a UAE Business Bank Account: A Practical Guide',
    excerpt:
      'From KYC documentation to choosing the right bank, here is how founders can prepare for a smoother UAE corporate banking process.',
    date: '18 Aug 2025',
    category: 'Banking',
    image: 'https://images.pexels.com/photos/3943727/pexels-photo-3943727.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'UAE Business Bank Account Guide | Klay Consultants',
    metaDescription:
      'Learn how to open a UAE business bank account with the right documentation, compliance preparation and bank selection strategy for your company.',
    metaKeywords: 'UAE business bank account, corporate bank account UAE, UAE bank account opening, business banking UAE',
    audience: 'Founders and finance teams',
  },
  {
    slug: 'uae-company-formation-process',
    title: 'The UAE Company Formation Process: What to Expect from Start to Finish',
    excerpt:
      'A clear overview of the UAE company formation journey, from activity selection and licence type to approvals, visa processing and banking readiness.',
    date: '10 Aug 2025',
    category: 'Business Setup',
    image: 'https://images.pexels.com/photos/1427748/pexels-photo-1427748.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'UAE Company Formation Process Explained | Klay Consultants',
    metaDescription:
      'Understand the UAE company formation process step by step, from choosing the right structure to licensing, visa processing and opening a corporate bank account.',
    metaKeywords: 'UAE company formation process, business registration UAE, company setup Dubai, trading licence UAE',
    audience: 'New and relocating founders',
  },
  {
    slug: 'mainland-vs-freezone-vs-offshore',
    title: 'Mainland vs Free Zone vs Offshore: Which UAE Structure Fits Your Business?',
    excerpt:
      'Compare Mainland, Free Zone and Offshore structures to find the UAE jurisdiction that supports your business model, market access and ownership goals.',
    date: '2 Aug 2025',
    category: 'Jurisdiction',
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'Mainland vs Free Zone vs Offshore in the UAE | Klay Consultants',
    metaDescription:
      'Compare Mainland, Free Zone and Offshore company structures in the UAE to understand licensing, market access, ownership and operational differences.',
    metaKeywords: 'Mainland vs Free Zone vs Offshore UAE, UAE business structure, offshore company UAE, company structure options',
    audience: 'Founders evaluating jurisdiction',
  },
  {
    slug: 'uae-business-license-types',
    title: 'UAE Business License Types Explained: Which One Do You Need?',
    excerpt:
      'Learn how the different UAE business license categories work and how to match the right licence to your activity, business model and market goals.',
    date: '24 Jul 2025',
    category: 'Licensing',
    image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'UAE Business License Types Explained | Klay Consultants',
    metaDescription:
      'Explore the different UAE business license types and choose the correct one for your company activity, ownership model and market strategy.',
    metaKeywords: 'UAE business licence types, trade license UAE, professional license UAE, commercial license UAE',
    audience: 'Company founders and investors',
  },
  {
    slug: 'free-zone-vs-mainland-visa-rules',
    title: 'Free Zone vs Mainland Visa Rules in the UAE: What Changes for Your Team?',
    excerpt:
      'Understand how visa eligibility, employment rules and sponsor conditions differ between UAE Free Zones and Mainland company structures.',
    date: '16 Jul 2025',
    category: 'Visas',
    image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'Free Zone vs Mainland Visa Rules in the UAE | Klay Consultants',
    metaDescription:
      'Compare UAE Free Zone and Mainland visa rules to understand sponsorship, employee eligibility and the practical differences for your business.',
    metaKeywords: 'UAE visa rules, Free Zone visa rules, Mainland visa UAE, business visa comparison',
    audience: 'Teams and HR managers',
  },
  {
    slug: 'offshore-company-uae-guide',
    title: 'UAE Offshore Company Guide: When It Makes Sense and When It Does Not',
    excerpt:
      'Discover how UAE offshore companies are used for asset holding, international trade and structuring, and the limits of what they can do locally.',
    date: '8 Jul 2025',
    category: 'Offshore',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'UAE Offshore Company Guide | Klay Consultants',
    metaDescription:
      'Understand when a UAE offshore company is the right structure for your international business, asset holding or holding company plans.',
    metaKeywords: 'UAE offshore company, offshore company setup UAE, UAE holding company, international business structuring',
    audience: 'Investors and international founders',
  },
  {
    slug: 'uae-trademark-registration-process',
    title: 'Trademark Registration in the UAE: How to Protect Your Brand',
    excerpt:
      'A practical overview of the UAE trademark registration journey, from search and filing to approval, publication and renewals.',
    date: '1 Jul 2025',
    category: 'IP & Branding',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'UAE Trademark Registration Guide | Klay Consultants',
    metaDescription:
      'Learn how to register a trademark in the UAE, protect your brand and navigate the process with clarity from search to final registration.',
    metaKeywords: 'UAE trademark registration, brand protection UAE, trademark filing UAE, IP registration Dubai',
    audience: 'Brand owners and founders',
  },
  {
    slug: 'uae-resident-visa-options',
    title: 'UAE Resident Visa Options: Which Route Fits Your Situation?',
    excerpt:
      'Explore the main UAE resident visa pathways for founders, investors, employees and family members and how each route differs in practice.',
    date: '20 Jun 2025',
    category: 'Residency',
    image: 'https://images.pexels.com/photos/2103099/pexels-photo-2103099.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'UAE Resident Visa Options Explained | Klay Consultants',
    metaDescription:
      'Compare the main UAE resident visa routes available to founders, investors, employees and family members and choose the right path for your circumstances.',
    metaKeywords: 'UAE resident visa, Dubai visa options, investor visa UAE, family visa UAE',
    audience: 'Expats and business owners',
  },
  {
    slug: 'uae-vat-registration-guide',
    title: 'UAE VAT Registration: A Practical Guide for Businesses',
    excerpt:
      'Learn when UAE businesses need to register for VAT, what records to prepare and how to manage ongoing filing responsibilities.',
    date: '12 Jun 2025',
    category: 'Tax & Compliance',
    image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'UAE VAT Registration Guide for Businesses | Klay Consultants',
    metaDescription:
      'Understand UAE VAT registration, the information businesses should prepare and the key filing and record-keeping responsibilities to plan for.',
    metaKeywords: 'UAE VAT registration, VAT UAE business, UAE VAT filing, VAT compliance Dubai',
    audience: 'UAE business owners and finance teams',
  },
  {
    slug: 'uae-branch-office-setup',
    title: 'Opening a Branch Office in the UAE: Key Steps and Considerations',
    excerpt:
      'Explore how an overseas company can establish a UAE branch, including licensing, documents, local representation and ongoing obligations.',
    date: '4 Jun 2025',
    category: 'Business Setup',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'UAE Branch Office Setup | Klay Consultants',
    metaDescription:
      'Review the main requirements for opening a UAE branch office, from parent-company documents and approvals to licensing and local compliance.',
    metaKeywords: 'UAE branch office setup, foreign company branch UAE, Dubai branch registration, UAE business expansion',
    audience: 'International companies expanding to the UAE',
  },
  {
    slug: 'uae-shareholder-agreement-guide',
    title: 'Shareholder Agreements in the UAE: What Founders Should Consider',
    excerpt:
      'Understand how a shareholder agreement can clarify roles, decision-making, ownership transfers and dispute resolution between business partners.',
    date: '27 May 2025',
    category: 'Business Advisory',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=940',
    metaTitle: 'UAE Shareholder Agreement Guide | Klay Consultants',
    metaDescription:
      'Learn what founders should consider in a UAE shareholder agreement, including governance, share transfers, responsibilities and dispute processes.',
    metaKeywords: 'UAE shareholder agreement, shareholders agreement Dubai, UAE business partners, company governance UAE',
    audience: 'Founders, co-founders and investors',
  },
] as const;
