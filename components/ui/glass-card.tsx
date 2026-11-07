import { cn } from '@/lib/utils';
import { type CSSProperties, type ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: 'light' | 'dark' | 'transparent';
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className,
  style,
  variant = 'light',
  hover = true,
  onClick,
}: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      style={style}
      className={cn(
        'rounded-2xl backdrop-blur-[20px] transition-all duration-300',
        variant === 'light' && 'glass-card',
        variant === 'dark' && 'glass-dark',
        variant === 'transparent' && 'glass',
        hover && variant === 'light' && 'hover:shadow-glass-lg hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'transparent';
}

export function GlassPanel({ children, className, variant = 'transparent' }: GlassPanelProps) {
  return (
    <div
      className={cn(
        'rounded-2xl backdrop-blur-[20px] p-6 sm:p-8',
        variant === 'light' && 'glass-light',
        variant === 'dark' && 'glass-dark',
        variant === 'transparent' && 'glass',
        className
      )}
    >
      {children}
    </div>
  );
}
