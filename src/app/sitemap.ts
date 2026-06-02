import type { MetadataRoute } from "next";
import { getAllGuides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mannyamoah.com";

  const guides = getAllGuides().map((guide) => ({
    url: `${baseUrl}/guides/${guide.frontmatter.slug}`,
    lastModified: new Date(guide.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...guides,
  ];
}
