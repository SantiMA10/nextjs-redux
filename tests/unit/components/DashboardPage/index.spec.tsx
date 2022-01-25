import { render, screen, waitFor } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import mockRouter from 'next-router-mock';
import { Provider } from 'react-redux';

import { DashboardPage } from '../../../../src/components/DashboardPage';
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
				<DashboardPage />
			</Provider>
		</SessionProvider>
	);
};

describe('DashboardPage', () => {
	beforeEach(() => {
		fetchMock.resetMocks();
		mockRouter.setCurrentUrl('/dashboard');
	});

	it('shows a loading message during loading', async () => {
		fetchMock.mockOnce(JSON.stringify({ data: [] }));

		render(buildComponent());

		expect(await screen.findByText(/loading/i)).toBeInTheDocument();
	});

	it('shows a message if the user does not have any repositories', async () => {
		fetchMock.mockOnce(JSON.stringify({ data: [] }));

		render(buildComponent());

		await waitFor(() =>
			expect(screen.queryByText(/You do not have any repositories/i)).toBeInTheDocument(),
		);
	});

	it('shows a message if something goes wrong with the request', async () => {
		fetchMock.mockReject(new Error('Something went wrong'));

		render(buildComponent());

		await waitFor(() => expect(screen.queryByText(/Ups, there was an error/i)).toBeInTheDocument());
	});

	it('shows a message if the data is undefined', async () => {
		fetchMock.mockOnce(JSON.stringify({ data: undefined }));

		render(buildComponent());

		await waitFor(() =>
			expect(
				screen.queryByText(/Ups, there was an error reading the response/i),
			).toBeInTheDocument(),
		);
	});

	it('shows the list of repositories', async () => {
		fetchMock.mockOnce(JSON.stringify({ data: [{ id: 1, name: 'Repo 1' }] }));

		render(buildComponent());

		await waitFor(() => expect(screen.queryByText(/Repo 1/i)).toBeInTheDocument());
	});
});
