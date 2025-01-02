# \_content.tsx

The `_content.tsx` module defines content components that are rendered by [Outlets][1].

By convention, content modules must `export default` an object containing the components.

Outlets select components for rendering based on their names.
The keys in the exported object serve as the component names,
creating a connection between the components and the corresponding Outlets.

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

[1]: /docs/components/outlet
