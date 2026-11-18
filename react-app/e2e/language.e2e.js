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
  await expect(page.locator('[data-tab="completed"]')).toContainText("Kiwedde");

  await page.goto("/pages/learner/lesson.html");
  await page.getByRole("button", { name: "Keyboard" }).click();
  await expect(page.locator("[data-exercise-feedback]")).toContainText("Kituufu.");
  await expect(page.locator("[data-exercise-feedback]")).not.toContainText("Correct.");

  await page
    .getByRole("button", { name: "Kyusa olulimi okudda ku Lungereza" })
    .click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("[data-exercise-feedback]")).toContainText("Correct.");
  await expect(page.evaluate(() => localStorage.getItem("edtech-language"))).resolves.toBe(
    "English",
  );
});

test("the shared language control localizes each page category", async ({ page }) => {
  const categoryRoutes = [
    ["/pages/public/courses.html", "Ebitongole"],
    ["/pages/auth/login.html", "Ddayo ku ntandikwa"],
    ["/pages/learner/dashboard.html", "Ekifo ky’omuyizi"],
    ["/pages/instructor/dashboard.html", "Omusomesa"],
    ["/pages/organisation/dashboard.html", "Okulambika kwa pulogulaamu"],
    ["/pages/admin/dashboard.html", "Obukulembeze bwa pulatifoomu"],
  ];

  for (const [route, localizedText] of categoryRoutes) {
    await page.goto(route, { waitUntil: "commit" });
    await page.getByRole("button", { name: "Switch language to Luganda" }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", "lg");
    await expect(page.getByText(localizedText, { exact: false }).first()).toBeVisible();
    await page.getByRole("button", { name: "Kyusa olulimi okudda ku Lungereza" }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  }
});
