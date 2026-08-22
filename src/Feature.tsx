import { useSharedReactions } from "@baditaflorin/mesh-common";
import type { MeshConfig, YRoom } from "@baditaflorin/mesh-common";

const EMOJI = [
  { value: "👏", label: "Applaud" },
  { value: "💡", label: "Idea" },
  { value: "❤️", label: "Love" },
  { value: "🎉", label: "Celebrate" },
];

export function Feature({ room, config }: { room: YRoom | null; config: MeshConfig }) {
  const reactions = useSharedReactions(room);

  return (
    <main className="reaction-wall">
      <header className="reaction-wall__intro">
        <p className="reaction-wall__eyebrow">A quiet shared signal</p>
        <h1>{config.appName}</h1>
        <p>{config.description} Tap once to add your reaction; tap again to take it back.</p>
      </header>

      <section className="reaction-wall__board" aria-label="Shared reactions" aria-live="polite">
        {EMOJI.map(({ value, label }) => {
          const reaction = reactions.reactions.find((entry) => entry.emoji === value);
          const active = reaction?.peerIds.includes(room?.peerId ?? "") ?? false;
          const count = reaction?.count ?? 0;
          return (
            <button
              className="reaction-wall__reaction"
              data-active={active || undefined}
              key={value}
              type="button"
              aria-pressed={active}
              aria-label={`${value} ${count} ${label} reactions`}
              onClick={() => reactions.toggle(value)}
            >
              <span aria-hidden="true">{value}</span>
              <strong>{count}</strong>
              <small>{label}</small>
            </button>
          );
        })}
      </section>

      <p className="reaction-wall__hint">
        {room ? "Reactions are shared with everyone in this room." : "Connecting to your room…"}
      </p>
    </main>
  );
}
