// src/app/login/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import SiteFooter from "@/components/footers/newsletter-footer";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Lock, ArrowRight, Shield, Clock } from "lucide-react";

// PALETTE giallo + nero
const gold = "text-[#FFD700]";
const goldBg = "bg-[#FFD700]";
const deep = "bg-black";
const deepText = "text-black";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [remember, setRemember] = useState(true);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // solo front: gestisci qui eventuale validazione client
    console.log({ email, pwd, remember });
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />

      {/* Hero compatto */}
      <section
        className="relative pt-28 pb-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#000000 0%,#222222 50%,#000000 100%)",
        }}
      >
        <Image
          src="/images/postvendita.png"
          alt="Background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="relative container z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-white">ACCEDI</span>{" "}
            <span className={gold}>ALLA TUA AREA</span>
          </h1>
          <div className="mt-4 flex flex-wrap gap-3">
            <Badge className="bg-white/15 border-white/25 text-white">
              <Shield className="w-4 h-4 mr-2" /> Sicuro
            </Badge>
            <Badge className="bg-white/15 border-white/25 text-white">
              <Clock className="w-4 h-4 mr-2" /> Veloce
            </Badge>
          </div>
        </div>
      </section>

      {/* Card login */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <Card className="overflow-hidden border-border/50">
            <div className="grid md:grid-cols-2">
              {/* Lato immagine/claim */}
              <div className={`${deep} text-white p-8 md:p-12`}>
                <h2 className="text-2xl font-bold">
                  Benvenuto in <span className={gold}>Malavolta</span>
                </h2>
                <p className="mt-3 text-white/90">
                  Gestisci richieste, preventivi e storico in un’unica area personale.
                </p>
                <ul className="mt-6 space-y-2 text-white/90 text-sm">
                  <li>• Salva i tuoi preferiti</li>
                  <li>• Richieste più rapide</li>
                  <li>• Tracciamento stato pratiche</li>
                </ul>
                <div className="mt-8">
                  <Link href="/registrati" className="inline-flex">
                    <Button className={`${goldBg} ${deepText} hover:opacity-90`}>
                      Crea un account <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Form */}
              <CardContent className="p-8 md:p-12">
                <form onSubmit={submit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <div className="relative mt-1">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="nome@azienda.it"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-9"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Password</label>
                    <div className="relative mt-1">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="password"
                        placeholder="••••••••"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        className="pl-9"
                        required
                      />
                    </div>
                    <div className="mt-2 text-right">
                      <a className="text-sm underline decoration-[#FFD700] hover:opacity-80" href="#">
                        Password dimenticata?
                      </a>
                    </div>
                  </div>

                  <label className="flex items-center gap-2 select-none">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="h-4 w-4 rounded border-input"
                    />
                    <span className="text-sm">Ricordami su questo dispositivo</span>
                  </label>

                  <Button type="submit" className={`${goldBg} ${deepText} w-full hover:opacity-90`}>
                    Accedi
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Non hai un account?{" "}
                    <Link href="/registrati" className="text-[#FFD700] underline">
                      Registrati
                    </Link>
                  </p>
                </form>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
