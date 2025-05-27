"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import { BrandContextMenu } from "@/components/brand-context-menu";
import { ChanhDaiMark } from "@/components/chanhdai-mark";
import { CommandMenu } from "@/components/command-menu";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { NavItemGitHub } from "@/components/nav-item-github";
import { ToggleTheme } from "@/components/toggle-theme";
import { MAIN_NAV } from "@/config/site";

export function SiteHeader() {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= 200);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background pt-2">
      <div className="mx-auto px-4 md:max-w-4xl">
        <div className="screen-line-before screen-line-after flex h-12 items-center gap-4 border-x border-edge px-2">
          <motion.div
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={{
              opacity: visible ? 1 : 0,
              visibility: visible ? "visible" : "hidden",
            }}
          >
            <BrandContextMenu>
              <Link href="/" aria-label="Home">
                <ChanhDaiMark className="h-8" />
              </Link>
            </BrandContextMenu>
          </motion.div>

          <div className="flex-1" />

          <DesktopNav items={MAIN_NAV} />

          <div className="flex items-center gap-2">
            <CommandMenu />
            <NavItemGitHub />
            <ToggleTheme />
            <MobileNav className="sm:hidden" items={MAIN_NAV} />
          </div>
        </div>
      </div>
    </header>
  );
}
