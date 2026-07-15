# AI Engineer Portfolio

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit content

All editable content lives in `data/*.ts` — change text there, not in components:

- `data/profile.ts` — name, titles, tagline
- `data/experience.ts`, `data/education.ts`
- `data/skills.ts`, `data/projects.ts`
- `data/research.ts`, `data/thesis.ts`
- `data/socials.ts` — GitHub/LinkedIn/Telegram links

## Add your resume

Drop a `resume.pdf` file into `public/`.

## Build for production

```bash
npm run build
npm run start
```

## Deploy

Push to GitHub and import the repo on vercel.com — zero config needed.
