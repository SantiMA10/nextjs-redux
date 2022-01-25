import { render, screen } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import mockRouter from 'next-router-mock';
import { Provider } from 'react-redux';

import { SecretLayout } from '../../../../src/components/SecretLayout';
import { styles } from '../../../../src/components/SecretLayout/components/NavLink/styles';
import { makeStore } from '../../../../src/lib/redux/store';

const buildComponent = () => {
	return (
		<SessionProvider
			session={{
				user: {
					name: 'Santi',
					email: 'santi@example.com',
					image: 'https://picsum.photos/200',
				},
				expires: new Date().toISOString(),
			}}
		>
			<Provider store={makeStore()}>
				<SecretLayout />
			</Provider>
		</SessionProvider>
	);
};

describe('SecretLayout', () => {
	it('shows the information about the user', async () => {
		render(buildComponent());

		expect(screen.getByText(/Santi/i)).toBeInTheDocument();
	});

	it('applies the active styles to the link with the current url', async () => {
		mockRouter.setCurrentUrl('/dashboard');

		render(buildComponent());

		expect(screen.getByText(/dashboard/i)).toHaveAttribute('class', styles['active']);
	});

	it('applies the inactive styles to other links', async () => {
		mockRouter.setCurrentUrl('/dashboard');

		render(buildComponent());

		expect(screen.getByText(/settings/i)).toHaveAttribute('class', styles['inactive']);
	});
});
