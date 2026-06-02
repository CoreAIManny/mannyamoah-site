import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getGuideBySlug, getRelatedGuides, getAllSlugs } from "@/lib/guides";
import GuideCTAs from "@/components/GuideCTAs";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
    openGraph: {
      title: guide.frontmatter.title,
      description: guide.frontmatter.description,
      type: "article",
      publishedTime: guide.frontmatter.date,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const { content } = await compileMDX({
    source: guide.content,
    options: { parseFrontmatter: false },
  });

  const related = getRelatedGuides(guide, 3);

  const formattedDate = new Date(guide.frontmatter.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="max-w-[760px] mx-auto px-8 py-12 pb-16">
      {/* Category tag */}
      <div className="font-headline text-[11px] font-bold uppercase tracking-[2px] text-accent mb-2">
        {guide.frontmatter.category}
      </div>

      {/* Title */}
      <h1 className="font-headline text-[36px] md:text-[48px] font-bold uppercase leading-[1.1] text-text-primary mb-3">
        {guide.frontmatter.title}
      </h1>

      {/* Meta */}
      <div className="text-[13px] text-text-muted mb-8">
        {formattedDate} · {guide.readingTime}
      </div>

      {/* MDX Body */}
      <div className="prose prose-guide">{content}</div>

      {/* 3 Bottom CTAs */}
      <GuideCTAs />

      {/* Related guides */}
      {related.length > 0 && (
        <div className="mt-12 pt-8 border-t border-border-warm">
          <h3 className="font-headline text-[18px] font-bold uppercase tracking-[2px] text-text-primary mb-4">
            Related Guides
          </h3>
          <div className="flex flex-col gap-3">
            {related.map((r) => (
              <Link
                key={r.frontmatter.slug}
                href={`/guides/${r.frontmatter.slug}`}
                className="flex items-center justify-between py-3 border-b border-border-warm hover:bg-white/40 transition-colors group"
              >
                <div>
                  <span className="font-headline text-[11px] font-bold uppercase tracking-[2px] text-accent mr-3">
                    {r.frontmatter.category}
                  </span>
                  <span className="font-headline text-[16px] font-bold uppercase text-text-primary">
                    {r.frontmatter.title}
                  </span>
                </div>
                <span className="text-accent text-lg group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
