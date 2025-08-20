// app/loghi/page.tsx (SERVER COMPONENT)
import fs from "fs/promises";
import path from "path";
import Image from "next/image";
import LogoGridClient from './logo-grid-client'
import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import SiteFooter  from '@/components/footers/newsletter-footer'

export const metadata = {
  title: "Tutti i Loghi & Collaborazioni",
};

export default async function LoghiPage() {
  const dir = path.join(process.cwd(), "public", "images", "loghi");
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((n) => /\.(png|jpe?g|webp|svg)$/i.test(n))
    .sort((a, b) => a.localeCompare(b));

  const items = files.map((name) => ({
    src: `/images/loghi/${name}`,
    alt: name.replace(/\.(png|jpe?g|webp|svg)$/i, "").replace(/[-_]/g, " "),
  }));

  return (
    <>
    <AnimatedIndicatorNavbar/>
    <div className="min-h-screen bg-background">
      <section className="pt-24 pb-10">
        <div className="container">
          <h1 className="text-4xl font-bold">Tutti i Loghi & Collaborazioni</h1>
          <p className="text-muted-foreground mt-2">
            Raccolta completa dei brand con cui collaboriamo.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <LogoGridClient items={items} />
        </div>
      </section>
      <SiteFooter/>
    </div>
    </>
  );
}
