import Content from "./content.md";

export default {
  Docs,
};

function Docs() {
  return (
    <>
      <title>enrouter docs | Hooks</title>
      <meta
        name="description"
        content="Explore the React hooks available in enrouter, including useActive, useLink, useLocation, useMatch, useMatchFor, and useNavigate. Simplify navigation, location handling, and route matching in your application."
      />
      <link rel="canonical" href="https://enrouter.dev/docs/hooks" />
      <Content />
    </>
  );
}
