import { Octokit } from 'octokit';

import { fromGitHubRepository } from '../entities/Repository';

export const getRepositories = async (accessToken: string) => {
	const octokit = new Octokit({ auth: accessToken });

	const response = await octokit.rest.repos.listForAuthenticatedUser({
		type: 'owner',
	});

	return response.data.map(fromGitHubRepository);
};
