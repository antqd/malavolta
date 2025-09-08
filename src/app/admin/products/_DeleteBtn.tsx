"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

export default function DeleteBtn({ id }: { id: string }) {
  const [pending, start] = useTransition();
  const router = useRouter();

  return (
    <button
      className="text-red-600 disabled:opacity-60"
      disabled={pending}
      onClick={() =>
        start(async () => {
          const ok = confirm("Eliminare questo prodotto?");
          if (!ok) return;
          const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
          if (res.ok) router.refresh();
          else alert("Errore durante l'eliminazione");
        })
      }
    >
      {pending ? "Elim…" : "Elimina"}
    </button>
  );
}
