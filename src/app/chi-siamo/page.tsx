"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  CalendarDays,
  Users,
  TrendingUp,
  Award,
  Mail,
  Phone,
  MapPin,
  Tractor,
  Wheat,
  Leaf,
  Heart,
  CheckCircle,
  FileUp,
  ArrowRight,
  UserPlus,
} from "lucide-react";
import SiteFooter from "@/components/footers/newsletter-footer";

/** Palette coerente con Servizi */
const gold = "text-[#D5B46E]";
const goldBg = "bg-[#D5B46E]";
const deepBlue = "bg-[#0E3A66]";
const deepBlueText = "text-[#0E3A66]";
const white = "text-white";

type StaffMember = {
  name: string;
  role: string;
  img?: string; // opzionale: path immagine (es. /staff/nome.jpg)
};

export default function ChiSiamo() {
  // ⬇︎ ref: nullable
  const refComm = useRef<HTMLDivElement | null>(null);
  const refOff = useRef<HTMLDivElement | null>(null);

  // ⬇︎ accetta RefObject<HTMLDivElement | null>
  const scrollRow = (
    rowRef: React.RefObject<HTMLDivElement | null>,
    dir: "l" | "r"
  ) => {
    const el = rowRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir === "r" ? amount : -amount, behavior: "smooth" });
  };

  // dati slider (puoi sostituire i nomi/ruoli e mettere i tuoi path immagini)
  const staffCommerciale: StaffMember[] = [
    {
      name: "Michele Paldino",
      role: "Ragioniere ufficio amministrativo",
      img: "/images/team/michpal.png",
    },
    {
      name: "Cataldo Vitale",
      role: "Ragioniere ufficio fornitori",
      img: "/images/team/cataldo.png",
    },
    {
      name: "Alfonso Salimbeni",
      role: "Ufficio commerciale",
      img: "/images/team/salimbeni.png",
    },
    {
      name: "Maria Tassitani",
      role: "Impiegata amministrativa",
      img: "/images/team/tassitani.png",
    },
    {
      name: "Salvatore Oliva",
      role: "Ufficio commerciale",
      img: "/images/team/oliva.png",
    },
    {
      name: "Maria Guidi",
      role: "Impiegata amministrativa",
      img: "/images/team/guidi.png",
    },
    {
      name: "Natalino Forciniti",
      role: "Ufficio commerciale",
      img: "/images/team/forciniti.png",
    },
    {
      name: "Francesco Saltellino",
      role: "Ufficio commerciale",
      img: "/images/team/saltellino.png",
    },
    {
      name: "Francesco Vitelli",
      role: "Ufficio commerciale",
      img: "/images/team/vitelli.png",
    },
    {
      name: "Marco Esposito",
      role: "Ufficio commerciale",
      img: "/images/team/esposito.png",
    },
  ];

  const staffOfficina: StaffMember[] = [
    {
      name: "Giuseppe Corina",
      role: "Capo officina",
      img: "/images/team/corina.png",
    },
    {
      name: "Alfonso Curti",
      role: "Capo officina",
      img: "/images/team/curti.png",
    },
    {
      name: "Salvatore Albamonte",
      role: "Meccanico",
      img: "/images/team/albamonte.png",
    },
    { name: "Luigi Iacino", role: "Meccanico", img: "/images/team/iacino.png" },
    {
      name: "Giovanni Gabriele",
      role: "Meccanico",
      img: "/images/team/gabriele.png",
    },
    {
      name: "Salvatore Brina",
      role: "Addetto servizi ricambi",
      img: "/images/team/brina.png",
    },
    {
      name: "Stella La Rocca",
      role: "Addetta servizi ricambi",
      img: "/images/team/larocca.png",
    },
  ];

  // stato form HR
  const [consenso, setConsenso] = useState(false);

  const submitDummy = (e: React.FormEvent) => {
    e.preventDefault();
    // collega qui la tua action/endpoint
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />

      {/* HERO */}
      <section
        className="relative pt-28 pb-16 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,#0E3A66 0%,#164B83 50%,#1C6FB2 100%)",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1605901309584-818e25960a8b?q=80&w=2000&auto=format&fit=crop"
          alt="Sede Malavolta"
          fill
          priority
          className="object-cover opacity-15"
        />
        <div className="relative container z-10 text-white">
          <Badge className="bg-white/15 border-white/25 text-white mb-4">
            Dal 1950 al tuo fianco
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className={white}>CHI </span>
            <span className={gold}>SIAMO</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/90 max-w-4xl">
            Da oltre settant’anni nel campo della meccanizzazione agricola.
            Tradizione, competenza e innovazione per supportare il tuo lavoro,
            ogni giorno.
          </p>
        </div>
      </section>

      {/* TESTO STORICO / QUALITÀ */}
      <section className="py-14">
        <div className="container max-w-5xl">
          <h2 className={`text-3xl md:text-4xl font-bold ${deepBlueText} mb-6`}>
            Da oltre settant&apos;anni nel campo della meccanizzazione
          </h2>
          <div className="prose prose-neutral max-w-none leading-relaxed text-muted-foreground">
            <p>
              Assieme ai nostri clienti abbiamo percorso una strada comune che
              oggi si apre a prospettive completamente nuove. L’azienda conta su
              personale altamente qualificato, addetto al servizio vendita e
              post-vendita, in continuo aggiornamento e con esperienza
              pluriennale maturata nella ditta omonima fondata oltre mezzo
              secolo fa da Giovanni Malavolta.
            </p>
            <p>
              Con un magazzino ricambi di oltre 1200 m² e circa 20.000 articoli
              disponibili, il reparto ricambi evade in un’ora circa il 90% delle
              richieste di parti originali dei marchi commercializzati; su
              richiesta in 24/48 ore il mancante e anche parti di ricambio di
              altre marche.
            </p>
            <p>
              Il team tecnico mantiene alta la professionalità grazie
              all’esperienza sul campo e alla costante partecipazione ai corsi
              di aggiornamento delle case costruttrici di cui l’azienda è
              concessionaria. Anche nella prevendita, le scelte dei clienti
              vengono supportate da prove in campo e consulenze dedicate.
            </p>
            <p>
              Per la <strong>Giovanni Malavolta srl</strong> l’obiettivo resta
              quello di aumentare l’efficienza e garantire un costante ed
              elevato livello qualitativo in tutte le attività e i servizi
              offerti. Dal 2007 siamo tra le prime aziende del settore ad
              ottenere la{" "}
              <strong>
                certificazione di qualità secondo gli standard ISO 9001
              </strong>
              , rilasciata da Certiquality, ente leader in Italia.
            </p>
          </div>

          <h3
            className={`mt-10 text-2xl md:text-3xl font-bold ${deepBlueText}`}
          >
            Certificazione di qualità
          </h3>
          <p className="mt-3 text-muted-foreground">
            La certificazione conferma il nostro impegno a migliorare
            continuamente processi interni, rapporto con la clientela e qualità
            dei servizi. Tecnologia, gamma prodotti e servizi pre- e
            post-vendita facilitano il lavoro e la competitività dei nostri
            clienti.
          </p>

          <h3
            className={`mt-10 text-2xl md:text-3xl font-bold ${deepBlueText}`}
          >
            Da oltre mezzo secolo meccanizziamo l’agricoltura
          </h3>
          <p className="mt-3 text-muted-foreground">
            Attivi da oltre 70 anni nel settore, mettiamo al servizio dei
            clienti un patrimonio di competenze, passione e affidabilità
            costruito nel tempo.
          </p>
        </div>
      </section>

      {/* PLACEHOLDER GIOVANNI MALAVOLTA */}
      <section className="py-10 bg-muted/30">
        <div className="container max-w-5xl">
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className={`${deepBlueText}`}>
                Giovanni Malavolta
              </CardTitle>
              <CardDescription>
                Spazio riservato a un contenuto dedicato (biografia, foto,
                timeline). Lo completeremo quando avrai il testo definitivo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-40 rounded-xl border border-border/50 grid place-content-center text-muted-foreground">
                Contenuto in arrivo
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* STAFF — slider commerciale/amministrativo */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className={`text-3xl md:text-4xl font-bold ${deepBlueText}`}>
              Il nostro team
            </h2>
            <p className="text-muted-foreground">
              Persone e competenze al servizio dei clienti
            </p>
          </div>

          {/* Reparto Commerciale e Amministrativo */}
          <div className="flex items-center justify-between mb-3">
            <h3 className={`font-semibold ${deepBlueText}`}>
              Reparto Commerciale e Amministrativo
            </h3>
            <div className="hidden md:flex gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => scrollRow(refComm, "l")}
              >
                ‹
              </Button>
              <Button size="icon" onClick={() => scrollRow(refComm, "r")}>
                ›
              </Button>
            </div>
          </div>

          <div
            ref={refComm}
            className="overflow-x-auto flex gap-4 pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {staffCommerciale.map((m) => (
              <Card
                key={m.name}
                className="min-w-[260px] snap-start hover:shadow-md transition border-border/50"
              >
                <CardContent className="p-6 text-center">
                  {m.img ? (
                    <div className="mx-auto w-28 h-28 rounded-full overflow-hidden mb-4 ring-2 ring-primary/20">
                      <Image
                        src={m.img}
                        alt={m.name}
                        width={240}
                        height={250}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="mx-auto w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                  )}
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {m.role}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Officina meccanica e ricambi */}
          <div className="flex items-center justify-between mt-10 mb-3">
            <h3 className={`font-semibold ${deepBlueText}`}>
              Officina Meccanica e Ricambi
            </h3>
            <div className="hidden md:flex gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => scrollRow(refOff, "l")}
              >
                ‹
              </Button>
              <Button size="icon" onClick={() => scrollRow(refOff, "r")}>
                ›
              </Button>
            </div>
          </div>

          <div
            ref={refOff}
            className="overflow-x-auto flex gap-4 pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {staffOfficina.map((m) => (
              <Card
                key={m.name}
                className="min-w-[260px] snap-start hover:shadow-md transition border-border/50"
              >
                <CardContent className="p-6 text-center">
                  {m.img ? (
                    <div className="mx-auto w-28 h-28 rounded-full overflow-hidden mb-4 ring-2 ring-primary/20">
                      <Image
                        src={m.img}
                        alt={m.name}
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="mx-auto w-28 h-28 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Tractor className="w-12 h-12 text-accent" />
                    </div>
                  )}
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {m.role}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RISORSE UMANE — candidatura */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className={gold}>RISORSE</span>{" "}
                <span className={deepBlueText}>UMANE</span>
              </h2>
              <p className="text-muted-foreground">
                Se pensi di avere le competenze e l’entusiasmo per lavorare con
                noi, compila il form e inviaci il tuo curriculum. Una
                compilazione accurata dei campi favorisce la selezione e aumenta
                le possibilità di contatto.
              </p>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <form onSubmit={submitDummy} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="Nome" required />
                      <Input placeholder="Cognome" required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input type="email" placeholder="Email" required />
                      <Input
                        type="tel"
                        placeholder="Numero di telefono"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="Anno di nascita" />
                      <Input placeholder="Titolo di studio" />
                    </div>
                    <Textarea
                      placeholder="Precedenti esperienze lavorative"
                      className="min-h-[110px]"
                    />
                    <Textarea
                      placeholder="Altro (competenze, corsi, patente, ecc.)"
                      className="min-h-[90px]"
                    />

                    <div className="flex items-center gap-3">
                      <label className="inline-flex items-center gap-2 px-3 py-2 rounded-md border w-fit cursor-pointer">
                        <FileUp className="w-4 h-4" />
                        <span>Carica il tuo curriculum (PDF)</span>
                        <input type="file" accept=".pdf" className="hidden" />
                      </label>
                    </div>

                    <label className="flex items-start gap-2 text-sm">
                      <input
                        type="checkbox"
                        className="mt-1"
                        checked={consenso}
                        onChange={(e) => setConsenso(e.target.checked)}
                        required
                      />
                      <span>
                        Accetto il trattamento dei dati personali secondo la{" "}
                        <a href="#" className="underline">
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>

                    <Button
                      className={`${goldBg} ${deepBlueText} hover:opacity-90`}
                      type="submit"
                    >
                      Invia candidatura <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* pannello immagine */}
            <div className="rounded-2xl overflow-hidden ring-1 ring-border/50">
              <div className={`${deepBlue} text-white p-8`}>
                <h3 className="text-2xl font-bold text-white">
                  Lavora con noi
                </h3>
                <p className="mt-2 text-white/90">
                  Cerchiamo figure professionali in grado di valorizzare e
                  incrementare la produttività dell’azienda.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge className="bg-white/10 border-white/20 text-white">
                    Crescita continua
                  </Badge>
                  <Badge className="bg-white/10 border-white/20 text-white">
                    Formazione
                  </Badge>
                  <Badge className="bg-white/10 border-white/20 text-white">
                    Team coeso
                  </Badge>
                </div>
              </div>
              <div className="relative h-64 md:h-[380px]">
                <Image
                  src="/images/team/team.png"
                  alt="Team Malavolta"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATTI + MAPPA */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* modulo contatti rapido */}
            <div>
              <h3 className={`text-3xl font-bold ${deepBlueText} mb-4`}>
                Contatti
              </h3>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Nome" />
                    <Input placeholder="Cognome" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input type="email" placeholder="Email" />
                    <Input type="tel" placeholder="Telefono" />
                  </div>
                  <Textarea
                    placeholder="Scrivi il tuo messaggio..."
                    className="min-h-[110px]"
                  />
                  <Button className={`${deepBlue} text-white hover:opacity-90`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Invia richiesta
                  </Button>
                  <div className="grid sm:grid-cols-3 gap-3 pt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" /> +39 0983 497243
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" /> info@giovannimalavolta.it
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> SS 106 Jonica km 18, 87064
                      Corigliano CS
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* mappa */}
            <div className="w-full h-[420px] overflow-hidden rounded-2xl ring-1 ring-border/50">
              <iframe
                title="Mappa Giovanni Malavolta S.r.l."
                src="https://maps.google.com/maps?q=Giovanni%20Malavolta%20S.r.l.%20SS%20106%20Jonica%20km%2018%2087064%20Corigliano%20Calabro%20CS&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (coerente con servizi) */}
      <SiteFooter />
    </div>
  );
}
