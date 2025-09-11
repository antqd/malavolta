const BASE = process.env.NEXT_PUBLIC_API_BASE || "http://127.0.0.1:4000";

async function fetchJSON<T>(url: string, init?: RequestInit): Promise<T> {
  const r = await fetch(url, { ...init, cache: "no-store" });
  const ct = r.headers.get("content-type") || "";
  const data = ct.includes("application/json")
    ? await r.json()
    : await r.text();
  if (!r.ok) {
    const msg = (data as any)?.error || (data as any)?.raw || String(data);
    throw new Error(msg);
  }
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
