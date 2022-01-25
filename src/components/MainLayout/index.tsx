import { Props } from './types';

export const MainLayout = ({ children }: Props) => {
	return <div className="min-h-screen bg-slate-100 py-5">{children}</div>;
};
