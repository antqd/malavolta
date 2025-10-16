"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Filter, Search, Sparkles } from "lucide-react";

import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import PageHero from "@/components/sections/page-hero";
import SiteFooter from "@/components/footers/newsletter-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { EQUIPMENT_BRANDS, type EquipmentBrand, type EquipmentProduct } from "./data";

export default function AttrezzaturaPage() {
  const [q, setQ] = useState("");
  const [brandId, setBrandId] = useState("");

  const brandOptions = useMemo(
    () =>
      [{ id: "", name: "Tutti i brand" }].concat(
        EQUIPMENT_BRANDS.map((b) => ({ id: b.id, name: b.name }))
      ),
    []
  );

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return EQUIPMENT_BRANDS.map((brand) => {
      const matchesBrand =
        !needle ||
        brand.name.toLowerCase().includes(needle) ||
        brand.blurb.toLowerCase().includes(needle);
      const products = brand.products.filter((p) => {
        if (needle) {
          const haystack = [p.name, p.description, ...(p.tags ?? [])]
            .join(" ")
            .toLowerCase();
          if (!haystack.includes(needle)) {
            return matchesBrand;
          }
        }
        return true;
      });

      if (brandId && brand.id !== brandId) {
        return { brand, products: [] as EquipmentProduct[] };
      }

      return {
        brand,
        products: matchesBrand ? products : products.filter((p) => !!needle),
      };
    });
  }, [brandId, q]);

  const visibleSections = filtered.filter((section) => section.products.length > 0);

  const totalProducts = visibleSections.reduce(
    (acc, section) => acc + section.products.length,
    0
  );

  const resetFilters = () => {
    setQ("");
    setBrandId("");
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />

      <PageHero
        titleWhite="ATTREZZATURE"
        titleGold="PROFESSIONALI"
        description="Brand selezionati per vigneto, orticoltura e pieno campo. Scegli un marchio e scopri le attrezzature consigliate."
        imageSrc="/images/ricambibg.png"
        badges={[
          { label: "Distribuzione ufficiale", icon: Sparkles },
          { label: "Supporto tecnico", icon: Filter },
          { label: "Installazione rapida", icon: ArrowRight },
        ]}
      />

      <section className="pt-16">
        <div className="container">
          <Card className="overflow-hidden border-border/50">
            <div className="grid md:grid-cols-2">
              <div className="relative bg-black text-white p-8 md:p-12">
                <div
                  className="pointer-events-none absolute inset-0 opacity-35"
                  style={{
                    background:
                      "radial-gradient(110% 80% at 0% 0%, rgba(255,215,0,0.25), transparent), radial-gradient(140% 100% at 120% 120%, rgba(255,255,255,0.18), transparent)",
                  }}
                />
                <div className="relative flex flex-col gap-5">
                  <Badge className="bg-white/15 border-white/25 text-white w-fit">
                    Catalogo attrezzature
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                    <span className="text-[#FFD700]">LOGHI</span>{" "}
                    <span className="text-white">&amp; SOLUZIONI</span>
                  </h1>
                  <p className="text-white/85 max-w-prose">
                    Naviga per brand o cerca la funzione di cui hai bisogno. Ogni
                    scheda porta direttamente all&apos;azienda produttrice per
                    schede tecniche, configurazioni e supporto.
                  </p>

                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
                    <Input
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      placeholder="Cerca: es. spollonatrice, rimorchio, irrigazione…"
                      className="pl-10 bg-white/95 text-base text-black placeholder:text-black/50"
                    />
                  </div>

                  <SelectField
                    label="Brand"
                    value={brandId}
                    onChange={setBrandId}
                    options={brandOptions}
                  />

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="bg-white/10 border-white text-white hover:bg-white hover:text-black"
                      onClick={resetFilters}
                    >
                      <Filter className="mr-2 h-4 w-4" />
                      Pulisci filtri
                    </Button>
                    <Button
                      className="bg-white text-black hover:bg-white/90"
                      onClick={() => {
                        if (document) {
                          document
                            .getElementById("brand-sections")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Vedi risultati
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/trattori.png"
                  alt="Attrezzature professionali"
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

      <section
        id="brand-sections"
        className="py-16 space-y-12 bg-muted/40 mt-16 border-t border-border/40"
      >
        <div className="container space-y-12">
          <header className="flex flex-col gap-2">
            <span className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
              panoramica
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {totalProducts} attrezzature selezionate
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Tutte le schede portano al sito ufficiale del produttore per
              approfondire listini, accessori e configurazioni disponibili.
            </p>
          </header>

          {visibleSections.length === 0 && (
            <div className="grid place-items-center py-20 text-center text-muted-foreground bg-background rounded-xl border border-dashed border-border/60">
              Nessun risultato con questi filtri. Prova a cercare un termine
              diverso o selezionare un altro brand.
            </div>
          )}

          {visibleSections.map(({ brand, products }) => (
            <BrandSection key={brand.id} brand={brand} products={products} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: { id: string; name: string }[];
}) {
  return (
    <label className="flex flex-col gap-2 text-sm text-white">
      <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border border-white/20 bg-white text-black px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]"
      >
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.name}
          </option>
        ))}
      </select>
    </label>
  );
}

function BrandSection({
  brand,
  products,
}: {
  brand: EquipmentBrand;
  products: EquipmentProduct[];
}) {
  return (
    <Card className="overflow-hidden border-border/50 shadow-sm">
      <div className="grid lg:grid-cols-[320px_1fr]">
        <div className="relative p-6 lg:p-8">
          <div className="flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl border border-border/60 bg-black shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)]">
            <div className="flex flex-1 items-center justify-center border-b border-white/10 bg-black p-6">
              <div className="relative h-16 w-full max-w-[220px] sm:h-20">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="220px"
                />
              </div>
            </div>
            <div className="flex flex-[1.2] flex-col gap-5 bg-black p-6 text-white">
              <div>
                <h3 className="text-2xl font-semibold text-white">{brand.name}</h3>
                <p className="text-xs uppercase tracking-[0.35em] text-white/55">
                  Partner ufficiale
                </p>
              </div>
              <p className="text-sm leading-relaxed text-white/80">
                {brand.blurb}
              </p>
              <Button
                asChild
                className="mt-auto w-fit bg-white text-black hover:bg-[#f5f5f5]"
              >
                <Link href={brand.siteUrl} target="_blank" rel="noopener noreferrer">
                  Vedi il sito <ArrowRight className="ml-2 h-4 w-4" />
                  <i className="sr-only"> {brand.name}</i>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-background p-6 md:p-8 lg:p-10">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <EquipmentCard
                key={product.id}
                brand={brand}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function EquipmentCard({
  brand,
  product,
}: {
  brand: EquipmentBrand;
  product: EquipmentProduct;
}) {
  const targetHref = brand.siteUrl;

  return (
    <Link
      href={targetHref}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <Card className="h-full border border-white/10 bg-[#0f0f0f] transition-shadow duration-200 group-hover:shadow-xl">
        <div className="relative h-40 w-full overflow-hidden border-b border-white/10">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width:1280px) 20vw, (min-width:768px) 40vw, 80vw"
            />
          ) : (
            <div
              className="h-full w-full"
              style={{ background: "linear-gradient(135deg, #111, #404040)" }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-black shadow">
            {brand.name}
          </div>
        </div>
        <CardContent className="space-y-4 p-5 text-white">
          <div className="space-y-1">
            <h4 className="text-base font-semibold text-white">
              {product.name}
            </h4>
            <p className="text-sm text-white/70 leading-relaxed">
              {product.description}
            </p>
          </div>
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 px-2.5 py-1 text-[11px] uppercase tracking-wide text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            Visita il sito
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
