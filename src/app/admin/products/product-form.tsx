"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@prisma/client";

type Props =
  | { mode: "create"; product?: undefined }
  | { mode: "edit"; product: Product & { images: { media: { url: string } }[] } };

export default function ProductForm({ mode, product }: Props) {
  const router = useRouter();
  const [form, setForm] = useState({
    slug: product?.slug ?? "",
    title_it: product?.title_it ?? "",
    description_it: product?.description_it ?? "",
    priceCents: product?.priceCents ?? 0,
    used: product?.used ?? false,
    status: product?.status ?? "DRAFT",
    imageUrl: product?.images?.[0]?.media?.url ?? "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload: any = {
      ...form,
      images: form.imageUrl ? [{ url: form.imageUrl, order: 0 }] : [],
    };

    if (mode === "create") {
      const res = await fetch("/api/products", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) router.replace("/admin/products");
    } else {
      const res = await fetch(`/api/products/${product!.id}`, {
        method: "PATCH", headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) router.replace("/admin/products");
    }
  }

  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-2xl font-semibold mb-4">
        {mode === "create" ? "Nuovo prodotto" : "Modifica prodotto"}
      </h1>

      <form className="grid gap-3" onSubmit={onSubmit}>
        <label className="grid gap-1">
          <span>Slug</span>
          <input className="border rounded px-3 py-2" value={form.slug}
                 onChange={e=>setForm(f=>({ ...f, slug: e.target.value }))} required />
        </label>

        <label className="grid gap-1">
          <span>Titolo (IT)</span>
          <input className="border rounded px-3 py-2" value={form.title_it}
                 onChange={e=>setForm(f=>({ ...f, title_it: e.target.value }))} required />
        </label>

        <label className="grid gap-1">
          <span>Descrizione (IT)</span>
          <textarea className="border rounded px-3 py-2" value={form.description_it ?? ""}
                    onChange={e=>setForm(f=>({ ...f, description_it: e.target.value }))} />
        </label>

        <label className="grid gap-1">
          <span>Prezzo (€)</span>
          <input type="number" className="border rounded px-3 py-2"
                 value={(form.priceCents ?? 0)/100}
                 onChange={e=>setForm(f=>({ ...f, priceCents: Math.round(Number(e.target.value || 0)*100) }))} />
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={form.used}
                 onChange={e=>setForm(f=>({ ...f, used: e.target.checked }))}/>
          <span>Usato</span>
        </label>

        <label className="grid gap-1">
          <span>Stato</span>
          <select className="border rounded px-3 py-2" value={form.status}
                  onChange={e=>setForm(f=>({ ...f, status: e.target.value as any }))}>
            <option value="DRAFT">Bozza</option>
            <option value="PUBLISHED">Pubblicato</option>
            <option value="ARCHIVED">Archivio</option>
          </select>
        </label>

        <label className="grid gap-1">
          <span>Immagine (URL)</span>
          <input className="border rounded px-3 py-2" value={form.imageUrl}
                 onChange={e=>setForm(f=>({ ...f, imageUrl: e.target.value }))}/>
          <span className="text-sm text-gray-500">Per ora incolla un URL; in seguito possiamo usare Supabase Storage.</span>
        </label>

        <div className="flex gap-2">
          <button className="border rounded px-4 py-2">{mode === "create" ? "Crea" : "Salva"}</button>
          <button type="button" className="border rounded px-4 py-2" onClick={()=>router.back()}>Annulla</button>
        </div>
      </form>
    </div>
  );
}
