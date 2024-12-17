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
        <Link href="/docs/hooks/use-active">useActive</Link>
        <Link href="/docs/hooks/use-link">useLink</Link>
        <Link href="/docs/hooks/use-location">useLocation</Link>
        <Link href="/docs/hooks/use-matches">useMatches</Link>
        <Link href="/docs/hooks/use-match-for">useMatchFor</Link>
        <Link href="/docs/hooks/use-navigate">useNavigate</Link>
      </ul>
    </div>
  );
}
