import { Button } from '../Button';
import { MainLayout } from '../MainLayout';
import { Props } from './types';

export const HomePage = ({ signInWithGitHub }: Props) => {
	return (
		<MainLayout>
			<div className="grid min-h-screen place-content-center">
				<div className="flex flex-col justify-center rounded-md border border-transparent bg-indigo-200 px-8 py-3">
					<h1 className="py-4 text-lg">Access your secret data!</h1>
					<Button onClick={() => signInWithGitHub()}>Sign in with GitHub</Button>
				</div>
			</div>
		</MainLayout>
	);
};
