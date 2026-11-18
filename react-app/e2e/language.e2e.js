import { expect, test } from "@playwright/test";

test("Luganda preference persists across routes and refresh, including dynamic feedback", async ({
  page,
}) => {
  await page.goto("/pages/learner/dashboard.html");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByText("Courses in progress")).toBeVisible();

  await page.getByRole("button", { name: "Switch language to Luganda" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "lg");
  await expect(page.getByText("Emisomo egikyayigibwa")).toBeVisible();
  await expect(page.getByRole("link", { name: "Okuyiga kwange" })).toBeVisible();
  await expect(page.evaluate(() => localStorage.getItem("edtech-language"))).resolves.toBe(
    "Luganda",
  );

  await page.getByRole("link", { name: "Okuyiga kwange" }).click();
  await expect(page).toHaveURL(/\/pages\/learner\/my-learning\.html$/);
  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator("html")).toHaveAttribute("lang", "lg");
  await expect(page.getByRole("tab", { name: "Kiwedde" })).toBeVisible();

  await page.goto("/pages/learner/lesson.html");
  await page.getByRole("button", { name: "Keyboard" }).click();
  await expect(page.locator("[data-exercise-feedback]")).toContainText("Kituufu.");
  await expect(page.locator("[data-exercise-feedback]")).not.toContainText("Correct.");
});
