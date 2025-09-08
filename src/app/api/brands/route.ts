import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET() {
  const items = await prisma.brand.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(items);
}
