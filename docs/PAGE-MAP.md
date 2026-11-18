# Page Map

The React app migrates the existing static site pages to React components. Each
component is organized by role in one of six page modules under
`react-app/src/pages/`; React Router preserves the source `.html` paths.

| Area | Source pages | React page module | Page count |
|---|---|---|---:|
| Public | `index.html`, `pages/public/*.html` | `PublicPages.jsx` | 6 |
| Authentication | `pages/auth/*.html` | `AuthPages.jsx` | 3 |
| Learner | `pages/learner/*.html` | `LearnerPages.jsx` | 7 |
| Instructor | `pages/instructor/*.html` | `InstructorPages.jsx` | 5 |
| Organisation | `pages/organisation/*.html` | `OrganisationPages.jsx` | 7 |
| Platform admin | `pages/admin/*.html` | `AdminPages.jsx` | 7 |
| **Total** |  |  | **35** |

`/` and `/index.html` are aliases for the landing page. There are 36 route
URLs for 35 source pages.

For each exact route, source title, stylesheet and component mapping, see the
[route map](./ROUTE-MAP.md). For component exports and shared layout/context,
see the [React conversion map](./REACT-CONVERSION-MAP.md).
