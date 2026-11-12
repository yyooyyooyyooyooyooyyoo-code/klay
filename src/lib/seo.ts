import { BLOG_POSTS } from '../content/blog/posts';
import type { BlogArticleDetails, BlogPostSummary } from '../content/blog/types';
import { COMPANY, SERVICES } from './data';
import pageSeo from './seo-pages.json';
import {
  BLOG_POSTS_PER_PAGE,
  canonicalizeInternalRoute,
  getBlogArticleRoute,
  getBlogPageRoute,
  ROUTES,
} from './routes';

export const SITE_ORIGIN = 'https://klayconsultants.com';

export interface PageSeo {
  title: string;
  description: string;
  keyword: string;
  canonical: string;
  image: string;
  type: 'website' | 'article';
  openGraphTitle?: string;
  noindex?: boolean;
}

export interface PublicSeoRoute {
  path: string;
  source: 'page' | 'service' | 'article';
  /** Source file whose last git commit date is used as the sitemap lastmod. */
  lastmodSource?: string;
  /** Explicit lastmod (YYYY-MM-DD), used for articles. */
  lastmod?: string;
}

const serviceSeo: Record<string, { title: string; description: string; keyword: string }> = {
  'mainland-company-setup': {
    title: 'Mainland Company Formation in Dubai | Klay Consultants',
    description:
      'Explore Mainland company formation in Dubai, including licensing, ownership, activity approvals and setup requirements for your business.',
    keyword: 'Mainland Company Formation in Dubai',
  },
  'free-zone-company-setup': {
    title: 'Free Zone Company Formation UAE | Klay Consultants',
    description:
      'Compare UAE Free Zone company formation options, licensing, visa needs and operating requirements with guidance from Klay Consultants.',
    keyword: 'Free Zone Company Formation in UAE',
  },
  'offshore-company-setup': {
    title: 'Offshore Company Formation UAE | Klay Consultants',
    description:
      'Learn about UAE offshore company formation, potential uses, jurisdiction requirements and limitations before choosing a structure.',
    keyword: 'Offshore Company Formation in UAE',
  },
  'corporate-bank-account': {
    title: 'UAE Corporate Bank Account Assistance | Klay Consultants',
    description:
      'Get guidance preparing for a UAE corporate bank account application, including bank selection, company documents and KYC information.',
    keyword: 'UAE corporate bank account assistance',
  },
};

const defaultImage = `${SITE_ORIGIN}/images/og-default.jpg`;

const MONTHS: Record<string, string> = {
  jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
  jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12',
};

/** '7 Nov 2026' -> '2026-11-07' (timezone-independent). */
export function toIsoDate(date: string): string | undefined {
  const match = date.trim().match(/^(\d{1,2})\s+([A-Za-z]{3})[A-Za-z]*\.?\s+(\d{4})$/);
  const month = match && MONTHS[match[2].toLowerCase()];
  return match && month ? `${match[3]}-${month}-${match[1].padStart(2, '0')}` : undefined;
}

function normalizedPath(pathname: string): string {
  const path = canonicalizeInternalRoute(pathname.split(/[?#]/, 1)[0]).replace(/\/+$/, '');
  return path || '/';
}

function canonicalFor(path: string): string {
  const canonicalPath = canonicalizeInternalRoute(path);
  return `${SITE_ORIGIN}${canonicalPath === '/' ? '/' : canonicalPath}`;
}

function findArticle(path: string): BlogPostSummary | undefined {
  const slug = path.startsWith('/blog/') ? path.slice('/blog/'.length) : path.slice(1);
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  return post && getBlogArticleRoute(post.slug).replace(/\/+$/, '') === path ? post : undefined;
}

/** Number of blog listing pages (page 1 is /blog/). */
export const BLOG_PAGE_COUNT = Math.max(1, Math.ceil(BLOG_POSTS.length / BLOG_POSTS_PER_PAGE));

/** Listing page number for /blog/page/N (N >= 2 and in range), otherwise undefined. */
function findBlogPage(path: string): number | undefined {
  const match = path.match(/^\/blog\/page\/([1-9]\d*)$/);
  const page = match ? Number(match[1]) : 0;
  return page >= 2 && page <= BLOG_PAGE_COUNT ? page : undefined;
}

function findService(path: string) {
  return SERVICES.find((item) => `/services/${item.slug}` === path);
}

function fromRecord(
  path: string,
  metadata: {
    title: string;
    description: string;
    keyword?: string;
    image?: string;
    type?: 'website' | 'article';
    openGraphTitle?: string;
    noindex?: boolean;
  },
): PageSeo {
  return {
    title: metadata.title,
    description: metadata.description,
    keyword: metadata.keyword ?? '',
    canonical: canonicalFor(path),
    image: metadata.image
      ? metadata.image.startsWith('/')
        ? `${SITE_ORIGIN}${metadata.image}`
        : metadata.image
      : defaultImage,
    type: metadata.type ?? 'website',
    openGraphTitle: metadata.openGraphTitle,
    noindex: metadata.noindex,
  };
}

export function getPageSeo(pathname: string): PageSeo {
  const path = normalizedPath(pathname);
  const staticMetadata = (pageSeo as Record<string, {
    title: string;
    description: string;
    keyword?: string;
    openGraphTitle?: string;
  }>)[path];
  if (staticMetadata) return fromRecord(path, staticMetadata);

  const blogPage = findBlogPage(path);
  if (blogPage) {
    // Each listing page is indexable with its own (self-referencing) canonical.
    return fromRecord(path, {
      title: `UAE Business Setup Blog – Page ${blogPage} | Klay Consultants`,
      description: `Page ${blogPage} of Klay Consultants guides on UAE company formation, licences, visas, banking and compliance.`,
      keyword: 'UAE business setup guides',
    });
  }

  const article = findArticle(path);
  if (article) {
    return fromRecord(path, {
      title: article.metaTitle,
      description: article.metaDescription,
      keyword: article.focusKeyword,
      image: article.image,
      type: 'article',
    });
  }

  const service = findService(path);
  if (service) {
    return fromRecord(path, serviceSeo[service.slug] ?? {
      title: `${service.title} in the UAE | Klay Consultants`,
      description: `${service.short} Get practical guidance from Klay Consultants in Dubai.`,
      keyword: service.title,
    });
  }

  return {
    title: 'Page not found | Klay Consultants',
    description: 'The requested page could not be found.',
    keyword: '',
    canonical: canonicalFor(path),
    image: defaultImage,
    type: 'website',
    noindex: true,
  };
}

const staticRoutes: PublicSeoRoute[] = [
  { path: ROUTES.home, source: 'page', lastmodSource: 'src/pages/HomePage.tsx' },
  { path: ROUTES.about, source: 'page', lastmodSource: 'src/pages/AboutPage.tsx' },
  { path: ROUTES.services, source: 'page', lastmodSource: 'src/pages/ServicesPage.tsx' },
  { path: ROUTES.businessSetup, source: 'page', lastmodSource: 'src/pages/BusinessSetupPage.tsx' },
  { path: ROUTES.blog, source: 'page', lastmodSource: 'src/content/blog/posts.ts' },
  { path: ROUTES.costCalculator, source: 'page', lastmodSource: 'src/pages/CostCalculatorPage.jsx' },
  { path: ROUTES.contact, source: 'page', lastmodSource: 'src/pages/ContactPage.tsx' },
  { path: ROUTES.goldenVisa, source: 'page', lastmodSource: 'src/pages/GoldenVisaPage.tsx' },
  { path: ROUTES.privacy, source: 'page', lastmodSource: 'src/pages/PrivacyPage.tsx' },
  { path: ROUTES.terms, source: 'page', lastmodSource: 'src/pages/TermsPage.tsx' },
];

/** Every indexable URL: static pages, blog listing pages, service pages and all blog articles. */
export function getPublicSeoRoutes(): PublicSeoRoute[] {
  return [
    ...staticRoutes,
    ...Array.from({ length: BLOG_PAGE_COUNT - 1 }, (_, index): PublicSeoRoute => ({
      path: getBlogPageRoute(index + 2),
      source: 'page',
      lastmodSource: 'src/content/blog/posts.ts',
    })),
    ...SERVICES.map((service): PublicSeoRoute => ({
      path: `/services/${service.slug}/`,
      source: 'service',
      lastmodSource: 'src/lib/data.ts',
    })),
    ...BLOG_POSTS.map((post): PublicSeoRoute => ({
      path: getBlogArticleRoute(post.slug),
      source: 'article',
      lastmod: toIsoDate(post.updated ?? post.date),
      lastmodSource: `src/content/blog/articles/${post.slug}.ts`,
    })),
  ];
}

/** Routes rendered to static HTML at build time. */
export function getPrerenderRoutes(): PublicSeoRoute[] {
  return getPublicSeoRoutes();
}

function organizationSchema() {
  return {
    '@type': 'ProfessionalService',
    '@id': `${SITE_ORIGIN}/#organization`,
    name: COMPANY.name,
    url: `${SITE_ORIGIN}/`,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'THE EXCHANGE TOWER - Office No.2522, Business Bay',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY.phone,
      email: COMPANY.email,
      contactType: 'customer service',
    },
  };
}

/**
 * JSON-LD for a page. `articleDetails` (from the article module) adds the rich image
 * description; it is passed during prerendering and optional on the client.
 */
export function getStructuredData(pathname: string, articleDetails?: BlogArticleDetails): object {
  const path = normalizedPath(pathname);
  const seo = getPageSeo(path);
  const article = findArticle(path);
  const service = findService(path);
  const blogPage = article ? undefined : findBlogPage(path);
  const graph: object[] = [
    organizationSchema(),
    {
      '@type': 'WebSite',
      '@id': `${SITE_ORIGIN}/#website`,
      url: `${SITE_ORIGIN}/`,
      name: COMPANY.name,
      publisher: { '@id': `${SITE_ORIGIN}/#organization` },
      inLanguage: 'en',
    },
    {
      '@type': 'WebPage',
      '@id': `${seo.canonical}#webpage`,
      url: seo.canonical,
      name: seo.title,
      description: seo.description,
      isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
      about: { '@id': `${SITE_ORIGIN}/#organization` },
      primaryImageOfPage: seo.image,
      inLanguage: 'en',
    },
  ];

  if (path !== '/') {
    const crumbs = [{ name: 'Home', item: `${SITE_ORIGIN}/` }];
    if (article || blogPage) crumbs.push({ name: 'Blog', item: `${SITE_ORIGIN}${ROUTES.blog}` });
    else if (service) crumbs.push({ name: 'Services', item: `${SITE_ORIGIN}${ROUTES.services}` });
    const currentName = blogPage ? `Page ${blogPage}` : article?.title ?? seo.title.split('|')[0].trim();
    crumbs.push({ name: currentName, item: seo.canonical });
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.item,
      })),
    });
  }

  if (article) {
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${seo.canonical}#article`,
      headline: article.title,
      description: article.metaDescription,
      image: articleDetails?.imageDescription
        ? {
            '@type': 'ImageObject',
            url: seo.image,
            name: articleDetails.imageTitle,
            caption: articleDetails.imageCaption,
            description: articleDetails.imageDescription,
            keywords: articleDetails.imageTags?.join(', '),
          }
        : seo.image,
      datePublished: toIsoDate(article.date),
      dateModified: toIsoDate(article.updated ?? article.date),
      author: { '@id': `${SITE_ORIGIN}/#organization` },
      publisher: { '@id': `${SITE_ORIGIN}/#organization` },
      mainEntityOfPage: { '@id': `${seo.canonical}#webpage` },
      keywords: articleDetails?.metaKeywords,
      inLanguage: 'en',
    });
  }

  if (service) {
    graph.push({
      '@type': 'Service',
      '@id': `${seo.canonical}#service`,
      name: service.title,
      description: service.short,
      url: seo.canonical,
      provider: { '@id': `${SITE_ORIGIN}/#organization` },
      areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export function applyPageSeo(pathname: string): void {
  const seo = getPageSeo(pathname);
  document.title = seo.title;

  const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
    let element = document.head.querySelector<HTMLMetaElement>(selector);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, key);
      document.head.appendChild(element);
    }
    element.content = content;
  };

  setMeta('meta[name="description"]', 'name', 'description', seo.description);
  setMeta('meta[name="robots"]', 'name', 'robots', seo.noindex ? 'noindex,follow' : 'index,follow');
  if (seo.keyword) setMeta('meta[name="keywords"]', 'name', 'keywords', seo.keyword);
  setMeta('meta[property="og:title"]', 'property', 'og:title', seo.openGraphTitle ?? seo.title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', seo.description);
  setMeta('meta[property="og:url"]', 'property', 'og:url', seo.canonical);
  setMeta('meta[property="og:type"]', 'property', 'og:type', seo.type);
  setMeta('meta[property="og:image"]', 'property', 'og:image', seo.image);
  setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);
  setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', seo.image);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = seo.canonical;

  let jsonLd = document.head.querySelector<HTMLScriptElement>('#seo-jsonld');
  if (!jsonLd) {
    jsonLd = document.createElement('script');
    jsonLd.id = 'seo-jsonld';
    jsonLd.type = 'application/ld+json';
    document.head.appendChild(jsonLd);
  }
  jsonLd.textContent = JSON.stringify(getStructuredData(pathname));
}
