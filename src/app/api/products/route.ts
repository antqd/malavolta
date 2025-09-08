import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { productSchema } from "@/lib/validation";
import { Prisma } from "@prisma/client";

export const runtime = "nodejs";        // per evitare edge
export const dynamic = "force-dynamic"; // no caching
export const revalidate = 0;

// Facoltativo: evita 405 sui preflight/HEAD
export async function OPTIONS() { return new NextResponse(null, { status: 204 }); }
export async function HEAD(req: Request) { return GET(req); }

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").trim();
  const page = Number(searchParams.get("page") || "1");
  const take = 12;
  const skip = (page - 1) * take;

  const where: Prisma.ProductWhereInput = q
    ? {
        OR: [
          { title_it: { contains: q, mode: "insensitive" } },
          { slug: { contains: q, mode: "insensitive" } },
        ],
      }
    : {};

  const [items, total] = await Promise.all([
    prisma.product.findMany({
      where,
      skip,
      take,
      orderBy: { createdAt: "desc" },
      include: { brand: true, category: true, images: { include: { media: true } } },
    }),
    prisma.product.count({ where }),
  ]);

  return NextResponse.json({ items, total, page, pages: Math.ceil(total / take) });
}

export async function POST(req: Request) {
  const body = await req.json();
  const data = productSchema.parse(body);

  const created = await prisma.product.create({
    data: {
      slug: data.slug,
      title_it: data.title_it,
      title_en: data.title_en ?? null,
      description_it: data.description_it ?? null,
      description_en: data.description_en ?? null,
      brandId: data.brandId ?? null,
      categoryId: data.categoryId ?? null,
      year: data.year ?? null,
      powerCV: data.powerCV ?? null,
      priceCents: data.priceCents ?? null,
      used: !!data.used,
      status: data.status,
      features: (data.features ?? null) as any,
      images: data.images?.length
        ? {
            create: data.images.map((img) => ({
              order: img.order ?? 0,
              media: { create: { url: img.url } },
            })),
          }
        : undefined,
    },
    include: { brand: true, category: true, images: { include: { media: true } } },
  });

  return NextResponse.json(created, { status: 201 });
}
