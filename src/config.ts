import { createMeshConfig } from "@baditaflorin/mesh-common";

export const config = createMeshConfig({
  appName: "Mesh Reaction Wall",
  description: "A shared, de-duplicated reaction wall.",
  accentHex: "#8046a5",
  version: __APP_VERSION__,
  commit: __GIT_COMMIT__,
});
