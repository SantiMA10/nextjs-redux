import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

import { useGetRepositoriesQuery } from '../lib/redux/features/api/apiRepositories';

const Home: NextPage = () => {
	const { data, isLoading, isSuccess, isError, error } = useGetRepositoriesQuery();
	const { data: session } = useSession({ required: true });

	if (!session) {
		return (
			<>
				Not signed in <br />
				<button onClick={() => signIn('github')}>Sign in</button>
			</>
		);
	}

	let content;

	if (isLoading) {
		content = <p>Loading...</p>;
	} else if (isSuccess) {
		content = <p>Success... {JSON.stringify(data)}</p>;
	} else if (isError && error) {
		content = <div>{JSON.stringify(error)}</div>;
	}

	return (
		<>
			Signed in as {session?.user?.email} <br />
			<button onClick={() => signOut()}>Sign out</button> <br />
			{content}
		</>
	);
};

export default Home;
