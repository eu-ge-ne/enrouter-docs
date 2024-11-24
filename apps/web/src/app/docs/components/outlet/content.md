# Outlet

```ts
interface OutletProps {
  name?: string;
}

function Outlet(props: OutletProps): ReactNode;
```

The `Outlet` component renders elements from the next (or current) matching
route.
It is specifically designed to be used **only** in `_layout` modules.

## Props

- `name`

  The name of the component to render.

  - If provided, renders the component with the specified name.
  - If not provided, renders the first component from the exported object
    entries.

## Rendering behavior

The behavior of `<Outlet />` depends on the current route match:

- Non-exact match

  Renders elements from the next matching route.

- Exact match:

  Renders elements from the current matching route’s `_content` module.

Modules such as `_layout.tsx`, `_content.tsx`, and `_void.tsx` can export
multiple components.
To handle this, the `<Outlet />` component uses the name prop to determine
which component to render.

## Examples

### Anonymous

```tsx
// _layout.tsx

import { Outlet } from "enrouter";

export default {
  Layout,
};

function Layout() {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
```

### Named

```tsx
// _layout.tsx

import { Outlet } from "enrouter";

export default {
  Layout,
};

function Layout() {
  return (
    <div>
      <div>
        <Outlet name="Menu" />
      </div>
      <div>
        <Outlet name="Menu" />
      </div>
    </div>
  );
}
```
