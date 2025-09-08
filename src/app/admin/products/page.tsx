import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Prisma } from "@prisma/client";

function formatEUR(cents?: number | null) {
  if (!cents || cents <= 0) return "—";
  return (cents / 100).toLocaleString("it-IT", { style: "currency", currency: "EUR" });
}

export default async function ProductsAdminPage({
  searchParams,
}: { searchParams?: { q?: string; page?: string } }) {
  const q = (searchParams?.q ?? "").trim();
  const page = Math.max(1, Number(searchParams?.page ?? "1"));
  const take = 12;
  const skip = (page - 1) * take;

  // TIPIZZATO → niente errori TS
  const where: Prisma.ProductWhereInput = q
    ? {
        OR: [
          { title_it: { contains: q, mode: "insensitive" } },
          { slug: { contains: q, mode: "insensitive" } },
        ],
      }
    : {};

  const [items, total] = await Promise.all([
    prisma.product.findMany({
      where,
      skip,
      take,
      orderBy: { createdAt: "desc" },
      include: { brand: true, category: true }, // richiede relazioni in schema.prisma
    }),
    prisma.product.count({ where }),
  ]);

  const pages = Math.max(1, Math.ceil(total / take));

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <form className="flex gap-2" method="GET">
          <input
            name="q"
            defaultValue={q}
            placeholder="Cerca per titolo o slug…"
            className="border rounded px-3 py-2"
          />
          <button className="border rounded px-3 py-2">Cerca</button>
        </form>
        <Link href="/admin/products/new" className="border rounded px-3 py-2">
          + Nuovo
        </Link>
      </div>

      <div className="text-sm text-muted-foreground">
        {total} risultato{total === 1 ? "" : "i"}
        {q ? <> per <span className="font-medium">{q}</span></> : null}
      </div>

      <div className="overflow-x-auto rounded border">
        <table className="min-w-[800px] w-full text-left">
          <thead className="bg-gray-50">
            <tr className="[&>th]:p-2 [&>th]:border-r last:[&>th]:border-r-0">
              <th>Titolo</th>
              <th>Brand</th>
              <th>Categoria</th>
              <th>Prezzo</th>
              <th className="w-40">Azioni</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  Nessun prodotto trovato.
                </td>
              </tr>
            ) : (
              items.map((p) => (
                <tr key={p.id} className="border-t [&>td]:p-2 [&>td]:border-r last:[&>td]:border-r-0">
                  <td className="font-medium">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-gray-100 px-2 py-0.5 text-xs">{p.used ? "USATO" : "NUOVO"}</span>
                      {p.title_it}
                    </div>
                    <div className="text-xs text-gray-500">{p.slug}</div>
                  </td>
                  <td>{p.brand?.name ?? "—"}</td>
                  <td>{p.category?.name_it ?? "—"}</td>
                  <td>{formatEUR(p.priceCents)}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <Link href={`/admin/products/${p.id}`} className="underline">
                        Modifica
                      </Link>
                      <DeleteBtn id={p.id} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Paginazione */}
      <div className="flex gap-2">
        {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
          <Link
            key={n}
            href={`?q=${encodeURIComponent(q)}&page=${n}`}
            className={`px-3 py-1 border rounded ${n === page ? "bg-black text-white" : ""}`}
          >
            {n}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Client component separato (importato qui sotto)
import DeleteBtn from "./_DeleteBtn";
