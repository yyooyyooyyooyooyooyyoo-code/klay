import { Component, lazy, Suspense, useEffect, useRef, type ErrorInfo, type ReactNode } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { SiteBackground } from '@/components/layout/SiteBackground';
import { ROUTES } from '@/lib/routes';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogArticlePage = lazy(() => import('@/pages/BlogArticlePage'));
const BusinessSetupPage = lazy(() => import('@/pages/BusinessSetupPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const CostCalculatorPage = lazy(() => import('@/pages/CostCalculatorPage.jsx'));
const GoldenVisaPage = lazy(() => import('@/pages/GoldenVisaPage'));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
// Not needed for first paint; loaded separately so its animation library stays out of the main bundle.
const FloatingContactWidget = lazy(() =>
  import('@/components/layout/FloatingContactWidget').then((module) => ({ default: module.FloatingContactWidget })),
);

const CHUNK_RELOAD_FLAG = 'chunk-reload';

/**
 * A lazy route/article chunk that fails to load (flaky connection, or an old tab after a redeploy
 * replaced the hashed /assets files) would otherwise unmount the whole app and leave a blank page.
 * The first failure reloads once to pick up the new HTML and assets; after that a short message is shown.
 */
class ChunkErrorBoundary extends Component<{ children: ReactNode; fallback?: ReactNode | null }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Page section failed to load', error, info.componentStack);
    if (this.props.fallback !== undefined) return;
    let reloaded = false;
    try {
      reloaded = sessionStorage.getItem(CHUNK_RELOAD_FLAG) === '1';
      if (!reloaded) sessionStorage.setItem(CHUNK_RELOAD_FLAG, '1');
    } catch {
      reloaded = true; // Without storage a reload could loop; show the message instead.
    }
    if (!reloaded) window.location.reload();
  }

  render() {
    if (!this.state.failed) return this.props.children;
    if (this.props.fallback !== undefined) return this.props.fallback;
    return (
      <div role="alert" className="mx-auto max-w-xl px-5 py-32 text-center">
        <p className="text-lg font-semibold text-black">This page failed to load.</p>
        <a
          href={typeof window === 'undefined' ? '/' : window.location.href}
          className="mt-4 inline-block font-semibold text-[#0C2D48] underline underline-offset-4"
        >
          Reload
        </a>
      </div>
    );
  }
}

/** Clears the one-time reload flag once a page has rendered successfully. */
function ChunkLoadSuccess() {
  useEffect(() => {
    try {
      sessionStorage.removeItem(CHUNK_RELOAD_FLAG);
    } catch {
      // Storage unavailable: nothing to clear.
    }
  }, []);
  return null;
}

function PageMetadata() {
  const { pathname, search } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    let cancelled = false;
    const trackPageView = () => {
      if (cancelled) return;
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: `${pathname}${search}`,
      });
    };
    // A prerendered page already has the correct <head> (including article JSON-LD),
    // so metadata is only rewritten after client-side navigation. The SEO helper (and the
    // blog index it needs) is loaded on demand to keep it out of the main bundle.
    const keepPrerenderedHead = isFirstRender.current && document.getElementById('root')?.dataset.prerendered === 'true';
    isFirstRender.current = false;
    if (keepPrerenderedHead) {
      trackPageView();
    } else {
      void import('@/lib/seo').then(({ applyPageSeo }) => {
        if (!cancelled) applyPageSeo(pathname);
        trackPageView();
      });
    }
    return () => {
      cancelled = true;
    };
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
  const isContactPage =
    normalizedPathname === ROUTES.contact.replace(/\/+$/, '') || normalizedPathname === '/contact';

  return (
    <>
      <PageMetadata />
      <ScrollToTop />
      {!isBusinessSetupPage && !isCostCalculatorPage && <SiteBackground />}
      {/* Keyboard users can jump past the header links; hidden until it receives focus. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black focus:shadow-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#0C2D48]"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <ChunkErrorBoundary key={pathname}>
        <Suspense fallback={null}>
          <ChunkLoadSuccess />
          <Routes>
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route path={ROUTES.about} element={<AboutPage />} />
            <Route path={ROUTES.blog} element={<BlogPage />} />
            <Route path="/blog/page/:page" element={<BlogPage />} />
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
        </ChunkErrorBoundary>
      </main>
      {!isBusinessSetupPage && (
        <ChunkErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <FloatingContactWidget />
          </Suspense>
        </ChunkErrorBoundary>
      )}
      <Footer flushTop={isContactPage} />
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
