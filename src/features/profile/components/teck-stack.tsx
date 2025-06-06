"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import React, { useMemo } from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/cn";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  const { theme } = useTheme();

  // Get current theme base and variant
  const currentThemeInfo = useMemo(() => {
    if (!theme || theme === "system") {
      return { base: "classic", variant: "light" };
    }

    if (theme === "light") {
      return { base: "classic", variant: "light" };
    }

    if (theme === "dark") {
      return { base: "classic", variant: "dark" };
    }

    if (theme.includes("-")) {
      const [base, variant] = theme.split("-");
      return { base, variant: variant as "light" | "dark" };
    }

    return { base: "classic", variant: "light" };
  }, [theme]);

  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <div className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((item) => {
            return (
              <SimpleTooltip key={item.key} content={item.title}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.title}
                >
                  {item.theme ? (
                    <>
                      <Image
                        src={`/assets/icons/tech-stack/${item.key}-${currentThemeInfo.variant}.svg`}
                        alt={`${item.title} ${currentThemeInfo.variant} icon`}
                        width={32}
                        height={32}
                        unoptimized
                      />
                    </>
                  ) : (
                    <Image
                      src={`/assets/icons/tech-stack/${item.key}.svg`}
                      alt={`${item.title} icon`}
                      width={32}
                      height={32}
                      unoptimized
                    />
                  )}
                </a>
              </SimpleTooltip>
            );
          })}
        </div>
      </PanelContent>
    </Panel>
  );
}
