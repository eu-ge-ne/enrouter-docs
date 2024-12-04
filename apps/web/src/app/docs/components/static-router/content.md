# StaticRouter

```ts
interface StaticRouterProps {
  root?: ComponentType;
  void?: Record<string, ComponentType>;
  location: string;
  matches: Match[];
}

function StaticRouter(props: StaticRouterProps): ReactNode;
```

The `StaticRouter` component renders your application in a Node.js environment
or at the edge.

## Props

- `root`

  An optional root element to wrap the rendered application.

- `location`

  The current URL location to resolve routes.

- `matches`

  An array of matched routes for the given location.

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
