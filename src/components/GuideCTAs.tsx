import Link from "next/link";

const ctas = [
  {
    href: "/contact",
    text: "Grab the Starter Kit — £37",
    desc: "5 automation templates + the full diagnostic prompt + ROI calculator",
  },
  {
    href: "https://cal.com/manny-amoah-iys902/assessment-60",
    text: "Want me to review your business personally?",
    desc: "The AI & Automation Assessment — £497. If I can't find 10+ hours of savings, you don't pay.",
    external: true,
  },
  {
    href: "https://www.instagram.com/manny.amoah/",
    text: "Follow for daily automation tips",
    desc: "New guides and walkthroughs every week on Instagram @mannyamoah",
    external: true,
  },
];

export default function GuideCTAs() {
  return (
    <div className="mt-12 pt-8 border-t-2 border-accent flex flex-col gap-4">
      {ctas.map((cta) => {
        const Component = cta.external ? "a" : Link;
        const extraProps = cta.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {};
        return (
          <Component
            key={cta.text}
            href={cta.href}
            className="flex items-center gap-4 px-5 py-4 bg-surface rounded-lg border-l-4 border-accent hover:shadow-md transition-shadow group"
            {...extraProps}
          >
            <div className="flex-1">
              <div className="font-semibold text-text-primary">{cta.text}</div>
              <div className="text-[14px] text-text-muted">{cta.desc}</div>
            </div>
            <div className="text-accent text-[20px] flex-shrink-0 group-hover:translate-x-1 transition-transform">
              →
            </div>
          </Component>
        );
      })}
    </div>
  );
}
