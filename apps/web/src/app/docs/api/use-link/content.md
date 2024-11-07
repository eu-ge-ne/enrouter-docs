# useLink

```ts
type LinkProps = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
>;

function useLink(href: string): LinkProps;
```

Returns a props object with `href` and `onClick` which can be passed to
an anchor element or any React component implementing navigation.

## Example

```tsx
import { useLink } from "enrouter";

export default {
  Content,
};

function Content() {
  return <a {...useLink("/")}>Home</a>;
}
```
