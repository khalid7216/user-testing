import type { Metadata } from "next";
import { FeaturedPosts } from "@/components/home/FeaturedPosts";
import { HeroSection } from "@/components/home/HeroSection";
import { TopStories } from "@/components/home/TopStories";

export const metadata: Metadata = {
  title: "Travel, Food, Tech & More",
  description: "Read featured stories, top stories, and editor picks from User Testing.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[0.8fr_1.4fr] lg:px-8">
        <TopStories />
        <FeaturedPosts />
      </div>
    </>
  );
}
