# useLocation

```ts
function useLocation(): string;
```

The `useLocation` hook provides access to the current location string, including the pathname, search, and hash.
This hook is useful for inspecting and reacting to the current URL state.

## Example

```ts
import { useLocation } from "enrouter";

export default {
  Content,
};

function Content() {
  const location = useLocation();

  // ...
}
```
