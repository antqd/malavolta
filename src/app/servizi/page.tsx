import ServiziClient from "./ServiziClient";
import SiteFooter from "@/components/footers/newsletter-footer";

type SP = Record<string, string | string[] | undefined>;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SP>;
}) {
  const params = await searchParams; // ✅ in Next 15 è una Promise
  const raw = params?.motivo;
  const motivo = Array.isArray(raw) ? raw[0] ?? "" : raw ?? "";

  return (
    <>
      <ServiziClient motivoFromUrl={motivo} />
      <SiteFooter />
    </>
  );
}
