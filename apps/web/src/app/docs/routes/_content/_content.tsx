import Content from "./content.md";

export default {
  Docs,
};

function Docs() {
  return (
    <>
      <title>enrouter docs | _content route</title>
      <meta
        name="description"
        content="Discover the _content.tsx module in enrouter, used to define content components rendered by Outlets. Learn how to export components, connect them to Outlets, and see a practical example."
      />
      <link rel="canonical" href="https://enrouter.dev/docs/routes/_content" />
      <Content />
    </>
  );
}
