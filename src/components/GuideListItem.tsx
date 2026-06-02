import Link from "next/link";

interface GuideListItemProps {
  slug: string;
  category: string;
  title: string;
  description: string;
}

export default function GuideListItem({ slug, category, title, description }: GuideListItemProps) {
  return (
    <Link
      href={`/guides/${slug}`}
      className="flex items-start justify-between py-5 border-b border-border-warm first:border-t hover:bg-white/40 transition-colors group"
    >
      <div className="flex-1">
        <div className="font-headline text-[11px] font-bold uppercase tracking-[2px] text-accent mb-1">
          {category}
        </div>
        <h4 className="font-headline text-[20px] font-bold uppercase text-text-primary mb-1 leading-[1.3]">
          {title}
        </h4>
        <div className="text-[15px] text-text-muted">{description}</div>
      </div>
      <div className="text-[24px] text-accent ml-4 mt-3.5 flex-shrink-0 group-hover:translate-x-1 transition-transform">
        →
      </div>
    </Link>
  );
}
