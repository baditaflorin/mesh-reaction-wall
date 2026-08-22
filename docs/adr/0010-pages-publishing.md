# 0010 — GitHub Pages publishing strategy

- **Status**: accepted
- **Date**: 2026-08-22

## Decision

Publish from the `main` branch's `/docs` folder. The Vite build uses the
`/mesh-reaction-wall/` base path and copies `index.html` to `404.html` for the
single-page application fallback. No GitHub Actions workflow is used.
