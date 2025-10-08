"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";

import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import SiteFooter from "@/components/footers/newsletter-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/lib/api";
import type { Trattore } from "@/lib/catalog";
import {
  LOW_STOCK_LABEL,
  formatPriceCents,
  isLowStock1,
} from "@/lib/catalog";

import { BRAND_BY_ID, PrettyFrame, contactHref, getPlaceholderById, imgSrc } from "../page";
import type { PlaceholderTractor } from "../page";

type DetailState =
  | { status: "idle" | "loading"; data?: Trattore; error?: string }
  | { status: "ready"; data: Trattore }
  | { status: "error"; error: string };

export default function TractorDetailPage() {
  const params = useParams<{ tractorId: string }>();
  const tractorId = params?.tractorId ?? "";
  const router = useRouter();
  const placeholder = useMemo(() => {
    const data = getPlaceholderById(tractorId);
    if (!data) return null;
    const brand = BRAND_BY_ID[data.brandId];
    return { data, brand };
  }, [tractorId]);

  const [state, setState] = useState<DetailState>(() =>
    placeholder ? { status: "idle" } : { status: "loading" }
  );

  useEffect(() => {
    if (!tractorId || placeholder) return;
    let active = true;
    setState({ status: "loading" });
    api
      .get("nuovi", tractorId)
      .then((res) => {
        if (!active) return;
        setState({ status: "ready", data: res as Trattore });
      })
      .catch((err: any) => {
        if (!active) return;
        setState({
          status: "error",
          error: err?.message || "Trattore non trovato",
        });
      });
    return () => {
      active = false;
    };
  }, [tractorId, placeholder]);

  if (!tractorId) {
    return (
      <div className="min-h-screen bg-background">
        <AnimatedIndicatorNavbar />
        <section className="py-10 md:py-16">
          <div className="container">
            <ErrorState message="Il trattore richiesto non è disponibile." />
          </div>
        </section>
        <SiteFooter />
      </div>
    );
  }

  const isLoading = state.status === "loading";

  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />

      <section className="py-10 md:py-16">
        <div className="container space-y-10">
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="ghost"
              className="px-0 text-muted-foreground hover:text-foreground"
              onClick={() =>
                router.back?.() ? router.back() : router.push("/trattori/nuovi")
              }
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Torna alla lista
            </Button>

            <Link
              href="/trattori/nuovi"
              className="hidden text-sm font-medium text-muted-foreground hover:text-foreground md:inline-flex items-center gap-1"
            >
              Tutti i trattori
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {placeholder ? (
            <PlaceholderDetail placeholder={placeholder.data} />
          ) : isLoading ? (
            <LoadingDetail />
          ) : state.status === "error" ? (
            <ErrorState message={state.error} />
          ) : state.status === "ready" ? (
            <ApiDetail item={state.data} />
          ) : null}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function PlaceholderDetail({ placeholder }: { placeholder: PlaceholderTractor }) {
  const brand = BRAND_BY_ID[placeholder.brandId];
  const accents = {
    background: `linear-gradient(160deg, ${brand.accentFrom}1f 0%, ${brand.accentTo}12 55%, transparent 100%)`,
    badge: `linear-gradient(120deg, ${brand.accentFrom} 0%, ${brand.accentTo} 100%)`,
  };

  return (
    <div
      className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr),minmax(0,0.95fr)]"
      style={{ background: accents.background }}
    >
      <div className="relative">
        <PrettyFrame
          src={placeholder.image}
          alt={placeholder.name}
          ratioClass="aspect-[4/3]"
          padding={false}
        >
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-lg bg-black/45 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-md">
            <Image
              src={brand.logo}
              alt={brand.label}
              width={90}
              height={28}
              className="h-6 w-auto object-contain drop-shadow"
            />
            <span className="text-[11px] font-semibold">{placeholder.badge || "Disponibile"}</span>
          </div>
        </PrettyFrame>
      </div>

      <div className="space-y-6 p-6 md:p-8">
        <div className="space-y-3">
          <Badge
            className="border-none text-white"
            style={{ background: accents.badge }}
          >
            {brand.label}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight">{placeholder.name}</h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            {placeholder.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {placeholder.specs.map((spec) => (
            <span
              key={`${placeholder.id}-spec-${spec}`}
              className="inline-flex items-center rounded-full border border-border/60 bg-background px-3 py-1.5 text-[12px] font-medium text-muted-foreground"
            >
              {spec}
            </span>
          ))}
        </div>

        <div className="rounded-2xl border border-border/60 bg-background/50 p-6 shadow-sm backdrop-blur">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
            Informazioni e disponibilità
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Contattaci per configurazioni, tempi di consegna e offerte dedicate su {brand.label}.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Button asChild className="sm:flex-1 bg-[#FFD700] text-black hover:bg-[#e6c200]">
              <Link href={placeholder.contactHref}>Richiedi disponibilità</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="sm:flex-1 border-border"
            >
              <Link href={`/trattori/nuovi/brand/${brand.id}`}>
                Vedi altri {brand.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApiDetail({ item }: { item: Trattore }) {
  const price = formatPriceCents(item.price_cents);
  const contactLink = contactHref("Trattore nuovo", item.name);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr),minmax(0,0.95fr)]">
      <div className="relative">
        <PrettyFrame
          src={imgSrc(item.photo_url)}
          alt={item.name}
          ratioClass="aspect-[4/3]"
          padding
        />
      </div>
      <div className="space-y-6 p-6 md:p-8 rounded-2xl border border-border/60 bg-background/70 shadow-sm">
        <div className="space-y-2">
          <Badge variant="secondary" className="uppercase">
            Catalogo Ufficiale
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight">{item.name}</h1>
          <div className="text-xl font-semibold text-foreground">{price}</div>
          {isLowStock1(item) && (
            <div className="text-sm font-semibold text-red-600">{LOW_STOCK_LABEL}</div>
          )}
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {item.description || "Richiedi informazioni dettagliate su questo modello disponibile nella nostra sede."}
        </p>

        <Card className="border-border/60 bg-background/50">
          <CardContent className="space-y-2 p-5">
            <p className="text-sm text-muted-foreground">
              Vuoi schede tecniche, finanziamenti o un preventivo personalizzato?
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Button asChild className="sm:flex-1 bg-[#FFD700] text-black hover:bg-[#e6c200]">
                <Link href={contactLink}>Richiedi informazioni</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="sm:flex-1 border-border"
              >
                <Link href="/contatti">Parla con un consulente</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function LoadingDetail() {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr),minmax(0,0.95fr)] animate-pulse">
      <div className="aspect-[4/3] w-full rounded-[22px] bg-muted" />
      <div className="space-y-4 rounded-2xl border border-border/60 bg-background/50 p-8">
        <div className="h-4 w-1/3 rounded bg-muted" />
        <div className="h-8 w-3/4 rounded bg-muted" />
        <div className="h-4 w-1/4 rounded bg-muted" />
        <div className="space-y-2 pt-4">
          <div className="h-3 w-full rounded bg-muted" />
          <div className="h-3 w-5/6 rounded bg-muted" />
          <div className="h-3 w-4/6 rounded bg-muted" />
        </div>
        <div className="h-10 w-full rounded bg-muted" />
        <div className="h-10 w-full rounded bg-muted" />
      </div>
    </div>
  );
}

function ErrorState({ message }: { message?: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-background/60 p-12 text-center">
      <h2 className="text-2xl font-semibold tracking-tight mb-2">
        Trattore non trovato
      </h2>
      <p className="text-muted-foreground mb-6">
        {message || "La scheda richiesta non è più disponibile o è stata spostata."}
      </p>
      <Button asChild className="bg-[#FFD700] text-black hover:bg-[#e6c200]">
        <Link href="/trattori/nuovi">Torna ai trattori nuovi</Link>
      </Button>
    </div>
  );
}
