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

/** Palette coerente col sito */
const gold = "text-[#D5B46E]";
const goldBg = "bg-[#D5B46E]";
const deepBlue = "bg-[#0E3A66]";
const deepBlueText = "text-[#0E3A66]";

/* ================================
   SLIDER "INFINITO" DEI LOGHI (MARQUEE)
   ================================= */

export default function RicambiPage() {
  // --- stato quick search ---
  const [codice, setCodice] = useState("");
  const [query, setQuery] = useState("");

  const top15Logos = [
    { src: "/images/loghi/petronas-logo.png", alt: "petronas" },
    { src: "/images/loghi/claas-logo.png", alt: "CLAAS" },
    {
      src: "/images/loghi/logo-new-holland-agriculture.png",
      alt: "New Holland",
    },
    { src: "/images/loghi/logo-case-IH.png", alt: "Case IH" },
    { src: "/images/loghi/logo-massey-ferguson.png", alt: "Massey Ferguson" },
    { src: "/images/loghi/toyota-material-handling.png", alt: "toyota" },
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

      {/* HERO */}
      <section className="pt-24">
        <div className="container">
          <Card className="overflow-hidden border-border/50">
            <div className="grid md:grid-cols-2">
              {/* Blocco testo blu */}
              <div className={`${deepBlue} text-white p-8 md:p-12`}>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  <span className={gold}>RICAMBI</span>{" "}
                  <span className="text-white">
                    AGRICOLI <br /> E INDUSTRIALI
                  </span>
                </h1>
                <p className="mt-5 text-white/90 max-w-prose">
                  Disponiamo di un magazzino con oltre <strong>15.000</strong>{" "}
                  ricambi per trattori e macchine agricole/industriali di ogni
                  marca: originali e di concorrenza. Spedizioni rapide,
                  compatibilità garantita.
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
                  src="/images/postvendita.png"
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
                    className="mt-1"
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
                    className="mt-1"
                  />
                </div>
                <Button
                  type="submit"
                  className="mt-6 md:mt-7 bg-primary hover:bg-primary/90"
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
      <section className="pb-6">
        <div className="container">
          <Card className="overflow-hidden border-border/50">
            <div className="grid lg:grid-cols-[360px_1fr]">
              {/* Pannello info */}
              <div className={`${deepBlue} text-white p-8`}>
                <h3 className="text-2xl font-extrabold">
                  <span className={gold}>
                    {" "}
                    Cerca trattori e macchine
                    <br /> agricole e industriali
                  </span>
                </h3>
                <p className="mt-3 text-white/85">
                  Trova velocemente mezzi <strong>nuovi</strong> e{" "}
                  <strong>usati</strong> filtrando per stato, marca, anno,
                  condizioni e molto altro.
                </p>
                <div className="mt-5 grid gap-2">
                  <div className="flex items-center text-white/90">
                    <CheckCircle className="h-4 w-4 mr-2 text-[#8FD19E]" />
                    Compatibilità certificata
                  </div>
                  <div className="flex items-center text-white/90">
                    <Clock className="h-4 w-4 mr-2" />
                    Tempi di risposta rapidi
                  </div>
                </div>
              </div>

              {/* Filtri */}
              <div className="p-6 md:p-8 bg-[#D5B46E]/10">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                  <SelectBlock
                    label="STATO"
                    value={stato}
                    onChange={setStato}
                    options={["Nuovo", "Usato", "Aziendale"]}
                  />
                  <SelectBlock
                    label="TIPO"
                    value={tipo}
                    onChange={setTipo}
                    options={[
                      "Trattore",
                      "Mietitrebbia",
                      "Pala",
                      "Attrezzatura",
                    ]}
                  />
                  <SelectBlock
                    label="MARCA"
                    value={marca}
                    onChange={setMarca}
                    options={[
                      "New Holland",
                      "John Deere",
                      "Case IH",
                      "Massey Ferguson",
                      "Fendt",
                      "Claas",
                    ]}
                  />
                  <SelectBlock
                    label="MODELLO"
                    value={modello}
                    onChange={setModello}
                    options={["Seleziona modello…"]}
                  />
                  <SelectBlock
                    label="FINANZIABILE"
                    value={finanziabile}
                    onChange={setFinanziabile}
                    options={["Sì", "No"]}
                  />
                  <SelectBlock
                    label="NOLEGGIO"
                    value={noleggio}
                    onChange={setNoleggio}
                    options={["Sì", "No"]}
                  />
                  <SelectBlock
                    label="ANNO"
                    value={anno}
                    onChange={setAnno}
                    options={["2025", "2024", "2023", "2022", "2021", "≤ 2020"]}
                  />
                  <SelectBlock
                    label="CONDIZIONE"
                    value={condizione}
                    onChange={setCondizione}
                    options={["Ottimo", "Buono", "Da verificare"]}
                  />
                  <SelectBlock
                    label="POTENZA"
                    value={potenza}
                    onChange={setPotenza}
                    options={["≤ 80 CV", "81–120 CV", "121–180 CV", "≥ 181 CV"]}
                  />
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className={`${deepBlueText} text-sm`}>
                    <span className="font-semibold">{resultsCount}</span>{" "}
                    macchine trovate
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={resetFiltri}>
                      Pulisci filtri
                    </Button>
                    <Button
                      onClick={apriRisultati}
                      className={`${goldBg} ${deepBlueText} hover:opacity-90`}
                    >
                      Vedi <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* VANTAGGI / PLUS */}
      <section className="py-14">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center border-border/50">
              <CardHeader>
                <Wrench className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle>Ricambi Originali & Compatibili</CardTitle>
                <CardDescription>
                  Scelta ampia con consigli del nostro team
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-border/50">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle>Qualità Garantita</CardTitle>
                <CardDescription>
                  Standard ISO e test su ogni articolo
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-border/50">
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mx-auto mb-2" />
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
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:bg-accent/10"
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
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
