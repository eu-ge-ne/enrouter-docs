# useActive

```ts
interface UseActiveParams<T> {
  path: string;
  loose?: boolean;
  value: [T, T];
}

function useActive<T>({ path, loose, value }: UseActiveParams<T>): T;
```

If path is active, returns first value. Otherwise, returns second value.
Can be used to style anchors or other elements depending on current location.

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
