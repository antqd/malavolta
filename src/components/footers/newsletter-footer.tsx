"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navigation = [
  {
    title: "Azienda",
    links: [
      { name: "Chi Siamo", href: "/chi-siamo" },
      { name: "La Nostra Storia", href: "/chi-siamo#storia" },
      { name: "Staff", href: "/chi-siamo#staff" },
      { name: "Certificazioni", href: "/chi-siamo#certificazioni" },
    ],
  },
  {
    title: "Prodotti",
    links: [
      { name: "Trattori gommati", href: "/prodotti#trattori" },
      { name: "Macchine operatrici", href: "/prodotti#operatrici" },
      { name: "Ricambi", href: "/ricambi" },
      { name: "E-commerce", href: "/ecommerce" },
    ],
  },
  {
    title: "Servizi",
    links: [
      { name: "Post Vendita", href: "/servizi#post-vendita" },
      { name: "Finanziamenti", href: "/servizi#finanziamenti" },
      { name: "Officina", href: "/servizi#officina" },
      { name: "Consulenza", href: "/servizi#consulenza" },
    ],
  },
  {
    title: "Supporto",
    links: [
      { name: "Contatti", href: "/contatti" },
      { name: "FAQ", href: "/faq" },
      { name: "Garanzie", href: "/garanzie" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export default function SiteFooter() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-background">
      {/* Top strip con contatti rapidi */}
      <div className="border-b">
        <div className="container mx-auto max-w-6xl px-5 md:px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href="tel:+390000000000" className="inline-flex items-center gap-2 hover:text-foreground">
              <Phone className="h-4 w-4" />
              +39 000 000 000
            </a>
            <a href="mailto:info@giovannimalavolta.it" className="inline-flex items-center gap-2 hover:text-foreground">
              <Mail className="h-4 w-4" />
              info@giovannimalavolta.it
            </a>
            <a
              href="https://maps.google.com/?q=Giovanni+Malavolta+S.r.l."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground"
            >
              <MapPin className="h-4 w-4" />
              SS106 Jonica, Zona Industriale · Corigliano-Rossano (CS)
            </a>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Corpo: brand + newsletter + colonne */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-5 md:px-6">
          <div className="mb-10 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {/* Brand + newsletter */}
            <div className="w-full md:w-[360px]">
              <div className="mb-5">
                <h1 className="text-2xl font-black tracking-tight text-primary">
                  GIOVANNI <span className="text-[#D5B46E]">MALAVOLTA</span>
                </h1>
                <p className="text-sm text-muted-foreground">
                  Al tuo fianco in ogni campo.
                </p>
              </div>

              <div className="mb-3">
                <h3 className="mb-2 text-base font-semibold">Iscriviti alla newsletter</h3>
                <p className="text-sm text-muted-foreground">
                  Aggiornamenti su servizi, novità e promozioni.
                </p>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
              >
                <Input
                  type="email"
                  placeholder="La tua email"
                  className="h-10"
                  required
                />
                <Button className="h-10 px-5">Iscriviti</Button>
              </form>


            </div>

            {/* Navigazione */}
            <nav className="w-full">
              <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 md:grid-cols-4">
                {navigation.map((section) => (
                  <div key={section.title} className="min-w-[160px]">
                    <h2 className="mb-4 text-lg font-semibold">{section.title}</h2>
                    <ul className="space-y-3.5">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="inline-block py-1 text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </nav>
          </div>

          <Separator className="my-6" />

          {/* Bottom row */}
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {year} Giovanni Malavolta S.r.l. — P.IVA: ________ — Tutti i diritti riservati
            </p>

            <div className="flex items-center gap-2">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy
              </Link>
              <span className="text-muted-foreground/40">•</span>
              <Link
                href="/cookie"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Cookie
              </Link>
              <span className="text-muted-foreground/40">•</span>
              <Link
                href="/termini"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Termini
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
