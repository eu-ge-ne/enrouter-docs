import Content from "./content.md";

export default {
  Docs,
};

function Docs() {
  return (
    <>
      <title>enrouter docs | _fallback route</title>
      <meta
        name="description"
        content="Learn how to define fallback components in _fallback.tsx for dynamic rendering with Outlets. Explore how to link components to Outlets using named exports for seamless routing."
      />
      <link rel="canonical" href="https://enrouter.dev/docs/routes/_fallback" />
      <Content />
    </>
  );
}
