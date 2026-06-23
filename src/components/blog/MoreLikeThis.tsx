import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/types";
import { posts } from "@/lib/dummy-data";

export function MoreLikeThis({ current }: { current: Post }) {
  const related = posts.filter((post) => post.id !== current.id).slice(0, 4);

  return (
    <section className="mt-14 border-t border-[#E5E7EB] pt-8">
      <h2 className="mb-6 text-2xl font-extrabold text-[#111827]">More Like This:</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {related.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group grid grid-cols-[1fr_120px] gap-4 rounded-lg border border-[#E5E7EB] p-4 transition hover:shadow-md">
            <span>
              <span className="text-xs font-bold uppercase tracking-wide text-[#0D9488]">{post.author.name}</span>
              <span className="mt-2 block text-base font-bold leading-snug text-[#111827] group-hover:text-[#0D9488]">{post.title}</span>
            </span>
            <span className="relative aspect-[4/3] overflow-hidden rounded-md bg-gray-100">
              <Image src={post.image} alt="" fill className="object-cover" sizes="120px" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
