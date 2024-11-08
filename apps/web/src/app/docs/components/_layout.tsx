import { Outlet } from "enrouter";

import { SecondaryLinkItem as Link } from "#app/docs/links.js";

export default {
  Menu,
  Docs: Outlet,
};

function Menu() {
  return (
    <div className="mt-4 border-t border-appBorder">
      <ul className="mt-4 flex flex-col gap-y-2 border-r border-appMenu">
        <Link href="/docs/components/static-router">Static Router</Link>
        <Link href="/docs/components/outlet">Outlet</Link>
      </ul>
    </div>
  );
}
