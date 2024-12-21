import Content from "./content.md";

export default {
  Docs,
};

function Docs() {
  return (
    <>
      <title>enrouter docs | useLocation hook</title>
      <meta
        name="description"
        content="Learn about the useLocation hook in enrouter. Access the current URL's pathname, search, and hash to inspect and react to the application's state with ease."
      />
      <link
        rel="canonical"
        href="https://enrouter.dev/docs/hooks/use-location"
      />
      <Content />
    </>
  );
}
