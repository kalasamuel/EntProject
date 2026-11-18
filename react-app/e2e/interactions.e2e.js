import { expect, test } from "@playwright/test";

test("catalogue filters, course routing, and landing modal work together", async ({
  page,
}) => {
  await page.goto("/pages/public/courses.html");
  await page.getByRole("searchbox", { name: "Search courses" }).fill("Digital Safety");
  await expect(page.locator("[data-course-card]")).toHaveCount(1);
  await expect(page.locator("[data-course-card]")).toContainText("Digital Safety");
  await page.getByRole("searchbox", { name: "Search courses" }).fill("");
  await page.getByRole("combobox", { name: "Category" }).selectOption("foundations");
  await expect(page.locator("[data-course-card]")).toHaveCount(2);
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(page.locator("[data-course-card]")).toHaveCount(6);

  await page.goto("/");
  await page.getByRole("button", { name: /introduction|video/i }).click();
  await expect(page.locator("[data-video-modal]")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-video-modal]")).toHaveCount(0);
});

test("demo login routes by role and learner tabs and assessment feedback update", async ({
  page,
}) => {
  await page.goto("/pages/auth/login.html");
  await page.getByLabel("Email address").fill("demo@example.test");
  await page.getByLabel("Password").fill("demo-password");
  await page.getByLabel("Demo role").selectOption("instructor");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL(/\/pages\/instructor\/dashboard\.html$/);
  await expect(page.getByRole("heading", { name: /Good Morning/ })).toBeVisible();

  await page.goto("/pages/learner/my-learning.html");
  await page.getByRole("tab", { name: "Completed" }).click();
  await expect(page.locator('[data-tab-panel="completed"]')).toBeVisible();
  await page.getByRole("link", { name: "View achievement" }).click();
  await expect(page.locator("[data-certificate-modal]")).toBeVisible();

  await page.goto("/pages/learner/assessment.html");
  await page.getByRole("button", { name: "password123" }).click();
  await expect(page.locator(".feedback")).toContainText("Not quite.");
});

test("admin filters and review actions preserve unpublished translation status", async ({
  page,
}) => {
  await page.goto("/pages/admin/users.html");
  await page.getByRole("searchbox", { name: "Search users" }).fill("Demo Teacher");
  await expect(page.locator("[data-admin-row]")).toHaveCount(1);
  await page.getByRole("searchbox", { name: "Search users" }).fill("");
  await page.getByRole("combobox", { name: "Role" }).selectOption("admin");
  await expect(page.locator("[data-admin-row]")).toHaveCount(1);

  await page.goto("/pages/admin/translations.html");
  await page.getByRole("combobox", { name: "Review status" }).selectOption("Draft");
  await expect(page.locator("[data-translation-row]")).toHaveCount(1);
  await page.getByRole("button", { name: "Request changes" }).click();
  await expect(page.getByRole("status")).toContainText("translation remains unpublished");
});
