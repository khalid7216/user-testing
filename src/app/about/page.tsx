import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About User Testing",
  description: "Learn about User Testing, our editorial mission, and the topics we cover.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-extrabold text-[#111827]">About User Testing</h1>
      <p className="mt-6 text-lg leading-8 text-[#4B5563]">
        User Testing is a multi-topic blog for curious readers who want clear, practical stories about travel, food, technology, wellness, fitness, style, and culture.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-lg border border-[#E5E7EB] p-6">
          <h2 className="text-xl font-extrabold text-[#111827]">Our Mission</h2>
          <p className="mt-3 leading-7 text-[#6B7280]">
            We publish useful, readable stories that help people test better habits, discover smarter tools, and make sense of fast-moving trends without the noise.
          </p>
        </section>
        <section className="rounded-lg border border-[#E5E7EB] p-6">
          <h2 className="text-xl font-extrabold text-[#111827]">What We Cover</h2>
          <p className="mt-3 leading-7 text-[#6B7280]">
            Expect destination ideas, food guides, tech explainers, health routines, entertainment notes, and style observations written for everyday decisions.
          </p>
        </section>
      </div>
    </section>
  );
}
