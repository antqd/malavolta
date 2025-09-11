"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProductPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [form, setForm] = useState<any>(null);
  const [err, setErr] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const setField = (k: string, v: any) =>
    setForm((f: any) => ({ ...f, [k]: v }));

  const load = async () => {
    setErr(null);
    const res = await fetch(`/api/products/${id}`, { credentials: "include" });
    const data = await res.json();
    if (!res.ok) {
      setErr(data?.error || data?.raw || "Errore caricamento");
      return;
    }
    data.images = Array.isArray(data.images)
      ? data.images.map((i: any) => ({
          url: i?.media?.url || "",
          order: i?.order || 0,
        }))
      : [];
    setForm(data);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setErr(null);
    try {
      const body: any = {
        slug: form.slug,
        title_it: form.title_it,
        description_it: form.description_it,
        brand_id: form.brand_id ? Number(form.brand_id) : null,
        category_id: form.category_id ? Number(form.category_id) : null,
        year: form.year ? Number(form.year) : null,
        power_cv: form.power_cv ? Number(form.power_cv) : null,
        price_cents:
          form.price_cents != null
            ? Math.round(Number(form.price_cents))
            : null,
        used: !!form.used,
        status: form.status || "DRAFT",
        images: (form.images || [])
          .filter((i: any) => i.url)
          .map((i: any) => ({ url: i.url, order: Number(i.order) || 0 })),
      };
      const res = await fetch(`/api/products/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok)
        throw new Error(data?.error || data?.raw || "Errore salvataggio");
      router.push("/admin/products");
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    load();
  }, [id]);

  if (!form) return <p>Caricamento…</p>;

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold mb-4">Modifica prodotto #{id}</h1>
      {err && <p className="text-red-600 text-sm mb-3">{err}</p>}
      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <label className="block text-sm">Slug *</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={form.slug}
            onChange={(e) => setField("slug", e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm">Titolo (IT)</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={form.title_it || ""}
            onChange={(e) => setField("title_it", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm">Descrizione (IT)</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={form.description_it || ""}
            onChange={(e) => setField("description_it", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm">Brand ID</label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2"
              value={form.brand_id || ""}
              onChange={(e) => setField("brand_id", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm">Category ID</label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2"
              value={form.category_id || ""}
              onChange={(e) => setField("category_id", e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-sm">Anno</label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2"
              value={form.year || ""}
              onChange={(e) => setField("year", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm">Potenza (CV)</label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2"
              value={form.power_cv || ""}
              onChange={(e) => setField("power_cv", e.target.value)}
            />
          </div>
          <div>
            <label className="block text sm">Prezzo (cent)</label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2"
              value={form.price_cents ?? ""}
              onChange={(e) => setField("price_cents", e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            id="used"
            type="checkbox"
            checked={!!form.used}
            onChange={(e) => setField("used", e.target.checked)}
          />
          <label htmlFor="used">Usato</label>
        </div>

        <div>
          <label className="block text-sm">Status</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={form.status || "DRAFT"}
            onChange={(e) => setField("status", e.target.value)}
          >
            <option value="DRAFT">DRAFT</option>
            <option value="PUBLISHED">PUBLISHED</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm">Immagini</label>
          {form.images.map((img: any, i: number) => (
            <div key={i} className="grid grid-cols-6 gap-2">
              <input
                className="col-span-5 border rounded px-3 py-2"
                placeholder="https://..."
                value={img.url}
                onChange={(e) => {
                  const v = e.target.value;
                  setForm((f: any) => {
                    const a = [...f.images];
                    a[i] = { ...a[i], url: v };
                    return { ...f, images: a };
                  });
                }}
              />
              <input
                type="number"
                className="col-span-1 border rounded px-3 py-2"
                value={img.order}
                onChange={(e) => {
                  const v = Number(e.target.value || 0);
                  setForm((f: any) => {
                    const a = [...f.images];
                    a[i] = { ...a[i], order: v };
                    return { ...f, images: a };
                  });
                }}
              />
            </div>
          ))}
          <button
            type="button"
            className="text-sm text-blue-600"
            onClick={() =>
              setForm((f: any) => ({
                ...f,
                images: [
                  ...f.images,
                  { url: "", order: f.images?.length || 0 },
                ],
              }))
            }
          >
            + Aggiungi immagine
          </button>
        </div>

        <button
          disabled={saving}
          className="rounded bg-black text-white px-4 py-2 disabled:opacity-50"
        >
          {saving ? "Salvo…" : "Salva"}
        </button>
      </form>
    </div>
  );
}
