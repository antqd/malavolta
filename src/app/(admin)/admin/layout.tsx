import Link from "next/link";
import "../../globals.css"; // assicurati di importare gli stili globali


export default function AdminLayout({ children }: { children: React.ReactNode }) {
return (
<div className="min-h-screen bg-gray-50">
<header className="bg-white border-b">
<div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-4">
<Link href="/admin" className="font-semibold">Admin</Link>
<nav className="ml-auto flex items-center gap-4 text-sm">
<Link href="/admin/trattori/usati">Usati</Link>
<Link href="/admin/trattori/nuovi">Nuovi</Link>
<Link href="/admin/brands">Brands</Link>
<Link href="/admin/categories">Categories</Link>
<Link href="/admin/services">Services</Link>
<Link href="/admin/blog">Blog</Link>
</nav>
</div>
</header>
<main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
</div>
);
}