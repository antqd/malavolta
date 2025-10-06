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

const deepBlueText = "text-black";

function imgSrc(src?: string | null) {
  if (!src) return "/placeholder.png";
  const s = src.trim();
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  if (s.startsWith("/")) return s;
  return "/placeholder.png";
}

type SortKey = "recenti" | "prezzoAsc" | "prezzoDesc";

type Brand = {
  id: string;
  label: string;
  query: string; // testo da cercare in name/description
  logo: string;  // path in /public
};

const BRANDS: Brand[] = [
  { id: "newholland", label: "New Holland", query: "New Holland", logo: "/logos/new-holland.png" },
  { id: "landini", label: "Landini", query: "Landini", logo: "/logos/landini.png" },
  { id: "claas", label: "CLAAS", query: "Claas", logo: "/logos/claas.png" },
];

export default function TrattoriNuoviPage() {
  // barra ricerca generale in alto (rimane com’è)
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

  // lista filtrata/ordinata per la griglia generale
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

      {/* ===== Caroselli per brand (3 righe, stile del tuo screen) ===== */}
      <section className="pt-8">
        <div className="container space-y-10">
          {BRANDS.map((b) => (
            <BrandCarousel
              key={b.id}
              brand={b}
              items={items}
              onSeeAll={() => {
                // premendo il logo/freccia “vedi tutto” settiamo la query e scorriamo alla griglia
                setQ(b.query);
                setSort("recenti");
                setTimeout(() => {
                  load();
                  document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
                }, 0);
              }}
            />
          ))}
        </div>
      </section>

      {/* ===== Barra ordinamento + ricerca generale ===== */}
      <section className="pt-10">
        <div className="container">
          <Card className="overflow-hidden border-border/50">
            <div className="grid md:grid-cols-2">
              <div className="bg-black text-white p-8 md:p-12">
                <Badge className="bg-white/15 border-white/25 text-white mb-4">
                  Trattori nuovi
                </Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Cerca per marca o modello e ordina per prezzo.
                </h2>
                <div className="mt-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/80" />
                    <Input
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      placeholder="Cerca: es. New Holland, Landini…"
                      className="pl-9 bg-white/95 border-white/30 text-base"
                    />
                  </div>
                  <div className="mt-3 flex gap-2">
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
                      Pulisci filtri
                    </Button>
                    <Button
                      onClick={load}
                      className="bg-white text-black hover:bg-white/90"
                    >
                      Cerca
                    </Button>
                  </div>
                </div>
              </div>

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

      <section className="py-4 bg-muted/40">
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

      {/* ===== Griglia generale (per ricerca/vedi tutto) ===== */}
      <section id="results" className="py-10">
        <div className="container">
          <div className="mb-6 text-sm text-muted-foreground">
            {filtered.length} risultati
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
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

function BrandCarousel({
  brand,
  items,
  onSeeAll,
}: {
  brand: Brand;
  items: Trattore[];
  onSeeAll: () => void;
}) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const list = useMemo(() => {
    const needle = brand.query.toLowerCase();
    return items.filter((i) =>
      [i.name, i.description || ""].join(" ").toLowerCase().includes(needle)
    );
  }, [items, brand.query]);

  const scrollBy = (dir: "prev" | "next") => {
    const el = ref.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9); // quasi una “pagina”
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <div>
      {/* HEADER: logo a sinistra, frecce a destra */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-9 w-auto">
            <Image
              src={brand.logo}
              alt={brand.label}
              width={160}
              height={36}
              className="h-9 w-auto object-contain"
              priority={false}
            />
          </div>
          <Button size="sm" variant="ghost" className="text-muted-foreground" onClick={onSeeAll}>
            Vedi tutto →
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="outline" onClick={() => scrollBy("prev")} aria-label="Precedente">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="outline" onClick={() => scrollBy("next")} aria-label="Successivo">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* LISTA ORIZZONTALE */}
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ scrollbarWidth: "none" }}
      >
        {/* nascondi scrollbar su webkit */}
        <style jsx>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>

        {list.map((it) => (
          <article
            key={`${brand.id}-${it.id}`}
            className="relative shrink-0 w-[220px] sm:w-[240px] rounded-xl overflow-hidden bg-muted cursor-pointer group"
            onClick={() => router.push(`/trattori/nuovi/${it.id}`)}
          >
            <div className="relative aspect-[2/3]">
              <img
                src={imgSrc(it.photo_url)}
                alt={it.name}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              {/* gradient scuro in basso per il titolo */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 to-black/0" />
              {/* badge prezzo in alto a sinistra con stella */}
              <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-[11px] font-semibold text-white">
                <Star className="h-3.5 w-3.5 fill-white" />
                {formatPriceCents(it.price_cents)}
              </div>
              {/* titolo */}
              <h3 className="absolute inset-x-0 bottom-2 px-3 text-white text-sm font-semibold line-clamp-2 drop-shadow">
                {it.name}
              </h3>
            </div>
          </article>
        ))}

        {list.length === 0 && (
          <div className="text-muted-foreground py-12">Nessun trattore trovato per {brand.label}.</div>
        )}
      </div>
    </div>
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
      className="overflow-hidden group hover:shadow-md transition-shadow border-border/60 cursor-pointer"
    >
      <div className="relative aspect-[4/3] bg-muted">
        <span className="absolute left-2 top-2 z-10 rounded-md px-2 py-1 text-[11px] font-semibold tracking-wide bg-emerald-100 text-emerald-800">
          NUOVO
        </span>
        <img
          src={imgSrc(item.photo_url)}
          alt={item.name}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <div className="flex items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground line-clamp-2">
            {item.description || "—"}
          </div>
          <div className={`text-sm font-semibold ${deepBlueText} whitespace-nowrap`}>
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
            className="w-full"
          >
            <Button className="w-full bg-[#FFD700] text-black hover:bg-[#e6c200]">
              Dettagli
            </Button>
          </Link>
          <Link
            href="/contatti"
            onClick={(e) => e.stopPropagation()}
            className="w-full"
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
