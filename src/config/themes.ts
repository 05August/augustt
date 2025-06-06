export type ThemeVariant = "light" | "dark";

export type ThemeColors = {
  background: string;
  foreground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  card: string;
  popover: string;
  popoverForeground: string;
  accent: string;
  accentForeground: string;
  border: string;
  input: string;
  ring: string;
  info: string;
  success: string;
  destructive: string;
  link: string;
  meta: string;
};

export type ThemeOption = {
  key: string; // e.g., "neon", "ocean"
  name: string; // e.g., "Neon", "Ocean"
  description: string;
  colors: {
    light: ThemeColors;
    dark: ThemeColors;
  };
  preview?: {
    light: string;
    dark: string;
  };
};

export const AVAILABLE_THEMES: ThemeOption[] = [
  {
    key: "classic",
    name: "Classic",
    description: "Timeless neutral theme",
    colors: {
      light: {
        background: "#ffffff",
        foreground: "#09090b",
        primary: "#18181b",
        primaryForeground: "#fafafa",
        secondary: "#f4f4f5",
        secondaryForeground: "#18181b",
        muted: "#f4f4f5",
        mutedForeground: "#71717a",
        card: "#ffffff",
        popover: "#ffffff",
        popoverForeground: "#09090b",
        accent: "#f4f4f5",
        accentForeground: "#18181b",
        border: "#e4e4e7",
        input: "#e4e4e7",
        ring: "#18181b",
        info: "#3b82f6",
        success: "#22c55e",
        destructive: "#ef4444",
        link: "#3b82f6",
        meta: "#ffffff",
      },
      dark: {
        background: "#09090b",
        foreground: "#fafafa",
        primary: "#fafafa",
        primaryForeground: "#09090b",
        secondary: "#27272a",
        secondaryForeground: "#fafafa",
        muted: "#27272a",
        mutedForeground: "#a1a1aa",
        card: "#09090b",
        popover: "#09090b",
        popoverForeground: "#fafafa",
        accent: "#27272a",
        accentForeground: "#fafafa",
        border: "#27272a",
        input: "#27272a",
        ring: "#d4d4d8",
        info: "#3b82f6",
        success: "#22c55e",
        destructive: "#ef4444",
        link: "#60a5fa",
        meta: "#09090b",
      },
    },
  },
  {
    key: "neon",
    name: "Neon",
    description: "Vibrant cyberpunk theme",
    colors: {
      light: {
        background: "#fafafa",
        foreground: "#0a0a0a",
        primary: "#00ff88",
        primaryForeground: "#000000",
        secondary: "#f0fff4",
        secondaryForeground: "#16a34a",
        muted: "#f0fff4",
        mutedForeground: "#22c55e",
        card: "#ffffff",
        popover: "#ffffff",
        popoverForeground: "#0a0a0a",
        accent: "#ecfdf5",
        accentForeground: "#15803d",
        border: "#bbf7d0",
        input: "#bbf7d0",
        ring: "#00ff88",
        info: "#06b6d4",
        success: "#00ff88",
        destructive: "#ff0066",
        link: "#00ff88",
        meta: "#fafafa",
      },
      dark: {
        background: "#0a0a0a",
        foreground: "#00ff88",
        primary: "#00ff88",
        primaryForeground: "#000000",
        secondary: "#1a1a1a",
        secondaryForeground: "#00ff88",
        muted: "#1a1a1a",
        mutedForeground: "#22c55e",
        card: "#0f0f0f",
        popover: "#0f0f0f",
        popoverForeground: "#00ff88",
        accent: "#1a1a1a",
        accentForeground: "#00ff88",
        border: "#22c55e",
        input: "#1a1a1a",
        ring: "#00ff88",
        info: "#00d4ff",
        success: "#00ff88",
        destructive: "#ff0066",
        link: "#00ffaa",
        meta: "#0a0a0a",
      },
    },
  },
  {
    key: "ocean",
    name: "Ocean",
    description: "Calm blue ocean theme",
    colors: {
      light: {
        background: "#f0f9ff",
        foreground: "#0c4a6e",
        primary: "#0ea5e9",
        primaryForeground: "#f0f9ff",
        secondary: "#e0f2fe",
        secondaryForeground: "#0369a1",
        muted: "#e0f2fe",
        mutedForeground: "#0284c7",
        card: "#ffffff",
        popover: "#ffffff",
        popoverForeground: "#0c4a6e",
        accent: "#bae6fd",
        accentForeground: "#0369a1",
        border: "#7dd3fc",
        input: "#bae6fd",
        ring: "#0ea5e9",
        info: "#0ea5e9",
        success: "#10b981",
        destructive: "#f43f5e",
        link: "#0284c7",
        meta: "#f0f9ff",
      },
      dark: {
        background: "#0c1420",
        foreground: "#e0f2fe",
        primary: "#38bdf8",
        primaryForeground: "#0c1420",
        secondary: "#1e293b",
        secondaryForeground: "#e0f2fe",
        muted: "#1e293b",
        mutedForeground: "#94a3b8",
        card: "#0f172a",
        popover: "#0f172a",
        popoverForeground: "#e0f2fe",
        accent: "#334155",
        accentForeground: "#e0f2fe",
        border: "#475569",
        input: "#334155",
        ring: "#38bdf8",
        info: "#38bdf8",
        success: "#34d399",
        destructive: "#fb7185",
        link: "#7dd3fc",
        meta: "#0c1420",
      },
    },
  },
  {
    key: "forest",
    name: "Forest",
    description: "Natural green forest theme",
    colors: {
      light: {
        background: "#f0fdf4",
        foreground: "#14532d",
        primary: "#16a34a",
        primaryForeground: "#f0fdf4",
        secondary: "#dcfce7",
        secondaryForeground: "#15803d",
        muted: "#dcfce7",
        mutedForeground: "#166534",
        card: "#ffffff",
        popover: "#ffffff",
        popoverForeground: "#14532d",
        accent: "#bbf7d0",
        accentForeground: "#15803d",
        border: "#86efac",
        input: "#bbf7d0",
        ring: "#16a34a",
        info: "#0ea5e9",
        success: "#16a34a",
        destructive: "#dc2626",
        link: "#15803d",
        meta: "#f0fdf4",
      },
      dark: {
        background: "#0f1e13",
        foreground: "#dcfce7",
        primary: "#4ade80",
        primaryForeground: "#0f1e13",
        secondary: "#1f2937",
        secondaryForeground: "#dcfce7",
        muted: "#1f2937",
        mutedForeground: "#9ca3af",
        card: "#111827",
        popover: "#111827",
        popoverForeground: "#dcfce7",
        accent: "#374151",
        accentForeground: "#dcfce7",
        border: "#4b5563",
        input: "#374151",
        ring: "#4ade80",
        info: "#3b82f6",
        success: "#4ade80",
        destructive: "#ef4444",
        link: "#86efac",
        meta: "#0f1e13",
      },
    },
  },
  {
    key: "sunset",
    name: "Sunset",
    description: "Warm orange sunset theme",
    colors: {
      light: {
        background: "#fff7ed",
        foreground: "#9a3412",
        primary: "#ea580c",
        primaryForeground: "#fff7ed",
        secondary: "#fed7aa",
        secondaryForeground: "#c2410c",
        muted: "#fed7aa",
        mutedForeground: "#d97706",
        card: "#ffffff",
        popover: "#ffffff",
        popoverForeground: "#9a3412",
        accent: "#fdba74",
        accentForeground: "#c2410c",
        border: "#fb923c",
        input: "#fdba74",
        ring: "#ea580c",
        info: "#3b82f6",
        success: "#16a34a",
        destructive: "#dc2626",
        link: "#c2410c",
        meta: "#fff7ed",
      },
      dark: {
        background: "#1c1006",
        foreground: "#fed7aa",
        primary: "#fb923c",
        primaryForeground: "#1c1006",
        secondary: "#292524",
        secondaryForeground: "#fed7aa",
        muted: "#292524",
        mutedForeground: "#a8a29e",
        card: "#1c1917",
        popover: "#1c1917",
        popoverForeground: "#fed7aa",
        accent: "#44403c",
        accentForeground: "#fed7aa",
        border: "#57534e",
        input: "#44403c",
        ring: "#fb923c",
        info: "#60a5fa",
        success: "#34d399",
        destructive: "#f87171",
        link: "#fdba74",
        meta: "#1c1006",
      },
    },
  },
];

export const DEFAULT_THEME = "system";

// Theme groups for better organization
export const THEME_GROUPS = {
  basic: ["light", "dark"],
  colorful: ["neon", "ocean", "forest", "sunset"],
} as const;

// Get theme by key and variant
export function getThemeColors(
  themeKey: string,
  variant: ThemeVariant
): ThemeColors | undefined {
  const theme = AVAILABLE_THEMES.find((t) => t.key === themeKey);
  return theme?.colors[variant];
}

// Get meta color for theme and variant
export function getMetaColorForTheme(
  themeKey: string,
  variant?: ThemeVariant
): string {
  // Handle system and direct theme keys
  if (themeKey === "system") {
    const colors = getThemeColors("classic", "light");
    const result = colors?.meta || "#ffffff";
    return result;
  }

  if (themeKey === "light") {
    const colors = getThemeColors("classic", "light");
    const result = colors?.meta || "#ffffff";
    return result;
  }

  if (themeKey === "dark") {
    const colors = getThemeColors("classic", "dark");
    const result = colors?.meta || "#09090b";
    return result;
  }

  // Handle theme-variant format (e.g., "neon-dark")
  if (themeKey.includes("-")) {
    const [key, variantStr] = themeKey.split("-");
    const variant = (variantStr === "dark" ? "dark" : "light") as ThemeVariant;
    const colors = getThemeColors(key, variant);
    const result = colors?.meta || "#ffffff";
    return result;
  }

  // Fallback to light variant if no variant specified
  const colors = getThemeColors(themeKey, variant || "light");
  const result = colors?.meta || "#ffffff";

  return result;
}

// Generate all theme keys (including variants)
export function getAllThemeKeys(): string[] {
  const keys = ["system", "light", "dark"];
  AVAILABLE_THEMES.forEach((theme) => {
    keys.push(`${theme.key}-light`);
    keys.push(`${theme.key}-dark`);
  });
  return keys;
}
