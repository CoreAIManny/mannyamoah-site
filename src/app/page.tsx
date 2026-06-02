import Image from "next/image";
import Link from "next/link";
import GuideCard from "@/components/GuideCard";
import {
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "@/components/SocialIcons";

const featuredGuides = [
  {
    slug: "5-free-ai-tools-every-uk-business-owner-should-know",
    category: "Getting Started",
    title: "5 Free AI Tools Every UK Business Owner Should Know",
    description:
      "The five free tools I recommend to every client. No subscriptions, no credit card, just results.",
  },
  {
    slug: "stop-hiring-start-automating",
    category: "Automation",
    title: "Stop Hiring. Start Automating. A Checklist.",
    description:
      "Before you write that job ad, run through this checklist. You might not need another person.",
  },
  {
    slug: "one-prompt-three-minutes",
    category: "AI Tools",
    title: "One Prompt. Three Minutes. Finds Money Every Time.",
    description:
      "The prompt I run on every new client — and you can use it tonight.",
  },
  {
    slug: "the-43k-question",
    category: "Cost Savings",
    title: "The £43K Question: How Care Agencies Lose Money",
    description:
      "The revenue leak hiding in almost every care agency's billing process.",
  },
  {
    slug: "new-cqc-framework",
    category: "Compliance",
    title: "What Nobody Tells Care Agency Owners About The New CQC Framework",
    description:
      "34 quality statements, decoded in plain English with an automation plan.",
  },
  {
    slug: "54-point-care-agency-automation-checklist",
    category: "Care",
    title: "The 54-Point Care Agency Automation Checklist",
    description:
      "Every automation opportunity in a care agency, mapped across 9 categories.",
  },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/manny.amoah/",
    icon: InstagramIcon,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/manny-amoah/",
    icon: LinkedInIcon,
    label: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/@MannyAmoah",
    icon: YouTubeIcon,
    label: "YouTube",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO — 50/50 split */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen md:min-h-screen">
        <div className="bg-accent flex flex-col justify-center px-6 py-12 md:px-[72px] md:py-20">
          <h1
            className="font-headline font-bold text-[56px] md:text-[84px] leading-[1.02] text-text-on-accent uppercase mb-6 animate-fade-slide-up"
          >
            I Automate Small Businesses. You Save 10+ Hours a Week.
          </h1>
          <p
            className="text-white/90 text-[16px] md:text-[18px] leading-[1.55] mb-8 max-w-[500px] animate-fade-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Free guides, templates and walkthroughs on AI and automation for UK
            business owners. No fluff. No £50K projects. Just workflows that
            work.
          </p>
          <div
            className="flex items-center gap-4 mb-8 animate-fade-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/70 hover:text-white transition-colors"
              >
                <s.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              href="/guides"
              className="inline-block px-8 py-4 bg-white text-accent font-headline text-[16px] font-bold uppercase tracking-[2px] rounded text-center hover:bg-[#f0ece6] transition-colors"
            >
              Free Guides →
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 border-2 border-white/50 text-white font-headline text-[16px] font-bold uppercase tracking-[2px] rounded text-center hover:border-white transition-colors"
            >
              Work With Me
            </Link>
          </div>
        </div>
        <div className="relative min-h-[320px] md:min-h-0 bg-bg-warm-darker">
          <Image
            src="/images/manny-hero.jpg"
            alt="Manny Amoah"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-[900px] mx-auto px-8 md:px-12 py-14">
        <h2 className="font-headline text-[28px] md:text-[36px] font-bold uppercase text-text-primary mb-6">
          Hey, I&rsquo;m Manny.
        </h2>
        <div className="border-t-2 border-accent pt-6">
          <p className="text-[16px] md:text-[17px] leading-[1.7] text-text-primary mb-4">
            I spent 10 years inside some of the biggest operations in the
            country: Visa Europe, the Cabinet Office, UKHSA. I watched
            enterprise waste millions on processes that small businesses
            couldn&rsquo;t afford to copy. So I left. Now I build automations
            that give small business owners back 10+ hours every week.
          </p>
          <p className="text-[16px] md:text-[17px] leading-[1.7] text-text-muted italic">
            I&rsquo;m not selling you a £50K AI transformation. I find the 3‑5
            workflows bleeding you dry, the ones eating your evenings and
            killing your weekends, and I automate them. Fast. That&rsquo;s it.
          </p>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="bg-accent px-12 py-11 text-center">
        <blockquote className="font-headline text-[26px] md:text-[38px] font-bold text-white uppercase leading-[1.15] max-w-[860px] mx-auto">
          &ldquo;The businesses that automate first don&rsquo;t just save time.
          They pull away.&rdquo;
        </blockquote>
      </section>

      {/* WHAT YOU'LL FIND HERE */}
      <div className="max-w-[900px] mx-auto px-8 md:px-12 pt-10 pb-8">
        <h2 className="font-headline text-[28px] md:text-[36px] font-bold uppercase text-text-primary mb-6">
          What You&rsquo;ll Find Here
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <span className="text-accent mt-0.5">→</span>
            <p className="text-[16px] md:text-[17px] leading-[1.7]">
              <span className="font-semibold text-accent">Free Guides</span>
              {" — "}Actionable guides on automation, AI tools, compliance, and cost savings for UK business owners. New ones every week.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent mt-0.5">→</span>
            <p className="text-[16px] md:text-[17px] leading-[1.7]">
              <span className="font-semibold text-accent">AI Automation Starter Kit — £37</span>
              {" — "}5 copy-paste automation templates, the revenue leak diagnostic prompt, and an ROI calculator. Everything you need to start yourself.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent mt-0.5">→</span>
            <p className="text-[16px] md:text-[17px] leading-[1.7]">
              <span className="font-semibold text-accent">AI &amp; Automation Assessment — £497</span>
              {" — "}I personally review your business, find the workflows costing you the most time, and deliver a prioritised action plan. If I can&rsquo;t find 10+ hours of savings, you don&rsquo;t pay.
            </p>
          </div>
        </div>
      </div>

      {/* POPULAR GUIDES GRID */}
      <div className="text-center px-8 pb-4">
        <h3 className="font-headline text-[22px] font-bold uppercase text-text-primary">
          Popular Guides
        </h3>
      </div>
      <div className="max-w-[1100px] mx-auto px-8 pb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredGuides.map((guide) => (
          <GuideCard key={guide.slug} {...guide} />
        ))}
      </div>

      {/* SOCIAL CTA */}
      <section className="bg-surface text-center px-8 py-12">
        <h2 className="font-headline text-[36px] font-bold uppercase text-accent mb-3">
          Want Free AI Tips Every Day?
        </h2>
        <p className="text-text-muted mb-6">
          New guides, templates and walkthroughs every week. Follow along.
        </p>
        <div className="flex gap-5 justify-center items-center">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-nav-bg text-white hover:bg-accent transition-colors"
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </section>

      {/* CONSULTING CTA */}
      <section className="bg-dark-section px-12 py-14 text-center">
        <h2 className="font-headline text-[32px] md:text-[44px] font-bold uppercase text-white mb-3.5">
          Ready For Me To Look At Your Business?
        </h2>
        <p className="text-white/70 text-[18px] max-w-[600px] mx-auto mb-7">
          The AI &amp; Automation Assessment: I personally review your business,
          find the time sinks, and give you a prioritised action plan. £497.
        </p>
        <a
          href="https://cal.com/manny-amoah-iys902/assessment-60"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-accent text-white font-headline text-[16px] font-bold uppercase tracking-[2px] rounded hover:bg-accent-hover transition-colors"
        >
          Book Your Assessment →
        </a>
      </section>
    </>
  );
}
