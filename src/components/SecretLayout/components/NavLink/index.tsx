import Link from 'next/link';
import { useRouter } from 'next/router';

import { styles } from './styles';
import { Props } from './types';

export const NavLink = ({ href, children }: Props) => {
	const router = useRouter();
	const isActive = router.pathname === href;

	return (
		<Link href={href} passHref>
			<a className={isActive ? styles['active'] : styles['inactive']}>{children}</a>
		</Link>
	);
};
