// src/app/blog/[slug]/page.tsx
import { use } from "react"; // 👈 per unwrap dei params in RSC
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import SiteFooter from "@/components/footers/newsletter-footer";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug } from "../data";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>; // 👈 tipo corretto
}) {
  const { slug } = use(params); // 👈 unwrap (oppure await se usi async)
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const date = new Date(post.date).toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />

      {/* Header gradient */}
      <section
        className="relative pt-28 pb-10"
        style={{
          background:
            "linear-gradient(135deg,#0E3A66 0%,#164B83 50%,#1C6FB2 100%)",
        }}
      >
        <div className="container text-white">
          <div className="text-sm mb-3 text-white/80">
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>{" "}
            / {post.tag}
          </div>
          <Badge className="bg-white/15 border-white/25 text-white mb-3">
            {post.tag}
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold max-w-4xl">
            {post.title}
          </h1>
          <div className="mt-2 text-white/80">{date}</div>
        </div>
      </section>

      {/* Cover + contenuto */}
      <section className="py-10">
        <div className="container grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="prose prose-slate max-w-none">
              {post.content.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
