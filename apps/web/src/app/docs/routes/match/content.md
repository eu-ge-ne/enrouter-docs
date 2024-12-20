# Match

```ts
interface Match {
  route?: Route;
  location: string;
  params: Record<string, string>;
}
```

The `Match` object represents a route corresponding to a segment of the location.
It encapsulates:

- `route`: The matched route instance.
- `location`: The matched location string.
- `params`: An object containing the route parameters.

You generally don’t need to work directly with `Match` objects.
Instead, `enrouter` provides hooks like `useMatch` and `useActive` for convenient access to the match
list and associated functionality.
