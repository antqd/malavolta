import { cookies } from "next/headers";

async function getMe() {
  const r = await fetch("http://localhost:3000/api/auth/me", {
    cache: "no-store",
    headers: { Cookie: cookies().toString() },
  });
  if (!r.ok) return null;
  return r.json();
}

export default async function AdminHome() {
  const me = await getMe();
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
      <p className="text-gray-600">Benvenuto {me?.user?.name || "admin"} 👋</p>
    </div>
  );
}
