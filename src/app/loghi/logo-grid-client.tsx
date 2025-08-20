"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

type Item = { src: string; alt: string };

export default function LogoGridClient({ items }: { items: Item[] }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter((i) => i.alt.toLowerCase().includes(s));
  }, [items, q]);

  return (
    <>
      <div className="max-w-xl mb-6">
        <Input
          placeholder="Cerca marca (es. New Holland, BCS, Kuhn...)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {filtered.map((i) => (
          <Card
            key={i.src}
            className="p-4 flex items-center justify-center hover:shadow-md transition"
            title={i.alt}
          >
            <Image
              src={i.src}
              alt={i.alt}
              width={180}
              height={100}
              className="object-contain opacity-85 hover:opacity-100 transition-opacity"
            />
          </Card>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mt-6">
        Mostrati {filtered.length} loghi.
      </p>
    </>
  );
}
