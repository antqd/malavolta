import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET() {
  const items = await prisma.category.findMany({ orderBy: { name_it: "asc" } });
  return NextResponse.json(items);
}
