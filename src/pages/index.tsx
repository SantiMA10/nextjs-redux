import type { NextPage } from 'next';
import Head from 'next/head';
import { signIn } from 'next-auth/react';

import { HomePage } from '../components/HomePage';

const HomeNextPage: NextPage = () => {
	return (
		<>
			<Head>Welcome - next.js + redux</Head>

			<HomePage signInWithGitHub={() => signIn('github')} />
		</>
	);
};

export default HomeNextPage;
