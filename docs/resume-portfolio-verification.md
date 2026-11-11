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
Project pages use only facts from each repository's own status documents. No invented metrics, screenshots or private company material. The avatar is the owner-selected character, shipped as a 720px WebP.

## 2026-11-11 refresh (identity + projects)
- Rebased onto main `c3a818b` (pinned dependencies, lockfile from main).
- `npm test`: 5 files, 14 tests passed. `npm run build`: passed.
- Browser (dev server): 12 routes × 320/768/1024/1440px — no horizontal overflow, one h1 per page, titles correct. Visual check at desktop and 375px. No console errors.
- Not verified: production deployment (branch not merged), keyboard-only walk-through of new sections.

## 2026-11-11 redesign (developer résumé, sidebar layout)
- `npm test`: 5 files, 15 tests passed. `npm run build`: passed (CSS 10.7 kB).
- Browser (dev server): 10 routes × 320/375/768/1024/1440px — no horizontal overflow, one h1 per page, no text under 12px.
- Visual check at desktop and 375px; sidebar scroll highlight works; skip link is the first focus stop; Pretendard and JetBrains Mono load.
- No console errors after a clean reload.
- Not verified: production deployment, print output, screen reader walk-through.

## 2026-11-11 QC round 2 fixes
- `npm test`: 5 files, 17 tests passed (adds hash-jump focus and aria-current on project pages). `npm run build`: passed.
- Fonts are bundled from npm (pretendard 1.3.9, @fontsource/jetbrains-mono 5.3.0); browser shows 0 external font requests and both fonts load.
- Browser: no horizontal overflow at 320/768/1440px on 6 routes; sidebar link moves focus to the target section.
- Not verified: production deployment, print output, screen reader walk-through.
