import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';

const Home: NextPage = () => {
	return (
		<div className="grid h-full place-content-center">
			<button onClick={() => signIn('github', { redirect: false })}>Sign in GitHub</button>
		</div>
	);
};

export default Home;
