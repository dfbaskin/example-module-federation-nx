module.exports = {
  name: "interop-app",
  filename: "remoteEntry.js",
  exposes: {
    ".": "./src/remote-entry.ts",
  },
};
