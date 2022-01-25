import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
	],
	secret: process.env.AUTH_SECRET,
	pages: {
		signIn: '/',
	},
	callbacks: {
		async redirect({ baseUrl }) {
			return `${baseUrl}/dashboard`;
		},
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token;
			}

			return token;
		},
		async session({ session, token }) {
			return { ...session, accessToken: token.accessToken };
		},
	},
});
