export const ROUTES = {
  home: '/',
  about: '/about/',
  services: '/services/',
  businessSetup: '/bussines-setup-page/',
  blog: '/blog/',
  contact: '/contact-us/',
  goldenVisa: '/golden-visa/',
  costCalculator: '/cost-calculator/',
  thankYou: '/thank-you/',
  customerCabinet: '/customer-cabinet/',
  privacy: '/privacy/',
  terms: '/terms/',
} as const;

export const WORDPRESS_PAGE_ROUTES = [
  ROUTES.home,
  ROUTES.businessSetup,
  ROUTES.blog,
  ROUTES.services,
  ROUTES.thankYou,
  ROUTES.customerCabinet,
  ROUTES.goldenVisa,
  ROUTES.about,
  ROUTES.costCalculator,
  ROUTES.contact,
] as const;

export const WORDPRESS_SITEMAP_PAGE_ROUTES = [
  ROUTES.home,
  ROUTES.businessSetup,
  ROUTES.blog,
  ROUTES.services,
] as const;

export const WORDPRESS_POST_SLUGS = [
  'uae-is-not-a-tax-haven-anymore-its-a-tax-strategy-hub',
  'shareholder-agreement-uae-why-it-matters',
  'the-uae-court-system-dispute-resolution',
  'convert-free-zone-to-mainland-uae',
  'end-of-service-gratuity-uae-calculation-guide-klay-consultants',
  'uae-dependent-visa-sponsorship-family-visa-guide-klay-consultants',
  'transfer-shareholders-uae-company',
  'open-personal-bank-account-uae',
  'how-to-transfer-a-corporate-bank-account-in-uae',
  'legal-heir-certificate-uae-will-probate-guide',
  'restructuring-your-uae-company-when-and-how-to-change-structure',
  'estate-planning-for-blended-families-and-unmarried-couples-in-the-uae-klay-consultants',
  'updating-revoking-and-amending-your-uae-will-klay-consultants',
  'uae-will-vs-home-country-will-do-expats-need-both-klay-consultants',
  'power-of-attorney-in-the-uae-a-guide-for-business-owners-expats-klay-consultants',
  'including-business-shares-in-your-uae-will-klay-consultants',
  'guardianship-for-minor-children-in-a-uae-will-klay-consultants',
  'how-to-register-a-non-muslim-will-in-the-uae-step-by-step-klay-consultants',
  'difc-wills-vs-abu-dhabi-wills-registry-which-should-you-choose-klay-consultants',
  'what-happens-if-you-die-without-a-will-in-the-uae',
  'tourist-bank-accounts-in-the-uae',
  'fast-company-incorporation-in-4-days-the-smart-way-to-launch-your-business',
  'why-dubai-business-market-is-becoming-more-selective',
  'the-real-cost-of-cheap-business-setup-in-dubai',
  'why-trust-is-becoming-the-most-valuable-currency-in-dubai-business',
  'company-incorporation-services-with-legal-structuring-why-it-matters-for-long-term-business-growth',
  'elementor-5407',
  'how-incorporation-banking-aml-and-esr-work-together-in-the-uae',
  'uae-import-export-license-how-to-start-a-trading-business',
  'opening-a-restaurant-or-cafe-in-the-uae-guide',
  'elementor-5791',
  'uae-investor-visa-vs-partner-visa-a-complete-guide',
  'how-to-open-a-branch-of-a-foreign-company-in-the-uae-klay-consultants-2',
  'uae-real-estate-investment-for-foreigners-complete-guide-klay-consultants',
  'uae-holding-company-setup-complete-guide-klay-consultants',
  'uae-freelance-visa-freelance-license-guide-2026-klay-consultants-2',
  'trademark-registration-uae-complete-guide-costs-process-klay-consultants',
  'uae-aml-kyc-compliance-for-businesses-complete-guide-klay-consultants',
  'opening-a-restaurant-or-cafe-in-the-u-a-e-licensing-approvals-klay-consultants',
  'uae-investor-visa-vs-partner-visa-what-business-owners-need-to-know',
  'how-to-open-a-branch-of-a-foreign-company-in-the-uae-klay-consultants',
  'buying-property-in-the-uae-as-a-foreign-investor-guide-klay-consultants',
  'setting-up-a-holding-company-in-the-uae-complete-guide-klay-consultants',
  'uae-freelance-visa-freelance-license-guide-2026-klay-consultants',
] as const;

export const USER_PROVIDED_POST_SLUGS = [
  'difc-and-adgm-will-registration-a-modern-estate-planning-solution-for-expats-in-the-uae',
  'inheritance-and-succession-planning-in-the-uae-why-expats-must-plan-early',
  'aml-compliance-in-the-uae-what-every-business-must-know',
  'uae-business-bank-account-opening-why-structure-matters-before-you-apply',
  'esr-filing-in-the-uae-understanding-economic-substance-regulations',
  'how-incorporation-banking-aml-and-esr-work-together-in-the-uae',
] as const;

export const WORDPRESS_CATEGORY_SLUGS = ['uncategorized', 'blog'] as const;

export const WORDPRESS_TAG_SLUGS = [
  'uae-will-registration',
  'klay-consultants',
  'inheritance-planning-uae',
  'estate-planning-uae',
  'dubai-business-registration',
  'uae-company-incorporation-guide',
  'uae-trade-license-requirements',
  'dubai-business-setup',
  'free-zone-vs-mainland-uae',
  'open-bank-account-uae-company',
  'uae-company-formation',
  'aml-compliance-uae',
  'trademark-registration-uae',
  'uae-trademark',
  'trademark-protection-uae',
  'freelance-visa-uae',
  'uae-freelance-license',
  'uae-real-estate-investment',
  'uae-real-estate-investment-for-foreigners',
  'dubai-property-investment',
  'uae-freehold-property',
  'foreign-company-branch-uae',
  'uae-branch-office',
  'branch-office-uae',
  'uae-business-owners-choosing-a-residency-route',
  'uae-freelance-visa-freelance-license-guide-2026-klay-consultants',
  'open-a-branch-of-a-foreign-company',
  'fb-business-setup-uae',
  'uae-will',
  'difc-wills',
  'uae-inheritance-law',
  'business-succession-uae',
  'wills-for-expats',
  'uae-legal-services',
  'guardianship-uae',
  'abu-dhabi-wills',
  'uae-wills',
  'dubai-expats',
  'adjd-wills-registry',
  'uae-estate-planning',
  'difc-wills-service-centre',
  'abu-dhabi-expats',
  'non-muslim-will-uae',
  'register-a-will-in-uae',
  'business-owners-will',
  'adjd-wills',
  'guardianship-will',
  'minor-children-uae',
] as const;

const wordpressPostSlugSet = new Set<string>(WORDPRESS_POST_SLUGS);
const userProvidedPostSlugSet = new Set<string>(USER_PROVIDED_POST_SLUGS);
const wordpressCategorySlugSet = new Set<string>(WORDPRESS_CATEGORY_SLUGS);
const wordpressTagSlugSet = new Set<string>(WORDPRESS_TAG_SLUGS);

export function isWordPressPostSlug(slug: string): boolean {
  return wordpressPostSlugSet.has(slug);
}

export function isPublicRootPostSlug(slug: string): boolean {
  return wordpressPostSlugSet.has(slug) || userProvidedPostSlugSet.has(slug);
}

export function getBlogArticleRoute(slug: string): string {
  return isPublicRootPostSlug(slug) ? `/${slug}/` : `${ROUTES.blog}${slug}/`;
}

/** Posts shown on each blog listing page. */
export const BLOG_POSTS_PER_PAGE = 12;

/** Blog listing page N; page 1 is the blog index itself (/blog/), later pages are /blog/page/N/. */
export function getBlogPageRoute(page: number): string {
  return page <= 1 ? ROUTES.blog : `${ROUTES.blog}page/${page}/`;
}

export function getWordPressCategoryRoute(slug: string): string | undefined {
  return wordpressCategorySlugSet.has(slug) ? `/category/${slug}/` : undefined;
}

export function getWordPressTagRoute(slug: string): string | undefined {
  return wordpressTagSlugSet.has(slug) ? `/tag/${slug}/` : undefined;
}

const routeAliases: Record<string, string> = {
  '/about': ROUTES.about,
  '/services': ROUTES.services,
  '/business-setup': ROUTES.businessSetup,
  '/blog': ROUTES.blog,
  '/contact': ROUTES.contact,
  '/golden-visa': ROUTES.goldenVisa,
  '/privacy': ROUTES.privacy,
  '/terms': ROUTES.terms,
};

export function canonicalizeInternalRoute(href: string): string {
  if (!href.startsWith('/') || href.startsWith('//')) return href;

  const suffixIndex = href.search(/[?#]/);
  const pathname = suffixIndex < 0 ? href : href.slice(0, suffixIndex);
  const suffix = suffixIndex < 0 ? '' : href.slice(suffixIndex);
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  // /blog/page/1/ is the blog index; /blog/page/N/ (two segments) is never an article.
  if (normalizedPath === '/blog/page/1') return `${ROUTES.blog}${suffix}`;
  const legacyPost = normalizedPath.match(/^\/blog\/([^/]+)$/);

  if (legacyPost && isPublicRootPostSlug(legacyPost[1])) {
    return `${getBlogArticleRoute(legacyPost[1])}${suffix}`;
  }

  const alias = routeAliases[normalizedPath];
  if (alias) return `${alias}${suffix}`;
  return `${normalizedPath === '/' ? '/' : `${normalizedPath}/`}${suffix}`;
}
