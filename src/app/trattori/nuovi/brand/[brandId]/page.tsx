"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";

import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import SiteFooter from "@/components/footers/newsletter-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/lib/api";
import type { Trattore } from "@/lib/catalog";
import {
  BRAND_BY_ID,
  Brand,
  PrettyFrame,
  ProductCard,
  SkeletonCard,
  contactHref,
  getPlaceholdersForBrand,
} from "../../page";

export default function BrandCatalogPage() {
  const params = useParams<{ brandId: string }>();
  const brand = params?.brandId ? BRAND_BY_ID[params.brandId] : undefined;

  if (!brand) {
    return (
      <div className="min-h-screen bg-background">
        <AnimatedIndicatorNavbar />
        <section className="py-24">
          <div className="container text-center space-y-4">
            <h1 className="text-3xl font-bold">Brand non trovato</h1>
            <p className="text-muted-foreground">
              La pagina richiesta non è disponibile. Torna al catalogo generale.
            </p>
            <Button asChild className="bg-[#FFD700] text-black hover:bg-[#e6c200]">
              <Link href="/trattori/nuovi">Vai al catalogo</Link>
            </Button>
          </div>
        </section>
        <SiteFooter />
      </div>
    );
  }

  return <BrandCatalog brand={brand} />;
}

function BrandCatalog({ brand }: { brand: Brand }) {
  const [items, setItems] = useState<Trattore[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const placeholders = getPlaceholdersForBrand(brand.id);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);
    api
      .list("nuovi", brand.query)
      .then((res: any) => {
        if (!active) return;
        setItems(res?.items || []);
      })
      .catch((err: any) => {
        if (!active) return;
        setError(err?.message || "Impossibile caricare il catalogo");
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [brand.id, brand.query]);

  const filtered = useMemo(() => {
    const needle = brand.query.toLowerCase();
    return items.filter((item) =>
      [item.name, item.description || ""].join(" ").toLowerCase().includes(needle)
    );
  }, [items, brand.query]);

  const showPlaceholders = !loading && filtered.length === 0 && placeholders.length > 0;
  const showProducts = filtered.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />

      <section className="py-10 md:py-16">
        <div className="container space-y-10">
          <header className="flex flex-col gap-6">
            <Button
              asChild
              variant="ghost"
              className="self-start px-0 text-muted-foreground hover:text-foreground"
            >
              <Link href="/trattori/nuovi">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Torna al catalogo generale
              </Link>
            </Button>

            <div className="flex flex-col gap-6 rounded-3xl border border-border/50 bg-gradient-to-r from-background via-background/90 to-background/40 p-8 shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-6">
                <div className="rounded-2xl bg-white px-6 py-4 ring-1 ring-border shadow-sm">
                  <Image
                    src={brand.logo}
                    alt={brand.label}
                    width={240}
                    height={90}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <Badge className="border-none" style={{ background: brand.accentFrom }}>
                    {brand.label}
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tight">
                    Trattori {brand.label}
                  </h1>
                  <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                    Gamma ufficiale {brand.label} disponibile su richiesta. Scopri le
                    configurazioni consigliate e contattaci per preventivi personalizzati.
                  </p>
                </div>
              </div>
              <Button
                asChild
                className="bg-[#FFD700] text-black hover:bg-[#e6c200]"
              >
                <Link href={contactHref(brand.label, `${brand.label} - richiesta preventivo`)}>
                  Richiedi un preventivo
                </Link>
              </Button>
            </div>
          </header>

          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700">
              {error}
            </div>
          )}

          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-semibold tracking-tight mb-4">
                Modelli disponibili
              </h2>
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonCard key={`sk-${i}`} />
                  ))}
                </div>
              ) : showProducts ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((item) => (
                    <ProductCard key={`brand-${item.id}`} item={item} tipo="nuovi" />
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Nessun modello in pronta consegna. Guarda le nostre proposte consigliate.
                </p>
              )}
            </section>

            {showPlaceholders && (
              <section className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">
                  Proposte consigliate {brand.label}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {placeholders.map((placeholder) => (
                    <PlaceholderBrandCard
                      key={placeholder.id}
                      placeholder={placeholder}
                      brand={brand}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function PlaceholderBrandCard({
  placeholder,
  brand,
}: {
  placeholder: ReturnType<typeof getPlaceholdersForBrand>[number];
  brand: Brand;
}) {
  const accentOverlay = `linear-gradient(150deg, ${brand.accentFrom}33 0%, ${brand.accentTo}29 60%, transparent 100%)`;

  return (
    <Card className="overflow-hidden border-border/60 rounded-[22px] bg-background/70 backdrop-blur-sm">
      <div className="relative">
        <PrettyFrame
          src={placeholder.image}
          alt={placeholder.name}
          ratioClass="aspect-[4/3]"
          padding={false}
        >
          <div className="absolute inset-0" style={{ background: accentOverlay }} />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-lg bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
            <Image
              src={brand.logo}
              alt={brand.label}
              width={90}
              height={26}
              className="h-6 w-auto object-contain"
            />
            <span>{placeholder.badge || "Su richiesta"}</span>
          </div>
          <div className="absolute inset-x-4 bottom-4 space-y-1.5">
            <h3 className="text-lg font-semibold text-white drop-shadow">
              {placeholder.name}
            </h3>
            <div className="flex flex-wrap gap-1">
              {[placeholder.priceLabel, ...placeholder.specs.slice(0, 2)].filter(Boolean).map((chip) => (
                <span
                  key={`${placeholder.id}-grid-chip-${chip}`}
                  className="inline-flex items-center rounded-full bg-white/20 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white backdrop-blur-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </PrettyFrame>
      </div>
      <CardContent className="space-y-3 pt-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {placeholder.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {placeholder.specs.map((spec) => (
            <span
              key={`${placeholder.id}-grid-spec-${spec}`}
              className="inline-flex items-center rounded-full border border-border/60 bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {spec}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <Button
            asChild
            className="bg-[#FFD700] text-black hover:bg-[#e6c200]"
          >
            <Link href={`/trattori/nuovi/${placeholder.id}`}>Apri scheda</Link>
          </Button>
          <Button asChild variant="outline" className="border-border">
            <Link href={placeholder.contactHref}>Richiedi disponibilità</Link>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground/80">
          Prezzo su richiesta • {brand.label}
        </p>
      </CardContent>
    </Card>
  );
}
