"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  slug: string;
  title_it: string;
  created_at?: string;
  price_cents?: number;
  status?: string;
};

export default function ProductsPage() {
  const [items, setItems] = useState<Product[]>([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setErr(null);
    try {
      const url = q
        ? `/api/products?q=${encodeURIComponent(q)}`
        : "/api/products";
      const res = await fetch(url, { credentials: "include" });
      const data = await res.json();
      if (!res.ok)
        throw new Error(data?.error || data?.raw || "Errore caricamento");
      setItems(Array.isArray(data) ? data : data.items ?? []);
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async (id: number) => {
    if (!confirm("Eliminare il prodotto?")) return;
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (res.status === 204) {
      setItems((prev) => prev.filter((p) => p.id !== id));
    } else {
      const data = await res.json().catch(() => ({}));
      alert(data?.error || data?.raw || "Errore cancellazione");
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <input
          className="border rounded px-3 py-2"
          placeholder="Cerca per titolo o slug…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button
          onClick={load}
          className="rounded bg-black text-white px-3 py-2"
        >
          Cerca
        </button>
        <Link
          href="/admin/products/new"
          className="ml-auto rounded bg-emerald-600 text-white px-3 py-2"
        >
          + Nuovo
        </Link>
      </div>

      {err && <p className="text-red-600 text-sm">{err}</p>}
      {loading ? (
        <p>Caricamento…</p>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">ID</th>
              <th>Slug</th>
              <th>Titolo (IT)</th>
              <th>Prezzo</th>
              <th>Status</th>
              <th>Creato</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="py-2">{p.id}</td>
                <td>{p.slug}</td>
                <td>{p.title_it}</td>
                <td>
                  {p.price_cents != null
                    ? (p.price_cents / 100).toFixed(2) + " €"
                    : "-"}
                </td>
                <td>{p.status || "-"}</td>
                <td>{p.created_at?.slice(0, 10) || "-"}</td>
                <td className="text-right">
                  <Link
                    href={`/admin/products/${p.id}`}
                    className="text-blue-600 mr-3"
                  >
                    Modifica
                  </Link>
                  <button
                    onClick={() => onDelete(p.id)}
                    className="text-red-600"
                  >
                    Elimina
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
