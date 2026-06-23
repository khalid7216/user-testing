"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { categories } from "@/lib/dummy-data";
import { slugify } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button aria-label="Open menu" className="rounded-md border border-[#E5E7EB] p-2 md:hidden" onClick={() => setOpen(true)}>
        <Menu size={20} />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button aria-label="Close menu backdrop" className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white p-6 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-bold uppercase tracking-wide text-[#6B7280]">Menu</span>
              <button aria-label="Close menu" className="rounded-md p-2 hover:bg-gray-100" onClick={() => setOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {categories.map((category) => (
                <Link key={category} href={`/${slugify(category)}`} className="text-base font-semibold text-[#111827]" onClick={() => setOpen(false)}>
                  {category}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
