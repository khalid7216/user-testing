import { categoryColors } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export function CategoryBadge({ category, className }: { category: string; className?: string }) {
  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold uppercase leading-none", categoryColors[category] ?? "bg-gray-900 text-white", className)}>
      {category}
    </span>
  );
}
