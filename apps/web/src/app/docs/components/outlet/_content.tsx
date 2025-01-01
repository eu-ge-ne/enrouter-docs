import Content from "./content.md";

export default {
  Docs,
};

function Docs() {
  return (
    <>
      <title>enrouter docs | Outlet component</title>
      <meta
        name="description"
        content="Learn how to use the Outlet component in enrouter to render elements from matching routes dynamically. Explore its behavior, props, and examples for both anonymous and named components in _layout modules."
      />
      <link
        rel="canonical"
        href="https://enrouter.dev/docs/components/outlet"
      />
      <Content />
    </>
  );
}
