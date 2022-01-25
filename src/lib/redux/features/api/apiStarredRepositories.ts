import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiResponse } from '../../../entities/ApiResponse';
import { StarredRepository } from '../../../entities/StarredRepository';

export const apiStarredRepositories = createApi({
	reducerPath: 'starred-repositories',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api',
		prepareHeaders: (headers) => {
			headers.set('accept', 'application/json');
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getStarredRepositories: builder.query<StarredRepository[], void>({
			query: () => '/starred-repositories',
			transformResponse: (response: ApiResponse<StarredRepository[]>) => {
				return response.data;
			},
		}),
	}),
});

export const { useGetStarredRepositoriesQuery } = apiStarredRepositories;
