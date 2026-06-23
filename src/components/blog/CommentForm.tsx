"use client";

import { Mail, User } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function CommentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const comment = String(data.get("comment") ?? "").trim();
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    if (!comment || !name || !email) {
      setError("Please fill in comment, name, and email before posting.");
      setSubmitted(false);
      return;
    }
    setError("");
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form className="mt-12 border-t border-[#E5E7EB] pt-8" noValidate onSubmit={handleSubmit}>
      <h2 className="text-2xl font-extrabold text-[#111827]">Leave a Reply</h2>
      <p className="mt-2 text-sm text-[#6B7280]">Your email address will not be published. Required fields are marked *</p>
      <div className="mt-6 space-y-4">
        <Textarea name="comment" placeholder="Comment *" required />
        <div className="grid gap-4 md:grid-cols-2">
          <label className="relative block">
            <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
            <Input name="name" placeholder="Name *" required className="pl-9" />
          </label>
          <label className="relative block">
            <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
            <Input name="email" placeholder="Email *" type="email" required className="pl-9" />
          </label>
        </div>
        <label className="flex gap-3 text-sm leading-6 text-[#6B7280]">
          <input type="checkbox" className="mt-1 size-4 accent-[#0D9488]" />
          Save my name, email, and website in this browser for the next time I comment.
        </label>
        <Button type="submit">Post Comment</Button>
        {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
        {submitted && <p className="text-sm font-semibold text-[#0D9488]">Thanks, your comment is ready for moderation.</p>}
      </div>
    </form>
  );
}
