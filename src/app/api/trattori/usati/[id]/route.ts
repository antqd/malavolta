import { NextResponse } from "next/server";
import { backend } from "../../../_backend";

const jsonOrText = async (r: Response) => {
  const ct = r.headers.get("content-type") || "";
  if (ct.includes("application/json")) return r.json();
  const raw = await r.text(); return { raw };
};

type Ctx = { params: { id: string } };

export async function GET(_req: Request, { params }: Ctx) {
  const r = await backend(`/api/trattori/usati/${params.id}`, { cache: "no-store" as any });
  const data = await jsonOrText(r);
  return NextResponse.json(data, { status: r.status });
}
export async function PATCH(req: Request, { params }: Ctx) {
  const body = await req.json();
  const r = await backend(`/api/trattori/usati/${params.id}`, { method: "PATCH", body: JSON.stringify(body) });
  const data = await jsonOrText(r);
  return NextResponse.json(data, { status: r.status });
}
export async function DELETE(_req: Request, { params }: Ctx) {
  const r = await backend(`/api/trattori/usati/${params.id}`, { method: "DELETE" });
  if (r.status === 204) return new NextResponse(null, { status: 204 });
  const data = await jsonOrText(r);
  return NextResponse.json(data, { status: r.status });
}
