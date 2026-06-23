import Link from "next/link";
import { CategoryBanner } from "@/components/category/CategoryBanner";
import { CategoryFilters } from "@/components/category/CategoryFilters";
import { Pagination } from "@/components/category/Pagination";
import { PostGrid } from "@/components/category/PostGrid";
import { PostListItem } from "@/components/category/PostListItem";
import { getCategoryPosts, posts } from "@/lib/dummy-data";

function titleFromSlug(slug: string) {
  return slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

export function CategoryPageView({ category }: { category: string }) {
  const title = `${titleFromSlug(category)} Blogs`;
  const categoryPosts = getCategoryPosts(category);
  const pagePosts = categoryPosts.length >= 6 ? categoryPosts : posts.slice(0, 9);

  return (
    <>
      <CategoryBanner />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 text-sm font-medium text-[#6B7280]">
          <Link href="/" className="hover:text-[#0D9488]">Home</Link> / {title}
        </div>
        <h1 className="mb-8 text-center text-4xl font-extrabold text-[#111827]">{title}</h1>
        <CategoryFilters />
        <div className="mt-10">
          <PostGrid posts={pagePosts.slice(0, 6)} />
        </div>
        <div className="mt-12 border-t border-[#E5E7EB]">
          {pagePosts.slice(0, 4).map((post) => (
            <PostListItem key={post.id} post={post} />
          ))}
        </div>
        <Pagination />
      </div>
    </>
  );
}
