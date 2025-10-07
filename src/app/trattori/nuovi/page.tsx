"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import PageHero from "@/components/sections/page-hero";
import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import SiteFooter from "@/components/footers/newsletter-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Megaphone,
  Truck,
  Shield,
} from "lucide-react";

import { api } from "@/lib/api";
import type { Trattore } from "@/lib/catalog";
import { formatPriceCents, LOW_STOCK_LABEL, isLowStock1 } from "@/lib/catalog";

type SortKey = "recenti" | "prezzoAsc" | "prezzoDesc";

function imgSrc(src?: string | null) {
  if (!src) return "/placeholder.png";
  const s = (src || "").trim();
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  if (s.startsWith("/")) return s;
  return "/placeholder.png";
}

type Brand = {
  id: string;
  label: string;
  query: string;
  logo: string;
  accentFrom: string;
  accentTo: string;
};

// LOGHI: /public/images/loghi/
const BRANDS: Brand[] = [
  {
    id: "newholland",
    label: "New Holland",
    query: "New Holland",
    logo: "/images/loghi/logo-new-holland.png",
    accentFrom: "#0047B3",
    accentTo: "#FFD700",
  },
  {
    id: "landini",
    label: "Landini",
    query: "Landini",
    logo: "/images/loghi/logo-landini.png",
    accentFrom: "#1E90FF",
    accentTo: "#6DD5FA",
  },
  {
    id: "carraro",
    label: "Antonio Carraro",
    query: "Carraro",
    logo: "/images/loghi/logo-antonio-carraro.png",
    accentFrom: "#B00000",
    accentTo: "#000000",
  },
];

export default function TrattoriNuoviPage() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<SortKey>("recenti");
  const [items, setItems] = useState<Trattore[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const load = async () => {
    try {
      setLoading(true);
      setErr(null);
      const d = await api.list("nuovi", q);
      setItems((d as any).items || []);
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    let data = items.slice();
    if (q.trim()) {
      const needle = q.toLowerCase();
      data = data.filter((i) =>
        [i.name, i.description || ""].join(" ").toLowerCase().includes(needle)
      );
    }
    switch (sort) {
      case "prezzoAsc":
        data.sort((a, b) => (a.price_cents || 9e15) - (b.price_cents || 9e15));
        break;
      case "prezzoDesc":
        data.sort((a, b) => (b.price_cents || -1) - (a.price_cents || -1));
        break;
      default:
        data = data.slice();
    }
    return data;
  }, [items, q, sort]);

  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />

      <PageHero
        titleWhite="TRATTORI"
        titleGold="NUOVI"
        description="Macchine nuove in pronta consegna e su richiesta. Filtra e contattaci per un preventivo."
        imageSrc="/images/postvendita.png"
        badges={[
          { label: "Listino aggiornato", icon: Megaphone },
          { label: "Pronta consegna", icon: Truck },
          { label: "Garanzia ufficiale", icon: Shield },
        ]}
      />

      {/* ===== Caroselli per brand ===== */}
      <section className="pt-8">
        <div className="container space-y-12">
          {BRANDS.map((b) => (
            <BrandCarousel
              key={b.id}
              brand={b}
              items={items}
              loading={loading}
              onSeeAll={() => {
                setQ(b.query);
                setSort("recenti");
                setTimeout(() => {
                  load();
                  document
                    .getElementById("results")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 0);
              }}
            />
          ))}
        </div>
      </section>

      {/* ===== Ricerca / ordina ===== */}
      <section className="pt-12">
        <div className="container">
          <Card className="overflow-hidden border-border/50">
            <div className="grid md:grid-cols-2">
              {/* BLOCCO SINISTRO — titolo come prima */}
              <div className="relative bg-black text-white p-8 md:p-12">
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    background:
                      "radial-gradient(1200px 280px at 10% -10%, #FFD70033, transparent), radial-gradient(800px 280px at 110% 110%, #FFFFFF22, transparent)",
                  }}
                />
                <Badge className="relative bg-white/15 border-white/25 text-white mb-4">
                  Trattori nuovi
                </Badge>

                <h1 className="relative text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  <span className="text-[#FFD700]">TRATTORI</span>{" "}
                  <span className="text-white">NUOVI</span>
                </h1>

                <p className="relative mt-4 text-white/90 max-w-prose">
                  Cerca per marca o modello e ordina per prezzo.
                </p>

                <div className="relative mt-6">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/80" />
                  <Input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Cerca: es. New Holland, Landini…"
                    className="pl-9 bg-white text-base"
                  />
                </div>
                <div className="relative mt-3 flex gap-2">
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white text-white hover:bg-white hover:text-black"
                    onClick={() => {
                      setQ("");
                      setSort("recenti");
                      load();
                    }}
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    Pulisci
                  </Button>
                  <Button
                    onClick={load}
                    className="bg-white text-black hover:bg-white/90"
                  >
                    Cerca
                  </Button>
                </div>
              </div>

              {/* immagine destra */}
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/postvendita.png"
                  alt="Trattori nuovi"
                  fill
                  className="object-cover"
                  sizes="(min-width:768px) 50vw, 100vw"
                  priority
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ===== Ordina ===== */}
      <section className="py-5 bg-muted/40">
        <div className="container flex justify-end">
          <div className="relative w-full md:w-56">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="w-full appearance-none pr-9 pl-3 py-2 rounded-md bg-background text-foreground border border-input"
            >
              <option value="recenti">Ordina: più recenti</option>
              <option value="prezzoAsc">Prezzo: crescente</option>
              <option value="prezzoDesc">Prezzo: decrescente</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* ===== Griglia risultati ===== */}
      <section id="results" className="py-12">
        <div className="container">
          <div className="mb-6 text-sm text-muted-foreground">
            {filtered.length} risultati
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading && filtered.length === 0
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
              : filtered.map((item) => (
                  <ProductCard key={`nuovi-${item.id}`} item={item} tipo="nuovi" />
                ))}
          </div>

          {!loading && filtered.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              Nessun risultato. Prova a cambiare ricerca.
            </div>
          )}
          {err && <p className="text-red-600">{err}</p>}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* ==================== COMPONENTI ==================== */

// Frame immagine: blur-bg + contain + cornici morbide
function PrettyFrame({
  src,
  alt,
  ratioClass,
  padding = true,
  rounded = "rounded-[22px]",
  children,
}: {
  src: string;
  alt: string;
  ratioClass: string;
  padding?: boolean;
  rounded?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`relative ${ratioClass} ${rounded} overflow-hidden ring-1 ring-border/60 shadow-sm bg-muted`}
    >
      <img
        src={src}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover scale-110 blur-xl opacity-40"
        loading="lazy"
      />
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-contain ${
          padding ? "p-2 sm:p-3" : ""
        }`}
        loading="lazy"
      />
      {children}
    </div>
  );
}

function BrandCarousel({
  brand,
  items,
  loading,
  onSeeAll,
}: {
  brand: Brand;
  items: Trattore[];
  loading: boolean;
  onSeeAll: () => void;
}) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const list = useMemo(() => {
    const needle = brand.query.toLowerCase();
    return items.filter((i) =>
      [i.name, i.description || ""].join(" ").toLowerCase().includes(needle)
    );
  }, [items, brand.query]);

  const updateArrows = () => {
    const el = ref.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanPrev(scrollLeft > 10);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    return () => el.removeEventListener("scroll", updateArrows);
  }, [list.length]);

  const scrollBy = (dir: "prev" | "next") => {
    const el = ref.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* header: logo grande + CTA, niente fades */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="rounded-2xl bg-white px-8 py-4 ring-1 ring-border shadow-sm">
            <Image
              src={brand.logo}
              alt={brand.label}
              width={300}
              height={100}
              className="h-16 md:h-20 w-auto object-contain saturate-125 brightness-110"
              priority={false}
            />
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
            onClick={onSeeAll}
          >
            Vedi tutto →
          </Button>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ArrowButton disabled={!canPrev} onClick={() => scrollBy("prev")}>
            <ChevronLeft className="h-5 w-5" />
          </ArrowButton>
          <ArrowButton disabled={!canNext} onClick={() => scrollBy("next")}>
            <ChevronRight className="h-5 w-5" />
          </ArrowButton>
        </div>
      </div>

      {/* lista orizzontale */}
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ scrollbarWidth: "none" }}
      >
        <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

        {loading && list.length === 0 ? (
          Array.from({ length: 6 }).map((_, i) => <SkeletonPoster key={i} />)
        ) : list.length > 0 ? (
          list.map((it) => (
            <article
              key={`${brand.id}-${it.id}`}
              className="relative shrink-0 w-[210px] sm:w-[230px] snap-start"
            >
              <div className="group relative rounded-[22px] overflow-hidden transition-transform duration-300 hover:-translate-y-0.5">
                <PrettyFrame
                  src={imgSrc(it.photo_url)}
                  alt={it.name}
                  ratioClass="aspect-[2/3]"
                >
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-black/0" />
                  <div
                    className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold text-white shadow"
                    style={{
                      background:
                        "linear-gradient(90deg,#00000080,#00000040)",
                    }}
                  >
                    <Star className="h-3.5 w-3.5 fill-white" />
                    {formatPriceCents(it.price_cents)}
                  </div>
                  <h3 className="absolute inset-x-0 bottom-2 px-3 text-white text-sm font-semibold line-clamp-2 drop-shadow">
                    {it.name}
                  </h3>
                  <button
                    aria-label={`Apri ${it.name}`}
                    onClick={() => router.push(`/trattori/nuovi/${it.id}`)}
                    className="absolute inset-0"
                  />
                </PrettyFrame>
              </div>
            </article>
          ))
        ) : (
          <div className="text-muted-foreground py-10">
            Nessun trattore per {brand.label} al momento.
          </div>
        )}
      </div>

      {/* frecce mobile */}
      <div className="mt-3 flex md:hidden justify-end gap-2">
        <ArrowButton disabled={!canPrev} onClick={() => scrollBy("prev")}>
          <ChevronLeft className="h-5 w-5" />
        </ArrowButton>
        <ArrowButton disabled={!canNext} onClick={() => scrollBy("next")}>
          <ChevronRight className="h-5 w-5" />
        </ArrowButton>
      </div>
    </div>
  );
}

function ArrowButton({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`h-9 w-9 rounded-full backdrop-blur bg-background/70 ring-1 ring-border text-foreground flex items-center justify-center transition-opacity ${
        disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-background"
      }`}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}

function SkeletonPoster() {
  return (
    <div className="shrink-0 w-[210px] sm:w-[230px] snap-start">
      <div className="relative aspect-[2/3] rounded-[22px] overflow-hidden bg-muted animate-pulse">
        <div className="absolute left-2 top-2 h-5 w-20 rounded bg-black/20" />
        <div className="absolute bottom-3 left-3 right-8 h-4 rounded bg-black/20" />
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <Card className="overflow-hidden border-border/60 rounded-[22px]">
      <div className="relative aspect-[4/3] bg-muted animate-pulse" />
      <CardContent className="p-4 space-y-2">
        <div className="h-4 w-2/3 bg-muted animate-pulse rounded" />
        <div className="h-3 w-full bg-muted animate-pulse rounded" />
      </CardContent>
    </Card>
  );
}

function ProductCard({
  item,
  tipo,
}: {
  item: Trattore;
  tipo: "nuovi" | "usati";
}) {
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push(`/trattori/${tipo}/${item.id}`)}
      className="overflow-hidden group transition-all duration-300 hover:shadow-lg border-border/60 cursor-pointer rounded-[22px]"
    >
      <div className="relative">
        <PrettyFrame
          src={imgSrc(item.photo_url)}
          alt={item.name}
          ratioClass="aspect-[4/3]"
          padding
        >
          <span className="absolute left-2 top-2 z-10 rounded-md px-2 py-1 text-[11px] font-semibold tracking-wide bg-emerald-100 text-emerald-800 shadow">
            NUOVO
          </span>
        </PrettyFrame>
      </div>

      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-semibold tracking-tight">{item.name}</h3>
        <div className="flex items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground line-clamp-2">
            {item.description || "—"}
          </div>
          <div className="text-sm font-semibold whitespace-nowrap">
            {formatPriceCents(item.price_cents)}
          </div>
        </div>
        {isLowStock1(item) && (
          <div className="text-xs font-semibold text-red-600">
            {LOW_STOCK_LABEL}
          </div>
        )}
        <div className="flex gap-2 pt-1">
          <Link
            href={`/trattori/${tipo}/${item.id}`}
            onClick={(e) => e.stopPropagation()}
            className="w-1/2"
          >
            <Button className="w-full bg-[#FFD700] text-black hover:bg-[#e6c200]">
              Dettagli
            </Button>
          </Link>
          <Link
            href="/contatti"
            onClick={(e) => e.stopPropagation()}
            className="w-1/2"
          >
            <Button
              variant="outline"
              className="w-full border-black text-black hover:bg-[#FFD700] hover:text-black"
            >
              Richiedi info
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
