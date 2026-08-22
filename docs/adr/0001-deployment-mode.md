# 0001 — Deployment mode: Mode A (Pure GitHub Pages)

- **Status**: accepted
- **Date**: 2026-08-22

## Decision

Mesh Reaction Wall ships as a static GitHub Pages application from `main/docs`.
Reactions stay browser-local and synchronize directly through the shared Yjs/WebRTC mesh; no application backend or account database is needed.

## Consequences

- The committed `docs/` directory is the deployable artifact.
- Signaling and TURN remain user-overridable in the settings drawer.
- Peer-provided CRDT state is untrusted and must be represented defensively.
