import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Podcast, Clock } from "lucide-react";
import { posts } from "@/lib/dummy-data";
import { CategoryBadge } from "@/components/shared/CategoryBadge";

export function HeroSection() {
  const [hero, ...sidePosts] = posts.slice(1, 6);

  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8">
      <article className="group overflow-hidden rounded-lg border border-[#E5E7EB] bg-white transition-shadow duration-200 hover:shadow-lg">
        <Link href={`/blog/${hero.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-gray-100">
          <Image src={hero.image} alt="" fill priority className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 760px, 100vw" />
        </Link>
        <div className="p-6 md:p-8">
          <CategoryBadge category={hero.category} />
          <Link href={`/blog/${hero.slug}`} className="mt-4 block max-w-2xl text-3xl font-extrabold leading-tight text-[#111827] transition hover:text-[#0D9488] md:text-5xl">
            {hero.title}
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-medium text-[#6B7280]">
            <span className="inline-flex items-center gap-1.5"><MessageCircle size={15} /> {hero.commentsCount} Comments</span>
            <span className="inline-flex items-center gap-1.5"><Podcast size={15} /> 0 Podcast</span>
            <span className="inline-flex items-center gap-1.5"><Clock size={15} /> 1hr</span>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <Image src={hero.author.avatar} alt="" width={38} height={38} className="rounded-full" />
            <div className="text-sm">
              <p className="font-bold text-[#111827]">by {hero.author.name}</p>
              <p className="text-[#6B7280]">{hero.date}</p>
            </div>
          </div>
        </div>
      </article>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
        {sidePosts.slice(0, 4).map((post) => (
          <article key={post.id} className="group grid grid-cols-[112px_1fr] gap-4 rounded-lg border border-[#E5E7EB] bg-white p-3 transition-shadow duration-200 hover:shadow-lg sm:grid-cols-[128px_1fr]">
            <Link href={`/blog/${post.slug}`} className="relative aspect-square overflow-hidden rounded-md bg-gray-100">
              <Image src={post.image} alt="" fill className="object-cover transition duration-300 group-hover:scale-105" sizes="128px" />
            </Link>
            <div className="min-w-0">
              <CategoryBadge category={post.category} />
              <Link href={`/blog/${post.slug}`} className="mt-2 line-clamp-2 block text-base font-bold leading-snug text-[#111827] transition group-hover:text-[#0D9488]">
                {post.title}
              </Link>
              <p className="mt-2 text-xs font-medium text-[#6B7280]">{post.commentsCount} Comments &middot; {post.readTime}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
