import type { NextPage } from 'next';
import Head from 'next/head';

import { DashboardPage } from '../components/DashboardPage';

const DashboardNextPage: NextPage = () => {
	return (
		<>
			<Head>Dashboard - next.js + redux</Head>

			<DashboardPage />
		</>
	);
};

export default DashboardNextPage;
