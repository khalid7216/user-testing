import Image from "next/image";
import type { Post } from "@/lib/types";

export function BlogContent({ post }: { post: Post }) {
  return (
    <article className="min-w-0">
      <h1 className="text-4xl font-extrabold leading-tight text-[#111827] md:text-5xl">{post.title}</h1>
      <p className="mt-4 text-sm font-semibold text-[#6B7280]">{post.date} &middot; {post.readTime}</p>
      <p id="introduction" className="mt-8 scroll-mt-28 text-xl font-bold leading-8 text-[#111827]">
        {post.content[0]}
      </p>
      <section id="remote-work" className="scroll-mt-28">
        <h2 className="mt-10 text-2xl font-extrabold text-[#111827]">Remote Work</h2>
        <p className="mt-4 text-base leading-8 text-[#4B5563]">{post.content[1]}</p>
      </section>
      <section id="destinations" className="scroll-mt-28">
        <h2 className="mt-10 text-2xl font-extrabold text-[#111827]">Destinations</h2>
        <p className="mt-4 text-base leading-8 text-[#4B5563]">{post.content[2]}</p>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
          <Image src={post.image} alt="" fill className="object-cover" sizes="(min-width:1024px) 680px, 100vw" />
        </div>
      </section>
      <section id="challenges" className="scroll-mt-28">
        <h2 className="mt-10 text-2xl font-extrabold text-[#111827]">Challenges</h2>
        <p className="mt-4 text-base leading-8 text-[#4B5563]">{post.content[3]}</p>
        <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-7 text-[#4B5563]">
          <li>Protect attention with clear start and stop rituals.</li>
          <li>Use shared notes to make decisions visible across time zones.</li>
          <li>Choose destinations that support both work and recovery.</li>
        </ul>
      </section>
      <section id="future" className="scroll-mt-28">
        <h2 className="mt-10 text-2xl font-extrabold text-[#111827]">Future</h2>
        <p className="mt-4 text-base leading-8 text-[#4B5563]">
          The next wave is quieter and more useful: better research assistants, sharper collaboration norms, and spaces designed for people who move with intention.
        </p>
      </section>
    </article>
  );
}
