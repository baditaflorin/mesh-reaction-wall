import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { createMockRoom } from "@baditaflorin/mesh-common/testing";
import { Feature } from "../../src/Feature";
import { config } from "../../src/config";

describe("Feature (component)", () => {
  it("renders a count for each reaction and toggles a reaction", () => {
    const room = createMockRoom();
    render(<Feature room={room} config={config} />);
    expect(screen.getByRole("heading", { name: "Mesh Reaction Wall" })).toBeInTheDocument();
    const applaud = screen.getByRole("button", { name: "Applaud, 0 reactions" });
    fireEvent.click(applaud);
    expect(screen.getByRole("button", { name: "Applaud, 1 reactions" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("shows a connecting state when room is null", () => {
    render(<Feature room={null} config={config} />);
    expect(screen.getByText("Connecting to your room…")).toBeInTheDocument();
  });
});
