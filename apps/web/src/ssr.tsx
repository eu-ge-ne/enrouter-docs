//@ts-ignore
import { renderToReadableStream } from "react-dom/server.edge";
import { debug, matchLocation, StaticRouter } from "enrouter";
import { type ViteManifest, getModuleAssets } from "enrouter/vite/manifest";

import { log } from "#log.js";
import { Shell } from "./shell.js";
import { Root } from "./app/root.js";
import Fallback from "./app/fallback.js";

const mapAssetUrl = (x: string) => new URL(x, "http://localhost").pathname;

export default function createSsrHandler(
  manifest?: ViteManifest,
  isProd?: boolean,
) {
  if (!isProd) {
    debug(console.debug);
  }

  return async function handleSsrRequest(
    req: Request,
    { isBot }: { isBot: boolean },
  ) {
    let status = 200;

    try {
      const controller = new AbortController();
      setTimeout(() => controller.abort(), 1000);

      const location = new URL(req.url, "http://localhost").pathname;

      const matches = await matchLocation(location);
      if (!matches.at(-1)?.route) {
        status = 404;
      }

      let bootstrapStyles: string[] = [];
      let bootstrapModules: string[] = [mapAssetUrl("src/main.tsx")];

      if (manifest) {
        const entryAssets = getModuleAssets({
          manifest,
          moduleId: "src/main.tsx",
        });

        const matchedAssets = matches
          .flatMap((x) => x.route.modules)
          .map((x) =>
            getModuleAssets({
              manifest,
              moduleId: x.id,
            }),
          );

        const assets = [entryAssets, ...matchedAssets].filter(
          (x) => x !== undefined,
        );

        bootstrapStyles = [...new Set(assets.flatMap((x) => x.styles))].map(
          mapAssetUrl,
        );

        bootstrapModules = [
          ...new Set([...assets.flatMap((x) => x.modules)]),
        ].map(mapAssetUrl);
      }

      log("SSR: %o", {
        location,
        status,
        bootstrapModules,
      });

      const children = (
        <Shell styles={bootstrapStyles}>
          <StaticRouter
            root={Root}
            fallback={Fallback}
            location={location}
            matches={matches}
          />
        </Shell>
      );

      const stream = await renderToReadableStream(children, {
        signal: controller.signal,
        bootstrapModules,
        onError(err: unknown) {
          status = 500;
          console.error(err, "renderToReadableStream.onError");
        },
      });

      if (isBot) {
        await stream.allReady;
      }

      return new Response(stream, {
        status,
        headers: { "Content-Type": "text/html" },
      });
    } catch (err) {
      console.error(err);

      return new Response("SSR error", {
        status: 500,
      });
    }
  };
}
