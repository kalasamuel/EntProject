import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router.jsx";
import "@testing-library/jest-dom/vitest";

describe("EdTech router", () => {
  it("renders the instructor dashboard route", () => {
    window.history.pushState({}, "", "/pages/instructor/dashboard.html");

    render(
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    );

    expect(screen.getByText(/Good Morning/i)).toBeInTheDocument();
  });
});
