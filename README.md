# Personal site

React + TypeScript + Vite, with React Router for pages. No CSS framework — styling is
one file of plain CSS with custom properties, and light/dark follows the OS setting.

## Requirements

Node.js 20.19+ (or 22.12+), which is not currently installed on this machine.
Download it from https://nodejs.org, then reopen the terminal.

## Running it

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

| command | what it does |
| --- | --- |
| `npm run dev` | dev server with hot reload |
| `npm run build` | type-check and build to `dist/` |
| `npm run preview` | serve the built `dist/` locally |
| `npm run typecheck` | types only, no build |

## Editing the content

All personal content lives in [`src/data/profile.ts`](src/data/profile.ts) — name,
tagline, intro, about paragraphs, skills, experience, projects, and social links.
Change it there and the pages update; you shouldn't need to touch the components.

For a profile photo, drop the image in `public/` (e.g. `public/avatar.jpg`) and set
`profile.avatar` to `/avatar.jpg`.

## Structure

```
index.html            entry HTML, page <title> and meta description
public/               static files served as-is
src/
  main.tsx            React root + router
  App.tsx             route table
  data/profile.ts     ← all your content
  components/         Layout (header/footer/nav), Section
  pages/              Home, About, Projects, NotFound
  hooks/              usePageTitle
  styles/global.css   tokens + all styling
```

## Adding a page

1. Create `src/pages/Whatever.tsx`.
2. Add a `<Route path="whatever" element={<Whatever />} />` in `src/App.tsx`, above
   the `*` catch-all.
3. Add it to the `nav` array in `src/components/Layout.tsx` if it should appear in
   the header.

## Deploying

`npm run build` emits a static `dist/` folder — any static host works (GitHub Pages,
Netlify, Vercel, Cloudflare Pages). Because routing is client-side, the host must
rewrite unknown paths to `index.html`; most of the above do this for SPAs
automatically, GitHub Pages needs a `404.html` copy of `index.html`.
