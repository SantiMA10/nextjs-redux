import { Endpoints } from '@octokit/types';

export interface Repository {
	id: string;
	name: string;
}

export const fromGitHubRepository = (
	repository: Endpoints['GET /user/repos']['response']['data'][number],
): Repository => ({
	id: `github-${repository.id}`,
	name: repository.name,
});
