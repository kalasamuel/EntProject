# Original Source Integrity

The pre-migration manifest is `backup/pre-react-manifest.json`. It records 191
files and 20,213,203 bytes. The immutable snapshot is under `backup/pre-react/`.

## Verification

SHA-256 was recomputed for each manifest path in both the current source tree
and the preserved snapshot:

| Set | Matching files | Mismatches |
|---|---:|---:|
| `backup/pre-react/` against manifest | 191 / 191 | 0 |
| Current non-documentation source and assets against manifest | 185 / 185 | 0 |

The original HTML pages, CSS/JavaScript assets, reference-template files, and
other non-documentation files match their pre-migration hashes. The root
`README.md` and migration documents are intentionally edited project
documentation and are not application-source changes. The per-file mismatch
list in the manifest comparison is limited to documentation paths.

The React application and migration tests live outside the original manifest
scope. They do not overwrite or replace the preserved static application.
