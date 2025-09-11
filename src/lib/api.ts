// src/lib/api.ts
const BASE = "/api-proxy"; // <-- usa il proxy, sempre https same-origin

async function fetchJSON<T>(url: string, init?: RequestInit): Promise<T> {
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
      `${BASE}/api/trattori/${tipo}${q ? `?q=${encodeURIComponent(q)}` : ""}`
    ),
  get: (tipo: "nuovi" | "usati", id: number | string) =>
    fetchJSON(`${BASE}/api/trattori/${tipo}/${id}`),
};
