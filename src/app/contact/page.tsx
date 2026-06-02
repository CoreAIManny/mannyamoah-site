import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Manny Amoah about AI and automation for your business.",
};

const bookingLinks = [
  {
    href: "https://cal.com/manny-amoah-iys902/ai-assessment",
    label: "AI & Automation Assessment",
    desc: "Free initial call to discuss your business",
  },
  {
    href: "https://cal.com/manny-amoah-iys902/care-assessment-review",
    label: "Care Operations Review",
    desc: "Specifically for care agency owners",
  },
  {
    href: "https://cal.com/manny-amoah-iys902/assessment-60",
    label: "Revenue Recovery Assessment — £497",
    desc: "60-minute deep-dive with a prioritised action plan",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-accent px-12 py-14 text-center">
        <h1 className="font-headline text-[44px] md:text-[56px] font-bold text-white uppercase">
          Contact Me
        </h1>
      </section>

      {/* Body */}
      <section className="max-w-[600px] mx-auto px-8 py-14 text-center">
        <div className="flex flex-col gap-5 mb-8">
          <div>
            <span className="block font-headline text-[11px] uppercase tracking-[3px] text-text-muted mb-1">
              Instagram
            </span>
            <a
              href="https://www.instagram.com/manny.amoah/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold hover:text-accent-hover transition-colors"
            >
              @mannyamoah
            </a>
          </div>
          <div>
            <span className="block font-headline text-[11px] uppercase tracking-[3px] text-text-muted mb-1">
              LinkedIn
            </span>
            <a
              href="https://www.linkedin.com/in/manny-amoah/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold hover:text-accent-hover transition-colors"
            >
              Manny Amoah
            </a>
          </div>
          <div>
            <span className="block font-headline text-[11px] uppercase tracking-[3px] text-text-muted mb-1">
              Email
            </span>
            <a
              href="mailto:manny@coreaisolutions.com"
              className="text-accent font-semibold hover:text-accent-hover transition-colors"
            >
              manny@coreaisolutions.com
            </a>
          </div>
        </div>

        <p className="text-text-muted mb-7">
          For business inquiries, include your budget and what you&rsquo;re looking for. I respond to every message.
        </p>

        <div className="flex flex-col gap-4 items-center">
          {bookingLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[400px] flex flex-col items-center px-8 py-4 bg-accent text-white font-headline text-[14px] font-bold uppercase tracking-[2px] rounded hover:bg-accent-hover transition-colors"
            >
              <span>{link.label}</span>
              <span className="text-[11px] font-body font-normal normal-case tracking-normal text-white/70 mt-1">
                {link.desc}
              </span>
            </a>
          ))}
          <a
            href="#"
            className="inline-block px-8 py-4 bg-nav-bg text-white font-headline text-[16px] font-bold uppercase tracking-[2px] rounded hover:bg-[#3a3a3a] transition-colors mt-2"
          >
            Media Kit →
          </a>
        </div>
      </section>
    </>
  );
}
