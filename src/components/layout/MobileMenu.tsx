import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from '@/components/ui/link';
import { cn } from '@/lib/utils';

const STAGGER_MS = 35;

// Letter-roll hover effect done with CSS transitions (no animation library needed).
function MobileMenuText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const characters = [...children];

  const renderCharacters = (row: 'top' | 'bottom') => (
    <span className={cn('block whitespace-pre', row === 'bottom' && 'absolute inset-0')} aria-hidden="true">
      {characters.map((character, index) => (
        <span
          key={`${row}-${index}`}
          className={cn(
            'inline-block transition-transform duration-200 ease-in-out motion-reduce:transition-none',
            row === 'top'
              ? 'translate-y-0 motion-safe:group-hover/menu-text:-translate-y-full motion-safe:group-active/menu-text:-translate-y-full'
              : 'translate-y-full motion-safe:group-hover/menu-text:translate-y-0 motion-safe:group-active/menu-text:translate-y-0',
          )}
          style={{ transitionDelay: `${STAGGER_MS * index}ms` }}
        >
          {character}
        </span>
      ))}
    </span>
  );

  return (
    <span className={cn('group/menu-text relative inline-block overflow-hidden align-middle leading-normal', className)}>
      {/* The per-character rows are decorative; screen readers get the label once, as plain text. */}
      <span className="sr-only">{children}</span>
      {renderCharacters('top')}
      {renderCharacters('bottom')}
    </span>
  );
}

export type MobileMenuItem = {
  label: string;
  href: string;
  isActive: boolean;
};

// `tone` is the colour of the toggle button: 'light' (white) over a dark hero, 'dark' elsewhere.
export function MobileMenu({ items, tone = 'light' }: { items: MobileMenuItem[]; tone?: 'light' | 'dark' }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="relative">
      <button
        ref={toggleRef}
        type="button"
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
          tone === 'light'
            ? 'text-white/90 hover:text-white focus-visible:outline-white'
            : 'text-gray-900 hover:text-black focus-visible:outline-gray-900'
        }`}
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`absolute right-0 top-full z-50 mt-2 w-[min(19rem,calc(100vw-2rem))] origin-top-right rounded-xl border border-white/15 bg-[#0C2D48]/95 p-2 text-white shadow-[0_18px_48px_rgba(4,17,29,0.28)] backdrop-blur-xl transition-[opacity,transform,visibility] duration-200 ${
          isOpen ? 'visible translate-y-0 opacity-100' : 'invisible pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={item.isActive ? 'page' : undefined}
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            className={`flex min-h-11 items-center justify-between rounded-lg px-3 text-sm font-medium uppercase tracking-[0.5px] text-white/85 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white ${
              item.isActive ? 'bg-white/10 text-white' : ''
            } ${item.href === '/contact' ? 'mt-1 border-t border-white/10 pt-2' : ''}`}
          >
            <MobileMenuText>{item.label}</MobileMenuText>
            {item.isActive && <span className="h-1 w-1 rounded-full bg-white" aria-hidden="true" />}
          </Link>
        ))}
      </nav>
    </div>
  );
}
