"use client";
import { useForm } from "react-hook-form";
import { z } from "zod"; import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/api";

const Z = z.object({
  title: z.string().min(3),
  brand: z.string(),
  model: z.string(),
  status: z.enum(["new","used"]),
  power_cv: z.number().int().nonnegative().optional(),
  year: z.number().int().optional(),
  hours: z.number().optional(),
  price_eur: z.number().nonnegative().optional(),
  tires_front_size: z.string().optional(),
  tires_rear_size: z.string().optional(),
  tires_front_wear_pct: z.number().min(0).max(100).optional(),
  tires_rear_wear_pct: z.number().min(0).max(100).optional(),
  transmission: z.string().optional(),
  engine_cylinders: z.number().int().optional(),
  cab: z.boolean().optional(),
  air_conditioning: z.boolean().optional(),
  condition_note: z.string().optional(),
  extra: z.record(z.any()).optional(),
  image_ids: z.array(z.string()).optional(),
});

export default function EditProduct({ params }: any) {
  const id = params.id;
  const form = useForm<z.infer<typeof Z>>({ resolver: zodResolver(Z) });

  async function onSubmit(values: z.infer<typeof Z>) {
    await api(`/products/${id}`, { method: "PUT", body: JSON.stringify(values) });
    location.href = "/admin/products";
  }
  // fetch + setValue omessi per brevità
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 max-w-3xl">
      {/* campi principali */}
      {/* <Uploader onUploaded={(ids)=> form.setValue("image_ids", ids)} /> */}
      <button className="btn-primary">Salva</button>
    </form>
  );
}
