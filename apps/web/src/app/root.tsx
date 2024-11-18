import { Outlet } from "enrouter";

import { log } from "#log.js";

export function Root() {
  log("Rendering: /root");

  return (
    <div className="flex flex-col divide-y divide-appBorder">
      <Outlet />
    </div>
  );
}
