# React Migration Progress Register

The original static application and reference template remain preserved. The
React app implements the 35 original page routes. Phases 0–10 are complete and
approved; Phase 11 is implemented and verified and is awaiting the user's
explicit final acceptance. See the [final quality-control report](./PHASE-11-VERIFICATION.md).

## Page register

The page statuses below reflect converted source content/layout/styles,
implemented page interactions, tested direct routes and browser console,
desktop visual comparison, mobile checks, and explicit phase authorization.
Phase 10's verification was approved when the user authorized Phase 11.

| # | Source page | React component | Status |
|---:|---|---|---|
| 1 | `index.html` | `LandingPage` | APPROVED |
| 2 | `pages/public/courses.html` | `CoursesPage` | APPROVED |
| 3 | `pages/public/course-detail.html` | `CourseDetailPage` | APPROVED |
| 4 | `pages/public/organisations.html` | `OrganisationsPage` | APPROVED |
| 5 | `pages/public/about.html` | `AboutPage` | APPROVED |
| 6 | `pages/public/contact.html` | `ContactPage` | APPROVED |
| 7 | `pages/auth/login.html` | `LoginPage` | APPROVED |
| 8 | `pages/auth/register.html` | `RegisterPage` | APPROVED |
| 9 | `pages/auth/forgot-password.html` | `ForgotPasswordPage` | APPROVED |
| 10 | `pages/learner/dashboard.html` | Learner `DashboardPage` | APPROVED |
| 11 | `pages/learner/my-learning.html` | `MyLearningPage` | APPROVED |
| 12 | `pages/learner/lesson.html` | `LessonPage` | APPROVED |
| 13 | `pages/learner/assessment.html` | `AssessmentPage` | APPROVED |
| 14 | `pages/learner/progress.html` | Learner `ProgressPage` | APPROVED |
| 15 | `pages/learner/certificates.html` | Learner `CertificatesPage` | APPROVED |
| 16 | `pages/learner/profile.html` | `ProfilePage` | APPROVED |
| 17 | `pages/instructor/dashboard.html` | Instructor `DashboardPage` | APPROVED |
| 18 | `pages/instructor/classes.html` | `ClassesPage` | APPROVED |
| 19 | `pages/instructor/class-detail.html` | `ClassDetailPage` | APPROVED |
| 20 | `pages/instructor/learner-detail.html` | `LearnerDetailPage` | APPROVED |
| 21 | `pages/instructor/reports.html` | Instructor `ReportsPage` | APPROVED |
| 22 | `pages/organisation/dashboard.html` | Organisation `DashboardPage` | APPROVED |
| 23 | `pages/organisation/programmes.html` | `ProgrammesPage` | APPROVED |
| 24 | `pages/organisation/cohort-detail.html` | `CohortDetailPage` | APPROVED |
| 25 | `pages/organisation/learners.html` | Organisation `LearnersPage` | APPROVED |
| 26 | `pages/organisation/reports.html` | Organisation `ReportsPage` | APPROVED |
| 27 | `pages/organisation/certificates.html` | Organisation `CertificatesPage` | APPROVED |
| 28 | `pages/organisation/settings.html` | `SettingsPage` | APPROVED |
| 29 | `pages/admin/dashboard.html` | Admin `DashboardPage` | APPROVED |
| 30 | `pages/admin/organisations.html` | Admin `OrganisationsPage` | APPROVED |
| 31 | `pages/admin/users.html` | `UsersPage` | APPROVED |
| 32 | `pages/admin/content-library.html` | `ContentLibraryPage` | APPROVED |
| 33 | `pages/admin/lesson-editor.html` | `LessonEditorPage` | APPROVED |
| 34 | `pages/admin/translations.html` | `TranslationsPage` | APPROVED |
| 35 | `pages/admin/certificates.html` | Admin `CertificatesPage` | APPROVED |

`/` and `/index.html` both render the landing page. There are 35 source pages
and 36 recognized route URLs when counting that alias.

## Phase register

| Phase | Scope | Status |
|---|---|---|
| 0 | Source audit, route/conversion matrix, English screenshot baseline | APPROVED |
| 1 | Source preservation and React/Vite foundation | APPROVED |
| 2 | Shared React components and design-system foundation | APPROVED |
| 3 | Public website migration | APPROVED |
| 4 | Authentication migration | APPROVED |
| 5 | Learner migration | APPROVED |
| 6 | Instructor migration | APPROVED |
| 7 | Organisation administration migration | APPROVED |
| 8 | Platform administration migration | APPROVED |
| 9 | Global integration and functionality | APPROVED |
| 10 | Full visual regression and responsive validation | APPROVED |
| 11 | Final quality control and documentation | IMPLEMENTED AND VERIFIED — awaiting user approval |

## Verification evidence

- Phase 0 captured 35 source pages at desktop (1440 × 900), tablet
  (768 × 1024), and mobile (375 × 812), for 105 English baselines.
- Phase 9 verified all 35 direct page routes, refresh behavior, language
  persistence, and representative page interactions.
- Phase 10 compared 105 React screenshots against the matching source
  baselines in Chromium at device scale factor 1. All dimensions matched;
  mean RGB absolute difference was 0.169/255 desktop, 0.104/255 tablet,
  and 0.163/255 mobile. No capture-time page/console errors or failed
  requests remained. The seven admin logo font changes implement the
  separately requested Caveat consistency correction.
- Phase 11 added and ran browser checks for English/Luganda controls on all
  35 routes and same-origin links and in-page anchor targets across all pages.
  Final run results and the final visual matrix are recorded in
  [PHASE-11-VERIFICATION.md](./PHASE-11-VERIFICATION.md).

See the [route map](./ROUTE-MAP.md), [component map](./REACT-CONVERSION-MAP.md),
[functionality register](./FUNCTIONALITY.md), and
[migration changelog](./MIGRATION-CHANGELOG.md) for implementation details.
