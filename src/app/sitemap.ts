import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((project) => ({
    url: `https://chandlerhardy.com/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://chandlerhardy.com",
      lastModified: new Date(),
    },
    ...projectUrls,
  ];
}
