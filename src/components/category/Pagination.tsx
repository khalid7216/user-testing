import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
  return (
    <nav aria-label="Pagination" className="mt-12 flex justify-center">
      <div className="flex items-center gap-2">
        <button className="grid size-10 place-items-center rounded-md border border-[#E5E7EB] text-[#6B7280] hover:text-[#0D9488]">
          <ChevronLeft size={18} />
        </button>
        {[1, 2, 3, 4, 5, 6].map((page) => (
          <button key={page} className={page === 1 ? "grid size-10 place-items-center rounded-md bg-[#0D9488] text-sm font-bold text-white" : "grid size-10 place-items-center rounded-md border border-[#E5E7EB] text-sm font-bold text-[#4B5563] hover:text-[#0D9488]"}>
            {page}
          </button>
        ))}
        <button className="grid size-10 place-items-center rounded-md border border-[#E5E7EB] text-[#6B7280] hover:text-[#0D9488]">
          <ChevronRight size={18} />
        </button>
      </div>
    </nav>
  );
}
