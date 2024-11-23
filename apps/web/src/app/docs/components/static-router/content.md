# StaticRouter

```ts
interface StaticRouterProps {
  root?: ReactElement;
  location: string;
  matches: Match[];
}

function StaticRouter(props: StaticRouterProps): ReactNode;
```

Renders application in Node.js or on the edge.

Accepts root element, current location and matched routes.

## Example

```tsx
import { matchLocation, StaticRouter } from "enrouter";

export default {
  async fetch(req, env, ctx): Promise<Response> {
    const match = await matchLocation(req.url);

    const stream = await renderToReadableStream(
      <StaticRouter location={req.url} matches={matches} />,
    );

    return new Response(stream, {
      headers: { "Content-Type": "text/html" },
    });
  },
};
```
