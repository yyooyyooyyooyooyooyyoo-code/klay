import { Children, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const copies = Array.from({ length: Math.max(1, repeat) });

  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
        vertical ? 'flex-col' : 'flex-row',
        className,
      )}
    >
      {copies.map((_, index) => (
        <div
          key={index}
          aria-hidden={index > 0 ? true : undefined}
          className={cn(
            'flex shrink-0 justify-around [gap:var(--gap)]',
            vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row',
            'motion-reduce:animate-none',
            pauseOnHover && 'group-hover:[animation-play-state:paused]',
            reverse && '[animation-direction:reverse]',
          )}
        >
          {Children.map(children, (child) => child)}
        </div>
      ))}
    </div>
  );
}
