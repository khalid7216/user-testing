import type { Metadata } from "next";
import { CategoryPageView } from "@/components/category/CategoryPageView";

function titleFromSlug(slug: string) {
  return slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const title = `${titleFromSlug(category)} Blogs`;
  return {
    title,
    description: `Read the latest ${title.toLowerCase()} on User Testing.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  return <CategoryPageView category={category} />;
}
