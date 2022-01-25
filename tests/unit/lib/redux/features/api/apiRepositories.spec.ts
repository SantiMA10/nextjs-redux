import fetchMock from 'jest-fetch-mock';

import { apiRepositories } from '../../../../../../src/lib/redux/features/api/apiRepositories';
import { makeStore } from '../../../../../../src/lib/redux/store/index';

describe('apiRepositories', () => {
	describe('#getRepositories', () => {
		beforeEach(() => {
			fetchMock.resetMocks();
		});

		it('calls the "GET /api/repositories" endpoint', async () => {
			fetchMock.mockOnce(JSON.stringify({ data: {} }));

			await makeStore().dispatch(apiRepositories.endpoints.getRepositories.initiate(undefined));

			expect(fetchMock).toHaveBeenCalled();
			const { method, url, headers } = fetchMock.mock.calls[0][0] as Request;
			expect(url).toBe('/api/repositories');
			expect(method).toBe('GET');
			expect(headers.get('accept')).toBe('application/json');
		});

		it('returns a successful action if the request returns ok', async () => {
			const repositories = [{ id: 1, name: 'repo1' }];
			fetchMock.mockOnce(JSON.stringify({ data: repositories }));

			const action = await makeStore().dispatch(
				apiRepositories.endpoints.getRepositories.initiate(undefined),
			);

			expect(action).toMatchObject({ status: 'fulfilled', isSuccess: true, data: repositories });
		});

		it('returns a fail action if the request fails', async () => {
			fetchMock.mockRejectOnce(new Error('error'));

			const action = await makeStore().dispatch(
				apiRepositories.endpoints.getRepositories.initiate(undefined),
			);

			expect(action).toMatchObject({
				status: 'rejected',
				error: {
					error: 'Error: error',
					status: 'FETCH_ERROR',
				},
				isSuccess: false,
			});
		});
	});
});
