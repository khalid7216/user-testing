import Image from "next/image";
import Link from "next/link";
import { popularPosts, tagColors } from "@/lib/dummy-data";
import { NewsletterWidget } from "@/components/shared/NewsletterWidget";

const tags = ["AI", "Tech", "Startup", "Design", "Business", "Marketing", "Web", "SEO", "Coding", "Productivity", "Future"];

export function BlogSidebar() {
  return (
    <aside className="space-y-9 lg:col-start-2 xl:sticky xl:top-24 xl:col-start-auto xl:self-start">
      <section>
        <h2 className="mb-4 text-lg font-extrabold text-[#111827]">Popular Posts</h2>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group grid grid-cols-[72px_1fr] gap-3">
              <span className="relative size-[72px] overflow-hidden rounded-md bg-gray-100">
                <Image src={post.image} alt="" fill className="object-cover" sizes="72px" />
              </span>
              <span className="text-sm font-bold leading-snug text-[#111827] group-hover:text-[#0D9488]">{post.title}</span>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-lg font-extrabold text-[#111827]">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className={`rounded-full px-3 py-1 text-xs font-bold ${tagColors[tag]}`}>
              {tag}
            </span>
          ))}
        </div>
      </section>
      <section className="rounded-lg border border-[#E5E7EB] p-5">
        <h2 className="mb-4 text-lg font-extrabold text-[#111827]">Newsletter</h2>
        <NewsletterWidget compact />
      </section>
      <section>
        <h2 className="mb-3 text-lg font-extrabold text-[#111827]">About</h2>
        <p className="text-sm leading-6 text-[#6B7280]">User Testing publishes practical stories about technology, travel, culture, and the way people adapt to new habits.</p>
      </section>
    </aside>
  );
}
