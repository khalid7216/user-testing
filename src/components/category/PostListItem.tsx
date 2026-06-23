import type { Post } from "@/lib/types";
import { PostCard } from "@/components/shared/PostCard";

export function PostListItem({ post }: { post: Post }) {
  return <PostCard post={post} horizontal />;
}
