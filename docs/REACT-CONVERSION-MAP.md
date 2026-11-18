# React Conversion and Component Map

## Route and page architecture

`react-app/src/router.jsx` maps the legacy `.html` paths to React page
components. `/` and `/index.html` both render the landing page. Page exports
are grouped by application area:

| Module | Components |
|---|---|
| `src/pages/PublicPages.jsx` | `LandingPage`, `CoursesPage`, `CourseDetailPage`, `OrganisationsPage`, `AboutPage`, `ContactPage` |
| `src/pages/AuthPages.jsx` | `LoginPage`, `RegisterPage`, `ForgotPasswordPage` |
| `src/pages/LearnerPages.jsx` | `DashboardPage`, `MyLearningPage`, `LessonPage`, `AssessmentPage`, `ProgressPage`, `CertificatesPage`, `ProfilePage` |
| `src/pages/InstructorPages.jsx` | `DashboardPage`, `ClassesPage`, `ClassDetailPage`, `LearnerDetailPage`, `ReportsPage` |
| `src/pages/OrganisationPages.jsx` | `DashboardPage`, `ProgrammesPage`, `CohortDetailPage`, `LearnersPage`, `ReportsPage`, `CertificatesPage`, `SettingsPage` |
| `src/pages/AdminPages.jsx` | `DashboardPage`, `OrganisationsPage`, `UsersPage`, `ContentLibraryPage`, `LessonEditorPage`, `TranslationsPage`, `CertificatesPage` |

Identically named pages are imported with role-specific aliases in the router.
The [source-to-React route map](./ROUTE-MAP.md) contains the full path/title
matrix.

## Shared application structure

- `src/main.jsx` mounts the app.
- `src/router.jsx` provides the route table, page title/body class, localized
  rendering, and fragment navigation.
- `src/context/LanguageContext.jsx` provides shared English/Luganda state,
  translation lookup, document language/title updates, and persistence.
- `src/components/SiteHeaders.jsx` and related components render the shared
  logo, role-specific navigation, and language control.
- `src/components/` contains reusable buttons, cards, forms, data tables,
  tabs, modals, alerts, progress indicators, and decorative components.
- `src/Phase2Preview.jsx` is the foundation preview component retained for
  paths not represented in `migratedPages`; the 35 source-page routes have
  page implementations.

## Styling and assets

The original source HTML/CSS/JavaScript and assets remain at the repository
root. The original stylesheets are copied into `src/styles/legacy/` and are
loaded in source order by `src/styles/shared.css`: design tokens, reset,
global, components, layout, responsive, then language-toggle styles.
Role-specific page styles and source font variants are applied by the page
layouts. React-specific presentation and shared components use
`src/styles/components.css`.

Images, icons, and fonts retain the source resource references and display
conditions. No redesign or replacement asset set is introduced.

## Behavior conversion

The shared language control is implemented in React context rather than a
legacy DOM observer. Page-level interactions use React state and event
handlers: filtering, tabs, modal visibility, demo form feedback, exercise
feedback, review status, and demo exports. Authentication, API persistence,
email delivery, and backend operations are not implemented.

See [functionality](./FUNCTIONALITY.md) for user-visible behavior and demo
limitations, and the [migration changelog](./MIGRATION-CHANGELOG.md) for
significant conversion decisions and source adjustments.
