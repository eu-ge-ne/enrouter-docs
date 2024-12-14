# useActive

```ts
interface UseActiveParams<T> {
  path: string;
  loose?: boolean;
  value: [T, T];
}

function useActive<T>(params: UseActiveParams<T>): T;
```

Determines if a given path is active and returns a corresponding value based on the result.

- If the path is active, it returns the first value from the value array.
- Otherwise, it returns the second value.

This is useful for styling anchors or other elements based on the current location.

## Example

```tsx
import { useLink, useActive } from "enrouter";

export default {
  Content,
};

function Content() {
  const path = "/about";

  const className = useActive({
    path,
    value: ["activeLink", ""],
  });

  return (
    <a className={className} {...useLink(path)}>
      About
    </a>
  );
}
```
