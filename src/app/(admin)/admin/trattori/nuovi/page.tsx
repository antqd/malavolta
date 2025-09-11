"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
type Trattore = { id:number; name:string; photo_url?:string; description?:string; price_cents:number; quantity:number; created_at?:string; };

export default function NuoviList() {
  const [items, setItems] = useState<Trattore[]>([]);
  const [q, setQ] = useState(""); const [loading, setLoading] = useState(true); const [err, setErr] = useState<string|null>(null);

  const load = async () => {
    setLoading(true); setErr(null);
    try {
      const url = q ? `/api/trattori/nuovi?q=${encodeURIComponent(q)}` : "/api/trattori/nuovi";
      const r = await fetch(url); const data = await r.json();
      if (!r.ok) throw new Error(data?.error || data?.raw || "Errore");
      setItems(data.items ?? []);
    } catch(e:any){ setErr(e.message); } finally { setLoading(false); }
  };

  const onDelete = async (id:number) => {
    if (!confirm("Eliminare?")) return;
    const r = await fetch(`/api/trattori/nuovi/${id}`, { method:"DELETE" });
    if (r.status === 204) setItems(prev => prev.filter(x=>x.id!==id));
    else alert("Errore eliminazione");
  };

  useEffect(()=>{ load(); }, []);

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <input className="border rounded px-3 py-2" placeholder="Cerca…" value={q} onChange={e=>setQ(e.target.value)} />
        <button onClick={load} className="rounded bg-black text-white px-3 py-2">Cerca</button>
        <Link href="/admin/trattori/nuovi/new" className="ml-auto rounded bg-emerald-600 text-white px-3 py-2">+ Nuovo</Link>
      </div>

      {err && <p className="text-red-600 text-sm">{err}</p>}

      {loading ? <p>Caricamento…</p> : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(p=>(
            <div key={p.id} className="bg-white rounded-2xl shadow p-3 flex gap-3">
              <img src={p.photo_url || "https://via.placeholder.com/120x80?text=No+Photo"} className="w-28 h-20 object-cover rounded-xl" alt="" />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold">{p.name}</h3>
                  <span className="text-sm bg-gray-100 px-2 py-0.5 rounded">{(p.price_cents/100).toFixed(2)} €</span>
                </div>
                <p className="text-xs text-gray-600 line-clamp-2">{p.description || "-"}</p>
                <div className="mt-2 flex justify-between text-sm">
                  <span>Qty: {p.quantity}</span>
                  <div className="space-x-3">
                    <Link href={`/admin/trattori/nuovi/${p.id}`} className="text-blue-600">Modifica</Link>
                    <button onClick={()=>onDelete(p.id)} className="text-red-600">Elimina</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {!items.length && <p className="text-sm text-gray-500">Nessun trattore.</p>}
        </div>
      )}
    </div>
  );
}
