"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Toaster } from "@/components/ui/sonner";

export function DeferredWidgets() {
  return (
    <>
      <Toaster />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
