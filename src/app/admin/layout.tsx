export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-[240px_1fr]">
      <aside className="border-r p-4 space-y-2">
        <div className="font-bold">Malavolta • Admin</div>
        <nav className="grid gap-2 text-sm">
          <a className="hover:underline" href="/admin">Dashboard</a>
          <a className="hover:underline" href="/admin/products">Prodotti</a>
          {/* aggiungi Ricambi, Servizi, Blog, Brand, Category, Media */}
        </nav>
      </aside>
      <main className="p-6">{children}</main>
    </div>
  );
}
