"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Wrench,
  Shield,
  Truck,
  Award,
  Search,
  Filter,
  ShoppingCart,
  Phone,
  CheckCircle,
  Star,
  Clock,
  Users,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Tractor = {
  id: string;
  name: string;
  category: "compatti" | "utility" | "vigneto" | "cingolati" | "elettrici";
  description: string;
  powerHp: number;
  drive: "2WD" | "4WD" | "cingolato";
  features: string[];
  cert?: string;
  image?: string;
  featured: boolean;
};

const tractors: Tractor[] = [
  {
    id: "t1",
    name: "Compatto 45 CV 4WD",
    category: "compatti",
    description:
      "Trattore compatto per aziende di piccole/medie dimensioni, ottimo per maneggevolezza e consumi.",
    powerHp: 45,
    drive: "4WD",
    features: ["Raggio di sterzo ridotto", "Sollevatore 1200 kg", "Cabina comfort"],
    cert: "EU Stage V",
    image: "/api/placeholder/400/300",
    featured: true,
  },
  {
    id: "t2",
    name: "Utility 90 CV",
    category: "utility",
    description:
      "Versatile per campo aperto e trasporto. Rapporto peso/potenza bilanciato.",
    powerHp: 90,
    drive: "4WD",
    features: ["PTO 540/540E", "Sollevatore 4000 kg", "Trasmissione 24+24"],
    cert: "EU Stage V",
    image: "/api/placeholder/400/300",
    featured: true,
  },
  {
    id: "t3",
    name: "Vigneto/Frutteto 75 CV Stretta",
    category: "vigneto",
    description:
      "Profilo stretto per filari e manovre in spazi ridotti, con protezione colture.",
    powerHp: 75,
    drive: "4WD",
    features: ["Larghezza < 1.4 m", "Cabina categoria 4 (opz.)", "Idraulica load-sensing"],
    cert: "EU Stage V",
    image: "/api/placeholder/400/300",
    featured: true,
  },
  {
    id: "t4",
    name: "Cingolato 105 CV",
    category: "cingolati",
    description:
      "Massima trazione su terreni declivi o bagnati. Stabilità e spinta costante.",
    powerHp: 105,
    drive: "cingolato",
    features: ["Cingoli gomma 450 mm", "Baricentro basso", "PTO sincronizzata"],
    cert: "EU Stage V",
    image: "/api/placeholder/400/300",
    featured: false,
  },
  {
    id: "t5",
    name: "Elettrico 50 CV eq.",
    category: "elettrici",
    description:
      "Zero emissioni locali, coppia immediata. Ideale per serre e aree sensibili.",
    powerHp: 50,
    drive: "4WD",
    features: ["Batteria 60 kWh", "Ricarica AC/DC", "Rumorosità ridotta"],
    cert: "CE",
    image: "/api/placeholder/400/300",
    featured: true,
  },
  {
    id: "t6",
    name: "Utility 120 CV",
    category: "utility",
    description:
      "Per attrezzi esigenti e lavorazioni gravose. Efficienza e affidabilità.",
    powerHp: 120,
    drive: "4WD",
    features: ["Sollevatore 6500 kg", "Isobus ready", "Sospensioni anteriori"],
    cert: "EU Stage V",
    image: "/api/placeholder/400/300",
    featured: false,
  },
  {
    id: "t6",
    name: "Utility 120 CV",
    category: "utility",
    description:
      "Per attrezzi esigenti e lavorazioni gravose. Efficienza e affidabilità.",
    powerHp: 120,
    drive: "4WD",
    features: ["Sollevatore 6500 kg", "Isobus ready", "Sospensioni anteriori"],
    cert: "EU Stage V",
    image: "/api/placeholder/400/300",
    featured: false,
  },
  {
    id: "t6",
    name: "Utility 120 CV",
    category: "utility",
    description:
      "Per attrezzi esigenti e lavorazioni gravose. Efficienza e affidabilità.",
    powerHp: 120,
    drive: "4WD",
    features: ["Sollevatore 6500 kg", "Isobus ready", "Sospensioni anteriori"],
    cert: "EU Stage V",
    image: "/api/placeholder/400/300",
    featured: false,
  },
  {
    id: "t6",
    name: "Utility 120 CV",
    category: "utility",
    description:
      "Per attrezzi esigenti e lavorazioni gravose. Efficienza e affidabilità.",
    powerHp: 120,
    drive: "4WD",
    features: ["Sollevatore 6500 kg", "Isobus ready", "Sospensioni anteriori"],
    cert: "EU Stage V",
    image: "/api/placeholder/400/300",
    featured: false,
  },
];

const stats = [
  { label: "Trattori a Catalogo", value: "150+", icon: Award },
  { label: "Anni di Esperienza", value: "25", icon: Clock },
  { label: "Clienti Serviti", value: "1000+", icon: Users },
  { label: "Consegne Annue", value: "2000+", icon: Truck },
];

const tractorTabs: { id: Tractor["category"] | "tutti"; label: string; emoji: string }[] = [
  { id: "tutti", label: "Tutti", emoji: "🚜" },
  { id: "compatti", label: "Compatti", emoji: "📦" },
  { id: "utility", label: "Utility", emoji: "🧰" },
  { id: "vigneto", label: "Vigneto", emoji: "🍇" },
  { id: "cingolati", label: "Cingolati", emoji: "🛤️" },
  { id: "elettrici", label: "Elettrici", emoji: "⚡" },
];

export default function TrattoriPage() {
  // scope per @gsap/react (selettori stringa safe tipati)
  const pageRef = useRef<HTMLDivElement>(null);

  // Animazioni GSAP (niente NodeList|undefined)
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // HERO: titolo / testo / CTA
      tl.from(".hero-animate", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.12,
      });

      // STATS: fade-in su scroll
      gsap.from(".stat-item", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
      });

      // CARDS: reveal per-card su scroll
      gsap.utils.toArray<HTMLElement>(".tractor-card").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.5,
          delay: Math.min(i * 0.05, 0.4),
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    },
    { scope: pageRef } // cleanup automatico
  );

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-animate text-5xl md:text-6xl font-bold mb-6">
              Trattori & Macchine Agricole
            </h1>
            <p className="hero-animate text-xl md:text-2xl mb-8 text-white/90">
              Compatti, utility, cingolati ed elettrici: prestazioni e affidabilità per ogni esigenza.
            </p>
            <div className="hero-animate flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ecommerce">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Vedi Modelli Disponibili
                </Button>
              </Link>
              <Link href="/contatti">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Consulenza Gratuita
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-lg mb-3">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH/FILTER */}
      <section className="py-12 bg-white border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Cerca trattori (es. 90 CV, vigneto…)" className="pl-10" />
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filtri
              </Button>
              <Badge variant="secondary">Tutti i trattori</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIE */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { id: "compatti", label: "Compatti", desc: "Agili e parsimoniosi" },
              { id: "utility", label: "Utility", desc: "Versatilità in campo" },
              { id: "vigneto", label: "Vigneto/Frutteto", desc: "Stretti per filari" },
              { id: "cingolati", label: "Cingolati", desc: "Trazione e stabilità" },
              { id: "elettrici", label: "Elettrici", desc: "Zero emissioni" },
            ].map((c) => (
              <Card key={c.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-lg mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Truck className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{c.label}</CardTitle>
                  <CardDescription className="text-sm">{c.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRODOTTI IN EVIDENZA */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Modelli in Evidenza</h2>
            <p className="text-muted-foreground">
              Selezionati per prestazioni, qualità costruttiva e rapporto qualità/prezzo
            </p>
          </div>

          <Tabs defaultValue="tutti" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-6 mb-8">
              {[
                { id: "tutti", label: "Tutti", emoji: "🚜" },
                { id: "compatti", label: "Compatti", emoji: "📦" },
                { id: "utility", label: "Utility", emoji: "🧰" },
                { id: "vigneto", label: "Vigneto", emoji: "🍇" },
                { id: "cingolati", label: "Cingolati", emoji: "🛤️" },
                { id: "elettrici", label: "Elettrici", emoji: "⚡" },
              ].map((t) => (
                <TabsTrigger key={t.id} value={t.id}>
                  {t.emoji} {t.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {(["tutti", "compatti", "utility", "vigneto", "cingolati", "elettrici"] as const).map(
              (tabId) => {
                const list =
                  tabId === "tutti"
                    ? tractors.filter((m) => m.featured)
                    : tractors.filter((m) => m.category === tabId && m.featured);

                return (
                  <TabsContent key={tabId} value={tabId}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {list.map((tractor) => (
                        <Card
                          key={tractor.id}
                          className="tractor-card group hover:shadow-lg transition-all duration-300"
                        >
                          <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                              <div className="text-6xl text-primary/30">
                                {tractor.category === "compatti" && "📦"}
                                {tractor.category === "utility" && "🧰"}
                                {tractor.category === "vigneto" && "🍇"}
                                {tractor.category === "cingolati" && "🛤️"}
                                {tractor.category === "elettrici" && "⚡"}
                              </div>
                            </div>
                          </div>

                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <Badge variant="secondary" className="mb-2 text-xs">
                                  {tabId === "tutti"
                                    ? tractor.category.toUpperCase()
                                    : tLabel(tabId)}
                                </Badge>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                  {tractor.name}
                                </CardTitle>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                <Award className="h-3 w-3 mr-1" />
                                {tractor.cert ?? "Certificato"}
                              </Badge>
                            </div>
                            <CardDescription className="line-clamp-2">
                              {tractor.description}
                            </CardDescription>
                          </CardHeader>

                          <CardContent>
                            <div className="space-y-4">
                              <div className="grid grid-cols-3 gap-2 text-sm">
                                <div className="flex items-center">
                                  <Shield className="h-3.5 w-3.5 mr-2 text-accent" />
                                  {tractor.powerHp} CV
                                </div>
                                <div className="flex items-center">
                                  <Wrench className="h-3.5 w-3.5 mr-2 text-accent" />
                                  {tractor.drive}
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-3.5 w-3.5 mr-2 text-accent" />
                                  Premium
                                </div>
                              </div>

                              <div>
                                <h4 className="font-medium mb-2 text-sm">Punti di forza:</h4>
                                <div className="space-y-1">
                                  {tractor.features.slice(0, 2).map((f, i) => (
                                    <div
                                      key={i}
                                      className="flex items-center text-sm text-muted-foreground"
                                    >
                                      <CheckCircle className="h-3 w-3 mr-2 text-accent flex-shrink-0" />
                                      {f}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <Separator />

                              <div className="flex gap-2">
                                <Link href="/ecommerce">
                                  <Button className="flex-1" size="sm">
                                    <ShoppingCart className="h-4 w-4 mr-2" />
                                    Aggiungi al Carrello
                                  </Button>
                                </Link>
                                <Link href={`/prodotti/${tractor.id}`}>
                                  <Button variant="outline" size="sm">
                                    Dettagli
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                );
              }
            )}
          </Tabs>
        </div>
      </section>

      {/* QUALITÀ & SERVIZI */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Qualità & Servizi</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Supporto tecnico, ricambi e finanziamenti per mantenere al massimo l’operatività.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certificazioni</h3>
                <p className="text-muted-foreground">
                  Modelli conformi agli standard EU Stage V/CE.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-white rounded-full mb-4">
                  <Wrench className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Assistenza</h3>
                <p className="text-muted-foreground">
                  Officina e manutenzione programmata con ricambi originali.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Garanzie</h3>
                <p className="text-muted-foreground">
                  Estensioni di garanzia e coperture assicurative dedicate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto a Scegliere il Tuo Trattore?</h2>
            <p className="text-xl mb-8 text-white/90">
              Contattaci per un preventivo personalizzato o prova un modello in demo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ecommerce">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Vai all’E-commerce
                </Button>
              </Link>
              <Link href="/contatti">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Richiedi Preventivo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// helper per label tab
function tLabel(id: string) {
  switch (id) {
    case "compatti":
      return "Compatti";
    case "utility":
      return "Utility";
    case "vigneto":
      return "Vigneto";
    case "cingolati":
      return "Cingolati";
    case "elettrici":
      return "Elettrici";
    default:
      return id.toUpperCase();
  }
}
