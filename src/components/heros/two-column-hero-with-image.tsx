"use client"

import { ArrowRight, ArrowUpRight, Tractor } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const TwoColumnHeroWithImage = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="container mx-auto relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <Badge
              variant="outline"
              className="bg-primary text-primary-foreground border-0 hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Tractor className="mr-2 size-3.5 text-primary-foreground" />
              Dal 1985 al vostro servizio
              <ArrowUpRight className="ml-2 size-4" />
            </Badge>

            <h1 className="text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl leading-tight font-display">
              Soluzioni Complete per l'{" "}
              <span className="text-primary font-bold">
                Agricoltura Moderna
              </span>
            </h1>

            <p className="text-muted-foreground max-w-xl lg:text-xl leading-relaxed">
              Offriamo prodotti agricoli di qualità, ricambi originali e servizi specializzati per supportare la vostra attività agricola con professionalità e competenza.
            </p>

            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start pt-2">
              <Button
                size="lg"
                className="w-full sm:w-auto group bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-full px-8"
              >
                Scopri i Prodotti
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-auto group bg-surface hover:bg-muted text-text-primary border border-border rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Contattaci
                <ArrowUpRight className="ml-2 size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-30" />
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Trattore moderno su campo verde con cielo azzurro"
              className="relative min-h-[500px] max-h-[800px] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-black/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { TwoColumnHeroWithImage };