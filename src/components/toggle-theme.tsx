"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useCallback } from "react";

import { getMetaColorForTheme } from "@/config/themes";
import { useMetaColor } from "@/hooks/use-meta-color";

import { Button } from "./ui/button";

export function ToggleTheme() {
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

  // Toggle between light and dark variant of current theme base
  const handleToggle = useCallback(() => {
    const { base, variant } = getCurrentThemeInfo();

    // If system theme, convert to classic-light
    if (theme === "system") {
      const newTheme = "classic-light";
      setTheme(newTheme);
      setMetaColor(getMetaColorForTheme(newTheme));
      return;
    }

    // If basic light/dark themes, convert to classic themed variants
    if (theme === "light") {
      const newTheme = "classic-dark";
      setTheme(newTheme);
      setMetaColor(getMetaColorForTheme(newTheme));
      return;
    }

    if (theme === "dark") {
      const newTheme = "classic-light";
      setTheme(newTheme);
      setMetaColor(getMetaColorForTheme(newTheme));
      return;
    }

    // Toggle variant in current theme base
    const newVariant = variant === "light" ? "dark" : "light";
    const newTheme = `${base}-${newVariant}`;

    setTheme(newTheme);
    setMetaColor(getMetaColorForTheme(newTheme));
  }, [theme, getCurrentThemeInfo, setTheme, setMetaColor]);

  // Get current variant for display
  const getCurrentVariant = useCallback(() => {
    const { variant } = getCurrentThemeInfo();
    return variant;
  }, [getCurrentThemeInfo]);

  const currentVariant = getCurrentVariant();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      title={`Current: ${currentVariant} - Click to toggle light/dark`}
    >
      <MoonStarIcon
        className={`size-4 ${currentVariant === "light" ? "block" : "hidden"}`}
      />
      <SunIcon
        className={`size-4 ${currentVariant === "dark" ? "block" : "hidden"}`}
      />
      <span className="sr-only">Toggle Light/Dark</span>
    </Button>
  );
}
