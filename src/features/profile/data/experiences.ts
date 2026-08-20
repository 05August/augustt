import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    company: "Galaxy Education JSC",
    companyLogo: "/assets/companies/galaxy-education.webp",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Frontend Developer",
        year: "12.2024 — present",
        employmentType: "Full-time",
        icon: "code",
        description:
          "Product: ICAN Learning Platform\n- Built and maintained production React/TypeScript apps across customer-facing sites, student/teacher dashboards, and internal admin — with a shared component library, custom hooks, and consistent layouts in a multi-app setup.\n- Owned end-to-end frontend delivery for core product flows: lesson booking, teacher onboarding, multi-role authentication, parent modules, and admin operations.\n- Designed role-based access (admin / teacher / student / parent) with protected routes.\n- Integrated BytePlus SDK for real-time virtual classrooms (audio/video, screen sharing, chat, raise hand, mic/camera controls) and Sentry for error monitoring.\n- Applied code splitting, lazy loading, and React rendering optimization to improve load performance and maintainability.\n- Collaborated with Product, Design, Backend, and Operations to analyze requirements, estimate tasks, and ship features across multiple apps.",
        skills: [
          "TypeScript",
          "React",
          "Zustand",
          "React Query",
          "Tailwind CSS",
          "Shadcn UI",
          "BytePlus SDK",
          "Sentry",
          "Monorepo",
          "Agile",
          "Teamwork",
          "Problem-solving",
          "GitLab",
        ],
        expanded: true,
      },
    ],
    current: true,
  },
  {
    company: "Ahiho JSC",
    companyLogo: "/assets/companies/ahiho.webp",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Frontend Developer",
        year: "05.2023 — 12.2024",
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Built and maintained React and Next.js applications for multiple client and product projects.\n- Translated Figma designs into responsive, reusable UI components; implemented complex business logic, state management, and REST API integrations.\n- Worked with React, Next.js, Redux, Zustand, Tailwind CSS, Material UI, and Strapi CMS; resolved production issues and improved reliability.\n\nProduct: [CharClub AI](https://charclub.ai/)\n- AI chat platform with Next.js SSR for interactive web chat and SSG/ISR for the blog.\n- Authentication, real-time voice chat, Stripe payments, Centrifugo, GTM, and Datadog.\n\nProduct: WildCard\n- Responsive UI and SSR-based pages for personalized greeting cards.\n\nOutsourcing: [Coreproptech](https://coreproptech.com/)\n- Complex frontend workflows for property developers and agents; Zustand + Strapi CMS.\n\nOutsourcing: [Flyspaces](https://flyspaces.com/)\n- Responsive UI across landing, client, and admin apps; Redux + Tailwind CSS.\n\nIn-house: Martech Dashboard\n- Internal dashboard for App Store & Google Play keyword rankings.",
        skills: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Material UI",
          "Shadcn UI",
          "Strapi CMS",
          "Auth0",
          "Redux",
          "React Query",
          "Centrifugo",
          "Stripe",
          "Google Tag Manager",
          "Datadog",
          "Zustand",
          "Monorepo",
          "Teamwork",
          "Problem-solving",
          "Git",
          "Bitbucket",
          "Jira",
          "Figma",
        ],
        expanded: true,
      },
    ],
  },
  {
    company: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Software Engineer",
        year: "4.2025",
        employmentType: "Part-time",
        description:
          "Landing Page: [Q3 Language](https://q3-landing-page.pages.dev/vi/)\n\n- Developed a fast, SEO-friendly static landing page using Next.js and Shadcn/ui.\n- Focused on clean UI, responsive design, and optimal performance for lead generation.\n",
        icon: "code",
        skills: ["React", "Next.js", "Shadcn/ui", "Tailwind CSS"],
      },
    ],
  },
];
