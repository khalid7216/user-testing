"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/shared/Logo";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const nav = [
  ["Travel", "/travel"],
  ["Food", "/food"],
  ["Sports and Fitness", "/sports-and-fitness"],
  ["Health & Beauty", "/health-and-beauty"],
  ["Tech and Gadgets", "/tech-and-gadgets"],
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E7EB] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-[#0D9488]",
                pathname.startsWith(href) ? "text-[#0D9488]" : "text-[#374151]",
              )}
            >
              {label}
            </Link>
          ))}
          <div className="group relative">
            <Link
              href="/style"
              className={cn(
                "inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:text-[#0D9488]",
                pathname.startsWith("/style") ? "text-[#0D9488]" : "text-[#374151]",
              )}
            >
              Style <ChevronDown size={15} />
            </Link>
            <div className="invisible absolute right-0 top-full mt-3 w-44 rounded-lg border border-[#E5E7EB] bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              <Link href="/style/tv-serials" className="block rounded-md px-3 py-2 text-sm font-medium text-[#374151] hover:bg-gray-50 hover:text-[#0D9488]">
                Tv Serials
              </Link>
              <Link href="/style/movies" className="block rounded-md px-3 py-2 text-sm font-medium text-[#374151] hover:bg-gray-50 hover:text-[#0D9488]">
                Movies
              </Link>
            </div>
          </div>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
