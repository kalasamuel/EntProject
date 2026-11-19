# Runtime Validation Report

**Generated**: 2026-11-18  
**Target**: `react-app/` — EdTech React SPA

## Summary

| Step | Status | Exit code | Details |
|---|---|---:|---|
| Startup | PASS | n/a | Playwright-managed Vite server reached `http://127.0.0.1:5173` |
| Unit tests | PASS | 0 | `npm test`; 2 tests passed |
| Production build | PASS | 0 | `npm run build` |
| Browser E2E | PASS | 0 | `npm run test:e2e`; 12 tests passed |
| Direct routes and refresh | PASS | 0 | All 35 source page paths |
| Responsive capture matrix | PASS | 0 | 105 Chromium captures; desktop, tablet, and mobile |

**Overall**: PASS for the frontend-only integration scope.

## Environment and scope

- Node.js: available, v22.13.1.
- Playwright Chromium: available and used by the passing browser suite.
- Docker: unavailable (`docker` command not found); this SPA has no database,
  broker, or containerized infrastructure.
- Backend/authentication: none; authentication and forms remain local demo
  behavior.
- Infrastructure tier: not applicable to this frontend-only app.
- Browser tier: Playwright, primary and verified.

## Covered journeys

- Direct route and refresh checks for all 35 legacy page paths.
- English/Luganda controls on all 35 pages; language persistence, route changes,
  refresh, and dynamic feedback.
- Same-origin link destinations and in-page anchor targets across all source
  pages.
- Catalogue search/filter/clear, course navigation, and landing modal.
- Demo-role navigation, learner tabs, certificate preview, and assessment
  feedback.
- Admin filtering/review actions and instructor/organisation navigation.
- All 35 pages captured at 1440 × 900, 768 × 1024, and 375 × 812, with no
  horizontal document overflow.

## Evidence and gaps

- Playwright browser suite: 12 passed, 0 failed, exit code 0.
- Visual diagnostics: 0 page errors, 0 console errors, 0 failed requests, and
  0 exhausted capture retries.
- Screenshot and pixel-comparison evidence:
  [`PHASE-11-VERIFICATION.md`](./PHASE-11-VERIFICATION.md) and
  [`PHASE-10-VERIFICATION.md`](./PHASE-10-VERIFICATION.md).
- No server/API persistence or authentication failure path exists to test.
- Browser verification of full business behavior on every individual page is
  not claimed; representative page-specific interactions are covered.
- Six high-severity dependency advisories were reported during prior Playwright
  setup and remain unremediated; dependency remediation was outside this
  frontend migration scope.

## Verdict

```text
environment:
  docker: UNAVAILABLE — docker command not found; no containerized infrastructure is used
  node: AVAILABLE — v22.13.1
  playwright: AVAILABLE — Playwright Chromium browser suite passed
  infra-tier: NOT APPLICABLE — frontend-only SPA with no database or broker
  browser-tier: PRIMARY(Playwright) — executed successfully
startup: PASS — Playwright-managed Vite server; http://127.0.0.1:5173 responded
unit: PASS — exit_code: 0, passed: 2, failed: 0
build: PASS — exit_code: 0, Vite production build
e2e: PASS — exit_code: 0, passed: 12, failed: 0
overall: PASS — frontend route, interaction, localization, and responsive checks passed
```
