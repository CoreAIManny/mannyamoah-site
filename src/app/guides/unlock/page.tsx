"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";

function UnlockForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = searchParams.get("slug") || "";
  const ref = searchParams.get("ref") || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const guideTitle = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/hubspot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), slug, ref }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }

      router.push(`/guides/${slug}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
      setLoading(false);
    }
  }

  if (!slug) {
    return (
      <div className="text-center py-20">
        <p className="text-text-muted text-lg">Invalid link. Head to the guides page instead.</p>
        <a href="/guides" className="text-accent font-semibold mt-4 inline-block">
          Browse Free Guides →
        </a>
      </div>
    );
  }

  return (
    <>
      <section className="bg-accent px-8 py-12 text-center">
        <h1 className="font-headline text-[36px] md:text-[44px] font-bold text-white uppercase leading-[1.15]">
          Your Free Guide Is Ready
        </h1>
      </section>

      <section className="max-w-[480px] mx-auto px-8 py-14">
        <h2 className="font-headline text-[22px] md:text-[26px] font-bold uppercase text-text-primary leading-[1.2] mb-4">
          {guideTitle}
        </h2>
        <p className="text-text-muted text-[17px] mb-8">
          Almost there. Drop your details below and you&rsquo;ll get instant access.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-bg-warm-darker rounded-lg font-body text-[16px] bg-surface text-text-primary placeholder:text-[#b0ab9f] focus:outline-none focus:border-accent transition-colors"
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-bg-warm-darker rounded-lg font-body text-[16px] bg-surface text-text-primary placeholder:text-[#b0ab9f] focus:outline-none focus:border-accent transition-colors"
          />

          {error && (
            <p className="text-red-600 text-[14px]">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-accent text-white font-headline text-[16px] font-bold uppercase tracking-[2px] rounded hover:bg-accent-hover transition-colors disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Loading..." : "Get Free Access →"}
          </button>
        </form>

        <p className="text-text-muted text-[13px] mt-4 text-center">
          No spam. Unsubscribe anytime.
        </p>
      </section>
    </>
  );
}

export default function UnlockPage() {
  return (
    <Suspense
      fallback={
        <div className="text-center py-20">
          <p className="text-text-muted">Loading...</p>
        </div>
      }
    >
      <UnlockForm />
    </Suspense>
  );
}
