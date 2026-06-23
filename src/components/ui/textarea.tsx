import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      suppressHydrationWarning={props.suppressHydrationWarning ?? true}
      className={cn(
        "min-h-36 w-full rounded-md border border-[#E5E7EB] bg-white px-3 py-3 text-sm text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/15",
        props.className,
      )}
    />
  );
}
