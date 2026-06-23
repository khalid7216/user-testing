import * as React from "react";
import { cn } from "@/lib/utils";

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-[#0D9488] px-5 text-sm font-semibold text-white transition hover:bg-[#0f766e] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30",
        className,
      )}
      {...props}
    />
  );
}
