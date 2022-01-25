import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { apiRepositories } from '../features/api/apiRepositories';
import { apiStarredRepositories } from '../features/api/apiStarredRepositories';

export function makeStore() {
	return configureStore({
		reducer: {
			[apiRepositories.reducerPath]: apiRepositories.reducer,
			[apiStarredRepositories.reducerPath]: apiStarredRepositories.reducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(apiRepositories.middleware, apiStarredRepositories.middleware),
	});
}

const store = makeStore();

setupListeners(store.dispatch);

export default store;
