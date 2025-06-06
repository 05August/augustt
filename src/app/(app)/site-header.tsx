import Link from "next/link";

import { AugusttMark } from "@/components/augustt-mark";
import { BrandContextMenu } from "@/components/brand-context-menu";
import { CommandMenu } from "@/components/command-menu";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { NavItemGitHub } from "@/components/nav-item-github";
import { ToggleTheme } from "@/components/toggle-theme";
import { ToggleThemeBase } from "@/components/toggle-theme-base";
import { MAIN_NAV } from "@/config/site";

export const SiteHeader = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background pt-2">
      <div className="mx-auto px-4 md:max-w-4xl">
        <div className="screen-line-before screen-line-after flex h-12 items-center justify-between gap-4 border-x border-edge px-2">
          <BrandContextMenu>
            <Link href="/" aria-label="Home">
              <AugusttMark className="h-8" />
            </Link>
          </BrandContextMenu>

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
};
