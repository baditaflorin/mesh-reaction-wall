# Privacy — Mesh Reaction Wall

## Threat model

This is a peer-to-peer mesh. Any reaction shared through Yjs is visible to everyone in the same room. Treat a room as semi-public among the people with whom you share its room ID.

### What other peers can see

- Reaction choices and their de-duplicated peer counts in the shared Yjs state.
- Per-peer awareness information for the duration of the connection.
- A transient WebRTC peer ID, not an account identity.

### What the self-hosted infrastructure can see

- The signaling server sees connection metadata, not reaction contents.
- The TURN relay may carry encrypted WebRTC traffic when direct connections cannot be made.

### What stays local

- Your signaling/TURN overrides and room ID in localStorage.
- No application state is stored on a server after peers leave the room.

## Capabilities used by this app

<!-- mesh:capabilities-block:start -->

_(no capability-bearing primitives detected — this app only uses pure CRDT primitives)_
<!-- mesh:capabilities-block:end -->

## No accounts, no analytics

No login, tracking pixels, analytics, or service-worker telemetry.
