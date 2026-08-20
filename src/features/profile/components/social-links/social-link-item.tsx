import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

import type { SocialLink } from "@/features/profile/types/social-links";
import { cn } from "@/lib/cn";

export function SocialLinkItem({ icon, title, description, href }: SocialLink) {
  return (
    <a
      className={cn(
        "group/social-link flex cursor-pointer items-center gap-4 rounded-2xl p-4 transition-colors select-none",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
      href={href}
      target="_blank"
      rel="noopener"
    >
      <div className="relative size-12 shrink-0">
        <Image
          className="rounded-xl"
          src={icon}
          alt={`${title}'s icon`}
          width={48}
          height={48}
          sizes="48px"
          quality={85}
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/8 ring-inset dark:ring-white/8" />
      </div>

      <div className="flex-1">
        <p className="flex items-center font-heading font-medium decoration-ring underline-offset-4 group-hover/social-link:underline">
          {title}
        </p>

        {description && (
          <p className="font-mono text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </a>
  );
}
