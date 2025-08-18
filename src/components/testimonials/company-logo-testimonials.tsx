import { Handshake } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    logo: {
      src: "https://api.dicebear.com/9.x/initials/svg?seed=AM&backgroundColor=2D5016&textColor=ffffff",
      alt: "Azienda Agricola Monteverdi logo",
      width: 58,
      height: 22,
    },
    quote:
      "Collaboro con AgroItalia da oltre 10 anni. Prodotti di qualità e assistenza sempre tempestiva.",
    author: {
      name: "Antonio Monteverdi",
      role: "Titolare",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Antonio%20Monteverdi",
    },
  },
  {
    logo: {
      src: "https://api.dicebear.com/9.x/initials/svg?seed=CSG&backgroundColor=4A7C59&textColor=ffffff",
      alt: "Cooperativa San Giuseppe logo",
      width: 54,
      height: 22,
    },
    quote:
      "Ricambi sempre disponibili e prezzi competitivi. Il supporto tecnico è eccellente.",
    author: {
      name: "Maria Fontana",
      role: "Responsabile Acquisti",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Maria%20Fontana",
    },
  },
  {
    logo: {
      src: "https://api.dicebear.com/9.x/initials/svg?seed=AAV&backgroundColor=7BA05B&textColor=ffffff",
      alt: "Az. Agr. Valpadana logo",
      width: 60,
      height: 22,
    },
    quote:
      "La consulenza agronomica ci ha permesso di aumentare le rese del 20%. Consigliatissimi!",
    author: {
      name: "Luca Ferrari",
      role: "Agronomo",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Luca%20Ferrari",
    },
  },
];

const CompanyLogoTestimonials = () => {
  return (
    <section className="py-32 bg-background">
      <div className="border-y border-border">
        <div className="container flex flex-col gap-6 border-x border-border py-4 max-lg:border-x lg:py-8">
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl text-text-primary font-display">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            La fiducia degli agricoltori italiani è la nostra migliore referenza
          </p>
        </div>
      </div>

      <div className="container mt-10 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="flex flex-col gap-6 rounded-md bg-card p-6 shadow-sm"
          >
            <img
              src={testimonial.logo.src}
              alt={testimonial.logo.alt}
              width={testimonial.logo.width}
              height={testimonial.logo.height}
              className="object-contain"
            />

            <blockquote className="text-text-secondary text-lg font-normal italic">{`"${testimonial.quote}"`}</blockquote>

            <div className="mt-auto flex items-center gap-4">
              <img
                src={testimonial.author.image}
                alt={`${testimonial.author.name}'s profile picture`}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-lg tracking-[-0.36px] text-text-primary">
                  {testimonial.author.name}
                </p>
                <p className="text-muted-foreground">
                  {testimonial.author.role}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 h-8 w-full border-y border-border md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x border-border"></div>
      </div>
    </section>
  );
};

export { CompanyLogoTestimonials };