"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import { MAIN_NAV } from "@/config/site";
import { USER } from "@/data/user";
import { useIsClient } from "@/hooks/use-is-client";
import { decodeEmail } from "@/utils/string";

export function QuickActions() {
  const isClient = useIsClient();

  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    const direction = latestValue - (scrollY.getPrevious() ?? 0);
    setHidden(direction > 0);
  });

  return (
    <>
      <div className="h-14" />

      <motion.div
        className="fixed inset-x-0 bottom-0 z-50 bg-background pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]"
        initial={{ opacity: 1 }}
        animate={{
          opacity: hidden ? 0.5 : 1,
        }}
        whileHover={{
          opacity: 1,
        }}
      >
        <div className="screen-line-before before:z-1">
          <div className="mx-auto px-4 md:max-w-4xl">
            <div className="border-x border-edge pt-2">
              <div className="screen-line-before screen-line-after -mx-px grid grid-cols-[1fr_1fr_2.5rem] gap-2 sm:grid-cols-2 sm:gap-4">
                <Button size="lg" asChild>
                  <a href="/vcard" target="_blank" rel="noopener noreferrer">
                    <DownloadIcon />
                    Save vCard
                  </a>
                </Button>

                <Button size="lg" asChild>
                  <a
                    href={isClient ? `mailto:${decodeEmail(USER.email)}` : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PaperPlaneTiltIcon />
                    Send Email
                  </a>
                </Button>

                <MobileNav className="sm:hidden" items={MAIN_NAV} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function DownloadIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,168,96H136V32a8,8,0,0,0-16,0V96H88a8,8,0,0,0-5.66,13.66Z"></path>
    </svg>
  );
}

function PaperPlaneTiltIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M231.4,44.34s0,.1,0,.15l-58.2,191.94a15.88,15.88,0,0,1-14,11.51q-.69.06-1.38.06a15.86,15.86,0,0,1-14.42-9.15L107,164.15a4,4,0,0,1,.77-4.58l57.92-57.92a8,8,0,0,0-11.31-11.31L96.43,148.26a4,4,0,0,1-4.58.77L17.08,112.64a16,16,0,0,1,2.49-29.8l191.94-58.2.15,0A16,16,0,0,1,231.4,44.34Z"></path>
    </svg>
  );
}
