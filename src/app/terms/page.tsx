import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the placeholder terms and conditions for User Testing.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-extrabold text-[#111827]">Terms & Conditions</h1>
      {[
        ["Use of Content", "Articles, images, and layouts are provided for informational and demonstration purposes. Do not republish full content without permission."],
        ["Reader Conduct", "Comments and submissions should be respectful, relevant, and free from spam or harmful material."],
        ["Editorial Changes", "We may update, correct, remove, or reorganize content at any time to keep the site useful and accurate."],
      ].map(([title, body]) => (
        <section key={title} className="mt-8">
          <h2 className="text-xl font-extrabold text-[#111827]">{title}</h2>
          <p className="mt-3 leading-7 text-[#6B7280]">{body}</p>
        </section>
      ))}
    </section>
  );
}
