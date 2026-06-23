"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterWidget({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <form
      className={compact ? "space-y-3" : "flex flex-col gap-3 sm:flex-row"}
      onSubmit={(event) => {
        event.preventDefault();
        setSubscribed(true);
        setEmail("");
      }}
    >
      <Input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email Address" type="email" required />
      <Button type="submit" className={compact ? "w-full" : "sm:w-auto"}>
        {subscribed ? "Subscribed!" : "Subscribe"}
      </Button>
      {subscribed && <p className="text-sm font-semibold text-[#0D9488] sm:self-center">Subscribed!</p>}
    </form>
  );
}
