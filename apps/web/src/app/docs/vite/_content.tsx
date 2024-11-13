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
        content="enrouter comes with Vite plugin for generating routes from file system"
      />
      <link rel="canonical" href="https://enrouter.dev/docs/vite" />
      <Content />
    </>
  );
}
