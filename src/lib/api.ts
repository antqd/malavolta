// src/lib/api.ts
const PROXY_BASE = "/api-proxy"; // usa la rewrite di vercel.json

function withOrigin(path: string) {
  // se siamo sul server, serve un origin assoluto
  if (typeof window === "undefined") {
    // usa NEXT_PUBLIC_SITE_URL oppure la domain di Vercel
    const site =
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.VERCEL_URL ||
      "http://localhost:3000";
    const origin = site.startsWith("http") ? site : `https://${site}`;
    return origin + path;
  }
  // lato client: le URL relative vanno bene
  return path;
}

async function fetchJSON<T>(path: string, init?: RequestInit): Promise<T> {
  const url = withOrigin(path);
  const r = await fetch(url, { ...init, cache: "no-store" });
  const ct = r.headers.get("content-type") || "";
  const data = ct.includes("application/json")
    ? await r.json()
    : await r.text();
  if (!r.ok) throw new Error((data as any)?.error || String(data));
  return data as T;
}

export const api = {
  list: (tipo: "nuovi" | "usati", q = "") =>
    fetchJSON(
      `${PROXY_BASE}/api/trattori/${tipo}${
        q ? `?q=${encodeURIComponent(q)}` : ""
      }`
    ),
  get: (tipo: "nuovi" | "usati", id: number | string) =>
    fetchJSON(`${PROXY_BASE}/api/trattori/${tipo}/${id}`),
};
