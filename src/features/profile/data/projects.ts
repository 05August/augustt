import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "augustt-dev",
    title: "augustt.dev",
    time: "05.2025 — 06.2025",
    link: "https://augustt.dev",
    tags: [
      "Personal Project",
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Shadcn UI",
      "Next Themes",
      "Wakatime API",
      "ISR",
      "Vercel",
    ],
    description:
      "My personal portfolio website showcasing projects, experience, and real-time coding statistics.\n\n- Based on the original chanhdai.com repository as a foundation, extensively customized and expanded with new features.\n- Implemented advanced multi-theme system supporting light/dark modes using next-themes with seamless theme switching.\n- Integrated comprehensive Wakatime analytics with real-time coding status, detailed statistics dashboard (/stats), and ISR for optimal performance.\n- Built with modern tech stack including Next.js 15, React 19, TypeScript, and Tailwind CSS v4 for cutting-edge development experience.\n- Optimized for performance with Incremental Static Regeneration (ISR), CDN caching, and Vercel Edge functions.\n- Features include JSON-LD schema for SEO, responsive design, animated components with Motion, and automated deployment with Vercel.\n- Showcases 7+ projects, comprehensive work experience, and dynamic coding activity tracking through Wakatime integration.",
    logo: "/assets/images/blackgoku.jpg",
  },
  {
    id: "ican-learning-platform",
    title: "ICAN Learning Platform",
    time: "12.2024 — present",
    tags: [
      "Company Project",
      "React",
      "TypeScript",
      "Zustand",
      "React Query",
      "Tailwind CSS",
      "Shadcn UI",
      "BytePlus SDK",
      "Sentry",
    ],
    description:
      "Education platform serving customer-facing product sites, student/teacher dashboards, and internal admin — with a shared component library, custom hooks, and consistent layout system.\n\n- Implemented core product flows: lesson booking, teacher onboarding, parent modules, and admin operations; designed role-based access (admin / teacher / student / parent) with protected routes.\n- Integrated BytePlus SDK for real-time virtual classrooms (audio/video, screen sharing, chat, raise hand, mic/camera controls).\n- Set up Sentry for error tracking; applied code splitting, lazy loading, and React rendering optimization to improve load performance and maintainability.",
  },
  {
    id: "q3-landing-page",
    title: "Q3 Language",
    time: "03.2025",
    link: "https://q3-landing-page.pages.dev/vi/",
    tags: ["Freelance Project", "Next.js 15", "Tailwind CSS v4", "Shadcn UI"],
  },
  {
    id: "charclub-ai",
    title: "CharClub AI",
    time: "02.2024 — 12.2024",
    link: "https://charclub.ai",
    tags: [
      "Product Project",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "React Query",
      "Centrifugo",
      "Stripe",
      "Datadog",
      "GTM",
    ],
    description:
      "AI chat platform for immersive conversations with fictional characters.\n\n- Developed Next.js SSR for the interactive web chat and SSG/ISR for the blog to balance SEO, performance, and dynamic content.\n- Implemented authentication, real-time voice chat, and complex frontend business logic.\n- Integrated Centrifugo for real-time messaging, Stripe for payments, plus Google Tag Manager and Datadog for analytics and performance monitoring.",
    logo: "/assets/projects/charclub.png",
  },
  {
    id: "martech-dashboard",
    title: "Martech Dashboard",
    time: "11.2023 — 01.2024",
    tags: ["In-house Project", "Next.js", "Tailwind CSS", "Headless UI"],
    description:
      "An internal tool for tracking and visualizing mobile app keyword rankings from the App Store and Google Play.\n- Created internal dashboard for tracking mobile app keyword rankings from App Store & Google Play.\n- Handled data crawling, parsing, and visualization.",
  },
  {
    id: "coreproptech",
    title: "Coreproptech",
    time: "05.2023 — 12.2023",
    link: "https://coreproptech.com",
    tags: [
      "Outsourcing Project",
      "ReactJS",
      "Strapi CMS",
      "Zustand",
      "Material UI",
      "React Query",
    ],
    description:
      "A platform connecting property developers and agents.\n\n- Built responsive UI and complex frontend workflows for developer–agent collaboration.\n- Implemented Zustand state management and Strapi CMS integration for dynamic content and data fetching across the platform.",
    logo: "/assets/projects/coreproptech.png",
  },
  {
    id: "flyspaces",
    title: "Flyspaces",
    time: "06.2023 — 12.2023",
    link: "https://flyspaces.com",
    tags: [
      "Outsourcing Project",
      "ReactJS",
      "Redux",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    description:
      "A platform for renting flexible workspaces, including offices, meeting rooms, and event spaces.\n\n- Developed and improved responsive UI across landing, client, and admin applications; implemented new features and business workflows.\n- Resolved frontend issues to improve usability and reliability across devices.",
  },
  {
    id: "wildcard",
    title: "WildCard",
    time: "05.2023 — 07.2023",
    tags: [
      "Product Project",
      "Next.js 14",
      "Tailwind CSS v3",
      "React Query",
      "Zustand",
    ],
    description:
      "A platform for creating personalized greeting cards.\n\n- Built responsive UI and SSR-based pages with React and Next.js; translated design requirements into reusable frontend components.\n- Improved existing features and fixed production bugs for a smoother user experience.",
  },
];
