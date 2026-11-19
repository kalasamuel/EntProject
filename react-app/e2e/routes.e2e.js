import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/index.html",
  "/pages/public/courses.html",
  "/pages/public/course-detail.html",
  "/pages/public/organisations.html",
  "/pages/public/about.html",
  "/pages/public/contact.html",
  "/pages/auth/login.html",
  "/pages/auth/register.html",
  "/pages/auth/forgot-password.html",
  "/pages/learner/dashboard.html",
  "/pages/learner/my-learning.html",
  "/pages/learner/lesson.html",
  "/pages/learner/assessment.html",
  "/pages/learner/progress.html",
  "/pages/learner/certificates.html",
  "/pages/learner/profile.html",
  "/pages/instructor/dashboard.html",
  "/pages/instructor/classes.html",
  "/pages/instructor/class-detail.html",
  "/pages/instructor/learner-detail.html",
  "/pages/instructor/reports.html",
  "/pages/organisation/dashboard.html",
  "/pages/organisation/programmes.html",
  "/pages/organisation/cohort-detail.html",
  "/pages/organisation/learners.html",
  "/pages/organisation/reports.html",
  "/pages/organisation/certificates.html",
  "/pages/organisation/settings.html",
  "/pages/admin/dashboard.html",
  "/pages/admin/organisations.html",
  "/pages/admin/users.html",
  "/pages/admin/content-library.html",
  "/pages/admin/lesson-editor.html",
  "/pages/admin/translations.html",
  "/pages/admin/certificates.html",
];

test("all legacy paths render directly and survive refresh without page errors", async ({
  page,
}) => {
  test.setTimeout(240_000);
  const pageErrors = [];
  const consoleErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });

  for (const route of routes) {
    const response = await page.goto(route, { waitUntil: "commit" });
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("main").first(), route).toBeVisible();
    await expect(page.locator("h1").first(), route).toBeVisible();
    expect(await page.title(), route).not.toBe("");

    await page.reload({ waitUntil: "commit" });
    await expect(page.locator("main").first(), `${route} after refresh`).toBeVisible();
  }

  expect(pageErrors).toEqual([]);
  expect(consoleErrors).toEqual([]);
});
