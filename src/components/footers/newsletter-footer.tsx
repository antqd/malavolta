import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const navigation = [
  {
    title: "Azienda",
    links: [
      { name: "Chi Siamo", href: "#" },
      { name: "La Nostra Storia", href: "#" },
      { name: "Team", href: "#" },
      { name: "Certificazioni", href: "#" },
    ],
  },
  {
    title: "Prodotti",
    links: [
      { name: "Semi", href: "#" },
      { name: "Fertilizzanti", href: "#" },
      { name: "Fitosanitari", href: "#" },
      { name: "Attrezzature", href: "#" },
    ],
  },
  {
    title: "Servizi",
    links: [
      { name: "Assistenza Tecnica", href: "#" },
      { name: "Consulenza", href: "#" },
      { name: "Formazione", href: "#" },
      { name: "E-commerce", href: "#" },
    ],
  },
  {
    title: "Supporto",
    links: [
      { name: "Contatti", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Garanzie", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

export const NewsletterFooter = () => {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-5 md:px-6">
        {/* Logo and newsletter section */}
        <div className="mb-10 flex flex-col items-start justify-between gap-10 border-b pb-10 sm:mb-16 sm:pb-12 md:flex-row">
          <div className="w-full max-w-full sm:max-w-sm">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-primary mb-2">AgroItalia</h1>
              <p className="text-sm text-muted-foreground">Soluzioni per l'Agricoltura</p>
            </div>
            
            <div className="mb-8">
              <h3 className="mb-2 text-lg font-semibold">Iscriviti alla Newsletter</h3>
              <p className="text-base text-muted-foreground">
                Ricevi aggiornamenti su prodotti, offerte e consigli agricoli
              </p>
            </div>

            {/* Newsletter subscription */}
            <div className="flex w-full max-w-full flex-col gap-3 sm:max-w-md sm:flex-row">
              <input
                type="email"
                placeholder="La tua email"
                className="flex h-12 flex-1 rounded-md border border-input bg-background px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:text-sm"
              />
              <button className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-2 text-base font-medium whitespace-nowrap text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 sm:h-10 sm:px-4 sm:text-sm">
                Iscriviti
              </button>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="w-full border-t pt-8 sm:border-t-0 sm:pt-0">
            <nav className="grid w-full grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 md:w-auto md:grid-cols-4">
              {navigation.map((section) => (
                <div key={section.title} className="min-w-[140px]">
                  <h2 className="mb-4 text-lg font-semibold">
                    {section.title}
                  </h2>
                  <ul className="space-y-3.5">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="inline-block py-1 text-muted-foreground transition-colors duration-200 hover:text-foreground active:text-primary"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="order-1 mb-6 flex w-full items-center justify-center gap-6 sm:justify-start md:order-2 md:mb-0 md:w-auto">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={`Visita la nostra pagina ${link.name}`}
                className="rounded-full p-3 text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground active:bg-accent/70"
                rel="noopener noreferrer"
                target="_blank"
              >
                <link.icon className="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>

          {/* Copyright - Below on mobile, left on desktop */}
          <p className="order-2 text-center text-sm text-muted-foreground sm:text-left md:order-1">
            © 2024 AgroItalia S.r.l. - Partita IVA: 12345678901 - Tutti i diritti riservati
          </p>
        </div>
      </div>
    </section>
  );
};