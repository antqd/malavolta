import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

const Patch = z.object({
  title_it: z.string().optional(),
  title_en: z.string().optional(),
  slug: z.string().optional(),
  description_it: z.string().optional(),
  description_en: z.string().optional(),
  brandId: z.string().optional().nullable(),
  categoryId: z.string().optional().nullable(),
  year: z.number().int().optional().nullable(),
  powerCV: z.number().int().optional().nullable(),
  priceCents: z.number().int().optional().nullable(),
  used: z.boolean().optional(),
  features: z.record(z.any()).optional().nullable(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).optional(),
});

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const row = await prisma.product.findUnique({
    where: { id: params.id },
    include: { brand: true, category: true, images: { include: { media: true } } },
  });
  if (!row) return NextResponse.json({ message: "Not found" }, { status: 404 });
  return NextResponse.json(row);
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  requireAdmin();
  const data = Patch.parse(await req.json());
  const row = await prisma.product.update({ where: { id: params.id }, data });
  return NextResponse.json(row);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  requireAdmin();
  await prisma.product.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
