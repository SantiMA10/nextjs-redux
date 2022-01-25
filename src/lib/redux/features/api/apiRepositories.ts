// https://redux-toolkit.js.org/rtk-query/overview

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiResponse } from '../../../entities/ApiResponse';
import { Repository } from '../../../entities/Repository';

export const apiRepositories = createApi({
	reducerPath: 'repositories',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api',
		// The second parameter allows us to access the state.
		prepareHeaders: (headers) => {
			// If we have the access token directly stored in the Redux Store and we want to get the access token to
			// call the GitHub API, we can use this 'prepareHeaders' function to set the needed headers.
			// const token = selectToken(getState());
			// headers.set(Headers.Authorization, `Bearer ${token}`);

			headers.set('accept', 'application/json');
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getRepositories: builder.query<Repository[], void>({
			query: () => '/repositories',
			transformResponse: (response: ApiResponse<Repository[]>) => {
				return response.data;
			},
		}),
	}),
});

export const { useGetRepositoriesQuery } = apiRepositories;
