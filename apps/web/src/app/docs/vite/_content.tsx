import Content from "./content.md";

export default {
  Docs,
};

function Docs() {
  return (
    <>
      <title>enrouter docs | Vite</title>
      <meta
        name="description"
        content="Learn how to use the enrouter Vite plugin to generate routes automatically from your file system structure. Configure it easily with a single path parameter and streamline your React app development."
      />
      <link rel="canonical" href="https://enrouter.dev/docs/vite" />
      <Content />
    </>
  );
}
