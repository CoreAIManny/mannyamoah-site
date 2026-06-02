"use client";

import { useState, useMemo } from "react";
import GuideListItem from "./GuideListItem";

interface GuideData {
  slug: string;
  title: string;
  category: string;
  industry: string;
  topic: string;
  description: string;
  date: string;
}

const industries = ["All", "Care", "Finance", "Professional Services", "Trades", "E-Commerce"];
const topics = ["All", "Getting Started", "Automation", "AI Tools", "Compliance", "Cost Savings", "Case Studies"];

export default function GuideFilters({ guides }: { guides: GuideData[] }) {
  const [industry, setIndustry] = useState("All");
  const [topic, setTopic] = useState("All");
  const [search, setSearch] = useState("");
  const [sortNewest, setSortNewest] = useState(true);

  const filtered = useMemo(() => {
    let result = guides;

    if (industry !== "All") {
      result = result.filter((g) => g.industry === industry || g.industry === "All");
    }
    if (topic !== "All") {
      result = result.filter((g) => g.topic === topic || g.category === topic);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.category.toLowerCase().includes(q)
      );
    }

    result = [...result].sort((a, b) => {
      const diff = new Date(b.date).getTime() - new Date(a.date).getTime();
      return sortNewest ? diff : -diff;
    });

    return result;
  }, [guides, industry, topic, search, sortNewest]);

  return (
    <>
      {/* Industry filters */}
      <div className="mt-8">
        <div className="font-headline text-[11px] uppercase tracking-[2px] text-text-muted mb-2">
          By Industry
        </div>
        <div className="flex flex-wrap gap-2.5">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setIndustry(ind)}
              className={`px-[18px] py-2 rounded-full font-body text-[13px] font-medium cursor-pointer border-none transition-all ${
                industry === ind
                  ? "bg-nav-bg text-white"
                  : "bg-bg-warm-darker text-text-muted hover:bg-[#ccc8c0] hover:text-text-primary"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </div>

      {/* Topic filters */}
      <div className="mt-4">
        <div className="font-headline text-[11px] uppercase tracking-[2px] text-text-muted mb-2">
          By Topic
        </div>
        <div className="flex flex-wrap gap-2.5">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => setTopic(t)}
              className={`px-[18px] py-2 rounded-full font-body text-[13px] font-medium cursor-pointer border-none transition-all ${
                topic === t
                  ? "bg-nav-bg text-white"
                  : "bg-bg-warm-darker text-text-muted hover:bg-[#ccc8c0] hover:text-text-primary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 mb-4 gap-3">
        <input
          type="text"
          placeholder="Search guides..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-[300px] px-4 py-2.5 border-2 border-bg-warm-darker rounded-lg font-body text-[14px] bg-surface text-text-primary placeholder:text-[#b0ab9f] focus:outline-none focus:border-accent transition-colors"
        />
        <button
          onClick={() => setSortNewest(!sortNewest)}
          className="text-[13px] text-text-muted cursor-pointer bg-transparent border-none"
        >
          {sortNewest ? "Newest first ▾" : "Oldest first ▾"}
        </button>
      </div>

      {/* Count */}
      <div className="text-[14px] text-text-muted mb-6">
        Showing {filtered.length} resource{filtered.length !== 1 ? "s" : ""}
      </div>

      {/* Guide list */}
      <div>
        {filtered.map((guide) => (
          <GuideListItem
            key={guide.slug}
            slug={guide.slug}
            category={guide.category}
            title={guide.title}
            description={guide.description}
          />
        ))}
        {filtered.length === 0 && (
          <p className="text-text-muted text-center py-12">
            No guides match your filters. Try adjusting your search.
          </p>
        )}
      </div>
    </>
  );
}
