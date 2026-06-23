import type { Metadata } from "next";
import { BlogBanner } from "@/components/blog/BlogBanner";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { CommentForm } from "@/components/blog/CommentForm";
import { MoreLikeThis } from "@/components/blog/MoreLikeThis";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { getPostBySlug } from "@/lib/dummy-data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <>
      <BlogBanner />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[180px_minmax(0,1fr)] lg:px-8 xl:grid-cols-[180px_minmax(0,1fr)_300px]">
        <TableOfContents />
        <div>
          <BlogContent post={post} />
          <CommentForm />
          <MoreLikeThis current={post} />
        </div>
        <BlogSidebar />
      </div>
    </>
  );
}
