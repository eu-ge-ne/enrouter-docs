# BrowserRouter

```ts
interface BrowserRouterProps {
  match: Match | undefined;
}

function BrowserRouter(props: BrowserRouterProps): ReactNode;
```

Renders application in browser.

Accepts matched routes in props.

## Example

```tsx
import { matchLocation, BrowserRouter } from "enrouter";

const match = await matchLocation(window.location.pathname);

hydrateRoot(document, <BrowserRouter match={match} />);
```
