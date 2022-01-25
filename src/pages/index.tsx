import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';

import { HomePage } from '../components/HomePage';

const Home: NextPage = () => {
	return <HomePage signInWithGitHub={() => signIn('github')} />;
};

export default Home;
