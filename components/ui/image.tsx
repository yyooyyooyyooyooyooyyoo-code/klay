import type { ImgHTMLAttributes } from 'react';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
  priority?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
};

export function Image({ fill = false, priority = false, fetchPriority, style, ...props }: ImageProps) {
  const responsiveSrcSet =
    typeof props.src === 'string' &&
    props.src.includes('images.pexels.com') &&
    /[?&]w=\d+/.test(props.src)
      ? [480, 768, 1200, 1920]
          .map((width) => `${props.src!.replace(/([?&]w=)\d+/, `$1${width}`)} ${width}w`)
          .join(', ')
      : undefined;
  const imageProps = {
    ...props,
    srcSet: props.srcSet ?? responsiveSrcSet,
    fetchPriority: priority ? 'high' : fetchPriority,
    loading: priority ? 'eager' : props.loading ?? 'lazy',
    style: fill
      ? { ...style, position: 'absolute' as const, inset: 0, width: '100%', height: '100%' }
      : style,
  };

  return <img {...imageProps} />;
}
