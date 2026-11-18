# Phase 4 — Authentication Migration Verification

## Result

The login, registration, and password-recovery routes are implemented and
verified. The production build, desktop/mobile comparisons, and browser
interaction checks pass. Phase 4 is **READY FOR APPROVAL**; do not begin Phase 5
until the user explicitly approves this phase.

## Scope and visual comparison

All three routes were directly loaded and refreshed, then compared with their
matching Phase 0 screenshots. Captures use Chromium at device scale factor 1,
English locale, a 1440 × 900 desktop viewport, and a 375 × 812 mobile viewport.
All six React screenshots match their baseline pixel dimensions and full-page
heights. Mean absolute RGB-channel differences are no greater than 0.039/255.

| Page | Desktop comparison | Mobile comparison |
|---|---|---|
| Login | [React](./phase-4/screenshots/desktop-login.png) · [baseline](./visual-baselines/desktop/pages--auth--login.png) | [React](./phase-4/screenshots/mobile-login.png) · [baseline](./visual-baselines/mobile/pages--auth--login.png) |
| Registration | [React](./phase-4/screenshots/desktop-register.png) · [baseline](./visual-baselines/desktop/pages--auth--register.png) | [React](./phase-4/screenshots/mobile-register.png) · [baseline](./visual-baselines/mobile/pages--auth--register.png) |
| Password recovery | [React](./phase-4/screenshots/desktop-forgot-password.png) · [baseline](./visual-baselines/desktop/pages--auth--forgot-password.png) | [React](./phase-4/screenshots/mobile-forgot-password.png) · [baseline](./visual-baselines/mobile/pages--auth--forgot-password.png) |

| Page | Desktop full-page height | Mobile full-page height |
|---|---:|---:|
| Login | 920 px | 1056 px |
| Registration | 1061 px | 1961 px |
| Password recovery | 906 px | 905 px |

## Functional and build checks

| Check | Result |
|---|---|
| Production build (`npm run build`) | PASS |
| Direct route load and refresh; correct title, heading, and body class | PASS |
| Login required-field and email validation | PASS |
| Demo login redirects for learner, instructor, organisation, and admin roles | PASS |
| Learner registration and organisation enquiry local demo forms | PASS |
| Password recovery local demo confirmation | PASS |
| Back-to-home, back-to-login, login, and join navigation | PASS |
| Shared language toggle and persisted `edtech-language` value | PASS |
| Mobile horizontal overflow at 375 px | PASS — none |
| Auth/public stylesheet isolation during route navigation | PASS |
| Browser console and uncaught page errors | PASS — zero |

Login remains a demo role selector that navigates to dashboard previews. The
registration and recovery forms only display local demo confirmations; no
account is created and no email is sent. The shared language toggle persists
its selected language, while page-content translation remains scheduled for
Phase 9.

## Files and approval boundary

Authentication pages are implemented in `react-app/src/pages/AuthPages.jsx`
and selected by `react-app/src/router.jsx`. They use the existing shared
`AuthHeader`, with a configurable back link for password recovery. The
unchanged auth stylesheet is loaded only while an auth page is mounted. Public
page CSS is likewise route-scoped. Original static HTML, CSS, and JavaScript
files remain unchanged.

The six public pages are approved from Phase 3. These three authentication
pages have passed implementation, visual-comparison, and functional-verification
gates, but are not **APPROVED** until explicit Phase 4 approval. Phase 5 learner
migration has not started.
