"use client";

import { AppProgressProvider } from "@bprogress/next";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";

import { DEFAULT_THEME, getAllThemeKeys } from "@/config/themes";

const DeferredWidgets = dynamic(
  () =>
    import("@/components/deferred-widgets").then((mod) => ({
      default: mod.DeferredWidgets,
    })),
  { ssr: false }
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      disableTransitionOnChange
      enableColorScheme
      storageKey="augustt.theme"
      defaultTheme={DEFAULT_THEME}
      attribute="class"
      themes={getAllThemeKeys()}
    >
      <AppProgressProvider
        color="#2563eb"
        height="2px"
        delay={500}
        options={{ showSpinner: false }}
      >
        {children}
      </AppProgressProvider>

      <DeferredWidgets />
    </ThemeProvider>
  );
}
