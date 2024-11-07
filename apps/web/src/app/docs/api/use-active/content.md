# useActive

```ts
interface UseActiveParams<T> {
  path: string;
  loose?: boolean;
  value: [T, T];
}

function useActive<T>({ path, loose, value }: UseActiveParams<T>): T;
```
