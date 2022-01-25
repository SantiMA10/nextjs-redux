import '@testing-library/jest-dom/extend-expect';

import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

jest.mock('next/router', () => require('next-router-mock'));
