"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatPriceCents, LOW_STOCK_LABEL, isLowStock1 } from "@/lib/catalog";
import type { Trattore } from "@/lib/catalog";

export type Brand = {
  id: string;
  label: string;
  query: string;
  logo: string;
  accentFrom: string;
  accentTo: string;
};

// LOGHI: /public/images/loghi/
export const BRANDS: Brand[] = [
  {
    id: "newholland",
    label: "New Holland",
    query: "New Holland",
    logo: "/images/loghi/logo-new-holland-agriculture.png",
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

export const BRAND_BY_ID: Record<Brand["id"], Brand> = Object.fromEntries(
  BRANDS.map((b) => [b.id, b])
) as Record<Brand["id"], Brand>;

export const contactHref = (brand: string, model: string) =>
  `/contatti?brand=${encodeURIComponent(brand)}&modello=${encodeURIComponent(model)}`;

export type PlaceholderTractor = {
  id: string;
  brandId: Brand["id"];
  name: string;
  image: string;
  description: string;
  priceLabel: string;
  contactHref: string;
  specs: string[];
  badge?: string;
};

export const PLACEHOLDER_TRACTORS: Record<Brand["id"], PlaceholderTractor[]> = {
  newholland: [
    {
      id: "ph-newholland-t5120",
      brandId: "newholland",
      name: "New Holland T5.120 Dynamic Command",
      image: "/images/trattori.png",
      description:
        "Compatto polivalente Stage V ideale per aziende miste e lavori aziendali.",
      priceLabel: "120 CV • Dynamic Command",
      contactHref: contactHref("New Holland", "T5.120 Dynamic Command"),
      specs: ["NEF Stage V", "Dynamic Command", "Cabina comfort"],
      badge: "Disponibile su richiesta",
    },
    {
      id: "ph-newholland-t6180",
      brandId: "newholland",
      name: "New Holland T6.180 Auto Command",
      image: "/images/trattori2.png",
      description:
        "CVT Auto Command con 180 CV nominali per lavorazioni intensive e PTO.",
      priceLabel: "180 CV • Auto Command",
      contactHref: contactHref("New Holland", "T6.180 Auto Command"),
      specs: ["Auto Command CVT", "Cabina Horizon Ultra", "Idraulica 150 l/min"],
      badge: "Top di gamma",
    },
    {
      id: "ph-newholland-t7270",
      brandId: "newholland",
      name: "New Holland T7.270 PLM Intelligence",
      image: "/images/home.png",
      description:
        "Serie PLM Intelligence con guida di precisione e telemetria integrata.",
      priceLabel: "270 CV • PLM Intelligence",
      contactHref: contactHref("New Holland", "T7.270 PLM Intelligence"),
      specs: ["IntelliView 12\"", "MyPLM Connect", "Sospensioni Terraglide"],
      badge: "Demo prenotabile",
    },
    {
      id: "ph-newholland-t4110f",
      brandId: "newholland",
      name: "New Holland T4.110F Dual Command",
      image: "/images/home2.png",
      description:
        "Specializzato stretto per frutteto con motore 4 cilindri e cabina compatta.",
      priceLabel: "106 CV • Dual Command",
      contactHref: contactHref("New Holland", "T4.110F Dual Command"),
      specs: ["Motore F34 Stage V", "Ponte SuperSteer", "Cabina ribassata"],
      badge: "Specializzato",
    },
    {
      id: "ph-newholland-t8435",
      brandId: "newholland",
      name: "New Holland T8.435 Genesis",
      image: "/images/postvendita.png",
      description:
        "Flagship Genesis con PLM Intelligence e assale sospeso per produttività.",
      priceLabel: "435 CV • Genesis",
      contactHref: contactHref("New Holland", "T8.435 Genesis"),
      specs: ["PLM Intelligence", "SmartTrax RowTrac", "Comfort Ride"],
      badge: "Flagship",
    },
  ],
  landini: [
    {
      id: "ph-landini-serie5",
      brandId: "landini",
      name: "Landini Serie 5-120 Dynamic",
      image: "/images/ricambi.png",
      description:
        "Polivalente Stage V con cabina Total View Slim per fienagione e caricatori.",
      priceLabel: "115 CV • Power Shuttle",
      contactHref: contactHref("Landini", "Serie 5-120 Dynamic"),
      specs: ["36+12 Hi-Lo", "82 l/min CCLS", "Total View Slim"],
      badge: "Best seller",
    },
    {
      id: "ph-landini-serie7",
      brandId: "landini",
      name: "Landini Serie 7 Robo-Six 215",
      image: "/images/ricambi2.png",
      description:
        "Alta potenza con cambio Robo-Six 54+27 e sospensioni semi-attive.",
      priceLabel: "206 CV • Robo-Six",
      contactHref: contactHref("Landini", "Serie 7 Robo-Six 215"),
      specs: ["Cambio Robo-Six", "Sospensioni semi-attive", "DSM touch 12\""],
      badge: "Nuovo catalogo",
    },
    {
      id: "ph-landini-rex4",
      brandId: "landini",
      name: "Landini REX4 F 100 GT",
      image: "/images/ricambibg.png",
      description:
        "Specializzato per frutteti con cabina Cat.4 pressurizzata e geometria stretta.",
      priceLabel: "95 CV • Specializzato",
      contactHref: contactHref("Landini", "REX4 F 100 GT"),
      specs: ["Motore 4 cilindri", "Cabina Cat.4", "Inversore elettroidraulico"],
      badge: "Subito ordinabile",
    },
    {
      id: "ph-landini-serie4",
      brandId: "landini",
      name: "Landini Serie 4-080 Platform",
      image: "/images/logo.png",
      description:
        "Versatile piattaforma leggera con trasmissione 24+24 e PTO indipendente.",
      priceLabel: "75 CV • 24+24",
      contactHref: contactHref("Landini", "Serie 4-080 Platform"),
      specs: ["Motore Perkins 3.6L", "Piattaforma ribassata", "PTO 540/540E"],
      badge: "In pronta consegna",
    },
    {
      id: "ph-landini-super90",
      brandId: "landini",
      name: "Landini Super T90",
      image: "/images/logo2.png",
      description:
        "Utility robusto con ponte rigido e idraulica da 65 l/min per attrezzi portati.",
      priceLabel: "88 CV • 12+12",
      contactHref: contactHref("Landini", "Super T90"),
      specs: ["Motore Perkins Stage V", "Idraulica 65 l/min", "Assale HD"],
      badge: "Promo lancio",
    },
  ],
  carraro: [
    {
      id: "ph-carraro-tony",
      brandId: "carraro",
      name: "Antonio Carraro Tony 10900 SR",
      image: "/images/trattori2.png",
      description:
        "Ibrido idrostatico articolato con 98 CV per vigneti intensivi e pendenze.",
      priceLabel: "98 CV • CVT 4 stadi",
      contactHref: contactHref("Antonio Carraro", "Tony 10900 SR"),
      specs: ["Cambio continuo", "Telaio ACTIO™", "Joystick multifunzione"],
      badge: "Demo in sede",
    },
    {
      id: "ph-carraro-tora",
      brandId: "carraro",
      name: "Antonio Carraro TORA T90",
      image: "/images/trattori.png",
      description:
        "Nuova piattaforma TORA con motore 3.4L Stage V e trazione massima.",
      priceLabel: "95 CV • Telaio oscillante",
      contactHref: contactHref("Antonio Carraro", "TORA T90"),
      specs: ["Motore Kubota", "Assale oscillante", "Cabina Cat.4"],
      badge: "Anteprima 2024",
    },
    {
      id: "ph-carraro-tigrecar",
      brandId: "carraro",
      name: "Antonio Carraro Tigrecar 5800",
      image: "/images/home.png",
      description:
        "Transporter multifunzione con pianale trilaterale e trazione permanente.",
      priceLabel: "50 CV • Transporter",
      contactHref: contactHref("Antonio Carraro", "Tigrecar 5800"),
      specs: ["Pianale trilaterale", "Assali indipendenti", "Portata 1600 kg"],
      badge: "In allestimento",
    },
    {
      id: "ph-carraro-mach4",
      brandId: "carraro",
      name: "Antonio Carraro Mach 4 R",
      image: "/images/home2.png",
      description:
        "Crawler reversibile a 4 cingoli con trasmissione hydrostatica e basso baricentro.",
      priceLabel: "98 CV • Quadtrack",
      contactHref: contactHref("Antonio Carraro", "Mach 4 R"),
      specs: ["Trasmissione continua", "Reversibilità RGS™", "Cingoli in gomma"],
      badge: "Disponibile su ordine",
    },
    {
      id: "ph-carraro-ttr7600",
      brandId: "carraro",
      name: "Antonio Carraro TTR 7600 Infinity",
      image: "/images/postvendita.png",
      description:
        "Motore 75 CV e trasmissione Infinity a doppia gamma per manutenzione e montagna.",
      priceLabel: "75 CV • Infinity",
      contactHref: contactHref("Antonio Carraro", "TTR 7600 Infinity"),
      specs: ["Infinity Dual Speed", "Telaio ACTIO™", "PTO bidirezionale"],
      badge: "Arrivo previsto",
    },
  ],
};

export const PLACEHOLDER_INDEX: Record<string, PlaceholderTractor> = Object.values(
  PLACEHOLDER_TRACTORS
).reduce<Record<string, PlaceholderTractor>>((acc, list) => {
  list.forEach((item) => {
    acc[item.id] = item;
  });
  return acc;
}, {});

export const getPlaceholdersForBrand = (brandId: Brand["id"]) =>
  PLACEHOLDER_TRACTORS[brandId] || [];

export const getPlaceholderById = (id: string) => PLACEHOLDER_INDEX[id];

export function imgSrc(src?: string | null) {
  if (!src) return "/placeholder.png";
  const s = (src || "").trim();
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  if (s.startsWith("/")) return s;
  return "/placeholder.png";
}

// Frame immagine: blur-bg + contain + cornici morbide
export function PrettyFrame({
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

export function PlaceholderCard({
  brand,
  item,
}: {
  brand: Brand;
  item: PlaceholderTractor;
}) {
  const accentOverlay = `linear-gradient(140deg, ${brand.accentFrom}46 0%, ${brand.accentTo}26 60%, transparent 100%)`;
  const chips = [item.priceLabel, ...item.specs.slice(0, 2)].filter(Boolean);

  return (
    <article className="relative shrink-0 w-[210px] sm:w-[230px] snap-start">
      <Link
        href={`/trattori/nuovi/${item.id}`}
        className="group block rounded-[22px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-[#FFD700]"
        prefetch={false}
        aria-label={`Apri la scheda di ${item.name}`}
      >
        <PrettyFrame
          src={item.image}
          alt={item.name}
          ratioClass="aspect-[2/3]"
          padding={false}
        >
          <div
            className="absolute inset-0"
            style={{ background: accentOverlay }}
          />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-30"
            style={{
              background: `radial-gradient(200% 120% at 50% 100%, ${brand.accentTo}33 0%, transparent 55%)`,
            }}
          />
          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-md bg-black/35 px-2 py-1 text-[11px] font-semibold tracking-wide uppercase text-white shadow backdrop-blur">
            {item.badge || brand.label}
          </div>
          <div className="absolute left-3 right-3 bottom-3 flex flex-col gap-1.5">
            <div className="flex flex-wrap gap-1">
              {chips.map((chip) => (
                <span
                  key={`${item.id}-chip-${chip}`}
                  className="inline-flex items-center rounded-full bg-white/15 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white backdrop-blur-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
            <h3 className="text-sm font-semibold leading-snug text-white drop-shadow line-clamp-2">
              {item.name}
            </h3>
            <p className="text-xs text-white/80 line-clamp-2">{item.description}</p>
            <span className="inline-flex items-center gap-1 self-start rounded-md bg-white/90 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-black transition-transform duration-200 group-hover:-translate-y-0.5">
              Apri scheda
            </span>
          </div>
        </PrettyFrame>
      </Link>
    </article>
  );
}

export function SkeletonPoster() {
  return (
    <div className="shrink-0 w-[210px] sm:w-[230px] snap-start">
      <div className="relative aspect-[2/3] rounded-[22px] overflow-hidden bg-muted animate-pulse">
        <div className="absolute left-2 top-2 h-5 w-20 rounded bg-black/20" />
        <div className="absolute bottom-3 left-3 right-8 h-4 rounded bg-black/20" />
      </div>
    </div>
  );
}

export function SkeletonCard() {
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

export function ProductCard({
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
