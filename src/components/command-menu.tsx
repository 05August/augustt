"use client";

import {
  BriefcaseBusinessIcon,
  ComponentIcon,
  FileBadgeIcon,
  FilesIcon,
  FileTextIcon,
  FileUserIcon,
  FolderCodeIcon,
  LetterTextIcon,
  MedalIcon,
  MonitorIcon,
  MoonStarIcon,
  SunIcon,
  TriangleDashedIcon,
  TypeIcon,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { copyText } from "@/utils/copy";

import { ChanhDaiMark, getMarkSVG } from "./chanhdai-mark";
import { getWordmarkSVG } from "./chanhdai-wordmark";
import { Button } from "./ui/button";

type CommandItemType = {
  title: string;
  value: string;
  icon?: React.ComponentType;
  iconImage?: string;
};

export const PAGES: CommandItemType[] = [
  {
    title: "Daifolio",
    value: "/",
    icon: ChanhDaiMark,
  },
  {
    title: "Blog",
    value: "/blog",
    icon: FilesIcon,
  },
  {
    title: "Components",
    value: "/components",
    icon: ComponentIcon,
  },
];

const DAIFOLIO: CommandItemType[] = [
  {
    title: "About",
    value: "/#about",
    icon: LetterTextIcon,
  },
  {
    title: "Experience",
    value: "/#experience",
    icon: BriefcaseBusinessIcon,
  },
  {
    title: "Projects",
    value: "/#projects",
    icon: FolderCodeIcon,
  },
  {
    title: "Awards",
    value: "/#awards",
    icon: MedalIcon,
  },
  {
    title: "Certs",
    value: "/#certs",
    icon: FileBadgeIcon,
  },
  {
    title: "vCard",
    value: "/vcard",
    icon: FileUserIcon,
  },
];

const BLOG: CommandItemType[] = [
  {
    title: "React Wheel Picker",
    value: "/blog/react-wheel-picker",
  },
  {
    title: "ChanhDai Brand",
    value: "/blog/chanhdai-brand",
  },
  {
    title: "Theme Switcher",
    value: "/blog/theme-switcher-component",
  },
  {
    title: "Writing Effect inspired by Apple",
    value: "/blog/writing-effect-inspired-by-apple",
  },
  {
    title: "Awesome Terminal — iTerm2 + Zsh + Oh My Zsh + Amazon Q",
    value: "/blog/awesome-terminal",
  },
  {
    title: "Installing Uptime Kuma with Docker and setting up NGINX with SSL",
    value: "/blog/uptime-kuma",
  },
  {
    title: "Welcome to chanhdai.com",
    value: "/blog/welcome",
  },
];

const LINKS: CommandItemType[] = SOCIAL_LINKS.map((item) => ({
  title: item.title,
  value: item.href,
  iconImage: item.icon,
}));

export function CommandMenu() {
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    document.addEventListener(
      "keydown",
      (e: KeyboardEvent) => {
        if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
          if (
            (e.target instanceof HTMLElement && e.target.isContentEditable) ||
            e.target instanceof HTMLInputElement ||
            e.target instanceof HTMLTextAreaElement ||
            e.target instanceof HTMLSelectElement
          ) {
            return;
          }

          e.preventDefault();
          setOpen((open) => !open);
        }
      },
      { signal }
    );

    return () => abortController.abort();
  }, []);

  const handleOpenLink = useCallback(
    (href: string, external = false) => {
      setOpen(false);

      if (external) {
        window.open(href, "_blank", "noopener");
      } else {
        router.push(href);
      }
    },
    [router]
  );

  const handleThemeChange = useCallback(
    (theme: "light" | "dark" | "system") => {
      setOpen(false);
      setTheme(theme);
    },
    [setTheme]
  );

  const handleCopyText = useCallback((text: string, msg: string) => {
    setOpen(false);
    copyText(text);
    toast.success(msg);
  }, []);

  return (
    <>
      <Button
        variant="secondary"
        className="h-7.5 gap-1 rounded-full bg-zinc-50 px-3 font-normal text-muted-foreground inset-ring inset-ring-border select-none hover:bg-zinc-50 sm:gap-1.5 dark:bg-zinc-900/70 dark:hover:bg-zinc-900/70"
        onClick={() => setOpen(true)}
      >
        <svg
          className="-ml-0.5 size-3 sm:size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
          aria-hidden
        >
          <path
            d="M10.278 11.514a5.824 5.824 0 1 1 1.235-1.235l3.209 3.208A.875.875 0 0 1 14.111 15a.875.875 0 0 1-.624-.278l-3.209-3.208Zm.623-4.69a4.077 4.077 0 1 1-8.154 0 4.077 4.077 0 0 1 8.154 0Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>

        <span className="text-[13px]/none font-medium sm:hidden">Search</span>

        <span className="max-sm:hidden">
          <kbd className="hidden h-4 items-center rounded-sm border bg-accent px-1 font-sans text-[13px]/none font-normal tracking-wider [.os-macos_&]:flex">
            ⌘K
          </kbd>

          <kbd className="hidden h-4 items-center rounded-sm border bg-accent px-1 font-sans text-[13px]/none not-[.os-macos_&]:flex">
            Ctrl K
          </kbd>
        </span>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroupItems
            heading="Pages"
            items={PAGES}
            onSelect={handleOpenLink}
          />

          <CommandSeparator />

          <CommandGroupItems
            heading="Daifolio"
            items={DAIFOLIO}
            onSelect={handleOpenLink}
          />

          <CommandSeparator />

          <CommandGroupItems
            heading="Blog"
            items={BLOG}
            onSelect={handleOpenLink}
          />

          <CommandSeparator />

          <CommandGroupItems
            heading="Links"
            items={LINKS}
            onSelect={(value) => handleOpenLink(value, true)}
          />

          <CommandSeparator />

          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => handleThemeChange("light")}>
              <SunIcon />
              Light
            </CommandItem>
            <CommandItem onSelect={() => handleThemeChange("dark")}>
              <MoonStarIcon />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => handleThemeChange("system")}>
              <MonitorIcon />
              System
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Logo">
            <CommandItem
              onSelect={() => {
                handleCopyText(
                  getMarkSVG(resolvedTheme === "light" ? "#000" : "#fff"),
                  "Copied Mark as SVG"
                );
              }}
            >
              <ChanhDaiMark />
              Copy Mark as SVG
            </CommandItem>

            <CommandItem
              onSelect={() => {
                handleCopyText(
                  getWordmarkSVG(resolvedTheme === "light" ? "#000" : "#fff"),
                  "Copied Logotype as SVG"
                );
              }}
            >
              <TypeIcon />
              Copy Logotype as SVG
            </CommandItem>

            <CommandItem
              onSelect={() => handleOpenLink("/blog/chanhdai-brand")}
            >
              <TriangleDashedIcon />
              Brand Guidelines
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

function CommandGroupItems({
  heading,
  items,
  onSelect,
}: {
  heading: string;
  items: CommandItemType[];
  onSelect: (value: string) => void;
}) {
  return (
    <CommandGroup heading={heading}>
      {items.map((item) => {
        const Icon = item?.icon ?? FileTextIcon;

        return (
          <CommandItem
            key={item.value}
            value={item.title}
            onSelect={() => onSelect(item.value)}
          >
            {item?.iconImage ? (
              <Image
                className="rounded-md"
                src={item.iconImage}
                alt={item.title}
                width={20}
                height={20}
                unoptimized
              />
            ) : (
              <Icon />
            )}
            {item.title}
          </CommandItem>
        );
      })}
    </CommandGroup>
  );
}
