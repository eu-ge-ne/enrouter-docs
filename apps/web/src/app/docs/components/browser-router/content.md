# BrowserRouter

```ts
interface BrowserRouterProps {
  root?: ComponentType;
  void?: Record<string, ComponentType>;
  matches: Match[];
}

function BrowserRouter(props: BrowserRouterProps): ReactNode;
```

The `BrowserRouter` component is used to render your application in a browser
environment.

## Props

- `root`

  An optional root element to wrap the rendered application.

- `matches`

  An array of matched routes for the given location.

## Example

```tsx
import { matchLocation, BrowserRouter } from "enrouter";

const matches = await matchLocation(window.location.pathname);

hydrateRoot(document, <BrowserRouter matches={matches} />);
```
