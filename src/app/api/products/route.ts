import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { backend } from "../_backend";

const jsonOrText = async (r: Response) => {
  const ct = r.headers.get("content-type") || "";
  if (ct.includes("application/json")) return r.json();
  const raw = await r.text();
  return { raw };
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const qs = new URLSearchParams();
  for (const k of [
    "q",
    "page",
    "brandId",
    "categoryId",
    "used",
    "status",
    "priceMin",
    "priceMax",
    "yearMin",
    "yearMax",
  ]) {
    const v = searchParams.get(k);
    if (v !== null && v !== "") qs.set(k, v);
  }

  const token = (await cookies()).get("token")?.value || "";
  const r = await backend(
    `/api/products${qs.toString() ? "?" + qs.toString() : ""}`,
    {
      headers: { Authorization: token ? `Bearer ${token}` : "" },
      cache: "no-store",
    }
  );

  const data = await jsonOrText(r);
  return NextResponse.json(data, { status: r.status });
}

export async function POST(req: Request) {
  const body = await req.json();
  const token = (await cookies()).get("token")?.value || "";

  const r = await backend("/api/products", {
    method: "POST",
    headers: { Authorization: token ? `Bearer ${token}` : "" },
    body: JSON.stringify(body),
  });

  const data = await jsonOrText(r);
  return NextResponse.json(data, { status: r.status });
}
