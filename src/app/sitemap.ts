import dayjs from "dayjs";
import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

const ROUTES = [""];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ROUTES.map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: dayjs().toISOString(),
  }));

  return routes;
}
