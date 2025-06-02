import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "/assets/favicon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "/assets/logo-192x192.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "/assets/logo-512x512.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "/assets/logo-512x512.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
      {
        src: "/aasets/images/screenshot-mobile-dark.webp",
        type: "image/webp",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "/assets/images/screenshot-mobile-light.webp",
        type: "image/webp",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "/aasets/images/screenshot-desktop-dark.webp",
        type: "image/webp",
        sizes: "1920x1080",
        form_factor: "wide",
      },
      {
        src: "/aasets/images/screenshot-desktop-light.webp",
        type: "image/webp",
        sizes: "1920x1080",
        form_factor: "wide",
      },
    ],
  };
}
