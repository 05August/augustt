"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

import { AugusttMark } from "@/components/augustt-mark";
import { BrandContextMenu } from "@/components/brand-context-menu";
import { MAIN_NAV } from "@/config/site";
import { cn } from "@/lib/cn";

const CommandMenu = dynamic(
  () =>
    import("@/components/command-menu").then((mod) => ({
      default: mod.CommandMenu,
    })),
  { ssr: false }
);

const DesktopNav = dynamic(() =>
  import("@/components/desktop-nav").then((mod) => ({
    default: mod.DesktopNav,
  }))
);

const MobileNav = dynamic(() =>
  import("@/components/mobile-nav").then((mod) => ({
    default: mod.MobileNav,
  }))
);

const NavItemGitHub = dynamic(() =>
  import("@/components/nav-item-github").then((mod) => ({
    default: mod.NavItemGitHub,
  }))
);

const ToggleTheme = dynamic(() =>
  import("@/components/toggle-theme").then((mod) => ({
    default: mod.ToggleTheme,
  }))
);

const ToggleThemeBase = dynamic(() =>
  import("@/components/toggle-theme-base").then((mod) => ({
    default: mod.ToggleThemeBase,
  }))
);

export function SiteHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY >= 200);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background pt-2">
      <div className="mx-auto px-4 md:max-w-4xl">
        <div className="screen-line-before screen-line-after flex h-12 items-center gap-4 border-x border-edge px-2">
          <div
            className={cn(
              "transition-opacity duration-200",
              visible
                ? "visible opacity-100"
                : "pointer-events-none invisible opacity-0"
            )}
          >
            <BrandContextMenu>
              <Link href="/" aria-label="Home">
                <AugusttMark className="h-8" />
              </Link>
            </BrandContextMenu>
          </div>

          <div className="flex-1" />

          <DesktopNav items={MAIN_NAV} />

          <div className="flex items-center gap-2">
            <CommandMenu />
            <NavItemGitHub />
            <ToggleThemeBase />
            <ToggleTheme />
            <MobileNav className="sm:hidden" items={MAIN_NAV} />
          </div>
        </div>
      </div>
    </header>
  );
}
