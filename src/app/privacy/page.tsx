import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the placeholder privacy policy for User Testing.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-extrabold text-[#111827]">Privacy Policy</h1>
      {[
        ["Information We Collect", "Newsletter signups and contact forms may collect the details you choose to submit, such as name, email address, and message content."],
        ["How We Use It", "We use submitted information to respond to messages, improve the publication, and send requested updates."],
        ["Your Choices", "You can unsubscribe from newsletters or request removal of submitted contact information at any time."],
      ].map(([title, body]) => (
        <section key={title} className="mt-8">
          <h2 className="text-xl font-extrabold text-[#111827]">{title}</h2>
          <p className="mt-3 leading-7 text-[#6B7280]">{body}</p>
        </section>
      ))}
    </section>
  );
}
