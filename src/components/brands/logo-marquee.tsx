"use client";

import Image from "next/image";

type Logo = { src: string; alt?: string; href?: string };

export default function LogoMarquee({
  logos,
  speed = 35,          // secondi per ciclo
  gap = 40,            // px tra i loghi
  itemWidth = 140,
  itemHeight = 70,
}: {
  logos: Logo[];
  speed?: number;
  gap?: number;
  itemWidth?: number;
  itemHeight?: number;
}) {
  if (!logos?.length) return null;

  // duplichiamo per creare l'effetto loop
  const row = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden">
      {/* fade ai lati */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        className="brand-marquee items-center"
        style={
          {
            // variabili CSS globali usate dalla classe
            ["--duration" as any]: `${speed}s`,
            ["--gap" as any]: `${gap}px`,
          } as React.CSSProperties
        }
      >
        {row.map((logo, i) => {
          const Img = (
            <Image
              key={`${logo.src}-${i}`}
              src={logo.src}
              alt={logo.alt ?? "Brand logo"}
              width={itemWidth}
              height={itemHeight}
              className="object-contain opacity-80 hover:opacity-100 transition-opacity"
              draggable={false}
            />
          );

          return logo.href ? (
            <a
              key={`${logo.src}-${i}`}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
              aria-label={logo.alt ?? "Logo"}
            >
              {Img}
            </a>
          ) : (
            <div key={`${logo.src}-${i}`} className="shrink-0">
              {Img}
            </div>
          );
        })}
      </div>
    </div>
  );
}
