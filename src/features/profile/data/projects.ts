import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "zeus-platform",
    title: "Zeus Platform",
    time: "12.2024 — present",
    // link: "https://zeus-platform.pages.dev",
    tags: [
      "Company Project",
      "React",
      "TypeScript",
      "React Query",
      "Shadcn UI",
      "Tailwind CSS",
      "BytePlus SDK",
    ],
    description:
      "An edtech platform that connects students with teachers for live virtual classes and personalized learning.\n\n- Build core features for users to book lessons or classes with teachers, and for teachers to create classes and build profiles.\n- Develop authentication system including sign up, login, verify and password recovery.\n- Integrate BytePlus SDK to enable virtual classrooms with audio/video, screen sharing, chat, raise hand, and moderation tools (mute/unmute).\n- Implement parent dashboard allowing guardians to purchase lessons for children and link them to student accounts.\n- Ensure UI/UX consistency and responsiveness across devices.\n- Collaborate with backend and design teams to deliver seamless learning experiences. ",
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
    time: "02.2024 - 12.2024",
    link: "https://charclub.ai",
    tags: [
      "Product Project",
      "Next.js 14",
      "Tailwind CSS v3",
      "Headless UI",
      "Stripe",
      "Centrifugo",
      "React Query",
      "Auth0",
      "Google Tag Manager",
      "Datadog",
    ],
    description:
      "A platform for engaging in immersive conversations with fictional characters.\n- Review the design document, clarify the requirements, and break them into manageable tasks for accurate estimation and smooth implementation according to the plan.\n- Developed UI/UX and complex logic functions, implemented Server-Side Rendering (SSR) for web chat and Incremental Static Regeneration (ISR) for a blog, and built features for user login, real-time voice chat, and Stripe payment integration using ReactJS, Next.js, Tailwind CSS for styling, React Query for data fetching, and Centrifugo for real-time communication via WebSockets.\n- Integrated tracking with Google Tag Manager and Datadog for performance monitoring and analytics.\n- SEO Optimization: JSON-LD schema, sitemap, robots\n- Developed new features, maintained old screens, and resolved bugs to ensure smooth functionality.",
    logo: "/assets/projects/charclub.png",
  },
  {
    id: "martech-dashboard",
    title: "Martech Dashboard",
    time: "11.2023 - 01.2024",
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
      "A platform for property developer and agent collaboration\n- Review the design document, clarify the requirements, and break them into manageable tasks for accurate estimation and smooth implementation according to the plan.\n- Developed the UI/UX and complex logic for property developer and agent collaboration. Utilized ReactJS, Material UI for styling, and Zustand for state management. Streamlined data fetching from Strapi CMS to dynamically load content across the platform.\n- Developed new features, maintained old screens, and resolved bugs to ensure smooth functionality.",
    logo: "/assets/projects/coreproptech.png",
  },
  {
    id: "flyspaces",
    title: "Flyspaces",
    time: "06.2023 - 12.2023",
    link: "https://flyspaces.com",
    tags: [
      "Outsourcing Project",
      "ReactJS",
      "Redux",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    description:
      "A platform for renting flexible workspaces, including offices, meeting rooms, and event spaces.\n- Gather requirements from the client, review the design document, and break them into manageable tasks for accurate estimation and smooth implementation according to the plan.\n- Improved the UI/UX of the landing page, implemented new features for both the admin and client pages, and resolved bugs to enhance overall usability and performance. Utilized ReactJS, Redux for state management, and Tailwind CSS for a responsive and visually appealing design.\n- Developed new features, maintained old screens, and resolved bugs to ensure smooth functionality.",
  },
  {
    id: "wildcard",
    title: "WildCard",
    time: "05.2023 - 7.2023",
    tags: [
      "Product Project",
      "Next.js 14",
      "Tailwind CSS v3",
      "React Query",
      "Zustand",
    ],
    description:
      "A platform for creating personalized greeting cards\n- Gather requirements from the client, review the design document, and break them into manageable tasks for accurate estimation and smooth implementation according to the plan.\n- Improved the UI/UX and complex logic functions, implemented server-side rendering (SSR) and resolved bugs to enhance overall usability and performance. Utilized ReactJS, Next.js, and Tailwind CSS for a responsive and visually appealing design.",
  },
];
