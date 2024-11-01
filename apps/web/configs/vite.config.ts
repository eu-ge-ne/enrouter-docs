import { resolve } from "node:path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import { globSync } from "glob";
import enrouter from "enrouter/vite/plugin";

const root = resolve(import.meta.dirname, "..");

export default defineConfig({
  root,
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        providerImportSource: "@mdx-js/react",
        remarkPlugins: [remarkGfm],
      }),
    },
    react({ include: /\.(jsx|js|tsx|ts|mdx|md)$/ }),
    enrouter({ path: resolve(root, "src/app") }),
  ],
  build: {
    manifest: true,
    outDir: "dist/client",
    modulePreload: false,
    emptyOutDir: false,
    rollupOptions: {
      input: ["src/main.tsx", ...globSync("./src/app/**/_*.tsx")],
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return;
          }

          if (
            [
              "/react/",
              "/react-dom/",
              "/react/jsx-runtime/",
              "/react-dom/client/",
            ].some((x) => id.includes(x))
          ) {
            return "react";
          }
        },
      },
    },
  },
  css: {
    postcss: resolve(root, "configs/postcss.config.js"),
  },
  // dev server
  optimizeDeps: {
    exclude: ["virtual:enrouter"],
  },
  ssr: {
    noExternal: ["enrouter"], // https://vite.dev/guide/ssr.html#ssr-externals
  },
  appType: "custom",
  server: {
    middlewareMode: true,
    hmr: false,
  },
});
