import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // Core Programming Languages
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },

  // Runtime Environments
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },
  {
    key: "bun",
    title: "Bun",
    href: "https://bun.sh/",
    categories: ["Runtime Environment"],
  },

  // Core Framework & Library
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library"],
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
  },

  // UI & Component Libraries
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
    theme: true,
  },
  {
    key: "radixui",
    title: "Radix UI",
    href: "https://www.radix-ui.com/",
    categories: ["Library", "Component Library"],
    theme: true,
  },
  {
    key: "materialui",
    title: "Material UI",
    href: "https://mui.com/",
    categories: ["Library", "UI Library"],
  },
  {
    key: "antd",
    title: "Ant Design",
    href: "https://ant.design/",
    categories: ["Library", "UI Library"],
  },
  {
    key: "motion",
    title: "Motion",
    href: "https://motion.dev/",
    categories: ["Library", "Animation"],
  },

  // State Management & Navigation
  {
    key: "redux",
    title: "Redux",
    href: "https://redux.js.org/",
    categories: ["State Management"],
  },
  {
    key: "react-router",
    title: "React Router",
    href: "https://reactrouter.com/",
    categories: ["Library", "Navigation"],
  },
  {
    key: "react-navigation",
    title: "React Navigation",
    href: "https://reactnavigation.org/",
    categories: ["Library", "Navigation"],
  },

  // Development Tools
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
  {
    key: "chatgpt",
    title: "ChatGPT",
    href: "https://chatgpt.com/",
    categories: ["Tools", "AI"],
    theme: true,
  },
  {
    key: "cursor",
    title: "Cursor",
    href: "https://www.cursor.com/",
    categories: ["Tools", "AI"],
    theme: true,
  },
];
