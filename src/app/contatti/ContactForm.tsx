"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";

export default function ContactForm() {
  const [motivo, setMotivo] = useState("");

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget).entries());
        console.log("contatti:", data);
        alert("Richiesta inviata. Ti risponderemo al più presto!");
        (e.currentTarget as HTMLFormElement).reset();
        setMotivo("");
      }}
    >
      {/* honeypot anti-bot */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="nome" placeholder="Nome" required />
        <Input name="cognome" placeholder="Cognome" required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input type="email" name="email" placeholder="Email" required />
        <Input type="tel" name="telefono" placeholder="Telefono" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Motivo del contatto</label>
          <select
            name="motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            className="w-full p-3 border border-input rounded-md bg-background"
          >
            <option value="">Seleziona…</option>
            <option>Post Vendita</option>
            <option>Consulenza</option>
            <option>Finanziamenti</option>
            <option>Officina</option>
            <option>Ricambi</option>
            <option>Altro</option>
          </select>
        </div>
        <Input name="azienda" placeholder="Azienda (opzionale)" />
      </div>

      <Textarea name="messaggio" placeholder="Raccontaci la tua richiesta…" className="min-h-[140px]" required />

      <div className="flex flex-wrap gap-3">
        <Button type="submit">Invia richiesta</Button>
        <a href="tel:+390983497245">
          <Button type="button" variant="outline">
            <Phone className="h-4 w-4 mr-2" />
            Chiama ora
          </Button>
        </a>
        <a href="https://wa.me/393491732415" target="_blank" rel="noreferrer">
          <Button type="button" variant="secondary">WhatsApp</Button>
        </a>
      </div>
    </form>
  );
}
