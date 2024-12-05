# BrowserRouter

```ts
interface BrowserRouterProps {
  root?: ComponentType;
  void?: Record<string, ComponentType>;
  matches: Match[];
}

function BrowserRouter(props: BrowserRouterProps): ReactNode;
```

The `BrowserRouter` component is used to render your application in a browser environment,
enabling client-side navigation based on precomputed route matches.

## Props

- `root` (optional): A custom root component that wraps the rendered application, useful for applying shared context or layout.
- `void` (optional): A record of placeholder components, keyed by route names, to handle specific scenarios (e.g., missing content).
- `matches` (required): An array of Match objects representing the routes matched for the current browser location.

## Example

```tsx
import { matchLocation, BrowserRouter } from "enrouter";

const matches = await matchLocation(window.location.pathname);

hydrateRoot(document, <BrowserRouter matches={matches} />);
```
