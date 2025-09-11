import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { backend } from "../../_backend";

export async function GET() {
  const token = (await cookies()).get("token")?.value || "";
  const r = await backend("/api/auth/me", {
    headers: { Authorization: token ? `Bearer ${token}` : "" },
    cache: "no-store",
  });
  const data = await r.json().catch(async () => ({ raw: await r.text() }));
  return NextResponse.json(data, { status: r.status });
}
