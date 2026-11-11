import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { NotFoundPage } from '@/components/NotFoundPage';
import { Footer } from '@/components/layout/Footer';
import { FloatingContactWidget } from '@/components/layout/FloatingContactWidget';
import { Header } from '@/components/layout/Header';
import { SiteBackground } from '@/components/layout/SiteBackground';
import { applyPageSeo } from '@/lib/seo';
import { ROUTES } from '@/src/config/routes';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const HomePage = lazy(() => import('@/app/page'));
const AboutPage = lazy(() => import('@/app/about/page'));
const BlogPage = lazy(() => import('@/app/blog/page'));
const BlogArticlePage = lazy(() => import('@/app/blog/[slug]/page'));
const BusinessSetupPage = lazy(() => import('@/app/business-setup/page'));
const ContactPage = lazy(() => import('@/app/contact/page'));
const CostCalculatorPage = lazy(() => import('@/components/cost-calculator/CostCalculatorPage.jsx'));
const GoldenVisaPage = lazy(() => import('@/app/golden-visa/page'));
const PrivacyPage = lazy(() => import('@/app/privacy/page'));
const ServiceDetailPage = lazy(() => import('@/app/services/[slug]/page'));
const ServicesPage = lazy(() => import('@/app/services/page'));
const TermsPage = lazy(() => import('@/app/terms/page'));

function PageMetadata() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    applyPageSeo(pathname);
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${pathname}${search}`,
    });
  }, [pathname, search]);

  return null;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      const previousBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = previousBehavior;
    }
  }, [pathname, hash]);

  return null;
}

export function SiteRoutes() {
  const { pathname } = useLocation();
  const normalizedPathname = pathname.replace(/\/+$/, '');
  const isBusinessSetupPage =
    normalizedPathname === ROUTES.businessSetup.replace(/\/+$/, '') ||
    normalizedPathname === '/business-setup';
  const isCostCalculatorPage =
    normalizedPathname === ROUTES.costCalculator.replace(/\/+$/, '');

  return (
    <>
      <PageMetadata />
      <ScrollToTop />
      {!isBusinessSetupPage && !isCostCalculatorPage && <SiteBackground />}
      <Header />
      <main className="flex-1">
        <Suspense fallback={null}>
          <Routes>
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route path={ROUTES.about} element={<AboutPage />} />
            <Route path={ROUTES.blog} element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path={ROUTES.businessSetup} element={<BusinessSetupPage />} />
            <Route path="/business-setup" element={<BusinessSetupPage />} />
            <Route path="/:slug" element={<BlogArticlePage />} />
            <Route path={ROUTES.contact} element={<ContactPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path={ROUTES.costCalculator} element={<CostCalculatorPage />} />
            <Route path={ROUTES.goldenVisa} element={<GoldenVisaPage />} />
            <Route path={ROUTES.privacy} element={<PrivacyPage />} />
            <Route path={ROUTES.services} element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path={ROUTES.terms} element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      {!isBusinessSetupPage && <FloatingContactWidget />}
      <Footer />
    </>
  );
}

export function SiteApp() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteRoutes />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteApp />
    </BrowserRouter>
  );
}
