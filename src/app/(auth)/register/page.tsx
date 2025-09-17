// src/app/registrati/page.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import SiteFooter from "@/components/footers/newsletter-footer";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Lock, ShieldCheck, ArrowRight } from "lucide-react";

// PALETTE giallo + nero
const gold = "text-[#FFD700]";
const goldBg = "bg-[#FFD700]";
const deep = "bg-black";
const deepText = "text-black";

export default function RegistratiPage() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [privacy, setPrivacy] = useState(false);

  const pwdMatch = useMemo(() => (!pwd && !pwd2) || pwd === pwd2, [pwd, pwd2]);
  const canSubmit = useMemo(() => {
    return nome && cognome && email && pwd && pwd2 && pwdMatch && privacy;
  }, [nome, cognome, email, pwd, pwd2, pwdMatch, privacy]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    // solo front
    console.log({ nome, cognome, email, pwd });
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
          src="/images/home.png"
          alt="Background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="relative container z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-white">CREA IL TUO</span>{" "}
            <span className={gold}>ACCOUNT</span>
          </h1>
          <div className="mt-4 flex flex-wrap gap-3">
            <Badge className="bg-white/15 border-white/25 text-white">
              <ShieldCheck className="w-4 h-4 mr-2" /> Dati protetti
            </Badge>
          </div>
        </div>
      </section>

      {/* Card registrazione */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <Card className="overflow-hidden border-border/50">
            <div className="grid md:grid-cols-2">
              {/* Lato immagine/benefit */}
              <div className={`${deep} text-white p-8 md:p-12`}>
                <h2 className="text-2xl font-bold">
                  Entra nella <span className={gold}>community</span>
                </h2>
                <ul className="mt-4 space-y-2 text-white/90 text-sm">
                  <li>• Preventivi più rapidi</li>
                  <li>• Storico richieste e preferiti</li>
                  <li>• Offerte e promozioni dedicate</li>
                </ul>

                <div className="mt-8 text-sm text-white/80">
                  Hai già un account?{" "}
                  <Link href="/login" className="text-[#FFD700] underline">
                    Accedi
                  </Link>
                </div>
              </div>

              {/* Form */}
              <CardContent className="p-8 md:p-12">
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Nome</label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Mario"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                          className="pl-9"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Cognome</label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Rossi"
                          value={cognome}
                          onChange={(e) => setCognome(e.target.value)}
                          className="pl-9"
                          required
                        />
                      </div>
                    </div>
                  </div>

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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    </div>
                    <div>
                      <label className="text-sm font-medium">Conferma password</label>
                      <div className="relative mt-1">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="password"
                          placeholder="••••••••"
                          value={pwd2}
                          onChange={(e) => setPwd2(e.target.value)}
                          className={`pl-9 ${pwd && pwd2 ? (pwdMatch ? "border-emerald-400" : "border-red-500") : ""}`}
                          required
                        />
                      </div>
                      {!pwdMatch && (
                        <p className="mt-1 text-xs text-red-600">
                          Le password non coincidono.
                        </p>
                      )}
                    </div>
                  </div>

                  <label className="flex items-start gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={privacy}
                      onChange={(e) => setPrivacy(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-input"
                      required
                    />
                    <span>
                      Accetto il trattamento dei dati personali secondo la{" "}
                      <a href="#" className="underline text-[#FFD700]">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>

                  <Button
                    type="submit"
                    disabled={!canSubmit}
                    className={`${goldBg} ${deepText} w-full hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed`}
                  >
                    Crea account <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Hai già un account?{" "}
                    <Link href="/login" className="text-[#FFD700] underline">
                      Accedi
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
