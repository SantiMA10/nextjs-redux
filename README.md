# nextjs-redux [![Deploy](https://github.com/SantiMA10/nextjs-redux/actions/workflows/deploy.yml/badge.svg)](https://github.com/SantiMA10/nextjs-redux/actions/workflows/deploy.yml) [![visit it](https://img.shields.io/badge/visit-it-blue)](https://nextjs-redux-three.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## It also uses...

- [jest](https://jestjs.io/) as testing framework
- [eslint](https://eslint.org/) + [prettier](https://prettier.io/) to ensure that the code follows a common style
- [NextAuth.js](https://next-auth.js.org/) for handling the authentication flow with GitHub
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) as state management library
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) as backed for fronted

# Getting Started

## Configuration

In order to use the "Sign-in with GitHub" you need to add a client secret and client id in the `.env.development`. The recommendation is to copy that file to a `.env.development.local` file to prevent you to push your credentials to the repo.

[Create a new GitHub OAuth App](https://github.com/settings/developers).

## Development

First, run the development server:

```bash
yarn install

yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

```bash
yarn install

yarn test // runs all the tests using jest
yarn test:watch // runs jest in watch mode
```

# Deploy

This is project is deployed to [Vercel](https://vercel.com/) automatically using GitHub Actions on each push to `main`.
