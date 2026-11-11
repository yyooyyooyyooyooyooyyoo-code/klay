import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom';
import { canonicalizeInternalRoute } from '@/src/config/routes';

type LinkProps = Omit<RouterLinkProps, 'to'> & { href: string };

export function Link({ href, ...props }: LinkProps) {
  return <RouterLink to={canonicalizeInternalRoute(href)} {...props} />;
}
