import { useTheme } from "next-themes";
import * as React from "react";

import { getMetaColorForTheme } from "@/config/themes";

export function useMetaColor() {
  const { resolvedTheme } = useTheme();

  const metaColor = React.useMemo(() => {
    return getMetaColorForTheme(resolvedTheme || "light");
  }, [resolvedTheme]);

  const setMetaColor = React.useCallback((color: string) => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", color);
  }, []);

  return {
    metaColor,
    setMetaColor,
  };
}
