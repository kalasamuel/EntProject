import { useState } from "react";
import { Link } from "react-router-dom";
import PageFontLoader from "../components/PageFontLoader.jsx";
import { LearnerHeader } from "../components/SiteHeaders.jsx";
import learnerStyles from "../styles/legacy/pages/learner.css?inline";

function LearnerLayout({ currentPath, children }) {
  return (
    <>
      <style>{learnerStyles}</style>
      <PageFontLoader includeCaveat />
      <LearnerHeader currentPath={currentPath} />
      {children}
    </>
  );
}

function SummaryItem({ title, value, tone, icon }) {
  const toneClass = {
    purple: "summary-purple",
    yellow: "summary-yellow",
    orange: "summary-orange",
    blue: "summary-blue",
  }[tone];

  return (
    <article className={`summary-card ${toneClass}`}>
      <div className="learner-icon">
        <i className={`fas ${icon}`} aria-hidden="true" />
      </div>
      <p>{title}</p>
      <h2>{value}</h2>
    </article>
  );
}

export function DashboardPage({ currentPath }) {
  return (
    <LearnerLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="learner-top">
          <div>
            <span className="eyebrow">Learner space</span>
            <h1>
              Hello, <span className="text-purple">Sarah!</span>
            </h1>
            <p>Ready to continue your digital-skills journey?</p>
          </div>
        </div>

        <section className="summary-grid">
          <SummaryItem title="Courses in progress" value="2" tone="purple" icon="fa-book" />
          <SummaryItem title="Lessons completed" value="14" tone="yellow" icon="fa-list-check" />
          <SummaryItem title="Learning streak" value="6 days" tone="orange" icon="fa-fire" />
          <SummaryItem title="Certificates earned" value="1" tone="blue" icon="fa-certificate" />
        </section>

        <section className="section">
          <div className="continue-card">
            <div>
              <span className="eyebrow">Continue learning</span>
              <h2>Digital Foundations</h2>
              <p>Module 1 · Introduction to Computers</p>
              <div className="progress" aria-label="Course progress 64 percent">
                <div className="progress-value" style={{ width: "64%" }} />
              </div>
              <p>64% complete · 3 lessons remaining</p>
              <Link className="btn btn-primary" to="/pages/learner/lesson.html">
                Continue learning
              </Link>
            </div>
            <div className="continue-art" aria-hidden="true" />
          </div>
        </section>

        <section className="section">
          <div className="section-title">
            <span className="eyebrow">Recommended next</span>
            <h2>Lessons for you</h2>
          </div>
          <div className="learner-grid">
            <article className="card lesson-card card-blue">
              <div className="icon-container icon-container-blue">
                <i className="fas fa-keyboard" aria-hidden="true" />
              </div>
              <h3>Using the keyboard</h3>
              <p>Practise the keys you use every day.</p>
              <span className="tag">12 min</span>
              <Link className="btn btn-secondary" to="/pages/learner/lesson.html">
                Start lesson
              </Link>
            </article>

            <article className="card lesson-card card-yellow">
              <div className="icon-container icon-container-yellow">
                <i className="fas fa-folder" aria-hidden="true" />
              </div>
              <h3>Organising files</h3>
              <p>Keep your digital work easy to find.</p>
              <span className="tag">18 min</span>
              <Link className="btn btn-secondary" to="/pages/learner/lesson.html">
                Start lesson
              </Link>
            </article>

            <article className="card lesson-card">
              <div className="icon-container icon-container-blue">
                <i className="fas fa-shield-halved" aria-hidden="true" />
              </div>
              <h3>Protecting accounts</h3>
              <p>Learn a simple digital safety habit.</p>
              <span className="tag">15 min</span>
              <Link className="btn btn-secondary" to="/pages/learner/lesson.html">
                Start lesson
              </Link>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="section-title">
            <span className="eyebrow">Recent achievements</span>
            <h2>You are making progress</h2>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <i className="fas fa-circle-check" aria-hidden="true" />
              <span>Completed “Computer components”</span>
              <span className="tag">Today</span>
            </div>
            <div className="activity-item">
              <i className="fas fa-star" aria-hidden="true" />
              <span>Scored 86% in the Foundations check</span>
              <span className="tag">Yesterday</span>
            </div>
          </div>
        </section>
      </main>
    </LearnerLayout>
  );
}

export function MyLearningPage({ currentPath }) {
  const [activeTab, setActiveTab] = useState("progress");

  return (
    <LearnerLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="learner-top">
          <div>
            <span className="eyebrow">Your courses</span>
            <h1>
              My Learning <span className="text-purple">Journey</span>
            </h1>
            <p>Pick up where you left off and keep building useful skills.</p>
          </div>
        </div>

        <div className="tabs learner-tabs" role="tablist" aria-label="Learning tabs">
          {[
            ["progress", "In Progress"],
            ["completed", "Completed"],
            ["not-started", "Not Started"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              className="tab"
              data-tab={value}
              aria-selected={activeTab === value}
              onClick={() => setActiveTab(value)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="filter-row">
          <select className="select-control" defaultValue="all">
            <option value="all">All categories</option>
            <option value="foundations">Foundations</option>
            <option value="productivity">Productivity</option>
          </select>
          <select className="select-control" defaultValue="all">
            <option value="all">All languages</option>
            <option value="english">English</option>
            <option value="luganda">Luganda</option>
          </select>
        </div>

        <section data-tab-panel="progress" hidden={activeTab !== "progress"}>
          <div className="learner-grid">
            <article className="card course-progress-card card-yellow">
              <div className="icon-container icon-container-yellow">
                <i className="fas fa-laptop" aria-hidden="true" />
              </div>
              <h2>Digital Foundations</h2>
              <p>14 of 22 lessons completed · English + Luganda</p>
              <div className="progress">
                <div className="progress-value" style={{ width: "64%" }} />
              </div>
              <strong>64% complete</strong>
              <Link className="btn btn-primary" to="/pages/learner/lesson.html">
                Continue
              </Link>
            </article>

            <article className="card course-progress-card card-blue">
              <div className="icon-container icon-container-blue">
                <i className="fas fa-folder-open" aria-hidden="true" />
              </div>
              <h2>Files and Productivity</h2>
              <p>3 of 18 lessons completed · English + Luganda</p>
              <div className="progress">
                <div className="progress-value" style={{ width: "17%" }} />
              </div>
              <strong>17% complete</strong>
              <Link className="btn btn-primary" to="/pages/learner/lesson.html">
                Continue
              </Link>
            </article>
          </div>
        </section>

        <section data-tab-panel="completed" hidden={activeTab !== "completed"}>
          <div className="card">
            <h2>Computer Basics</h2>
            <p>Completed · Certificate available</p>
            <Link className="btn btn-primary" to="/pages/learner/certificates.html">
              View achievement
            </Link>
          </div>
        </section>

        <section data-tab-panel="not-started" hidden={activeTab !== "not-started"}>
          <div className="card card-blue">
            <h2>Choose another skill</h2>
            <p>Explore the catalogue to find your next practical course.</p>
            <Link className="btn btn-primary" to="/pages/public/courses.html">
              Explore courses
            </Link>
          </div>
        </section>
      </main>
    </LearnerLayout>
  );
}

export function LessonPage({ currentPath }) {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");

  const exerciseOptions = [
    { id: "keyboard", label: "Keyboard", correct: true },
    { id: "screen", label: "Screen", correct: false },
    { id: "speaker", label: "Speaker", correct: false },
  ];

  const handleSelect = (option) => {
    setSelected(option.id);
    setFeedback(
      option.correct
        ? "Correct. The keyboard is used to enter text and commands."
        : "Not quite. Try again: the keyboard is used to enter text and commands.",
    );
  };

  return (
    <LearnerLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="breadcrumb">
          <Link to="/pages/learner/my-learning.html">My Learning</Link>
          <span> / Digital Foundations / Introduction to Computers</span>
        </div>

        <div className="lesson-layout">
          <article className="card lesson-content">
            <span className="eyebrow">Lesson 1 of 5 · 20% complete</span>
            <h1>Introduction to Computers</h1>
            <div className="cluster">
              <span className="tag">English</span>
              <span className="tag">Luganda translation pending approval</span>
            </div>

            <h2>Today’s objective</h2>
            <div className="objective">
              <p>
                Identify what a computer is and describe one way it can help with
                everyday work.
              </p>
            </div>

            <h2>What is a computer?</h2>
            <p>
              A computer is a tool that receives information, works with it and
              gives us a useful result. We can use computers to write,
              communicate, learn and solve problems.
            </p>

            <div className="audio-player">
              <button className="icon-btn" type="button" aria-label="Play audio">
                <i className="fas fa-play" aria-hidden="true" />
              </button>
              <div className="progress">
                <div className="progress-value" style={{ width: "38%" }} />
              </div>
              <span>0:38 · English audio</span>
            </div>

            <h2>Technical vocabulary</h2>
            <p>
              <strong>Device</strong> — a piece of equipment used for a purpose.
              <strong> Input</strong> — information given to a computer.
            </p>

            <div className="exercise">
              <span className="eyebrow">Try it</span>
              <h2>Which part helps you type words?</h2>
              <div className="exercise-options">
                {exerciseOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`exercise-option${selected === option.id ? " selected" : ""}`}
                    data-exercise-option
                    data-correct={option.correct ? "true" : "false"}
                    onClick={() => handleSelect(option)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {feedback && (
                <p data-exercise-feedback>{feedback}</p>
              )}
            </div>

            <div className="lesson-actions">
              <Link className="btn btn-secondary" to="/pages/learner/my-learning.html">
                Previous lesson
              </Link>
              <Link className="btn btn-primary" to="/pages/learner/assessment.html">
                Complete and continue
              </Link>
            </div>
          </article>

          <aside className="card lesson-sidebar">
            <h2>Module progress</h2>
            <div className="progress">
              <div className="progress-value" style={{ width: "20%" }} />
            </div>
            <p>1 of 5 lessons</p>
            <h2>Lessons</h2>
            <div className="lesson-list">
              <Link to="/pages/learner/lesson.html" aria-current="page">
                ✓ Introduction to Computers
              </Link>
              <Link to="/pages/learner/lesson.html">Computer Components</Link>
              <Link to="/pages/learner/lesson.html">Hardware and Software</Link>
              <Link to="/pages/learner/lesson.html">Keyboard and Mouse</Link>
              <Link to="/pages/learner/lesson.html">Operating Systems</Link>
            </div>
          </aside>
        </div>
      </main>
    </LearnerLayout>
  );
}

export function AssessmentPage({ currentPath }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [feedback, setFeedback] = useState("");

  const questions = [
    {
      question: "Which is the strongest password?",
      options: [
        { id: "a", label: "password123", correct: false },
        { id: "b", label: "Mango!River7$Cloud", correct: true },
        { id: "c", label: "sarah2024", correct: false },
      ],
    },
    {
      question: "Which is a safe way to protect your account?",
      options: [
        { id: "a", label: "Use the same password everywhere", correct: false },
        { id: "b", label: "Share your password with a friend", correct: false },
        { id: "c", label: "Use a unique password and turn on 2-step verification", correct: true },
      ],
    },
  ];

  const currentQuestion = questions[questionIndex];

  const handleSelection = (option) => {
    setSelectedId(option.id);
    setFeedback(
      option.correct
        ? "Correct! A strong password is difficult to guess."
        : "Not quite. Use a unique, difficult-to-guess password.",
    );
  };

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((value) => value + 1);
      setSelectedId(null);
      setFeedback("");
      return;
    }

    setFeedback("Assessment complete. You are making strong progress.");
  };

  return (
    <LearnerLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="learner-top">
          <div>
            <span className="eyebrow">Digital Foundations · 1 of 5</span>
            <h1>
              Test What You’ve <span className="text-purple">Learned</span>
            </h1>
            <p>Choose the answer that best matches the lesson.</p>
          </div>
        </div>

        <section className="card assessment-card" data-assessment>
          <div className="question-meta">
            Question {questionIndex + 1} of {questions.length}
          </div>
          <h2>{currentQuestion.question}</h2>
          <div className="answer-list">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`answer-option${selectedId === option.id ? " selected" : ""}`}
                data-correct={option.correct ? "true" : "false"}
                onClick={() => handleSelection(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
          {feedback && <div className="feedback">{feedback}</div>}
          <div className="cluster" style={{ marginTop: "var(--space-5)" }}>
            <button className="btn btn-primary" type="button" onClick={handleNext}>
              {questionIndex < questions.length - 1 ? "Next question" : "Finish"}
            </button>
            <Link className="btn btn-secondary" to="/pages/learner/lesson.html">
              Back to lesson
            </Link>
          </div>
        </section>
      </main>
    </LearnerLayout>
  );
}

export function ProgressPage({ currentPath }) {
  return (
    <LearnerLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="learner-top">
          <div>
            <span className="eyebrow">Your journey</span>
            <h1>
              Your Learning <span className="text-purple">Progress</span>
            </h1>
            <p>See the small steps that are adding up.</p>
          </div>
        </div>

        <section className="summary-grid">
          <article className="summary-card summary-purple">
            <p>Overall completion</p>
            <h2>58%</h2>
          </article>
          <article className="summary-card summary-yellow">
            <p>Lessons completed</p>
            <h2>14</h2>
          </article>
          <article className="summary-card summary-blue">
            <p>Assessments passed</p>
            <h2>4</h2>
          </article>
          <article className="summary-card summary-orange">
            <p>Activity this week</p>
            <h2>3h</h2>
          </article>
        </section>

        <section className="section two-column">
          <div className="card">
            <div className="section-title">
              <span className="eyebrow">Course completion</span>
              <h2>Keep going</h2>
            </div>
            <div className="course-progress-card">
              <p>Digital Foundations</p>
              <div className="progress">
                <div className="progress-value" style={{ width: "64%" }} />
              </div>
              <p>64%</p>
              <p>Files and Productivity</p>
              <div className="progress">
                <div className="progress-value" style={{ width: "17%" }} />
              </div>
              <p>17%</p>
            </div>
          </div>

          <div className="card card-blue">
            <span className="eyebrow">Weekly activity</span>
            <h2>Learning hours</h2>
            <div className="bars">
              <div className="bar" style={{ height: "35%" }} />
              <div className="bar" style={{ height: "60%" }} />
              <div className="bar" style={{ height: "45%" }} />
              <div className="bar" style={{ height: "85%" }} />
              <div className="bar" style={{ height: "65%" }} />
              <div className="bar" style={{ height: "30%" }} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-title">
            <span className="eyebrow">Recent activity</span>
            <h2>What you’ve completed</h2>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <i className="fas fa-circle-check" aria-hidden="true" />
              <span>Introduction to Computers</span>
              <span className="tag">Lesson</span>
            </div>
            <div className="activity-item">
              <i className="fas fa-award" aria-hidden="true" />
              <span>Foundations checkpoint</span>
              <span className="tag">86%</span>
            </div>
          </div>
        </section>
      </main>
    </LearnerLayout>
  );
}

export function CertificatesPage({ currentPath }) {
  const [open, setOpen] = useState(false);

  return (
    <LearnerLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="learner-top">
          <div>
            <span className="eyebrow">Celebrate your progress</span>
            <h1>
              Your <span className="text-purple">Achievements</span>
            </h1>
            <p>Completion records for the skills you have practised.</p>
          </div>
        </div>

        <div className="certificate-grid">
          <article className="card certificate-card">
            <span className="eyebrow">Completion certificate</span>
            <h2>Computer Basics</h2>
            <p>Sarah · EdTech Learning Programme</p>
            <p>Issued 14 November 2026 · ID: SKL-DEMO-001</p>
            <span className="tag">Completed learning</span>
            <div className="certificate-actions">
              <button
                className="btn btn-primary"
                type="button"
                data-certificate-open
                onClick={() => setOpen(true)}
              >
                View certificate
              </button>
              <button className="btn btn-secondary" type="button">
                Download PDF
              </button>
              <button className="btn btn-secondary" type="button">
                Verify
              </button>
            </div>
          </article>
        </div>
      </main>

      <div
        className={`modal-backdrop${open ? "" : " is-hidden"}`}
        data-certificate-modal
        role="dialog"
        aria-modal="true"
      >
        <div className="modal certificate-modal">
          <button
            className="icon-btn modal-close"
            data-certificate-close
            type="button"
            aria-label="Close certificate"
            onClick={() => setOpen(false)}
          >
            <i className="fas fa-times" aria-hidden="true" />
          </button>
          <span className="eyebrow">EdTech</span>
          <h2>Certificate of Completion</h2>
          <p>This recognises that</p>
          <h3>Sarah</h3>
          <p>
            completed the <strong>Computer Basics</strong> learning programme.
          </p>
          <p>Issued by EdTech Learning Programme · 14 November 2026</p>
          <p>Certificate ID: SKL-DEMO-001</p>
          <div className="qr-box" aria-label="Demo verification graphic">
            QR
          </div>
          <small>Completion record only; not a claim of national accreditation.</small>
        </div>
      </div>
    </LearnerLayout>
  );
}

export function ProfilePage({ currentPath }) {
  return (
    <LearnerLayout currentPath={currentPath}>
      <main className="page-main">
        <div className="learner-top">
          <div>
            <span className="eyebrow">Account</span>
            <h1>
              Your <span className="text-purple">Profile</span>
            </h1>
            <p>Manage your learning preferences and personal information.</p>
          </div>
        </div>

        <div className="profile-grid">
          <section className="card">
            <div className="icon-container icon-container-yellow">
              <i className="fas fa-user" aria-hidden="true" />
            </div>
            <h2>Personal information</h2>
            <form className="stack" style={{ marginTop: "var(--space-5)" }}>
              <div className="form-field">
                <label className="form-label" htmlFor="profile-name">
                  Full name
                </label>
                <input className="form-control" id="profile-name" defaultValue="Sarah" />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="profile-email">
                  Email
                </label>
                <input
                  className="form-control"
                  id="profile-email"
                  defaultValue="sarah@example.test"
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="profile-language">
                  Preferred language
                </label>
                <select className="select-control" id="profile-language">
                  <option>English</option>
                  <option>Luganda</option>
                </select>
              </div>
              <button className="btn btn-primary" type="button">
                Save changes
              </button>
            </form>
          </section>

          <section className="card card-blue">
            <h2>Learning preferences</h2>
            <div className="preference-list" style={{ marginTop: "var(--space-5)" }}>
              <label className="switch-row">
                Audio explanations
                <input className="switch" type="checkbox" defaultChecked />
              </label>
              <label className="switch-row">
                Learning reminders
                <input className="switch" type="checkbox" defaultChecked />
              </label>
              <label className="switch-row">
                Download preferences
                <input className="switch" type="checkbox" />
              </label>
            </div>
            <h2 style={{ marginTop: "var(--space-6)" }}>Offline content</h2>
            <p>Digital Foundations · 320 MB available for demo download.</p>
          </section>

          <section className="card">
            <h2>Privacy and security</h2>
            <p>
              Review how your profile information is used and keep your account
              details up to date.
            </p>
            <Link className="btn btn-secondary" to="/pages/learner/profile.html">
              Read privacy information
            </Link>
          </section>
        </div>
      </main>
    </LearnerLayout>
  );
}
