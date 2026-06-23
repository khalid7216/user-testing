"use client";

import { Grid3X3, List } from "lucide-react";
import { useState } from "react";

const filters = ["All", "Recent", "Popular", "Featured", "Trending"];

export function CategoryFilters() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="flex flex-col justify-between gap-4 border-y border-[#E5E7EB] py-4 md:flex-row md:items-center">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={activeFilter === filter ? "rounded-full bg-[#0D9488] px-4 py-2 text-sm font-bold text-white" : "rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-[#4B5563] hover:text-[#0D9488]"}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button aria-label="Grid view" onClick={() => setView("grid")} className={view === "grid" ? "grid size-10 place-items-center rounded-md bg-[#0D9488] text-white" : "grid size-10 place-items-center rounded-md border border-[#E5E7EB] text-[#6B7280] hover:text-[#0D9488]"}>
          <Grid3X3 size={18} />
        </button>
        <button aria-label="List view" onClick={() => setView("list")} className={view === "list" ? "grid size-10 place-items-center rounded-md bg-[#0D9488] text-white" : "grid size-10 place-items-center rounded-md border border-[#E5E7EB] text-[#6B7280] hover:text-[#0D9488]"}>
          <List size={18} />
        </button>
      </div>
    </div>
  );
}
