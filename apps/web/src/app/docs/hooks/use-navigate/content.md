# useNavigate

```ts
type Navigate = (to: string) => void;

function useNavigate(): Navigate;
```

The `useNavigate` hook returns a navigation function that allows you to programmatically change the current URL.

## Example

```ts
import { useNavigate } from "enrouter";

export default {
  Content,
};

function Content() {
  const navigate = useNavigate();

  // ...
}
```
