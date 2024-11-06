# \_layout.tsx

Module exporting layout components which are rendered by
[Outlets](/docs/api/outlet).

By convention, layout modules must `export default` object with components.

Outlets select components for rendering by name.
Keys of exported object are the names of components.
They connect components to Outlets.

## Example

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
