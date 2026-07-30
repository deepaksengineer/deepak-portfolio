# Deepak S — Electrical Design & Industrial Automation Portfolio

A production-ready portfolio built for an Electrical Design & Industrial Automation Engineer targeting PLC / SCADA / HMI and panel-design roles, including a future move into Germany's automation industry.

**Design direction:** dark "control-room" aesthetic — blueprint grid, cyan/amber/green signal colors (inspired by HMI/SCADA screens and panel nameplates), monospace data labels, animated circuit traces. Layout and motion patterns take inspiration from `sanidhyy/space-portfolio` (sectioned hero, card grids, scroll-reveal animation, glowing accents) — all copy, data and visual theme are original.

## Tech Stack

- React 19 + Vite 6
- Tailwind CSS 3
- Framer Motion
- React Router 7
- React Icons
- react-helmet-async (per-page SEO)

## Folder Structure

```
portfolio/
├─ public/
│  ├─ Deepak_S_Resume.pdf
│  ├─ favicon.svg
│  ├─ og-image.svg
│  ├─ manifest.webmanifest
│  ├─ robots.txt
│  └─ sitemap.xml
├─ src/
│  ├─ components/
│  │  ├─ hero/        Hero.jsx, CircuitBackground.jsx
│  │  ├─ layout/       Navbar, Footer, ScrollProgress, BackToTop, ThemeToggle, LoadingScreen
│  │  └─ ui/           SectionHeading, Tag, StatCard, SkillCard, ProjectCard, Timeline, ExperienceCard, ContactForm
│  ├─ data/            profile.json, experience.json, projects.json, skills.json, certifications.json, education.json, nav.json
│  ├─ hooks/            useTheme.js, useScrollProgress.js
│  ├─ pages/            Home, About, Experience, Projects, Skills, Certifications, Resume, Contact, NotFound
│  ├─ utils/             cn.js, seo.js
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ tailwind.config.js
├─ vite.config.js
└─ vercel.json
```

Every section is data-driven — edit the JSON files in `src/data/` to update content without touching any component code.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Editing Content

| What to change        | File                          |
| ---------------------- | ------------------------------ |
| Name, tagline, contact | `src/data/profile.json`        |
| Work history            | `src/data/experience.json`     |
| Projects                | `src/data/projects.json`       |
| Skills                  | `src/data/skills.json`         |
| Certifications           | `src/data/certifications.json` |
| Education                | `src/data/education.json`      |
| Nav links                | `src/data/nav.json`            |
| Resume file               | replace `public/Deepak_S_Resume.pdf` (keep the same filename, or update `resumeFile` in `profile.json`) |

## SEO

- Per-page `<title>` / `<meta description>` / canonical URL via `react-helmet-async`
- OpenGraph + Twitter card meta in `index.html`
- JSON-LD `Person` schema markup in `index.html`
- `public/robots.txt` and `public/sitemap.xml` included
- Semantic headings, `alt`/`aria-label` attributes, visible focus rings, `prefers-reduced-motion` support

Before going live, update `SITE_URL` in `src/utils/seo.js`, the canonical/OG URLs in `index.html`, and the URLs in `sitemap.xml` to your real domain.

## Performance

- Route-based code splitting via `React.lazy`
- Manual vendor/motion chunk splitting in `vite.config.js`
- SVG icons/illustrations only — no heavy image assets
- System fonts fallback with `font-display: swap` via Google Fonts link

## Accessibility (WCAG)

- Keyboard-navigable nav, forms and buttons
- Visible focus states (`:focus-visible`)
- Sufficient color contrast on the dark theme
- `prefers-reduced-motion` respected — animations shortened automatically
- Descriptive `aria-label`s on icon-only buttons

## Deployment — Vercel

1. Push this project to a GitHub repository (commands below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. `vercel.json` already handles SPA rewrites so client-side routing works on refresh.

## Git Commands

```bash
git init
git add .
git commit -m "Initial commit: Deepak S portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Future Improvements

- Swap the mailto-based contact form for a serverless function (Vercel Function + Resend/SendGrid) for a native inbox experience
- Add a blog/notes section for automation write-ups (SEO compounding)
- Add project photos/PDF snippets of GA drawings once available for sharing
- Add German-language toggle to support the target Germany career track
- Add unit tests (Vitest + React Testing Library) for data-driven components
