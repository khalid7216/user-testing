import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CategoryBadge } from "./CategoryBadge";

export function PostCard({ post, compact = false, horizontal = false }: { post: Post; compact?: boolean; horizontal?: boolean }) {
  if (horizontal) {
    return (
      <article className="group grid gap-5 border-b border-[#E5E7EB] py-7 transition-shadow duration-200 hover:shadow-lg md:grid-cols-[280px_1fr]">
        <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100">
          <Image src={post.image} alt="" fill className="object-cover transition duration-300 group-hover:scale-105" sizes="280px" />
        </Link>
        <div className="flex flex-col justify-center">
          <div className="mb-3 flex items-center gap-2">
            <Image src={post.author.avatar} alt="" width={30} height={30} className="rounded-full" />
            <span className="text-sm font-semibold text-[#111827]">{post.author.name}</span>
            <span className="text-[#6B7280]">v</span>
          </div>
          <Link href={`/blog/${post.slug}`} className="text-2xl font-bold leading-tight text-[#111827] transition-colors group-hover:text-teal-600">
            {post.title}
          </Link>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6B7280]">{post.excerpt}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-[#4B5563]">
                {tag}
              </span>
            ))}
            <Link href={`/blog/${post.slug}`} className="ml-auto text-sm font-bold text-[#0D9488]">
              Read Details -&gt;
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group overflow-hidden rounded-lg border border-[#E5E7EB] bg-white transition-shadow duration-200 hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-video overflow-hidden bg-gray-100">
        <Image src={post.image} alt="" fill className="object-cover transition duration-300 group-hover:scale-105" sizes={compact ? "260px" : "420px"} />
        <CategoryBadge category={post.category} className="absolute bottom-3 left-3" />
      </Link>
      <div className={cn("p-5", compact && "p-4")}>
        <Link href={`/blog/${post.slug}`} className={cn("font-bold leading-tight text-[#111827] transition-colors group-hover:text-teal-600", compact ? "text-base" : "text-xl")}>
          {post.title}
        </Link>
        {!compact && <p className="mt-3 text-sm leading-6 text-[#6B7280]">{post.excerpt}</p>}
        <p className="mt-4 text-xs font-medium text-[#6B7280]">
          {post.commentsCount} Comments &middot; {post.viewsCount} Views &middot; {post.readTime}
        </p>
      </div>
    </article>
  );
}
