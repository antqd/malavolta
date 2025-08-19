"use client";

import { Menu, X, Truck } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
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
  url: "https://malavolta.com",
  src: "/malavolta-logo.png",
  alt: "Malavolta logo",
  title: "Malavolta",
};

const NAV_ITEMS = [
  { name: "Chi Siamo", link: "/chi-siamo" },
  { name: "Trattori", link: "/prodotti" },
  { name: "Ricambi", link: "/ricambi" },
  { name: "Servizi", link: "/servizi" },
  { name: "E-commerce", link: "/ecommerce" },
  { name: "Blog", link: "/blog" },
  { name: "Contatti", link: "/contatti" },
];

const AnimatedIndicatorNavbar = () => {
  const pathname = usePathname();
  const initial =
    NAV_ITEMS.find((i) => i.link === pathname)?.name ?? NAV_ITEMS[0].name;

  const [activeItem, setActiveItem] = useState(initial);

  const indicatorRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  // aggiorna activeItem quando cambia route
  useEffect(() => {
    const hit = NAV_ITEMS.find((i) => i.link === pathname);
    if (hit) setActiveItem(hit.name);
  }, [pathname]);

  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = document.querySelector(
        `[data-nav-item="${activeItem}"]`
      ) as HTMLElement | null;

      if (activeEl && indicatorRef.current && menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        const itemRect = activeEl.getBoundingClientRect();
        indicatorRef.current.style.width = `${itemRect.width}px`;
        indicatorRef.current.style.left = `${itemRect.left - menuRect.left}px`;
      }
    };

    // prima misura + al resize
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeItem]);

  return (
    <section className="py-4 bg-white">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Left WordMark */}
        <a href={NAV_LOGO.url} className="flex items-center gap-2">
          <Truck className="h-8 w-8 text-primary" />
          <span className="text-lg font-semibold tracking-tighter text-primary">
            {NAV_LOGO.title}
          </span>
        </a>

        {/* Desktop */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList
            ref={menuRef}
            className="relative rounded-4xl flex items-center gap-6 px-8 py-3"
          >
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.name}>
                {/* Link reale: NavigationMenuLink asChild => passa className/props al child */}
                <NavigationMenuLink asChild>
                  <Link
                    href={item.link}
                    data-nav-item={item.name}
                    onClick={() => setActiveItem(item.name)}
                    className={`relative cursor-pointer text-sm font-medium hover:bg-transparent ${
                      activeItem === item.name
                        ? "text-primary"
                        : "text-text-secondary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            {/* Active Indicator */}
            <div
              ref={indicatorRef}
              className="pointer-events-none absolute bottom-2 h-1 transition-all duration-300"
            >
              <div className="bg-secondary h-0.5 w-full rounded-t-none transition-all duration-300" />
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile */}
        <MobileNav activeItem={activeItem} setActiveItem={setActiveItem} />
      </nav>
    </section>
  );
};

export { AnimatedIndicatorNavbar };

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="group relative h-6 w-6">
      <div className="absolute inset-0">
        <Menu
          className={`text-text-secondary group-hover:text-primary absolute transition-all duration-300 ${
            isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <X
          className={`text-text-secondary group-hover:text-primary absolute transition-all duration-300 ${
            isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

const MobileNav = ({
  activeItem,
  setActiveItem,
}: {
  activeItem: string;
  setActiveItem: (item: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block lg:hidden">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button aria-label="Apri menu">
            <AnimatedHamburger isOpen={isOpen} />
          </button>
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="relative -left-4 -top-4 block w-screen max-w-md overflow-hidden rounded-xl p-0 lg:hidden bg-white"
        >
          <ul className="bg-white text-primary w-full py-4">
            {NAV_ITEMS.map((navItem) => (
              <li key={navItem.name}>
                <Link
                  href={navItem.link}
                  onClick={() => {
                    setActiveItem(navItem.name);
                    setIsOpen(false); // chiude il popover dopo la navigazione
                  }}
                  className={`text-primary flex items-center border-l-[3px] px-6 py-4 text-sm font-medium transition-all duration-75 ${
                    activeItem === navItem.name
                      ? "border-secondary text-primary"
                      : "text-text-secondary hover:text-primary border-transparent"
                  }`}
                >
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};
