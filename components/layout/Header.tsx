'use client';

import { useEffect, useMemo, useState } from 'react';
import { Phone, Search } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { COMPANY, NAV_LINKS } from '@/lib/data';
import { Image } from '@/components/ui/image';
import { Link } from '@/components/ui/link';
import { LiquidNavbar, type LiquidNavItem } from '@/components/layout/LiquidNavbar';
import { MobileMenu, type MobileMenuItem } from '@/components/layout/MobileMenu';
import { ROUTES } from '@/src/config/routes';

const DESKTOP_NAV_LINKS = NAV_LINKS
  .filter((link) => link.href !== ROUTES.goldenVisa)
  .map((link) => (link.href === ROUTES.contact ? { ...link, label: 'Contact Us' } : link));

const SEARCH_LINKS = [
  { label: 'Home', href: ROUTES.home },
  { label: 'About Klay Consultants', href: ROUTES.about },
  { label: 'Business services', href: ROUTES.services },
  { label: 'Business Setup', href: ROUTES.businessSetup },
  { label: 'Contact our team', href: ROUTES.contact },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const searchResults = useMemo(
    () => SEARCH_LINKS.filter((item) => item.label.toLowerCase().includes(searchTerm.trim().toLowerCase())),
    [searchTerm]
  );
  const activeIndex = useMemo(
    () => DESKTOP_NAV_LINKS.findIndex((link) => {
      const currentPath = pathname.replace(/\/+$/, '') || '/';
      const linkPath = link.href.replace(/\/+$/, '') || '/';
      return linkPath === '/' ? currentPath === '/' : currentPath === linkPath || currentPath.startsWith(`${linkPath}/`);
    }),
    [pathname]
  );
  const liquidItems: LiquidNavItem[] = useMemo(
    () => DESKTOP_NAV_LINKS.map((link) => ({ label: link.label, href: link.href })),
    []
  );
  const mobileItems: MobileMenuItem[] = useMemo(
    () => [
      ...NAV_LINKS.map((link) => ({
        ...link,
        isActive: link.href === '/' ? pathname === '/' : pathname.startsWith(link.href),
      })),
      {
        label: 'Call Us',
        href: `tel:${COMPANY.phone.replace(/\s/g, '')}`,
        isActive: false,
      },
    ],
    [pathname]
  );

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/15 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 w-[92%] max-w-[1440px] items-center justify-between gap-3 md:h-[72px]">
        <Link href="/" aria-label="Klay Consultants home" className="group flex shrink-0 items-center">
          <Image
            src="/klay-logo.png"
            alt="Klay Consultants"
            width={144}
            height={50}
            loading="eager"
            className="h-auto w-[100px] transition-transform group-hover:scale-[1.02] md:w-[112px]"
          />
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
          <LiquidNavbar
            items={liquidItems}
            active={activeIndex}
            tone="dark"
            compact={false}
            className={`editorial-header-nav${scrolled ? ' editorial-header-nav--scrolled' : ''}`}
            onChange={(_, item) => {
              if (item.href) navigate(item.href);
            }}
          />
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
            aria-label={`Call Klay Consultants at ${COMPANY.phone}`}
            title={COMPANY.phone}
            className={`hidden h-9 w-9 items-center justify-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:flex ${
              scrolled
                ? 'text-gray-900 hover:text-black focus-visible:outline-gray-900'
                : 'text-white/90 hover:text-white focus-visible:outline-white'
            }`}
          >
            <Phone className="header-action-icon" aria-hidden="true" />
          </a>

          <div className="relative hidden md:block">
            <button
              type="button"
              aria-label={isSearchOpen ? 'Close site search' : 'Search the site'}
              aria-expanded={isSearchOpen}
              aria-controls="site-search-panel"
              onClick={() => setIsSearchOpen((open) => !open)}
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                scrolled
                  ? 'text-gray-900 hover:text-black focus-visible:outline-gray-900'
                  : 'text-white/90 hover:text-white focus-visible:outline-white'
              }`}
            >
              <Search className="header-action-icon" aria-hidden="true" />
            </button>
            {isSearchOpen && (
              <div
                id="site-search-panel"
                className="absolute right-0 top-full z-[60] mt-3 w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-xl border border-blue-100 bg-white/95 p-3 text-black shadow-[0_18px_48px_rgba(12,45,72,0.16)] backdrop-blur-xl"
              >
                <label htmlFor="site-search" className="sr-only">Search pages</label>
                <input
                  id="site-search"
                  type="search"
                  autoFocus
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') setIsSearchOpen(false);
                    if (event.key === 'Enter' && searchResults[0]) {
                      event.preventDefault();
                      setIsSearchOpen(false);
                      navigate(searchResults[0].href);
                    }
                  }}
                  placeholder="Search pages..."
                  className="h-11 w-full rounded-lg border border-blue-100 bg-blue-50/50 px-3 text-sm text-black outline-none placeholder:text-black focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                />
                <div className="mt-2 max-h-60 overflow-y-auto">
                  {searchResults.length ? searchResults.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsSearchOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm text-black transition-colors hover:bg-blue-50 hover:text-black"
                    >
                      {item.label}
                    </Link>
                  )) : (
                    <p className="px-3 py-3 text-sm text-black">No matching pages.</p>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link
            href={ROUTES.goldenVisa}
            aria-label="Explore the UAE Golden Visa"
            aria-current={pathname.startsWith('/golden-visa') ? 'page' : undefined}
            className="header-visa-card hidden md:block"
          >
            <span className="header-visa-card__inner" aria-hidden="true">
              <span className="header-visa-card__face header-visa-card__front">
                <span className="header-visa-card__title">GOLDEN VISA</span>
              </span>
              <span className="header-visa-card__face header-visa-card__back">
                <span className="header-visa-card__title">GOLDEN VISA</span>
              </span>
            </span>
          </Link>

          <div className="md:hidden">
            <MobileMenu items={mobileItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
