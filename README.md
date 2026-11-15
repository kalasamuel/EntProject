# EdTech – Digital Skills in Local Languages

The original static application remains available from `index.html` and the
existing `pages/` directory. Its source and reference template are preserved.

The React migration foundation is in [`react-app/`](./react-app/). To run it
locally, use Node.js 22.12 or later:

```powershell
cd react-app
npm install
npm run dev
```

The React application currently provides the shared design-system components
and role-specific header previews at the source `.html` routes. Original page
content has not yet been converted. Migration progress and verification are
tracked in [`docs/PROJECT-PROGRESS.md`](./docs/PROJECT-PROGRESS.md),
[`docs/PHASE-1-VERIFICATION.md`](./docs/PHASE-1-VERIFICATION.md), and
[`docs/PHASE-2-VERIFICATION.md`](./docs/PHASE-2-VERIFICATION.md).
