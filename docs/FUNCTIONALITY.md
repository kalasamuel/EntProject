# React Application Functionality

The React app preserves the 35 source pages and their local, frontend
interactions. Operations requiring an account service, server, or database are
presented as demos and do not claim remote persistence.

## Shared behavior

- Role-aware navigation retains the original routes and active-page state.
- The language control switches English/Luganda, updates document language
  and page title, and persists the selection under `edtech-language`.
- Hash navigation scrolls to the target section when one exists.
- Shared components preserve the source button, form, card, modal, table, tab,
  badge, and progress patterns.

## Public and authentication pages

- Course catalogue search, category/difficulty/language/status filters, and
  clear-filters behavior update the visible course cards.
- Course cards link to course details; expandable course modules use native
  disclosure elements.
- The landing introduction modal supports its close control, backdrop,
  Escape key, and focus restoration.
- Login offers demo-role navigation to the matching dashboard.
- Contact, registration, and password recovery forms show local demo feedback.
  They do not submit data, create accounts, or send email.

## Learner pages

- My Learning tabs switch between in-progress, completed, and not-started
  course content.
- Lesson and assessment selections provide immediate explanatory feedback.
- Certificate preview opens and closes an accessible modal-style presentation.

## Instructor pages

- Class status controls filter the displayed classes.
- Report export downloads a sample/demo CSV.
- Role navigation connects dashboard, classes, class details, learner details,
  and reports.

## Organisation pages

- Programme search and status controls filter programme content.
- Certificate export downloads a sample/demo CSV.
- Navigation connects programme, cohort, learner, report, certificate, and
  settings views.

## Platform administration pages

- Organisation, user, and certificate registers support their page-specific
  search/filter controls.
- Translation management filters courses, languages, and review states; review
  actions update local status feedback without publishing translations.
- The content library, lesson editor, and certificate registry retain their
  source page structures and demo controls.

## Verification

Playwright tests cover key interactions, all direct routes, refresh, language
controls on all 35 pages, same-origin links and anchors, and responsive
screenshots at desktop/tablet/mobile viewports. Results are in
[Phase 11 verification](./PHASE-11-VERIFICATION.md) and
[Phase 10 visual verification](./PHASE-10-VERIFICATION.md).
