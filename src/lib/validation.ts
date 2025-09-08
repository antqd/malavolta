import { z } from "zod";

export const productSchema = z.object({
  id: z.string().optional(),
  slug: z.string().min(3),
  title_it: z.string().min(3),
  title_en: z.string().optional().nullable(),
  description_it: z.string().optional().nullable(),
  description_en: z.string().optional().nullable(),
  brandId: z.string().optional().nullable(),
  categoryId: z.string().optional().nullable(),
  year: z.coerce.number().int().optional().nullable(),
  powerCV: z.coerce.number().int().optional().nullable(),
  priceCents: z.coerce.number().int().nonnegative().optional().nullable(),
  used: z.coerce.boolean().default(false),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).default("DRAFT"),
  features: z.any().optional().nullable(),
  images: z.array(z.object({
    url: z.string().url(),
    order: z.number().int().default(0),
  })).optional(),
});
export type ProductInput = z.infer<typeof productSchema>;
