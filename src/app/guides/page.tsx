import { getAllGuides } from "@/lib/guides";
import GuideFilters from "@/components/GuideFilters";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI & Automation Guides",
  description:
    "Free guides, templates and walkthroughs on AI and automation for UK business owners.",
};

export default function GuidesPage() {
  const guides = getAllGuides();

  const guideData = guides.map((g) => ({
    slug: g.frontmatter.slug,
    title: g.frontmatter.title,
    category: g.frontmatter.category,
    industry: g.frontmatter.industry,
    topic: g.frontmatter.topic,
    description: g.frontmatter.description,
    date: g.frontmatter.date,
  }));

  return (
    <>
      {/* Banner */}
      <section className="bg-accent px-12 py-12 text-center">
        <h1 className="font-headline text-[36px] md:text-[44px] font-bold text-white uppercase leading-[1.15]">
          Free AI &amp; Automation Guides
        </h1>
      </section>

      {/* Filters + Guide list */}
      <div className="max-w-[1100px] mx-auto px-8 pb-16">
        <GuideFilters guides={guideData} />
      </div>
    </>
  );
}
