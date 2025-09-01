import PageHero from "@/components/sections/page-hero";
import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import SiteFooter from "@/components/footers/newsletter-footer";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MapEmbed from "@/components/MapEmbed";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  MessageSquareText,
  Wrench,
  Shield,
} from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContattiPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />

      {/* HERO riutilizzabile */}
      <PageHero
        titleWhite="CONTATTI"
        titleGold="MALAVOLTA"
        description="Siamo a disposizione per post-vendita, assistenza, consulenze e offerte su nuovo & usato."
        imageSrc="/images/postvendita.png"
        badges={[
          { label: "+39 0983 497245", icon: Phone },
          { label: "Lun–Ven 8:30–13:00 / 15:00–18:30", icon: Clock },
          { label: "Corigliano-Rossano (CS)", icon: MapPin },
        ]}
      />

      {/* CONTENUTO */}
      <section className="py-14">
        <div className="container grid gap-8 lg:grid-cols-3">
          {/* Colonna sinistra: recapiti + orari + quick actions */}
          <div className="space-y-6 lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Recapiti</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Telefono</div>
                    <a
                      className="text-muted-foreground hover:underline"
                      href="tel:+390983497245"
                    >
                      +39 0983 857079
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquareText className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <a
                      className="text-muted-foreground hover:underline"
                      href="https://wa.me/3355993930"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +39 3355993930
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a
                      className="text-muted-foreground hover:underline"
                      href="mailto:info@malavolta.com"
                    >
                      malavoltafa@yahoo.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Sede</div>
                    <div className="text-muted-foreground">
                      C/da Losina SS 106 BIS
                      <br />
                      87064 Corigliano-Rossano (CS)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Orari di apertura</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3 text-sm">
                <div className="text-muted-foreground">Lunedì–Venerdì</div>
                <div>8:30–13:00 • 15:00–18:30</div>
                <div className="text-muted-foreground">Sabato</div>
                <div>8:30–12:30</div>
                <div className="text-muted-foreground">Domenica</div>
                <div>Chiuso</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Richieste veloci</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <a href="/servizi?motivo=Post%20Vendita">
                  <Button className="w-full" variant="secondary">
                    <Wrench className="h-4 w-4 mr-2" /> Post Vendita
                  </Button>
                </a>
                <a href="/servizi?motivo=Consulenza">
                  <Button className="w-full" variant="secondary">
                    <Shield className="h-4 w-4 mr-2" /> Consulenza
                  </Button>
                </a>
                <a href="/servizi?motivo=Finanziamenti">
                  <Button className="w-full" variant="secondary">
                    💶 <span className="ml-2">Finanziamenti</span>
                  </Button>
                </a>
                <a href="/servizi?motivo=Officina">
                  <Button className="w-full" variant="secondary">
                    🔧 <span className="ml-2">Officina</span>
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Colonna destra: form + mappa */}
          <div className="space-y-6 lg:col-span-2">
            {/* FORM */}
            <Card id="form-contatti">
              <CardHeader>
                <CardTitle>Scrivici un messaggio</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* MAPPA */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Dove siamo</CardTitle>
                <Badge variant="secondary" className="text-xs">
                  Apri su Google Maps
                </Badge>
              </CardHeader>
              <Card>
                <CardHeader>
                  <CardTitle>Dove siamo</CardTitle>
                </CardHeader>
                <CardContent>
                  <MapEmbed query="Alfonso Malavolta S.r.l., S.S. 106 Zona Industriale, Corigliano-Rossano (CS)" />
                </CardContent>
              </Card>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
