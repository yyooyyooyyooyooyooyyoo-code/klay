import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Instagram, MessageSquareText, Phone } from 'lucide-react';
import { CONTACT_CHANNELS } from '@/lib/contact';

type ContactAction = {
  kind: 'phone' | 'whatsapp' | 'instagram';
  label: string;
  href: string;
  icon: React.ReactNode;
};

const whatsappMessage =
  'Hello Klay Consultants, I would like to discuss my UAE business setup requirements.';
const itemTransition = { type: 'spring' as const, stiffness: 400, damping: 22 };

function isValidPhone(value: string) {
  return /^\+?[1-9][0-9\s()-]{6,}$/.test(value.trim());
}

function isValidWhatsAppNumber(value: string) {
  return /^[1-9]\d{7,14}$/.test(value.replace(/\D/g, ''));
}

export function FloatingContactWidget() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const actions = useMemo<ContactAction[]>(() => {
    const available: ContactAction[] = [];
    if (isValidPhone(CONTACT_CHANNELS.telephone)) {
      available.push({
        kind: 'phone',
        label: 'Call Now',
        href: `tel:${CONTACT_CHANNELS.telephone.replace(/[^\d+]/g, '')}`,
        icon: <Phone aria-hidden="true" />,
      });
    }

    if (CONTACT_CHANNELS.instagramUrl) {
      available.push({
        kind: 'instagram',
        label: 'Instagram',
        href: CONTACT_CHANNELS.instagramUrl,
        icon: <Instagram aria-hidden="true" />,
      });
    }

    if (isValidWhatsAppNumber(CONTACT_CHANNELS.whatsapp)) {
      const number = CONTACT_CHANNELS.whatsapp.replace(/\D/g, '');
      available.push({
        kind: 'whatsapp',
        label: 'WhatsApp',
        href: `https://wa.me/${number}?text=${encodeURIComponent(whatsappMessage)}`,
        icon: <WhatsAppIcon />,
      });
    }

    return available.reverse();
  }, []);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const transition = prefersReducedMotion
    ? { duration: 0.12 }
    : itemTransition;
  const renderAction = (action: ContactAction, index: number) => {
    const motionProps = {
      initial: { y: 0, opacity: 0, scale: 0.65 },
      animate: { y: -((actions.length - index) * 64), opacity: 1, scale: 1 },
      exit: { y: 0, opacity: 0, scale: 0.65 },
      transition: { ...transition, delay: prefersReducedMotion ? 0 : index * 0.045 },
      className: `fcw-action fcw-action--${action.kind}`,
    };

    return (
      <motion.a
        {...motionProps}
        key={action.kind}
        href={action.href}
        target={action.kind === 'phone' ? undefined : '_blank'}
        rel={action.kind === 'phone' ? undefined : 'noopener noreferrer'}
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
        aria-label={action.label}
      >
        {action.icon}
        <span className="fcw-label">{action.label}</span>
      </motion.a>
    );
  };

  return (
    <>
      <div
        ref={rootRef}
        className="fcw-stage"
      >
        <div
          className="fcw-actions"
          id="floating-contact-actions"
          role="group"
          aria-label="Quick contact actions"
          aria-hidden={!open}
        >
          <AnimatePresence initial={false}>{open && actions.map(renderAction)}</AnimatePresence>
        </div>
        <motion.button
          ref={toggleRef}
          type="button"
          className="fcw-toggle"
          whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close quick contact menu' : 'Open quick contact menu'}
          aria-expanded={open}
          aria-controls="floating-contact-actions"
        >
          <span className="fcw-toggle-icon">
            <MessageSquareText aria-hidden="true" />
          </span>
        </motion.button>
      </div>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.1 3.9A11.4 11.4 0 0 0 2.2 17.6L.7 23.1l5.7-1.5A11.4 11.4 0 0 0 20.1 3.9Z" />
      <path d="M8.1 7.4c-.3-.7-.6-.7-.9-.7h-.7c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.5 1.5 3.8c.2.2 2.5 4 6.2 5.4 3.1 1.2 3.7 1 4.4.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5l-2.5-1.2c-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.5-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.5-2.2-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7L8.1 7.4Z" />
    </svg>
  );
}
