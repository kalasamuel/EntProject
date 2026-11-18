# Phase 2 — Shared Components and Design-System Foundation

## Result

Phase 2 acceptance criteria are met. The React app now loads the original
shared stylesheets and provides reusable design-system components and all
seven source header variants. Desktop and mobile representative renders were
captured for each header variant. This report records the state when Phase 2
was completed; Phase 3 page migration is tracked separately in
[`PHASE-3-VERIFICATION.md`](./PHASE-3-VERIFICATION.md).

## Files created or modified

- `react-app/src/components/LanguageToggle.jsx`
- `react-app/src/components/SharedComponents.jsx`
- `react-app/src/components/SiteHeaders.jsx`
- `react-app/src/context/LanguageContext.jsx`
- `react-app/src/Phase2Preview.jsx`
- `react-app/src/router.jsx`
- `react-app/src/styles/shared.css`
- `react-app/src/styles/phase2.css`
- `react-app/src/main.jsx`
- `react-app/index.html`
- `react-app/src/styles/foundation.css` — removed; it was the Phase 1-only
  placeholder styling.
- `docs/PROJECT-PROGRESS.md`
- `docs/MIGRATION-CHANGELOG.md`
- `docs/PHASE-2-VERIFICATION.md`
- `README.md`
- `docs/phase-2/header-variants/` — 14 representative screenshots.

No page-specific HTML, source CSS, or source JavaScript was modified. The
preserved original stylesheet copies remain unchanged.

## Components and features

- Shared CSS entry imports tokens, reset, global styles, components, layout,
  responsive styles, and language-toggle styles in the source order.
- EdTech logo and role-specific header/navigation variants: landing, public,
  authentication, learner, instructor, organisation, and platform admin.
- Shared language toggle uses a React context, the existing
  `edtech-language` local-storage key, and the document `lang` attribute.
  Language state persists across route changes and page reloads.
- Original Font Awesome 6.4.0 stylesheet is retained.
- Google Fonts loading preserves source distinctions: Inter + Caveat on
  landing/public/auth/learner pages and the instructor dashboard; Inter only
  on the other instructor, organisation, and admin pages.
- Reusable buttons, cards, icon containers, summary cards, form inputs and
  selects, search controls, tabs, data tables, progress bars, badges, tags,
  modals, and landing decorative graphics use original class names.
- Tabs support click and arrow/Home/End keyboard navigation. The modal
  supports Escape and backdrop dismissal, initial focus, and focus restoration.
- Table components produce one `.table-wrap` around each `.data-table`.

The toggle currently switches shared language state and persistence. Translating
all page text is intentionally deferred to Phase 9; the Phase 2 preview content
is therefore not translated to Luganda.

## Browser and build verification

| Check | Result |
|---|---|
| Production build (`npm run build`) | PASS |
| Production preview rendering | PASS — landing, public, and admin routes |
| Direct source routes | PASS — `/`, `/index.html`, and all 34 `/pages/*.html` routes |
| Header/body variant mapping | PASS — all 36 URLs render the appropriate variant |
| Shared controls/components | PASS — checked on each route |
| Google Fonts variant | PASS — verified against the source font import per route |
| Shared language state | PASS — toggle, persisted state, route navigation, and document language |
| Tabs | PASS — selection and keyboard navigation |
| Modal | PASS — open, initial focus, Escape, backdrop close, and focus restoration |
| Table structure | PASS — exactly one wrapper; no nested `.table-wrap` |
| Browser console/page errors | PASS — zero |
| Visual review | PASS — seven desktop header variants and representative mobile views inspected |

Screenshots are captured at 1440 × 900 and 375 × 812, device scale factor 1.
The directory contains both viewport sizes for all seven variants:

- [Landing](./phase-2/header-variants/landing-desktop.png) · [mobile](./phase-2/header-variants/landing-mobile.png)
- [Public](./phase-2/header-variants/public-desktop.png) · [mobile](./phase-2/header-variants/public-mobile.png)
- [Authentication](./phase-2/header-variants/auth-desktop.png) · [mobile](./phase-2/header-variants/auth-mobile.png)
- [Learner](./phase-2/header-variants/learner-desktop.png) · [mobile](./phase-2/header-variants/learner-mobile.png)
- [Instructor](./phase-2/header-variants/instructor-desktop.png) · [mobile](./phase-2/header-variants/instructor-mobile.png)
- [Organisation](./phase-2/header-variants/organisation-desktop.png) · [mobile](./phase-2/header-variants/organisation-mobile.png)
- [Platform admin](./phase-2/header-variants/admin-desktop.png) · [mobile](./phase-2/header-variants/admin-mobile.png)

## Outstanding / intentionally deferred

- At Phase 2 completion, the 35 page bodies and their interactions were
  **NOT STARTED**. Six public pages have since been approved, three
  authentication pages have been implemented and verified, and the remaining
  26 page bodies are still **NOT STARTED**.
- Role-specific page CSS files remain preserved but are not yet imported into
  page implementations; load them with the relevant page migration.
- The language toggle's shared state is implemented; complete English/Luganda
  content translation and validation remain deferred to Phase 9.
- These component-gallery screenshots verify the shared foundation and header
  variants. They are not page-level visual parity comparisons.

**Phase 2 acceptance criteria: met.** Phase 3 is approved, and Phase 4
authentication migration is ready for approval; see
[`PHASE-3-VERIFICATION.md`](./PHASE-3-VERIFICATION.md) and
[`PHASE-4-VERIFICATION.md`](./PHASE-4-VERIFICATION.md).
