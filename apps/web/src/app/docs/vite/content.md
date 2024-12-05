# Vite

## Plugin

enrouter includes a Vite plugin that automatically generates routes based on your file system structure.

### Configuration

The plugin accepts a single parameter `path`, which specifies the directory containing your route modules.
During development or production builds, the plugin:

1. Scans the specified folder (`path`) for route modules.
2. Organizes these modules into a hierarchical route tree.
3. Generates a virtual module on-the-fly that exports the routes for use in your application.

### Example

```ts
// vite.config.ts

import enrouter from "enrouter/vite/plugin";

export default defineConfig({
  plugins: [enrouter({ path: "src/app" })],
});
```
