import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { GuideFrontmatter, Guide } from "./types";

const guidesDirectory = path.join(process.cwd(), "content/guides");

export function getAllGuides(): Guide[] {
  if (!fs.existsSync(guidesDirectory)) return [];

  const files = fs.readdirSync(guidesDirectory).filter((f) => f.endsWith(".mdx"));

  const guides = files.map((filename) => {
    const filePath = path.join(guidesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      frontmatter: data as GuideFrontmatter,
      content,
      readingTime: stats.text,
    };
  });

  return guides.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getGuideBySlug(slug: string): Guide | null {
  const guides = getAllGuides();
  return guides.find((g) => g.frontmatter.slug === slug) ?? null;
}

export function getRelatedGuides(guide: Guide, limit = 3): Guide[] {
  const all = getAllGuides();
  return all
    .filter(
      (g) =>
        g.frontmatter.slug !== guide.frontmatter.slug &&
        (g.frontmatter.category === guide.frontmatter.category ||
          g.frontmatter.topic === guide.frontmatter.topic)
    )
    .slice(0, limit);
}

export function getAllSlugs(): string[] {
  return getAllGuides().map((g) => g.frontmatter.slug);
}
