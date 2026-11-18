import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageFontLoader from "../components/PageFontLoader.jsx";
import { LandingHeader, PublicHeader } from "../components/SiteHeaders.jsx";
import { LocalizedContent } from "../context/LanguageContext.jsx";
import landingStyles from "../styles/legacy/pages/landing.css?inline";
import publicStyles from "../styles/legacy/pages/public.css?inline";

const courses = [
  {
    title: "Digital Foundations",
    description:
      "A friendly introduction to computers, devices and digital confidence.",
    meta: "5 lessons · 2 hours",
    category: "foundations",
    difficulty: "beginner",
    language: "bilingual",
    status: "available",
    tone: "yellow",
    iconTone: "yellow",
    icon: "fa-laptop",
    tags: ["Beginner", "EN + LG"],
  },
  {
    title: "Computer Basics",
    description:
      "Learn the parts of a computer and how to use keyboard and mouse.",
    meta: "6 lessons · 2.5 hours",
    category: "foundations",
    difficulty: "beginner",
    language: "bilingual",
    status: "available",
    tone: "blue",
    iconTone: "blue",
    icon: "fa-computer",
    tags: ["Beginner", "EN + LG"],
  },
  {
    title: "Files and Productivity",
    description: "Organise files, create documents and work more efficiently.",
    meta: "7 lessons · 3 hours",
    category: "productivity",
    difficulty: "beginner",
    language: "bilingual",
    status: "available",
    tone: "",
    iconTone: "yellow",
    icon: "fa-folder-open",
    tags: ["Beginner", "EN + LG"],
  },
  {
    title: "Internet and Communication",
    description:
      "Find information, communicate online and use the internet wisely.",
    meta: "6 lessons · 2.5 hours",
    category: "communication",
    difficulty: "beginner",
    language: "bilingual",
    status: "available",
    tone: "blue",
    iconTone: "blue",
    icon: "fa-globe",
    tags: ["Beginner", "EN + LG"],
  },
  {
    title: "Digital Safety",
    description:
      "Protect your accounts, information and identity in a connected world.",
    meta: "5 lessons · 2 hours",
    category: "safety",
    difficulty: "intermediate",
    language: "english",
    status: "available",
    tone: "yellow",
    iconTone: "yellow",
    icon: "fa-shield-halved",
    tags: ["Intermediate", "English"],
  },
  {
    title: "Digital Problem Solving",
    description:
      "Use digital tools to approach everyday challenges with confidence.",
    meta: "6 lessons · 2.5 hours",
    category: "productivity",
    difficulty: "intermediate",
    language: "bilingual",
    status: "available",
    tone: "blue",
    iconTone: "blue",
    icon: "fa-lightbulb",
    tags: ["Intermediate", "EN + LG"],
  },
];

const benefits = [
  {
    title: "Learner Management",
    description: "Keep learner records and progress organised in one place.",
    icon: "fa-user-group",
    tone: "yellow",
    cardTone: "yellow",
  },
  {
    title: "Instructor Tools",
    description:
      "Give instructors clear views of lessons, classes and support needs.",
    icon: "fa-chalkboard-user",
    tone: "blue",
    cardTone: "blue",
  },
  {
    title: "Cohort Management",
    description:
      "Set up programmes and follow groups through their learning journey.",
    icon: "fa-layer-group",
    tone: "yellow",
  },
  {
    title: "Learning Analytics",
    description: "Review participation, completion and assessment patterns.",
    icon: "fa-chart-line",
    tone: "blue",
    cardTone: "blue",
  },
  {
    title: "Practical Assessments",
    description: "Use short checks that connect learning to useful outcomes.",
    icon: "fa-clipboard-check",
    tone: "yellow",
    cardTone: "yellow",
  },
  {
    title: "Verifiable Certificates",
    description: "Recognise achievement with clear completion records.",
    icon: "fa-certificate",
    tone: "blue",
  },
];

const principles = [
  {
    title: "Accessibility",
    description: "Clear, welcoming learning for different starting points.",
    icon: "fa-universal-access",
    tone: "yellow",
    cardTone: "yellow",
  },
  {
    title: "Practical Learning",
    description: "Skills should connect to real tasks and real confidence.",
    icon: "fa-hands-holding-circle",
    tone: "blue",
    cardTone: "blue",
  },
  {
    title: "Local Languages",
    description: "Understanding grows when learning speaks your language.",
    icon: "fa-language",
    tone: "yellow",
  },
  {
    title: "Measurable Outcomes",
    description: "Progress should be visible to learners and their supporters.",
    icon: "fa-chart-simple",
    tone: "blue",
    cardTone: "blue",
  },
];

const modules = [
  [
    "01 · Introduction to Computers",
    "Meet the computer and understand what digital tools can help you do.",
  ],
  [
    "02 · Computer Components",
    "Explore the screen, keyboard, mouse and other important parts.",
  ],
  [
    "03 · Hardware and Software",
    "Learn the difference between physical equipment and programmes.",
  ],
  ["04 · Keyboard and Mouse", "Practise the actions used to control a computer."],
  ["05 · Operating Systems", "Navigate a desktop and find the tools you need."],
];

const workflow = [
  ["01", "Create a programme", "Choose skills and organise the learning plan."],
  ["02", "Enrol learners", "Bring a cohort together with simple enrolment."],
  ["03", "Deliver lessons", "Combine activities, lessons and assessments."],
  ["04", "Review results", "Use reports to understand progress and next steps."],
];

function ArrowRight() {
  return <i className="fas fa-arrow-right" aria-hidden="true" />;
}

function ArrowDown() {
  return <i className="fas fa-arrow-down" aria-hidden="true" />;
}

function LandingVideoModal({ open, onClose, returnFocusRef }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("modal-open");
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
      returnFocusRef.current?.focus();
    };
  }, [open, onClose, returnFocusRef]);

  if (!open) return null;

  return (
    <LocalizedContent>
      <div
        className="modal-backdrop"
        data-video-modal
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-title"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <div className="modal landing-modal">
          <button
            ref={closeRef}
            className="modal-close icon-btn"
            type="button"
            data-video-close
            aria-label="Close introduction"
            onClick={onClose}
          >
            <i className="fas fa-times" aria-hidden="true" />
          </button>
          <span className="eyebrow">Welcome to EdTech</span>
          <h2 id="video-title">Learning that speaks your language.</h2>
          <p>
            EdTech combines short lessons, practical activities and bilingual
            support so learners can build everyday digital confidence.
          </p>
          <Link className="btn btn-primary" to="/pages/public/courses.html">
            Explore courses
          </Link>
        </div>
      </div>
    </LocalizedContent>
  );
}

export function LandingPage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const videoButtonRef = useRef(null);
  const closeVideo = () => setVideoOpen(false);

  return (
    <LocalizedContent>
      <>
        <style>{landingStyles}</style>
        <PageFontLoader includeCaveat />
      <div className="dot-floating dot-purple" aria-hidden="true" />
      <div className="dot-floating dot-yellow" aria-hidden="true" />
      <div className="dot-floating dot-cyan" aria-hidden="true" />
      <LandingHeader currentPath="/" />
      <main>
        <section
          className="landing-hero page-main"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <h1 id="hero-title">
              Digital{" "}
              <span className="text-purple">
                <svg
                  className="star-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                    fill="currentColor"
                  />
                </svg>
                Skills
              </span>
              <br />
              Made <span className="text-orange">Local</span>
            </h1>
            <p className="subtitle">
              Learn practical digital skills through short, engaging lessons in
              Luganda and English. Build confidence with technology, wherever
              you are.
            </p>
            <div
              className="language-proof"
              aria-label="Available in English and Luganda"
            >
              <span className="language-dot">EN</span>
              <span className="language-dot language-dot-luganda">LG</span>
              <span>Learn in English or Luganda</span>
            </div>
            <div className="hero-actions cluster">
              <Link
                className="btn btn-primary hero-cta"
                to="/pages/public/courses.html"
              >
                Explore Courses <ArrowRight />
              </Link>
              <a className="text-link" href="#how-it-works">
                Discover how it works <ArrowRight />
              </a>
            </div>
            <div className="how-it-works-container" id="how-it-works">
              <div className="how-it-works-text">
                <span>How It Works!</span>
                <svg
                  className="scribble-arrow"
                  viewBox="0 0 100 30"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 15 Q 15 0, 30 15 T 60 15 T 85 15 L 95 10 M 85 10 L 95 10 L 90 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <button
                ref={videoButtonRef}
                className="video-thumbnail"
                type="button"
                data-video-open
                aria-label="Open a EdTech introduction"
                onClick={() => setVideoOpen(true)}
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=240&fit=crop"
                  alt="Teacher explaining a lesson"
                />
                <span className="play-btn">
                  <i className="fas fa-play" aria-hidden="true" />
                </span>
              </button>
            </div>
          </div>
          <div className="hero-collage" aria-label="Learners using digital skills">
            <div className="collage-col collage-col-one">
              <div className="shape semi-circle-orange-top" aria-hidden="true" />
              <div className="pill collage-image image-red-hoodie">
                <img
                  src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=300&h=600&fit=crop"
                  alt="Learner working at a computer"
                />
              </div>
              <div className="shape semi-circle-red-bottom" aria-hidden="true" />
            </div>
            <div className="collage-col collage-col-two">
              <div className="pill collage-image image-pink-top">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=500&fit=crop"
                  alt="Learner smiling"
                />
              </div>
              <div className="pill collage-image image-plaid-shirt">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=500&fit=crop"
                  alt="Learner portrait"
                />
              </div>
            </div>
            <div className="collage-col collage-col-three">
              <div className="pill collage-image image-orange-sweater">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=600&fit=crop"
                  alt="Learner studying"
                />
              </div>
              <div className="pill collage-image image-white-top">
                <img
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=300&h=400&fit=crop"
                  alt="Learner using a laptop"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="features section page-main"
          id="features"
          aria-labelledby="features-title"
        >
          <div className="features-intro">
            <h2 id="features-title">
              Practical Skills
              <br />
              For Your Future
            </h2>
            <svg
              className="scribble-arrow-large"
              viewBox="0 0 120 40"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 20 Q 25 5, 45 20 T 85 20 T 105 20 L 115 10 M 105 10 L 115 10 L 110 25"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <p>
              Interactive lessons and thoughtful language support come together
              to make digital learning clearer and more useful.
            </p>
          </div>
          <div className="features-right">
            <article className="feature-card card-yellow">
              <div
                className="card-shape shape-purple-corner"
                aria-hidden="true"
              />
              <div className="feature-icon icon-yellow">
                <i className="fas fa-book-open" aria-hidden="true" />
              </div>
              <h3>Practical Digital Learning</h3>
              <p>
                Short practical lessons, clear demonstrations and exercises
                designed to help learners develop usable skills.
              </p>
            </article>
            <article className="feature-card card-blue">
              <div
                className="card-shape shape-purple-flower"
                aria-hidden="true"
              >
                <svg viewBox="0 0 100 100">
                  <path
                    fill="#B29CFF"
                    d="M49.5,0 C54.5,18.5 69.5,23.5 88.5,15 C81.5,33.5 88.5,49.5 100,60 C80,62.5 70,76 65,95 C52,78 37,78 20,90 C26,72 16,56 0,48 C18,43 28,27 25,5 C39,18 52,18 49.5,0 Z"
                  />
                </svg>
              </div>
              <div className="feature-icon icon-blue">
                <i className="fas fa-chart-line" aria-hidden="true" />
              </div>
              <h3>Track Your Progress</h3>
              <p>
                Monitor completed lessons, assessments and learning
                achievements as your confidence grows.
              </p>
            </article>
          </div>
        </section>

        <section
          className="platform-overview section page-main"
          aria-labelledby="overview-title"
        >
          <div className="section-heading">
            <span className="eyebrow">Learning that meets you where you are</span>
            <h2 id="overview-title">
              A simple path from curiosity to confidence
            </h2>
          </div>
          <div className="overview-grid">
            <article className="overview-step">
              <span className="step-number">01</span>
              <h3>Choose a skill</h3>
              <p>Start with foundations that match your goals and experience.</p>
            </article>
            <article className="overview-step overview-step-blue">
              <span className="step-number">02</span>
              <h3>Learn in your language</h3>
              <p>Follow concise lessons with English and Luganda support.</p>
            </article>
            <article className="overview-step overview-step-purple">
              <span className="step-number">03</span>
              <h3>Practise and progress</h3>
              <p>
                Try activities, complete assessments and celebrate milestones.
              </p>
            </article>
          </div>
        </section>

        <section
          className="language-banner section page-main"
          aria-labelledby="language-title"
        >
          <div>
            <span className="eyebrow">Local language learning</span>
            <h2 id="language-title">
              Understand the concept.
              <br />
              <span className="text-purple">Use the skill.</span>
            </h2>
          </div>
          <p>
            Luganda explanations make new ideas approachable while English
            technical terms remain visible, helping learners build confidence
            for everyday digital life.
          </p>
          <Link className="btn btn-primary" to="/pages/public/about.html">
            Learn about our approach <ArrowRight />
          </Link>
        </section>

        <section
          className="institutional-cta section page-main"
          aria-labelledby="institution-title"
        >
          <div>
            <span className="eyebrow">For schools and organisations</span>
            <h2 id="institution-title">
              Bring practical digital skills to your learners.
            </h2>
            <p>
              Support cohorts with structured programmes, engaging lessons and
              progress insights.
            </p>
          </div>
          <Link
            className="btn btn-secondary"
            to="/pages/public/organisations.html"
          >
            Explore for organisations <ArrowRight />
          </Link>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <Link className="logo" to="/">
            EdTech
          </Link>
          <p>Digital skills made local.</p>
          <div className="footer-links">
            <Link to="/pages/public/courses.html">Courses</Link>
            <Link to="/pages/public/organisations.html">Organisations</Link>
            <Link to="/pages/public/contact.html">Contact</Link>
          </div>
        </div>
      </footer>
        <LandingVideoModal
          open={videoOpen}
          onClose={closeVideo}
          returnFocusRef={videoButtonRef}
        />
      </>
    </LocalizedContent>
  );
}

function SectionHeading({ eyebrow, children, id }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{children}</h2>
    </div>
  );
}

function PublicLayout({ currentPath, children }) {
  return (
    <LocalizedContent>
      <>
        <style>{publicStyles}</style>
        <PageFontLoader includeCaveat />
        <PublicHeader currentPath={currentPath} />
        <main className="page-main">{children}</main>
      </>
    </LocalizedContent>
  );
}

function PublicHero({ children, visual, className = "" }) {
  return (
    <section className={`public-hero${className ? ` ${className}` : ""}`}>
      {children}
      {visual}
    </section>
  );
}

function DecorativeVisual({ tone = "", icon, title, children }) {
  return (
    <div className={`public-visual${tone ? ` public-visual-${tone}` : ""}`}>
      <div className="visual-orb" />
      <div className="visual-icon">
        <i className={`fas ${icon}`} aria-hidden="true" />
      </div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

function BenefitCard({ item, cardClass = "" }) {
  return (
    <article
      className={[
        "card",
        "benefit-card",
        item.cardTone && `card-${item.cardTone}`,
        cardClass,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={`icon-container icon-container-${item.tone}`}>
        <i className={`fas ${item.icon}`} aria-hidden="true" />
      </div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </article>
  );
}

export function CoursesPage({ currentPath }) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    difficulty: "",
    language: "",
    status: "",
  });

  const filteredCourses = courses.filter((course) => {
    const matchesQuery = `${course.title} ${course.description} ${course.meta} ${course.tags.join(" ")}`
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    const matchesFilters = Object.entries(filters).every(
      ([key, value]) => !value || course[key] === value,
    );

    return matchesQuery && matchesFilters;
  });

  function updateFilter(event) {
    const { name, value } = event.target;
    setFilters((current) => ({ ...current, [name]: value }));
  }

  function clearFilters() {
    setQuery("");
    setFilters({
      category: "",
      difficulty: "",
      language: "",
      status: "",
    });
  }

  return (
    <PublicLayout currentPath={currentPath}>
      <div className="breadcrumb">
        <Link to="/">Home</Link> / Courses
      </div>
      <PublicHero
        visual={
          <DecorativeVisual
            tone="blue"
            icon="fa-book-open"
            title={
              <>
                Small lessons.
                <br />
                Useful skills.
              </>
            }
          >
            Start where you are and keep moving forward.
          </DecorativeVisual>
        }
      >
        <div>
          <h1>
            Explore Your
            <br />
            <span className="text-purple">Learning Path</span>
          </h1>
          <p className="lead">
            Build practical digital confidence through short lessons designed
            for everyday life, in English and Luganda.
          </p>
          <a className="btn btn-primary" href="#course-grid">
            Browse courses <ArrowDown />
          </a>
        </div>
      </PublicHero>

      <section aria-label="Course search and filters">
        <div className="filter-bar">
          <input
            className="search-control"
            type="search"
            placeholder="Search courses"
            aria-label="Search courses"
            data-course-search
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <select
            className="filter-select"
            name="category"
            aria-label="Category"
            data-course-filter="category"
            value={filters.category}
            onChange={updateFilter}
          >
            <option value="">All categories</option>
            <option value="foundations">Foundations</option>
            <option value="productivity">Productivity</option>
            <option value="communication">Communication</option>
            <option value="safety">Safety</option>
          </select>
          <select
            className="filter-select"
            name="difficulty"
            aria-label="Difficulty"
            data-course-filter="difficulty"
            value={filters.difficulty}
            onChange={updateFilter}
          >
            <option value="">All levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
          </select>
          <select
            className="filter-select"
            name="language"
            aria-label="Language"
            data-course-filter="language"
            value={filters.language}
            onChange={updateFilter}
          >
            <option value="">All languages</option>
            <option value="bilingual">English + Luganda</option>
            <option value="english">English</option>
          </select>
          <select
            className="filter-select"
            name="status"
            aria-label="Status"
            data-course-filter="status"
            value={filters.status}
            onChange={updateFilter}
          >
            <option value="">All status</option>
            <option value="available">Available</option>
          </select>
        </div>
        <button
          className="btn btn-secondary"
          type="button"
          data-clear-filters
          onClick={clearFilters}
        >
          Clear filters
        </button>
      </section>

      <section
        className="section"
        id="course-grid"
        aria-labelledby="course-title"
      >
        <SectionHeading eyebrow="Catalogue" id="course-title">
          Choose your next skill
        </SectionHeading>
        <div className="course-grid">
          {filteredCourses.map((course) => (
            <article
              key={course.title}
              className={[
                "card",
                "course-card",
                course.tone && `card-${course.tone}`,
              ]
                .filter(Boolean)
                .join(" ")}
              data-course-card
              data-category={course.category}
              data-difficulty={course.difficulty}
              data-language={course.language}
              data-status={course.status}
            >
              <div className={`icon-container icon-container-${course.iconTone}`}>
                <i className={`fas ${course.icon}`} aria-hidden="true" />
              </div>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <div className="course-meta">{course.meta}</div>
              <div className="tag-row">
                {course.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                className="btn btn-primary"
                to="/pages/public/course-detail.html"
              >
                View course
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}

export function CourseDetailPage({ currentPath }) {
  return (
    <PublicLayout currentPath={currentPath}>
      <div className="breadcrumb">
        <Link to="/">Home</Link> /{" "}
        <Link to="/pages/public/courses.html">Courses</Link> / Digital
        Foundations
      </div>
      <PublicHero
        visual={
          <DecorativeVisual
            icon="fa-laptop"
            title="Learn by doing"
          >
            Short explanations, practical activities and supportive language
            guidance.
          </DecorativeVisual>
        }
      >
        <div>
          <span className="eyebrow">Course 01 · Beginner</span>
          <h1>
            Digital <span className="text-purple">Foundations</span>
          </h1>
          <p className="lead">
            Build a confident starting point for using computers, devices and
            digital tools in everyday life.
          </p>
          <div className="tag-row">
            <span className="tag">English</span>
            <span className="tag">Luganda</span>
            <span className="tag">5 modules</span>
            <span className="tag">2 hours</span>
          </div>
          <Link className="btn btn-primary" to="/pages/auth/login.html">
            Start learning <ArrowRight />
          </Link>
        </div>
      </PublicHero>

      <section className="section" aria-labelledby="outcomes-title">
        <SectionHeading eyebrow="Course outcomes" id="outcomes-title">
          What You Will Learn
        </SectionHeading>
        <div className="principles-grid">
          <BenefitCard
            item={{
              title: "Use a computer",
              description:
                "Identify key parts and interact with a device confidently.",
              icon: "fa-power-off",
              tone: "yellow",
            }}
          />
          <BenefitCard
            item={{
              title: "Control the basics",
              description:
                "Practise keyboard, mouse and simple operating system actions.",
              icon: "fa-keyboard",
              tone: "blue",
            }}
          />
          <BenefitCard
            item={{
              title: "Work with files",
              description:
                "Understand how information is stored and organised.",
              icon: "fa-file",
              tone: "yellow",
            }}
          />
          <BenefitCard
            item={{
              title: "Build confidence",
              description:
                "Use new vocabulary and skills in practical situations.",
              icon: "fa-circle-check",
              tone: "blue",
            }}
          />
        </div>
      </section>

      <section className="section" aria-labelledby="modules-title">
        <SectionHeading eyebrow="Course structure" id="modules-title">
          Five practical modules
        </SectionHeading>
        <div className="module-list">
          {modules.map(([title, description], index) => (
            <details key={title} open={index === 0}>
              <summary>{title}</summary>
              <p>{description}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="language-banner section">
        <div>
          <span className="eyebrow">Language support</span>
          <h2>
            English and <span className="text-purple">Luganda</span>
          </h2>
        </div>
        <p>
          Core explanations and key vocabulary are available in both languages.
          English technical terms remain visible to support progression.
        </p>
        <Link className="btn btn-primary" to="/pages/auth/register.html">
          Start learning
        </Link>
      </section>
    </PublicLayout>
  );
}

export function OrganisationsPage({ currentPath }) {
  const segments = [
    ["Schools", "Build digital confidence into learner programmes.", "yellow"],
    ["NGOs", "Support community learning with local-language resources.", "blue"],
    [
      "Training Centres",
      "Coordinate practical digital-skills cohorts and instructors.",
      "",
    ],
  ];

  return (
    <PublicLayout currentPath={currentPath}>
      <PublicHero
        visual={
          <DecorativeVisual
            tone="blue"
            icon="fa-users"
            title={
              <>
                One platform.
                <br />
                Many pathways.
              </>
            }
          >
            Support learners and instructors from enrolment to achievement.
          </DecorativeVisual>
        }
      >
        <div>
          <span className="eyebrow">
            For schools, NGOs and training centres
          </span>
          <h1>
            Train Learners.
            <br />
            <span className="text-purple">Measure Results.</span>
          </h1>
          <p className="lead">
            Deliver multilingual digital-skills programmes, manage cohorts and
            understand learning outcomes with a platform designed for practical
            progress.
          </p>
          <div className="cluster">
            <Link className="btn btn-primary" to="/pages/auth/register.html">
              Request a demo
            </Link>
            <a className="btn btn-secondary" href="#benefits">
              Explore features
            </a>
          </div>
        </div>
      </PublicHero>
      <section className="section" id="benefits">
        <SectionHeading eyebrow="Platform benefits">
          Tools for meaningful learning
        </SectionHeading>
        <div className="benefit-grid">
          {benefits.map((item) => (
            <BenefitCard item={item} key={item.title} />
          ))}
        </div>
      </section>
      <section className="section">
        <SectionHeading eyebrow="A clear workflow">
          From programme to progress
        </SectionHeading>
        <div className="workflow">
          {workflow.map(([number, title, description]) => (
            <article className="workflow-step" key={number}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <SectionHeading eyebrow="Designed for your context">
          Who can use EdTech?
        </SectionHeading>
        <div className="segment-grid">
          {segments.map(([title, description, tone]) => (
            <article
              className={`card segment-card${tone ? ` card-${tone}` : ""}`}
              key={title}
            >
              <h2>{title}</h2>
              <p>{description}</p>
              <Link className="btn btn-secondary" to="/pages/auth/register.html">
                Talk to us
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="language-banner section">
        <div>
          <span className="eyebrow">Ready to begin?</span>
          <h2>Bring Digital Skills to Your Learners</h2>
        </div>
        <p>Tell us about your organisation and the learners you support.</p>
        <Link className="btn btn-primary" to="/pages/auth/register.html">
          Request demo
        </Link>
      </section>
    </PublicLayout>
  );
}

export function AboutPage({ currentPath }) {
  return (
    <PublicLayout currentPath={currentPath}>
      <PublicHero
        visual={
          <div className="mission-visual">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=700&h=700&fit=crop"
              alt="Learners working together"
            />
          </div>
        }
      >
        <div>
          <span className="eyebrow">Our purpose</span>
          <h1>
            Technology.
            <br />
            <span className="text-purple">Learning.</span>
            <br />
            <span className="text-orange">Opportunity.</span>
          </h1>
          <p className="lead">
            EdTech helps people build practical digital confidence through
            short lessons and local-language support.
          </p>
          <Link className="btn btn-primary" to="/pages/public/courses.html">
            Explore courses
          </Link>
        </div>
      </PublicHero>
      <section className="section two-column">
        <div>
          <span className="eyebrow">Our mission</span>
          <h2>Make digital learning feel possible.</h2>
          <p>
            New technology can feel difficult when the language, pace or
            examples do not reflect everyday life. We design learning that is
            practical, welcoming and connected to the goals of learners,
            schools and organisations.
          </p>
        </div>
        <div className="card card-yellow">
          <h2>Local language, global possibility</h2>
          <p>
            Luganda helps learners understand new ideas while English technical
            terms remain visible and useful for continued learning.
          </p>
        </div>
      </section>
      <section className="section">
        <SectionHeading eyebrow="What guides us">Platform principles</SectionHeading>
        <div className="principles-grid">
          {principles.map((item) => (
            <BenefitCard
              item={{ ...item, cardTone: item.cardTone }}
              key={item.title}
              cardClass="principle-card"
            />
          ))}
        </div>
      </section>
      <section className="language-banner section">
        <div>
          <span className="eyebrow">Our language philosophy</span>
          <h2>
            Understand first.
            <br />
            <span className="text-purple">Apply next.</span>
          </h2>
        </div>
        <p>
          Luganda explanations make concepts approachable, while English
          terminology stays present so learners can recognise and use digital
          vocabulary in wider contexts.
        </p>
        <Link className="btn btn-primary" to="/pages/public/courses.html">
          Find a course
        </Link>
      </section>
    </PublicLayout>
  );
}

export function ContactPage({ currentPath }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <PublicLayout currentPath={currentPath}>
      <PublicHero
        visual={
          <div className="card">
            <form
              className="contact-form"
              data-demo-form
              onSubmit={handleSubmit}
            >
              <div className="form-field">
                <label className="form-label" htmlFor="contact-name">
                  Full name
                </label>
                <input className="form-control" id="contact-name" required />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="contact-email">
                  Email
                </label>
                <input
                  className="form-control"
                  id="contact-email"
                  type="email"
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="contact-org">
                  Organisation
                </label>
                <input className="form-control" id="contact-org" />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="contact-type">
                  Enquiry type
                </label>
                <select className="select-control" id="contact-type">
                  <option>Learning support</option>
                  <option>Organisation demo</option>
                  <option>Partnership enquiry</option>
                </select>
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="contact-message"
                  required
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Send message
              </button>
              <p
                className={`form-status${submitted ? "" : " is-hidden"}`}
                data-form-status
                role="status"
                aria-live="polite"
              >
                Demo submission recorded locally. No real message was sent.
              </p>
            </form>
          </div>
        }
      >
        <div>
          <span className="eyebrow">Get in touch</span>
          <h1>
            Let’s start a <span className="text-purple">conversation.</span>
          </h1>
          <p className="lead">
            Have a question about learning, programmes or bringing EdTech to
            your organisation? Send a demo enquiry using the form.
          </p>
          <div className="card card-yellow">
            <h2>General enquiries</h2>
            <p>
              Use the form to share your question. This prototype does not
              publish an email address or claim to send real messages.
            </p>
          </div>
        </div>
      </PublicHero>
    </PublicLayout>
  );
}
