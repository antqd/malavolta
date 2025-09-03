// lib/api.ts
type Any = any;

const MOCK = process.env.NEXT_PUBLIC_MOCK_API === "1";

/** MOCK DB minimale su localStorage (se disponibile) */
const mem = (typeof window !== "undefined" && window.localStorage) ? window.localStorage : undefined;
const get = <T>(k: string, d: T) => {
  try { return mem ? (JSON.parse(mem.getItem(k) || "null") ?? d) : d; } catch { return d; }
};
const set = (k: string, v: unknown) => { try { mem?.setItem(k, JSON.stringify(v)); } catch {} };

/** Dati iniziali per far vedere subito qualcosa */
const seed = () => {
  if (!get("_seeded", false)) {
    set("products", [{
      id: "p1",
      title: "Trattore usato Fiat Modello 640DT",
      brand: "Fiat",
      model: "640DT",
      status: "used",
      power_cv: 64,
      year: 1978,
      hours: 8200,
      price_eur: 5900,
      tires_front_size: "7.50-18",
      tires_rear_size: "16.9-30",
      tires_front_wear_pct: 40,
      tires_rear_wear_pct: 35,
      transmission: "Meccanica",
      engine_cylinders: 4,
      cab: false,
      air_conditioning: false,
      condition_note: "Funzionante",
      image_ids: []
    }]);
    set("blogPosts", [{ id: "b1", title: "Bando ISI INAIL 2025", status: "draft" }]);
    set("team", [{ id: "t1", first_name: "Michele", last_name: "Paldino", role: "Ragioniere" }]);
    set("_seeded", true);
  }
};
if (MOCK && typeof window !== "undefined") seed();

/** MOCK router molto leggero */
async function mockApi<T>(path: string, init?: RequestInit): Promise<T> {
  const method = (init?.method || "GET").toUpperCase();
  const ok = <U>(data: U) => data as unknown as T;

  // auth finta
  if (path.startsWith("/auth/login"))        return ok({ ok: true, token: "dev" });
  if (path.startsWith("/auth/logout"))       return ok({ ok: true });
  if (path.startsWith("/auth/me"))           return ok({ user: { id: "dev", email: "dev@local", role: "admin" } });

  // dashboard summary
  if (path.startsWith("/admin/summary")) {
    const blog = get("blogPosts", [] as Any[]);
    const prod = get("products", [] as Any[]);
    const team = get("team", [] as Any[]);
    return ok({
      blogPosts: blog.length,
      products: prod.length,
      team: team.length,
      recent: [
        { message: "Accesso admin (mock)", when: "ora" },
        { message: "Prodotti iniziali caricati", when: "oggi" }
      ]
    });
  }

  // products
  if (path.startsWith("/products")) {
    const list = get("products", [] as Any[]);
    const idMatch = path.match(/^\/products\/([^/?#]+)/);

    if (method === "GET" && !idMatch) {
      return ok({ items: list, total: list.length });
    }
    if (method === "GET" && idMatch) {
      const item = list.find((p: Any) => p.id === idMatch[1]);
      if (!item) return ok({ error: "not found" } as Any);
      return ok(item);
    }
    if (method === "POST") {
      const body = init?.body ? JSON.parse(init.body as string) : {};
      const item = { id: `p${Date.now()}`, ...body };
      set("products", [...list, item]);
      return ok(item);
    }
    if (method === "PUT" && idMatch) {
      const body = init?.body ? JSON.parse(init.body as string) : {};
      const id = idMatch[1];
      const next = list.map((p: Any) => (p.id === id ? { ...p, ...body } : p));
      set("products", next);
      return ok(next.find((p: Any) => p.id === id));
    }
    if (method === "DELETE" && idMatch) {
      const id = idMatch[1];
      set("products", list.filter((p: Any) => p.id !== id));
      return ok({ ok: true } as Any);
    }
  }

  // blog
  if (path.startsWith("/blog/posts")) {
    const list = get("blogPosts", [] as Any[]);
    const idMatch = path.match(/^\/blog\/posts\/([^/?#]+)/);

    if (method === "GET" && !idMatch) return ok({ items: list, total: list.length });
    if (method === "GET" && idMatch)  return ok(list.find((x: Any) => x.id === idMatch[1]) || null);
    if (method === "POST") {
      const body = init?.body ? JSON.parse(init.body as string) : {};
      const item = { id: `b${Date.now()}`, status: "draft", ...body };
      set("blogPosts", [item, ...list]); return ok(item);
    }
    if (method === "PUT" && idMatch) {
      const body = init?.body ? JSON.parse(init.body as string) : {};
      const id = idMatch[1];
      const next = list.map((x: Any) => (x.id === id ? { ...x, ...body } : x));
      set("blogPosts", next); return ok(next.find((x: Any) => x.id === id));
    }
    if (method === "DELETE" && idMatch) {
      set("blogPosts", list.filter((x: Any) => x.id !== idMatch[1])); return ok({ ok: true } as Any);
    }
  }

  // fallback generico: tutto ok
  return ok({ ok: true } as Any);
}

/** Wrapper: se MOCK allora non chiama il server, altrimenti fetch reale */
export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  if (MOCK) return mockApi<T>(path, init);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    ...init,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.status === 204 ? (undefined as T) : res.json();
}
