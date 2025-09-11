"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UsatiEdit() {
  const { id } = useParams<{id:string}>(); const router = useRouter();
  const [form, setForm] = useState<any>(null); const [err, setErr] = useState<string|null>(null); const [saving,setSaving]=useState(false);
  const setF = (k:string, v:any)=>setForm((f:any)=>({...f,[k]:v}));

  const load = async () => {
    const r = await fetch(`/api/trattori/usati/${id}`); const data = await r.json();
    if(!r.ok){ setErr(data?.error || data?.raw || "Errore"); return; }
    setForm({ name:data.name||"", photo:data.photo_url||"", description:data.description||"", price:(data.price_cents||0)/100, quantity:data.quantity||0 });
  };

  const submit = async (e:React.FormEvent) => {
    e.preventDefault(); setSaving(true); setErr(null);
    try{
      const body = { name:form.name, photo:form.photo||null, description:form.description||null, price: Number(String(form.price).replace(",", "."))||0, quantity: Number(form.quantity)||0 };
      const r = await fetch(`/api/trattori/usati/${id}`, { method:"PATCH", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(body) });
      const data = await r.json(); if(!r.ok) throw new Error(data?.error || data?.raw || "Errore");
      router.push("/admin/trattori/usati");
    }catch(e:any){ setErr(e.message);} finally{ setSaving(false); }
  };

  useEffect(()=>{ load(); /* eslint-disable-next-line */ }, [id]);
  if(!form) return <p>Caricamento…</p>;

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold mb-4">Modifica (usati) #{id}</h1>
      {err && <p className="text-red-600 text-sm mb-3">{err}</p>}
      <form onSubmit={submit} className="space-y-4">
        {/* stessi campi del “new” */}
        <div>
          <label className="block text-sm">Nome *</label>
          <input className="w-full border rounded px-3 py-2" value={form.name} onChange={e=>setF("name", e.target.value)} required />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <label className="block text-sm">Foto (URL)</label>
            <input className="w-full border rounded px-3 py-2" value={form.photo} onChange={e=>setF("photo", e.target.value)} />
          </div>
          <div>
            <label className="block text-sm">Anteprima</label>
            <div className="border rounded-xl h-[80px] grid place-items-center bg-gray-50 overflow-hidden">
              {form.photo ? <img src={form.photo} className="max-h-[80px] object-cover" alt="" /> : <span className="text-xs text-gray-400">nessuna</span>}
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm">Descrizione</label>
          <textarea className="w-full border rounded px-3 py-2" value={form.description} onChange={e=>setF("description", e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm">Prezzo (€)</label>
            <input type="number" step="0.01" className="w-full border rounded px-3 py-2" value={form.price} onChange={e=>setF("price", e.target.value)} />
          </div>
          <div>
            <label className="block text-sm">Quantità</label>
            <input type="number" className="w-full border rounded px-3 py-2" value={form.quantity} onChange={e=>setF("quantity", e.target.value)} />
          </div>
        </div>
        <button disabled={saving} className="rounded bg-black text-white px-4 py-2 disabled:opacity-50">{saving ? "Salvo…" : "Salva"}</button>
      </form>
    </div>
  );
}
