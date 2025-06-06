"use client";

import { useState } from "react";

import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/profile/components/panel";
import type { WakatimeStatsData } from "@/types/wakatime";
import { isWakatimeError } from "@/types/wakatime";

import { CodingChartsStatic } from "./coding-charts-static";
import { RangeSelector } from "./range-selector";
import { StatsOverviewStatic } from "./stats-overview-static";

interface StatsServerContentProps {
  data: WakatimeStatsData;
}

export function StatsServerContent({ data }: StatsServerContentProps) {
  const [selectedRange, setSelectedRange] = useState("last_7_days");

  const currentStats = data.stats[selectedRange as keyof typeof data.stats];
  const hasValidData = currentStats && !isWakatimeError(currentStats);

  return (
    <>
      {/* Range Selector */}
      <Panel id="range-selector" className="scroll-mt-22">
        <PanelHeader>
          <PanelTitle>Time Range</PanelTitle>
        </PanelHeader>
        <PanelContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Select a time period to view your coding statistics
            </p>
            <RangeSelector value={selectedRange} onChange={setSelectedRange} />
          </div>
        </PanelContent>
      </Panel>

      <div className="relative flex h-8 w-full border-x border-edge before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56" />

      {/* Stats Overview */}
      <Panel id="overview" className="scroll-mt-22">
        <PanelHeader>
          <PanelTitle>Overview</PanelTitle>
        </PanelHeader>
        <PanelContent>
          {hasValidData ? (
            <StatsOverviewStatic
              currentStats={currentStats}
              allTimeData={data.allTimeData}
              range={selectedRange}
            />
          ) : (
            <div className="py-8 text-center">
              <p className="text-muted-foreground">
                No data available for this time range
              </p>
            </div>
          )}
        </PanelContent>
      </Panel>

      <div className="relative flex h-8 w-full border-x border-edge before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56" />

      {/* Coding Activity Charts */}
      <Panel id="breakdown" className="scroll-mt-22">
        <PanelHeader>
          <PanelTitle>Activity Breakdown</PanelTitle>
        </PanelHeader>
        <PanelContent>
          {hasValidData ? (
            <CodingChartsStatic stats={currentStats} />
          ) : (
            <div className="py-8 text-center">
              <p className="text-muted-foreground">
                No breakdown data available for this time range
              </p>
            </div>
          )}
        </PanelContent>
      </Panel>
    </>
  );
}
