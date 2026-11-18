# Migration Changelog

Significant React migration decisions and source adjustments are recorded here.

## Phase 1 — Preservation and React foundation

- Created an exact pre-migration snapshot under `backup/pre-react/` before
  scaffolding the React application.
- Kept the original static site and reference template in their existing
  locations; the new Vite application lives under `react-app/` to avoid
  replacing the existing root `index.html` or page routes.
- Added a Vite/React shell with React Router routes for the existing `.html`
  paths. These routes display a foundation placeholder; no page content has
  been converted.
- Copied the original CSS hierarchy into `react-app/src/styles/legacy/`
  without modifying the source or copied CSS.
- Added React 19, React DOM, React Router 7, Vite 8, and the Vite React plugin.
- Added a root README with React development/build instructions.
- Recorded the verified source snapshot inventory, reference-template hashes,
  CSS-copy checks, build result, and browser-route checks in
  `docs/PHASE-1-VERIFICATION.md`.

## Phase 2 — Shared components and design-system foundation

- Imported the unchanged shared source stylesheets in their original order;
  added Font Awesome 6.4.0 and route-specific Google Fonts loading that
  preserves the source's Inter-only versus Inter + Caveat variants.
- Added reusable role-specific headers/navigation, a shared EdTech logo, and a
  shared language-toggle React context backed by the existing
  `edtech-language` storage key. Translation of page content remains deferred
  to the global-functionality phase.
- Added reusable buttons, cards, icon containers, summary cards, labeled
  inputs/selects, search controls, keyboard-operable tabs, one-wrapper data
  tables, progress bars, badges/tags, modals, and decorative graphics.
  Existing source class names are used; legacy CSS files were not edited.
- Replaced the Phase 1-only shell screen with a representative shared-component
  gallery on each original route. This is foundation validation, not page
  conversion.
- Captured and reviewed desktop and mobile renders for landing, public, auth,
  learner, instructor, organisation, and admin header variants. Evidence is
  recorded in `docs/PHASE-2-VERIFICATION.md`.

## Phase 3 — Public website migration

- Implemented the landing page, course catalogue, course detail, organisations,
  about, and contact pages in React while preserving their original routes and
  titles. The remaining 29 routes still use their Phase 2 preview.
- Added client-side course search and combined filters, the contact page's
  local-only demo submission state, and the landing introduction modal with
  close-button, backdrop, Escape, and focus-restoration behavior.
- Scoped the preserved landing-page stylesheet to the landing route. This
  prevents its landing-only heading and banner rules from leaking into public
  pages that use `public.css`.
- Re-captured all six routes against the Phase 0 desktop and mobile baselines
  at 1440 × 900 and 375 × 812. Routes, interactions, and image loading passed
  browser checks with zero console or page errors. Evidence is recorded in
  `docs/PHASE-3-VERIFICATION.md`.
- The React production build passes. No original HTML, CSS, or JavaScript files
  were modified.
- Phase 3 was explicitly approved; Phase 4 authentication migration began.

## Phase 4 — Authentication migration

- Implemented login, learner registration, organisation enquiry, and
  password-recovery views on their existing `.html` routes.
- Preserved required-field and email validation, role-based demo dashboard
  navigation, local-only form confirmations, auth navigation, titles, and the
  shared language toggle. No real authentication, account creation, or email
  delivery is claimed.
- Loaded the unchanged auth stylesheet only while an authentication page is
  mounted. Public-page styles are also now route-scoped to prevent their
  generic form-status styles from leaking into auth pages.
- Captured all three routes at desktop and mobile sizes and compared them with
  the Phase 0 baselines. Direct routes, refresh, validation, demo actions,
  navigation, and responsive overflow checks passed with zero browser errors.
  See `docs/PHASE-4-VERIFICATION.md`.
- The React production build passes. No original HTML, CSS, or JavaScript files
  were modified.
- Phase 4 is ready for explicit user approval; learner migration has not
  started.

## Phase 5 — Learner interface migration

- Implemented the seven learner routes in React: dashboard, my-learning,
  lesson, assessment, progress, certificates, and profile.
- Route-scoped the preserved learner stylesheet so the original learner layout
  and card, progress, lesson, assessment, and profile styles render without
  leaking into other role views.
- Added the learner interactions defined by the original static JavaScript:
  tab switching in My Learning, lesson exercise answer selection with feedback,
  assessment option selection with feedback, and certificate modal open/close.
- Kept the original source HTML, CSS, and JavaScript files unchanged while
  migrating the learner experience into matching React components and route
  handlers.
- Verified the learner routes build successfully and load with the correct
  titles, navigation, and content. Full evidence is recorded in
  `docs/PHASE-5-VERIFICATION.md`.
- Phase 5 is complete and ready for explicit approval before Phase 6 begins.

## Phase 6 — Instructor interface migration

- Implemented the five instructor routes in React: dashboard, classes, class
  detail, learner detail, and reports.
- Loaded the preserved instructor stylesheet only when instructor routes are
  mounted, preventing bleeding into other role styles.
- Recreated the instructor interactions from the original static JavaScript:
  class filtering, export-to-CSV demo report actions, and route-driven
  navigation between the cohort and learner drill-down views.
- Preserved the original route paths and titles while keeping the static source
  files unchanged.
- Verified the instructor routes build successfully and load with the expected
  content and navigation behavior. This work is now ready for explicit Phase 6
  approval before the organisation/admin phases begin.

## Phase 7 — Organisation administration migration

- Implemented the seven organisation routes in React: dashboard, programmes,
  cohort detail, learners, reports, certificates, and settings.
- Scoped the preserved organisation stylesheet to the organisation routes so the
  dashboard, programme cards, reports, certificate register, and settings all
  render without style leakage.
- Recreated the organisation interactions from the original static JavaScript:
  programme search filtering, certificate export actions, and the route-based
  programme/learner views.
- Kept the legacy organisation HTML, CSS, and JavaScript untouched while
  continuing the React migration on the original `.html` paths.
- Verified the organisation routes build successfully and load with the expected
  content, reporting cards, and navigation flow. This phase is now ready for
  explicit approval before the admin migration begins.

## Phase 8 — Platform administration migration

- Implemented the seven admin routes in React: dashboard, organisations,
  users, content library, lesson editor, translations, and certificates.
- Scoped the preserved admin stylesheet to the admin routes so the dashboard,
  table views, content cards, lesson editor, translation queue, and certificate
  registry all render without global style leakage.
- Recreated the admin interactions represented by the legacy screens: data
  tables, course and translation review links, lesson editing layout, and
  certificate registry filtering.
- Kept the legacy admin HTML, CSS, and JavaScript untouched while continuing
  the React migration on the original `.html` paths.
- Verified the admin routes build successfully and resolve correctly. This phase
  is now ready for explicit approval before any later global integration work.

## Phase 9 — Global integration and functionality

- Added the complete 456-entry legacy Luganda phrasebook to the React app and
  verified every key/value against the original JavaScript dictionary.
- Added React-tree localization for page content, shared navigation, accessible
  labels, placeholders, and text passed through reusable components. The
  original protected-content rules are retained for logos, SVG/hidden content,
  protected course titles, and explicitly protected language content.
- Kept English as the source representation so toggling back restores the
  original wording; the existing `edtech-language` preference persists across
  route changes and refreshes, and translated page titles update with language.
- Kept translations in the React render path so state-generated exercise
  feedback is localized without a DOM observer or duplicate legacy handlers.
- Reconnected admin organisation/user/certificate filtering and translation
  queue filters/review messages to React state where the existing legacy
  `admin.js` implemented those interactions.
- Fixed textarea content to use React `defaultValue`, removing React console
  warnings while keeping the original visible text.
- Added Playwright browser validation for all 35 legacy paths, refreshes,
  language switching, cross-route persistence, dynamic feedback, and key
  navigation/filter/modal flows. Added representative desktop screenshots.
- No legacy HTML, JavaScript, or CSS was changed. Full screenshot comparison
  and responsive validation remain Phase 10 work.

## Phase 10 — Full visual regression and responsive validation

- Captured all 35 React routes in Chromium at the source baseline desktop,
  tablet, and mobile viewports; compared all 105 screenshots to their
  corresponding source images.
- Matched source viewport dimensions and page titles on every capture. No
  page errors, console errors, or failed requests remained.
- Corrected role-header actions so dashboard-only buttons do not appear on
  other pages in the same role.
- Restored source-specific card background variants on programme and public
  organisation cards.
- Restored the source document titles for the lesson editor and teaching
  reports, and the Caveat font import on the instructor dashboard.
- Verified original page, asset (including CSS/JS), reference-template, and
  selected root source files against the immutable pre-migration backup.
- At the time of this phase's initial verification, Phase 11 final quality
  control had not started. The user later approved Phase 10 by authorizing
  Phase 11; the final QC record is in `docs/PHASE-11-VERIFICATION.md`.

## 2026-11-18 — Admin logo font consistency

- Enabled the existing Caveat font import in the shared admin layout because
  the shared `.logo` style specifies Caveat; this makes the logo render with
  the same intended typeface used on pages that already load that font.
- Kept the shared logo markup and legacy CSS unchanged. This narrowly scoped
  font-loading adjustment was compared in the Phase 10 visual regression.

## Phase 11 — Final quality control and documentation

- Added all-route browser checks for English/Luganda controls, same-origin
  links, and in-page anchor targets.
- Added horizontal document overflow assertions to each of the 105
  desktop/tablet/mobile visual captures.
- Updated the root README and project documentation to reflect the completed
  React app, actual component grouping, route map, implemented interactions,
  Phase 10 approval, and Phase 11 status.
- Added final quality-control and original-source integrity reports.
- Kept original HTML/CSS/JavaScript and reference-template files unchanged;
  verified their hashes against the preserved pre-migration snapshot.
- Phase 11 is implemented and verified and awaits explicit final user
  acceptance. See `docs/PHASE-11-VERIFICATION.md`.
