import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coding Stats",
  description: "Wakatime coding statistics and analytics dashboard",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
