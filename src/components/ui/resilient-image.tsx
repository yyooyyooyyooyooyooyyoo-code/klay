import { useState } from 'react';
import { Image } from '@/components/ui/image';

interface ResilientImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}

export function ResilientImage({
  src,
  fallbackSrc,
  alt,
  sizes,
  className,
  priority = false,
}: ResilientImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [fallbackFailed, setFallbackFailed] = useState(false);

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#EDFBE2] via-[#f2f6f9] to-navy-900/10">
      {!fallbackFailed && (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={className}
          onError={() => {
            if (imageSrc !== fallbackSrc) {
              setImageSrc(fallbackSrc);
            } else {
              setFallbackFailed(true);
            }
          }}
        />
      )}
      {fallbackFailed && (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#EDFBE2] via-white to-navy-900/10"
        >
          <span className="rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-medium text-black shadow-sm backdrop-blur-md">
            Klay Consultants
          </span>
        </div>
      )}
    </div>
  );
}
