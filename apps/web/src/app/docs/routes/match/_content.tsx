import Content from "./content.md";

export default {
  Docs,
};

function Docs() {
  return (
    <>
      <title>enrouter docs | Match object</title>
      <meta
        name="description"
        content="Discover the Match interface in enrouter. Learn how it represents a route segment with details about routes, locations, and parameters, and explore hooks like useMatch, useMatchFor, and useActive for easy access."
      />
      <link rel="canonical" href="https://enrouter.dev/docs/routes/match" />
      <Content />
    </>
  );
}
