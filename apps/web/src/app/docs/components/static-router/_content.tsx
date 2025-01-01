import Content from "./content.md";

export default {
  Docs,
};

function Docs() {
  return (
    <>
      <title>enrouter docs | StaticRouter component</title>
      <meta
        name="description"
        content="Learn about the StaticRouter component in enrouter, designed for server-side rendering in Node.js or edge runtimes. Explore its props, including root, fallback, location, and matches, with a practical implementation example."
      />
      <link
        rel="canonical"
        href="https://enrouter.dev/docs/components/static-router"
      />
      <Content />
    </>
  );
}
