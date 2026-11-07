import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from '@/components/ui/link';
import { Image } from '@/components/ui/image';
import { COMPANY, NAV_LINKS } from '@/lib/data';
import { CONTACT_CHANNELS } from '@/lib/contact';

const whatsappHref = `https://wa.me/${CONTACT_CHANNELS.whatsapp.replace(/\D/g, '')}`;

export function Footer() {
  return (
    <footer className="site-footer mt-12">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-6 py-12 sm:px-8 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.35fr_0.8fr_1.2fr_0.7fr] lg:px-12 lg:py-16">
        <div>
          <Link href="/" aria-label={`${COMPANY.name} home`} className="inline-flex">
            <Image
              src="/klay-logo.png"
              alt="Klay Consultants"
              width={144}
              height={50}
              className="h-auto w-32"
            />
          </Link>
          <h2 className="mt-6 text-xl font-semibold tracking-tight sm:text-2xl">Stay Connected</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-gray-600">
            {COMPANY.tagline}. Our team is here to help you take the next step.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-sm border border-gray-300 bg-white px-4 text-sm font-medium text-gray-900 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gray-900"
          >
            Contact our team
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="mb-4 text-base font-semibold">Quick Links</h2>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-950 focus-visible:text-gray-950 focus-visible:outline-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-base font-semibold">Contact Us</h2>
          <address className="space-y-3 not-italic">
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className="flex items-start gap-3 text-sm text-gray-600 hover:text-gray-950"
            >
              <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{COMPANY.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-start gap-3 text-sm text-gray-600 hover:text-gray-950"
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{COMPANY.email}</span>
            </a>
            <p className="flex items-start gap-3 text-sm leading-6 text-gray-600">
              <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{COMPANY.address}</span>
            </p>
          </address>
        </div>

        <div>
          <h2 className="mb-4 text-base font-semibold">Follow Us</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={CONTACT_CHANNELS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Klay Consultants on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact Klay Consultants on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-4 max-w-[15rem] text-sm leading-6 text-gray-600">
            Follow our updates or message us directly.
          </p>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 border-t border-gray-200 px-6 py-5 text-xs text-gray-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        <nav aria-label="Legal links" className="flex gap-5">
          <Link href="/privacy" className="hover:text-gray-950">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-950">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
}
