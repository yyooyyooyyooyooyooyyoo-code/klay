import { useEffect, useRef, useState, type VideoHTMLAttributes } from 'react';

type BackgroundVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, 'autoPlay' | 'muted' | 'loop'> & {
  /** Reserved for compatibility with callers that still pass a button class name. */
  buttonClassName?: string;
};

/**
 * Decorative, muted, looping background video.
 * Playback starts after hydration and only when the visitor has not asked for reduced motion;
 * otherwise the poster is shown.
 */
export function BackgroundVideo({ src, ...videoProps }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [wantsPlay, setWantsPlay] = useState<boolean | null>(null);

  useEffect(() => {
    let reduceMotion = false;
    try {
      reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      reduceMotion = false;
    }
    setWantsPlay(!reduceMotion);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || wantsPlay === null) return;
    if (wantsPlay && src) {
      video.muted = true;
      const attempt = video.play();
      if (attempt && typeof attempt.catch === 'function') {
        attempt.catch(() => {
          if (videoRef.current?.paused) setWantsPlay(false);
        });
      }
    } else {
      video.pause();
    }
  }, [wantsPlay, src]);

  return <video ref={videoRef} src={src} muted loop {...videoProps} />;
}
