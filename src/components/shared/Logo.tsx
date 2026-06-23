import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 text-[22px] font-extrabold tracking-normal">
      <span className="rounded-md bg-[#22C55E] px-2.5 py-1 text-white">User</span>
      <span className="text-[#14532D]">Testing</span>
    </Link>
  );
}
