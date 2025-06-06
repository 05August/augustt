"use client";

import { CodeIcon } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

interface CodingStatus {
  isOnline: boolean;
  currentLanguage?: string;
}

export function CodingStatusBadge({ className }: { className?: string }) {
  const [status, setStatus] = useState<CodingStatus>({
    isOnline: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch("/api/wakatime-status");
        if (response.ok) {
          const data = await response.json();
          setStatus({
            isOnline: data.data.is_coding,
            currentLanguage: data.data.language,
          });
        }
      } catch (error) {
        console.error("Failed to fetch coding status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 5 * 60 * 1000); // Update every 5 minutes

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full bg-muted px-2 py-1 text-xs",
          className
        )}
      >
        <div className="size-1.5 animate-pulse rounded-full bg-gray-400" />
        <span>Checking status...</span>
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium transition-colors",
        status.isOnline
          ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
          : "bg-muted text-muted-foreground",
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        animate={status.isOnline ? { scale: [1, 1.1, 1] } : {}}
        transition={status.isOnline ? { duration: 2, repeat: Infinity } : {}}
      >
        {status.isOnline ? (
          <>
            <span className="absolute inline-flex size-2 animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-1.5 rounded-full bg-green-500"></span>
          </>
        ) : (
          <span className="size-1.5 rounded-full bg-gray-400"></span>
        )}
      </motion.div>

      <CodeIcon className="size-3" />

      <span>
        {status.isOnline ? (
          <>
            Coding
            {status.currentLanguage && (
              <span className="opacity-75"> • {status.currentLanguage}</span>
            )}
          </>
        ) : (
          "Offline"
        )}
      </span>
    </motion.div>
  );
}
