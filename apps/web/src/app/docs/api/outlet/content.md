# Outlet

```tsx
interface OutletProps {
  name?: string;
}

function Outlet({ name }: OutletProps): ReactNode;
```

Renders elements from next (or current) matching route.

Rendering behavior depends on current route match:

- If match is not exact, elements from next matching route are rendered
- If match is exact, elements from current matching route's `_content` module
  are rendered.

Outlets can be named:

- If `name` was provided, a component with that name is rendered.
- If `name` was not provided, a first component from object entries is rendered.

Outlets can be used only in `_layout` modules.

## Examples

### Unnamed

```tsx
<Outlet />
```

### Named

```tsx
<Outlet name="..." />
```
