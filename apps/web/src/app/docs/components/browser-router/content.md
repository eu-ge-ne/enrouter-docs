# BrowserRouter

```ts
interface BrowserRouterProps {
  root?: ReactElement;
  matches: Match[];
}

function BrowserRouter(props: BrowserRouterProps): ReactNode;
```

Renders application in browser.

Accepts matched routes in props.

## Example

```tsx
import { matchLocation, BrowserRouter } from "enrouter";

const matches = await matchLocation(window.location.pathname);

hydrateRoot(document, <BrowserRouter matches={matches} />);
```
