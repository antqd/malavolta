// src/app/blog/data.ts
export type Post = {
  slug: string;
  title: string;
  tag: string;          // es. BANDO | FINANZIAMENTI | AGEVOLAZIONI | CONSEGNE
  excerpt: string;
  cover: string;        // path immagine di copertina
  date: string;         // ISO
  content: string[];    // paragrafi del corpo
};

export const POSTS: Post[] = [
  {
    slug: "bando-zes-unica-2025-opportunita",
    title: "Bando ZES Unica 2025: opportunità di crescita per le imprese agricole",
    tag: "BANDO",
    excerpt:
      "Regole e modello per il credito d’imposta nelle aree ZES: come accedervi e a chi conviene.",
    cover: "/images/blog/zes.jpg",
    date: "2025-06-12",
    content: [
      "La ZES Unica introduce un quadro agevolativo omogeneo per il Mezzogiorno.",
      "Il credito d’imposta è rivolto a investimenti in beni strumentali nuovi.",
      "Approfondiamo requisiti, scadenze e modalità di presentazione delle domande.",
    ],
  },
  {
    slug: "bando-isi-inail-2025",
    title: "Bando ISI INAIL 2025: sicurezza e innovazione in agricoltura",
    tag: "FINANZIAMENTI",
    excerpt:
      "Contributi a fondo perduto per migliorare sicurezza e sostenibilità delle aziende.",
    cover: "/images/blog/inail.jpg",
    date: "2025-05-20",
    content: [
      "Il Bando ISI INAIL sostiene progetti per ridurre il rischio infortunistico.",
      "Sono ammissibili investimenti in macchine e attrezzature con migliori standard di sicurezza.",
      "Vediamo percentuali di contributo, massimali e iter di domanda.",
    ],
  },
  {
    slug: "risparmio-energetico-atomizzatori",
    title: "Risparmio energetico: voucher per atomizzatori di nuova generazione",
    tag: "AGEVOLAZIONI",
    excerpt:
      "Contributi fino a 5.000€ per attrezzature più efficienti e meno energivore.",
    cover: "/images/blog/risparmio.jpg",
    date: "2025-04-28",
    content: [
      "I voucher puntano a ridurre i consumi e l’impatto ambientale delle lavorazioni.",
      "Gli atomizzatori di nuova generazione ottimizzano portata e copertura.",
      "Requisiti, cumulabilità e documentazione richiesta.",
    ],
  },
  {
    slug: "le-nostre-ultime-consegne",
    title: "Le nostre ultime consegne in azienda",
    tag: "CONSEGNE",
    excerpt:
      "Una selezione delle consegne recenti: trattori, attrezzature e soluzioni su misura.",
    cover: "/images/blog/consegne.jpg",
    date: "2025-03-30",
    content: [
      "Dalla consulenza alla messa in servizio: un percorso seguito passo-passo.",
      "Ogni consegna è calibrata sulle esigenze dell’azienda cliente.",
      "Gallery e casi d’uso reali dal territorio.",
    ],
  },
];

export const getPostBySlug = (slug: string) => POSTS.find((p) => p.slug === slug);
