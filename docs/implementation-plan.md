# Resume portfolio implementation plan

**Goal:** Deliver the approved responsive résumé home with separately addressable work and project pages.
**Architecture:** Retain React Router and existing public content. A typed collection drives indexes and detail pages; route effects handle legacy hashes, document titles and navigation focus.
**Tech stack:** React, TypeScript, Vite, CSS, Vitest, Testing Library.

## Constraints
- No invented employment, achievements, project screenshots or private company material.
- Keep the current story and old work hash links accessible.
- White editorial layout, restrained lavender, no proficiency scores.
- Use only the avatar the owner selected (small circular WebP).

## Tasks
- [x] Add `src/content/portfolio.ts` using existing work data; create `PortfolioPages.tsx` for work/project indexes, details and not found states.
- [x] Replace `HomePage.tsx` with the résumé layout and add `resume.css`; update shared navigation with PROJECTS and an accessible skip link.
- [x] Add route transition handling and legacy redirects in `src/app/routes.tsx`.
- [x] Test work/project links, detail access, unknown slugs, legacy hashes and browser navigation. Update obsolete home/work assertions to the approved structure.
- [x] Run `npm run build` and `npm test`; inspect 320, 768, 1024 and 1440px browser layouts and keyboard navigation.
- [x] Review diff and provide a local preview. Do not push the branch or deploy the redesign without final review.

