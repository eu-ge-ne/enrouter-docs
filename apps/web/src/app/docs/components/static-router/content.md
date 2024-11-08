# StaticRouter

```ts
interface StaticRouterProps {
  location: string;
  match: Match | undefined;
}

function StaticRouter(props: StaticRouterProps): ReactNode;
```

Renders application in Node.js or on the edge.

Accepts current location and matched routes.

## Example

```tsx
import { matchLocation, StaticRouter } from "enrouter";

export default {
  async fetch(req, env, ctx): Promise<Response> {
    const match = await matchLocation(req.url);

    const stream = await renderToReadableStream(
      <StaticRouter location={req.url} match={match} />,
    );

    return new Response(stream, {
      headers: { "Content-Type": "text/html" },
    });
  },
};
```
