# Components

enrouter's philosophy prefers hooks to components.

Therefore, the provided components include only the absolute minimum needed for
any application:

- [StaticRouter](/docs/components/static-router)

  A router component used on a server.
  Renders matched routes once and does not react to navigation events.

- [BrowserRouter](/docs/components/browser-router)

  A router component used in a browser.
  Reacts to navigation events and re-renders matched routes.

- [Outlet](/docs/components/outlet)

  An outlet component that serves as a placeholder for rendering child routes.
