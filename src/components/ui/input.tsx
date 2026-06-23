import * as React from "react";
import { cn } from "@/lib/utils";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      suppressHydrationWarning={props.suppressHydrationWarning ?? true}
      className={cn(
        "h-10 w-full rounded-md border border-[#E5E7EB] bg-white px-3 text-sm text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/15",
        props.className,
      )}
    />
  );
}
