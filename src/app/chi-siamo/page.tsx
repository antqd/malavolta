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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Users, Tractor, FileUp, ArrowRight } from "lucide-react";
import SiteFooter from "@/components/footers/newsletter-footer";

/** Palette: nero + giallo */
const gold = "text-[#FFD700]";
const goldBg = "bg-[#FFD700]";
const deepBlack = "bg-black";
const deepBlackText = "text-black";
const white = "text-white";

type StaffMember = {
  name: string;
  role: string;
  img?: string;
};

export default function ChiSiamo() {
  const refComm = useRef<HTMLDivElement | null>(null);
  const refOff = useRef<HTMLDivElement | null>(null);

  const scrollRow = (
    rowRef: React.RefObject<HTMLDivElement | null>,
    dir: "l" | "r"
  ) => {
    const el = rowRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir === "r" ? amount : -amount, behavior: "smooth" });
  };

  const staffCommerciale: StaffMember[] = [
    { name: "Michele Paldino", role: "Ragioniere ufficio amministrativo", img: "/images/team/michpal.png" },
    { name: "Cataldo Vitale", role: "Ragioniere ufficio fornitori", img: "/images/team/cataldo.png" },
    { name: "Alfonso Salimbeni", role: "Ufficio commerciale", img: "/images/team/salimbeni.png" },
    { name: "Maria Tassitani", role: "Impiegata amministrativa", img: "/images/team/tassitani.png" },
    { name: "Salvatore Oliva", role: "Ufficio commerciale", img: "/images/team/oliva.png" },
    { name: "Maria Guidi", role: "Impiegata amministrativa", img: "/images/team/guidi.png" },
    { name: "Natalino Forciniti", role: "Ufficio commerciale", img: "/images/team/forciniti.png" },
    { name: "Francesco Saltellino", role: "Ufficio commerciale", img: "/images/team/saltellino.png" },
    { name: "Francesco Vitelli", role: "Ufficio commerciale", img: "/images/team/vitelli.png" },
    { name: "Marco Esposito", role: "Ufficio commerciale", img: "/images/team/esposito.png" },
  ];

  const staffOfficina: StaffMember[] = [
    { name: "Giuseppe Corina", role: "Capo officina", img: "/images/team/corina.png" },
    { name: "Alfonso Curti", role: "Capo officina", img: "/images/team/curti.png" },
    { name: "Salvatore Albamonte", role: "Meccanico", img: "/images/team/albamonte.png" },
    { name: "Luigi Iacino", role: "Meccanico", img: "/images/team/iacino.png" },
    { name: "Giovanni Gabriele", role: "Meccanico", img: "/images/team/gabriele.png" },
    { name: "Salvatore Brina", role: "Addetto servizi ricambi", img: "/images/team/brina.png" },
    { name: "Stella La Rocca", role: "Addetta servizi ricambi", img: "/images/team/larocca.png" },
  ];

  const [consenso, setConsenso] = useState(false);

  const submitDummy = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white">
      <AnimatedIndicatorNavbar />

      {/* HERO */}
      <section
        className="relative pt-28 pb-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#000000 0%,#222222 50%,#000000 100%)",
        }}
      >
        <Image
          src="/images/postvendita.png"
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
          <h2 className={`text-3xl md:text-4xl font-bold ${deepBlackText} mb-6`}>
            TESTO
          </h2>
          <div className="prose prose-neutral max-w-none leading-relaxed text-gray-600">
            <p>TESTO</p>
            <p>TESTO</p>
            <p>TESTO</p>
            <p>
              TESTO <strong>TESTO</strong> TESTO
            </p>
          </div>

          <h3 className={`mt-10 text-2xl md:text-3xl font-bold ${deepBlackText}`}>
            TESTO
          </h3>
          <p className="mt-3 text-gray-600">TESTO</p>

          <h3 className={`mt-10 text-2xl md:text-3xl font-bold ${deepBlackText}`}>
            TESTO
          </h3>
          <p className="mt-3 text-gray-600">TESTO</p>
        </div>
      </section>
<section className="py-10 bg-muted/30">
        <div className="container max-w-5xl">
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="text-blue-800">
                Alfonso Malavolta
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
      {/* STAFF — commerciale */}
      <section className="py-16">
        <div className="container">
          <h2 className={`text-3xl md:text-4xl font-bold ${deepBlackText} mb-10 text-center`}>
            Il nostro team
          </h2>
          <div
            ref={refComm}
            className="overflow-x-auto flex gap-4 pb-4 snap-x snap-mandatory"
          >
            {staffCommerciale.map((m) => (
              <Card key={m.name} className="min-w-[260px] snap-start hover:shadow-md transition">
                <CardContent className="p-6 text-center">
                  {m.img ? (
                    <div className="mx-auto w-28 h-28 rounded-full overflow-hidden mb-4 ring-2 ring-[#FFD700]/30">
                      <Image src={m.img} alt={m.name} width={240} height={250} className="object-cover w-full h-full" />
                    </div>
                  ) : (
                    <div className="mx-auto w-28 h-28 rounded-full bg-[#FFD700]/10 flex items-center justify-center mb-4">
                      <Users className="w-12 h-12 text-[#FFD700]" />
                    </div>
                  )}
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-xs text-gray-600 mt-1">{m.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RISORSE UMANE */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className={gold}>RISORSE</span>{" "}
                <span className={deepBlackText}>UMANE</span>
              </h2>
              <p className="text-gray-600">
                Se pensi di avere le competenze e l’entusiasmo per lavorare con
                noi, compila il form e inviaci il tuo curriculum.
              </p>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <form onSubmit={submitDummy} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Nome"
                        required
                        className="focus:border-[#FFD700] focus:ring-[#FFD700]"
                      />
                      <Input
                        placeholder="Cognome"
                        required
                        className="focus:border-[#FFD700] focus:ring-[#FFD700]"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="email"
                        placeholder="Email"
                        required
                        className="focus:border-[#FFD700] focus:ring-[#FFD700]"
                      />
                      <Input
                        type="tel"
                        placeholder="Numero di telefono"
                        required
                        className="focus:border-[#FFD700] focus:ring-[#FFD700]"
                      />
                    </div>
                    <Textarea
                      placeholder="Precedenti esperienze lavorative"
                      className="min-h-[110px] focus:border-[#FFD700] focus:ring-[#FFD700]"
                    />
                    <Textarea
                      placeholder="Altro (competenze, corsi, patente, ecc.)"
                      className="min-h-[90px] focus:border-[#FFD700] focus:ring-[#FFD700]"
                    />

                    <div className="flex items-center gap-3">
                      <label className="inline-flex items-center gap-2 px-3 py-2 rounded-md border w-fit cursor-pointer hover:bg-gray-50">
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
                        <a href="#" className="underline text-black hover:text-[#FFD700]">
                          Privacy Policy
                        </a>.
                      </span>
                    </label>

                    {/* Bottone fixato */}
                    <Button
                      className="bg-[#FFD700] text-black hover:bg-[#e6c200] px-6 py-2 font-semibold"
                      type="submit"
                    >
                      Invia candidatura <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Immagine */}
            <div className="rounded-2xl overflow-hidden ring-1 ring-border/50">
              <div className={`${deepBlack} text-white p-8`}>
                <h3 className="text-2xl font-bold text-white">Lavora con noi</h3>
                <p className="mt-2 text-white/90">
                  Cerchiamo figure professionali in grado di valorizzare e
                  incrementare la produttività dell’azienda.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge className="bg-white/10 border-white/20 text-white">Crescita continua</Badge>
                  <Badge className="bg-white/10 border-white/20 text-white">Formazione</Badge>
                  <Badge className="bg-white/10 border-white/20 text-white">Team coeso</Badge>
                </div>
              </div>
              <div className="relative h-64 md:h-[380px]">
                <Image src="/images/team/team.png" alt="Team Malavolta" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
