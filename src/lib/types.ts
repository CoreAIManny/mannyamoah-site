export interface GuideFrontmatter {
  title: string;
  slug: string;
  category: string;
  industry: string;
  topic: string;
  description: string;
  date: string;
  tier: "quick-hit" | "standard" | "deep-dive";
  featured?: boolean;
}

export interface Guide {
  frontmatter: GuideFrontmatter;
  content: string;
  readingTime: string;
}
