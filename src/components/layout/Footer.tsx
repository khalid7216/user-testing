import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { NewsletterWidget } from "@/components/shared/NewsletterWidget";

const pages = [
  ["Contact Us", "/contact"],
  ["About Us", "/about"],
  ["Terms & Conditions", "/terms"],
  ["Privacy Policy", "/privacy"],
];

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#F9FAFB]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1.2fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-6 text-[#6B7280]">
            Signal app description for curious readers, remote workers, creators, and anyone testing better ways to understand the world.
          </p>
        </div>
        <div>
          <h2 className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#111827]">All Pages</h2>
          <ul className="space-y-3 border-l-2 border-[#22C55E] pl-4">
            {pages.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-sm font-medium text-[#6B7280] transition hover:text-[#0D9488]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#111827]">Newsletter</h2>
          <NewsletterWidget compact />
          <div className="mt-5 flex gap-3">
            {["f", "ig"].map((label) => (
              <a key={label} href="#" aria-label={`${label} social profile`} className="grid size-9 place-items-center rounded-full border border-[#E5E7EB] bg-white text-xs font-black uppercase text-[#111827] transition hover:border-[#0D9488] hover:text-[#0D9488]">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[#E5E7EB] py-5 text-center text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
        © 2026 USER TESTING, LLC. ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
