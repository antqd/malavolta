// src/app/prodotti/data.ts

// —————————————————— TYPES ——————————————————
export type Condition = "nuovo" | "usato";

export type Category =
  | "trattori_gommati"
  | "trattori_cingolati"
  | "vigneto_frutteto"
  | "giardinaggio"
  | "movimento_terra"
  | "rimorchi"
  | "serbatoi"
  | "raccolta"
  | "boschive"
  | "fienagione";

export const CATEGORIES: Record<Category, string> = {
  trattori_gommati: "Trattori gommati",
  trattori_cingolati: "Trattori cingolati",
  vigneto_frutteto: "Vigneto / Frutteto",
  giardinaggio: "Macchine per il giardinaggio",
  movimento_terra: "Macchine movimento terra",
  rimorchi: "Rimorchi",
  serbatoi: "Serbatoi",
  raccolta: "Macchine da raccolta",
  boschive: "Macchine boschive",
  fienagione: "Macchine per fienagione",
};

// — Specifiche tecniche usate nel dettaglio
export interface ProductSpecs {
  tyresFrontSize?: string;
  tyresRearSize?: string;
  tyresFrontState?: string; // es. "30%"
  tyresRearState?: string; // es. "25%"
  transmission?: string; // es. "Meccanica", "Powershift"
  powerHp?: number;
  engineCyl?: number; // n° cilindri
  cab?: boolean; // cabina
  aircon?: boolean; // A/C
  year?: number;
  conditionNote?: string; // es. "Macchina da riparare"
  hours?: number; // ore macchina
}

export interface CatalogItem {
  id: string;
  slug: string; // /prodotti/[slug]
  title: string; // nome commerciale
  brand?: string;
  category: Category;
  condition: Condition; // nuovo | usato
  year?: number;
  hours?: number; // solo usato
  powerHp?: number;
  price?: number; // se assente o 0 => "Su richiesta"
  cover: string; // /public/images/catalog/...
  gallery?: string[]; // immagini extra
  badge?: string; // es. "Occasione", "Km 0"
  specs?: ProductSpecs; // usato dal dettaglio
  description?: string; // mini descrizione mostrata sotto la gallery

  // ⬇️ nuovo campo opzionale per disponibilità
  stock?: number;
}

/** Helpers riutilizzabili per il badge “solo 1 disponibile” */
export const LOW_STOCK_LABEL = "solo 1 disponibile";
export const isLowStock1 = (item?: CatalogItem) => !!item && item.stock === 1;

/* -------------------- TRATTORI (aggiornati) -------------------- */
export const ITEMS: CatalogItem[] = [
  // ——— GOMMATI (usato)
  {
    id: "mf-168",
    slug: "trattore-usato-massey-ferguson-mf-168",
    title: "Trattore usato Massey Ferguson MF 168",
    brand: "Massey Ferguson",
    category: "trattori_gommati",
    condition: "usato",
    cover:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTr05kuZvQ0xpzRRitAOqdhIQqDOZX6HBIofEf_r1QN4Z2nFA3duCBYf-ZxOgRuXRgLv0Ftr8-P-q7DhLUFZcOdPXHdesL38vXu65JIggaFdlET_pSXeCHe",
    price: 3800,
    description:
      "Compatto e semplice da mantenere, ideale per piccole lavorazioni e traini leggeri. Meccanica affidabile e consumi ridotti.",
    specs: {
      tyresFrontSize: "6.00-16",
      tyresRearSize: "14.9-28",
      tyresFrontState: "20%",
      tyresRearState: "25%",
      transmission: "Meccanica",
      powerHp: 60,
      engineCyl: 4,
      cab: false,
      aircon: false,
      year: 1974,
      conditionNote: "Discreto",
      hours: 14445,
    },
    year: 1974,
    hours: 14445,
    powerHp: 60,
    // stock non presente => nessun badge
  },

  // ——— NUOVO TRATTORE DI ESEMPIO con stock: 1 (per mostrare il badge rosso)
  {
    id: "nh-t5-100-demo",
    slug: "new-holland-t5-100-demo",
    title: "New Holland T5.100 (Demo)",
    brand: "New Holland",
    category: "trattori_gommati",
    condition: "usato",
    year: 2021,
    powerHp: 100,
    price: 48500,
    cover: "/images/postvendita.png", // immagine già presente nel progetto
    description:
      "Macchina aziendale in ottime condizioni, tagliandi regolari, pronta lavoro.",
    specs: {
      transmission: "Powershuttle",
      powerHp: 100,
      engineCyl: 4,
      cab: true,
      aircon: true,
      year: 2021,
      hours: 1850,
      tyresFrontSize: "380/85 R24",
      tyresRearSize: "420/85 R34",
      tyresFrontState: "60%",
      tyresRearState: "70%",
    },
    stock: 1, // ⬅️ attiva il badge “solo 1 disponibile”
  },
];
