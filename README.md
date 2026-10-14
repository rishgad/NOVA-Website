# Texas NOVA Website

Website for Texas NOVA, a UT Austin student organization developing AI applications and workflow automation for clients. Built with Next.js, React, TypeScript, and Tailwind CSS.

[**Live website → texasnova.net**](https://www.texasnova.net/)

## Preview

![NOVA homepage](docs/screenshots/home.jpg)

![NOVA leadership page](docs/screenshots/team.jpg)

Screenshots show the local development build.

## Contribution

Rishav Gadiyar built the website across its pages and components using AI-assisted development. The implementation includes Next.js App Router pages, shared navigation, organization and team content, animated UI components, contact/application flows, and analytics integration.

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

The repository includes both npm and pnpm lockfiles; the instructions above use npm. The npm lockfile is the maintained installation source; the pnpm lockfile is historical and may not reflect current dependencies.

The current Next.js configuration allows builds to proceed despite TypeScript and ESLint errors. A successful production build alone therefore does not confirm type or lint correctness. Run a separate type check when changing code:

```sh
npx tsc --noEmit
```

The current standalone type check reports existing errors in animation/profile components and analytics types. The README does not claim a clean type check. Analytics behavior should be checked against the deployment's configuration before relying on reported data.
