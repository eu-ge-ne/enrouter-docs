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

### virtual:enrouter

The result of route generation is a "virtual" module with name
`virtual:enrouter`. This module exports the route tree which was created from
your routes.

"Virtual modules" is Rollup
[feature](https://rollupjs.org/plugin-development/#a-simple-example). It allows
creating "adhoc" modules in memory instead of writing source code to a file.

Vite uses Rollup for generating production bundle.
But in development mode it uses two bundlers:

- Rollup for compiling your code.
- esbuild for pre-bundling dependencies in `node_modules` folder.

When esbuild bundles `enrouter` dependency it eventually discovers
`virtual:enrouter` and tries to load it.
But it does not know how to process it and will fail, because there is no
corresponding plugin provided.

Therefore, we need to tell Vite to ignore `virtual:enrouter` and do not try to
"precompile" it, by adding it to `optimizeDeps.exclude`:

```ts
// vite.config.ts

export default defineConfig({
  //...

  optimizeDeps: {
    exclude: ["virtual:enrouter"],
  },
});
```
