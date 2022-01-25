import type { NextPage } from 'next';
import Head from 'next/head';

import { SettingsPage } from '../components/SettingsPage';

const SettingsNextPage: NextPage = () => {
	return (
		<>
			<Head>Settings - next.js + redux</Head>

			<SettingsPage />
		</>
	);
};

export default SettingsNextPage;
