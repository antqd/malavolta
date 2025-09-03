"use client";

import useSWR from "swr";
import { api } from "@/lib/api";
import { BarChart3, Newspaper, Users, Package, Settings } from "lucide-react";

export default function AdminHome() {
  // Qui faccio un fetch a un endpoint tipo /admin/summary che il backend può fornirti
  const { data } = useSWR("/admin/summary", api<any>);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Pannello di Amministrazione</h1>
      <p className="text-muted-foreground">
        Benvenuto nell’area admin. Qui puoi gestire contenuti, prodotti e impostazioni del sito.
      </p>

      {/* cards riassuntive */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Post del Blog"
          value={data?.blogPosts ?? 0}
          icon={<Newspaper className="h-6 w-6 text-blue-600" />}
          href="/admin/blog"
        />
        <DashboardCard
          title="Prodotti"
          value={data?.products ?? 0}
          icon={<Package className="h-6 w-6 text-green-600" />}
          href="/admin/products"
        />
        <DashboardCard
          title="Team"
          value={data?.team ?? 0}
          icon={<Users className="h-6 w-6 text-purple-600" />}
          href="/admin/team"
        />
        <DashboardCard
          title="Impostazioni"
          value="Configura"
          icon={<Settings className="h-6 w-6 text-gray-600" />}
          href="/admin/settings/opening-hours"
        />
      </div>

      {/* sezione attività recenti */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Attività recenti</h2>
        <ul className="space-y-2 text-sm">
          {data?.recent?.length ? (
            data.recent.map((item: any, i: number) => (
              <li key={i} className="border rounded p-3 flex justify-between">
                <span>{item.message}</span>
                <span className="text-muted-foreground">{item.when}</span>
              </li>
            ))
          ) : (
            <li className="text-muted-foreground">Nessuna attività registrata</li>
          )}
        </ul>
      </div>
    </div>
  );
}

function DashboardCard({
  title,
  value,
  icon,
  href,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="border rounded-xl p-4 flex flex-col gap-2 hover:shadow transition"
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-medium">{title}</span>
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </a>
  );
}
