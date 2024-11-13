# Vite

## Plugin

enrouter comes with Vite plugin for generating routes from file system.

Accepts `path` parameter - a folder with route modules.

In development or when building production bundle it:

- looks into the folder at `path`
- organizes modules into the tree of routes
- creates adhoc virtual module exporting routes

### Example

```ts
// vite.config.ts

import enrouter from "enrouter/vite/plugin";

export default defineConfig({
  plugins: [enrouter({ path: "src/app" })],
});
```
