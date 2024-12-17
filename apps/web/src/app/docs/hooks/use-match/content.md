# useMatch

```ts
interface UseMatchResult {
  current: Match | undefined;
  first: Match | undefined;
  next: Match | undefined;
  last: Match | undefined;
  fallback: Match | undefined;
  isExact: boolean;
}

function useMatch(): UseMatchResult;
```

Returns a `UseMatchResult` object that provides detailed information about the current matching state.

The returned object includes the following properties:

- `current`: The current `Match` object, or undefined if no match is found.
- `first`: The first `Match` in the matches array, or undefined if no matches exist.
- `next`: The `Match` object following the current one, or undefined if there are no further matches.
- `last`: The last `Match` in the matches array, or undefined if no matches exist.
- `fallback`: A special `Match` object representing unmatched or fallback cases, or undefined if not applicable.
- `isExact`: Indicates whether the current `Match` is an exact match.
