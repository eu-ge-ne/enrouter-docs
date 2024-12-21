# useLink

```ts
type LinkProps = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
>;

function useLink(href: string): LinkProps;
```

The `useLink` hook provides a programmatic way to create links.
It returns an object containing properties and methods for managing link behavior.

The returned `LinkProps` object includes `href` and `onClick`,
which can be passed to an anchor element or any React component that supports navigation.

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
