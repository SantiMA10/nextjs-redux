// This is an example of to protect an API route
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import { getRepositories } from '../../../lib/data/github';

export default async function protectedHandler(req: NextApiRequest, res: NextApiResponse) {
	const session = await getSession({ req });

	if (!session) {
		res.status(403).send({
			error: 'You must be sign in to view the protected content on this page.',
		});
		res.end();
		return;
	}

	if (!session.accessToken || typeof session.accessToken !== 'string') {
		res.status(400).send({
			error: 'Invalid GitHub access token.',
		});
		res.end();
		return;
	}

	res.status(200).json({ data: await getRepositories(session.accessToken) });
	res.end();
}
