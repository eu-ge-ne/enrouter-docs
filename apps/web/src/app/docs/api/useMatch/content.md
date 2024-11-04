# useMatch

```ts
function useMatch(path?: string): Match | undefined;
```

Returns `Match` object.

- If called with `path` argument, returns `Match` for corresponding location.
- If no `path` argument was provided, returns `Match` for current location
