# Résumé portfolio verification

- Production build: passed (`npm run build`).
- Test suite: 5 files, 12 tests passed (`npm test`).
- Browser: home, work index, two work detail pages, projects index, two project detail pages and story checked at 320, 768, 1024, 1440px. No horizontal overflow. One h1 per page.
- Browser console: no errors during these checks.
- Project navigation, direct detail reload and contact anchor checked in the browser.
- Automated checks cover legacy work hashes, unknown slugs, titles and back navigation.
- Local preview: http://127.0.0.1:4173/
- Existing public deployment unchanged. Implementation retained on `feat/resume-portfolio`.

## Content boundaries
Project detail pages use only existing introductions and explicitly say detailed public screens and case studies are being prepared. No invented metrics, screenshots or private company material.

The avatar is still undecided. A typographic profile mark is used instead of presenting a rejected generated portrait as approved. It can be replaced by the selected bob-haired avatar without changing the page layout.

## 2026-11-11 refresh (identity + projects)
- Rebased onto main `c3a818b` (pinned dependencies, lockfile from main).
- `npm test`: 5 files, 14 tests passed. `npm run build`: passed.
- Browser (dev server): 12 routes × 320/768/1024/1440px — no horizontal overflow, one h1 per page, titles correct. Visual check at desktop and 375px. No console errors.
- Not verified: production deployment (branch not merged), keyboard-only walk-through of new sections.
