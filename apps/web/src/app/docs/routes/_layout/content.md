# \_layout.tsx

The `_layout.tsx` module defines layout components that are rendered by [Outlets][1].

By convention, layout modules must `export default` an object containing the components.

Outlets select components for rendering based on their names.
The keys in the exported object serve as the component names,
establishing a connection between the components and the corresponding Outlets.

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

[1]: /docs/components/outlet
