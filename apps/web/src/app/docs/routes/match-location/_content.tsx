import Content from "./content.md";

export default {
  Docs,
};

function Docs() {
  return (
    <>
      <title>enrouter docs | matchLocation</title>
      <meta
        name="description"
        content="Learn about the matchLocation function in enrouter. Generate Match objects for a given location to support SSR, UI hydration, and navigation updates with examples."
      />
      <link
        rel="canonical"
        href="https://enrouter.dev/docs/routes/match-location"
      />
      <Content />
    </>
  );
}
