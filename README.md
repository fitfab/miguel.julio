This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Github Page url: [https://fitfab.github.io/miguel.julio/](https://fitfab.github.io/miguel.julio/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!



## Typescript

*baseUrl*

The baseUrl configuration option allows you to import directly from the root of the project.
```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

This `import { initializeApollo } from '../lib/apolloClient'` becomes

`import { initializeApollo } from 'lib/apolloClient'`

*paths*

Using "paths" allows you to configure module aliases.

given you got a folder structure:

```bash
  - shared
    - components
    - lib
    - styles
```

```json
// tsconfig.json 
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["shared/*"]
    },
  }
}
```

This `import { Card } from '/shared/components'` becomes

`import { Card } from '@/components'`
