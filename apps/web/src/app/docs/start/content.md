# Get Started

## Scaffold project

Create a new Vite project using the `react-ts` template and run it:

```bash
pnpm create vite enrouter-demo --template react-ts

cd enrouter-demo

pnpm install
pnpm dev
```

This sets up a basic single-page React application with a single route (`/`).
On this page, you can click a button to increment a counter:

![Start 0](/start-0.png "Start 0")

Next, let’s add another page with the same layout but different behavior:
instead of incrementing the counter, the button will decrement it.

We’ll move the original page to `/incr`, and the new page you’ll create will be located at `/decr`.

Finally, we’ll create a home page with links to both routes.

## Install enrouter

Install enrouter using:

```bash
pnpm add enrouter
```

Then, add the enrouter plugin to your `vite.config.ts`:

```ts
// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import enrouter from "enrouter/vite/plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), enrouter({ path: "src/app" })],
});
```

The `src/app` folder will contain your route components.

Lastly, include the [BrowserRouter][1] component in the `src/main.tsx` entry file:

```tsx
// src/main.tsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { matchLocation, BrowserRouter } from "enrouter";

import "./index.css";

async function main() {
  const match = await matchLocation(window.location.pathname);

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter match={match} />
    </StrictMode>,
  );
}

main();
```

## Define routes

Visit [Routes][2] for detailed information about how routing works.

### \_layout.tsx

First, create a `_layout.tsx` file to define the shared styles and layout for child routes.
You can reuse the existing `App.tsx` file for this purpose, adding navigation links to it.
Move `App.tsx` to `src/app/_layout.tsx` and modify it as follows:

```tsx
// src/app/_layout.tsx

import { Outlet, useLink } from "enrouter";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles.css";

export default function Layout() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ul className="menu">
        <li>
          <a {...useLink("/")}>Home</a>
        </li>
        <li>
          <a {...useLink("/incr")}>Increment</a>
        </li>
        <li>
          <a {...useLink("/decr")}>Decrement</a>
        </li>
      </ul>
      <div className="card">
        <Outlet />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
```

Additionally, move `App.css` to `src/app/styles.css` and add the following styles for the menu:

```css
/* src/app/styles.css */

/* ... */

.menu {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
}
```

### \_content.tsx

Create `_content.tsx` files for the `/incr` and `/decr` routes.
These files will define the specific behavior for each route.

Here’s the content for `/incr`:

```tsx
// src/app/incr/_content.tsx

import { useState } from "react";

export default function Incr() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/app/incr/_content.tsx</code> and save to test HMR
      </p>
    </>
  );
}
```

And here’s the content for `/decr`:

```tsx
// src/app/decr/_content.tsx

import { useState } from "react";

export default function Decr() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count - 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/app/decr/_content.tsx</code> and save to test HMR
      </p>
    </>
  );
}
```

The final result should look like this:

![Start 1](/start-1.png "Start 1")

## GitHub repository

You can also clone the [examples][3] GitHub repository to your local machine and experiment with it.

[1]: /docs/components/browser-router
[2]: /docs/routes
[3]: https://github.com/eu-ge-ne/enrouter-examples
