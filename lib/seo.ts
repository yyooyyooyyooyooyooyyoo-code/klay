import { BLOG_PREVIEW, COMPANY, IMAGES, SERVICES } from './data';
import pageSeo from './seo-pages.json';

export const SITE_ORIGIN = 'https://klayconsultants.com';

export interface PageSeo {
  title: string;
  description: string;
  keyword: string;
  canonical: string;
  image: string;
  type: 'website' | 'article';
  noindex?: boolean;
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

const defaultImage = IMAGES.heroSkyline;

function normalizedPath(pathname: string): string {
  const path = pathname.split(/[?#]/, 1)[0].replace(/\/+$/, '');
  return path || '/';
}

function canonicalFor(path: string): string {
  return `${SITE_ORIGIN}${path === '/' ? '/' : `${path}/`}`;
}

function fromRecord(
  path: string,
  metadata: { title: string; description: string; keyword?: string; image?: string; type?: 'website' | 'article' },
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
  };
}

export function getPageSeo(pathname: string): PageSeo {
  const path = normalizedPath(pathname);
  const staticMetadata = (pageSeo as Record<string, { title: string; description: string; keyword: string }>)[path];
  if (staticMetadata) return fromRecord(path, staticMetadata);

  const blogPrefix = '/blog/';
  if (path.startsWith(blogPrefix)) {
    const article = BLOG_PREVIEW.find((post) => `${blogPrefix}${post.slug}` === path);
    if (article) {
      return fromRecord(path, {
        title: article.metaTitle,
        description: article.metaDescription,
        keyword: 'focusKeyword' in article ? article.focusKeyword : article.metaKeywords,
        image: article.image,
        type: 'article',
      });
    }
  }

  const servicePrefix = '/services/';
  if (path.startsWith(servicePrefix)) {
    const service = SERVICES.find((item) => `${servicePrefix}${item.slug}` === path);
    if (service) {
      const metadata = serviceSeo[service.slug] ?? {
        title: `${service.title} in the UAE | Klay Consultants`,
        description: `${service.short} Get practical guidance from Klay Consultants in Dubai.`,
        keyword: service.title,
      };
      return fromRecord(path, metadata);
    }
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

export interface PublicSeoRoute {
  path: string;
  source: string;
  lastmodSource: string;
}

const staticRoutes: PublicSeoRoute[] = [
  { path: '/', source: 'page', lastmodSource: 'app/page.tsx' },
  { path: '/about', source: 'page', lastmodSource: 'app/about/page.tsx' },
  { path: '/services', source: 'page', lastmodSource: 'app/services/page.tsx' },
  { path: '/business-setup', source: 'page', lastmodSource: 'app/business-setup/page.tsx' },
  { path: '/blog', source: 'page', lastmodSource: 'app/blog/page.tsx' },
  { path: '/contact', source: 'page', lastmodSource: 'app/contact/page.tsx' },
  { path: '/golden-visa', source: 'page', lastmodSource: 'app/golden-visa/page.tsx' },
  { path: '/privacy', source: 'page', lastmodSource: 'app/privacy/page.tsx' },
  { path: '/terms', source: 'page', lastmodSource: 'app/terms/page.tsx' },
];

export function getPublicSeoRoutes(): PublicSeoRoute[] {
  return [
    ...staticRoutes,
    ...SERVICES.map((service) => ({
      path: `/services/${service.slug}`,
      source: 'service',
      lastmodSource: 'lib/data.ts',
    })),
    ...BLOG_PREVIEW.map((article) => ({
      path: `/blog/${article.slug}`,
      source: 'article',
      lastmodSource: 'lib/data.ts',
    })),
  ];
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

export function getStructuredData(pathname: string): object {
  const path = normalizedPath(pathname);
  const seo = getPageSeo(path);
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
      inLanguage: 'en',
      ...(path === '/' ? { primaryImageOfPage: defaultImage } : {}),
    },
  ];

  if (path !== '/') {
    const crumbs = [{ name: 'Home', item: `${SITE_ORIGIN}/` }];
    if (path.startsWith('/blog/')) crumbs.push({ name: 'Blog', item: `${SITE_ORIGIN}/blog/` });
    else if (path.startsWith('/services/')) crumbs.push({ name: 'Services', item: `${SITE_ORIGIN}/services/` });
    crumbs.push({ name: seo.title.split('|')[0].trim(), item: seo.canonical });
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

  const article = BLOG_PREVIEW.find((post) => `/blog/${post.slug}` === path);
  if (article) {
    const datePublished = new Date(article.date);
    graph.push({
      '@type': 'Article',
      '@id': `${seo.canonical}#article`,
      headline: article.title,
      description: article.metaDescription,
      image: seo.image,
      datePublished: Number.isNaN(datePublished.getTime()) ? undefined : datePublished.toISOString(),
      mainEntityOfPage: { '@id': `${seo.canonical}#webpage` },
      publisher: { '@id': `${SITE_ORIGIN}/#organization` },
      inLanguage: 'en',
    });
  }

  const service = SERVICES.find((item) => `/services/${item.slug}` === path);
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
  setMeta('meta[property="og:title"]', 'property', 'og:title', seo.title);
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
