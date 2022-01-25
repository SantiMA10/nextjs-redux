import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';

const Home: NextPage = () => {
	const router = useRouter();
	useSession({
		required: false,
		onUnauthenticated: () => {
			console.log('onUnauthenticated');
			router.push('/dashboard');
		},
	});

	return (
		<>
			<button onClick={() => signIn('github', { redirect: false })}>Sign in GitHub</button>
		</>
	);
};

export default Home;
