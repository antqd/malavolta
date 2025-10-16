"use client";

import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NAV_LOGO = {
  url: "/",
  src: "/images/logo.png", // <-- file in /public/images/logo.png
  alt: "Malavolta",
  title: "Malavolta",
};

const NAV_ITEMS = [
  { name: "Chi Siamo", link: "/chi-siamo" },
  { name: "Trattori Nuovi", link: "/trattori/nuovi" },
  { name: "Trattori Usati", link: "/trattori/usati" },
  { name: "Attrezzatura", link: "/attrezzatura" },
  { name: "Ricambi", link: "/ricambi" },
  { name: "Servizi", link: "/servizi" },
  { name: "Blog", link: "/blog" },
  { name: "Contatti", link: "/contatti" },
];

// === Config API ===
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://api.alfonsomalavolta.com";

// === Hook sessione minimale ===
function useSession() {
  const [authChecked, setAuthChecked] = useState(false);
  const [user, setUser] = useState<null | {
    id: string | number;
    name: string;
    email: string;
  }>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const r = await fetch(`${API_BASE}/api/auth/me`, {
          credentials: "include",
        });
        if (!alive) return;
        if (r.ok) {
          const data = await r.json();
          if (data?.user) setUser(data.user);
        }
      } catch {
        // silenzio: se fallisce, consideriamo non autenticato
      } finally {
        if (alive) setAuthChecked(true);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  return { user, authChecked };
}

const AnimatedIndicatorNavbar = () => {
  const pathname = usePathname();
  const { user, authChecked } = useSession();

  const [activeItem, setActiveItem] = useState<string>("");

  const indicatorRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  // aggiorna l'item attivo al cambio pagina
  useEffect(() => {
    if (pathname === "/") {
      setActiveItem("");
      return;
    }
    const hit = NAV_ITEMS.find((i) => i.link === pathname);
    setActiveItem(hit?.name ?? "");
  }, [pathname]);

  // posiziona l'indicatore sotto l'item attivo
  useEffect(() => {
    const updateIndicator = () => {
      if (!activeItem || !indicatorRef.current || !menuRef.current) return;
      const activeEl = document.querySelector(
        `[data-nav-item="${activeItem}"]`
      ) as HTMLElement | null;
      if (!activeEl) return;
      const menuRect = menuRef.current.getBoundingClientRect();
      const itemRect = activeEl.getBoundingClientRect();
      indicatorRef.current.style.width = `${itemRect.width}px`;
      indicatorRef.current.style.left = `${itemRect.left - menuRect.left}px`;
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeItem]);

  return (
    <section className="py-4 bg-white border-b">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={NAV_LOGO.url} className="flex items-center gap-3">
          <Image
            src={NAV_LOGO.src}
            alt={NAV_LOGO.alt}
            width={160}
            height={40}
            priority
            className="h-8 w-auto"
          />
          <span className="sr-only">Malavolta & Figlio</span>
          <span
            aria-hidden="true"
            className="text-lg font-semibold tracking-tight text-black"
          >
            Malavolta &amp; Figlio
          </span>
        </Link>

        {/* Desktop */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList
            ref={menuRef}
            className="relative flex items-center gap-6 px-2 py-1"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem === item.name;
              return (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.link}
                      data-nav-item={item.name}
                      onClick={() => setActiveItem(item.name)}
                      className={[
                        "relative cursor-pointer text-sm font-medium transition-colors",
                        isActive
                          ? "text-black"
                          : "text-gray-600 hover:text-black",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eeff00] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded",
                      ].join(" ")}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}

            {/* --- Accedi: mostrato solo se NON autenticato (niente flash finché non sappiamo) --- */}
            {authChecked && !user && (
              <NavigationMenuItem key="accedi">
                <NavigationMenuLink asChild>
                  <Link
                    href="/login"
                    data-nav-item="accedi"
                    className={[
                      "relative cursor-pointer text-sm font-medium transition-colors px-3 py-1.5 rounded border",
                      "border-[#ffae00] bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:opacity-90",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eeff00] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                    ].join(" ")}
                  >
                    Accedi
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}

            {/* Indicatore giallo */}
            {activeItem && (
              <div
                ref={indicatorRef}
                className="pointer-events-none absolute -bottom-0.5 h-0.5 bg-[#fffb00fe] transition-all duration-300"
              />
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile */}
        <MobileNav
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isAuthed={!!user}
          authChecked={authChecked}
        />
      </nav>
    </section>
  );
};

export { AnimatedIndicatorNavbar };

/* --- Mobile nav --- */
const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => (
  <div className="group relative h-6 w-6">
    <Menu
      className={`absolute transition-all duration-300 ${
        isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
      }`}
    />
    <X
      className={`absolute transition-all duration-300 ${
        isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
      }`}
    />
  </div>
);

const MobileNav = ({
  activeItem,
  setActiveItem,
  isAuthed,
  authChecked,
}: {
  activeItem: string;
  setActiveItem: (item: string) => void;
  isAuthed: boolean;
  authChecked: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // sincronizza stato anche su mobile
  useEffect(() => {
    if (pathname === "/") {
      setActiveItem("");
      return;
    }
    const hit = NAV_ITEMS.find((i) => i.link === pathname);
    setActiveItem(hit?.name ?? "");
  }, [pathname, setActiveItem]);

  return (
    <div className="block lg:hidden">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button aria-label="Apri menu" className="p-2">
            <AnimatedHamburger isOpen={isOpen} />
          </button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="relative -left-4 -top-4 w-screen max-w-md rounded-xl p-0"
        >
          <ul className="bg-white py-4">
            {NAV_ITEMS.map((navItem) => {
              const isActive = activeItem === navItem.name;
              return (
                <li key={navItem.name}>
                  <Link
                    href={navItem.link}
                    onClick={() => {
                      setActiveItem(navItem.name);
                      setIsOpen(false);
                    }}
                    className={[
                      "flex items-center border-l-[3px] px-6 py-4 text-sm font-medium transition-all",
                      isActive
                        ? "border-[#fde040] text-black"
                        : "border-transparent text-gray-600 hover:text-black",
                    ].join(" ")}
                  >
                    {navItem.name}
                  </Link>
                </li>
              );
            })}

            {/* Bottone accedi mobile – mostrato solo se non autenticato */}
            {authChecked && !isAuthed && (
              <li className="mt-2 px-6">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="block text-center rounded border border-[#ffae00] bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
                >
                  Accedi
                </Link>
              </li>
            )}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};
