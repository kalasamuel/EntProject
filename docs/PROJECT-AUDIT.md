# Phase 0 — Source Audit

## Scope and guardrail

This audit records the current static EdTech application before the React
migration. No application HTML, CSS, or JavaScript was modified in Phase 0.
The supplied React migration master prompt is authoritative for the migration;
the root `prompt.txt` is an earlier HTML/CSS/JavaScript implementation prompt
and contains superseded branding instructions. The current source and migration
prompt identify the application as EdTech.

## Project inventory

| Area | Observed state |
|---|---|
| Application pages | 35 HTML files: root landing page plus 34 files under `pages/` |
| Stylesheets | 14 CSS files: six shared design/layout files plus reset and seven page-specific stylesheets |
| JavaScript | 21 files: 11 core scripts, one demo-data script, and nine page scripts |
| React/Vite/npm | No `package.json`, Vite configuration, React entry point, or React components found |
| Static entry point | Root `index.html`; each role and public screen is a standalone `.html` document |
| Documentation | Six existing documents; `PAGE-MAP.md`, `REACT-CONVERSION-MAP.md`, and `README.md` are placeholders |
| Reference template | `reference-template/template/index.html`, `styles.css`, and `script.js`; SHA-256 checksums recorded below and files were not changed |

### Stylesheet architecture

Shared sheets are `design-tokens.css`, `reset.css`, `global.css`,
`components.css`, `layout.css`, `responsive.css`, and `language-toggle.css`.
The seven page sheets are `landing.css`, `public.css`, `auth.css`,
`learner.css`, `instructor.css`, `organisation.css`, and `admin.css`.
Individual HTML pages load the common sheets before their page-specific sheet;
the landing page uses its own page-specific styles. The current shared token
palette is purple `#4B24C5`, orange `#FF665E`, lavender-to-white background,
yellow cards `#FFF5D1`, and blue cards `#DDF3FF`.

The styles define Inter body typography and Caveat branding where imported.
There are two distinct Google Fonts import variants (Inter only; Inter plus
Caveat). Font Awesome 6.4.0 is referenced from cdnjs. The application uses
role-specific body classes and headers and includes responsive media queries
in the shared and page stylesheets. The 14 stylesheets contain 431 CSS rule
blocks and 17 media-query blocks, counted by a source scan.

### Scripts and interactions

Seven page scripts plus the shared forms and language scripts contain
implemented behavior:

- Landing modal: open, close button, click backdrop, Escape, and focus return.
- Authentication: demo role routes to the learner, instructor, organisation,
  or admin dashboard.
- Catalogue: text search, category/difficulty/language/status filters, combined
  filtering, and reset.
- Forms: local demo confirmation without backend submission.
- Learner: learning tabs, lesson exercise feedback, assessment feedback, and
  certificate preview visibility.
- Instructor: class status filter and sample CSV export.
- Organisation: programme text/status filter and sample certificate CSV export.
- Administration: user/organisation/certificate search and filters, translation
  filters, and local review-status feedback.
- Shared language script: phrase dictionary, storage key `edtech-language`,
  document language/title, selected attributes and editable control values,
  and mutation handling for newly inserted DOM content.

Twelve JavaScript files are structural placeholders: nine core scripts
(`app`, `dropdowns`, `filters`, `modals`, `navigation`, `notifications`,
`progress`, `search`, `tabs`), `data/demo-data.js`, and page scripts
`assessment.js` and `lesson.js`. The language behavior is currently implemented
by direct DOM translation and a `MutationObserver`; the React master prompt
requires migrating that behavior to shared React state rather than retaining
legacy event listeners.

### Links and external resources

- Static scan found zero unresolved local `href`/`src` paths.
- External resources use `fonts.googleapis.com`, `cdnjs.cloudflare.com`, and
  `images.unsplash.com`.
- Thirteen fragment-only links were found. Six point to actual sections
  (`#features`, `#how-it-works`, `#course-grid`, `#benefits`, and `#review`,
  with one repeated target); seven bare `href="#"` links remain on three
  screens (learner lesson, learner profile, and organisation settings) and
  need review during the relevant migration phase.
- The source depends on network access for remote fonts, icons, and Unsplash
  images; no requests failed during baseline capture.

## English visual baseline

| Viewport | Size | Captures |
|---|---:|---:|
| Desktop | 1440 × 900 | 35 |
| Tablet | 768 × 1024 | 35 |
| Mobile | 375 × 812 | 35 |
| **Total** | Device scale factor 1 | **105** |

Captures were made with Playwright Chromium with English selected. The batch
completed with zero capture errors, page errors, console errors, or failed
requests. Representative landing-page desktop and admin-dashboard mobile
screenshots were visually inspected. The full capture inventory and per-page
diagnostics are recorded in
[`visual-baselines/manifest.json`](./visual-baselines/manifest.json); images
are organized under `visual-baselines/desktop/`, `tablet/`, and `mobile/`.

## Immutable reference-template checksums

SHA-256 checksums captured at the end of Phase 0:

| File | SHA-256 |
|---|---|
| `reference-template/template/index.html` | `64A69B7BFF6288FC1588AD753DC8871A7BD9DD47B49A058D6E9997EBDF64A678` |
| `reference-template/template/styles.css` | `B97BBFA1DDDC137FAE598EE2A57F092DB36FC4D2A40B8E81E6DF0EFE141CF7C1` |
| `reference-template/template/script.js` | `9CD8BF361E8930E79E96AC95337B7876AA481641143934BB655CDF5FC4B5109F` |

## Findings and migration considerations

1. The source remains a static 35-page application. Direct `.html` paths are
   the route contract to reproduce in React Router.
2. The current EdTech branding and page files take precedence over the earlier
   SkillUp wording in `prompt.txt` and the separate reference template.
3. There is no existing React/npm toolchain or package manifest.
4. Preserve stylesheet ordering and per-page font imports: normalizing those
   imports would change the reference rendering.
5. Preserve role-specific headers and their page-specific layout differences.
6. The current Luganda phrase-matching system has dynamic DOM behavior and
   protected selectors; complete dictionary coverage and protected content
   need verification during the language-system migration.
7. Baselines are source screenshots only. No React visual comparison exists
   before a React implementation is authorized and created.
8. The 105 screenshots are English-default captures at device scale factor 1
   and viewports 1440×900, 768×1024, and 375×812. No browser errors or failed
   requests occurred. See `visual-baselines/manifest.json` for each capture.

## Source-to-React mapping

The complete one-to-one page/component/route matrix is in
[`ROUTE-MAP.md`](./ROUTE-MAP.md). Migration progress is tracked per page in
[`PROJECT-PROGRESS.md`](./PROJECT-PROGRESS.md).
