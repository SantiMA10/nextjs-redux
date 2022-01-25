import { Endpoints } from '@octokit/types';

export interface StarredRepository {
	id: string;
	name: string;
}

export const fromGitHubStarredRepository = (
	starredRepository: Endpoints['GET /user/starred']['response']['data'][number],
): StarredRepository => ({
	id: `github-${starredRepository?.id}`,
	name: starredRepository?.name || 'unknown name',
});
