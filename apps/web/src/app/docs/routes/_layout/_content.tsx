import Content from "./content.md";

export default {
  Docs,
};

function Docs() {
  return (
    <>
      <title>enrouter docs | _layout route</title>
      <meta
        name="description"
        content="Learn about the _layout.tsx module in enrouter, used to define layout components rendered by Outlets. Explore how to export components and connect them to Outlets with a practical example."
      />
      <link rel="canonical" href="https://enrouter.dev/docs/routes/_layout" />
      <Content />
    </>
  );
}
