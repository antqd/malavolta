"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const utilities = [
  {
    title: "Prodotti Agricoli di Qualità",
    description:
      "Semi certificati, fertilizzanti e prodotti fitosanitari selezionati per massimizzare le rese",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Ricambi Originali",
    description:
      "Ricambi certificati per tutte le marche di macchinari agricoli con consegna rapida",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Assistenza Specializzata",
    description:
      "Supporto tecnico qualificato e consulenza agronomica personalizzata",
    image:
      "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ThreeColumnImageCards = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto">
        <div className="m-auto mb-24 max-w-xl text-center">
          <h2 className="mb-6 text-3xl font-semibold lg:text-5xl text-text-primary font-display">
            Le Nostre Specializzazioni
          </h2>
          <p className="m-auto max-w-3xl text-lg lg:text-xl text-text-secondary">
            Tre aree di competenza per supportare completamente la vostra attività agricola
          </p>
          <div className="mt-8 flex flex-col items-center space-y-2">
            <Button
              className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              Vedi Tutti i Servizi
            </Button>
          </div>
        </div>
        <div className="mt-11 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {utilities.map((utility, index) => (
            <Card key={index} className="border-0 pt-0 bg-card">
              <img
                src={utility.image}
                alt={utility.title}
                className="aspect-video w-full rounded-t-xl object-cover"
              />
              <div className="p-5">
                <p className="mb-1 font-medium text-text-primary">{utility.title}</p>
                <p className="text-muted-foreground">{utility.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ThreeColumnImageCards };