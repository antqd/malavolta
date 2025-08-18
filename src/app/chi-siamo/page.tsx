import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { AnimatedIndicatorNavbar } from "@/components/ui/animated-indicator-navbar"
import { CalendarDays, Users, TrendingUp, Award, Mail, Phone, MapPin, Tractor, Wheat, Leaf, Heart } from "lucide-react"

export default function ChiSiamo() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Dal 1985 al vostro servizio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              La Nostra Storia
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Tre generazioni di passione per l'agricoltura. Da oltre 35 anni, la nostra famiglia 
              si dedica con impegno e innovazione al sostegno degli agricoltori italiani, 
              fornendo soluzioni all'avanguardia per un'agricoltura sostenibile e produttiva.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-primary/20">
              <CardContent className="p-6">
                <Wheat className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tradizione</h3>
                <p className="text-muted-foreground">
                  Fondata nel 1985, portiamo avanti i valori dell'agricoltura tradizionale italiana
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-secondary/20">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovazione</h3>
                <p className="text-muted-foreground">
                  Investiamo costantemente in tecnologie avanzate per l'agricoltura del futuro
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-accent/20">
              <CardContent className="p-6">
                <Leaf className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sostenibilità</h3>
                <p className="text-muted-foreground">
                  Promuoviamo pratiche agricole rispettose dell'ambiente e del territorio
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              La Nostra Evoluzione
            </h2>
            <p className="text-xl text-muted-foreground">
              Un percorso di crescita continua nel settore agricolo
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                  1985
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold mb-2">Fondazione dell'Azienda</h3>
                  <p className="text-muted-foreground">
                    Giuseppe Rossi fonda l'azienda con l'obiettivo di fornire attrezzature agricole 
                    di qualità agli agricoltori della regione. Inizia con un piccolo magazzino e 
                    grande passione per il settore.
                  </p>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                  1995
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold mb-2">Espansione dei Servizi</h3>
                  <p className="text-muted-foreground">
                    L'azienda si espande includendo servizi di assistenza tecnica e consulenza 
                    agronomica. Vengono assunti i primi tecnici specializzati e si apre 
                    il secondo punto vendita.
                  </p>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                  2005
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold mb-2">Innovazione Tecnologica</h3>
                  <p className="text-muted-foreground">
                    Marco Rossi, seconda generazione, introduce le prime tecnologie digitali 
                    per l'agricoltura di precisione. L'azienda diventa pioniera nell'uso di 
                    GPS e sistemi automatizzati.
                  </p>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                  2015
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold mb-2">Sostenibilità e Ambiente</h3>
                  <p className="text-muted-foreground">
                    Lancio della divisione "Agricoltura Sostenibile" con focus su tecnologie 
                    eco-compatibili, riduzione dell'impatto ambientale e ottimizzazione delle 
                    risorse idriche.
                  </p>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                  2020
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold mb-2">E-commerce e Digitalizzazione</h3>
                  <p className="text-muted-foreground">
                    Avvio della piattaforma e-commerce e servizi digitali. L'azienda si adatta 
                    rapidamente alle nuove esigenze del mercato, mantenendo sempre il contatto 
                    diretto con i clienti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Il Nostro Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Professionisti appassionati al servizio dell'agricoltura
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Giuseppe Rossi</h3>
                <p className="text-secondary font-medium mb-2">Fondatore e CEO</p>
                <p className="text-muted-foreground text-sm">
                  Oltre 35 anni di esperienza nel settore agricolo. Visionario e innovatore, 
                  ha guidato l'azienda dalla sua fondazione fino al successo odierno.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Marco Rossi</h3>
                <p className="text-secondary font-medium mb-2">Direttore Tecnico</p>
                <p className="text-muted-foreground text-sm">
                  Ingegnere Agrario specializzato in tecnologie digitali. Responsabile 
                  dell'innovazione tecnologica e dello sviluppo di nuove soluzioni.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Elena Verdi</h3>
                <p className="text-secondary font-medium mb-2">Responsabile Clienti</p>
                <p className="text-muted-foreground text-sm">
                  Esperta in relazioni commerciali e assistenza clienti. Garantisce 
                  un servizio personalizzato e di qualità per ogni esigenza.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                La Nostra Missione
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                La nostra missione è supportare gli agricoltori italiani fornendo soluzioni 
                innovative, sostenibili e di alta qualità. Crediamo in un'agricoltura che 
                rispetti l'ambiente e produca cibo sano per le future generazioni.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Qualità Certificata</h3>
                    <p className="text-muted-foreground">
                      Tutti i nostri prodotti sono certificati e garantiti per offrire 
                      le migliori performance sul campo.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Assistenza Dedicata</h3>
                    <p className="text-muted-foreground">
                      Il nostro team di esperti è sempre disponibile per consulenze 
                      personalizzate e supporto tecnico.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sostenibilità Ambientale</h3>
                    <p className="text-muted-foreground">
                      Promuoviamo pratiche agricole sostenibili per proteggere 
                      l'ambiente e le risorse naturali.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">I Nostri Valori</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                      <span>Tradizione e innovazione in equilibrio</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                      <span>Rispetto per l'ambiente e la natura</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                      <span>Qualità senza compromessi</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                      <span>Relazioni durature con i clienti</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                      <span>Crescita continua e formazione</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              I Nostri Numeri
            </h2>
            <p className="text-xl text-muted-foreground">
              Risultati che parlano della nostra esperienza e affidabilità
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-primary/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarDays className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">35+</div>
                <p className="text-muted-foreground">Anni di Esperienza</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-secondary/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">2,500+</div>
                <p className="text-muted-foreground">Clienti Soddisfatti</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tractor className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">15,000</div>
                <p className="text-muted-foreground">Ettari Serviti</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
                <p className="text-muted-foreground">Prodotti Venduti</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Inizia il Tuo Percorso con Noi
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Scopri come la nostra esperienza e innovazione possono 
                trasformare la tua attività agricola
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Contattaci Ora
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Visita il Catalogo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Footer */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Rimani Aggiornato
            </h2>
            <p className="text-muted-foreground">
              Iscriviti alla nostra newsletter per ricevere consigli, novità e offerte esclusive
            </p>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="La tua email"
                  className="flex-1"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Iscriviti
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Rispettiamo la tua privacy. Puoi annullare l'iscrizione in qualsiasi momento.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">Contatti</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+39 0123 456789</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@aziendaagricola.it</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Via dei Campi 123, 12345 Paese (PR)</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Orari</h3>
              <div className="space-y-1">
                <p>Lunedì - Venerdì: 8:00 - 18:00</p>
                <p>Sabato: 8:00 - 12:00</p>
                <p>Domenica: Chiuso</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Seguici</h3>
              <p className="mb-4">
                Resta connesso con noi sui social media per aggiornamenti e consigli
              </p>
            </div>
          </div>
          
          <Separator className="my-8 bg-primary-foreground/20" />
          
          <div className="text-center">
            <p>&copy; 2024 Azienda Agricola. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}