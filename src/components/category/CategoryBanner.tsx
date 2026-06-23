import { X } from "lucide-react";

export function CategoryBanner({ title = "1440x390 Banner" }: { title?: string }) {
  return (
    <section className="relative grid h-[260px] place-items-center bg-[#111827] text-white md:h-[390px]">
      <button aria-label="Close banner" className="absolute right-5 top-5 rounded-full border border-white/20 p-2 text-white/80 hover:bg-white/10">
        <X size={18} />
      </button>
      <h1 className="px-4 text-center text-4xl font-extrabold md:text-6xl">{title}</h1>
    </section>
  );
}
