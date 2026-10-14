# Texas NOVA Website

Website for Texas NOVA, a UT Austin student organization developing AI applications and workflow automation for clients. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- Organization overview, team profiles, events, and client impact pages.
- Dedicated pages for technology solutions and strategic consulting.
- Application and contact pages.
- Analytics components and an administrative analytics route.

## Run locally

```sh
git clone https://github.com/rishgad/NOVA-Website.git
cd NOVA-Website
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

```sh
npm run build
npm start
```

`npm run dev` starts the development server. `npm run build` creates a production build, and `npm start` serves that build.

## Project structure

| Path | Purpose |
|---|---|
| `app/` | App Router pages, layouts, and styles |
| `app/components/` | Navigation, animation, profiles, and analytics components |
| `components/ui/` | Reusable UI components |
| `lib/` | Utilities and analytics helpers |
| `public/images/` | Organization branding, team photos, and other assets |

## Development notes

The repository includes both npm and pnpm lockfiles; the instructions above use npm. Keep the corresponding lockfile updated when changing dependencies.

The current Next.js configuration allows builds to proceed despite TypeScript and ESLint errors. A successful production build alone therefore does not confirm type or lint correctness. Run a separate type check when changing code:

```sh
npx tsc --noEmit
```

Analytics behavior should be checked against the deployment's configuration before relying on reported data.
