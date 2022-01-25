import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { apiRepositories } from '../features/api/apiRepositories';

export function makeStore() {
	return configureStore({
		reducer: { [apiRepositories.reducerPath]: apiRepositories.reducer },
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiRepositories.middleware),
	});
}

const store = makeStore();

setupListeners(store.dispatch);

export default store;
