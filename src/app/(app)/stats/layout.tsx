import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Coding Stats",
  description:
    "Real-time Wakatime coding statistics for Augustt — track coding hours, languages, projects, and productivity trends.",
  path: "/stats",
});

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
