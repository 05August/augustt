import Image from "next/image";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/data/user";
import { FlipSentences } from "@/registry/flip-sentences/flip-sentences";

import { AugusttCover } from "./augustt-cover";
import { VerifiedIcon } from "./verified-icon";

export function Header() {
  return (
    <div className="relative mt-2">
      <div className="flex h-12" />

      <AugusttCover />

      <div className="screen-line-after flex border-x border-edge">
        <div className="shrink-0 border-r border-edge">
          <div className="mx-[2px] my-[3px]">
            <Image
              className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
              alt={`${USER.displayName}'s avatar`}
              src={USER.avatar}
              width={512}
              height={512}
              quality={100}
              priority
              unoptimized
            />
          </div>
          {/* Flag of Viet Nam */}
          {/* <svg
            className="absolute top-0 -left-px h-8 sm:h-9"
            viewBox="0 0 30 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="20" fill="#F00" />
            <polygon
              points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85"
              fill="#FFEB00"
            />
          </svg> */}
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex grow items-end mask-r-from-60% pb-1 pl-4">
            <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none dark:text-zinc-800">
              {"text-3xl "}
              <span className="inline dark:hidden">text-zinc-950</span>
              <span className="hidden dark:inline">text-zinc-50</span>
              {" font-medium"}
            </div>
          </div>

          <div className="border-t border-edge">
            <h1 className="flex items-center pl-4 font-heading text-3xl font-medium">
              {USER.displayName}
              &nbsp;
              <SimpleTooltip content="Verified">
                <VerifiedIcon className="size-[0.6em] text-[oklch(0.67_0.17_244.98)]" />
              </SimpleTooltip>
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
