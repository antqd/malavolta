"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 bg-muted/30">
      {/* LEFT: foto + overlay testo IN ALTO A SINISTRA */}
      <div className="relative hidden lg:block">
        <Image
          src="/images/postvendita.png"
          alt="Malavolta"
          fill
          priority
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* --> testo in alto a sinistra */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 xl:top-10 xl:left-10">
          <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow-sm">
            <span className="text-white/90">Crea il tuo account </span>
            <span className="text-[#FFD700]">Malavolta</span>
          </h1>
          <p className="mt-2 text-white/80 max-w-xl">
            Accedi a servizi, richieste e tracciamento pratiche.
          </p>
        </div>
      </div>

      {/* RIGHT: card registrazione */}
      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-xl rounded-2xl bg-white shadow-sm border border-border/50 p-6 sm:p-8">
          <h2 className="text-3xl font-bold tracking-tight text-black">Registrati</h2>

          <form
            className="mt-6 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              // submit mock
            }}
          >
            {/* Nome */}
            <div>
              <label className="text-sm font-medium text-black">Nome</label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70 pointer-events-none" />
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Inserisci il tuo nome..."
                  className="h-11 pl-9 bg-black text-white placeholder-white/60 border-neutral-700 focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-0"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-black">Email</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70 pointer-events-none" />
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Inserisci la tua email..."
                  className="h-11 pl-9 bg-black text-white placeholder-white/60 border-neutral-700 focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-0"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-black">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70 pointer-events-none" />
                <Input
                  type={showPwd ? "text" : "password"}
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  placeholder="Inserisci la tua password..."
                  className="h-11 pl-9 pr-10 bg-black text-white placeholder-white/60 border-neutral-700 focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-0"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
                  aria-label={showPwd ? "Nascondi password" : "Mostra password"}
                >
                  {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-[#FFD700] text-black hover:bg-[#e6c200] font-semibold"
            >
              Crea account <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Hai già un account?{" "}
            <Link href="/login" className="font-medium underline decoration-[#FFD700] text-black">
              Accedi
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
