import Link from "next/link";

interface GuideCardProps {
  slug: string;
  category: string;
  title: string;
  description: string;
}

export default function GuideCard({ slug, category, title, description }: GuideCardProps) {
  return (
    <Link
      href={`/guides/${slug}`}
      className="block bg-surface rounded-lg p-7 transition-all hover:shadow-lg hover:-translate-y-0.5"
    >
      <div className="font-headline text-[11px] font-bold uppercase tracking-[2px] text-accent mb-3">
        {category}
      </div>
      <h3 className="font-headline text-[22px] font-bold uppercase leading-[1.2] text-text-primary mb-3">
        {title}
      </h3>
      <p className="text-[15px] text-text-muted leading-[1.5] mb-4">
        {description}
      </p>
      <span className="font-headline text-[13px] font-bold uppercase tracking-[2px] text-accent hover:text-accent-hover transition-colors">
        Read Guide →
      </span>
    </Link>
  );
}
