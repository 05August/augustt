"use client";

import { ClockIcon, CodeIcon } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

interface WakatimeStats {
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

export function LiveCodingStatus({
  className,
  showDetails = true,
}: {
  className?: string;
  showDetails?: boolean;
}) {
  const [status, setStatus] = useState<WakatimeStats>({
    isOnline: false,
    codingTime: "0 mins",
    lastActivity: "Unknown",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch Wakatime data
  useEffect(() => {
    const fetchWakatimeData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Call your API route (we'll create this)
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
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setStatus((prev) => ({ ...prev, isOnline: false }));
      } finally {
        setIsLoading(false);
      }
    };

    // Initial fetch
    fetchWakatimeData();

    // Update every 5 minutes
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

  if (error && !status.isOnline) {
    return (
      <div className={cn("text-sm text-muted-foreground", className)}>
        <span className="inline-flex items-center gap-1">
          <span className="size-2 rounded-full bg-gray-400" />
          Coding status unavailable
        </span>
      </div>
    );
  }

  return (
    <motion.div
      className={cn("space-y-2", className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Status indicator */}
      <div className="flex items-center gap-2 text-sm">
        <motion.div
          className="relative flex items-center justify-center"
          animate={status.isOnline ? { scale: [1, 1.1, 1] } : {}}
          transition={status.isOnline ? { duration: 2, repeat: Infinity } : {}}
        >
          {status.isOnline ? (
            <>
              <span className="absolute inline-flex size-3 animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
            </>
          ) : (
            <span className="size-2 rounded-full bg-gray-400"></span>
          )}
        </motion.div>

        <span
          className={cn(
            "font-medium",
            status.isOnline
              ? "text-green-600 dark:text-green-400"
              : "text-muted-foreground"
          )}
        >
          {isLoading
            ? "Checking..."
            : status.isOnline
              ? "Currently coding"
              : "Not coding"}
        </span>
      </div>

      {/* Details */}
      {showDetails && !isLoading && (
        <motion.div
          className="space-y-1 text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {status.isOnline && (
            <>
              {status.currentProject && (
                <div className="flex items-center gap-1">
                  <CodeIcon className="size-3" />
                  <span>
                    Project:{" "}
                    <span className="font-medium text-foreground">
                      {status.currentProject}
                    </span>
                  </span>
                </div>
              )}

              {status.currentLanguage && (
                <div className="flex items-center gap-1">
                  <span className="flex size-3 items-center justify-center">
                    <span className="size-1.5 rounded-full bg-current"></span>
                  </span>
                  <span>
                    Language:{" "}
                    <span className="font-medium text-foreground">
                      {status.currentLanguage}
                    </span>
                  </span>
                </div>
              )}
            </>
          )}

          <div className="flex items-center gap-1">
            <ClockIcon className="size-3" />
            <span>
              Today:{" "}
              <span className="font-medium text-foreground">
                {status.codingTime}
              </span>
            </span>
          </div>

          <div className="text-xs opacity-70">
            Last activity: {status.lastActivity}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
