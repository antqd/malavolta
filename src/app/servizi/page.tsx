import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Wrench, 
  Leaf, 
  Settings, 
  GraduationCap, 
  FlaskConical, 
  Droplets, 
  Truck, 
  HeadphonesIcon,
  MapPin,
  Clock,
  Phone,
  CheckCircle,
  Star,
  Users,
  Calendar,
  Shield
} from "lucide-react"

export default function ServiziPage() {
  const services = [
    {
      icon: Wrench,
      title: "Assistenza Tecnica Specializzata",
      description: "Supporto tecnico professionale per macchinari e attrezzature agricole con interventi rapidi e qualificati.",
      benefits: ["Tecnici certificati", "Interventi in 24h", "Garanzia sui lavori"],
      process: "Chiamata → Diagnosi → Preventivo → Riparazione → Collaudo"
    },
    {
      icon: Leaf,
      title: "Consulenza Agronomica Personalizzata",
      description: "Consulenza tecnica specializzata per ottimizzare la produttività e la sostenibilità delle coltivazioni.",
      benefits: ["Analisi personalizzate", "Piani colturali", "Monitoraggio costante"],
      process: "Sopralluogo → Analisi → Progetto → Implementazione → Follow-up"
    },
    {
      icon: Settings,
      title: "Manutenzione Preventiva",
      description: "Programmi di manutenzione preventiva per mantenere i tuoi macchinari sempre efficienti e produttivi.",
      benefits: ["Riduzione guasti", "Maggiore durata", "Piani personalizzati"],
      process: "Pianificazione → Controlli → Manutenzione → Report → Programmazione"
    },
    {
      icon: GraduationCap,
      title: "Formazione e Training",
      description: "Corsi di formazione per operatori agricoli su tecniche moderne, sicurezza e uso ottimale dei macchinari.",
      benefits: ["Certificazioni", "Corsi pratici", "Aggiornamenti normativi"],
      process: "Valutazione → Programma → Formazione → Verifica → Certificazione"
    },
    {
      icon: FlaskConical,
      title: "Analisi Terreno e Raccolti",
      description: "Servizi di analisi chimico-fisiche del terreno e controllo qualità dei raccolti per decisioni informate.",
      benefits: ["Laboratori accreditati", "Report dettagliati", "Raccomandazioni specifiche"],
      process: "Campionamento → Analisi → Interpretazione → Raccomandazioni → Monitoraggio"
    },
    {
      icon: Droplets,
      title: "Progettazione Impianti Irrigazione",
      description: "Progettazione e installazione di sistemi di irrigazione efficienti per ottimizzare l'uso dell'acqua.",
      benefits: ["Risparmio idrico", "Automazione", "Efficienza energetica"],
      process: "Rilievo → Progetto → Installazione → Taratura → Manutenzione"
    },
    {
      icon: Truck,
      title: "Noleggio Macchinari",
      description: "Servizio di noleggio macchinari agricoli moderni per esigenze stagionali o progetti specifici.",
      benefits: ["Flotta moderna", "Tariffe competitive", "Assistenza inclusa"],
      process: "Richiesta → Valutazione → Contratto → Consegna → Ritiro"
    },
    {
      icon: HeadphonesIcon,
      title: "Supporto Post-Vendita",
      description: "Assistenza completa post-vendita con supporto tecnico, ricambi originali e garanzie estese.",
      benefits: ["Ricambi originali", "Garanzie estese", "Supporto continuo"],
      process: "Registrazione → Supporto → Manutenzione → Ricambi → Garanzia"
    }
  ]

  const certifications = [
    {
      icon: Shield,
      title: "Certificazione ISO 9001",
      description: "Qualità certificata nei processi e servizi"
    },
    {
      icon: Leaf,
      title: "Abilitazione Fitosanitaria",
      description: "Autorizzazione per consulenze agronomiche"
    },
    {
      icon: Wrench,
      title: "Tecnici Specializzati",
      description: "Team formato dalle migliori case costruttrici"
    },
    {
      icon: GraduationCap,
      title: "Centro Formazione Accreditato",
      description: "Ente accreditato per la formazione professionale"
    }
  ]

  const coverageAreas = [
    {
      area: "Lombardia",
      responseTime: "2-4 ore",
      coverage: "Completa"
    },
    {
      area: "Piemonte",
      responseTime: "4-6 ore",
      coverage: "Province principali"
    },
    {
      area: "Veneto",
      responseTime: "6-8 ore",
      coverage: "Zone agricole principali"
    },
    {
      area: "Emilia-Romagna",
      responseTime: "4-8 ore",
      coverage: "Pianura padana"
    }
  ]

  const testimonials = [
    {
      name: "Marco Bianchi",
      role: "Azienda Agricola San Giuseppe",
      content: "Il servizio di assistenza tecnica è sempre tempestivo e professionale. I loro tecnici conoscono perfettamente i nostri macchinari.",
      rating: 5
    },
    {
      name: "Elena Rossi",
      role: "Cooperativa Valle Verde",
      content: "La consulenza agronomica ci ha permesso di aumentare la resa del 15% riducendo i costi. Servizio eccellente.",
      rating: 5
    },
    {
      name: "Giuseppe Ferrari",
      role: "Azienda Agricola Il Mulino",
      content: "Il contratto di manutenzione preventiva ci ha fatto risparmiare molto sui guasti imprevisti. Molto soddisfatto.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">I Nostri Servizi</h1>
            <p className="text-xl mb-8 text-white/90">
              Soluzioni complete per il settore agricolo: dall'assistenza tecnica alla consulenza specializzata, 
              supportiamo la tua attività con competenza e professionalità.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Assistenza 24/7
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Tecnici Certificati
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                Copertura Nord Italia
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">I Nostri Servizi Specializzati</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Offriamo una gamma completa di servizi professionali per soddisfare ogni esigenza del settore agricolo moderno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary">Vantaggi:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-accent mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-border/50">
                    <h4 className="font-semibold text-xs text-primary mb-1">Processo:</h4>
                    <p className="text-xs text-muted-foreground">{service.process}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Come Lavoriamo</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Il nostro processo strutturato garantisce risultati ottimali e massima soddisfazione del cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Contatto", description: "Richiesta di assistenza via telefono, email o form online" },
              { step: "2", title: "Valutazione", description: "Sopralluogo e analisi tecnica della problematica" },
              { step: "3", title: "Preventivo", description: "Proposta dettagliata con tempi e costi chiari" },
              { step: "4", title: "Intervento", description: "Esecuzione del servizio con personale qualificato" },
              { step: "5", title: "Follow-up", description: "Controllo qualità e supporto post-intervento" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Competenze Tecniche e Certificazioni</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              La nostra esperienza e le certificazioni ottenute garantiscono servizi di alta qualità e conformi agli standard di settore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <cert.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg text-primary">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{cert.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-card rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">I Nostri Numeri</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <p className="text-muted-foreground">Anni di Esperienza</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Clienti Serviti</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Assistenza Disponibile</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Soddisfazione Cliente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Aree di Copertura</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Serviamo il Nord Italia con tempi di risposta garantiti e copertura capillare delle principali zone agricole.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {coverageAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    {area.area}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    Risposta: {area.responseTime}
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {area.coverage}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto border border-border/50">
              <div className="flex items-center justify-center text-primary mb-4">
                <Phone className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Servizio Emergenze</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Disponibili 24/7 per emergenze e guasti urgenti
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Chiama Ora: 800-123-456
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Richiedi una Consulenza</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contattaci per una valutazione gratuita delle tue esigenze e scopri come possiamo supportare la tua attività agricola.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 border-border/50">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-primary">Consulenza Gratuita</CardTitle>
                <CardDescription>Compila il form per essere ricontattato dal nostro team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Nome" />
                  <Input placeholder="Cognome" />
                </div>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Telefono" type="tel" />
                <Input placeholder="Azienda" />
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Servizio di interesse:</label>
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option>Seleziona un servizio</option>
                    <option>Assistenza Tecnica</option>
                    <option>Consulenza Agronomica</option>
                    <option>Manutenzione</option>
                    <option>Formazione</option>
                    <option>Analisi Terreno</option>
                    <option>Impianti Irrigazione</option>
                    <option>Noleggio Macchinari</option>
                  </select>
                </div>
                <Textarea placeholder="Descrivi la tua richiesta..." className="min-h-[100px]" />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Calendar className="w-4 h-4 mr-2" />
                  Richiedi Consulenza Gratuita
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="p-6 bg-accent/5 border-accent/20">
                <CardHeader className="text-center pb-4">
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-xl text-primary">Perché Sceglierci</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary">Esperienza Consolidata</h4>
                      <p className="text-sm text-muted-foreground">Oltre 25 anni nel settore agricolo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary">Team Qualificato</h4>
                      <p className="text-sm text-muted-foreground">Tecnici certificati e aggiornati</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary">Copertura Capillare</h4>
                      <p className="text-sm text-muted-foreground">Servizio in tutto il Nord Italia</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary">Assistenza 24/7</h4>
                      <p className="text-sm text-muted-foreground">Supporto sempre disponibile</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-primary text-white">
                <CardHeader className="text-center pb-4">
                  <Phone className="w-12 h-12 text-white mx-auto mb-4" />
                  <CardTitle className="text-xl">Contatto Diretto</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-white/90">Hai bisogno di supporto immediato?</p>
                  <div className="space-y-2">
                    <Button variant="secondary" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      800-123-456
                    </Button>
                    <p className="text-sm text-white/80">Lun-Ven 8:00-18:00 | Sab 8:00-12:00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Cosa Dicono i Nostri Clienti</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              La soddisfazione dei nostri clienti è la nostra migliore referenza. Scopri le loro esperienze con i nostri servizi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="space-y-4">
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic text-center">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="text-center border-t border-border/50 pt-4">
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Footer */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Rimani Aggiornato</h2>
            <p className="text-xl text-white/90 mb-8">
              Iscriviti alla nostra newsletter per ricevere aggiornamenti sui servizi, consigli tecnici e novità del settore agricolo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Il tuo indirizzo email" 
                type="email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Iscriviti
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              Rispettiamo la tua privacy. Nessuno spam, solo contenuti di valore.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}