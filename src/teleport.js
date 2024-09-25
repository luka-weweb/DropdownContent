export function setupTeleport() {
  const frontDocument = wwLib.getFrontDocument();
  if (!frontDocument || typeof frontDocument.querySelector !== "function") {
    console.error("Invalid front document or missing querySelector method");
    return {
      teleportTarget: null,
      isTeleportReady: false,
    };
  }

  const appEl = frontDocument.querySelector("#app");
  if (!appEl) {
    console.error("Target element '#app' not found in front document");
    return {
      teleportTarget: null,
      isTeleportReady: false,
    };
  }

  return {
    teleportTarget: appEl,
    isTeleportReady: true,
  };
}
