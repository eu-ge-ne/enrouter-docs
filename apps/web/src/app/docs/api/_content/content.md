# \_content.tsx

ES module exporting default object with:

- Keys as component names
- Values as content components.

Content components are rendered by [Outlets](/docs/api/outlet).

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
  return <p>Hello world</p>;
}
```
