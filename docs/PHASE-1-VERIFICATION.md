# Phase 1 — Preservation and React Foundation Verification

## Result

Phase 1 acceptance criteria are met. The original implementation remains in
place, a verified pre-migration snapshot exists, and a separate Vite + React
application shell builds, starts, and serves the source route paths. No page
has been converted; all page statuses remain **NOT STARTED**.

## Files and directories added or modified

- `backup/pre-react/` — pre-migration copy of all original project files.
- `backup/pre-react-manifest.json` — SHA-256 inventory of the copied files.
- `react-app/` — independent Vite React project.
- `react-app/src/` — entry point, shell, router, foundation style, and
  directories reserved for later phases.
- `react-app/src/styles/legacy/` — unchanged copies of all 14 original CSS
  files.
- `docs/MIGRATION-CHANGELOG.md` — migration decision history.
- `docs/PHASE-1-VERIFICATION.md` — this verification report.
- `docs/PROJECT-PROGRESS.md` — Phase 1 marked complete; no page marked
  migrated.
- `README.md` — React setup instructions and links to migration evidence.

## Preserved source and checksums

The snapshot contains **191 files** totaling **20,213,203 bytes**. Every
snapshot file was SHA-256 compared with its original counterpart; all 191
matched. The machine-readable inventory is
[`../backup/pre-react-manifest.json`](../backup/pre-react-manifest.json).

The original reference-template files remain unchanged:

| File | SHA-256 |
|---|---|
| `reference-template/template/index.html` | `64A69B7BFF6288FC1588AD753DC8871A7BD9DD47B49A058D6E9997EBDF64A678` |
| `reference-template/template/styles.css` | `B97BBFA1DDDC137FAE598EE2A57F092DB36FC4D2A40B8E81E6DF0EFE141CF7C1` |
| `reference-template/template/script.js` | `9CD8BF361E8930E79E96AC95337B7876AA481641143934BB655CDF5FC4B5109F` |

All **14 of 14** original stylesheets under `assets/css/` were copied to
`react-app/src/styles/legacy/`; source and destination SHA-256 values match.

## React foundation

- React `19.3.1`
- React DOM `19.3.1`
- React Router DOM `7.18.5`
- Vite `8.3.8`
- `@vitejs/plugin-react` `6.3.0`
- Node.js `22.13.1`

`react-app/` contains the Vite HTML entry, React entry point, root shell,
React Router setup, and 36 registered paths (`/`, `/index.html`, and the 34
source routes under `/pages/`). Each path currently renders the explicit
foundation placeholder; page conversion is not part of Phase 1.

## Validation

| Check | Result |
|---|---|
| Pre-migration snapshot | PASS — 191 files; all SHA-256 comparisons match |
| Reference template preservation | PASS — recorded hashes match |
| Original CSS copies | PASS — all 14 source/copy hashes match |
| Dependency installation | PASS — dependency tree resolves |
| Production build (`npm run build`) | PASS — Vite production output generated |
| Dev server startup | PASS — Vite ready at `http://127.0.0.1:4173/` |
| HTTP direct-route fallback | PASS — public, learner, and admin `.html` paths return HTTP 200 |
| Chromium rendering | PASS — all 36 registered URLs render their requested route |
| Browser console/page errors | PASS — zero across the 36 route checks |

## Screenshot

The foundation shell was captured in Chromium at 1440 × 900 on the
representative admin route:

![React foundation rendered at the admin translations route](./phase-1/react-foundation-admin-route.png)

This is a Phase 1 shell screenshot, not a visual comparison against a migrated
page. No pages have been converted yet.

## Outstanding / intentionally deferred

- The 35 page implementations are not started.
- Legacy CSS copies are preserved but are not yet loaded into React; shared
  design-system integration belongs to Phase 2.
- The original root static site and `react-app/` are separate entry points;
  root-level production routing to React is not switched in Phase 1.
- Visual parity is not evaluated for an unconverted page.

**Phase 1 acceptance criteria: met. Phase 2: not started; explicit approval
required.**
