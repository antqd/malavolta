"use client";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type stat = {
  number: string;
  text: string;
};

interface CardData {
  title: string;
  link: string;
  background: string;
  stats: Array<stat>;
}

// I Nostri Prodotti in Azione
const LIST: Array<CardData> = [
  {
    title: "Semi Certificati",
    link: "#semi",
    background:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: [{ number: "Varietà selezionate", text: "per ogni esigenza" }],
  },
  {
    title: "Fertilizzanti",
    link: "#fertilizzanti",
    background:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: [{ number: "Nutrizione completa", text: "per le colture" }],
  },
  {
    title: "Macchinari",
    link: "#macchinari",
    background:
      "https://images.unsplash.com/photo-1592982356102-9ba142025fb8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: [{ number: "Tecnologia", text: "all'avanguardia" }],
  },
  {
    title: "Ricambi Originali",
    link: "#ricambi",
    background:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: [{ number: "Qualità garantita", text: "per ogni marca" }],
  },
  {
    title: "Assistenza Tecnica",
    link: "#assistenza",
    background:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: [{ number: "Supporto professionale", text: "in campo" }],
  },
  {
    title: "Consulenza Agronomica",
    link: "#consulenza",
    background:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: [{ number: "Esperienza", text: "al vostro servizio" }],
  },
];

const Card = ({ link, background, title, stats }: CardData) => {
  const buttonText = {
    "Semi Certificati": "Scopri la gamma",
    "Fertilizzanti": "Vedi prodotti",
    "Macchinari": "Esplora catalogo",
    "Ricambi Originali": "Trova ricambi",
    "Assistenza Tecnica": "Richiedi intervento",
    "Consulenza Agronomica": "Prenota consulenza"
  }[title] || "Scopri di più";

  return (
    <a
      href={link}
      style={{ backgroundImage: `url(${background})` }}
      className="before:content-[] relative min-h-auto w-full overflow-hidden rounded-[.5rem] bg-black/80 bg-cover bg-center bg-no-repeat p-5 transition-all duration-300 before:absolute before:top-0 before:left-0 before:z-10 before:block before:size-full before:bg-black/50 before:transition-all before:duration-300 hover:before:bg-black/30 sm:aspect-square md:aspect-auto md:min-h-[30rem] md:max-w-[30rem]"
    >
      <div className="relative z-20 flex size-full flex-col justify-end gap-8">
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="text-2xl leading-[1.2] font-normal text-white md:text-3xl">
              {title}
            </div>
            <div className="text-sm text-white/70 leading-relaxed">
              {stats[0]?.number} {stats[0]?.text}
            </div>
          </div>
          <Button variant="secondary" size="default" className="w-fit bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white">
            {buttonText}
            <ArrowRight className="size-4 ml-2" />
          </Button>
        </div>
      </div>
    </a>
  );
};

const GridOverlayGallery = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4 font-display">
            I Nostri Prodotti in Azione
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {LIST.map((item, i) => (
            <Card key={`feature-222-${i}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { GridOverlayGallery };