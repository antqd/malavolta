// src/app/(auth)/login/page.tsx
"use client";

import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, start] = useTransition();
  const search = useSearchParams();
  const router = useRouter();
  const redirect = search.get("redirect") || "/admin";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) router.replace(redirect);
    else alert("Credenziali non valide");
  }

  return (
    <div className="min-h-screen grid place-items-center p-6">
      <form onSubmit={onSubmit} className="border rounded-lg p-6 w-full max-w-sm grid gap-3">
        <h1 className="text-xl font-semibold">Accedi</h1>
        <input className="border rounded px-3 py-2" placeholder="Email"
               value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input className="border rounded px-3 py-2" placeholder="Password" type="password"
               value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button disabled={pending} className="border rounded px-4 py-2">
          {pending ? "Accesso..." : "Entra"}
        </button>
      </form>
    </div>
  );
}
