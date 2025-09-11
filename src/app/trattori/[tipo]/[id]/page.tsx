import Image from "next/image";
import Link from "next/link";
import { api } from "@/lib/api";
import type { Trattore } from "@/lib/catalog";
import { formatPriceCents } from "@/lib/catalog";

type Params = { tipo: "nuovi" | "usati"; id: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { tipo, id } = await params;
  const item = (await api.get(tipo, id)) as Trattore;

  return (
    <main className="container py-10">
      <div className="text-sm mb-3 text-gray-500">
        <Link href={`/prodotti/${tipo}`} className="hover:underline">
          {tipo === "nuovi" ? "Trattori nuovi" : "Trattori usati"}
        </Link>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_420px] gap-8">
        {/* LEFT */}
        <div className="space-y-5">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border bg-white">
            <Image
              src={item.photo_url || "/placeholder.png"}
              alt={item.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="rounded-xl border bg-white p-5">
            <h2 className="text-lg font-semibold mb-2">Descrizione</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description || "—"}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <div className="mt-3 text-3xl font-semibold flex items-baseline gap-2">
            <span>{formatPriceCents(item.price_cents)}</span>
            <span className="text-sm font-normal text-gray-500">+ IVA</span>
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

          <div className="mt-6 flex gap-3">
            <Link href="tel:+390983497243" className="inline-flex">
              <button className="bg-black text-white rounded px-4 py-2">
                Chiama ora
              </button>
            </Link>
            <a href="#contatto" className="inline-flex">
              <button className="border border-black text-black rounded px-4 py-2 hover:bg-yellow-400">
                Richiedi preventivo
              </button>
            </a>
          </div>

          <div
            id="contatto"
            className="mt-8 rounded-xl border bg-white p-6 space-y-3"
          >
            <h2 className="text-lg font-semibold">
              Contattaci per questo modello
            </h2>
            <input
              className="border rounded px-3 py-2 w-full"
              placeholder="Nome"
            />
            <input
              className="border rounded px-3 py-2 w-full"
              placeholder="Email"
            />
            <textarea
              className="border rounded px-3 py-2 w-full min-h-[120px]"
              placeholder="Messaggio"
            />
            <div className="text-sm text-gray-500">Codice: {item.id}</div>
            <button className="bg-black text-white rounded px-4 py-2">
              Invia richiesta
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
