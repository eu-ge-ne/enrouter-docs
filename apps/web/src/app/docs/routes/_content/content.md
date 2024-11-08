# \_content.tsx

Module exporting content components which are rendered by
[Outlets](/docs/components/outlet).

By convention, content modules must `export default` object with components.

Outlets select components for rendering by name.
Keys of exported object are the names of components.
They connect components to Outlets.

## Example

```tsx
// _content.tsx

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
