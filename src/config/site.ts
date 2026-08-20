import { USER } from "@/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://augustt.dev",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const SEO = {
  defaultTitle: `${USER.displayName} | Frontend Developer Portfolio`,
  titleTemplate: `%s | ${USER.displayName}`,
  defaultDescription:
    "Augustt (Thiều Văn Thuận) — Frontend Developer in Hanoi with 3+ years building EdTech and SaaS platforms in React, Next.js, and TypeScript.",
  locale: "en_US",
  language: "en-US",
  twitterHandle: "@iamaugustt",
  ogImageAlt: `${USER.displayName} — Frontend Developer Portfolio`,
  keywords: USER.keywords,
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "EdTech",
    "Frontend Development",
    "Web Performance",
    "SEO",
  ],
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Augustt",
    href: "/",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Stats",
    href: "/stats",
  },
  // {
  //   title: "Components",
  //   href: "/components",
  // },
];

export const SOURCE_CODE_GITHUB_URL = "https://github.com/05August/augustt";

export const VIETNAM_HOLIDAYS = [
  "2025-04-30", // Ngày Giải phóng Miền Nam
  "2025-05-01", // Ngày Quốc tế Lao động
  "2025-09-02", // Ngày Quốc khánh Việt Nam
  "2025-11-20", // Ngày Nhà giáo Việt Nam
];

export const UTM_PARAMS = {
  utm_source: "augustt.dev",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
