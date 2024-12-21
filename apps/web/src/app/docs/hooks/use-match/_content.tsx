import Content from "./content.md";

export default {
  Docs,
};

function Docs() {
  return (
    <>
      <title>enrouter docs | useMatch hook</title>
      <meta
        name="description"
        content="Learn about the useMatch hook in enrouter. Access detailed matching state information, including current, first, next, last, fallback matches, and exact match status."
      />
      <link rel="canonical" href="https://enrouter.dev/docs/hooks/use-match" />
      <Content />
    </>
  );
}
