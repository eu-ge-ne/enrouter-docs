# matchLocation

```ts
function matchLocation(location: string): Promise<Match[]>;
```

Generates a list of [Match][1] objects for a given location.

This function is the backbone of enrouter.
It is invoked, either explicitly or implicitly, whenever you need to:

- Render a server-side response (SSR).
- Hydrate the user interface.
- Update the UI in response to link navigation.

## Examples

For the location `/docs/api`, `matchLocation` generates a list of [Match][1] objects corresponding to:

1. `/`
2. `/docs`
3. `/docs/api`

### Server-Side Rendering (SSR)

```tsx
import { matchLocation, StaticRouter } from "enrouter";

const matches = await matchLocation(req.url);

const stream = await React.renderToReadableStream(
  <StaticRouter location={req.url} matches={matches} />,
);

return new Response(stream, {
  status: 200,
  headers: { "Content-Type": "text/html" },
});
```

### Hydration

```tsx
import { matchLocation, BrowserRouter } from "enrouter";

const matches = await matchLocation(window.location.pathname);

React.hydrateRoot(document, <BrowserRouter matches={matches} />);
```

[1]: /docs/routes/match
