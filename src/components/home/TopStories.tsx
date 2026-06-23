import Image from "next/image";
import Link from "next/link";
import { topStories } from "@/lib/dummy-data";

export function TopStories() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-extrabold text-[#111827]">Top Stories</h2>
      <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
        {topStories.map((post, index) => (
          <article key={post.id} className="grid grid-cols-[44px_1fr_72px] items-center gap-4 py-4">
            <span className="text-3xl font-black text-[#D1D5DB]">{index + 1}</span>
            <div className="min-w-0">
              <Link href={`/blog/${post.slug}`} className="line-clamp-2 font-bold leading-snug text-[#111827] hover:text-[#0D9488]">
                {post.title}
              </Link>
              <p className="mt-1 text-xs font-medium text-[#6B7280]">{post.author.name} &middot; {post.date} &middot; {post.viewsCount} reads</p>
            </div>
            <Link href={`/blog/${post.slug}`} className="relative size-[72px] overflow-hidden rounded-md bg-gray-100">
              <Image src={post.image} alt="" fill className="object-cover" sizes="72px" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
