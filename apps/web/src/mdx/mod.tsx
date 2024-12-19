import { type PropsWithChildren, useEffect, useRef } from "react";
import { MDXProvider } from "@mdx-js/react";
import { useLocation, useLink } from "enrouter";

export function Mdx({ children }: PropsWithChildren) {
  return (
    <div className="prose prose-neutral prose-invert max-w-[80ch]">
      <MDXProvider
        components={{
          a: ({ children, href }) => {
            if (href?.startsWith("/")) {
              return (
                <a className="underline" {...useLink(href)}>
                  {children as any}
                </a>
              );
            } else {
              return (
                <a className="underline" href={href}>
                  {children as any}
                </a>
              );
            }
          },
          code: ({ className, children }) => {
            if (className?.includes("language-mermaid")) {
              return <Mermaid>{children as any}</Mermaid>;
            }

            return <Code className={className}>{children as any}</Code>;
          },
        }}
      >
        {children}
      </MDXProvider>
    </div>
  );
}

export function Code({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  const location = useLocation();

  const div = useRef<HTMLDivElement>(null);

  if (!import.meta.env.SSR) {
    useEffect(() => {
      const el = div.current;
      if (el) {
        (async () => {
          const { runPrism } = await import("./prism.js");
          runPrism(el, className);
        })();
      }
    }, [location, div]);
  }

  return (
    <code className={className} ref={div}>
      {children}
    </code>
  );
}

export function Mermaid({ children }: PropsWithChildren) {
  const location = useLocation();

  const div = useRef<HTMLDivElement>(null);

  if (!import.meta.env.SSR) {
    useEffect(() => {
      const el = div.current;
      if (el) {
        (async () => {
          const { runMermaid } = await import("./mermaid.js");
          runMermaid(el);
        })();
      }
    }, [location, div]);
  }

  return (
    <code className="mermaid" ref={div}>
      {children}
    </code>
  );
}
