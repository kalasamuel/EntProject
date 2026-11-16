import { Link } from "react-router-dom";
import PageFontLoader from "../components/PageFontLoader.jsx";
import { AdminHeader } from "../components/SiteHeaders.jsx";
import adminStyles from "../styles/legacy/pages/admin.css?inline";

function AdminLayout({ currentPath, children }) {
  return (
    <>
      <style>{adminStyles}</style>
      <PageFontLoader includeCaveat={false} />
      <AdminHeader currentPath={currentPath} />
      {children}
    </>
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
    <AdminLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="admin-top">
          <div>
            <span className="eyebrow">Platform administration</span>
            <h1>
              Platform <span className="text-purple">Overview</span>
            </h1>
            <p>Sample data for the EdTech prototype.</p>
          </div>
          <div className="cluster">
            <Link className="btn btn-secondary" to="/pages/admin/translations.html">
              Review translations
            </Link>
            <Link className="btn btn-primary" to="/pages/admin/organisations.html">
              Add organisation
            </Link>
          </div>
        </div>

        <section className="summary-grid">
          <SummaryCard title="Sample organisations" value="12" tone="purple" />
          <SummaryCard title="Sample learners" value="1,248" tone="yellow" />
          <SummaryCard title="Published courses" value="6" tone="blue" />
          <SummaryCard title="Issued certificates" value="328" tone="orange" />
        </section>

        <section className="section">
          <div className="admin-grid">
            <article className="card admin-card card-yellow">
              <span className="eyebrow">Content overview</span>
              <h2>6 courses · 31 modules</h2>
              <p>128 lessons across English and Luganda content.</p>
              <Link className="btn btn-primary" to="/pages/admin/content-library.html">
                Manage content
              </Link>
            </article>

            <article className="card admin-card card-blue">
              <span className="eyebrow">Translation status</span>
              <h2>18 lessons pending review</h2>
              <p>Review language and educational quality before publishing.</p>
              <Link className="btn btn-primary" to="/pages/admin/translations.html">
                Review queue
              </Link>
            </article>

            <article className="card admin-card">
              <span className="eyebrow">Platform activity</span>
              <h2>Recent operations</h2>
              <p>3 organisations added · 12 lessons updated · 5 certificates verified.</p>
              <Link className="btn btn-secondary" to="/pages/admin/users.html">
                View users
              </Link>
            </article>
          </div>
        </section>

        <section className="section">
          <span className="eyebrow">Recent organisations</span>
          <h2>Register snapshot</h2>
          <div className="table-wrap">
            <table className="data-table admin-table">
              <thead>
                <tr>
                  <th>Organisation</th>
                  <th>Type</th>
                  <th>Learners</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Demo Learning Organisation</td>
                  <td>Training centre</td>
                  <td>86</td>
                  <td><span className="tag">Active</span></td>
                </tr>
                <tr>
                  <td>Sample Community School</td>
                  <td>School</td>
                  <td>42</td>
                  <td><span className="tag">Active</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </AdminLayout>
  );
}

export function OrganisationsPage({ currentPath }) {
  const rows = [
    { name: "Demo Learning Organisation", type: "Training centre", learners: 86, programmes: 3, status: "Active" },
    { name: "Sample Community School", type: "School", learners: 42, programmes: 2, status: "Active" },
    { name: "Demo Skills NGO", type: "NGO", learners: 28, programmes: 1, status: "Pending" },
  ];

  return (
    <AdminLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="admin-top">
          <div>
            <span className="eyebrow">Platform register</span>
            <h1>
              <span className="text-purple">Organisations</span>
            </h1>
            <p>Manage fictional organisation records for this prototype.</p>
          </div>
          <button className="btn btn-primary" type="button">
            Add organisation
          </button>
        </div>

        <div className="filter-row">
          <input className="search-control" type="search" placeholder="Search organisations" aria-label="Search organisations" />
          <select className="select-control" aria-label="Organisation type">
            <option>All types</option>
            <option>School</option>
            <option>NGO</option>
            <option>Training centre</option>
          </select>
          <select className="select-control" aria-label="Organisation status">
            <option>All status</option>
            <option>Active</option>
            <option>Pending</option>
          </select>
        </div>

        <div className="table-wrap">
          <table className="data-table admin-table">
            <thead>
              <tr>
                <th>Organisation</th>
                <th>Type</th>
                <th>Registered learners</th>
                <th>Programmes</th>
                <th>Status</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.name} data-admin-row>
                  <td>{row.name}</td>
                  <td>{row.type}</td>
                  <td>{row.learners}</td>
                  <td>{row.programmes}</td>
                  <td><span className="tag">{row.status}</span></td>
                  <td><button className="btn btn-secondary" type="button">View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </AdminLayout>
  );
}

export function UsersPage({ currentPath }) {
  return (
    <AdminLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="admin-top">
          <div>
            <span className="eyebrow">Platform access</span>
            <h1>
              User <span className="text-purple">Management</span>
            </h1>
            <p>Review roles and sample account status.</p>
          </div>
        </div>

        <div className="filter-row">
          <input className="search-control" type="search" placeholder="Search users" aria-label="Search users" />
          <select className="select-control" aria-label="Role">
            <option value="">All roles</option>
            <option value="learner">Learner</option>
            <option value="instructor">Instructor</option>
            <option value="admin">Administrator</option>
          </select>
        </div>

        <div className="table-wrap">
          <table className="data-table admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Organisation</th>
                <th>Status</th>
                <th>Registration date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Demo learner</td>
                <td>Learner</td>
                <td>Demo Learning Organisation</td>
                <td><span className="tag">Active</span></td>
                <td>10 Nov 2026</td>
              </tr>
              <tr>
                <td>Demo Teacher</td>
                <td>Instructor</td>
                <td>Demo Learning Organisation</td>
                <td><span className="tag">Active</span></td>
                <td>02 Nov 2026</td>
              </tr>
              <tr>
                <td>Demo Administrator</td>
                <td>Administrator</td>
                <td>EdTech platform</td>
                <td><span className="tag">Active</span></td>
                <td>01 Nov 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </AdminLayout>
  );
}

export function ContentLibraryPage({ currentPath }) {
  return (
    <AdminLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="admin-top">
          <div>
            <span className="eyebrow">Content management</span>
            <h1>
              Learning <span className="text-purple">Content</span>
            </h1>
            <p>Manage courses, modules and lessons before publishing.</p>
          </div>
          <Link className="btn btn-primary" to="/pages/admin/lesson-editor.html">
            Create course
          </Link>
        </div>

        <div className="admin-grid">
          <article className="card admin-card card-yellow">
            <span className="tag">Published</span>
            <h2>Digital Foundations</h2>
            <p>5 modules · 22 lessons · English + Luganda</p>
            <Link className="btn btn-secondary" to="/pages/admin/lesson-editor.html">
              Edit
            </Link>
          </article>

          <article className="card admin-card card-blue">
            <span className="tag">Published</span>
            <h2>Computer Basics</h2>
            <p>6 modules · 26 lessons · English + Luganda</p>
            <Link className="btn btn-secondary" to="/pages/admin/lesson-editor.html">
              Edit
            </Link>
          </article>

          <article className="card admin-card">
            <span className="tag">Draft</span>
            <h2>Digital Safety</h2>
            <p>4 modules · 16 lessons · English</p>
            <Link className="btn btn-secondary" to="/pages/admin/lesson-editor.html">
              Edit
            </Link>
          </article>
        </div>

        <section className="section">
          <div className="section-title">
            <span className="eyebrow">Module and lesson hierarchy</span>
            <h2>Digital Foundations</h2>
          </div>
          <div className="module-list">
            <details open>
              <summary>Module 1 · Introduction to Computers · 5 lessons</summary>
              <p>Introduction to Computers · Computer Components · Hardware and Software</p>
            </details>
            <details>
              <summary>Module 2 · Working with Files · 4 lessons</summary>
              <p>Folder structure and file organisation lessons.</p>
            </details>
            <details>
              <summary>Module 3 · Digital Communication · 5 lessons</summary>
              <p>Communication and information literacy lessons.</p>
            </details>
          </div>
        </section>
      </main>
    </AdminLayout>
  );
}

export function LessonEditorPage({ currentPath }) {
  return (
    <AdminLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="admin-top">
          <div>
            <span className="eyebrow">Content editor</span>
            <h1>
              Edit <span className="text-purple">Lesson</span>
            </h1>
            <p>Introduction to Computers · Draft content</p>
          </div>
          <div className="cluster">
            <button className="btn btn-secondary" type="button">Preview</button>
            <button className="btn btn-primary" type="button">Save draft</button>
          </div>
        </div>

        <div className="content-editor">
          <section className="card">
            <form className="editor-form">
              <div className="form-field">
                <label className="form-label" htmlFor="lesson-title">Lesson information</label>
                <input className="form-control" id="lesson-title" defaultValue="Introduction to Computers" />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="lesson-objective">Learning objective</label>
                <textarea className="form-control" id="lesson-objective">Identify what a computer is and describe one everyday use.</textarea>
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="lesson-english">English content</label>
                <textarea className="form-control" id="lesson-english">A computer is a tool that receives information, works with it and gives us a useful result.</textarea>
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="lesson-luganda">Luganda content</label>
                <textarea className="form-control" id="lesson-luganda" placeholder="Translation pending approval" />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="lesson-exercise">Exercise</label>
                <textarea className="form-control" id="lesson-exercise">Which part helps you type words?</textarea>
              </div>
              <div className="cluster">
                <button className="btn btn-primary" type="button">Save draft</button>
                <button className="btn btn-secondary" type="button">Submit for review</button>
              </div>
            </form>
          </section>

          <aside className="card card-blue">
            <span className="eyebrow">Content status</span>
            <div className="status-list">
              <div className="status-item">
                <span>Translation</span>
                <span className="tag">Pending</span>
              </div>
              <div className="status-item">
                <span>Educational review</span>
                <span className="tag">Draft</span>
              </div>
              <div className="status-item">
                <span>Content version</span>
                <strong>v0.3</strong>
              </div>
              <div className="status-item">
                <span>Publication</span>
                <span className="tag">Unpublished</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </AdminLayout>
  );
}

export function TranslationsPage({ currentPath }) {
  return (
    <AdminLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="admin-top">
          <div>
            <span className="eyebrow">Language quality</span>
            <h1>
              Translation <span className="text-purple">Management</span>
            </h1>
            <p>Review draft translations before they become available to learners.</p>
          </div>
        </div>

        <div className="filter-row">
          <select className="select-control" aria-label="Course">
            <option value="">All courses</option>
            <option value="Digital Foundations">Digital Foundations</option>
          </select>
          <select className="select-control" aria-label="Language">
            <option value="Luganda">Luganda</option>
            <option value="English">English</option>
          </select>
          <select className="select-control" aria-label="Review status">
            <option value="">All review statuses</option>
            <option value="Draft">Draft</option>
            <option value="Language Review">Language Review</option>
            <option value="Approved">Approved</option>
          </select>
        </div>

        <div className="table-wrap">
          <table className="data-table admin-table">
            <thead>
              <tr>
                <th>Lesson</th>
                <th>Language</th>
                <th>Status</th>
                <th>Language reviewer</th>
                <th>Educational reviewer</th>
                <th>Version</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Introduction to Computers</td>
                <td>Luganda</td>
                <td><span className="tag">Language Review</span></td>
                <td>Unassigned</td>
                <td>Pending</td>
                <td>v0.3</td>
                <td><a className="btn btn-secondary" href="#review">Open</a></td>
              </tr>
              <tr>
                <td>Computer Components</td>
                <td>Luganda</td>
                <td><span className="tag">Draft</span></td>
                <td>Unassigned</td>
                <td>Pending</td>
                <td>v0.1</td>
                <td><a className="btn btn-secondary" href="#review">Open</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <section className="section" id="review">
          <div className="section-title">
            <span className="eyebrow">Review panel</span>
            <h2>Introduction to Computers</h2>
          </div>
          <div className="review-columns">
            <div className="review-pane">
              <span className="eyebrow">English source</span>
              <p>A computer is a tool that receives information, works with it and gives us a useful result.</p>
            </div>
            <div className="review-pane card-blue">
              <span className="eyebrow">Luganda draft</span>
              <p>Translation content is pending language review. No unapproved translation is presented as final.</p>
            </div>
          </div>
          <div className="cluster" style={{ marginTop: "var(--space-4)" }}>
            <button className="btn btn-primary" type="button">Approve</button>
            <button className="btn btn-secondary" type="button">Request changes</button>
            <button className="btn btn-secondary" type="button">Save review</button>
          </div>
          <p role="status" style={{ marginTop: "var(--space-3)" }}>Review not yet submitted.</p>
        </section>
      </main>
    </AdminLayout>
  );
}

export function CertificatesPage({ currentPath }) {
  return (
    <AdminLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="admin-top">
          <div>
            <span className="eyebrow">Transparent records</span>
            <h1>
              Certificate <span className="text-purple">Registry</span>
            </h1>
            <p>Demo completion records; not a claim of national accreditation.</p>
          </div>
        </div>

        <div className="filter-row">
          <input className="search-control" type="search" placeholder="Search certificate ID or learner" aria-label="Search certificates" />
          <select className="select-control" aria-label="Certificate status">
            <option value="">All verification statuses</option>
            <option value="Verified">Verified</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <div className="table-wrap">
          <table className="data-table admin-table">
            <thead>
              <tr>
                <th>Certificate ID</th>
                <th>Learner</th>
                <th>Organisation</th>
                <th>Course</th>
                <th>Issue date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EDT-DEMO-001</td>
                <td>Demo learner</td>
                <td>Demo Learning Organisation</td>
                <td>Computer Basics</td>
                <td>14 Nov 2026</td>
                <td><span className="tag">Verified</span></td>
                <td><button className="btn btn-secondary" type="button">View</button></td>
              </tr>
              <tr>
                <td>EDT-DEMO-002</td>
                <td>Demo learner B.</td>
                <td>Sample Community School</td>
                <td>Digital Foundations</td>
                <td>12 Nov 2026</td>
                <td><span className="tag">Pending</span></td>
                <td><button className="btn btn-secondary" type="button">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </AdminLayout>
  );
}
