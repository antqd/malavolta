import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { backend } from "../../_backend";

export async function POST(req: Request) {
  const body = await req.json(); // { email, password }
  const r = await backend("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const data = await r.json();

  if (!r.ok) return NextResponse.json(data, { status: r.status });

  // il backend deve rispondere con { token, user }
  const token = data?.token;
  if (!token)
    return NextResponse.json({ error: "Token mancante" }, { status: 500 });

  (await cookies()).set("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // true in produzione con HTTPS
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return NextResponse.json({ ok: true, user: data.user });
}
