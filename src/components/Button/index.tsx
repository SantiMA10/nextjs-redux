import { Props } from './types';

export const Button = ({ children, onClick }: Props) => {
	return (
		<button
			className="rounded-md border border-transparent bg-indigo-600 px-2 py-1 text-base font-medium text-white shadow hover:bg-indigo-700"
			onClick={() => onClick()}
		>
			{children}
		</button>
	);
};
