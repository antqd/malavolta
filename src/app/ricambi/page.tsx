"use client";

import Image from "next/image";
import { useState } from "react";
import LogoMarquee from "@/components/brands/logo-marquee";

import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import PageHero from "@/components/sections/page-hero";
import { MapPin, Megaphone, CalendarDays } from "lucide-react";

import {
  Search,
  ArrowRight,
  Shield,
  Wrench,
  Clock,
  CheckCircle,
  Truck,
} from "lucide-react";
import SiteFooter from "@/components/footers/newsletter-footer";

/** Palette coerente col sito (nero + giallo) */
const gold = "text-[#FFD700]";
const goldBg = "bg-[#FFD700]";
const deepBlue = "bg-black";          // prima blu
const deepBlueText = "text-black";    // prima blu

/* ================================
   SLIDER "INFINITO" DEI LOGHI (MARQUEE)
   ================================= */

export default function RicambiPage() {
  // --- stato quick search ---
  const [codice, setCodice] = useState("");
  const [query, setQuery] = useState("");

  const top15Logos = [

    { src: "/images/loghi/claas-logo.png", alt: "CLAAS" },
    {
      src: "/images/loghi/logo-new-holland-agriculture.png",
      alt: "New Holland",
    },

    { src: "/images/loghi/logo-massey-ferguson.png", alt: "Massey Ferguson" },

    { src: "/images/loghi/logo-krone.png", alt: "Krone" },
    { src: "/images/loghi/logo-kuhn.png", alt: "Kuhn" },
    { src: "/images/loghi/logo-landini.png", alt: "Landini" },
    { src: "/images/loghi/logo-antonio-carraro.png", alt: "Antonio Carraro" },
    { src: "/images/loghi/logo-lamborghini-trattori.png", alt: "Lamborghini" },
    { src: "/images/loghi/logo-valpadana-trattori.png", alt: "Valpadana" },
    { src: "/images/loghi/logo-bcs.png", alt: "BCS" },
    { src: "/images/loghi/logo-berti.png", alt: "Berti" },
    { src: "/images/loghi/logo-comet.png", alt: "Comet" },
  ];

  // --- stato filtri (mock) ---
  const [stato, setStato] = useState("");
  const [tipo, setTipo] = useState("");
  const [marca, setMarca] = useState("");
  const [modello, setModello] = useState("");
  const [finanziabile, setFinanziabile] = useState("");
  const [noleggio, setNoleggio] = useState("");
  const [anno, setAnno] = useState("");
  const [condizione, setCondizione] = useState("");
  const [potenza, setPotenza] = useState("");

  const resultsCount = 242; // mock come nello screenshot

  const resetQuick = () => {
    setCodice("");
    setQuery("");
  };

  const resetFiltri = () => {
    setStato("");
    setTipo("");
    setMarca("");
    setModello("");
    setFinanziabile("");
    setNoleggio("");
    setAnno("");
    setCondizione("");
    setPotenza("");
  };

  const submitQuick = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ codice, query });
  };

  const apriRisultati = () => {
    console.log({
      stato,
      tipo,
      marca,
      modello,
      finanziabile,
      noleggio,
      anno,
      condizione,
      potenza,
    });
  };

  // loghi (metti i file in /public/images/loghi/)

  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />

      <PageHero
        titleWhite="RICAMBI"
        titleGold="E OFFICINA"
        description="Magazzino con codici originali e di concorrenza, spedizioni rapide e in caso di indisponibilità arrivo in 24/48 ore."
        imageSrc="/images/ricambibg.png"
        badges={[
          { label: "Garanzia 24 mesi", icon: Shield },
          { label: "Consegna 24/48h", icon: Truck },
          { label: "Assistenza tecnica", icon: Wrench },
        ]}
      />

      {/* HERO */}
      <section className="pt-24">
        <div className="container">
          <Card className="overflow-hidden border-border/50">
            <div className="grid md:grid-cols-2">
              {/* Blocco testo (nero) */}
              <div className={`${deepBlue} text-white p-8 md:p-12`}>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  <span className={gold}>RICAMBI</span>{" "}
                  <span className="text-white">
                     <br /> E OFFICINA
                  </span>
                </h1>
                <p className="mt-5 text-white/90 max-w-prose">
                  Disponiamo di un magazzino con
                  ricambi per trattori e macchine agricole/industriali di ogni
                  marca: originali e di concorrenza.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge className="bg-white/10 border-white/20 text-white">
                    <Shield className="h-4 w-4 mr-2" />
                    Garanzia 24 mesi
                  </Badge>
                  <Badge className="bg-white/10 border-white/20 text-white">
                    <Truck className="h-4 w-4 mr-2" />
                    Consegna 24/48h
                  </Badge>
                  <Badge className="bg-white/10 border-white/20 text-white">
                    <Wrench className="h-4 w-4 mr-2" />
                    Assistenza tecnica
                  </Badge>
                </div>
              </div>

              {/* Immagine */}
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/ricambi2.png"
                  alt="Sede e flotta"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* RICERCA VELOCE (Codice / Libera) */}
      <section className="py-10">
        <div className="container">
          <Card className="border-border/50">
            <CardContent className="p-6">
              <form
                onSubmit={submitQuick}
                className="grid gap-4 md:grid-cols-[1fr_1fr_auto_auto]"
              >
                <div>
                  <label className="text-xs font-medium text-muted-foreground">
                    CODICE RICAMBIO
                  </label>
                  <Input
                    value={codice}
                    onChange={(e) => setCodice(e.target.value)}
                    placeholder="Es. RE68766"
                    className="mt-1 focus:border-[#FFD700] focus:ring-[#FFD700]"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">
                    RICERCA LIBERA
                  </label>
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Es. filtro idraulico, pompa..."
                    className="mt-1 focus:border-[#FFD700] focus:ring-[#FFD700]"
                  />
                </div>
                <Button
                  type="submit"
                  className="mt-6 md:mt-7 bg-[#FFD700] text-black hover:bg-[#e6c200]"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Ricerca
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={resetQuick}
                  className="mt-6 md:mt-7"
                >
                  Resetta
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* MOTORE DI RICERCA MACCHINE (filtri) */}


      {/* VANTAGGI / PLUS */}
      <section className="py-14">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center border-border/50">
              <CardHeader>
                <Wrench className="h-10 w-10 mx-auto mb-2 text-[#FFD700]" />
                <CardTitle>Ricambi Originali & Compatibili</CardTitle>
                <CardDescription>
                  Scelta ampia con consigli del nostro team
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-border/50">
              <CardHeader>
                <Shield className="h-10 w-10 mx-auto mb-2 text-[#FFD700]" />
                <CardTitle>Qualità Garantita</CardTitle>
                <CardDescription>
                  Standard ISO e test su ogni articolo
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-border/50">
              <CardHeader>
                <Clock className="h-10 w-10 mx-auto mb-2 text-[#FFD700]" />
                <CardTitle>Spedizione Rapida</CardTitle>
                <CardDescription>
                  24/48h con tracking e supporto
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* MARCHE PRINCIPALI – slider loghi */}
      <section className="pb-20">
        <div className="container">
          <div className="text-center mb-8">
            <h3 className={`text-3xl font-bold ${deepBlueText}`}>
              Marche principali
            </h3>
            <p className="text-muted-foreground">
              Supportiamo tutti i brand leader
            </p>
          </div>

          <LogoMarquee
            logos={top15Logos}
            speed={36}
            itemWidth={140}
            itemHeight={70}
          />

          <div className="text-center mt-8">
            <a
              href="/loghi"
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:bg-[#FFD700]/10"
            >
              Vedi tutti i loghi e collaborazioni
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}

/* --- piccolo componente <select> nativo in linea col tema --- */
function SelectBlock({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] focus:border-[#FFD700]"
      >
        <option value="">Scegli</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
