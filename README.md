# Glycerine Aksara User Guide

User guides for the two Glycerine Aksara applications:

- **[Glycerine Aksara Viewer](https://github.com/Systemik-Solutions/glycerine-aksara-viewer)** —
  public presentation of Gāndhārī manuscript editions.
- **[Glycerine Aksara Editor](https://github.com/Systemik-Solutions/glycerine-aksara-editor)** —
  the workbench where those editions are created.

Both applications read from the same
[Supabase backend](https://github.com/Systemik-Solutions/im-manuscripts-supabase), so the guides
share a `concepts/` section covering the data model, editions, akṣaras, and annotations.

Built with [VitePress](https://vitepress.dev).

## Local development

```bash
npm install
npm run dev      # http://localhost:5173 with hot reload
npm run build    # static site to docs/.vitepress/dist
npm run preview  # serve the production build locally
```

## Repository layout

```
docs/
├─ index.md              landing page — routes readers to the right guide
├─ viewer/               Viewer guide (public audience)
├─ editor/               Editor guide (contributing scholars)
├─ concepts/             shared: data model, editions, akṣaras, annotations, IIIF
├─ reference/            glossary, troubleshooting, IIIF endpoints
├─ public/images/        screenshots and diagrams
└─ .vitepress/
   ├─ config.mjs         nav, sidebar, search, deploy base path
   └─ theme/             brand colours and the transliteration typeface
```

## Writing conventions

- Australian English spelling, sentence case for headings.
- Pages are task-shaped: name what the reader is trying to do, not what the UI is called.
- Screenshots live in `docs/public/images/<app>/` and are referenced as
  `/images/viewer/example.png`. Capture at 2× and keep the browser chrome out.
- Transliterated Gāndhārī goes in `<span class="translit">…</span>`, or a `translit-block` div for
  longer passages. The Gentium Plus typeface loaded by the theme covers the diacritics.
- Cross-link between the guides freely — the Editor guide should say what a decision looks like in
  the Viewer, and vice versa.

## Deployment

Pushing to `main` builds and publishes to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Before the first deploy, set **Settings → Pages → Source** to **GitHub Actions** in the repository.

The site is served from a project subpath, so `base` in `docs/.vitepress/config.mjs` is set to
`/glycerine-aksara-user-guide/`. Change it to `/` if the guide moves to its own domain.
