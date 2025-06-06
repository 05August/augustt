"use client";

import { Palette } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useCallback } from "react";

import { AVAILABLE_THEMES, getMetaColorForTheme } from "@/config/themes";
import { useMetaColor } from "@/hooks/use-meta-color";

import { Button } from "./ui/button";

export function ToggleThemeBase() {
  const { theme, setTheme } = useTheme();
  const { setMetaColor } = useMetaColor();

  // Get current theme base and variant
  const getCurrentThemeInfo = useCallback(() => {
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

  // Cycle to next theme base while keeping the same variant
  const handleToggle = useCallback(() => {
    const { base: currentBase, variant } = getCurrentThemeInfo();

    const themeKeys = AVAILABLE_THEMES.map((t) => t.key);
    const currentIndex = themeKeys.indexOf(currentBase);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    const nextBase = themeKeys[nextIndex];

    // Always create the themed variant format
    const newTheme = `${nextBase}-${variant}`;
    setTheme(newTheme);
    setMetaColor(getMetaColorForTheme(newTheme));
  }, [getCurrentThemeInfo, setTheme, setMetaColor]);

  // Get current theme colors for the indicator
  const getCurrentThemeColor = useCallback(() => {
    const { base } = getCurrentThemeInfo();
    const themeOption = AVAILABLE_THEMES.find((t) => t.key === base);
    return themeOption?.colors.light.primary || "#000000";
  }, [getCurrentThemeInfo]);

  const getCurrentThemeName = useCallback(() => {
    const { base } = getCurrentThemeInfo();
    const themeOption = AVAILABLE_THEMES.find((t) => t.key === base);
    return themeOption?.name || "Classic";
  }, [getCurrentThemeInfo]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className="relative"
      title={`Current: ${getCurrentThemeName()} - Click to cycle themes`}
    >
      <Palette className="size-4" />

      {/* Color indicator */}
      <div
        className="absolute -right-0.5 -bottom-0.5 size-2 rounded-full ring-1 ring-background"
        style={{ backgroundColor: getCurrentThemeColor() }}
      />

      <span className="sr-only">Toggle Theme Base</span>
    </Button>
  );
}
