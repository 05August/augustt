import dynamic from "next/dynamic";

import { USER } from "@/data/user";

import { AugusttCover } from "./augustt-cover";
import { VerifiedIcon } from "./verified-icon";

const AVATAR_1X = "/assets/images/blackgoku-160.webp";
const AVATAR_2X = "/assets/images/blackgoku-320.webp";
const AVATAR_3X = "/assets/images/blackgoku.webp";
const AVATAR_SRCSET = `${AVATAR_1X} 160w, ${AVATAR_2X} 320w, ${AVATAR_3X} 512w`;
const AVATAR_SIZES = "(max-width: 639px) 128px, 160px";

const FlipSentences = dynamic(
  () =>
    import("@/registry/flip-sentences/flip-sentences").then((mod) => ({
      default: mod.FlipSentences,
    })),
  {
    loading: () => (
      <p className="font-mono text-sm text-balance text-muted-foreground select-none">
        {USER.bio}
      </p>
    ),
  }
);

export function Header() {
  return (
    <div className="relative mt-2">
      <link
        rel="preload"
        as="image"
        href={AVATAR_2X}
        imageSrcSet={AVATAR_SRCSET}
        imageSizes={AVATAR_SIZES}
        fetchPriority="high"
      />

      <div className="flex h-12" />

      <AugusttCover />

      <div className="screen-line-after flex border-x border-edge">
        <div className="shrink-0 border-r border-edge">
          <div className="mx-[2px] my-[3px]">
            {/* eslint-disable-next-line @next/next/no-img-element -- explicit srcSet for retina; Next Image downscaled 320px source to 256w */}
            <img
              className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
              alt={`${USER.displayName}'s avatar`}
              src={AVATAR_2X}
              srcSet={AVATAR_SRCSET}
              sizes={AVATAR_SIZES}
              width={160}
              height={160}
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex grow items-end mask-r-from-60% pb-1 pl-4">
            <div className="line-clamp-1 font-mono text-xs text-zinc-400 select-none dark:text-muted-foreground">
              {"text-3xl "}
              <span className="inline dark:hidden">text-zinc-4000</span>
              <span className="hidden dark:inline">text-zinc-700</span>
              {" font-medium"}
            </div>
          </div>

          <div className="border-t border-edge">
            <h1 className="flex items-center pl-4 font-heading text-3xl font-medium">
              {USER.displayName}
              &nbsp;
              <span title="Verified">
                <VerifiedIcon className="size-[0.6em] text-[oklch(0.67_0.17_244.98)]" />
              </span>
            </h1>

            <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
              <FlipSentences sentences={[USER.bio, ...USER.flipSentences]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
