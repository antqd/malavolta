// scripts/test-relations.ts
import { prisma } from "@/lib/prisma";
(async () => {
  const p = await prisma.product.findFirst({
    include: { brand: true, category: true, images: { include: { media: true } } },
  });
  console.log(JSON.stringify(p, null, 2));
  process.exit(0);
})();
