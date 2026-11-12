import { Loader2 } from 'lucide-react';
import type { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Link } from '@/components/ui/link';

type Variant = 'gold' | 'navy' | 'outline-gold' | 'outline-navy' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface LiquidButtonProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  loading?: boolean;
  icon?: ReactNode;
}

const sizeStyles: Record<Size, CSSProperties> = {
  sm: { padding: '0 24px', fontSize: '16px', minHeight: '48px' },
  md: { padding: '0 24px', fontSize: '16px', minHeight: '48px' },
  lg: { padding: '0 24px', fontSize: '16px', minHeight: '48px' },
};

const blueStyle: CSSProperties = {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  lineHeight: 1,
  textDecoration: 'none',
  maxWidth: '100%',
  textAlign: 'center',
  whiteSpace: 'normal',
};

export function LiquidButton({
  children,
  className,
  variant = 'gold',
  size = 'md',
  href,
  onClick,
  type = 'button',
  loading = false,
  icon,
}: LiquidButtonProps) {
  const style: CSSProperties = {
    ...blueStyle,
    ...sizeStyles[size],
    cursor: loading ? 'wait' : 'pointer',
    opacity: loading ? 0.65 : 1,
  };

  const content = (
    <span className="relative z-10 inline-flex items-center justify-center">
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
      {icon && !loading && <span className="ml-2 inline-flex items-center">{icon}</span>}
    </span>
  );
  const classes = cn('site-button', className);

  if (href?.startsWith('/')) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={classes}
        style={style}
        data-variant={variant}
        aria-busy={loading}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        style={style}
        data-variant={variant}
        aria-busy={loading}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={classes}
      style={style}
      data-variant={variant}
      aria-busy={loading}
    >
      {content}
    </button>
  );
}
