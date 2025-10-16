// src/app/attrezzatura/data.ts

export type EquipmentProduct = {
  id: string;
  name: string;
  description: string;
  href?: string;
  image?: string;
  tags?: string[];
};

export type EquipmentBrand = {
  id: string;
  name: string;
  logo: string;
  blurb: string;
  siteUrl: string;
  products: EquipmentProduct[];
};

export const EQUIPMENT_BRANDS: EquipmentBrand[] = [
  {
    id: "spedo",
    name: "Fratelli Spedo",
    logo: "/images/loghi/logo-spedo.png",
    blurb:
      "Atomizzatori e sistemi di irrorazione professionali per vigneti e frutteti con ventilatori proprietari ad alta efficienza.",
    siteUrl: "https://www.spedo.it",
    products: [
      {
        id: "spedo-airon",
        name: "Airon Tower 1000",
        description:
          "Atomizzatore trainato con torretta verticale Airon e ventola controrotante per copertura uniforme delle pareti vegetative.",
        image: "https://www.spedo.it/wp-content/uploads/2023/04/airon-tower-1000.jpg",
        tags: ["Atomizzatore", "Torretta"],
      },
      {
        id: "spedo-vrt",
        name: "VRT Smart Line",
        description:
          "Linea a dose variabile con controllo elettronico della portata, moduli GPS e sensori di vigore per trattamenti mirati.",
        image: "https://www.spedo.it/wp-content/uploads/2023/03/vrt-smart-line.jpg",
        tags: ["Dose variabile", "ISOBUS"],
      },
      {
        id: "spedo-windeco",
        name: "WindEco 600",
        description:
          "Atomizzatore portato da 600 L con convogliatori orientabili in acciaio e ventilatore ad alto rendimento.",
        image: "https://www.spedo.it/wp-content/uploads/2020/02/windeco-600.jpg",
        tags: ["Portato", "Frutteto"],
      },
    ],
  },
  {
    id: "calderoni",
    name: "Calderoni",
    logo: "/images/loghi/logo-calderoni.png",
    blurb:
      "Tecnologie per la lavorazione del terreno e la gestione del sottofila con soluzioni robuste e modulari.",
    siteUrl: "https://www.calderoni.it",
    products: [
      {
        id: "calderoni-kosmos",
        name: "Kosmos Plus",
        description:
          "Sarchiatrice interfilare con parallelogramma indipendente, sensore tastatore e dischi di protezione per lavorare tra i filari.",
        image:
          "https://www.calderoni.it/wp-content/uploads/2023/03/kosmos-plus.jpg",
        tags: ["Sarchiatrice", "Sottofila"],
      },
      {
        id: "calderoni-sirius",
        name: "Sirius 3S",
        description:
          "Spollonatrice idraulica con tre testate flottanti, inclinazione regolabile e comandi idraulici proporzionali.",
        image:
          "https://www.calderoni.it/wp-content/uploads/2022/09/sirius-3s.jpg",
        tags: ["Spollonatrice", "Idraulica"],
      },
      {
        id: "calderoni-ares",
        name: "Ares Compact",
        description:
          "Combinata lame + dischi con telaio compatto, modulare e sensore tastatore per il diserbo meccanico professionale.",
        image:
          "https://www.calderoni.it/wp-content/uploads/2021/02/ares-compact.jpg",
        tags: ["Sottofila", "Combinata"],
      },
    ],
  },
  {
    id: "agrionica",
    name: "Agrionica",
    logo: "/images/loghi/agri-ionica.png",
    blurb:
      "Soluzioni su misura per serre e colture protette con impianti di irrigazione e fertirrigazione automatizzati.",
    siteUrl: "https://www.agrionica.it",
    products: [
      {
        id: "agrionica-greencloud",
        name: "GreenCloud 360",
        description:
          "Centralina di fertirrigazione con gestione cloud, valvole proporzionali e ricette programmabili da remoto.",
        image:
          "https://www.agrionica.it/wp-content/uploads/2024/01/greencloud-360-agrionica.jpg",
        tags: ["Fertirrigazione", "IoT"],
      },
      {
        id: "agrionica-smartlift",
        name: "SmartLift Benches",
        description:
          "Banchi mobili con movimentazione automatica e controllo climatico integrato per serre e vivai.",
        image:
          "https://www.agrionica.it/wp-content/uploads/2024/01/smartlift-benches-agrionica.jpg",
        tags: ["Serre", "Automazione"],
      },
      {
        id: "agrionica-mistpro",
        name: "MistPro Line",
        description:
          "Sistema di nebulizzazione ad alta pressione con ugelli anti-goccia per raffrescamento e controllo dell'umidità.",
        image:
          "https://www.agrionica.it/wp-content/uploads/2024/01/mistpro-line-agrionica.jpg",
        tags: ["Climatizzazione", "Serra"],
      },
    ],
  },
  {
    id: "gamberini",
    name: "Gamberini",
    logo: "/images/loghi/logo-gamberini.png",
    blurb:
      "Attrezzature per la distribuzione di fertilizzanti e la semina di precisione dedicate alle aziende professionali.",
    siteUrl: "https://www.gamberinisrl.com",
    products: [
      {
        id: "gamberini-futura",
        name: "Futura Evo 2500",
        description:
          "Spandiconcime doppio disco con pesatura dinamica, sensori di carico e controllo automatico delle sezioni.",
        image:
          "https://www.gamberinisrl.com/wp-content/uploads/2023/02/spandiconcime-futura-evo-2500.jpg",
        tags: ["Spandiconcime", "Isobus"],
      },
      {
        id: "gamberini-precision",
        name: "Precision Drill 6R",
        description:
          "Seminatrice pneumatica a sei file con microgranulatore, tramoggia in acciaio inox e chiusura idraulica.",
        image:
          "https://www.gamberinisrl.com/wp-content/uploads/2023/02/precision-drill-6r.jpg",
        tags: ["Semina", "Pneumatica"],
      },
      {
        id: "gamberini-compact",
        name: "Compact Lift 150",
        description:
          "Sollevatore frontale con barra portattrezzi e attacco rapido per spandiconcime e seminatrici combinate.",
        image:
          "https://www.gamberinisrl.com/wp-content/uploads/2023/02/compact-lift-150.jpg",
        tags: ["Sollevatore", "Frontale"],
      },
    ],
  },
  {
    id: "bicchi",
    name: "Bicchi",
    logo: "/images/loghi/logo-bicchi.png",
    blurb:
      "Rimorchi agricoli ribaltabili e pianali portacontainer con allestimenti personalizzati per ogni esigenza.",
    siteUrl: "https://www.bicchi.com",
    products: [
      {
        id: "bicchi-kappa",
        name: "Kappa 180",
        description:
          "Rimorchio trilaterale con cassone rinforzato e cilindro telescopico ad alta portata.",
        image:
          "https://www.bicchi.com/wp-content/uploads/2023/07/kappa-180.jpg",
        tags: ["Rimorchio", "Trilaterale"],
      },
      {
        id: "bicchi-gamma",
        name: "Gamma Evo 140",
        description:
          "Pianale ribassato per balle, rimorchi e container con sospensioni paraboliche rinforzate.",
        image:
          "https://www.bicchi.com/wp-content/uploads/2023/07/gamma-evo-140.jpg",
        tags: ["Pianale", "Balle"],
      },
      {
        id: "bicchi-xtreme",
        name: "Xtreme Dumper",
        description:
          "Dumper monoscocca per movimento terra certificato ADR.",
        image:
          "https://www.bicchi.com/wp-content/uploads/2023/07/xtreme-dumper.jpg",
        tags: ["Dumper", "Movimento terra"],
      },
    ],
  },
  {
    id: "rinieri",
    name: "Rinieri",
    logo: "/images/loghi/logo-rinieri.png",
    blurb:
      "Specialisti in potatrici, scavallatrici e macchine per la gestione del verde professionale nei frutteti e vigneti.",
    siteUrl: "https://www.rinieri.com",
    products: [
      {
        id: "rinieri-crf",
        name: "CRF X Pro",
        description:
          "Spollonatrice idraulica con testate indipendenti, sensori proporzionali e joystick elettronico.",
        image: "https://www.rinieri.com/wp-content/uploads/2022/07/crf-x-pro.jpg",
        tags: ["Spollonatrice", "Vigneto"],
      },
      {
        id: "rinieri-turbo",
        name: "BRM Off-Set",
        description:
          "Trincia laterale professionale con rotore rinforzato, controcoltelli e slitte regolabili.",
        image: "https://www.rinieri.com/wp-content/uploads/2022/07/brm-offset.jpg",
        tags: ["Trincia", "Offset"],
      },
      {
        id: "rinieri-cutly",
        name: "Helix 2",
        description:
          "Potatrice a dischi verticali con telaio articolato e motori idraulici per pareti a doppio spalliera.",
        image: "https://www.rinieri.com/wp-content/uploads/2022/07/helix-2.jpg",
        tags: ["Potatrice", "Dischi"],
      },
    ],
  },
  {
    id: "argnani-monti",
    name: "Argnani & Monti",
    logo: "/images/loghi/logo-argnani-e-monti.png",
    blurb:
      "Macchine per la raccolta e la gestione del terreno dedicate alle colture orticole con focus su affidabilità e semplicità.",
    siteUrl: "https://www.argnaniemonti.it",
    products: [
      {
        id: "argnani-compact",
        name: "Compact 4R",
        description:
          "Raccoglitrice trainata per ortaggi a radice con tappeti in acciaio inox e selezione su piano vibrante.",
        image:
          "https://www.argnaniemonti.it/wp-content/uploads/2021/05/compact-4r.jpg",
        tags: ["Raccolta", "Radici"],
      },
      {
        id: "argnani-flex",
        name: "FlexSeeder 12",
        description:
          "Seminatrice pneumatica di precisione con trasmissione cardanica e testine intercambiabili.",
        image:
          "https://www.argnaniemonti.it/wp-content/uploads/2021/05/flexseeder.jpg",
        tags: ["Semina", "Pneumatica"],
      },
      {
        id: "argnani-harvest",
        name: "HarvestFlow 300",
        description:
          "Sistema modulare di nastri per raccolta baby leaf con tappeto TPU e regolazione idraulica dell'inclinazione.",
        image:
          "https://www.argnaniemonti.it/wp-content/uploads/2021/05/harvestflow-300.jpg",
        tags: ["Raccolta", "Baby Leaf"],
      },
    ],
  },
];
