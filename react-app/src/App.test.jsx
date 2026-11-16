import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { DashboardPage } from "./pages/InstructorPages.jsx";
import { DashboardPage as OrganisationDashboardPage } from "./pages/OrganisationPages.jsx";
import "@testing-library/jest-dom/vitest";

describe("EdTech dashboard pages", () => {
  it("renders the instructor dashboard route content", () => {
    render(
      <LanguageProvider>
        <MemoryRouter initialEntries={["/pages/instructor/dashboard.html"]}>
          <DashboardPage currentPath="/pages/instructor/dashboard.html" />
        </MemoryRouter>
      </LanguageProvider>
    );

    expect(screen.getByText(/Good Morning/i)).toBeInTheDocument();
  });

  it("renders the organisation dashboard route content", () => {
    render(
      <LanguageProvider>
        <MemoryRouter initialEntries={["/pages/organisation/dashboard.html"]}>
          <OrganisationDashboardPage currentPath="/pages/organisation/dashboard.html" />
        </MemoryRouter>
      </LanguageProvider>
    );

    expect(
      screen.getByRole("heading", { name: /Organisation Overview/i })
    ).toBeInTheDocument();
  });
});
