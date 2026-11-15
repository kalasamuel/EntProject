import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageFontLoader from "../components/PageFontLoader.jsx";
import { AuthHeader } from "../components/SiteHeaders.jsx";
import authStyles from "../styles/legacy/pages/auth.css?inline";

const dashboardRoutes = {
  learner: "/pages/learner/dashboard.html",
  instructor: "/pages/instructor/dashboard.html",
  organisation: "/pages/organisation/dashboard.html",
  admin: "/pages/admin/dashboard.html",
};

function AuthLayout({ backTo = "/", backLabel = "Back to home", children }) {
  return (
    <>
      <style>{authStyles}</style>
      <PageFontLoader includeCaveat />
      <AuthHeader backTo={backTo} backLabel={backLabel} />
      {children}
    </>
  );
}

function DemoFormStatus({ submitted, children }) {
  return (
    <p
      className={`form-status${submitted ? "" : " is-hidden"}`}
      data-form-status
      role="status"
    >
      {children}
    </p>
  );
}

function handleDemoSubmit(event, setSubmitted) {
  event.preventDefault();
  setSubmitted(true);
}

export function LoginPage() {
  const [role, setRole] = useState("learner");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const destination = dashboardRoutes[role];
    if (!destination) {
      throw new Error(`Unsupported demo role: ${role}`);
    }
    navigate(destination);
  }

  return (
    <AuthLayout>
      <main className="auth-shell">
        <section className="auth-card">
          <span className="eyebrow">Demo access</span>
          <h1>Welcome Back</h1>
          <p>Continue building your digital confidence.</p>
          <form className="auth-form" data-login-form onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="form-label" htmlFor="login-email">
                Email address
              </label>
              <input
                className="form-control"
                id="login-email"
                type="email"
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="login-password">
                Password
              </label>
              <input
                className="form-control"
                id="login-password"
                type="password"
                required
              />
            </div>
            <div className="check-row">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/pages/auth/forgot-password.html">
                Forgot password?
              </Link>
            </div>
            <div className="demo-note">
              <strong>Prototype demo:</strong> choose a role to preview its
              dashboard. This is not real authentication.
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="demo-role">
                Demo role
              </label>
              <select
                className="select-control"
                id="demo-role"
                data-demo-role
                value={role}
                onChange={(event) => setRole(event.target.value)}
              >
                <option value="learner">Learner</option>
                <option value="instructor">Instructor</option>
                <option value="organisation">Organisation Administrator</option>
                <option value="admin">Platform Administrator</option>
              </select>
            </div>
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </form>
          <p className="auth-footer">
            Don’t have an account?{" "}
            <Link to="/pages/auth/register.html">Join Us</Link>
          </p>
        </section>
        <aside className="auth-support">
          <span className="eyebrow">EdTech</span>
          <h2>Learn in a way that feels close to home.</h2>
          <p>Short lessons, practical activities and English and Luganda support.</p>
          <ul>
            <li>
              <i className="fas fa-check-circle" aria-hidden="true" /> Practical
              digital skills
            </li>
            <li>
              <i className="fas fa-check-circle" aria-hidden="true" /> Clear
              learning paths
            </li>
            <li>
              <i className="fas fa-check-circle" aria-hidden="true" /> Progress
              you can see
            </li>
          </ul>
        </aside>
      </main>
    </AuthLayout>
  );
}

export function RegisterPage() {
  const [learnerSubmitted, setLearnerSubmitted] = useState(false);
  const [organisationSubmitted, setOrganisationSubmitted] = useState(false);

  return (
    <AuthLayout>
      <main className="page-main">
        <div className="section-heading">
          <span className="eyebrow">Join EdTech</span>
          <h1>Choose your path</h1>
          <p>
            Start learning as an individual or tell us how your organisation
            would like to support learners.
          </p>
        </div>
        <div className="auth-options">
          <section className="card">
            <div className="icon-container icon-container-yellow">
              <i className="fas fa-user" aria-hidden="true" />
            </div>
            <h2>Learner registration</h2>
            <form
              data-demo-form
              onSubmit={(event) =>
                handleDemoSubmit(event, setLearnerSubmitted)
              }
            >
              <div className="form-field">
                <label className="form-label" htmlFor="learner-name">
                  Full name
                </label>
                <input className="form-control" id="learner-name" required />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="learner-email">
                  Email
                </label>
                <input
                  className="form-control"
                  id="learner-email"
                  type="email"
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="learner-password">
                  Password
                </label>
                <input
                  className="form-control"
                  id="learner-password"
                  type="password"
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="learner-confirm">
                  Confirm password
                </label>
                <input
                  className="form-control"
                  id="learner-confirm"
                  type="password"
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="learner-language">
                  Preferred language
                </label>
                <select className="select-control" id="learner-language">
                  <option>English</option>
                  <option>Luganda</option>
                </select>
              </div>
              <button className="btn btn-primary" type="submit">
                Create learner profile
              </button>
              <DemoFormStatus submitted={learnerSubmitted}>
                Demo registration saved locally. No account was created.
              </DemoFormStatus>
            </form>
          </section>
          <section className="card card-blue">
            <div className="icon-container icon-container-blue">
              <i className="fas fa-building" aria-hidden="true" />
            </div>
            <h2>Organisation enquiry</h2>
            <form
              data-demo-form
              onSubmit={(event) =>
                handleDemoSubmit(event, setOrganisationSubmitted)
              }
            >
              <div className="form-field">
                <label className="form-label" htmlFor="org-name">
                  Organisation name
                </label>
                <input className="form-control" id="org-name" required />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="contact-person">
                  Contact person
                </label>
                <input className="form-control" id="contact-person" required />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="org-email">
                  Email
                </label>
                <input
                  className="form-control"
                  id="org-email"
                  type="email"
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="org-type">
                  Organisation type
                </label>
                <select className="select-control" id="org-type">
                  <option>School</option>
                  <option>NGO</option>
                  <option>Training centre</option>
                </select>
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="org-learners">
                  Approximate learner population
                </label>
                <input
                  className="form-control"
                  id="org-learners"
                  type="number"
                  min="1"
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="org-message">
                  Message
                </label>
                <textarea className="form-control" id="org-message" />
              </div>
              <button className="btn btn-primary" type="submit">
                Send enquiry
              </button>
              <DemoFormStatus submitted={organisationSubmitted}>
                Demo enquiry saved locally. No real enquiry was sent.
              </DemoFormStatus>
            </form>
          </section>
        </div>
      </main>
    </AuthLayout>
  );
}

export function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <AuthLayout
      backTo="/pages/auth/login.html"
      backLabel="Back to login"
    >
      <main className="auth-shell">
        <section className="auth-card">
          <div className="icon-container icon-container-yellow">
            <i className="fas fa-lock" aria-hidden="true" />
          </div>
          <h1>Forgot your password?</h1>
          <p>
            Enter your email address and we’ll show a demo confirmation. No
            recovery email will be sent.
          </p>
          <form
            className="auth-form"
            data-demo-form
            onSubmit={(event) => handleDemoSubmit(event, setSubmitted)}
          >
            <div className="form-field">
              <label className="form-label" htmlFor="recovery-email">
                Email address
              </label>
              <input
                className="form-control"
                id="recovery-email"
                type="email"
                required
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Continue
            </button>
            <DemoFormStatus submitted={submitted}>
              Demo confirmation shown. No real recovery email was sent.
            </DemoFormStatus>
          </form>
          <p className="auth-footer">
            <Link to="/pages/auth/login.html">Return to login</Link>
          </p>
        </section>
      </main>
    </AuthLayout>
  );
}
