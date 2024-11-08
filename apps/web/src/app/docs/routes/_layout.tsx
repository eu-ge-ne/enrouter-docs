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
        <Link href="/docs/routes/match-location">matchLocation</Link>
        <Link href="/docs/routes/_content">_content.tsx</Link>
        <Link href="/docs/routes/_layout">_layout.tsx</Link>
        <Link href="/docs/routes/_void">_void.tsx</Link>
      </ul>
    </div>
  );
}
