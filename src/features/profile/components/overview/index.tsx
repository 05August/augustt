import { LinkIcon, MapPinIcon } from "lucide-react";
import dynamic from "next/dynamic";

import { USER } from "@/data/user";
import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";
import { EmailItem } from "./email-item";
import { IntroItem } from "./intro-item";
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";

const CodingStatusItem = dynamic(
  () =>
    import("./coding-status-item").then((mod) => ({
      default: mod.CodingStatusItem,
    })),
  {
    loading: () => (
      <div className="flex items-center gap-4 font-mono text-sm">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 shadow-xs dark:bg-zinc-900">
          <div className="size-4 animate-pulse rounded bg-muted-foreground/20" />
        </span>
        <p className="text-balance text-muted-foreground">
          Checking coding status...
        </p>
      </div>
    ),
  }
);

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
            />
          );
        })}

        <IntroItem icon={MapPinIcon} content={USER.address} />

        <PhoneItem phoneNumber={USER.phoneNumber} />

        <EmailItem email={USER.email} />

        <IntroItem
          icon={LinkIcon}
          content={urlToName(USER.website)}
          href={USER.website}
        />

        <CodingStatusItem />
      </PanelContent>
    </Panel>
  );
}
