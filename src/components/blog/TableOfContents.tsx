"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  ["introduction", "Introduction"],
  ["remote-work", "Remote Work"],
  ["destinations", "Destinations"],
  ["challenges", "Challenges"],
  ["future", "Future"],
];

export function TableOfContents() {
  const [active, setActive] = useState("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-90px 0px -65% 0px" },
    );
    links.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <details className="rounded-lg border border-[#E5E7EB] p-4 lg:hidden">
        <summary className="cursor-pointer text-sm font-extrabold uppercase tracking-[0.18em] text-[#111827]">Contents</summary>
        <nav className="mt-4 space-y-2 border-l border-[#E5E7EB] pl-4">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={cn("block text-sm font-semibold text-[#6B7280] transition hover:text-[#0D9488]", active === id && "text-[#0D9488]")}>
              {label}
            </a>
          ))}
        </nav>
      </details>
      <aside className="sticky top-24 hidden self-start lg:block">
        <h2 className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-[#111827]">Contents</h2>
        <nav className="space-y-2 border-l border-[#E5E7EB] pl-4">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={cn("block text-sm font-semibold text-[#6B7280] transition hover:text-[#0D9488]", active === id && "text-[#0D9488]")}>
              {label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
