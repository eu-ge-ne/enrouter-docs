import Content from "./content.md";

export default {
  Docs,
};

function Docs() {
  return (
    <>
      <title>enrouter docs | Routes</title>
      <meta
        name="description"
        content="Learn how to define routes in your application using a tree structure of folders and files. Understand the role of _layout.tsx, _content.tsx, and _fallback.tsx files in creating nested and dynamic routes."
      />
      <link rel="canonical" href="https://enrouter.dev/docs/routes" />
      <Content />
    </>
  );
}
