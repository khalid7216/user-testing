import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact the User Testing editorial team.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.9fr_1.1fr]">
      <div>
        <h1 className="text-4xl font-extrabold text-[#111827]">Contact Us</h1>
        <p className="mt-5 leading-7 text-[#6B7280]">
          Send story ideas, partnership notes, corrections, or reader feedback. The team reads every message and replies when a response is useful.
        </p>
        <div className="mt-8 space-y-2 text-sm font-semibold text-[#111827]">
          <p>Email: hello@usertesting.example</p>
          <p>Social: Facebook / Instagram</p>
        </div>
      </div>
      <form className="space-y-4 rounded-lg border border-[#E5E7EB] p-6">
        <Input placeholder="Name" required />
        <Input placeholder="Email Address" type="email" required />
        <Input placeholder="Subject" required />
        <Textarea placeholder="Message" required />
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}
