// https://redux-toolkit.js.org/rtk-query/overview

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiRepositories = createApi({
	reducerPath: 'repositories',
	baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
	endpoints: (builder) => ({
		getRepositories: builder.query<unknown, void>({
			query: () => '/repositories',
		}),
	}),
});

export const { useGetRepositoriesQuery } = apiRepositories;
