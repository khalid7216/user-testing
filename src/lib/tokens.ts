export const tokens = {
  fonts: {
    sans: "Inter",
    fallback: "Arial, Helvetica, sans-serif",
  },
  colors: {
    textPrimary: "#111827",
    textMuted: "#6B7280",
    border: "#E5E7EB",
    background: "#FFFFFF",
    footer: "#F9FAFB",
    primaryGreen: "#22C55E",
    darkGreen: "#14532D",
    accentTeal: "#0D9488",
    accentTealHover: "#0F766E",
    banner: "#111827",
  },
  layout: {
    navbarHeight: 74,
    maxWidth: 1280,
    sectionPaddingY: 40,
    cardRadius: 8,
    buttonRadius: 6,
    gridGap: 24,
  },
};

export const categoryColors: Record<string, string> = {
  Travel: "bg-green-500 text-white",
  Food: "bg-orange-500 text-white",
  Fashion: "bg-pink-500 text-white",
  Tech: "bg-blue-600 text-white",
  "Tech and Gadgets": "bg-blue-600 text-white",
  Health: "bg-emerald-500 text-white",
  "Health & Beauty": "bg-emerald-500 text-white",
  Style: "bg-purple-500 text-white",
  "Tv Serials": "bg-red-500 text-white",
  Movies: "bg-yellow-500 text-[#111827]",
  "Sports and Fitness": "bg-teal-500 text-white",
};

export const tagColors: Record<string, string> = {
  AI: "bg-blue-100 text-blue-700",
  Tech: "bg-gray-100 text-gray-700",
  Startup: "bg-purple-100 text-purple-700",
  Design: "bg-pink-100 text-pink-700",
  Business: "bg-gray-900 text-white",
  Marketing: "bg-green-100 text-green-700",
  Web: "bg-teal-100 text-teal-700",
  SEO: "bg-orange-100 text-orange-700",
  Coding: "bg-indigo-100 text-indigo-700",
  Productivity: "bg-yellow-100 text-yellow-800",
  Future: "bg-lime-100 text-lime-700",
};
