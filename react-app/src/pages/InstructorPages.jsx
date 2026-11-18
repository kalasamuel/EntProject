import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageFontLoader from "../components/PageFontLoader.jsx";
import { InstructorHeader } from "../components/SiteHeaders.jsx";
import { LocalizedContent } from "../context/LanguageContext.jsx";
import instructorStyles from "../styles/legacy/pages/instructor.css?inline";

function InstructorLayout({ currentPath, children }) {
  return (
    <LocalizedContent>
      <>
        <style>{instructorStyles}</style>
        <PageFontLoader
          includeCaveat={currentPath === "/pages/instructor/dashboard.html"}
        />
        <InstructorHeader currentPath={currentPath} />
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
    <InstructorLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="instructor-top">
          <div>
            <span className="eyebrow">Instructor space</span>
            <h1>
              Good Morning, <span className="text-purple">Teacher</span>
            </h1>
            <p>Here is a quick view of your teaching responsibilities.</p>
          </div>
          <Link className="btn btn-primary" to="/pages/instructor/classes.html">
            View my classes
          </Link>
        </div>

        <section className="summary-grid">
          <SummaryCard title="Classes assigned" value="4" tone="purple" />
          <SummaryCard title="Total learners" value="86" tone="yellow" />
          <SummaryCard title="Active assessments" value="12" tone="blue" />
          <SummaryCard title="Completed learners" value="24" tone="orange" />
        </section>

        <section className="section">
          <div className="section-title">
            <span className="eyebrow">Class overview</span>
            <h2>Your classes</h2>
          </div>
          <div className="instructor-grid">
            <article className="card class-card card-yellow">
              <span className="tag">Active</span>
              <h2>Kasubi Digital Starters</h2>
              <p>24 learners · Digital Foundations</p>
              <div className="progress">
                <div className="progress-value" style={{ width: "68%" }} />
              </div>
              <p>68% overall progress</p>
              <Link className="btn btn-primary" to="/pages/instructor/class-detail.html">
                View class
              </Link>
            </article>

            <article className="card class-card card-blue">
              <span className="tag">Active</span>
              <h2>Community Cohort A</h2>
              <p>31 learners · Computer Basics</p>
              <div className="progress">
                <div className="progress-value" style={{ width: "52%" }} />
              </div>
              <p>52% overall progress</p>
              <Link className="btn btn-primary" to="/pages/instructor/class-detail.html">
                View class
              </Link>
            </article>

            <article className="card class-card">
              <span className="tag">Upcoming</span>
              <h2>New Centre Intake</h2>
              <p>18 learners · Digital Safety</p>
              <div className="progress">
                <div className="progress-value" style={{ width: "0%" }} />
              </div>
              <p>Not started</p>
              <Link className="btn btn-secondary" to="/pages/instructor/class-detail.html">
                View class
              </Link>
            </article>
          </div>
        </section>

        <section className="section two-column">
          <div>
            <div className="section-title">
              <span className="eyebrow">Instructional attention</span>
              <h2>Learners to check in with</h2>
            </div>
            <div className="attention-list">
              <div className="attention-item">
                <span>
                  <strong>Alex N.</strong>
                  <br />
                  <small>Two lessons incomplete</small>
                </span>
                <Link className="btn btn-secondary" to="/pages/instructor/learner-detail.html">
                  View
                </Link>
              </div>
              <div className="attention-item">
                <span>
                  <strong>Demo learner B.</strong>
                  <br />
                  <small>Assessment attempts need review</small>
                </span>
                <Link className="btn btn-secondary" to="/pages/instructor/learner-detail.html">
                  View
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="section-title">
              <span className="eyebrow">Recent activity</span>
              <h2>What changed</h2>
            </div>
            <div className="activity-list">
              <div className="activity-item">
                <i className="fas fa-user-plus" aria-hidden="true" />
                <span>New enrolment in Community Cohort A</span>
              </div>
              <div className="activity-item">
                <i className="fas fa-check" aria-hidden="true" />
                <span>Assessment completed by Alex N.</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </InstructorLayout>
  );
}

export function ClassesPage({ currentPath }) {
  const [filter, setFilter] = useState("");

  const classes = useMemo(
    () => [
      { id: "active-1", status: "active", tone: "card-yellow", title: "Kasubi Digital Starters", meta: "Cohort 2026-A · 24 learners", course: "Digital Foundations", progress: 68, button: "btn btn-primary" },
      { id: "active-2", status: "active", tone: "card-blue", title: "Community Cohort A", meta: "Cohort 2026-B · 31 learners", course: "Computer Basics", progress: 52, button: "btn btn-primary" },
      { id: "completed-1", status: "completed", tone: "", title: "Library Skills Group", meta: "Cohort 2025-C · 13 learners", course: "Digital Foundations", progress: 100, button: "btn btn-secondary" },
      { id: "upcoming-1", status: "upcoming", tone: "card-yellow", title: "New Centre Intake", meta: "Cohort 2027-A · 18 learners", course: "Digital Safety", progress: 0, button: "btn btn-secondary" },
    ],
    [],
  );

  const visibleClasses = filter
    ? classes.filter((item) => item.status === filter)
    : classes;

  return (
    <InstructorLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="instructor-top">
          <div>
            <span className="eyebrow">Teaching groups</span>
            <h1>
              My <span className="text-purple">Classes</span>
            </h1>
            <p>See the cohorts and courses you are supporting.</p>
          </div>
          <select
            className="select-control"
            aria-label="Filter classes"
            data-class-filter
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          >
            <option value="">All classes</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>

        <div className="instructor-grid">
          {visibleClasses.map((item) => (
            <article
              key={item.id}
              className={`card class-card ${item.tone}`}
              data-class-card
              data-status={item.status}
            >
              <span className="tag">
                {item.status === "active"
                  ? "Active"
                  : item.status === "completed"
                    ? "Completed"
                    : "Upcoming"}
              </span>
              <h2>{item.title}</h2>
              <p>{item.meta}</p>
              <p>{item.course}</p>
              <div className="progress">
                <div className="progress-value" style={{ width: `${item.progress}%` }} />
              </div>
              <Link className={item.button} to="/pages/instructor/class-detail.html">
                View details
              </Link>
            </article>
          ))}
        </div>
      </main>
    </InstructorLayout>
  );
}

export function ClassDetailPage({ currentPath }) {
  const handleExport = () => {
    const csv = "Learner,Progress,Assessment\nDemo learner,64%,86%\n";
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "edtech-demo-report.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <InstructorLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="instructor-top">
          <div>
            <span className="eyebrow">Cohort 2026-A · 24 learners</span>
            <h1>
              Kasubi <span className="text-purple">Digital Starters</span>
            </h1>
            <p>Digital Foundations · Instructor view</p>
          </div>
          <div className="cluster">
            <button className="btn btn-secondary" type="button">
              Assign course
            </button>
            <Link className="btn btn-primary" to="/pages/instructor/reports.html">
              View report
            </Link>
          </div>
        </div>

        <section className="summary-grid">
          <SummaryCard title="Total learners" value="24" tone="purple" />
          <SummaryCard title="Active learners" value="19" tone="yellow" />
          <SummaryCard title="Course completion" value="68%" tone="blue" />
          <SummaryCard title="Assessment average" value="82%" tone="orange" />
        </section>

        <section className="section">
          <div className="table-wrap">
            <table className="data-table instructor-table">
              <caption className="sr-only">Learners in Kasubi Digital Starters</caption>
              <thead>
                <tr>
                  <th>Learner</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Assessment</th>
                  <th>Last activity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alex N.</td>
                  <td><span className="tag">Active</span></td>
                  <td>72%</td>
                  <td>86%</td>
                  <td>Today</td>
                  <td>
                    <Link className="btn btn-secondary" to="/pages/instructor/learner-detail.html">
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Demo learner B.</td>
                  <td><span className="tag">Active</span></td>
                  <td>48%</td>
                  <td>Needs review</td>
                  <td>3 days ago</td>
                  <td>
                    <Link className="btn btn-secondary" to="/pages/instructor/learner-detail.html">
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Demo learner C.</td>
                  <td><span className="tag">Active</span></td>
                  <td>84%</td>
                  <td>91%</td>
                  <td>Yesterday</td>
                  <td>
                    <Link className="btn btn-secondary" to="/pages/instructor/learner-detail.html">
                      View
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="section two-column">
          <div>
            <span className="eyebrow">Class activity</span>
            <h2>Recent updates</h2>
            <div className="activity-list">
              <div className="activity-item">
                <i className="fas fa-check" aria-hidden="true" />
                <span>Three learners completed Module 2</span>
              </div>
              <div className="activity-item">
                <i className="fas fa-clipboard-check" aria-hidden="true" />
                <span>Assessment review available</span>
              </div>
            </div>
          </div>

          <div className="card card-blue">
            <span className="eyebrow">Demo data</span>
            <h2>Export this class</h2>
            <p>Download a clearly labelled sample export for review.</p>
            <button className="btn btn-primary" type="button" onClick={handleExport}>
              Export demo data
            </button>
          </div>
        </section>
      </main>
    </InstructorLayout>
  );
}

export function LearnerDetailPage({ currentPath }) {
  return (
    <InstructorLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="instructor-top">
          <div>
            <span className="eyebrow">Instructional profile</span>
            <h1>
              <span className="text-purple">Alex N.</span>
            </h1>
            <p>Demo learner profile · Kasubi Digital Starters</p>
          </div>
          <Link className="btn btn-secondary" to="/pages/instructor/class-detail.html">
            Back to class
          </Link>
        </div>

        <section className="summary-grid">
          <SummaryCard title="Course progress" value="72%" tone="purple" />
          <SummaryCard title="Lessons complete" value="16/22" tone="yellow" />
          <SummaryCard title="Assessment average" value="86%" tone="blue" />
          <SummaryCard title="Last activity" value="Today" tone="orange" />
        </section>

        <section className="section two-column">
          <div className="card">
            <span className="eyebrow">Enrolled course</span>
            <h2>Digital Foundations</h2>
            <p>English + Luganda support</p>
            <div className="progress" style={{ margin: "var(--space-4) 0" }}>
              <div className="progress-value" style={{ width: "72%" }} />
            </div>
            <h3>Demonstrated competencies</h3>
            <div className="tag-row">
              <span className="tag">Computer basics</span>
              <span className="tag">File handling</span>
              <span className="tag">Online safety</span>
            </div>
          </div>

          <div>
            <span className="eyebrow">Learning activity</span>
            <h2>Recent activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <i className="fas fa-check" aria-hidden="true" />
                <span>Completed “Files and folders”</span>
              </div>
              <div className="activity-item">
                <i className="fas fa-star" aria-hidden="true" />
                <span>Scored 86% in checkpoint</span>
              </div>
              <div className="activity-item">
                <i className="fas fa-headphones" aria-hidden="true" />
                <span>Listened to lesson audio</span>
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <span className="eyebrow">Instructor notes</span>
          <h2>Teaching notes</h2>
          <p>Keep notes focused on learning support and classroom follow-up.</p>
          <textarea
            className="form-control notes-area"
            aria-label="Instructor notes"
            placeholder="Add a private instructional note for this demo learner"
          />
          <button className="btn btn-primary" type="button" style={{ marginTop: "var(--space-4)" }}>
            Save note
          </button>
        </section>
      </main>
    </InstructorLayout>
  );
}

export function ReportsPage({ currentPath }) {
  const handleExport = () => {
    const csv = "Learner,Progress,Assessment\nDemo learner,64%,86%\n";
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "edtech-demo-report.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <InstructorLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="instructor-top">
          <div>
            <span className="eyebrow">Instructor insights</span>
            <h1>
              Teaching <span className="text-purple">Reports</span>
            </h1>
            <p>Review participation and learning outcomes across your classes.</p>
          </div>
          <button className="btn btn-primary" type="button" onClick={handleExport}>
            Export demo CSV
          </button>
        </div>

        <div className="filter-row">
          <select className="select-control" aria-label="Class" defaultValue="all">
            <option value="all">All classes</option>
            <option>Kasubi Digital Starters</option>
            <option>Community Cohort A</option>
          </select>
          <select className="select-control" aria-label="Course" defaultValue="all">
            <option value="all">All courses</option>
            <option>Digital Foundations</option>
            <option>Computer Basics</option>
          </select>
          <select className="select-control" aria-label="Time period" defaultValue="this-term">
            <option value="this-term">This term</option>
            <option>Last 30 days</option>
          </select>
        </div>

        <section className="report-grid">
          <article className="card report-card card-yellow">
            <span className="eyebrow">Course completion</span>
            <h2>Progress by class</h2>
            <div className="metric-row">
              <span>Kasubi Digital Starters</span>
              <strong>68%</strong>
            </div>
            <div className="progress">
              <div className="progress-value" style={{ width: "68%" }} />
            </div>
            <div className="metric-row">
              <span>Community Cohort A</span>
              <strong>52%</strong>
            </div>
            <div className="progress">
              <div className="progress-value" style={{ width: "52%" }} />
            </div>
          </article>

          <article className="card report-card card-blue">
            <span className="eyebrow">Assessment performance</span>
            <h2>Average scores</h2>
            <div className="metric-row">
              <span>Foundations checkpoint</span>
              <strong>86%</strong>
            </div>
            <div className="progress">
              <div className="progress-value" style={{ width: "86%" }} />
            </div>
            <div className="metric-row">
              <span>Safety checkpoint</span>
              <strong>78%</strong>
            </div>
            <div className="progress">
              <div className="progress-value" style={{ width: "78%" }} />
            </div>
          </article>

          <article className="card report-card">
            <span className="eyebrow">Lesson completion</span>
            <h2>Lessons completed</h2>
            <div className="bars">
              <div className="bar" style={{ height: "45%" }} />
              <div className="bar" style={{ height: "70%" }} />
              <div className="bar" style={{ height: "55%" }} />
              <div className="bar" style={{ height: "82%" }} />
              <div className="bar" style={{ height: "65%" }} />
            </div>
          </article>

          <article className="card report-card card-blue">
            <span className="eyebrow">Participation</span>
            <h2>Recent activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <i className="fas fa-user-check" aria-hidden="true" />
                <span>19 learners active this week</span>
              </div>
              <div className="activity-item">
                <i className="fas fa-book-open" aria-hidden="true" />
                <span>42 lessons completed</span>
              </div>
            </div>
          </article>
        </section>
      </main>
    </InstructorLayout>
  );
}
