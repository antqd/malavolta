// src/app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import SiteFooter from "@/components/footers/newsletter-footer";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ChevronRight,
  Tractor,
  Wrench,
  ShoppingCart,
  Newspaper,
  Star,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HERO = {
  titleTop: " LE TUE SFIDE",
  titleAccent: "DIVENTANO LA NOSTRA MISSIONE",
  text: "Un’ampia scelta di macchine agricole, attrezzature e servizi post-vendita per accompagnarti in ogni stagione.",
  bgImage: "/images/home.png",
};

const NEWS = [
  {
    slug: "bando-zes-unica-2025-opportunita",
    tag: "BANDO",
    title:
      "Bando ZES Unica 2025: opportunità di crescita per le imprese agricole",
    excerpt:
      "Regole e modello per il credito d’imposta nelle aree ZES: come accedervi e a chi conviene.",
    img: "/images/news/img1.png",
  },
  {
    slug: "bando-isi-inail-2025",
    tag: "FINANZIAMENTI",
    title: "Bando ISI INAIL 2025: sicurezza e innovazione in agricoltura",
    excerpt:
      "Contributi a fondo perduto per migliorare sicurezza e sostenibilità delle aziende.",
    img: "/images/news/img2.png",
  },
  {
    slug: "risparmio-energetico-atomizzatori",
    tag: "AGEVOLAZIONI",
    title:
      "Risparmio energetico: voucher per atomizzatori di nuova generazione",
    excerpt:
      "Contributi fino a 5.000€ per attrezzature più efficienti e meno energivore.",
    img: "/images/news/img3.png",
  },
  {
    slug: "le-nostre-ultime-consegne",
    tag: "CONSEGNE",
    title: "Le nostre ultime consegne in azienda",
    excerpt:
      "Una selezione delle consegne recenti: trattori, attrezzature e soluzioni su misura.",
    img: "/images/team/team.png",
  },
];

const CATEGORIE = [
  {
    title: "Trattori nuovi",
    href: "/trattori/nuovi",
    img: "/images/trattori.png",
    icon: <Tractor className="h-5 w-5" />,
  },
  {
    title: "Trattori usati",
    href: "/trattori/usati",
    img: "/images/trattori2.png",
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    title: "Officina Ricambi",
    href: "/servizi#officina",
    img: "/images/ricambi2.png",
    icon: <Wrench className="h-5 w-5" />,
  },
];

const BRANDS = [
  {
    name: "New Holland",
    src: "/images/loghi/logo-new-holland-agriculture.png",
  },
  {
    name: "Landini",
    src: "/images/loghi/logo-landini.png",
  },
  {
    name: "Massey Ferguson",
    src: "/images/loghi/logo-massey-ferguson.png",
  },
  {
    name: "Ambrogio",
    src: "/images/loghi/Ambrogio.png",
  },
  {
    name: "Ferri",
    src: "/images/loghi/logo-ferri.png",
  },
  {
    name: "McCormick",
    src: "/images/loghi/logo-mccormick.png",
  },
  {
    name: "Kuhn",
    src: "/images/loghi/logo-kuhn.png",
  },
  {
    name: "Carraro",
    src: "/images/loghi/logo-carraro.png",
  },
];

// RECENSIONI (aggiornate)
const REVIEWS = [
  {
    name: "Lorenzo F.",
    company: "Soc. Agricola Verde Campo",
    rating: 5,
    text: "Acquisto impeccabile: consegna puntuale e supporto serio. Hanno configurato il mezzo in base ai nostri appezzamenti.",
  },
  {
    name: "Marta G.",
    company: "Frutteti Valmarecchia",
    rating: 4,
    text: "Macchine affidabili e tecnici disponibili. Un piccolo slittamento sui tempi, ma assistenza davvero risolutiva.",
  },
  {
    name: "Alessandro T.",
    company: "Azienda Cereali TerraNova",
    rating: 5,
    text: "Dal preventivo al finanziamento, tutto seguito con chiarezza. Il trattore arriva già pronto lavoro, zero perdite di tempo.",
  },
  {
    name: "Chiara L.",
    company: "Coop. Orti di Pianura",
    rating: 5,
    text: "Ricambi sempre disponibili e prezzi onesti. Consulenza concreta per scegliere l’attrezzatura giusta per l’orto.",
  },
];

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".hero-stagger", {
        opacity: 0,
        y: 28,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
      });

      gsap.to(".hero-image", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".news-card").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          delay: Math.min(i * 0.06, 0.3),
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".cat-card").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 26,
          duration: 0.6,
          delay: Math.min(i * 0.08, 0.4),
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      const strip = document.querySelector(".brand-strip-inner");
      if (strip) {
        const totalW = (strip as HTMLElement).scrollWidth / 2;
        gsap.to(strip, { x: -totalW, ease: "none", duration: 55, repeat: -1 });
      }

      const reviews = document.querySelector(
        ".reviews-track"
      ) as HTMLElement | null;
      if (reviews) {
        const distance = reviews.scrollWidth / 2;
        const tween = gsap.to(reviews, {
          x: -distance,
          ease: "none",
          duration: 60,
          repeat: -1,
        });
        reviews.addEventListener("mouseenter", () => tween.pause());
        reviews.addEventListener("mouseleave", () => tween.resume());
      }
    },
    { scope: pageRef }
  );

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      <AnimatedIndicatorNavbar />

      {/* HERO */}
      <section
        className="hero relative overflow-hidden pt-24 pb-20 md:pb-28"
        style={{
          background:
            "linear-gradient(135deg,#000000 0%,#222222 50%,#000000 100%)",
        }}
      >
        <div className="absolute inset-0">
          <Image
            src={HERO.bgImage}
            alt="Malavolta sede"
            fill
            sizes="100vw"
            priority
            className="hero-image object-cover opacity-20"
          />
        </div>

        <div className="relative container z-10 text-white grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="hero-stagger text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="text-white">{HERO.titleTop}</span>{" "}
              <span className="text-[#FFD700]">{HERO.titleAccent}</span>
            </h1>
            <p className="hero-stagger mt-4 text-lg md:text-2xl text-white/90 max-w-3xl">
              {HERO.text}
            </p>

            <div className="hero-stagger mt-6 flex flex-wrap gap-3">
              <Badge className="bg-[#FFD700] text-black">
                <Tractor className="w-4 h-4 mr-2" />
                Nuovo & Usato
              </Badge>
              <Badge className="bg-[#FFD700] text-black">
                <Wrench className="w-4 h-4 mr-2" />
                Assistenza rapida
              </Badge>
              <Badge className="bg-[#FFD700] text-black">
                <Newspaper className="w-4 h-4 mr-2" />
                Bandi & Agevolazioni
              </Badge>
            </div>

            <div className="hero-stagger mt-8 flex flex-wrap gap-3">
              <Link href="/trattori/nuovi">
                <Button
                  size="lg"
                  className="text-lg px-7 bg-[#FFD700] text-black hover:bg-yellow-400"
                >
                  Vedi i trattori <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contatti">
                <Button
                  size="lg"
                  className="text-lg px-7 bg-white border border-black text-black hover:bg-[#FFD700] hover:text-black"
                >
                  Contattaci
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden md:block relative min-h-[360px]">
            <Image
              src="/images/home2.png"
              alt="Showroom"
              fill
              className="object-cover rounded-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </section>

      {/* CATEGORIE */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {CATEGORIE.map((c) => (
              <Link key={c.title} href={c.href} className="cat-card group">
                <article className="relative overflow-hidden rounded-2xl border bg-white hover:shadow-xl transition-all">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-sm backdrop-blur">
                        {c.icon}
                        <span>{c.title}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="inline-flex items-center text-[#000000] font-medium">
                      Entra <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NOTIZIE */}
      <section className="py-14 bg-gray-50">
        <div className="container">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                Notizie in evidenza
              </h2>
              <p className="text-gray-600">
                Bandi, agevolazioni, consegne e novità dal mondo Malavolta.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-[#000000] inline-flex items-center"
            >
              Vai al blog <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {NEWS.map((n) => (
              <Link key={n.slug} href={`/blog/${n.slug}`} className="group">
                <Card className="news-card hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={n.img}
                      alt={n.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-5">
                    <Badge className="mb-3 bg-[#FFD700] text-black">
                      {n.tag}
                    </Badge>
                    <h3 className="font-semibold mb-2 leading-snug line-clamp-2">
                      {n.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {n.excerpt}
                    </p>
                    <div className="mt-3 text-sm text-[#000000] inline-flex items-center">
                      Leggi di più <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-10 bg-black text-white overflow-hidden">
        <div className="container mb-5">
          <h3 className="text-lg font-semibold text-white">
            Rivenditori autorizzati
          </h3>
        </div>
        <div className="relative">
          <div className="brand-strip-inner flex gap-14 whitespace-nowrap will-change-transform items-center">
            {[...BRANDS, ...BRANDS]
              .filter((b) => b.src && b.src.trim() !== "")
              .map((b, i) => (
                <div key={i} className="shrink-0 px-2 flex items-center">
                  <div className="relative h-12 w-44">
                    <Image
                      src={b.src}
                      alt={b.name || "Brand"}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* RECENSIONI */}
      <section className="py-14 bg-gray-50 overflow-hidden">
        <div className="container mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Cosa dicono i nostri clienti
          </h2>
          <p className="text-gray-600">
            Recensioni verificate da aziende agricole e professionisti.
          </p>
        </div>

        <div className="relative">
          <div className="reviews-viewport overflow-hidden">
            <div className="reviews-track flex gap-6 px-4 will-change-transform">
              {[...REVIEWS, ...REVIEWS].map((r, i) => (
                <Card
                  key={i}
                  className="shrink-0 w-[360px] md:w-[420px] hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{r.name}</div>
                        <div className="text-xs text-gray-600">{r.company}</div>
                      </div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`h-4 w-4 ${
                              idx < r.rating
                                ? "text-[#FFD700] fill-[#FFD700]"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                      “{r.text}”
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-black to-[#222222] text-white">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold text-yellow-500">
              Hai bisogno di un preventivo o vuoi una consulenza?
            </h3>
            <p className="mt-3 text-white/90">
              Siamo al tuo fianco: finanziamenti, officina, ricambi e
              configurazioni su misura.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/contatti">
                <Button
                  size="lg"
                  className="text-lg px-7 bg-[#FFD700] text-black hover:bg-yellow-400"
                >
                  Contattaci <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/servizi">
                <Button
                  size="lg"
                  className="text-lg px-7 bg-white border border-black text-black hover:bg-[#FFD700] hover:text-black"
                >
                  Scopri i servizi
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative min-h-[280px]">
            <Image
              src="/images/logo.png"
              alt="Consulenza e assistenza"
              fill
              className="object-cover rounded-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
