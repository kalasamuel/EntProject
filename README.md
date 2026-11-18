# EdTech — Digital Skills in Local Languages

The project contains the original static HTML/CSS/JavaScript site and its
React migration. The original source remains preserved at the repository root
(`index.html`, `pages/`, and `assets/`); the React app is in [`react-app/`](./react-app/).

## Run the React app

Requires Node.js 22.12 or later.

```powershell
cd react-app
npm install
npm run dev
```

The development server serves the 35 legacy page routes, including direct
`.html` paths. The SPA supports English and Luganda language controls. Form
submissions, authentication, exports, and other data operations are local
demos; there is no backend or persistent service.

## Build and test

Run these commands from `react-app/`:

```powershell
npm test
npm run build
npm run test:e2e
```

Vitest covers React component behavior. Playwright covers route and
interaction behavior, language controls, internal links/anchors, and the
desktop/tablet/mobile visual capture matrix.

## Project documentation

- [Project progress and page approvals](./docs/PROJECT-PROGRESS.md)
- [Migration changelog](./docs/MIGRATION-CHANGELOG.md)
- [Source-to-React route map](./docs/ROUTE-MAP.md)
- [Page map](./docs/PAGE-MAP.md)
- [React conversion/component map](./docs/REACT-CONVERSION-MAP.md)
- [Component catalog](./docs/COMPONENT-CATALOG.md)
- [Functionality and demo limitations](./docs/FUNCTIONALITY.md)
- [Visual regression evidence](./docs/PHASE-10-VERIFICATION.md)
- [Final quality-control report](./docs/PHASE-11-VERIFICATION.md)
- [Legacy-source integrity report](./docs/SOURCE-INTEGRITY.md)
