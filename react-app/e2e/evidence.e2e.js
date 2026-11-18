import { mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { expect, test } from "@playwright/test";

const screenshotDirectory = resolve(process.cwd(), "../docs/phase-9-screenshots");

test("capture representative public, learner, and admin renders", async ({
  page,
}) => {
  mkdirSync(screenshotDirectory, { recursive: true });

  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.getByRole("heading", { name: /Digital Skills/ })).toBeVisible();
  await page.screenshot({
    path: resolve(screenshotDirectory, "landing-desktop.png"),
    fullPage: true,
  });

  await page.goto("/pages/learner/dashboard.html");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.getByRole("heading", { name: /Hello/ })).toBeVisible();
  await page.screenshot({
    path: resolve(screenshotDirectory, "learner-dashboard-desktop.png"),
    fullPage: true,
  });

  await page.goto("/pages/admin/translations.html");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.getByRole("heading", { name: /Translation Management/ })).toBeVisible();
  await page.screenshot({
    path: resolve(screenshotDirectory, "admin-translations-desktop.png"),
    fullPage: true,
  });
});
