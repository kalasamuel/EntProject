import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Phase2Preview, { getPageVariant } from "./Phase2Preview.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import {
  AboutPage,
  ContactPage,
  CourseDetailPage,
  CoursesPage,
  LandingPage,
  OrganisationsPage,
} from "./pages/PublicPages.jsx";
import {
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
} from "./pages/AuthPages.jsx";
import {
  AssessmentPage,
  CertificatesPage,
  DashboardPage,
  LessonPage,
  MyLearningPage,
  ProfilePage,
  ProgressPage,
} from "./pages/LearnerPages.jsx";
import {
  ClassDetailPage,
  ClassesPage,
  DashboardPage as InstructorDashboardPage,
  LearnerDetailPage,
  ReportsPage,
} from "./pages/InstructorPages.jsx";

const sourceRoutes = [
  "/",
  "/index.html",
  "/pages/public/courses.html",
  "/pages/public/course-detail.html",
  "/pages/public/organisations.html",
  "/pages/public/about.html",
  "/pages/public/contact.html",
  "/pages/auth/login.html",
  "/pages/auth/register.html",
  "/pages/auth/forgot-password.html",
  "/pages/learner/dashboard.html",
  "/pages/learner/my-learning.html",
  "/pages/learner/lesson.html",
  "/pages/learner/assessment.html",
  "/pages/learner/progress.html",
  "/pages/learner/certificates.html",
  "/pages/learner/profile.html",
  "/pages/instructor/dashboard.html",
  "/pages/instructor/classes.html",
  "/pages/instructor/class-detail.html",
  "/pages/instructor/learner-detail.html",
  "/pages/instructor/reports.html",
  "/pages/organisation/dashboard.html",
  "/pages/organisation/programmes.html",
  "/pages/organisation/cohort-detail.html",
  "/pages/organisation/learners.html",
  "/pages/organisation/reports.html",
  "/pages/organisation/certificates.html",
  "/pages/organisation/settings.html",
  "/pages/admin/dashboard.html",
  "/pages/admin/organisations.html",
  "/pages/admin/users.html",
  "/pages/admin/content-library.html",
  "/pages/admin/lesson-editor.html",
  "/pages/admin/translations.html",
  "/pages/admin/certificates.html",
];

const migratedPages = {
  "/pages/public/courses.html": {
    Page: CoursesPage,
    title: "Courses - EdTech",
    bodyClass: "public-page",
  },
  "/pages/public/course-detail.html": {
    Page: CourseDetailPage,
    title: "Digital Foundations - EdTech",
    bodyClass: "public-page",
  },
  "/pages/public/organisations.html": {
    Page: OrganisationsPage,
    title: "For Organisations - EdTech",
    bodyClass: "public-page",
  },
  "/pages/public/about.html": {
    Page: AboutPage,
    title: "About EdTech",
    bodyClass: "public-page",
  },
  "/pages/public/contact.html": {
    Page: ContactPage,
    title: "Contact EdTech",
    bodyClass: "public-page",
  },
  "/pages/auth/login.html": {
    Page: LoginPage,
    title: "Login - EdTech",
    bodyClass: "auth-page",
  },
  "/pages/auth/register.html": {
    Page: RegisterPage,
    title: "Join EdTech",
    bodyClass: "auth-page",
  },
  "/pages/auth/forgot-password.html": {
    Page: ForgotPasswordPage,
    title: "Forgot Password - EdTech",
    bodyClass: "auth-page",
  },
  "/pages/learner/dashboard.html": {
    Page: DashboardPage,
    title: "Learner Dashboard - EdTech",
    bodyClass: "learner-page",
  },
  "/pages/learner/my-learning.html": {
    Page: MyLearningPage,
    title: "My Learning - EdTech",
    bodyClass: "learner-page",
  },
  "/pages/learner/lesson.html": {
    Page: LessonPage,
    title: "Lesson - EdTech",
    bodyClass: "learner-page",
  },
  "/pages/learner/assessment.html": {
    Page: AssessmentPage,
    title: "Assessment - EdTech",
    bodyClass: "learner-page",
  },
  "/pages/learner/progress.html": {
    Page: ProgressPage,
    title: "Progress - EdTech",
    bodyClass: "learner-page",
  },
  "/pages/learner/certificates.html": {
    Page: CertificatesPage,
    title: "Certificates - EdTech",
    bodyClass: "learner-page",
  },
  "/pages/learner/profile.html": {
    Page: ProfilePage,
    title: "Profile - EdTech",
    bodyClass: "learner-page",
  },
  "/pages/instructor/dashboard.html": {
    Page: InstructorDashboardPage,
    title: "Instructor Dashboard - EdTech",
    bodyClass: "instructor-page",
  },
  "/pages/instructor/classes.html": {
    Page: ClassesPage,
    title: "My Classes - EdTech",
    bodyClass: "instructor-page",
  },
  "/pages/instructor/class-detail.html": {
    Page: ClassDetailPage,
    title: "Class Detail - EdTech",
    bodyClass: "instructor-page",
  },
  "/pages/instructor/learner-detail.html": {
    Page: LearnerDetailPage,
    title: "Learner Detail - EdTech",
    bodyClass: "instructor-page",
  },
  "/pages/instructor/reports.html": {
    Page: ReportsPage,
    title: "Instructor Reports - EdTech",
    bodyClass: "instructor-page",
  },
};

function FoundationPage() {
  const { pathname, hash } = useLocation();
  const variant = getPageVariant(pathname);
  const isLanding = pathname === "/" || pathname === "/index.html";
  const migratedPage = migratedPages[pathname];

  useEffect(() => {
    document.body.className =
      migratedPage?.bodyClass ?? (isLanding ? "landing-page" : variant.bodyClass);
    document.title = isLanding
      ? "EdTech - Digital Skills in Local Languages"
      : migratedPage
        ? migratedPage.title
        : variant.title;
  }, [isLanding, migratedPage, variant]);

  useEffect(() => {
    if (!hash) return;
    requestAnimationFrame(() => {
      document
        .getElementById(decodeURIComponent(hash.slice(1)))
        ?.scrollIntoView();
    });
  }, [hash, pathname]);

  if (isLanding) return <LandingPage />;
  if (migratedPage) {
    const Page = migratedPage.Page;
    return <Page currentPath={pathname} />;
  }

  return <Phase2Preview currentPath={pathname} variant={variant} />;
}

export default function AppRouter() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          {sourceRoutes.map((path) => (
            <Route key={path} path={path} element={<FoundationPage />} />
          ))}
          <Route path="*" element={<FoundationPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
