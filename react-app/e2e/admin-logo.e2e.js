import { expect, test } from "@playwright/test";

test("admin headers load the shared logo typeface on every route", async ({ page }) => {
  const routes = [
    "/pages/admin/dashboard.html",
    "/pages/admin/organisations.html",
    "/pages/admin/users.html",
    "/pages/admin/content-library.html",
    "/pages/admin/lesson-editor.html",
    "/pages/admin/translations.html",
    "/pages/admin/certificates.html",
  ];

  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator(".site-header .logo"), route).toBeVisible();
    await expect(page.locator("#edtech-google-fonts"), route).toHaveAttribute(
      "href",
      /family=Caveat:wght@700/,
    );
  }
});
