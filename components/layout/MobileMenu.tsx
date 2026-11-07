'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from '@/components/ui/link';
import { cn } from '@/lib/utils';

const STAGGER = 0.035;

function MobileMenuText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const characters = [...children];

  const renderCharacters = (row: 'top' | 'bottom') => (
    <span className={cn('block whitespace-pre', row === 'bottom' && 'absolute inset-0')} aria-hidden={row === 'bottom'}>
      {characters.map((character, index) => (
        <motion.span
          key={`${row}-${index}`}
          className="inline-block"
          variants={{
            initial: { y: row === 'top' ? '0%' : '100%' },
            hovered: { y: row === 'top' ? '-100%' : '0%' },
          }}
          transition={{
            ease: 'easeInOut',
            delay: reduceMotion ? 0 : STAGGER * index,
            duration: reduceMotion ? 0 : 0.2,
          }}
        >
          {character}
        </motion.span>
      ))}
    </span>
  );

  return (
    <motion.span
      initial="initial"
      whileHover={reduceMotion ? undefined : 'hovered'}
      whileTap={reduceMotion ? undefined : 'hovered'}
      className={cn('relative inline-block overflow-hidden align-middle leading-normal', className)}
    >
      {renderCharacters('top')}
      {renderCharacters('bottom')}
    </motion.span>
  );
}

export type MobileMenuItem = {
  label: string;
  href: string;
  isActive: boolean;
};

export function MobileMenu({ items }: { items: MobileMenuItem[] }) {
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
        className="flex h-10 w-10 items-center justify-center rounded-full text-white/90 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
