// opzionale: app/(admin)/admin/trattori/types.ts
export type Trattore = {
  id: number;
  name: string;
  photo_url?: string;
  description?: string;
  price_cents: number;
  quantity: number;
  created_at?: string;
};
