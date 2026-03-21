import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-03-21T00:00:00.000Z"),
      changeFrequency: "daily",
      priority: 1,
    },
  ]
}
