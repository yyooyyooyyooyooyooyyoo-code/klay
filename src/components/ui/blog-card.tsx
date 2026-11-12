import { Calendar, ArrowRight } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { Link } from '@/components/ui/link';
import { Image } from '@/components/ui/image';
import { getBlogArticleRoute } from '@/lib/routes';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date?: string;
  image?: string;
  imageAlt?: string;
  imageTitle?: string;
  slug: string;
  category?: string;
  /** Load the cover image first: pass it for the first card, which is the page's LCP image. */
  priority?: boolean;
}

export function BlogCard({ title, excerpt, date, image, imageAlt, imageTitle, slug, category, priority = false }: BlogCardProps) {
  return (
    <Link href={getBlogArticleRoute(slug)} className="block h-full">
      <GlassCard className="p-0 h-full flex flex-col overflow-hidden group">
        <div className="relative aspect-video overflow-hidden bg-white/70">
          {image ? (
            <Image
              src={image}
              alt={imageAlt ?? title}
              title={imageTitle}
              fill
              priority={priority}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-navy-gradient flex items-center justify-center">
              <span className="text-palette-gold text-4xl font-heading font-bold">
                {title.charAt(0)}
              </span>
            </div>
          )}
          {category && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold glass-light text-black">
                {category}
              </span>
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-1">
          {date && (
            <div className="flex items-center gap-2 text-xs text-black mb-3">
              <Calendar className="w-3.5 h-3.5" />
              {date}
            </div>
          )}
          {/* h2: the cards sit directly under the blog page's h1. tracking-normal keeps the old h3 look. */}
          <h2 className="text-lg font-semibold tracking-normal text-black mb-3 leading-snug line-clamp-2">
            {title}
          </h2>
          <p className="text-sm text-black leading-relaxed line-clamp-3 mb-4 flex-1">
            {excerpt}
          </p>
          <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-black group-hover:text-gold-ink transition-colors">
            Read More
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}
