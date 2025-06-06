"use client";

import { CodeIcon } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface CodingStatus {
  isOnline: boolean;
  currentProject?: string;
  currentLanguage?: string;
  codingTime: string;
  lastActivity: string;
}

interface WakatimeResponse {
  data: {
    is_coding: boolean;
    project?: string;
    language?: string;
    grand_total: {
      text: string;
    };
    modified_at: string;
  };
}

export function CodingStatusItem() {
  const [status, setStatus] = useState<CodingStatus>({
    isOnline: false,
    codingTime: "0 mins",
    lastActivity: "Unknown",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWakatimeData = async () => {
      try {
        const response = await fetch("/api/wakatime-status");

        if (!response.ok) {
          throw new Error("Failed to fetch coding status");
        }

        const data: WakatimeResponse = await response.json();

        setStatus({
          isOnline: data.data.is_coding,
          currentProject: data.data.project,
          currentLanguage: data.data.language,
          codingTime: data.data.grand_total.text,
          lastActivity: formatLastActivity(data.data.modified_at),
        });
      } catch {
        setStatus((prev) => ({ ...prev, isOnline: false }));
      } finally {
        setIsLoading(false);
      }
    };

    fetchWakatimeData();
    const interval = setInterval(fetchWakatimeData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatLastActivity = (dateString: string): string => {
    const now = new Date();
    const lastActivity = new Date(dateString);
    const diffMs = now.getTime() - lastActivity.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;

    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;

    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };

  if (isLoading) {
    return (
      <div className="flex items-center gap-4 font-mono text-sm">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 shadow-xs dark:bg-zinc-900">
          <div className="size-4 animate-pulse rounded bg-muted-foreground/20" />
        </span>
        <p className="text-balance text-muted-foreground">
          Checking coding status...
        </p>
      </div>
    );
  }

  const getStatusText = () => {
    if (status.isOnline) {
      const parts = ["💻 Currently coding"];
      if (status.currentLanguage) parts.push(status.currentLanguage);
      if (status.currentProject) parts.push(`(${status.currentProject})`);
      parts.push(`${status.codingTime} today`);
      return parts.join(" • ");
    }
    return `💻 Not coding • ${status.codingTime} today`;
  };

  return (
    <motion.div
      className="flex items-center gap-4 font-mono text-sm"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon với status indicator */}
      <span className="relative flex size-6 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 shadow-xs dark:bg-zinc-900">
        <CodeIcon className="pointer-events-none size-4 text-muted-foreground" />

        {/* Status dot */}
        <motion.div
          className="absolute -top-0.5 -right-0.5 flex items-center justify-center"
          animate={status.isOnline ? { scale: [1, 1.1, 1] } : {}}
          transition={status.isOnline ? { duration: 2, repeat: Infinity } : {}}
        >
          {status.isOnline ? (
            <>
              <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex size-1.5 rounded-full bg-green-500"></span>
            </>
          ) : (
            <span className="size-1.5 rounded-full bg-gray-400"></span>
          )}
        </motion.div>
      </span>

      {/* Content - single line như IntroItem */}
      <p
        className={`text-balance ${status.isOnline ? "text-green-600 dark:text-green-400" : ""}`}
      >
        {getStatusText()}
      </p>
    </motion.div>
  );
}
