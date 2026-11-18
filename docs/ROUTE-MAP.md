# Source-to-React Route Map

This is the one-to-one source-to-React conversion matrix. The React app
preserves the original `.html` route paths and maps all 35 source pages to
components. `/` and `/index.html` are aliases for the landing page. All pages
are approved; their progress and verification evidence are in the
[progress register](./PROJECT-PROGRESS.md).

| # | Source route | Area | Source page title | Page stylesheet | Target React component |
|---:|---|---|---|---|---|
| 1 | `/` and `/index.html` | Public | EdTech - Digital Skills in Local Languages | `landing.css` | `LandingPage.jsx` |
| 2 | `/pages/public/courses.html` | Public | Courses - EdTech | `public.css` | `CoursesPage.jsx` |
| 3 | `/pages/public/course-detail.html` | Public | Digital Foundations - EdTech | `public.css` | `CourseDetailPage.jsx` |
| 4 | `/pages/public/organisations.html` | Public | For Organisations - EdTech | `public.css` | `OrganisationsPage.jsx` |
| 5 | `/pages/public/about.html` | Public | About EdTech | `public.css` | `AboutPage.jsx` |
| 6 | `/pages/public/contact.html` | Public | Contact EdTech | `public.css` | `ContactPage.jsx` |
| 7 | `/pages/auth/login.html` | Authentication | Login - EdTech | `auth.css` | `LoginPage.jsx` |
| 8 | `/pages/auth/register.html` | Authentication | Join EdTech | `auth.css` | `RegisterPage.jsx` |
| 9 | `/pages/auth/forgot-password.html` | Authentication | Forgot Password - EdTech | `auth.css` | `ForgotPasswordPage.jsx` |
| 10 | `/pages/learner/dashboard.html` | Learner | Learner Dashboard - EdTech | `learner.css` | Learner `DashboardPage.jsx` |
| 11 | `/pages/learner/my-learning.html` | Learner | My Learning - EdTech | `learner.css` | `MyLearningPage.jsx` |
| 12 | `/pages/learner/lesson.html` | Learner | Lesson - EdTech | `learner.css` | `LessonPage.jsx` |
| 13 | `/pages/learner/assessment.html` | Learner | Assessment - EdTech | `learner.css` | `AssessmentPage.jsx` |
| 14 | `/pages/learner/progress.html` | Learner | Progress - EdTech | `learner.css` | Learner `ProgressPage.jsx` |
| 15 | `/pages/learner/certificates.html` | Learner | Certificates - EdTech | `learner.css` | Learner `CertificatesPage.jsx` |
| 16 | `/pages/learner/profile.html` | Learner | Profile - EdTech | `learner.css` | `ProfilePage.jsx` |
| 17 | `/pages/instructor/dashboard.html` | Instructor | Instructor Dashboard - EdTech | `instructor.css` | Instructor `DashboardPage.jsx` |
| 18 | `/pages/instructor/classes.html` | Instructor | My Classes - EdTech | `instructor.css` | `ClassesPage.jsx` |
| 19 | `/pages/instructor/class-detail.html` | Instructor | Class Detail - EdTech | `instructor.css` | `ClassDetailPage.jsx` |
| 20 | `/pages/instructor/learner-detail.html` | Instructor | Learner Detail - EdTech | `instructor.css` | `LearnerDetailPage.jsx` |
| 21 | `/pages/instructor/reports.html` | Instructor | Teaching Reports - EdTech | `instructor.css` | Instructor `ReportsPage.jsx` |
| 22 | `/pages/organisation/dashboard.html` | Organisation | Organisation Overview - EdTech | `organisation.css` | Organisation `DashboardPage.jsx` |
| 23 | `/pages/organisation/programmes.html` | Organisation | Training Programmes - EdTech | `organisation.css` | `ProgrammesPage.jsx` |
| 24 | `/pages/organisation/cohort-detail.html` | Organisation | Cohort Detail - EdTech | `organisation.css` | `CohortDetailPage.jsx` |
| 25 | `/pages/organisation/learners.html` | Organisation | Manage Learners - EdTech | `organisation.css` | Organisation `LearnersPage.jsx` |
| 26 | `/pages/organisation/reports.html` | Organisation | Programme Performance - EdTech | `organisation.css` | Organisation `ReportsPage.jsx` |
| 27 | `/pages/organisation/certificates.html` | Organisation | Certificates and Achievements - EdTech | `organisation.css` | Organisation `CertificatesPage.jsx` |
| 28 | `/pages/organisation/settings.html` | Organisation | Organisation Settings - EdTech | `organisation.css` | `SettingsPage.jsx` |
| 29 | `/pages/admin/dashboard.html` | Platform admin | Platform Overview - EdTech | `admin.css` | Admin `DashboardPage.jsx` |
| 30 | `/pages/admin/organisations.html` | Platform admin | Organisations - EdTech | `admin.css` | Admin `OrganisationsPage.jsx` |
| 31 | `/pages/admin/users.html` | Platform admin | User Management - EdTech | `admin.css` | Admin `UsersPage.jsx` |
| 32 | `/pages/admin/content-library.html` | Platform admin | Learning Content - EdTech | `admin.css` | `ContentLibraryPage.jsx` |
| 33 | `/pages/admin/lesson-editor.html` | Platform admin | Lesson Editor - EdTech | `admin.css` | `LessonEditorPage.jsx` |
| 34 | `/pages/admin/translations.html` | Platform admin | Translation Management - EdTech | `admin.css` | `TranslationsPage.jsx` |
| 35 | `/pages/admin/certificates.html` | Platform admin | Certificate Registry - EdTech | `admin.css` | Admin `CertificatesPage.jsx` |

## Header and stylesheet variants

| Page area | Header variant | Common stylesheet sequence | Page stylesheet |
|---|---|---|---|
| Landing | Public landing header | Tokens → reset → global → components → layout → responsive | `landing.css` |
| Public content | Public header | Tokens → reset → global → components → layout → responsive | `public.css` |
| Authentication | Auth header | Tokens → reset → global → components → layout → responsive | `auth.css` |
| Learner | Learner header | Tokens → reset → global → components → layout → responsive | `learner.css` |
| Instructor | Instructor header | Tokens → reset → global → components → layout → responsive | `instructor.css` |
| Organisation | Organisation header | Tokens → reset → global → components → layout → responsive | `organisation.css` |
| Platform admin | Admin header | Tokens → reset → global → components → layout → responsive | `admin.css` |

`language-toggle.css`, Font Awesome 6.4.0, and a page-specific Google Fonts
variant are additionally loaded by the React app. The original stylesheets,
assets, and font variants are preserved; see the
[conversion map](./REACT-CONVERSION-MAP.md).
