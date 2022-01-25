import { Endpoints } from '@octokit/types';
import { Octokit } from 'octokit';

import { fromGitHubRepository } from '../entities/Repository';
import { fromGitHubStarredRepository } from '../entities/StarredRepository';

export const getRepositories = async (accessToken: string) => {
	const octokit = new Octokit({ auth: accessToken });

	const response = await octokit.rest.repos.listForAuthenticatedUser({
		type: 'owner',
	});

	return response.data.map(fromGitHubRepository);
};

export const getStarredRepositories = async (accessToken: string) => {
	const octokit = new Octokit({ auth: accessToken });

	const user = await octokit.rest.users.getAuthenticated();
	const response = await octokit.rest.activity.listReposStarredByUser({
		username: user.data.login,
	});

	return response.data.map((starred) =>
		fromGitHubStarredRepository(
			// Something weird is going on here, we need the cast the object to make sure that TypeScript infers the type correctly.
			// @SantiMA10: I'm already tried to fix this, by using the same version of '@octokit/types' in this project and in the 'octokit' package.
			// @SantiMA10: But it still doesn't work.
			starred as unknown as Endpoints['GET /user/starred']['response']['data'][number],
		),
	);
};
