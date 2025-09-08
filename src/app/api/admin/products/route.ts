import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

const Create = z.object({
  title_it: z.string().min(2),
  title_en: z.string().optional(),
  slug: z.string().min(2),
  description_it: z.string().optional(),
  description_en: z.string().optional(),
  brandId: z.string().optional(),
  categoryId: z.string().optional(),
  year: z.number().int().optional(),
  powerCV: z.number().int().optional(),
  priceCents: z.number().int().optional(),
  used: z.boolean().optional(),
  features: z.record(z.any()).optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).optional(),
});

export async function GET(req: Request) {
  // opzionale: query params per filtri
  const url = new URL(req.url);
  const search = url.searchParams.get("search") || undefined;
  const page = Number(url.searchParams.get("page") || 1);
  const take = Number(url.searchParams.get("pageSize") || 20);
  const skip = (page - 1) * take;

  const where = search
    ? { OR: [{ title_it: { contains: search } }, { title_en: { contains: search } }] }
    : undefined;

  const [rows, total] = await Promise.all([
    prisma.product.findMany({
      where,
      include: { brand: true, category: true, images: { include: { media: true } } },
      orderBy: { createdAt: "desc" },
      skip, take
    }),
    prisma.product.count({ where }),
  ]);

  return NextResponse.json({ rows, total, page, pageSize: take });
}

export async function POST(req: Request) {
  requireAdmin();
  const json = await req.json();
  const data = Create.parse(json);
  const product = await prisma.product.create({ data });
  return NextResponse.json(product, { status: 201 });
}
