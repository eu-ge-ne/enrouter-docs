# Hooks

This page provides an overview of the hooks available in enrouter.
These hooks are designed to simplify navigation, location handling, and route matching in your application.

To use these hooks, import them from the library in your React component
and integrate them according to your navigation and routing needs:

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

  Determines whether a given route is currently active.
  Useful for setting active states on navigation links or elements.

- [useLink](/docs/hooks/use-link)

  Provides a way to create links programmatically.
  This hook returns an object containing properties and methods for managing link behavior.

- [useLocation](/docs/hooks/use-location)

  Access the current location object, including the pathname, search, and hash.
  This hook is helpful for inspecting and reacting to the current URL state.

- [useMatch](/docs/hooks/use-match)

  Matches the current location and returns match details.

- [useMatchFor](/docs/hooks/use-match-for)

  Matches the current location against a specific route pattern and returns the `Match` object.
  This hook is useful when working with route groups or nested routes.

- [useNavigate](/docs/hooks/use-navigate)

  Programmatically navigate to a new route.
  This hook provides a function to change the current URL without a link component.
