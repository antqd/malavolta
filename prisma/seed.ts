// prisma/seed.ts
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 1) Admin
  const email = process.env.ADMIN_EMAIL || "admin@example.com";
  const password = process.env.ADMIN_PASSWORD || "changeme";
  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email, password: hashed, role: "ADMIN" },
  });

  // 2) Brand
  const brand = await prisma.brand.upsert({
    where: { slug: "new-holland" },
    update: {},
    create: { name: "New Holland", slug: "new-holland" },
  });

  // 3) Categoria
  const cat = await prisma.category.upsert({
    where: { slug: "trattori-gommati" },
    update: {},
    create: { slug: "trattori-gommati", name_it: "Trattori gommati", name_en: "Wheeled tractors" },
  });

  // 4) Media demo
  const cover = await prisma.media.create({
    data: {
      url: "https://images.unsplash.com/photo-1587595431973-160d0d94a1f3",
      alt_it: "Cover demo",
      width: 1200,
      height: 800,
    },
  });

  // 5) Blog demo
  await prisma.blogPost.upsert({
    where: { slug: "benvenuti-nel-nostro-blog" },
    update: {},
    create: {
      slug: "benvenuti-nel-nostro-blog",
      title_it: "Benvenuti nel nostro blog",
      excerpt_it: "Novità, mezzi e consigli dal campo.",
      content_it: "Questo è un articolo di prova.\n\nPuoi modificarlo dall'admin e pubblicarlo.",
      status: "PUBLISHED",
      coverId: cover.id,
      publishedAt: new Date(),
    },
  });

  // 6) Prodotto demo
  await prisma.product.create({
    data: {
      slug: "trattore-demo-60cv",
      title_it: "Trattore usato Demo 60 CV",
      description_it: "Compatto e semplice da mantenere, ideale per piccoli lavori.",
      brandId: brand.id,
      categoryId: cat.id,
      year: 1974,
      powerCV: 60,
      priceCents: 380000, // 3.800 €
      used: true,
      status: "PUBLISHED",
      features: {
        tyresFrontSize: "6.00-16",
        tyresRearSize: "14.9-28",
        tyresFrontState: "20%",
        tyresRearState: "25%",
        transmission: "Meccanica",
        engineCyl: 4,
        cab: false,
        aircon: false,
        year: 1974,
        conditionNote: "Discreto",
        hours: 14445,
      },
      images: {
        create: [
          {
            order: 0,
            media: {
              create: {
                url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341",
                alt_it: "Trattore demo",
                width: 1600,
                height: 1200,
              },
            },
          },
        ],
      },
    },
  });

  console.log("✅ Seed completato. Utente admin:", email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
