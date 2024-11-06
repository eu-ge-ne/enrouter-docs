# \_layout.tsx

ES module exporting default object with:

- Keys as component names
- Values as layout components.

Layout components are rendered by [Outlets](/docs/api/outlet).

Multiple components can be exported from a single `_layout` module,
thus `<Outlet />` accepts `name` prop:

- If `name` was provided, a component with that name is rendered.
- If `name` was not provided, a first component from object entries is rendered.

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
