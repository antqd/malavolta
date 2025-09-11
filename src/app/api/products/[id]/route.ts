import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { backend } from "../../_backend";

const jsonOrText = async (r: Response) => {
  const ct = r.headers.get("content-type") || "";
  if (ct.includes("application/json")) return r.json();
  const raw = await r.text();
  return { raw };
};

type Ctx = { params: { id: string } };

export async function GET(_req: Request, { params }: Ctx) {
  const token = (await cookies()).get("token")?.value || "";

  const r = await backend(`/api/products/${params.id}`, {
    headers: { Authorization: token ? `Bearer ${token}` : "" },
    cache: "no-store",
  });

  const data = await jsonOrText(r);
  return NextResponse.json(data, { status: r.status });
}

export async function PATCH(req: Request, { params }: Ctx) {
  const token = (await cookies()).get("token")?.value || "";
  const body = await req.json();

  const r = await backend(`/api/products/${params.id}`, {
    method: "PATCH",
    headers: { Authorization: token ? `Bearer ${token}` : "" },
    body: JSON.stringify(body),
  });

  const data = await jsonOrText(r);
  return NextResponse.json(data, { status: r.status });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  const token = (await cookies()).get("token")?.value || "";

  const r = await backend(`/api/products/${params.id}`, {
    method: "DELETE",
    headers: { Authorization: token ? `Bearer ${token}` : "" },
  });

  if (r.status === 204) {
    return new NextResponse(null, { status: 204 });
  }
  const data = await jsonOrText(r);
  return NextResponse.json(data, { status: r.status });
}
