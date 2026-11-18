import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageFontLoader from "../components/PageFontLoader.jsx";
import { OrganisationHeader } from "../components/SiteHeaders.jsx";
import { LocalizedContent } from "../context/LanguageContext.jsx";
import organisationStyles from "../styles/legacy/pages/organisation.css?inline";

function OrganisationLayout({ currentPath, children }) {
  return (
    <LocalizedContent>
      <>
        <style>{organisationStyles}</style>
        <PageFontLoader includeCaveat={false} />
        <OrganisationHeader currentPath={currentPath} />
        {children}
      </>
    </LocalizedContent>
  );
}

function SummaryCard({ title, value, tone }) {
  const toneClass = {
    purple: "summary-purple",
    yellow: "summary-yellow",
    blue: "summary-blue",
    orange: "summary-orange",
  }[tone];

  return (
    <article className={`summary-card ${toneClass}`}>
      <p>{title}</p>
      <h2>{value}</h2>
    </article>
  );
}

export function DashboardPage({ currentPath }) {
  return (
    <OrganisationLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="organisation-top">
          <div>
            <span className="eyebrow">Demo organisation · EdTech</span>
            <h1>
              Organisation <span className="text-purple">Overview</span>
            </h1>
            <p>See how your programmes and learners are progressing.</p>
          </div>
          <div className="cluster">
            <Link className="btn btn-secondary" to="/pages/organisation/learners.html">
              Add learners
            </Link>
            <Link className="btn btn-primary" to="/pages/organisation/programmes.html">
              Create programme
            </Link>
          </div>
        </div>

        <section className="summary-grid">
          <SummaryCard title="Total learners" value="86" tone="purple" />
          <SummaryCard title="Active programmes" value="3" tone="yellow" />
          <SummaryCard title="Cohorts" value="6" tone="blue" />
          <SummaryCard title="Completion rate" value="64%" tone="orange" />
        </section>

        <section className="section">
          <div className="section-title">
            <span className="eyebrow">Programme overview</span>
            <h2>Learning at a glance</h2>
          </div>
          <div className="organisation-grid">
            <article className="card programme-card card-yellow">
              <span className="tag">Active</span>
              <h2>Digital Foundations</h2>
              <p>42 learners · Jan 10 – Mar 28</p>
              <div className="progress">
                <div className="progress-value" style={{ width: "72%" }} />
              </div>
              <p>72% progress</p>
              <Link className="btn btn-primary" to="/pages/organisation/cohort-detail.html">
                View programme
              </Link>
            </article>

            <article className="card programme-card card-blue">
              <span className="tag">Active</span>
              <h2>Computer Basics</h2>
              <p>31 learners · Feb 02 – Apr 18</p>
              <div className="progress">
                <div className="progress-value" style={{ width: "48%" }} />
              </div>
              <p>48% progress</p>
              <Link className="btn btn-primary" to="/pages/organisation/cohort-detail.html">
                View programme
              </Link>
            </article>

            <article className="card programme-card">
              <span className="tag">Upcoming</span>
              <h2>Digital Safety</h2>
              <p>13 learners · May 05 – Jun 20</p>
              <div className="progress">
                <div className="progress-value" style={{ width: "0%" }} />
              </div>
              <p>Not started</p>
              <Link className="btn btn-secondary" to="/pages/organisation/programmes.html">
                View programme
              </Link>
            </article>
          </div>
        </section>

        <section className="section two-column">
          <div>
            <span className="eyebrow">Recent activity</span>
            <h2>What changed</h2>
            <div className="activity-list">
              <div className="activity-item">
                <i className="fas fa-user-plus" aria-hidden="true" />
                <span>8 learners enrolled this week</span>
              </div>
              <div className="activity-item">
                <i className="fas fa-certificate" aria-hidden="true" />
                <span>5 certificates issued</span>
              </div>
              <div className="activity-item">
                <i className="fas fa-chart-line" aria-hidden="true" />
                <span>Assessment activity increased</span>
              </div>
            </div>
          </div>

          <div className="card card-blue">
            <span className="eyebrow">Quick actions</span>
            <h2>Keep programmes moving</h2>
            <div className="cluster">
              <Link className="btn btn-primary" to="/pages/organisation/reports.html">
                View reports
              </Link>
              <Link className="btn btn-secondary" to="/pages/organisation/settings.html">
                Manage staff
              </Link>
            </div>
          </div>
        </section>
      </main>
    </OrganisationLayout>
  );
}

export function ProgrammesPage({ currentPath }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");

  const programmes = useMemo(
    () => [
      { id: "digital-foundations", status: "active", title: "Digital Foundations", course: "Digital Foundations", target: "New digital learners · 42 learners", progress: 72, weeks: "10 weeks", action: "btn btn-primary" },
      { id: "computer-basics", status: "active", title: "Computer Basics", course: "Computer Basics", target: "Community cohort · 31 learners", progress: 48, weeks: "8 weeks", action: "btn btn-primary" },
      { id: "digital-safety", status: "upcoming", title: "Digital Safety", course: "Digital Safety", target: "Returning learners · 13 learners", progress: 0, weeks: "6 weeks", action: "btn btn-secondary" },
    ],
    [],
  );

  const visibleProgrammes = programmes.filter((programme) => {
    const matchesQuery = `${programme.title} ${programme.course} ${programme.target}`
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesStatus = !status || programme.status === status;
    return matchesQuery && matchesStatus;
  });

  return (
    <OrganisationLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="organisation-top">
          <div>
            <span className="eyebrow">Organisation learning</span>
            <h1>
              Training <span className="text-purple">Programmes</span>
            </h1>
            <p>Organise courses around the learners and communities you support.</p>
          </div>
          <button className="btn btn-primary" type="button">
            Create programme
          </button>
        </div>

        <div className="filter-row">
          <input
            className="search-control"
            type="search"
            placeholder="Search programmes"
            aria-label="Search programmes"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <select
            className="select-control"
            aria-label="Programme status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="">All status</option>
            <option value="active">Active</option>
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="organisation-grid">
          {visibleProgrammes.map((programme) => (
            <article
              key={programme.id}
              className={`card programme-card ${programme.status === "active" ? "card-yellow" : programme.status === "upcoming" ? "" : "card-blue"}`}
              data-programme-card
              data-status={programme.status}
            >
              <span className="tag">
                {programme.status === "active" ? "Active" : programme.status === "upcoming" ? "Upcoming" : "Completed"}
              </span>
              <h2>{programme.title}</h2>
              <p>Course: {programme.course}</p>
              <p>Target: {programme.target}</p>
              <div className="progress">
                <div className="progress-value" style={{ width: `${programme.progress}%` }} />
              </div>
              <p>
                {programme.progress ? `${programme.progress}% progress` : "Not started"} · {programme.weeks}
              </p>
              <Link className={programme.action} to="/pages/organisation/cohort-detail.html">
                View programme
              </Link>
            </article>
          ))}
        </div>
      </main>
    </OrganisationLayout>
  );
}

export function CohortDetailPage({ currentPath }) {
  return (
    <OrganisationLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="organisation-top">
          <div>
            <span className="eyebrow">Cohort 2026-A · Digital Foundations</span>
            <h1>
              Kasubi <span className="text-purple">Starters</span>
            </h1>
            <p>Instructor: Demo Teacher · 42 learners · Jan 10 – Mar 28</p>
          </div>
          <div className="cluster">
            <button className="btn btn-secondary" type="button">
              Add learners
            </button>
            <Link className="btn btn-primary" to="/pages/organisation/reports.html">
              View report
            </Link>
          </div>
        </div>

        <section className="summary-grid">
          <SummaryCard title="Enrolled" value="42" tone="purple" />
          <SummaryCard title="Active" value="36" tone="yellow" />
          <SummaryCard title="Completed" value="18" tone="blue" />
          <SummaryCard title="Awaiting assessment" value="7" tone="orange" />
        </section>

        <section className="section">
          <div className="table-wrap">
            <table className="data-table organisation-table">
              <thead>
                <tr>
                  <th>Learner</th>
                  <th>Progress</th>
                  <th>Assessment</th>
                  <th>Certificate</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alex N.</td>
                  <td>72%</td>
                  <td>86%</td>
                  <td>Not yet issued</td>
                  <td>
                    <Link className="btn btn-secondary" to="/pages/organisation/learners.html">
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Demo learner B.</td>
                  <td>48%</td>
                  <td>Awaiting</td>
                  <td>Not eligible</td>
                  <td>
                    <Link className="btn btn-secondary" to="/pages/organisation/learners.html">
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Demo learner C.</td>
                  <td>100%</td>
                  <td>91%</td>
                  <td>Issued</td>
                  <td>
                    <Link className="btn btn-secondary" to="/pages/organisation/learners.html">
                      View
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="section card card-blue">
          <span className="eyebrow">Cohort activity</span>
          <h2>Recent updates</h2>
          <div className="activity-list">
            <div className="activity-item">
              <i className="fas fa-user-plus" aria-hidden="true" />
              <span>Two learners joined the cohort</span>
            </div>
            <div className="activity-item">
              <i className="fas fa-certificate" aria-hidden="true" />
              <span>One completion certificate issued</span>
            </div>
          </div>
        </section>
      </main>
    </OrganisationLayout>
  );
}

export function LearnersPage({ currentPath }) {
  return (
    <OrganisationLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="organisation-top">
          <div>
            <span className="eyebrow">Organisation roster</span>
            <h1>
              Manage <span className="text-purple">Learners</span>
            </h1>
            <p>Review learner progress within your organisation.</p>
          </div>
          <button className="btn btn-primary" type="button">
            Add learner
          </button>
        </div>

        <div className="filter-row">
          <input className="search-control" type="search" placeholder="Search learners" aria-label="Search learners" />
          <select className="select-control" aria-label="Cohort">
            <option>All cohorts</option>
            <option>Kasubi Starters</option>
            <option>Community Cohort A</option>
          </select>
          <select className="select-control" aria-label="Progress status">
            <option>All progress</option>
            <option>In progress</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="table-wrap">
          <table className="data-table organisation-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Identifier</th>
                <th>Cohort</th>
                <th>Course</th>
                <th>Progress</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alex N.</td>
                <td>ORG-DEMO-001</td>
                <td>Kasubi Starters</td>
                <td>Digital Foundations</td>
                <td>72%</td>
                <td><span className="tag">Active</span></td>
              </tr>
              <tr>
                <td>Demo learner B.</td>
                <td>ORG-DEMO-002</td>
                <td>Kasubi Starters</td>
                <td>Digital Foundations</td>
                <td>48%</td>
                <td><span className="tag">Needs support</span></td>
              </tr>
              <tr>
                <td>Demo learner C.</td>
                <td>ORG-DEMO-003</td>
                <td>Community Cohort A</td>
                <td>Computer Basics</td>
                <td>100%</td>
                <td><span className="tag">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </OrganisationLayout>
  );
}

export function ReportsPage({ currentPath }) {
  return (
    <OrganisationLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="organisation-top">
          <div>
            <span className="eyebrow">Organisation insights</span>
            <h1>
              Programme <span className="text-purple">Performance</span>
            </h1>
            <p>Understand enrolment, engagement and achievement across your programmes.</p>
          </div>
          <button className="btn btn-primary" type="button">
            Export report
          </button>
        </div>

        <div className="filter-row">
          <select className="select-control" aria-label="Date range" defaultValue="this-term">
            <option value="this-term">This term</option>
            <option>Last 30 days</option>
          </select>
          <select className="select-control" aria-label="Programme" defaultValue="all">
            <option value="all">All programmes</option>
            <option>Digital Foundations</option>
          </select>
          <select className="select-control" aria-label="Cohort" defaultValue="all">
            <option value="all">All cohorts</option>
            <option>Kasubi Starters</option>
          </select>
          <select className="select-control" aria-label="Location" defaultValue="all">
            <option value="all">All locations</option>
            <option>Demo location</option>
          </select>
        </div>

        <section className="report-grid">
          <article className="card report-card card-yellow">
            <span className="eyebrow">Enrolment</span>
            <h2>86 learners enrolled</h2>
            <p>Across 6 active and completed cohorts.</p>
            <div className="progress">
              <div className="progress-value" style={{ width: "76%" }} />
            </div>
          </article>

          <article className="card report-card card-blue">
            <span className="eyebrow">Course completion</span>
            <h2>64% completion</h2>
            <p>Completion is measured against enrolled programme learners.</p>
            <div className="progress">
              <div className="progress-value" style={{ width: "64%" }} />
            </div>
          </article>

          <article className="card report-card">
            <span className="eyebrow">Assessment outcomes</span>
            <h2>82% average</h2>
            <p>Assessment results across available checkpoints.</p>
            <div className="progress">
              <div className="progress-value" style={{ width: "82%" }} />
            </div>
          </article>

          <article className="card report-card card-blue">
            <span className="eyebrow">Certificate issuance</span>
            <h2>24 certificates</h2>
            <p>Completion records issued to eligible learners.</p>
            <div className="progress">
              <div className="progress-value" style={{ width: "52%" }} />
            </div>
          </article>
        </section>

        <section className="section">
          <div className="card">
            <span className="eyebrow">Competency progress</span>
            <h2>Skills learners are building</h2>
            <div className="activity-list">
              <div className="activity-item">
                <span>Computer fundamentals</span>
                <strong>78%</strong>
              </div>
              <div className="activity-item">
                <span>File and productivity skills</span>
                <strong>61%</strong>
              </div>
              <div className="activity-item">
                <span>Digital safety habits</span>
                <strong>49%</strong>
              </div>
            </div>
          </div>
        </section>
      </main>
    </OrganisationLayout>
  );
}

export function CertificatesPage({ currentPath }) {
  const handleExport = () => {
    const csv = "Learner,Programme,Certificate ID,Status\nDemo learner,Digital Foundations,SKL-DEMO-001,Issued\n";
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "edtech-certificate-register-demo.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <OrganisationLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="organisation-top">
          <div>
            <span className="eyebrow">Achievement records</span>
            <h1>
              Certificates and <span className="text-purple">Achievements</span>
            </h1>
            <p>Review completion records issued by your organisation.</p>
          </div>
          <button className="btn btn-primary" type="button" onClick={handleExport}>
            Export register
          </button>
        </div>

        <div className="filter-row">
          <input className="search-control" type="search" placeholder="Search certificates" aria-label="Search certificates" />
          <select className="select-control" aria-label="Programme" defaultValue="all">
            <option value="all">All programmes</option>
            <option>Digital Foundations</option>
          </select>
        </div>

        <div className="organisation-grid">
          <article className="card certificate-card">
            <span className="eyebrow">Issued</span>
            <h2>Computer Basics</h2>
            <p>Demo learner C. · SKL-DEMO-001</p>
            <p>Issued 14 November 2026</p>
            <div className="certificate-actions">
              <button className="btn btn-secondary" type="button">View certificate</button>
              <button className="btn btn-secondary" type="button">Verify</button>
            </div>
          </article>

          <article className="card certificate-card card-blue">
            <span className="eyebrow">Issued</span>
            <h2>Digital Foundations</h2>
            <p>Demo learner D. · SKL-DEMO-002</p>
            <p>Issued 12 November 2026</p>
            <div className="certificate-actions">
              <button className="btn btn-secondary" type="button">View certificate</button>
              <button className="btn btn-secondary" type="button">Verify</button>
            </div>
          </article>
        </div>
      </main>
    </OrganisationLayout>
  );
}

export function SettingsPage({ currentPath }) {
  return (
    <OrganisationLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="organisation-top">
          <div>
            <span className="eyebrow">Configuration</span>
            <h1>
              Organisation <span className="text-purple">Settings</span>
            </h1>
            <p>Manage profile, staff and programme preferences.</p>
          </div>
        </div>

        <div className="settings-grid">
          <section className="card settings-card">
            <h2>Organisation profile</h2>
            <div className="form-field">
              <label className="form-label" htmlFor="org-setting-name">Organisation name</label>
              <input className="form-control" id="org-setting-name" defaultValue="Demo Learning Organisation" />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="org-setting-description">Description</label>
              <textarea className="form-control" id="org-setting-description">A fictional organisation used for the EdTech prototype.</textarea>
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="org-setting-contact">Contact person</label>
              <input className="form-control" id="org-setting-contact" defaultValue="Demo Administrator" />
            </div>
            <button className="btn btn-primary" type="button">Save profile</button>
          </section>

          <section className="card settings-card card-blue">
            <h2>Staff and permissions</h2>
            <p>Manage administrators and instructors assigned to programmes.</p>
            <div className="activity-list">
              <div className="activity-item">
                <span>Demo Administrator</span>
                <span className="tag">Administrator</span>
              </div>
              <div className="activity-item">
                <span>Demo Teacher</span>
                <span className="tag">Instructor</span>
              </div>
            </div>
            <button className="btn btn-secondary" type="button">Manage staff</button>
          </section>

          <section className="card settings-card card-yellow">
            <h2>Programme preferences</h2>
            <div className="form-field">
              <label className="form-label" htmlFor="default-language">Default language</label>
              <select className="select-control" id="default-language" defaultValue="english-luganda">
                <option value="english-luganda">English and Luganda</option>
                <option value="english">English</option>
              </select>
            </div>
            <label className="switch-row">
              Weekly reporting summary
              <input className="switch" type="checkbox" defaultChecked />
            </label>
            <label className="switch-row">
              Include certificate issuer information
              <input className="switch" type="checkbox" defaultChecked />
            </label>
          </section>

          <section className="card settings-card">
            <h2>Privacy and account</h2>
            <p>Access is limited to this organisation’s demo records. Review account security and data-access information before using production systems.</p>
            <Link className="btn btn-secondary" to="/pages/organisation/dashboard.html">
              Read privacy information
            </Link>
          </section>
        </div>
      </main>
    </OrganisationLayout>
  );
}
