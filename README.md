# DasturLab — Corporate Website

## Tech stack & why

**Vanilla HTML / CSS / JavaScript — no framework, no build step.**

- The brief needs one clean, fast marketing site with a handful of static
  legal pages, not a complex client-side app with routing/state — a
  framework (React/Vue) would add a build pipeline and bundle size for no
  real benefit here.
- Vanilla JS keeps the "no unnecessary libraries" rule from the brief:
  every interactive feature (theme, i18n, filters, counters, validation)
  is simple DOM logic that doesn't need a library.
- A static site deploys anywhere (Nginx, Vercel, GitHub Pages, S3) with
  zero server requirement, which matches the "server & VPS" hosting
  DasturLab itself offers as a service.
- If the project later needs a real admin panel with authentication and
  a database, the natural next step is layering a backend (FastAPI or
  Django, per DasturLab's own tech list) behind `js/api.js` — see below.

If you'd rather have this as a React/Next.js project (e.g. to reuse
components inside an admin dashboard later), say so and it can be
restructured — the content/config layer below stays the same either way.

## Project structure

```
dasturlab/
├── index.html          # single-page marketing site (all sections)
├── privacy.html         terms.html         cookies.html         404.html
├── robots.txt / sitemap.xml
├── css/
│   └── style.css       # design tokens (colors/type/spacing) + all component styles
├── js/
│   ├── config.js       # ALL editable content: company info, founders, services,
│   │                    projects, tech list, testimonials, blog posts, stats
│   ├── i18n.js          # translation dictionary (uz/ru/en) + apply/setLang
│   ├── api.js           # integration layer — swap mock calls for real HTTP calls
│   ├── app.js            main page logic: nav, theme, filters, counters, form
│   └── legal.js          shared theme/lang logic for legal + 404 pages
└── README.md
```

## Where to change things

| I want to change...            | Edit this file        |
|---------------------------------|------------------------|
| Company stats, services, projects, team bios, testimonials, blog posts | `js/config.js` |
| Any UI text in uz/ru/en          | `js/i18n.js` |
| Colors, spacing, fonts           | top of `css/style.css` (`:root` variables) |
| Contact placeholders (email, phone, socials) | `js/config.js` → `COMPANY.contact` |

Nothing above requires touching HTML markup or component logic.

## Admin panel & backend integration (not implemented yet)

There is currently **no backend**. `js/api.js` returns the mock data from
`js/config.js` so the site is fully functional for demos. Every function
in `api.js` documents the real REST endpoint it should call once a
backend exists, for example:

```
GET/POST/PUT/DELETE /api/projects
GET/POST/PUT/DELETE /api/blog-posts
GET/POST/PUT/DELETE /api/team-members
GET/POST/PUT/DELETE /api/testimonials
GET/POST/PUT/DELETE /api/services
GET/PUT             /api/stats
GET/POST/PUT         /api/contact-requests
```

`ContactRequest` shape (see `config.js#createContactRequest`):

```js
{ id, name, telegram, email, phone, projectType, budget, message, createdAt, status }
// status: "new" | "contacted" | "completed"
```

To wire up a real admin panel:
1. Build the backend (FastAPI/Django + PostgreSQL is a natural fit given
   DasturLab's own stack) with the endpoints above, all under
   session/JWT-protected `/api/admin/*` routes for writes.
2. Replace each function body in `js/api.js` with a real `fetch()` call —
   callers (`app.js`) don't need to change.
3. Never put API keys or secrets in this codebase; use server-side
   environment variables only.
4. Re-validate every form submission server-side even though the
   frontend already validates — the current client-side check in
   `initContactForm()` is a UX convenience, not a security boundary.

## What's a placeholder right now

By design, per the brief, the following are **not real** and must be
replaced before launch: social media links, email/phone, testimonials,
and team members' social URLs. They are clearly marked `PLACEHOLDER` in
`config.js` and inline in the contact section.

## Browser support / performance / accessibility notes

- No external JS framework; all scripts are deferred by placement at the
  end of `<body>`.
- Images are avoided in favor of CSS/text placeholders for project and
  blog thumbnails so the demo has zero binary asset weight — replace
  `.project-thumb` / `.blog-thumb` divs with real `<img loading="lazy">`
  once real photography/screenshots exist.
- Respects `prefers-reduced-motion` (disables scroll/hover animation and
  the hero particle canvas loop).
- Keyboard-navigable: visible focus states, semantic landmarks
  (`header`, `main`, `footer`, `nav`), form labels tied to inputs.
- Dark mode is the default; theme and language choices persist via
  `localStorage`.
# dasturlab
# dasturlab
# dasturlab
# dasturlab
# dasturlab
# dasturlab
