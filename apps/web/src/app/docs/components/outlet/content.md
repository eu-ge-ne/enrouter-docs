# Outlet

```ts
interface OutletProps {
  name?: string;
}

function Outlet(props: OutletProps): ReactNode;
```

The `Outlet` component is used to render elements from the next (or current)
matching route.

Outlets can be used only in `_layout` modules.

## Props

- `name`

  An optional name of component to render.

  - If provided, a component with that name is rendered.
  - If not provided, a first component from object entries is rendered.

## Rendering behavior

Rendering behavior depends on current route match:

- If match is not exact, elements from next matching route are rendered
- If match is exact, elements from current matching route's `_content` module
  are rendered.

`_layout.tsx`, `_content.tsx`, `_void.tsx` modules can export multiple
components. Therefore, `<Outlet />` accepts `name` prop:

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
