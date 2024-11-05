# \_content.tsx

ES module exporting default object with:

- keys as outlet names
- values as `react` components.

For example:

```tsx
export default {
  Menu,
  Main,
};

function Menu() {
  return (
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
  );
}

function Main() {
  return (
    <p>Hello world</p>
  );
}
```
