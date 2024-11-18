import { hydrateRoot } from "react-dom/client";
import * as enrouter from "enrouter";

import "./index.css";
import { log } from "#log.js";
import { Shell } from "./shell.js";
import { Root } from "./app/root.js";

enrouter.debug(console.debug);

declare const window: {
  location: Location;
};

async function main() {
  log("Hydrating DOM");

  const matches = await enrouter.matchLocation(window.location.pathname);

  hydrateRoot(
    document,
    <Shell>
      <enrouter.BrowserRouter root={<Root />} matches={matches} />
    </Shell>,
  );

  log("DOM Hydrated");
}

main();
