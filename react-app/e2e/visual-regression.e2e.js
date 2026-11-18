import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, resolve } from "node:path";
import { expect, test } from "@playwright/test";

const manifestPath = resolve(process.cwd(), "../docs/visual-baselines/manifest.json");
const outputDirectory = resolve(process.cwd(), "../docs/phase-10-screenshots");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const viewports = manifest.viewports;

test("capture all pages at the source baseline viewports", async ({ page }) => {
  test.setTimeout(900_000);
  mkdirSync(outputDirectory, { recursive: true });

  const diagnostics = {
    browser: "Playwright Chromium",
    device_scale_factor: 1,
    language: "English",
    captures: [],
    retries: [],
  };
  const pageErrors = [];
  const consoleErrors = [];
  const failedRequests = [];
  let currentAttempt = "";

  page.on("pageerror", (error) => {
    pageErrors.push({ attempt: currentAttempt, message: error.message });
  });
  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push({ attempt: currentAttempt, message: message.text() });
    }
  });
  page.on("requestfailed", (request) => {
    failedRequests.push(
      {
        attempt: currentAttempt,
        message: `${request.url()}: ${request.failure()?.errorText}`,
      },
    );
  });
  await page.addInitScript(() => {
    localStorage.setItem("edtech-language", "English");
  });

  for (const viewport of viewports) {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    });

    const captures = manifest.captures.filter(
      (capture) => capture.viewport === viewport.name,
    );
    expect(captures, `${viewport.name} baseline inventory`).toHaveLength(35);

    for (const capture of captures) {
      const route = `/${capture.page}`;
      const screenshot = resolve(
        outputDirectory,
        viewport.name,
        basename(capture.screenshot),
      );
      mkdirSync(resolve(outputDirectory, viewport.name), { recursive: true });

      let completed = false;
      for (let attempt = 1; attempt <= 3 && !completed; attempt += 1) {
        currentAttempt = `${viewport.name} ${route} attempt ${attempt}`;
        const response = await page.goto(route, { waitUntil: "domcontentloaded" });
        expect(response?.status(), route).toBe(200);
        await expect(page.locator("main").first(), route).toBeVisible();
        await expect(page.locator("h1").first(), route).toBeVisible();
        await expect(page.locator("html"), route).toHaveAttribute("lang", "en");
        expect(await page.title(), route).toBe(capture.title);
        await page.locator("#edtech-google-fonts").waitFor({ state: "attached" });
        await page.waitForLoadState("networkidle");
        await page.evaluate(async () => {
          await document.fonts.load('400 16px "Inter"');
          await document.fonts.load('700 2.2rem "Caveat"');
          await document.fonts.ready;
        });

        const attemptConsoleErrors = consoleErrors.filter(
          (error) => error.attempt === currentAttempt,
        );
        const attemptFailedRequests = failedRequests.filter(
          (error) => error.attempt === currentAttempt,
        );
        const retryableErrors = [
          ...attemptConsoleErrors,
          ...attemptFailedRequests,
        ];
        if (retryableErrors.length > 0 && attempt < 3) {
          diagnostics.retries.push({
            page: capture.page,
            viewport: viewport.name,
            attempt,
            errors: retryableErrors.map((error) => error.message),
          });
          continue;
        }

        if (attempt === 3 && retryableErrors.length > 0) {
          diagnostics.retries.push({
            page: capture.page,
            viewport: viewport.name,
            attempt,
            errors: retryableErrors.map((error) => error.message),
            exhausted: true,
          });
        }

        await page.screenshot({
          path: screenshot,
          fullPage: true,
          animations: "disabled",
        });
        completed = true;
      }

      diagnostics.captures.push({
        page: capture.page,
        viewport: viewport.name,
        width: viewport.width,
        height: viewport.height,
        screenshot,
        title: await page.title(),
        lang: await page.locator("html").getAttribute("lang"),
      });
    }
  }

  diagnostics.page_errors = pageErrors.map((error) => error.message);
  diagnostics.console_errors = consoleErrors
    .filter((error) =>
      diagnostics.captures.some(
        (capture) =>
          error.attempt === `${capture.viewport} /${capture.page} attempt 3`,
      ),
    )
    .map((error) => `${error.attempt}: ${error.message}`);
  diagnostics.failed_requests = failedRequests
    .filter((error) =>
      diagnostics.captures.some(
        (capture) =>
          error.attempt === `${capture.viewport} /${capture.page} attempt 3`,
      ),
    )
    .map((error) => `${error.attempt}: ${error.message}`);
  const exhaustedRetries = diagnostics.retries.filter(
    (retry) => retry.exhausted,
  );
  writeFileSync(
    resolve(outputDirectory, "diagnostics.json"),
    `${JSON.stringify(diagnostics, null, 2)}\n`,
  );
  expect(pageErrors).toEqual([]);
  expect(diagnostics.console_errors).toEqual([]);
  expect(diagnostics.failed_requests).toEqual([]);
  expect(exhaustedRetries).toEqual([]);
});
