import type { Post } from "@/lib/types";
import { PostCard } from "@/components/shared/PostCard";

export function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
