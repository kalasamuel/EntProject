import { useEffect, useState } from "react";
import PageFontLoader from "./components/PageFontLoader.jsx";
import {
  AdminHeader,
  AuthHeader,
  InstructorHeader,
  LandingHeader,
  LearnerHeader,
  OrganisationHeader,
  PublicHeader,
} from "./components/SiteHeaders.jsx";
import {
  Badge,
  Button,
  Card,
  DataTable,
  DecorativeGraphics,
  FormField,
  IconContainer,
  Modal,
  ProgressBar,
  SearchControl,
  SelectField,
  SummaryCard,
  Tabs,
  Tag,
} from "./components/SharedComponents.jsx";

const pageVariants = [
  {
    match: (path) => path === "/" || path === "/index.html",
    kind: "landing",
    bodyClass: "landing-page",
    title: "EdTech - Digital Skills in Local Languages",
    heading: "Digital Skills Made Local",
    caveat: true,
  },
  {
    match: (path) => path.startsWith("/pages/public/"),
    kind: "public",
    bodyClass: "public-page",
    title: "Courses - EdTech",
    heading: "Explore Your Learning Path",
    caveat: true,
  },
  {
    match: (path) => path.startsWith("/pages/auth/"),
    kind: "auth",
    bodyClass: "auth-page",
    title: "Login - EdTech",
    heading: "Welcome Back",
    caveat: true,
  },
  {
    match: (path) => path.startsWith("/pages/learner/"),
    kind: "learner",
    bodyClass: "learner-page",
    title: "Learner Dashboard - EdTech",
    heading: "Your learning journey",
    caveat: true,
  },
  {
    match: (path) => path.startsWith("/pages/instructor/"),
    kind: "instructor",
    bodyClass: "instructor-page",
    title: "Instructor Dashboard - EdTech",
    heading: "Your teaching space",
    caveat: false,
  },
  {
    match: (path) => path.startsWith("/pages/organisation/"),
    kind: "organisation",
    bodyClass: "organisation-page",
    title: "Organisation Overview - EdTech",
    heading: "Programme overview",
    caveat: false,
  },
  {
    match: (path) => path.startsWith("/pages/admin/"),
    kind: "admin",
    bodyClass: "admin-page",
    title: "Platform Overview - EdTech",
    heading: "Platform overview",
    caveat: false,
  },
];

export function getPageVariant(path) {
  return pageVariants.find((variant) => variant.match(path)) ?? pageVariants[0];
}

function CurrentHeader({ kind, currentPath }) {
  switch (kind) {
    case "landing":
      return <LandingHeader currentPath={currentPath} />;
    case "public":
      return <PublicHeader currentPath={currentPath} />;
    case "auth":
      return <AuthHeader />;
    case "learner":
      return <LearnerHeader currentPath={currentPath} />;
    case "instructor":
      return <InstructorHeader currentPath={currentPath} />;
    case "organisation":
      return <OrganisationHeader currentPath={currentPath} />;
    case "admin":
      return <AdminHeader currentPath={currentPath} />;
    default:
      return null;
  }
}

function ComponentGallery() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="phase2-section" aria-labelledby="buttons-heading">
        <h2 id="buttons-heading">Buttons, icons, cards, and status</h2>
        <div className="phase2-component-grid">
          <Card variant="yellow">
            <div className="phase2-card-content">
              <IconContainer color="yellow">
                <i className="fas fa-book-open" aria-hidden="true" />
              </IconContainer>
              <h3>Practical digital learning</h3>
              <p>Shared card, icon, and action styles use the original classes.</p>
              <div className="phase2-utility-row">
                <Button>Explore</Button>
                <Button variant="secondary">Learn more</Button>
              </div>
            </div>
          </Card>
          <Card variant="blue">
            <div className="phase2-card-content">
              <IconContainer color="blue">
                <i className="fas fa-chart-line" aria-hidden="true" />
              </IconContainer>
              <h3>Progress you can see</h3>
              <ProgressBar value={64} label="Course progress" />
              <div className="phase2-utility-row">
                <Badge>Active</Badge>
                <Tag>English + Luganda</Tag>
              </div>
            </div>
          </Card>
          <Card>
            <div className="phase2-card-content">
              <h3>Accessible dialog</h3>
              <p>Open the shared modal to test close-button and Escape behavior.</p>
              <Button onClick={() => setModalOpen(true)}>Open dialog</Button>
            </div>
          </Card>
        </div>
        <Modal
          open={modalOpen}
          title="Shared modal"
          onClose={() => setModalOpen(false)}
        >
          <p>
            The dialog retains the original modal classes and supports the
            Escape key and backdrop dismissal.
          </p>
        </Modal>
      </section>

      <section className="phase2-section" aria-labelledby="summary-heading">
        <h2 id="summary-heading">Summary cards</h2>
        <div className="summary-grid">
          <SummaryCard color="purple" label="Active learners" value="86" />
          <SummaryCard color="yellow" label="Lessons completed" value="14" />
          <SummaryCard color="blue" label="Published courses" value="6" />
          <SummaryCard color="orange" label="Certificates issued" value="328" />
        </div>
      </section>

      <section className="phase2-section" aria-labelledby="controls-heading">
        <h2 id="controls-heading">Search, inputs, and tabs</h2>
        <div className="phase2-form-row">
          <SearchControl label="Search courses" />
          <Button>Search</Button>
        </div>
        <div className="phase2-component-grid phase2-component-grid--controls">
          <FormField
            id="phase2-email"
            label="Email address"
            type="email"
            placeholder="name@example.com"
          />
          <SelectField
            id="phase2-role"
            label="Programme type"
            defaultValue="school"
            options={[
              { value: "school", label: "School" },
              { value: "training", label: "Training centre" },
            ]}
          />
        </div>
        <Tabs
          label="Example sections"
          items={[
            {
              value: "overview",
              label: "Overview",
              content: <p>Shared tab selection updates the active panel.</p>,
            },
            {
              value: "progress",
              label: "Progress",
              content: <p>Progress details appear in the selected tab panel.</p>,
            },
          ]}
        />
      </section>

      <section className="phase2-section" aria-labelledby="table-heading">
        <h2 id="table-heading">Responsive table</h2>
        <DataTable
          caption="Sample programme summary"
          columns={[
            { key: "name", label: "Programme" },
            { key: "learners", label: "Learners" },
            { key: "status", label: "Status" },
          ]}
          rows={[
            {
              id: "foundations",
              name: "Digital Foundations",
              learners: "42",
              status: "Active",
            },
            {
              id: "computer-basics",
              name: "Computer Basics",
              learners: "31",
              status: "Active",
            },
          ]}
        />
      </section>
    </>
  );
}

export default function Phase2Preview({ currentPath, variant }) {
  return (
    <div className="phase2-preview">
      {variant.kind === "landing" && <DecorativeGraphics />}
      <PageFontLoader
        includeCaveat={
          variant.caveat || currentPath === "/pages/instructor/dashboard.html"
        }
      />
      <CurrentHeader kind={variant.kind} currentPath={currentPath} />
      <main className="page-main phase2-main">
        <div className="phase2-heading">
          <span className="eyebrow">Shared design system</span>
          <h1>{variant.heading}</h1>
          <p>
            This representative {variant.kind} screen demonstrates shared
            React components and the original EdTech styling. Page-specific
            content remains unchanged until its migration phase.
          </p>
        </div>
        <ComponentGallery />
      </main>
    </div>
  );
}
