"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Wrench,
  Shield,
  Leaf,
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Clock,
  Settings,
  GraduationCap,
  FlaskConical,
  Droplets,
  Truck,
  HeadphonesIcon,
} from "lucide-react";

// PALETTE giallo + nero
const gold = "text-[#FFD700]";
const goldBg = "bg-[#FFD700]";
const deepBlue = "bg-black"; // ex blu → nero
const deepBlueText = "text-black"; // ex blu → nero
const white = "text-white";

export default function ServiziClient({
  motivoFromUrl,
}: {
  motivoFromUrl: string;
}) {
  const heroRef = useRef<HTMLDivElement>(null);

  const [motivo, setMotivo] = useState(
    ["Post Vendita", "Consulenza", "Finanziamenti", "Officina"].includes(
      motivoFromUrl
    )
      ? motivoFromUrl
      : ""
  );

  const testimonials = [
    {
      name: "Marco Bianchi",
      role: "Azienda Agricola San Giuseppe",
      content:
        "Post vendita sempre tempestivo e professionale. Conoscono perfettamente i macchinari.",
      rating: 5,
    },
    {
      name: "Elena Rossi",
      role: "Cooperativa Valle Verde",
      content:
        "Consulenza agronomica che ci ha aumentato la resa e ridotto costi. Super.",
      rating: 4.5,
    },
    {
      name: "Giuseppe Ferrari",
      role: "Azienda Il Mulino",
      content:
        "Con la manutenzione programmata abbiamo azzerato i fermi imprevisti.",
      rating: 5,
    },
  ];

  const services = [
    {
      icon: Settings,
      title: "Manutenzione Preventiva",
      description:
        "Programmi su misura per ridurre guasti e mantenere i macchinari efficienti.",
      benefits: ["Riduzione guasti", "Maggiore durata", "Piani personalizzati"],
      process:
        "Pianificazione → Controlli → Manutenzione → Report → Programmazione",
    },
    {
      icon: GraduationCap,
      title: "Formazione e Training",
      description:
        "Corsi pratici per operatori su sicurezza, uso mezzi e aggiornamenti normativi.",
      benefits: ["Certificazioni", "Corsi pratici", "Aggiornamenti normativi"],
      process:
        "Valutazione → Programma → Formazione → Verifica → Certificazione",
    },
    {
      icon: FlaskConical,
      title: "Analisi Terreno e Raccolti",
      description:
        "Analisi chimico-fisiche e report con raccomandazioni operative.",
      benefits: [
        "Laboratori accreditati",
        "Report dettagliati",
        "Raccomandazioni specifiche",
      ],
      process:
        "Campionamento → Analisi → Interpretazione → Raccomandazioni → Monitoraggio",
    },
    {
      icon: Droplets,
      title: "Impianti di Irrigazione",
      description:
        "Progettazione e installazione di sistemi efficienti e automatizzati.",
      benefits: ["Risparmio idrico", "Automazione", "Efficienza energetica"],
      process: "Rilievo → Progetto → Installazione → Taratura → Manutenzione",
    },
    {
      icon: Truck,
      title: "Noleggio Macchinari",
      description:
        "Flotta moderna per esigenze stagionali o progetti specifici.",
      benefits: ["Flotta aggiornata", "Tariffe competitive", "Assistenza"],
      process: "Richiesta → Valutazione → Contratto → Consegna → Ritiro",
    },
    {
      icon: HeadphonesIcon,
      title: "Supporto Post-Vendita",
      description:
        "Ricambi originali, garanzie estese e supporto continuativo.",
      benefits: ["Ricambi originali", "Garanzie estese", "Supporto continuo"],
      process: "Registrazione → Supporto → Manutenzione → Ricambi → Garanzia",
    },
  ];

  const certifications = [
    {
      icon: Shield,
      title: "Certificazione ISO 9001",
      description: "Qualità certificata nei processi e servizi",
    },
    {
      icon: Leaf,
      title: "Abilitazione Fitosanitaria",
      description: "Autorizzati per consulenze agronomiche",
    },
    {
      icon: Wrench,
      title: "Tecnici Specializzati",
      description: "Formati dalle migliori case costruttrici",
    },
    {
      icon: GraduationCap,
      title: "Centro Formazione Accreditato",
      description: "Percorsi con attestazione finale",
    },
  ];

  const coverageAreas = [
    { area: "Lombardia", responseTime: "2-4 ore", coverage: "Completa" },
    {
      area: "Piemonte",
      responseTime: "4-6 ore",
      coverage: "Province principali",
    },
    {
      area: "Veneto",
      responseTime: "6-8 ore",
      coverage: "Zone agricole principali",
    },
    {
      area: "Emilia-Romagna",
      responseTime: "4-8 ore",
      coverage: "Pianura padana",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative pt-28 pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,#000000 0%,#222222 50%,#000000 100%)",
        }}
      >
        <Image
          src="/images/postvendita.png"
          alt="Malavolta sede"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="relative container z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className={white}>I NOSTRI</span>{" "}
            <span className={gold}>SERVIZI</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/90 max-w-3xl">
            Solo i migliori marchi, selezionati con standard rigorosi.
            Assistenza, finanziamenti, officina e consulenza: al tuo fianco in
            ogni campo.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Badge className="bg-white/15 border-white/25 text-white">
              <Clock className="w-4 h-4 mr-2" /> Interventi rapidi
            </Badge>
            <Badge className="bg-white/15 border-white/25 text-white">
              <Shield className="w-4 h-4 mr-2" /> Tecnici certificati
            </Badge>
            <Badge className="bg-white/15 border-white/25 text-white">
              <MapPin className="w-4 h-4 mr-2" /> Nord Italia
            </Badge>
          </div>
        </div>
      </section>

      {/* SEZIONI PRINCIPALI */}
      <section className="py-14">
        <div className="container space-y-8">
          {/* POST VENDITA */}
          <Card className="overflow-hidden border-border/50">
            <div className="grid md:grid-cols-2 gap-0">
              <div className={`${deepBlue} text-white p-8 md:p-12`}>
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  <span className={gold}>POST</span>{" "}
                  <span className={white}>VENDITA</span>
                </h2>
                <p className="mt-4 text-white/90 max-w-prose">
                  La Alfonso Malavolta assiste il cliente per tutto ciò che
                  serve dopo l’acquisto di un mezzo agricolo: ricambi originali,
                  garanzia, interventi rapidi e supporto dedicato.
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    "Ricambi originali",
                    "Garanzia e pratiche",
                    "Supporto dedicato",
                  ].map((item) => (
                    <li key={item} className="flex items-center text-white/90">
                      <CheckCircle className="w-4 h-4 mr-2 text-[#8FD19E]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    className={`${goldBg} ${deepBlueText} hover:opacity-90`}
                    onClick={() => {
                      window.location.hash = "contatti";
                      setMotivo("Post Vendita");
                    }}
                  >
                    Richiedi assistenza <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              <div className="relative min-h-[260px] md:min-h-[420px]">
                <Image
                  src="/images/postvendita.png"
                  alt="Post vendita"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </Card>

          {/* FINANZIAMENTI */}
          <Card className="overflow-hidden border-border/50">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative order-1 md:order-none min-h-[260px] md:min-h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1600&auto=format&fit=crop"
                  alt="Finanziamenti"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className={`${deepBlue} text-white p-8 md:p-12`}>
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  <span className={gold}>FINANZIA</span>
                  <span className={white}>MENTI</span>
                </h2>
                <p className="mt-4 text-white/90 max-w-prose">
                  Grazie alle nostre convenzioni con i migliori istituti di
                  credito offriamo finanziamenti personalizzati per ogni
                  esigenza.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge className="bg-white/10 border-white/20 text-white">
                    Tassi competitivi
                  </Badge>
                  <Badge className="bg-white/10 border-white/20 text-white">
                    Piani flessibili
                  </Badge>
                </div>
                <div className="mt-8">
                  <Button
                    className={`${goldBg} ${deepBlueText} hover:opacity-90`}
                    onClick={() => {
                      window.location.hash = "contatti";
                      setMotivo("Finanziamenti");
                    }}
                  >
                    Parla con un consulente{" "}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* OFFICINA */}
          <Card className="overflow-hidden border-border/50">
            <div className="grid md:grid-cols-2 gap-0">
              <div className={`${deepBlue} text-white p-8 md:p-12`}>
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  <span className={gold}>OFFICINA</span>{" "}
                  <span className={white}> MECCANICA </span>
                </h2>
                <p className="mt-4 text-white/90 max-w-prose">
                  Tecnici qualificati, formazione continua e ricambi originali
                  per diagnosi e riparazioni meccaniche, elettriche ed
                  elettroniche.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge className="bg-white/10 border-white/20 text-white">
                    Diagnosi rapide
                  </Badge>
                  <Badge className="bg-white/10 border-white/20 text-white">
                    Ricambi originali
                  </Badge>
                </div>
                <div className="mt-8">
                  <Button
                    className={`${goldBg} ${deepBlueText} hover:opacity-90`}
                    onClick={() => {
                      window.location.hash = "contatti";
                      setMotivo("Officina");
                    }}
                  >
                    Prenota un appuntamento{" "}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[260px] md:min-h-[420px]">
                <Image
                  src="/images/ricambi2.png"
                  alt="Officina"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </Card>

          {/* CONSULENZA */}
          <Card className="overflow-hidden border-border/50">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative order-1 md:order-none min-h-[260px] md:min-h-[420px]">
                <Image
                  src="/images/logo2.png"
                  alt="Consulenza"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className={`${deepBlue} text-white p-8 md:p-12`}>
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  <span className={gold}>CONSUL</span>
                  <span className={white}>ENZA </span>
                </h2>
                <p className="mt-4 text-white/90 max-w-prose">
                  Ti guidiamo nell’adeguamento normativo e nell’ottimizzazione
                  dei processi: sicurezza, qualità e riduzione dei costi.
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    "Analisi esigenze e piani su misura",
                    "Progettazione soluzioni più efficaci",
                    "Riduzione dei costi e miglioramento produttività",
                  ].map((t) => (
                    <li key={t} className="flex items-center text-white/90">
                      <CheckCircle className="w-4 h-4 mr-2 text-[#8FD19E]" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    className={`${goldBg} ${deepBlueText} hover:opacity-90`}
                    onClick={() => {
                      window.location.hash = "contatti";
                      setMotivo("Consulenza");
                    }}
                  >
                    Richiedi consulenza <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Competenze & Certificazioni */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold ${deepBlueText}`}>
              Competenze Tecniche e Certificazioni
            </h2>
            <p className="text-muted-foreground">
              Esperienza e certificazioni che garantiscono qualità e conformità.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((c, i) => (
              <Card key={i} className="text-center hover:shadow-md transition">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-[#FFD700]/10 rounded-full flex items-center justify-center mb-4">
                    <c.icon className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <CardTitle className="text-lg">{c.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{c.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-card rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-center mb-6">
              I Nostri Numeri
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className={`text-3xl font-bold ${deepBlueText}`}>25+</div>
                <p className="text-muted-foreground">Anni di Esperienza</p>
              </div>
              <div>
                <div className={`text-3xl font-bold ${deepBlueText}`}>500+</div>
                <p className="text-muted-foreground">Clienti Serviti</p>
              </div>
              <div>
                <div className={`text-3xl font-bold ${deepBlueText}`}>24/7</div>
                <p className="text-muted-foreground">Assistenza Disponibile</p>
              </div>
              <div>
                <div className={`text-3xl font-bold ${deepBlueText}`}>95%</div>
                <p className="text-muted-foreground">Soddisfazione Cliente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonianze */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className={`text-3xl font-bold ${deepBlueText}`}>
              Cosa dicono i clienti
            </h3>
            <p className="text-muted-foreground">
              La soddisfazione dei nostri clienti è la migliore referenza.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: Math.round(t.rating) }).map(
                      (_, idx) => (
                        <Star
                          key={idx}
                          className="w-5 h-5 fill-[#8FD19E] text-[#8FD19E]"
                        />
                      )
                    )}
                  </div>
                  <blockquote className="text-center italic text-muted-foreground">
                    “{t.content}”
                  </blockquote>
                  <div className="text-center pt-2 border-t border-border/50">
                    <div className={`font-semibold ${deepBlueText}`}>
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contatti unificati */}
      <section id="contatti" className="py-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <h3 className={`text-3xl font-bold ${deepBlueText}`}>
              Richiedi una consulenza
            </h3>
            <p className="text-muted-foreground">
              Un unico modulo per Post Vendita, Consulenza, Finanziamenti e
              Officina.
            </p>
          </div>

          <Card className="border-border/50 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* form */}
              <CardContent className="p-8 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Nome" />
                  <Input placeholder="Cognome" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Telefono" type="tel" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Motivo del contatto
                  </label>
                  <select
                    value={motivo}
                    onChange={(e) => setMotivo(e.target.value)}
                    className="w-full p-3 border border-input rounded-md bg-background"
                  >
                    <option value="">Seleziona un motivo</option>
                    <option>Post Vendita</option>
                    <option>Consulenza</option>
                    <option>Finanziamenti</option>
                    <option>Officina</option>
                  </select>
                </div>
                <Textarea
                  placeholder="Descrivi la tua richiesta..."
                  className="min-h-[120px]"
                />
                <Button className={`${deepBlue} text-white hover:bg-black/90`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Invia richiesta
                </Button>
              </CardContent>

              {/* Perché sceglierci */}
              <div className={`${deepBlue} text-white p-8`}>
                <CardTitle className="text-xl">
                  Perché scegliere Malavolta
                </CardTitle>
                <ul className="mt-4 space-y-3">
                  {[
                    "Oltre 25 anni di esperienza",
                    "Tecnici certificati dalle case costruttrici",
                    "Ricambi originali e garanzie ufficiali",
                    "Copertura capillare Nord Italia",
                  ].map((li) => (
                    <li key={li} className="flex">
                      <CheckCircle className="w-5 h-5 mt-0.5 mr-2 text-[#8FD19E]" />
                      <span className="text-white/90">{li}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">25+</div>
                    <div className="text-sm text-white/80">Anni esperienza</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm text-white/80">Clienti serviti</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
