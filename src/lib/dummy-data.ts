import type { Author, Post } from "./types";
import { slugify } from "./utils";
export { categoryColors, tagColors } from "./tokens";

export const categories = [
  "Travel",
  "Food",
  "Sports and Fitness",
  "Health & Beauty",
  "Tech and Gadgets",
  "Style",
  "Tv Serials",
  "Movies",
];

export const authors: Author[] = [
  { id: 1, name: "Lauren Soltau", avatar: "https://i.pravatar.cc/80?img=1" },
  { id: 2, name: "Nilay Patel", avatar: "https://i.pravatar.cc/80?img=2" },
  { id: 3, name: "Alenson Johnson", avatar: "https://i.pravatar.cc/80?img=3" },
  { id: 4, name: "John Gurner", avatar: "https://i.pravatar.cc/80?img=4" },
  { id: 5, name: "Nick Black", avatar: "https://i.pravatar.cc/80?img=5" },
  { id: 6, name: "Emma Roth", avatar: "https://i.pravatar.cc/80?img=6" },
];

const titles = [
  ["how-ai-and-remote-work-are-shaping-the-future", "How AI and Remote Work Are Shaping the Future", "Tech and Gadgets"],
  ["of-acceptance-insipidity-remarkably-is-invitation", "Of acceptance insipidity remarkably is invitation", "Fashion"],
  ["judge-sides-with-travelers-in-landmark-case", "Judge sides with travelers in landmark case", "Travel"],
  ["everyone-hates-this-tiny-design-choice", "Everyone hates this tiny design choice", "Tech and Gadgets"],
  ["why-a-two-seater-plane-changed-weekend-travel", "Why a two-seater plane changed weekend travel", "Travel"],
  ["apples-ai-playlist-is-already-changing-workouts", "Apple's AI Playlist is already changing workouts", "Sports and Fitness"],
  ["nasa-wants-to-put-fresh-food-on-long-missions", "NASA wants to put fresh food on long missions", "Food"],
  ["a-beauty-routine-that-survives-the-red-eye", "A beauty routine that survives the red-eye", "Health & Beauty"],
  ["the-quiet-return-of-cable-knit-style", "The quiet return of cable-knit style", "Style"],
  ["streaming-dramas-are-getting-shorter-and-better", "Streaming dramas are getting shorter and better", "Tv Serials"],
  ["the-most-anticipated-movies-of-the-season", "The most anticipated movies of the season", "Movies"],
  ["remote-teams-are-redesigning-the-office-again", "Remote teams are redesigning the office again", "Tech and Gadgets"],
  ["mountain-towns-for-slow-travel", "Mountain towns for slow travel", "Travel"],
  ["chef-approved-five-minute-lunches", "Chef-approved five minute lunches", "Food"],
  ["the-new-rules-of-recovery-days", "The new rules of recovery days", "Sports and Fitness"],
  ["skin-care-science-without-the-hype", "Skin care science without the hype", "Health & Beauty"],
  ["minimal-bags-for-maximal-days", "Minimal bags for maximal days", "Style"],
  ["the-finale-that-made-everyone-argue", "The finale that made everyone argue", "Tv Serials"],
  ["small-budget-films-with-huge-ideas", "Small budget films with huge ideas", "Movies"],
  ["portable-gadgets-for-better-field-notes", "Portable gadgets for better field notes", "Tech and Gadgets"],
] as const;

export const posts: Post[] = titles.map(([slug, title, category], index) => ({
  id: index + 1,
  slug,
  title,
  excerpt:
    "Travel is more than visiting new places; it is an experience that reshapes perspective, work, culture, and the quiet rituals of everyday life.",
  category,
  image: `https://picsum.photos/seed/user-testing-${index + 1}/900/560`,
  author: authors[index % authors.length],
  date: index < 2 ? "March 30, 2026" : `April ${index + 2}, 2026`,
  readTime: `${6 + (index % 6)} min read`,
  commentsCount: index % 4,
  viewsCount: 120 + index * 37,
  featured: index < 8,
  tags: ["AI", "Tech", "Startup", "Design", "Business", "Marketing", "Web", "SEO", "Coding", "Productivity", "Future"].slice(
    index % 4,
    index % 4 + 4,
  ),
  content: [
    "The boundary between work and travel keeps moving, and the most interesting people are no longer treating that as a problem to solve. They are designing routines that make space for focus, recovery, and curiosity.",
    "Remote tools have matured from emergency infrastructure into a serious creative layer. Teams now expect async decisions, smarter research summaries, and portable workflows that make a new city feel less like a disruption.",
    "Destinations are responding too. Hotels, cafes, studios, and local guides are building for people who want to stay long enough to understand a place without pretending they are on permanent vacation.",
    "The challenge is balance. Better tools can make work feel frictionless, but they can also erase the edges that protect attention. The future belongs to people who can build rituals as carefully as they build systems.",
  ],
}));

export const popularPosts = posts.slice(0, 3);
export const topStories = posts.slice(2, 7);
export const featuredPosts = posts.filter((post) => post.featured);

export function getCategoryPosts(categorySlug: string) {
  const normalized = slugify(categorySlug);
  return posts.filter((post) => slugify(post.category) === normalized || (normalized === "tech-and-gadgets" && post.category === "Tech and Gadgets"));
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug) ?? posts[0];
}
