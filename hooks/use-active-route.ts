import { usePathname } from 'next/navigation';

/**
 *
 * @param route String
 * @returns
 */

const isActiveRoute = (route: string) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const pathname = usePathname();

	// Check if route path matches current location pathname (ignoring query string)
	return pathname.split('?')[0]?.startsWith(route);
};

export default isActiveRoute;
