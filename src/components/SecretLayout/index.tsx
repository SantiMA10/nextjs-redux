import { signOut, useSession } from 'next-auth/react';

import { Button } from '../Button';
import { MainLayout } from '../MainLayout';
import { NavLink } from './components/NavLink';
import { Props } from './types';

export const SecretLayout = ({ children }: Props) => {
	const { data: session } = useSession({ required: true });

	return (
		<MainLayout>
			<div className="container mx-auto">
				<nav className="flex items-center justify-between py-5">
					<div className="flex gap-3">
						<NavLink href={'/dashboard'}>Dashboard</NavLink>
						<NavLink href={'/settings'}>Settings</NavLink>
					</div>
					<div className="flex items-center gap-3">
						<span className="text-lg">Hello {session?.user?.name}!</span>
						<Button onClick={() => signOut()}>Sign out</Button>
					</div>
				</nav>
				{children}
			</div>
		</MainLayout>
	);
};
