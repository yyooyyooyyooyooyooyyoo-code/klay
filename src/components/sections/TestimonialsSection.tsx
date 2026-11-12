import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { CalendlyCarousel, type CarouselItem } from '@/components/sections/CalendlyCarousel';
import { Marquee } from '@/components/ui/marquee';
import { IMAGES } from '@/lib/data';

const TESTIMONIALS: CarouselItem[] = [
  {
    id: 1,
    stat: 'A smooth, straightforward setup',
    quote:
      'Klay Consultants made our Dubai business setup smooth and straightforward. Their team explained every step clearly and kept us updated throughout the process.',
    author: 'Alex Morgan',
    role: 'Founder, Digital Solutions Company',
    defaultImage: IMAGES.dubaiMarina,
    selectedImage: IMAGES.meeting,
    alt: 'Business professionals meeting in Dubai',
  },
  {
    id: 2,
    stat: 'Clear guidance on structure and licensing',
    quote:
      'From choosing the right business structure to understanding licensing requirements, the team provided clear and professional guidance.',
    author: 'Sarah Williams',
    role: 'Business Owner, Consulting Firm',
    defaultImage: IMAGES.dubaiTwilight,
    selectedImage: IMAGES.handshake,
    alt: 'Business partners discussing a plan',
  },
  {
    id: 3,
    stat: 'Responsive, detail-focused support',
    quote:
      "We appreciated the team's responsiveness and attention to detail. They helped us understand our options before making important business decisions.",
    author: 'Daniel Carter',
    role: 'Managing Director, Trading Company',
    defaultImage: IMAGES.dubaiCreek,
    selectedImage: IMAGES.meeting,
    alt: 'Team reviewing business plans together',
  },
  {
    id: 4,
    stat: 'A more organized setup experience',
    quote:
      'The entire business formation experience felt much more organized with Klay Consultants. Communication was professional and timely.',
    author: 'Emily Thompson',
    role: 'Co-Founder, Technology Startup',
    defaultImage: IMAGES.dubaiSkylineWide,
    selectedImage: IMAGES.handshake,
    alt: 'Dubai skyline near a business district',
  },
  {
    id: 5,
    stat: 'Mainland and free zone clarity',
    quote:
      'Their guidance on mainland and free zone options helped us better understand which setup suited our business goals.',
    author: 'Michael Reed',
    role: 'Entrepreneur, E-commerce Business',
    defaultImage: IMAGES.dubaiMarinaNight,
    selectedImage: IMAGES.meeting,
    alt: 'Business team discussing company options',
  },
  {
    id: 6,
    stat: 'Clear explanations at every step',
    quote:
      'A professional team that explained the paperwork, process and next steps in simple language. The experience was reassuring.',
    author: 'Olivia Bennett',
    role: 'Founder, Marketing Agency',
    defaultImage: IMAGES.dubaiTwilight,
    selectedImage: IMAGES.handshake,
    alt: 'Business partners in discussion',
  },
  {
    id: 7,
    stat: 'Structured support for expansion',
    quote:
      'Klay Consultants helped us navigate the initial planning of our UAE expansion with clear information and structured support.',
    author: 'James Wilson',
    role: 'Director, International Business',
    defaultImage: IMAGES.dubaiCreek,
    selectedImage: IMAGES.meeting,
    alt: 'Colleagues reviewing an expansion plan',
  },
  {
    id: 8,
    stat: 'Transparent, practical advice',
    quote:
      'We valued the transparent communication and practical advice. The team made a complex process easier to understand.',
    author: 'Sophia Clark',
    role: 'Owner, Professional Services Firm',
    defaultImage: IMAGES.burjKhalifa,
    selectedImage: IMAGES.handshake,
    alt: 'Dubai business district at dusk',
  },
  {
    id: 9,
    stat: 'Patient, professional answers',
    quote:
      'The team was helpful throughout our business setup journey and answered our questions with patience and professionalism.',
    author: 'Ryan Mitchell',
    role: 'Founder, Retail Business',
    defaultImage: IMAGES.dubaiMarina,
    selectedImage: IMAGES.meeting,
    alt: 'Business team meeting in a modern office',
  },
  {
    id: 10,
    stat: 'More clarity and confidence',
    quote:
      'A helpful partner for entrepreneurs exploring opportunities in Dubai. Their structured approach gave us more clarity and confidence.',
    author: 'Isabella Turner',
    role: 'Co-Founder, Creative Studio',
    defaultImage: IMAGES.dubaiSkylineWide,
    selectedImage: IMAGES.handshake,
    alt: 'Dubai skyline representing business opportunities',
  },
];

type TestimonialsSectionProps = {
  layout?: 'carousel' | 'marquee';
};

export function TestimonialsSection({ layout = 'carousel' }: TestimonialsSectionProps) {
  return (
    <section
      id='testimonials'
      className={`testimonial-section section-padding py-16 sm:py-20 lg:py-24 ${
        layout === 'marquee' ? 'testimonial-section--marquee' : ''
      }`}
      aria-labelledby='testimonials-heading'
    >
      <div className='mx-auto max-w-7xl'>
        <ScrollReveal className='mx-auto mb-9 max-w-3xl text-center sm:mb-12'>
          <p className='mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink'>
            Client stories
          </p>
          <h2
            id='testimonials-heading'
            className='text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl'
          >
            What our clients say
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-black sm:text-base'>
            Hear about the experience of setting up and growing a business in the UAE with Klay Consultants.
          </p>
        </ScrollReveal>

        {layout === 'carousel' ? (
          <CalendlyCarousel items={TESTIMONIALS} />
        ) : (
          <Marquee pauseOnHover repeat={3} className="[--duration:55s]">
            {TESTIMONIALS.map((testimonial) => (
              <article
                key={testimonial.id}
                className="flex w-[min(82vw,360px)] shrink-0 flex-col rounded-2xl border border-navy-900/10 bg-white/80 p-6 shadow-[0_12px_36px_rgba(12,45,72,0.08)] backdrop-blur-sm sm:w-[360px]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-ink">
                  {testimonial.stat}
                </p>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-black">
                  “{testimonial.quote}”
                </blockquote>
                <footer className="mt-6 border-t border-navy-900/10 pt-4">
                  <p className="font-semibold text-black">{testimonial.author}</p>
                </footer>
              </article>
            ))}
          </Marquee>
        )}
      </div>
    </section>
  );
}
