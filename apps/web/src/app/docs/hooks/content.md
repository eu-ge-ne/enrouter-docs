# Hooks

This page provides an overview of the hooks available in enrouter.
These hooks are designed to simplify navigation, location handling, and route matching in your application.

To use these hooks, import them into your React component and integrate them
according to your application’s navigation and routing needs:

```ts
import {
  useActive,
  useLink,
  useLocation,
  useMatch,
  useMatchFor,
  useNavigate,
} from "enrouter";
```

- [useActive](/docs/hooks/use-active)

  Determines whether a specific route is currently active.
  Useful for setting active states on navigation links or elements.

- [useLink](/docs/hooks/use-link)

  Provides a way to create links programmatically.
  This hook returns an object with properties and methods for managing link behavior.

- [useLocation](/docs/hooks/use-location)

  Accesses the current location object, including the pathname, search, and hash.
  This hook is helpful for inspecting and reacting to the current URL state.

- [useMatch](/docs/hooks/use-match)

  Matches the current location and returns detailed match information.

- [useMatchFor](/docs/hooks/use-match-for)

  Matches the current location against a specific route pattern and returns a `Match` object.
  This hook is particularly useful when working with route groups or nested routes.

- [useNavigate](/docs/hooks/use-navigate)

  Provides a function to programmatically navigate to a new route.
  This hook allows URL changes without using a link component.
