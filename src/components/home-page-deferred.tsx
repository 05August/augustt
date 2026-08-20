"use client";

import dynamic from "next/dynamic";

const Confetti = dynamic(
  () =>
    import("@/components/confetti").then((mod) => ({ default: mod.Confetti })),
  { ssr: false }
);

const ScrollTop = dynamic(
  () =>
    import("@/components/scroll-top").then((mod) => ({
      default: mod.ScrollTop,
    })),
  { ssr: false }
);

export function HomePageDeferred({
  confettiDates,
}: {
  confettiDates: string[];
}) {
  return (
    <>
      <Confetti datesWithoutYear={confettiDates} />
      <ScrollTop />
    </>
  );
}
