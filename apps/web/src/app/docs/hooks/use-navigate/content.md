# useNavigate

```ts
type Navigate = (to: string) => void;

function useNavigate(): Navigate;
```

Returns navigate function.

## Example

```tsx
import { useNavigate } from "enrouter";

export default {
  Content,
};

function Content() {
  const navigate = useNavigate();

  // ...
}
```
