"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { api } from "@/lib/api";

// ===== Tipi minimi dal backend =====
type Tipo = "nuovi" | "usati";
interface Trattore {
  id: number;
  name: string;
  description?: string | null;
  price_cents?: number | null;
  photo_url?: string | null;
  quantity?: number | null;
}

// ===== Utils =====
const euro = (cents?: number | null) => {
  if (!cents || cents <= 0) return "Su richiesta";
  return (cents / 100).toLocaleString("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
};
const imgSrc = (src?: string | null) => {
  if (!src) return "/placeholder.png";
  const s = src.trim();
  if (s.startsWith("http://") || s.startsWith("https://") || s.startsWith("/"))
    return s;
  return "/placeholder.png";
};

export default function TrattoreDettaglio() {
  const { tipo, id } = useParams<{ tipo: Tipo; id: string }>();
  const [item, setItem] = useState<Trattore | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        const data = await api.get(tipo, id);
        if (alive) setItem(data as Trattore);
      } catch (e: any) {
        if (alive) setErr(e?.message || "Errore");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [tipo, id]);

  if (loading) return <main className="container py-14">Caricamento…</main>;
  if (err) return <main className="container py-14 text-red-600">{err}</main>;
  if (!item) return <main className="container py-14">Non trovato</main>;

  const isLastOne = item.quantity === 1;
  const isUsato = tipo === "usati";

  return (
    <main className="container py-8 lg:py-12">
      {/* breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/trattori" className="hover:underline">
          Trattori
        </Link>
        <span className="mx-1">/</span>
        <Link href={`/trattori/${tipo}`} className="hover:underline">
          {isUsato ? "Usati" : "Nuovi"}
        </Link>
        <span className="mx-1">/</span>
        <span className="text-gray-700">{item.name}</span>
      </nav>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_420px] gap-8">
        {/* LEFT: media + descrizione */}
        <section className="space-y-5">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border bg-white">
            <img
              src={imgSrc(item.photo_url)}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <span
                className={[
                  "text-xs font-semibold px-2 py-1 rounded-md",
                  isUsato
                    ? "bg-amber-100 text-amber-800"
                    : "bg-emerald-100 text-emerald-800",
                ].join(" ")}
              >
                {isUsato ? "USATO" : "NUOVO"}
              </span>
              {isLastOne && (
                <span className="text-xs font-semibold px-2 py-1 rounded-md bg-red-100 text-red-700">
                  Solo 1 disponibile
                </span>
              )}
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6">
            <h2 className="text-lg font-semibold mb-2">Descrizione</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              {item.description || "—"}
            </p>
          </div>
        </section>

        {/* RIGHT: header + prezzo + CTA */}
        <aside className="space-y-4">
          <div className="rounded-xl border bg-white p-6">
            <h1 className="text-2xl md:text-3xl font-bold">{item.name}</h1>
            <div className="mt-1 text-sm text-gray-500">
              <span className="font-medium">Codice articolo:</span> {item.id}
            </div>

            <div className="mt-5 flex items-baseline gap-3 flex-wrap">
              <span className="text-3xl font-semibold">
                {euro(item.price_cents)}
              </span>
              <span className="text-sm text-gray-500">+ IVA</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-md border p-3">
                <div className="text-xs text-gray-500">Stato</div>
                <div className="font-medium">{isUsato ? "Usato" : "Nuovo"}</div>
              </div>
              <div className="rounded-md border p-3">
                <div className="text-xs text-gray-500">Disponibilità</div>
                <div className="font-medium">{item.quantity ?? "—"}</div>
              </div>
            </div>
          </div>

          {/* BOX CONTATTO */}
          <div className="rounded-xl border bg-white p-6 space-y-3">
            <h3 className="font-semibold">Contatto rapido</h3>
            <p className="text-sm text-gray-600">
              Indica il <strong>codice articolo {item.id}</strong> quando ci
              chiami o scrivi.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href="tel:+390983497243"
                className="inline-flex justify-center items-center rounded-md bg-black text-white px-4 py-2 hover:bg-black/90"
              >
                Chiama ora
              </a>
              <a
                href={`https://wa.me/390983497243?text=${encodeURIComponent(
                  `Ciao, informazioni su "${item.name}" (codice ${item.id}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center rounded-md border px-4 py-2 hover:bg-gray-50"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:info@malavolta.it?subject=${encodeURIComponent(
                  `Richiesta preventivo: ${item.name} (cod. ${item.id})`
                )}&body=${encodeURIComponent(
                  `Buongiorno,\n\nvorrei informazioni su:\n- Prodotto: ${
                    item.name
                  }\n- Codice articolo: ${item.id}\n- Link: ${
                    typeof window !== "undefined" ? window.location.href : ""
                  }\n\nGrazie.`
                )}`}
                className="inline-flex justify-center items-center rounded-md border px-4 py-2 hover:bg-gray-50"
              >
                Richiedi preventivo
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
