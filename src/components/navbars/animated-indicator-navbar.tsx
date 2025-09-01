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
  { name: "Trattori", link: "/prodotti" },
  { name: "Ricambi", link: "/ricambi" },
  { name: "Servizi", link: "/servizi" },
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
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeItem]);

  return (
    <section className="py-4 bg-white">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={NAV_LOGO.url} className="flex items-center gap-3">
          <Image
            src={NAV_LOGO.src}
            alt="Malavolta"
            width={160}
            height={40}
            priority
            className="h-8 w-auto"
          />
          <span className="sr-only">Malavolta & Figlio</span> {/* per screen reader */}
          <span
            aria-hidden="true"
            className="text-lg font-semibold tracking-tight text-primary"
          >
            Malavolta & Figlio
          </span>
        </Link>

        {/* Desktop */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList
            ref={menuRef}
            className="relative flex items-center gap-6 px-2 py-1"
          >
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.link}
                    data-nav-item={item.name}
                    onClick={() => setActiveItem(item.name)}
                    className={`relative cursor-pointer text-sm font-medium ${
                      activeItem === item.name
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <div
              ref={indicatorRef}
              className="pointer-events-none absolute -bottom-0.5 h-0.5 bg-secondary transition-all duration-300"
            />
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile */}
        <MobileNav activeItem={activeItem} setActiveItem={setActiveItem} />
      </nav>
    </section>
  );
};

export { AnimatedIndicatorNavbar };

/* --- Mobile nav invariata --- */
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
          className="relative -left-4 -top-4 w-screen max-w-md rounded-xl p-0"
        >
          <ul className="bg-white py-4">
            {NAV_ITEMS.map((navItem) => (
              <li key={navItem.name}>
                <Link
                  href={navItem.link}
                  onClick={() => {
                    setActiveItem(navItem.name);
                    setIsOpen(false);
                  }}
                  className={`flex items-center border-l-[3px] px-6 py-4 text-sm font-medium transition-all ${
                    activeItem === navItem.name
                      ? "border-secondary text-primary"
                      : "border-transparent text-muted-foreground hover:text-primary"
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
