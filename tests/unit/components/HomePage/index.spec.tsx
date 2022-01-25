import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { HomePage } from '../../../../src/components/HomePage';

describe('HomePage', () => {
	it('calls the "signInWithGitHub" prop when the button is clicked', async () => {
		const signInWithGitHub = jest.fn();
		render(<HomePage signInWithGitHub={signInWithGitHub} />);

		await act(async () => {
			userEvent.click(await screen.findByText(/Sign in with GitHub/i));
		});

		expect(signInWithGitHub).toHaveBeenCalled();
	});
});
