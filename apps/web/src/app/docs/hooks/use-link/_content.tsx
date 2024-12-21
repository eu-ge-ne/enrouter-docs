import Content from "./content.md";

export default {
  Docs,
};

function Docs() {
  return (
    <>
      <title>enrouter docs | useLink hook</title>
      <meta
        name="description"
        content="Learn about the useLink hook in enrouter. Create links programmatically by generating href and onClick props for anchor elements or navigation components."
      />
      <link rel="canonical" href="https://enrouter.dev/docs/hooks/use-link" />
      <Content />
    </>
  );
}
