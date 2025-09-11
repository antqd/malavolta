// src/lib/api.ts
const REL_BASE = "/api-proxy";

function getOrigin() {
  if (typeof window !== "undefined") return ""; // client: relative ok
  const site = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || "";
  if (!site) return "http://localhost:3000";
  return site.startsWith("http") ? site : `https://${site}`;
}

function abs(path: string) {
  return `${getOrigin()}${path}`;
}

async function fetchJSON<T>(path: string, init?: RequestInit): Promise<T> {
  const url = abs(path);
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
      `${REL_BASE}/api/trattori/${tipo}${
        q ? `?q=${encodeURIComponent(q)}` : ""
      }`
    ),
  get: (tipo: "nuovi" | "usati", id: number | string) =>
    fetchJSON(`${REL_BASE}/api/trattori/${tipo}/${id}`),
};
