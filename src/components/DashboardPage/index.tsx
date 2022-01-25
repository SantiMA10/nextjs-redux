import { useGetRepositoriesQuery } from '../../lib/redux/features/api/apiRepositories';
import { SecretLayout } from '../SecretLayout';

export const DashboardPage = () => {
	const { data, isLoading, isSuccess, isError, error } = useGetRepositoriesQuery();

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

	if (isSuccess && !data) {
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
			<ul>
				{data?.map((repository) => {
					return <li key={repository.id}>{repository.name}</li>;
				})}
			</ul>
		</SecretLayout>
	);
};
