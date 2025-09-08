import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { productSchema } from "@/lib/validation";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const p = await prisma.product.findUnique({
    where: { id: params.id },
    include: { brand: true, category: true, images: { include: { media: true }, orderBy: { order: "asc" } } },
  });
  if (!p) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(p);
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const data = productSchema.partial().parse(body);

  const updated = await prisma.product.update({
    where: { id: params.id },
    data: {
      ...("slug" in data ? { slug: data.slug! } : {}),
      ...("title_it" in data ? { title_it: data.title_it! } : {}),
      title_en: data.title_en ?? undefined,
      description_it: data.description_it ?? undefined,
      description_en: data.description_en ?? undefined,
      brandId: data.brandId ?? undefined,
      categoryId: data.categoryId ?? undefined,
      year: data.year ?? undefined,
      powerCV: data.powerCV ?? undefined,
      priceCents: data.priceCents ?? undefined,
      used: data.used ?? undefined,
      status: data.status ?? undefined,
      features: (data.features ?? undefined) as any,
    },
  });

  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.product.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
