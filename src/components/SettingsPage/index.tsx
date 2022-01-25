import { useGetStarredRepositoriesQuery } from '../../lib/redux/features/api/apiStarredRepositories';
import { SecretLayout } from '../SecretLayout';

export const SettingsPage = () => {
	const { data, isLoading, isError, error } = useGetStarredRepositoriesQuery();

	if (isLoading) {
		return (
			<SecretLayout>
				<p>Loading...</p>
			</SecretLayout>
		);
	}

	if (isError && error) {
		return (
			<SecretLayout>
				<p>Ups, there was an error.</p>
			</SecretLayout>
		);
	}

	if (!data) {
		return (
			<SecretLayout>
				<p>Ups, there was an error reading the response.</p>
			</SecretLayout>
		);
	}

	if (data && data.length === 0) {
		return (
			<SecretLayout>
				<p>You do not have any repositories.</p>
			</SecretLayout>
		);
	}

	return (
		<SecretLayout>
			<p>You have {data.length} starred repositories.</p>
			<ul>
				{data?.map((repository) => {
					return <li key={repository.id}>{repository.name}</li>;
				})}
			</ul>
		</SecretLayout>
	);
};
