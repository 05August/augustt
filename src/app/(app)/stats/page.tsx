import { Suspense } from "react";

import { ScrollTop } from "@/components/scroll-top";
import { SiteFooter } from "@/components/site-footer";
import { Header } from "@/features/profile/components/header";
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/profile/components/panel";
import { SiteHeader } from "@/features/profile/components/site-header";
import { StatsServerContent } from "@/features/wakatime/components/stats-server-content";
import { cn } from "@/lib/cn";

// Enable ISR - revalidate every hour
export const revalidate = 3600;

import type { WakatimeStatsData } from "@/types/wakatime";

async function fetchWakatimeData(): Promise<WakatimeStatsData> {
  const baseUrl = process.env.BASE_URL ?? "https://augustt.site";

  try {
    // Fetch all time ranges in parallel
    const [last7Days, last30Days, last6Months, lastYear, allTime, allTimeData] =
      await Promise.all([
        fetch(`${baseUrl}/api/wakatime-stats?range=last_7_days`, {
          next: { revalidate: 3600 },
        }).then((res) => res.json()),
        fetch(`${baseUrl}/api/wakatime-stats?range=last_30_days`, {
          next: { revalidate: 3600 },
        }).then((res) => res.json()),
        fetch(`${baseUrl}/api/wakatime-stats?range=last_6_months`, {
          next: { revalidate: 3600 },
        }).then((res) => res.json()),
        fetch(`${baseUrl}/api/wakatime-stats?range=last_year`, {
          next: { revalidate: 3600 },
        }).then((res) => res.json()),
        fetch(`${baseUrl}/api/wakatime-stats?range=all_time`, {
          next: { revalidate: 3600 },
        }).then((res) => res.json()),
        fetch(`${baseUrl}/api/wakatime-all-time`, {
          next: { revalidate: 3600 },
        }).then((res) => res.json()),
      ]);

    return {
      stats: {
        last_7_days: last7Days,
        last_30_days: last30Days,
        last_6_months: last6Months,
        last_year: lastYear,
        all_time: allTime,
      },
      allTimeData: allTimeData,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Failed to fetch Wakatime data:", error);
    // Return empty data structure for graceful fallback
    const errorResponse = { error: "Failed to fetch" };

    return {
      stats: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        last_7_days: errorResponse as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        last_30_days: errorResponse as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        last_6_months: errorResponse as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        last_year: errorResponse as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        all_time: errorResponse as any,
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      allTimeData: errorResponse as any,
      lastUpdated: new Date().toISOString(),
    };
  }
}

export default async function StatsPage() {
  const wakatimeData = await fetchWakatimeData();

  return (
    <>
      <SiteHeader />

      <div className="max-w-screen overflow-x-hidden">
        <div className="mx-auto px-4 md:max-w-4xl">
          <Header />
          <Pattern />

          <Panel id="wakatime-stats" className="scroll-mt-22">
            <PanelHeader>
              <PanelTitle>Wakatime Statistics</PanelTitle>
            </PanelHeader>
            <PanelContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Detailed insights from Wakatime tracking your coding
                  activities, languages used, projects worked on, and
                  productivity metrics.
                </p>

                <div className="text-xs text-muted-foreground">
                  Last updated:{" "}
                  {new Date(wakatimeData.lastUpdated).toLocaleString()}
                </div>
              </div>
            </PanelContent>
          </Panel>

          <Pattern />

          <Suspense fallback={<StatsLoadingSkeleton />}>
            <StatsServerContent data={wakatimeData} />
          </Suspense>

          <Pattern />

          {/* Additional Info */}
          <Panel id="about-dashboard" className="scroll-mt-22">
            <PanelHeader>
              <PanelTitle>About This Dashboard</PanelTitle>
            </PanelHeader>
            <PanelContent>
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <div className="grid grid-cols-1 gap-6 text-sm md:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">
                      Data Source
                    </h4>
                    <p className="text-muted-foreground">
                      All data is automatically tracked by Wakatime plugins in
                      your editors and IDEs. Stats are pre-generated and updated
                      hourly.
                    </p>

                    <h4 className="font-semibold text-foreground">
                      Update Frequency
                    </h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>Static generation: Every hour</li>
                      <li>Daily revalidation: Via Vercel Cron</li>
                      <li>On-demand: Manual revalidation available</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">
                      Performance Benefits
                    </h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>
                        <strong>Pre-generated:</strong> Ultra-fast loading times
                      </li>
                      <li>
                        <strong>CDN Cached:</strong> Distributed globally
                      </li>
                      <li>
                        <strong>ISR:</strong> Always up-to-date data
                      </li>
                      <li>
                        <strong>SEO Optimized:</strong> Fully server-rendered
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </PanelContent>
          </Panel>

          <Pattern />

          <SiteFooter />
        </div>
      </div>

      <ScrollTop />
    </>
  );
}

function StatsLoadingSkeleton() {
  return (
    <div className="space-y-8">
      {/* Overview skeleton */}
      <Panel id="overview" className="scroll-mt-22">
        <PanelHeader>
          <PanelTitle>Overview</PanelTitle>
        </PanelHeader>
        <PanelContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-24 rounded-lg border border-edge bg-muted"></div>
              </div>
            ))}
          </div>
        </PanelContent>
      </Panel>

      {/* Charts skeleton */}
      <Panel id="breakdown" className="scroll-mt-22">
        <PanelHeader>
          <PanelTitle>Activity Breakdown</PanelTitle>
        </PanelHeader>
        <PanelContent>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-48 rounded-lg border border-edge bg-muted"></div>
              </div>
            ))}
          </div>
        </PanelContent>
      </Panel>
    </div>
  );
}

function Pattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
