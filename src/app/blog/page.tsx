// src/app/blog/page.tsx
import Image from "next/image";
import Link from "next/link";
import { POSTS } from "./data";
import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import SiteFooter from "@/components/footers/newsletter-footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import PageHero from "@/components/sections/page-hero";

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />

      {/* Header gradient uguale alle altre pagine */}
      <PageHero
        titleWhite="BLOG"
        titleGold="MALAVOLTA"
        description="Novità e offerte"
        imageSrc="/images/postvendita.png"
      />

      <section className="py-14">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-5">
                    <Badge variant="secondary" className="mb-3">
                      {p.tag}
                    </Badge>
                    <h3 className="font-semibold mb-2 leading-snug line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {p.excerpt}
                    </p>
                    <div className="mt-3 text-sm text-primary inline-flex items-center">
                      Leggi <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
