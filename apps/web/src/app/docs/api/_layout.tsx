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
        <Link href="/docs/api/match-location">matchLocation</Link>
        <Link href="/docs/api/outlet">Outlet</Link>
        <Link href="/docs/api/use-link">useLink</Link>
        <Link href="/docs/api/use-location">useLocation</Link>
        <Link href="/docs/api/use-match">useMatch</Link>
        <Link href="/docs/api/use-navigate">useNavigate</Link>
        <Link href="/docs/api/_content">_content.tsx</Link>
        <Link href="/docs/api/_layout">_layout.tsx</Link>
        <Link href="/docs/api/_void">_void.tsx</Link>
      </ul>
    </div>
  );
}
