import { NextResponse } from "next/server";
import { backend } from "../../_backend";

const jsonOrText = async (r: Response) => {
  const ct = r.headers.get("content-type") || "";
  if (ct.includes("application/json")) return r.json();
  const raw = await r.text(); return { raw };
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const qs = new URLSearchParams();
  for (const k of ["q","page","take"]) { const v = searchParams.get(k); if (v) qs.set(k, v); }
  const r = await backend(`/api/trattori/usati${qs.toString() ? "?" + qs : ""}`, { cache: "no-store" as any });
  const data = await jsonOrText(r);
  return NextResponse.json(data, { status: r.status });
}

export async function POST(req: Request) {
  const body = await req.json();
  const r = await backend("/api/trattori/usati", { method: "POST", body: JSON.stringify(body) });
  const data = await jsonOrText(r);
  return NextResponse.json(data, { status: r.status });
}
