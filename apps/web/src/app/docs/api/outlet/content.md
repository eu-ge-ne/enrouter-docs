# Outlet

```ts
interface OutletProps {
  name?: string;
}

function Outlet({ name }: OutletProps): ReactNode;
```

`<Outlet />` renders matching route elements.
It should be used only in `_layout` modules.

Its behavior differs depending on match:

- If parent route is not matched exactly, elements from next matching route will
  be rendered
- If parent route is matched exactly, elements, from parent's route `_content`
  module will be rendered.

Outlets can be named.
