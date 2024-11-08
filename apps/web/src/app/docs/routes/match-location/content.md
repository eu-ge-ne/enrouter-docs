# matchLocation

```ts
function matchLocation(location: string): Promise<Match | undefined>;
```

Creates `Match` objects for provided location.

This is the core function of `enrouter`. Every time you need to produce SSR
response or hydrate UI or update UI when a link clicked you use this function,
explicitly or implicitly.

## Examples

### SSR

```tsx
import { matchLocation, StaticRouter } from "enrouter";

const match = await matchLocation(req.url);

const stream = await React.renderToReadableStream(
  <StaticRouter location={req.url} match={match} />,
);

return new Response(stream, {
  status: 200,
  headers: { "Content-Type": "text/html" },
});
```

### Hydrate

```tsx
import { matchLocation, BrowserRouter } from "enrouter";

const match = await matchLocation(window.location.pathname);

React.hydrateRoot(document, <BrowserRouter match={match} />);
```

## Match

`Match` represents route, matching some segment of a location.
It encapsulates location, parameters, route instance and links to first, last,
previous and next items in the list of route matches.

For example if location `/docs/api` was matched we get a list of `Match`
objects, containing 3 items:

- match for `/`
- match for `/docs`
- match for `/docs/api`

You rarely need to use `Match` directly. For your convenience there are several
hooks for working with `Match` list: `useMatch`, `useActive` etc.
