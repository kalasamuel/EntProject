import { Link } from "react-router-dom";
import LanguageToggle from "./LanguageToggle.jsx";
import { LocalizedContent, useLanguage } from "../context/LanguageContext.jsx";

const publicLinks = [
  ["Courses", "/pages/public/courses.html"],
  ["For Organisations", "/pages/public/organisations.html"],
  ["About Us", "/pages/public/about.html"],
  ["Features", "/#features"],
  ["Contact Us", "/pages/public/contact.html"],
];

const learnerLinks = [
  ["Dashboard", "/pages/learner/dashboard.html"],
  ["My Learning", "/pages/learner/my-learning.html"],
  ["Courses", "/pages/public/courses.html"],
  ["Progress", "/pages/learner/progress.html"],
  ["Certificates", "/pages/learner/certificates.html"],
];

const instructorLinks = [
  ["Dashboard", "/pages/instructor/dashboard.html"],
  ["My Classes", "/pages/instructor/classes.html"],
  ["Learners", "/pages/instructor/learner-detail.html"],
  ["Reports", "/pages/instructor/reports.html"],
];

const organisationLinks = [
  ["Dashboard", "/pages/organisation/dashboard.html"],
  ["Programmes", "/pages/organisation/programmes.html"],
  ["Cohorts", "/pages/organisation/cohort-detail.html"],
  ["Learners", "/pages/organisation/learners.html"],
  ["Reports", "/pages/organisation/reports.html"],
  ["Certificates", "/pages/organisation/certificates.html"],
];

const adminLinks = [
  ["Dashboard", "/pages/admin/dashboard.html"],
  ["Organisations", "/pages/admin/organisations.html"],
  ["Users", "/pages/admin/users.html"],
  ["Courses", "/pages/admin/content-library.html"],
  ["Translations", "/pages/admin/translations.html"],
  ["Certificates", "/pages/admin/certificates.html"],
];

function SiteLogo({ landing = false }) {
  return (
    <Link
      className="logo"
      to="/"
      aria-label={landing ? "EdTech home" : undefined}
    >
      EdTech
    </Link>
  );
}

function SiteNavigation({
  links,
  currentPath,
  className = "",
  landing = false,
}) {
  const { t } = useLanguage();

  return (
    <nav
      className={`site-nav${className ? ` ${className}` : ""}`}
      aria-label="Primary navigation"
    >
      {links.map(([label, href]) => {
        const target = href.split("#")[0];
        const isCurrent = !href.includes("#") && currentPath === target;
        return (
          <Link
            key={label}
            to={href}
            aria-current={isCurrent ? "page" : undefined}
          >
            {t(label)}
            {landing && label === "Courses" && (
              <i
                className="fas fa-chevron-down nav-icon"
                aria-hidden="true"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

function HeaderActions({ children }) {
  return (
    <LocalizedContent>
      <div className="header-actions">{children}</div>
    </LocalizedContent>
  );
}

export function LandingNavigation({ currentPath }) {
  return (
    <SiteNavigation links={publicLinks} currentPath={currentPath} landing />
  );
}

export function PublicNavigation({ currentPath }) {
  return <SiteNavigation links={publicLinks} currentPath={currentPath} />;
}

export function AuthNavigation({
  backTo = "/",
  backLabel = "Back to home",
}) {
  return (
    <Link className="btn btn-secondary" to={backTo}>
      {backLabel}
    </Link>
  );
}

export function LearnerNavigation({ currentPath }) {
  return (
    <SiteNavigation
      links={learnerLinks}
      currentPath={currentPath}
      className="learner-nav"
    />
  );
}

export function InstructorNavigation({ currentPath }) {
  return <SiteNavigation links={instructorLinks} currentPath={currentPath} />;
}

export function OrganisationNavigation({ currentPath }) {
  return <SiteNavigation links={organisationLinks} currentPath={currentPath} />;
}

export function AdminNavigation({ currentPath }) {
  return <SiteNavigation links={adminLinks} currentPath={currentPath} />;
}

export function LandingHeader({ currentPath }) {
  return (
    <LocalizedContent>
      <header className="site-header landing-header">
        <SiteLogo landing />
        <LandingNavigation currentPath={currentPath} />
        <HeaderActions>
          <button
            className="icon-btn"
            type="button"
            aria-label="Search courses"
            data-search-toggle
          >
            <i className="fas fa-search" aria-hidden="true" />
          </button>
          <Link className="btn btn-secondary" to="/pages/auth/login.html">
            Login
          </Link>
          <Link className="btn btn-primary" to="/pages/auth/register.html">
            Join Us
          </Link>
        </HeaderActions>
        <LanguageToggle />
      </header>
    </LocalizedContent>
  );
}

export function PublicHeader({ currentPath }) {
  return (
    <LocalizedContent>
      <header className="site-header">
        <SiteLogo />
        <PublicNavigation currentPath={currentPath} />
        <HeaderActions>
          <Link className="btn btn-secondary" to="/pages/auth/login.html">
            Login
          </Link>
          <Link className="btn btn-primary" to="/pages/auth/register.html">
            Join Us
          </Link>
        </HeaderActions>
        <LanguageToggle />
      </header>
    </LocalizedContent>
  );
}

export function AuthHeader({ backTo, backLabel } = {}) {
  return (
    <LocalizedContent>
      <header className="site-header">
        <SiteLogo />
        <AuthNavigation backTo={backTo} backLabel={backLabel} />
        <LanguageToggle />
      </header>
    </LocalizedContent>
  );
}

export function LearnerHeader({ currentPath }) {
  return (
    <LocalizedContent>
      <header className="site-header">
        <SiteLogo />
        <LearnerNavigation currentPath={currentPath} />
        <HeaderActions>
          <Link
            className="btn btn-secondary"
            to="/pages/learner/profile.html"
          >
            Profile
          </Link>
        </HeaderActions>
        <LanguageToggle />
      </header>
    </LocalizedContent>
  );
}

export function InstructorHeader({ currentPath }) {
  return (
    <LocalizedContent>
      <header className="site-header">
        <SiteLogo />
        <InstructorNavigation currentPath={currentPath} />
        <HeaderActions>
          <Link
            className="btn btn-secondary"
            to="/pages/learner/dashboard.html"
          >
            Learner view
          </Link>
        </HeaderActions>
        <LanguageToggle />
      </header>
    </LocalizedContent>
  );
}

export function OrganisationHeader({ currentPath }) {
  return (
    <LocalizedContent>
      <header className="site-header">
        <SiteLogo />
        <OrganisationNavigation currentPath={currentPath} />
        <HeaderActions>
          <Link
            className="btn btn-secondary"
            to="/pages/organisation/settings.html"
          >
            Settings
          </Link>
        </HeaderActions>
        <LanguageToggle />
      </header>
    </LocalizedContent>
  );
}

export function AdminHeader({ currentPath }) {
  return (
    <LocalizedContent>
      <header className="site-header">
        <SiteLogo />
        <AdminNavigation currentPath={currentPath} />
        <LanguageToggle />
      </header>
    </LocalizedContent>
  );
}
