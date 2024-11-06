# \_layout.tsx

ES module exporting default object with:

- Keys as component names
- Values as layout components.

Layout components are rendered by [Outlet](/docs/api/outlet) components.

Multiple components can be exported from a single `_layout` module,
thus `<Outlet />` accepts `name` prop:

- If `name` was provided, a component with that name is rendered.
- If `name` was not provided, a first component from object entries is rendered.
