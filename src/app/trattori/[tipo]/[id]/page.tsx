"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { api } from "@/lib/api";
import type { Trattore } from "@/lib/catalog";
import { formatPriceCents, LOW_STOCK_LABEL, isLowStock1 } from "@/lib/catalog";

function imgSrc(src?: string | null) {
  if (!src) return "/placeholder.png";
  const s = String(src).trim();
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  if (s.startsWith("/")) return s;
  return "/placeholder.png";
}

export default function Dettaglio() {
  const params = useParams<{ tipo: "nuovi" | "usati"; id: string }>();
  const tipo = params.tipo;
  const id = params.id;

  const [item, setItem] = useState<Trattore | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        const d = await api.get(tipo, id);
        if (alive) setItem(d as Trattore);
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

  if (loading) return <main className="container py-10">Caricamento…</main>;
  if (err) return <main className="container py-10 text-red-600">{err}</main>;
  if (!item) return <main className="container py-10">Non trovato</main>;

  return (
    <main className="container py-10">
      <div className="text-sm mb-3 text-gray-500">
        <Link href={`/trattori/${tipo}`} className="hover:underline">
          {tipo === "nuovi" ? "Trattori nuovi" : "Trattori usati"}
        </Link>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_420px] gap-8">
        <div className="space-y-5">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border bg-white">
            <img
              src={imgSrc(item.photo_url)}
              alt={item.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-xl border bg-white p-5">
            <h2 className="text-lg font-semibold mb-2">Descrizione</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description || "—"}
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <div className="mt-3 text-3xl font-semibold flex items-baseline gap-3 flex-wrap">
            <span>{formatPriceCents(item.price_cents)}</span>
            <span className="text-sm font-normal text-gray-500">+ IVA</span>
            {isLowStock1(item) && (
              <span className="text-sm font-semibold text-red-600">
                {LOW_STOCK_LABEL}
              </span>
            )}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-md border p-3">
              <div className="text-xs text-gray-500">Quantità</div>
              <div className="font-medium">{item.quantity}</div>
            </div>
            <div className="rounded-md border p-3">
              <div className="text-xs text-gray-500">Stato</div>
              <div className="font-medium">
                {tipo === "nuovi" ? "Nuovo" : "Usato"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
