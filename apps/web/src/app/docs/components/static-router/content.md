# StaticRouter

```ts
interface StaticRouterProps {
  root?: ComponentType;
  fallback?: Record<string, ComponentType>;
  location: string;
  matches: Match[];
}

function StaticRouter(props: StaticRouterProps): ReactNode;
```

The `StaticRouter` component is designed for server-side rendering in Node.js environments or edge runtimes.
It uses precomputed route matches to render the application for a specific location.

## Props

- `root` (optional): A custom root component that wraps the rendered application, useful for applying shared context or layout.
- `fallback` (optional): A record of placeholder components, keyed by route names, to handle specific scenarios (e.g., missing content).
- `location` (required): The URL location to resolve and render routes.
- `matches` (required): An array of [Match][1] objects representing the routes matched for the current browser location.

## Example

```tsx
import { matchLocation, StaticRouter } from "enrouter";

export default {
  async fetch(req, env, ctx): Promise<Response> {
    const matches = await matchLocation(req.url);

    const stream = await renderToReadableStream(
      <StaticRouter location={req.url} matches={matches} />,
    );

    return new Response(stream, {
      headers: { "Content-Type": "text/html" },
    });
  },
};
```

[1]: /docs/routes/match
