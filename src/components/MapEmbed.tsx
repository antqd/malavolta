type MapEmbedProps = {
  /** Indirizzo o "lat,lng" */
  query: string;
  /** Altezza del riquadro (px) */
  height?: number;
  className?: string;
  /** Zoom 1–20 circa (default 15) */
  zoom?: number;
};

export default function MapEmbed({
  query,
  height = 360,
  className = "",
  zoom = 15,
}: MapEmbedProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    query
  )}&z=${zoom}&hl=it&output=embed`;
  const openLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border ${className}`}
      style={{ height }}
    >
      <iframe
        title="Mappa"
        src={src}
        className="w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={openLink}
        target="_blank"
        rel="noreferrer"
        className="absolute top-3 right-3 text-xs rounded-md border bg-background/80 backdrop-blur px-2 py-1 hover:bg-background"
      >
        Apri su Google Maps
      </a>
    </div>
  );
}
