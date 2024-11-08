# useLocation

```ts
function useLocation(): string;
```

Returns current location.

## Example

```tsx
import { useLocation } from "enrouter";

export default {
  Content,
};

function Content() {
  const location = useLocation();

  // ...
}
```
