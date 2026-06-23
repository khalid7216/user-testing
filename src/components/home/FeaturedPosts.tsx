import { featuredPosts } from "@/lib/dummy-data";
import { PostCard } from "@/components/shared/PostCard";

export function FeaturedPosts() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-extrabold text-[#111827]">Featured Posts</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {featuredPosts.slice(0, 8).map((post) => (
          <PostCard key={post.id} post={post} compact />
        ))}
      </div>
    </section>
  );
}
