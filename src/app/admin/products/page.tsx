"use client";
import useSWR from "swr";
import { api } from "@/lib/api";

export default function ProductsPage() {
  const { data, mutate } = useSWR("/products?limit=50", api<any>);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Prodotti</h1>
        <a href="/admin/products/new" className="btn-primary">Nuovo</a>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {data?.items?.map((p: any) => (
          <a key={p.id} href={`/admin/products/${p.id}`} className="border rounded p-3">
            <div className="font-medium">{p.title}</div>
            <div className="text-sm opacity-70">{p.brand} • {p.model} • {p.year}</div>
            <div className="text-sm mt-1">{p.price_eur?.toLocaleString("it-IT",{style:"currency",currency:"EUR"})}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
