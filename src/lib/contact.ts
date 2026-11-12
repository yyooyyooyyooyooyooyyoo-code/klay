import { COMPANY } from '@/lib/data';

const whatsapp = '+971562292260';

export const CONTACT_CHANNELS = {
  telephone: COMPANY.phone,
  whatsapp,
  whatsappUrl: `https://api.whatsapp.com/send?phone=${whatsapp.replace(/\D/g, '')}`,
  instagramUrl: 'https://www.instagram.com/klayconsultants/',
};
