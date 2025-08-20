// src/app/prodotti/[slug]/page.tsx
"use client";

import { use, useMemo } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowRight } from "lucide-react";

import type { CatalogItem } from "../data";
import { ITEMS, CATEGORIES } from "../data";

const deepBlueText = "text-[#0E3A66]";
const deepBlue = "bg-[#0E3A66]";

// — utils
function formatPrice(n?: number) {
  if (!n || n <= 0) return "Su richiesta";
  return n.toLocaleString("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
}

function yesNo(b?: boolean) {
  return b ? "Sì" : "No";
}

function defaultDescription(i: CatalogItem) {
  const bits: string[] = [];
  if (i.brand) bits.push(i.brand);
  if (i.year) bits.push(`anno ${i.year}`);
  if (i.powerHp) bits.push(`${i.powerHp} CV`);
  if (i.hours) bits.push(`${i.hours.toLocaleString("it-IT")} h`);
  bits.push(i.condition === "usato" ? "Usato in buone condizioni" : "Nuovo");
  return bits.join(" • ");
}

export default function ProdottoDettaglio({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Next 15: unwrap dei params
  const { slug } = use(params);

  const item = useMemo(() => ITEMS.find((i) => i.slug === slug), [slug]);
  if (!item) return notFound();

  const isUsato = item.condition === "usato";

  // scorciatoia per specs
  const s = item.specs ?? {};

  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />

      <section className="pt-24 pb-12">
        <div className="container">
          {/* breadcrumb */}
          <div className="text-sm mb-3 text-muted-foreground">
            <Link href="/prodotti" className="hover:underline">
              Prodotti
            </Link>{" "}
            / {CATEGORIES[item.category]}
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_480px] gap-10 items-start">
            {/* ————— LEFT: gallery + descrizione + scheda tecniche ————— */}
            <div className="space-y-5">
              {/* COVER */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border">
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge
                    className={
                      isUsato
                        ? "bg-amber-500 text-white"
                        : "bg-emerald-600 text-white"
                    }
                  >
                    {isUsato ? "USATO" : "NUOVO"}
                  </Badge>
                  {item.badge && (
                    <Badge variant="secondary">{item.badge}</Badge>
                  )}
                </div>
              </div>

              {/* THUMBS (se presenti) */}
              {item.gallery?.length ? (
                <div className="grid grid-cols-4 gap-3">
                  {item.gallery.map((g) => (
                    <div
                      key={g}
                      className="relative aspect-[4/3] rounded-md overflow-hidden border"
                    >
                      <Image
                        src={g}
                        alt={`${item.title} extra`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : null}

              {/* DESCRIZIONE */}
              <Card className="border">
                <CardContent className="p-5">
                  <h2 className={`text-lg font-semibold mb-2 ${deepBlueText}`}>
                    Descrizione
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description ?? defaultDescription(item)}
                  </p>
                </CardContent>
              </Card>

              {/* DATI TECNICI */}
              <Card className="border">
                <CardContent className="p-5">
                  <h2 className={`text-lg font-semibold mb-4 ${deepBlueText}`}>
                    Dati e Caratteristiche Tecniche
                  </h2>

                  <div className="grid md:grid-cols-2 gap-3">
                    {/* dimensioni pneumatici */}
                    {s.tyresFrontSize && (
                      <SpecRow
                        k="Dimensione pneumatici anteriori:"
                        v={s.tyresFrontSize}
                      />
                    )}
                    {s.tyresRearSize && (
                      <SpecRow
                        k="Dimensione pneumatici posteriori:"
                        v={s.tyresRearSize}
                      />
                    )}

                    {/* stato pneumatici */}
                    {s.tyresFrontState && (
                      <SpecRow
                        k="Stato pneumatici anteriori:"
                        v={s.tyresFrontState}
                      />
                    )}
                    {s.tyresRearState && (
                      <SpecRow
                        k="Stato pneumatici posteriori:"
                        v={s.tyresRearState}
                      />
                    )}

                    {/* trasmissione / potenza */}
                    {s.transmission && (
                      <SpecRow k="Trasmissione:" v={s.transmission} />
                    )}
                    {(s.powerHp ?? item.powerHp) && (
                      <SpecRow
                        k="Potenza:"
                        v={`${(s.powerHp ?? item.powerHp) as number} CV`}
                      />
                    )}

                    {/* motore / cabina / a/c */}
                    {s.engineCyl && (
                      <SpecRow k="Motore:" v={`${s.engineCyl} cilindri`} />
                    )}
                    {typeof s.cab === "boolean" && (
                      <SpecRow k="Cabina:" v={yesNo(s.cab)} />
                    )}
                    {typeof s.aircon === "boolean" && (
                      <SpecRow k="Aria condizionata:" v={yesNo(s.aircon)} />
                    )}

                    {/* anno / condizione / ore */}
                    {(s.year ?? item.year) && (
                      <SpecRow k="Anno:" v={`${s.year ?? item.year}`} />
                    )}
                    {s.conditionNote && (
                      <SpecRow k="Condizione:" v={s.conditionNote} />
                    )}
                    {(s.hours ?? item.hours) && (
                      <SpecRow
                        k="Ore:"
                        v={`${(s.hours ?? item.hours)!.toLocaleString(
                          "it-IT"
                        )} h`}
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ————— RIGHT: titolo, prezzo, box rapidi + form ————— */}
            <div>
              <h1 className={`text-3xl md:text-4xl font-bold ${deepBlueText}`}>
                {item.title}
              </h1>
              <div className="mt-1 text-muted-foreground">
                {item.brand} • {CATEGORIES[item.category]}
              </div>

              <div className="mt-4 text-3xl font-semibold flex items-baseline gap-3">
                <span>{formatPrice(item.price)}</span>
                <span className="text-sm font-normal text-muted-foreground">
                  + IVA
                </span>
              </div>

              {/* riassunto rapido */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {(s.powerHp ?? item.powerHp) && (
                  <MiniSpec
                    label="Potenza"
                    value={`${s.powerHp ?? item.powerHp} CV`}
                  />
                )}
                <MiniSpec
                  label="Condizione"
                  value={isUsato ? "Usato" : "Nuovo"}
                />
                {(s.year ?? item.year) && (
                  <MiniSpec label="Anno" value={`${s.year ?? item.year}`} />
                )}
                {(s.hours ?? item.hours) && (
                  <MiniSpec
                    label="Ore"
                    value={`${(s.hours ?? item.hours)!.toLocaleString(
                      "it-IT"
                    )} h`}
                  />
                )}
              </div>

              <div className="mt-6 flex gap-3">
                <Link href="tel:+390983497243">
                  <Button size="lg" className={`${deepBlue} text-white`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Chiama ora
                  </Button>
                </Link>
                <a href="#contatto" className="inline-flex">
                  <Button size="lg" variant="outline">
                    Richiedi preventivo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>

              {/* FORM CONTATTO */}
              <Card id="contatto" className="mt-8">
                <CardContent className="p-6 space-y-4">
                  <h2 className={`text-lg font-semibold ${deepBlueText}`}>
                    Contattaci per questo modello
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Nome" />
                    <Input placeholder="Cognome" />
                    <Input type="email" placeholder="Email" />
                    <Input type="tel" placeholder="Telefono" />
                  </div>
                  <Textarea placeholder="Messaggio" className="min-h-[120px]" />
                  <input type="hidden" value={item.id} />
                  <div className="flex gap-3">
                    <Button className={`${deepBlue} text-white`}>
                      Invia richiesta
                    </Button>
                    <span className="text-sm text-muted-foreground self-center">
                      Codice: {item.id}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ————— piccoli componenti tipizzati ————— */
function SpecRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between rounded-md border p-3 text-sm">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-medium">{v}</span>
    </div>
  );
}

function MiniSpec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}
