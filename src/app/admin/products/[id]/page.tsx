import { prisma } from "@/lib/prisma";
import ProductForm from "../product-form";

export default async function EditProductPage({ params }: { params: { id: string }}) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: { images: { include: { media: true }, orderBy: { order: "asc" } } },
  });
  if (!product) return <div className="p-6">Non trovato</div>;
  return <ProductForm mode="edit" product={product} />;
}
