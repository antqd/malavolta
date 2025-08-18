"use client"

import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ComprehensiveContactForm = () => {
  return (
    <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-gradient-to-b from-muted via-background to-background py-32 lg:mx-4">
      <div className="container max-w-2xl">
        <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl">
          Contattaci
        </h1>
        <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
          Siamo qui per supportare la tua attività agricola. Compila il form o contattaci direttamente.
        </p>
        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          <div>
            <h2 className="font-semibold">Sede Operativa</h2>
            <p className="mt-3 text-muted-foreground">
              Via Agricoltura 123
              <br />
              20100 Milano (MI)
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Contatti</h2>
            <div className="mt-3 space-y-2">
              <div>
                <p className="text-primary">Telefono</p>
                <a
                  href="tel:+390212345678"
                  className="text-muted-foreground hover:text-foreground"
                >
                  +39 02 1234 5678
                </a>
              </div>
              <div>
                <p className="text-primary">Email</p>
                <a
                  href="mailto:info@agroitalia.it"
                  className="text-muted-foreground hover:text-foreground"
                >
                  info@agroitalia.it
                </a>
              </div>
              <div>
                <p className="text-primary">Orari</p>
                <p className="text-muted-foreground">
                  Lun-Ven 8:00-18:00<br />
                  Sab 8:00-12:00
                </p>
              </div>
            </div>
          </div>
        </div>
        <DashedLine className="my-12" />
        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="text-lg font-semibold">Richieste</h2>
          <form className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label>Nome e Cognome</Label>
              <Input placeholder="Nome e cognome" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input placeholder="tua@email.it" type="email" />
            </div>
            <div className="space-y-2">
              <Label>Azienda</Label>
              <Input placeholder="Nome azienda" />
            </div>
            <div className="space-y-2">
              <Label>Telefono</Label>
              <Input placeholder="+39 123 456 7890" type="tel" />
            </div>
            <div className="space-y-2">
              <Label>Tipo di richiesta</Label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="">Seleziona tipo di richiesta</option>
                <option value="preventivo">Preventivo</option>
                <option value="assistenza">Assistenza</option>
                <option value="consulenza">Consulenza</option>
                <option value="ricambi">Ricambi</option>
                <option value="altro">Altro</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Messaggio</Label>
              <Textarea
                placeholder="Descrivi la tua richiesta o le tue esigenze agricole."
                className="min-h-[120px] resize-none"
              />
            </div>
            <div className="flex justify-end">
              <Button size="lg" type="submit" className="">
                Invia Richiesta
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative text-muted-foreground",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ]
        )}
      />
    </div>
  );
};

export { ComprehensiveContactForm };