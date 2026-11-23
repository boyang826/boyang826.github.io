# Bo Yang — personal website

Portfolio site for Bo Yang (Electrical Engineering, University of Pennsylvania): projects, cycling, and résumé. English at `/`, Chinese at `/zh/`.

Built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Editing content

- Page copy for both languages: `src/i18n/ui.ts`
- Project case studies: `src/content/projects/en/*.md` and `src/content/projects/zh/*.md`
- Ride stats and route trace: `src/data/ride.ts`
- Contact links: `src/data/site.ts`
- Résumé PDFs (phone-free web copies): `public/resume/`

## Commands

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # static site in dist/
```
