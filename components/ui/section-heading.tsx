import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  variant?: 'navy' | 'gold';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  variant = 'navy',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4',
            variant === 'gold'
              ? 'bg-gold-600/10 text-palette-gold border border-gold-600/20'
              : 'bg-navy-600/10 text-black border border-navy-600/20'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-black leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
