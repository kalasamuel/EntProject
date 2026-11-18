# Phase 3 — Public Website Migration Verification

## Result

The six Phase 3 public pages are implemented and verified at desktop and
mobile sizes. The production build and browser interaction checks pass. The
user explicitly approved Phase 3 and authorized Phase 4 authentication
migration, which is tracked in
[`PHASE-4-VERIFICATION.md`](./PHASE-4-VERIFICATION.md).

## Scope and visual comparison

Each React capture was compared with its matching Phase 0 source baseline.
Captures use Chromium at device scale factor 1, English locale, a 1440 × 900
desktop viewport, and a 375 × 812 mobile viewport. All 12 React screenshots
have the same pixel dimensions and full-page heights as their corresponding
baselines. Image comparison showed only low-level pixel differences (mean
absolute channel difference no greater than 0.894/255).

| Page | Desktop comparison | Mobile comparison |
|---|---|---|
| Landing | [React](./phase-3/screenshots/desktop/root.png) · [baseline](./visual-baselines/desktop/root.png) | [React](./phase-3/screenshots/mobile/root.png) · [baseline](./visual-baselines/mobile/root.png) |
| Course catalogue | [React](./phase-3/screenshots/desktop/courses.png) · [baseline](./visual-baselines/desktop/pages--public--courses.png) | [React](./phase-3/screenshots/mobile/courses.png) · [baseline](./visual-baselines/mobile/pages--public--courses.png) |
| Course detail | [React](./phase-3/screenshots/desktop/course-detail.png) · [baseline](./visual-baselines/desktop/pages--public--course-detail.png) | [React](./phase-3/screenshots/mobile/course-detail.png) · [baseline](./visual-baselines/mobile/pages--public--course-detail.png) |
| Organisations | [React](./phase-3/screenshots/desktop/organisations.png) · [baseline](./visual-baselines/desktop/pages--public--organisations.png) | [React](./phase-3/screenshots/mobile/organisations.png) · [baseline](./visual-baselines/mobile/pages--public--organisations.png) |
| About | [React](./phase-3/screenshots/desktop/about.png) · [baseline](./visual-baselines/desktop/pages--public--about.png) | [React](./phase-3/screenshots/mobile/about.png) · [baseline](./visual-baselines/mobile/pages--public--about.png) |
| Contact | [React](./phase-3/screenshots/desktop/contact.png) · [baseline](./visual-baselines/desktop/pages--public--contact.png) | [React](./phase-3/screenshots/mobile/contact.png) · [baseline](./visual-baselines/mobile/pages--public--contact.png) |

## Functional and build checks

| Check | Result |
|---|---|
| Production build (`npm run build`) | PASS |
| Direct load and refresh of all six routes; `/` and `/index.html` landing aliases | PASS |
| Shared language toggle present on every Phase 3 route | PASS |
| Mobile horizontal overflow at 375 px | PASS — none |
| Landing-to-courses navigation and landing feature hash navigation | PASS |
| Introduction modal close button, Escape, backdrop, focus restoration | PASS |
| Course search, combined difficulty/language filtering, clear filters | PASS |
| Contact demo form submission status | PASS — explicitly reports that no real message was sent |
| Image loading across all six pages and both viewports | PASS — no failed images |
| Browser console errors and uncaught page errors | PASS — zero |

The landing page and public pages use their respective preserved page styles.
Each stylesheet is loaded only while its page component is mounted, preventing
landing-only and public-only rules from leaking across routes.

## Files and approval boundary

The six pages are implemented in `react-app/src/pages/PublicPages.jsx` and
selected by `react-app/src/router.jsx`. The original static HTML, CSS, and
JavaScript files remain unchanged. The six pages are approved; the other 26
routes remain on the Phase 2 preview.

All six public pages have passed implementation, visual-comparison, and
functional-verification gates and have been explicitly approved for Phase 3.
