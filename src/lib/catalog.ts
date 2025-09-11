export type Trattore = {
  id: number;
  name: string;
  photo_url: string | null;
  description: string | null;
  price_cents: number;
  quantity: number;
  created_at?: string;
};

export type ListResponse = {
  items: Trattore[];
  total?: number;
  page?: number;
  take?: number;
};

export type Tipo = "nuovi" | "usati";

export function formatPriceCents(cents?: number) {
  const n = typeof cents === "number" ? cents : 0;
  if (n <= 0) return "Su richiesta";
  return (n / 100).toLocaleString("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
}

export function tipoToTitle(t: Tipo) {
  return t === "nuovi" ? "Trattori nuovi" : "Trattori usati";
}
