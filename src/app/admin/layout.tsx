export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid md:grid-cols-[240px_1fr]">
      <aside className="hidden md:block border-r">
        <nav className="p-4 space-y-1 text-sm">
          {[
            ["Dashboard", "/admin"],
            ["Blog", "/admin/blog"],
            ["Prodotti/Trattori", "/admin/products"],
            ["Ricambi", "/admin/spare-parts"],
            ["Team", "/admin/team"],
            ["Media", "/admin/media"],
            ["Partner/Loghi", "/admin/partners"],
            ["Apertura/Info", "/admin/settings/opening-hours"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="block rounded px-2 py-1 hover:bg-gray-100">{label}</a>
          ))}
        </nav>
      </aside>
      <main className="p-4 md:p-8">{children}</main>
    </div>
  );
}
