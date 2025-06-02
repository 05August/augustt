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
          "- Develop core learning features in the Zeus platform, enabling users to book lessons or schedule classes with teachers.\n- Build and maintain teacher onboarding flows, allowing teachers to register, create classes, and build public profiles.\n- Implement secure authentication flows including user registration, login, and password recovery.\n- Integrate BytePlus SDK to power virtual classrooms with real-time audio/video, screen sharing, chat, raise hand, and mic/camera control features.\n- Develop parent module allowing guardians to purchase class sessions and assign them to their children or relatives.\n- Ensure UI/UX consistency across devices and platforms.\n- Collaborate with product and backend teams to deliver robust and scalable frontend solutions.",
        skills: [
          "TypeScript",
          "React JS",
          "BytePlus SDK",
          "Tailwind CSS",
          "Agile",
          "Teamwork",
          "Research",
          "Problem-solving",
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
          "Product Project: [Charclub AI](https://charclub.ai/)\n- Built an immersive AI chat platform featuring real-time voice, SSR web chat, and SSG blog.\n- Implemented authentication, Stripe payments, and analytics via Google Tag Manager & Datadog.\n- Used Next.js, ReactJS, Tailwind CSS, Shadcn UI, React Query, Centrifugo (WebSocket).\n\nProduct Project: WildCard\n- Developed dynamic SSR pages and improved UI/UX for custom greeting card creation.\n- Used ReactJS, Next.js, Material UI, React Query.\n\nOutsourcing Project: [Coreproptech](https://coreproptech.com/)\n- Built collaboration features between agents and developers.\n- Used ReactJS, Strapi CMS, Zustand, Material UI.\n\nOutsourcing Project: [Flyspaces](https://flyspaces.com/)\n- Upgraded UI/UX for landing, admin & client pages; improved workspace booking flow.\n- Developed new features, maintained legacy codebase, and resolved bugs.\n- Used ReactJS, Redux, and Tailwind CSS.\n\nIn-house Project: Martech Dashboard\n- Created internal dashboard for tracking mobile app keyword rankings from App Store & Google Play.\n- Handled data crawling, parsing, and visualization.\n Used ReactJS, Redux, and Tailwind CSS.\n",
        skills: [
          "Next.js",
          "ReactJS",
          "Tailwind CSS",
          "Material UI",
          "Shadcn UI",
          "Strapi",
          "Auth0",
          "Redux",
          "React Query",
          "Centrifugo",
          "Stripe",
          "Google Tag Manager",
          "Datadog",
          "Zustand",
          "Teamwork",
          "Research",
          "Problem-solving",
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
