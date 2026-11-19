import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { expect, test } from "@playwright/test";

const manifestPath = resolve(process.cwd(), "../docs/visual-baselines/manifest.json");
const sourcePages = JSON.parse(readFileSync(manifestPath, "utf8"))
  .captures.filter((capture) => capture.viewport === "desktop")
  .map((capture) => `/${capture.page}`);

test("all source pages expose working English and Luganda language controls", async ({
  page,
}) => {
  test.setTimeout(180_000);
  await page.addInitScript(() => {
    localStorage.setItem("edtech-language", "English");
  });

  for (const route of sourcePages) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const languageToggle = page.locator("[data-language-toggle]");
    await expect(languageToggle, route).toBeVisible();
    await expect(page.locator("html"), route).toHaveAttribute("lang", "en");
    await expect(languageToggle, route).toHaveAttribute("aria-pressed", "false");

    await languageToggle.click();
    await expect(page.locator("html"), route).toHaveAttribute("lang", "lg");
    await expect(languageToggle, route).toHaveAttribute("aria-pressed", "true");
    await expect(page.evaluate(() => localStorage.getItem("edtech-language"))).resolves.toBe(
      "Luganda",
    );
  }
});

test("all internal links resolve to source routes and existing in-page targets", async ({
  page,
}) => {
  test.setTimeout(180_000);
  const knownRoutes = new Set(["/", "/index.html", ...sourcePages]);
  const idsByRoute = new Map();
  const links = [];

  for (const route of sourcePages) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    idsByRoute.set(
      route,
      await page.locator("[id]").evaluateAll((elements) =>
        elements.map((element) => element.id),
      ),
    );
    links.push(
      ...(await page.locator("a[href]").evaluateAll((anchors) =>
        anchors.map((anchor) => ({
          source: window.location.pathname,
          href: anchor.href,
          rawHref: anchor.getAttribute("href"),
        })),
      )),
    );
  }

  const failures = [];
  for (const link of links) {
    const target = new URL(link.href);
    if (target.origin !== "http://127.0.0.1:5173") continue;
    if (!knownRoutes.has(target.pathname)) {
      failures.push(`${link.source}: route does not exist: ${link.rawHref}`);
      continue;
    }

    if (target.hash) {
      const targetRoute = target.pathname === "/" ? "/index.html" : target.pathname;
      const targetId = decodeURIComponent(target.hash.slice(1));
      if (!idsByRoute.get(targetRoute)?.includes(targetId)) {
        failures.push(
          `${link.source}: #${targetId} does not exist on ${target.pathname}`,
        );
      }
    }
  }

  expect(failures).toEqual([]);
});
