import { useLink } from "enrouter";

import { log } from "#log.js";
import { GitHub } from "#svg/github.js";

export default {
  Content,
};

function Content() {
  log("Rendering: /_content");

  return (
    <>
      <title>enrouter | Home</title>
      <meta name="description" content="File-based router library for React" />
      <link rel="canonical" href="https://enrouter.dev" />
      <div className="fixed bottom-0 left-0 right-0 top-0 -z-10 flex flex-col items-center justify-center gap-8 p-4">
        <p className="max-w-[30rem] text-center">
          Router library for React and a Vite plugin,
          <br />
          enabling seamless file-based routing
          <br />
          with support for "named outlets"
        </p>
        <p className="max-w-[30rem] text-center text-sm italic">
          enrouter is still in its early development stages
          <br />
          and not yet ready for production.
          <br />
          It's just beginning to take shape, so stay tuned for updates!
        </p>
        <div className="flex justify-center gap-8">
          <a
            className="rounded-md border border-appButtonBorder bg-appButtonBg px-4 py-2 text-sm"
            {...useLink("/docs/start")}
          >
            Get Started
          </a>
          <a
            className="flex items-center gap-2 rounded-md border border-appButtonBorder px-4 py-2 text-sm"
            href="https://github.com/eu-ge-ne/enrouter"
            target="_blank"
          >
            <GitHub size="1rem" />
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}
