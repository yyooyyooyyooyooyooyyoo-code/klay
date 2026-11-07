import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { NotFoundPage } from '@/components/NotFoundPage';
import { Footer } from '@/components/layout/Footer';
import { FloatingContactWidget } from '@/components/layout/FloatingContactWidget';
import { Header } from '@/components/layout/Header';
import { SiteBackground } from '@/components/layout/SiteBackground';
import { applyPageSeo } from '@/lib/seo';

const HomePage = lazy(() => import('@/app/page'));
const AboutPage = lazy(() => import('@/app/about/page'));
const BlogPage = lazy(() => import('@/app/blog/page'));
const BlogArticlePage = lazy(() => import('@/app/blog/[slug]/page'));
const BusinessSetupPage = lazy(() => import('@/app/business-setup/page'));
const ContactPage = lazy(() => import('@/app/contact/page'));
const GoldenVisaPage = lazy(() => import('@/app/golden-visa/page'));
const PrivacyPage = lazy(() => import('@/app/privacy/page'));
const ServiceDetailPage = lazy(() => import('@/app/services/[slug]/page'));
const ServicesPage = lazy(() => import('@/app/services/page'));
const TermsPage = lazy(() => import('@/app/terms/page'));

function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    applyPageSeo(pathname);
  }, [pathname]);

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
  const isBusinessSetupPage = pathname === '/business-setup';

  return (
    <>
      <PageMetadata />
      <ScrollToTop />
      {!isBusinessSetupPage && <SiteBackground />}
      <Header />
      <main className="flex-1">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/business-setup" element={<BusinessSetupPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/golden-visa" element={<GoldenVisaPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/terms" element={<TermsPage />} />
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
