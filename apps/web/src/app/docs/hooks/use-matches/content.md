# useMatches

```ts
interface Matches {
  matches: Match[];
  matchIndex: number;
  match: Match | undefined;
  firstMatch: Match | undefined;
  nextMatch: Match | undefined;
  lastMatch: Match | undefined;
  voidMatch: Match | undefined;
  isExactMatch: boolean;
}

function useMatches(): Matches;
```

Returns a `Matches` object that provides detailed information about the current matching state.

The returned object includes the following properties:

- `matches`: An array of all `Match` objects for the current context,
- `matchIndex`: The index of the current `Match` in the matches array,
- `match`: The current `Match` object, or undefined if no match is found.
- `firstMatch`: The first `Match` in the matches array, or undefined if no matches exist.
- `nextMatch`: The `Match` object following the current one, or undefined if there are no further matches.
- `lastMatch`: The last `Match` in the matches array, or undefined if no matches exist.
- `voidMatch`: A special `Match` object representing unmatched or fallback cases, or undefined if not applicable.
- `isExactMatch`: Indicates whether the current `Match` is an exact match.
