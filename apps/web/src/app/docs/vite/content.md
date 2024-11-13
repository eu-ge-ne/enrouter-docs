# Vite

## Plugin

enrouter comes with Vite plugin for generating routes from file system.

It accepts `path` parameter - path to a folder with route modules:

```ts
// vite.config.ts

import enrouter from "enrouter/vite/plugin";

export default defineConfig({
  plugins: [enrouter({ path: "src/app" })],
});
```
