import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "zeus-platform",
    title: "Zeus Platform",
    time: "12.2024 — present",
    // link: "https://zeus-platform.pages.dev",
    tags: [
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
    tags: [
      "Company Project",
      "Next.js 15",
      "Tailwind CSS v3",
      "shadcn/ui",
      "Strapi 5",
      "VNPAY-QR",
      "Docker",
      "Docker Compose",
      "NGINX",
    ],
    logo: "https://assets.chanhdai.com/images/project-logos/quaricdotcom.svg",
  },
  {
    id: "portfolio-website",
    title: "chanhdai.com",
    time: "10.2023 — present",
    link: "https://github.com/ncdai/chanhdai.com",
    tags: [
      "Open Source",
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Vercel",
    ],
    description:
      "chanhdai.com is my portfolio website, showcasing my work and experience as a Software Developer & UI/UX Designer.\n- Elegant & Minimalistic UI: Clean and modern design\n- Dark Mode: Supports light and dark themes for a better user experience\n- vCard Integration: Digital business card with contact details\n- SEO Optimization: JSON-LD schema, sitemap, robots\n- Email Protection: Obfuscation to prevent spam\n- Installable PWA\n- [Next.js 15](https://nextjs.org/): Latest React framework for optimized performance and scalability\n- [Tailwind CSS v4](https://tailwindcss.com/): Modern utility-first CSS framework for styling\n\nBlog Features:\n- MDX & Markdown support\n- [Syntax Highlighting](https://chanhdai.com/blog/writing-effect-inspired-by-apple) for better readability\n - [RSS Feed](https://chanhdai.com/rss) for easy content distribution\n- Dynamic OG Images for rich previews",
    logo: "https://assets.chanhdai.com/images/project-logos/chanhdaidotcom.svg",
  },
  {
    id: "zadark",
    title: "ZaDark",
    time: "01.2022 — present",
    link: "https://zadark.com",
    tags: [
      "Pet Project",
      "Open Source",
      "Browser Extension",
      "CLI",
      "Docusaurus 3",
    ],
    description:
      "ZaDark adds Dark Mode, anti-peeking, customizable fonts, backgrounds, and more to Zalo Web and PC.\n- 80,000+ downloads on SourceForge\n- 12,000+ active users via Chrome Web Store\n- Bronze Medal — 10th Design, Manufacturing, and Application Award 2022\n- Community Choice award by SourceForge",
    logo: "https://assets.chanhdai.com/images/project-logos/zadark.svg",
  },
  {
    id: "qabox",
    title: "QABox",
    time: "07.2023",
    link: "https://github.com/ncdai/qabox",
    tags: [
      "University Project",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
    description:
      "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/qabox",
  },
  {
    id: "taskbox",
    title: "TaskBox",
    time: "07.2023",
    link: "https://github.com/ncdai/taskbox",
    tags: [
      "University Project",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
    description:
      "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/taskbox",
  },
  {
    id: "dai-chat",
    title: "DaiChat App",
    time: "07.2020",
    link: "https://www.youtube.com/watch?v=H5U3J_W1low",
    tags: ["University Project", "Java", "Java Swing", "Java Networking"],
    description:
      "- Course: Java Application Programming — FIT@HCMUS\n- Requirement: Developed a real-time chat application using Java technologies\n- Project Score: 10/10\n- Source Code:\n  - Server: https://github.com/ncdai/ltudjava-summer2020-chatapp_server\n  - Client: https://github.com/ncdai/ltudjava-summer2020-chatapp_client",
  },
  {
    id: "qlsv-app",
    title: "QLSV App",
    time: "06.2020",
    link: "https://www.youtube.com/watch?v=tG9SZEBrwog",
    tags: ["University Project", "Java", "Java Swing", "Hibernate", "MySQL"],
    description:
      "- Course: Java Application Programming — FIT@HCMUS\n- Requirement: Built a student management system with role-based functionalities using Java technologies\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/ltudjava-summer2020-hibernate",
  },
  {
    id: "penphy",
    title: "Penphy",
    time: "01.2019 — 08.2019",
    link: "https://www.youtube.com/watch?v=EdU7rUO-UA4",
    tags: ["Startup Project", "JavaScript", "React Native"],
    description: "2nd Prize — Business Startup Competition 2019",
  },
  {
    id: "unlimitedstudy",
    title: "UnlimitedStudy",
    time: "01.2017 — 08.2018",
    link: "https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm",
    tags: [
      "National Competition",
      "Creative Software",
      "PHP",
      "Laravel 4",
      "MySQL",
    ],
    description:
      "UnlimitedStudy is a website that provides teaching and learning support tools for teachers and students.\n- 3rd Prize — National Science and Engineering Fair 2018 (ViSEF)\n- 1st Prize — Science and Engineering Fair — Can Tho City 2018\n- 3rd Prize — National Young Informatics Contest 2018\n- 2nd Prize — Youth and Children's Creativity Contest — Can Tho City 2018\n- 3rd Prize — Young Informatics Contest — Can Tho City 2018\n- Reached 7,000+ users, mainly high school students in Can Tho City.\n- Pilot implemented in high schools across Can Tho City with English quizzes, supervised by English subject specialists from the Can Tho City Department of Education and Training.",
  },
  {
    id: "dmessage",
    title: "DMessage",
    time: "05.2017",
    link: "https://github.com/ncdai/DMessage",
    tags: [
      "Self-learning Project",
      "Pet Project",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Mongoose ODM",
    ],
    description:
      "A Messenger clone built to practice real-time communication using Socket.IO. This project showcases my self-learning journey in implementing WebSockets for instant messaging.",
  },
  {
    id: "study-english",
    title: "Study English",
    time: "11.2016 — 12.2017",
    link: "https://www.youtube.com/watch?v=OYgugvjqU4A",
    tags: [
      "National Competition",
      "Creative Software",
      "PHP",
      "Laravel 4",
      "MySQL",
    ],
    description:
      "Study English is a free, mobile-friendly website for high school English learning, offering vocabulary, quizzes, listening practice, and more.\n- Consolation Prize — National Youth and Children's Creativity Contest 2016\n- 1st Prize — Youth and Children's Creativity Contest — Can Tho City 2016\n- Consolation Prize — Young Informatics Contest — Can Tho City 2016",
  },
];
