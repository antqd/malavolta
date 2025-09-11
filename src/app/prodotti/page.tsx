// src/app/trattori/page.tsx
"use client";
import PageHero from "@/components/sections/page-hero";
import {
  Clock,
  Shield,
  MapPin,
  Truck,
  Wrench,
  Megaphone,
  CalendarDays,
} from "lucide-react";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import SiteFooter from "@/components/footers/newsletter-footer";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import {
  ITEMS,
  CATEGORIES,
  type Category,
  type Condition,
  type CatalogItem,
  // ⬇️ helper per il badge “solo 1 disponibile”
  isLowStock1,
  LOW_STOCK_LABEL,
} from "@/app/prodotti/data";

import { Search, Filter, ChevronDown } from "lucide-react";

/** Palette nero + giallo */
const gold = "text-[#FFD700]";
const deepBlue = "bg-black";       // ex blu → nero
const deepBlueText = "text-black"; // ex blu → nero

function formatPrice(p?: number) {
  if (!p || p <= 0) return "Su richiesta";
  return p.toLocaleString("it-IT", { style: "currency", currency: "EUR" });
}

const categoryList: { id: Category; label: string }[] = Object.entries(
  CATEGORIES
).map(([id, label]) => ({ id: id as Category, label }));

export default function TrattoriPage() {
  const [q, setQ] = useState("");
  const [cond, setCond] = useState<"" | Condition>("");
  const [cat, setCat] = useState<"" | Category>("");
  const [sort, setSort] = useState<"recenti" | "prezzoAsc" | "prezzoDesc">(
    "recenti"
  );

  const filtered = useMemo(() => {
    let data = ITEMS.slice();

    if (cond) data = data.filter((i) => i.condition === cond);
    if (cat) data = data.filter((i) => i.category === cat);

    if (q.trim()) {
      const needle = q.toLowerCase();
      data = data.filter((i) =>
        [
          i.title,
          i.brand ?? "",
          i.slug,
          i.powerHp?.toString() ?? "",
          i.year?.toString() ?? "",
        ]
          .join(" ")
          .toLowerCase()
          .includes(needle)
      );
    }

    switch (sort) {
      case "prezzoAsc":
        data.sort((a, b) => (a.price || 9e15) - (b.price || 9e15));
        break;
      case "prezzoDesc":
        data.sort((a, b) => (b.price || -1) - (a.price || -1));
        break;
      default:
        data = data.slice();
    }
    return data;
  }, [q, cond, cat, sort]);

  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />

      <PageHero
        titleWhite="TRATTORI & MACCHINE"
        titleGold="IN VENDITA"
        description="Filtra per condizione, categoria o marca. Nuovo e Usato selezionato con garanzia."
        imageSrc="/images/postvendita.png"
        badges={[
          { label: "Nuovo & Usato", icon: Megaphone },
          { label: "Pronta consegna", icon: Truck },
          { label: "Finanziamenti", icon: Shield },
        ]}
      />

      {/* HEADER */}
      <section className="pt-24">
        <div className="container">
          <Card className="overflow-hidden border-border/50">
            <div className="grid md:grid-cols-2">
              <div className={`${deepBlue} text-white p-8 md:p-12`}>
                <Badge className="bg-white/15 border-white/25 text-white mb-4">
                  Catalogo macchine
                </Badge>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  <span className={gold}>TRATTORI</span> &amp;{" "}
                  <span className="text-white">
                    {" "}
                    MACCHINE
                    <br /> IN VENDITA
                  </span>
                </h1>
                <p className="mt-4 text-white/90 max-w-prose">
                  Filtra per <strong>condizione</strong> (Nuovo/Usato),
                  <strong> categoria</strong> o cerca per marca/modello.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge className="bg-white/10 border-white/20 text-white">
                    Nuovo &amp; Usato
                  </Badge>
                  <Badge className="bg-white/10 border-white/20 text-white">
                    Assistenza tecnica
                  </Badge>
                  <Badge className="bg-white/10 border-white/20 text-white">
                    Consegna rapida
                  </Badge>
                </div>

                <div className="mt-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/80" />
                    <Input
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      placeholder="Cerca: es. New Holland, 100 CV, Landini…"
                      className="pl-9 bg-white/95 border-white/30 text-base"
                    />
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Button
                      variant="outline"
                      className="bg-white/10 border-white text-white hover:bg-white hover:text-black"
                      onClick={() => {
                        setQ("");
                        setCond("");
                        setCat("");
                        setSort("recenti");
                      }}
                    >
                      <Filter className="mr-2 h-4 w-4" />
                      Pulisci filtri
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/postvendita.png"
                  alt="Sede Malavolta"
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

      {/* CHIP FILTRI */}
      <section className="py-4 bg-muted/40">
        <div className="container flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <Chip active={!cond} onClick={() => setCond("")} label="Tutti" />
            <Chip
              active={cond === "nuovo"}
              onClick={() => setCond("nuovo")}
              label="Nuovo"
            />
            <Chip
              active={cond === "usato"}
              onClick={() => setCond("usato")}
              label="Usato"
            />

            <span className="mx-1 text-muted-foreground">|</span>

            <Chip
              active={!cat}
              onClick={() => setCat("")}
              label="Tutte le categorie"
            />
            {categoryList.map((c) => (
              <Chip
                key={c.id}
                active={cat === c.id}
                onClick={() => setCat(c.id)}
                label={c.label}
              />
            ))}
          </div>

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

      {/* RISULTATI */}
      <section className="py-10">
        <div className="container">
          <div className="mb-6 text-sm text-muted-foreground">
            {filtered.length} risultati
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              Nessun risultato. Prova a cambiare filtri o ricerca.
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "px-3 py-1.5 rounded-full text-sm border transition-colors",
        active
          ? "bg-[#FFD700] text-black border-[#FFD700]" // ex primary -> giallo
          : "bg-background border-input hover:bg-muted",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function ProductCard({ item }: { item: CatalogItem }) {
  const isUsed = item.condition === "usato";
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/prodotti/${item.slug}`)}
      className="overflow-hidden group hover:shadow-md transition-shadow border-border/60 cursor-pointer"
    >
      <div className="relative aspect-[4/3] bg-muted">
        <span
          className={[
            "absolute left-2 top-2 z-10 rounded-md px-2 py-1 text-[11px] font-semibold tracking-wide",
            isUsed
              ? "bg-amber-100 text-amber-800"
              : "bg-emerald-100 text-emerald-800",
          ].join(" ")}
        >
          {isUsed ? "USATO" : "NUOVO"}
        </span>

        {item.cover ? (
          <Image
            src={item.cover}
            alt={item.title}
            fill
            className="object-cover transition-transform group-hover:scale-[1.02]"
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-muted-foreground">
            Nessuna immagine
          </div>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        {/* titolo + categoria nella parte bianca */}
        <div>
          <div className="text-xs text-muted-foreground mb-1">
            {CATEGORIES[item.category]}
          </div>
          <h3 className="text-lg font-semibold text-foreground leading-snug">
            {item.title}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {item.brand ?? "—"}
            {item.powerHp ? ` • ${item.powerHp} CV` : ""}
            {item.year ? ` • ${item.year}` : ""}
          </div>

          {/* Prezzo + “solo 1 disponibile” */}
          <div className="flex items-center gap-2">
            <div className={`text-sm font-semibold ${deepBlueText}`}>
              {formatPrice(item.price)}
            </div>
            {isLowStock1(item) && (
              <span className="text-xs font-semibold text-red-600 whitespace-nowrap">
                {LOW_STOCK_LABEL}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            href={`/prodotti/${item.slug}`}
            className="w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Button className="w-full bg-[#FFD700] text-black hover:bg-[#e6c200]">
              Dettagli
            </Button>
          </Link>
          <Link
            href="/contatti"
            className="w-full"
            onClick={(e) => e.stopPropagation()}
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
