# Match

```ts
interface Match {
  route?: Route;
  location: string;
  params: Record<string, string>;
}
```

The `Match` object represents a route corresponding to a segment of the location.
It encapsulates the following:

- `route`: The matched route instance (optional).
- `location`: The matched location string.
- `params`: An object containing the route parameters.

You generally don’t need to interact directly with `Match` objects.
Instead, enrouter provides hooks like [useMatch][1], [useMatchFor][2], and [useActive][3]
for convenient access to match lists and related functionality.

[1]: /docs/hooks/use-match
[2]: /docs/hooks/use-match-for
[3]: /docs/hooks/use-active
