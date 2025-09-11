"use client";

import { useEffect, useMemo, useState } from "react";
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
  Megaphone,
  Truck,
  Shield,
} from "lucide-react";

import { api } from "@/lib/api";
import type { Trattore } from "@/lib/catalog";
import { formatPriceCents, LOW_STOCK_LABEL, isLowStock1 } from "@/lib/catalog";

const deepBlue = "bg-black";
const deepBlueText = "text-black";
const gold = "text-[#FFD700]";

function imgSrc(src?: string | null) {
  if (!src) return "/placeholder.png";
  const s = src.trim();
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  if (s.startsWith("/")) return s;
  return "/placeholder.png";
}

export default function TrattoriNuoviPage() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"recenti" | "prezzoAsc" | "prezzoDesc">(
    "recenti"
  );
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

      <section className="pt-24">
        <div className="container">
          <Card className="overflow-hidden border-border/50">
            <div className="grid md:grid-cols-2">
              <div className={`${deepBlue} text-white p-8 md:p-12`}>
                <Badge className="bg-white/15 border-white/25 text-white mb-4">
                  Trattori nuovi
                </Badge>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  <span className={gold}>TRATTORI</span>{" "}
                  <span className="text-white">NUOVI</span>
                </h1>
                <p className="mt-4 text-white/90 max-w-prose">
                  Cerca per marca o modello e ordina per prezzo.
                </p>

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
              onChange={(e) => setSort(e.target.value as typeof sort)}
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

      <section className="py-10">
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
          <div
            className={`text-sm font-semibold ${deepBlueText} whitespace-nowrap`}
          >
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
