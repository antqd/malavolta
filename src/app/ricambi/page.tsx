import { Search, Wrench, Truck, Shield, Clock, CheckCircle, ArrowRight, Filter, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";

interface MachineryBrand {
  name: string
  logo?: string
  description: string
  popular: boolean
}

interface PartsCategory {
  name: string
  icon: typeof Wrench
  description: string
  itemCount: number
  featured: boolean
}

interface FeaturedPart {
  code: string
  name: string
  category: string
  brand: string
  price: string
  compatibility: string[]
  inStock: boolean
  rating: number
  image?: string
}

const machineryBrands: MachineryBrand[] = [
  {
    name: "John Deere",
    description: "Ricambi originali e compatibili per trattori e mietitrebbie",
    popular: true
  },
  {
    name: "New Holland",
    description: "Componenti per tutta la gamma di macchinari agricoli",
    popular: true
  },
  {
    name: "Case IH",
    description: "Parti di ricambio per trattori e attrezzature Case IH",
    popular: true
  },
  {
    name: "Massey Ferguson",
    description: "Ricambi per la storica marca britannica",
    popular: false
  },
  {
    name: "Fendt",
    description: "Componenti premium per trattori Fendt",
    popular: false
  },
  {
    name: "Claas",
    description: "Ricambi per mietitrebbie e macchine da foraggio",
    popular: false
  }
]

const partsCategories: PartsCategory[] = [
  {
    name: "Motori e Componenti",
    icon: Wrench,
    description: "Pistoni, bielle, valvole, guarnizioni motore",
    itemCount: 2847,
    featured: true
  },
  {
    name: "Sistemi di Trasmissione",
    icon: Truck,
    description: "Frizioni, cambi, differenziali, semiassi",
    itemCount: 1923,
    featured: true
  },
  {
    name: "Impianti Idraulici",
    icon: Shield,
    description: "Pompe, cilindri, tubi flessibili, valvole",
    itemCount: 3156,
    featured: true
  },
  {
    name: "Pneumatici e Cerchioni",
    icon: Clock,
    description: "Pneumatici agricoli, cerchioni, camere d'aria",
    itemCount: 892,
    featured: false
  },
  {
    name: "Filtri",
    icon: Filter,
    description: "Filtri aria, olio, carburante, idraulici",
    itemCount: 1564,
    featured: false
  },
  {
    name: "Oli e Lubrificanti",
    icon: CheckCircle,
    description: "Oli motore, idraulici, grassi, additivi",
    itemCount: 387,
    featured: false
  }
]

const featuredParts: FeaturedPart[] = [
  {
    code: "RE68766",
    name: "Filtro Idraulico",
    category: "Filtri",
    brand: "John Deere",
    price: "€45,90",
    compatibility: ["6030", "7030", "8030"],
    inStock: true,
    rating: 4.8
  },
  {
    code: "87840244",
    name: "Disco Frizione",
    category: "Trasmissione",
    brand: "New Holland",
    price: "€234,50",
    compatibility: ["T6000", "T7000"],
    inStock: true,
    rating: 4.9
  },
  {
    code: "47135764",
    name: "Pompa Idraulica",
    category: "Idraulica",
    brand: "Case IH",
    price: "€1.245,00",
    compatibility: ["Puma 160", "Puma 180"],
    inStock: false,
    rating: 4.7
  },
  {
    code: "VPD6006",
    name: "Kit Guarnizioni Motore",
    category: "Motori",
    brand: "Massey Ferguson",
    price: "€189,90",
    compatibility: ["6400", "6500"],
    inStock: true,
    rating: 4.6
  }
]

export default function RicambiPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 max-w-6xl">
          <div className="text-center space-y-6">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              Catalogo Ricambi Professionale
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold font-display">
              Ricambi e Componenti
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Oltre 15.000 ricambi originali e compatibili per tutte le principali marche di macchinari agricoli. 
              Consegna rapida e assistenza tecnica specializzata.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Cerca per codice ricambio, marca o modello..."
                  className="pl-12 py-4 text-lg bg-white/95 border-white/30 focus:border-white focus:ring-white"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90">
                  Cerca
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-muted/50">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">15.000+</div>
              <div className="text-sm text-muted-foreground">Ricambi Disponibili</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Marche Supportate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">Consegna Express</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Disponibilità</div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Brands */}
      <section className="py-16">
        <div className="container max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-primary">Principali Marche Supportate</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ricambi originali e compatibili per tutte le principali marche di trattori e macchinari agricoli
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machineryBrands.map((brand) => (
              <Card key={brand.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{brand.name}</CardTitle>
                    {brand.popular && (
                      <Badge className="bg-accent text-white">Popolare</Badge>
                    )}
                  </div>
                  <CardDescription>{brand.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Vedi Ricambi
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parts Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-primary">Categorie Ricambi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Esplora il nostro vasto catalogo organizzato per categorie tecniche specializzate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partsCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Card key={category.name} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${category.featured ? 'ring-2 ring-primary/20' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
                          <IconComponent className="h-6 w-6 text-primary group-hover:text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{category.name}</CardTitle>
                          {category.featured && (
                            <Badge variant="secondary" className="mt-1">In Evidenza</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="mt-4">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground">{category.itemCount.toLocaleString()} articoli</span>
                      <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                        Esplora
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Parts */}
      <section className="py-16">
        <div className="container max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-primary">Ricambi in Evidenza</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I ricambi più richiesti con disponibilità immediata e spedizione rapida
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredParts.map((part) => (
              <Card key={part.code} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <Badge variant="outline" className="text-xs">{part.code}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">{part.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{part.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {part.brand} • {part.category}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Compatibile con:</div>
                    <div className="flex flex-wrap gap-1">
                      {part.compatibility.slice(0, 2).map((model) => (
                        <Badge key={model} variant="secondary" className="text-xs">
                          {model}
                        </Badge>
                      ))}
                      {part.compatibility.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{part.compatibility.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-primary">{part.price}</div>
                    <Badge className={part.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}>
                      {part.inStock ? "Disponibile" : "Su Ordine"}
                    </Badge>
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary group-hover:text-white transition-colors" variant="outline">
                    Aggiungi al Carrello
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Vedi Tutto il Catalogo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Support & Services */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-primary">Assistenza Tecnica e Servizi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Supporto completo dalla scelta del ricambio all'installazione
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Compatibilità Garantita</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Verifichiamo la compatibilità di ogni ricambio con il tuo macchinario 
                  attraverso numero di serie e modello specifico.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Installazione</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Servizio di installazione presso la tua azienda con tecnici 
                  specializzati e attrezzature professionali.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Consegna Express</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Consegna in 24/48 ore per ricambi urgenti con tracking 
                  in tempo reale e notifiche SMS.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Original vs Compatible Parts */}
      <section className="py-16">
        <div className="container max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-primary">Ricambi Originali vs Compatibili</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Scegli la soluzione migliore per le tue esigenze e il tuo budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Ricambi Originali</CardTitle>
                <CardDescription>Parti prodotte dal costruttore del macchinario</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Garanzia del costruttore</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Perfetta compatibilità</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Qualità certificata</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Durata massima</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Scegli Originali
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Ricambi Compatibili</CardTitle>
                <CardDescription>Parti aftermarket di alta qualità</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Prezzo competitivo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Qualità testata</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Disponibilità immediata</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Garanzia del fornitore</span>
                  </div>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90" variant="outline">
                  Scegli Compatibili
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Order Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary">Ordine Rapido</CardTitle>
              <CardDescription className="text-lg">
                Hai già il codice ricambio? Inseriscilo qui per un ordine immediato
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input placeholder="Codice Ricambio" />
                <Input placeholder="Quantità" type="number" defaultValue="1" />
                <Button className="bg-primary hover:bg-primary/90">
                  Aggiungi al Carrello
                </Button>
              </div>
              
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  Non conosci il codice? Il nostro team può aiutarti a trovare il ricambio giusto
                </p>
                <Button variant="outline">
                  Contatta l'Assistenza
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Footer */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Rimani Aggiornato</h2>
            <p className="text-xl text-white/90">
              Ricevi le ultime novità su ricambi, offerte speciali e consigli tecnici
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <div className="flex gap-4">
              <Input 
                placeholder="La tua email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white focus:ring-white"
              />
              <Button className="bg-white text-primary hover:bg-white/90 hover:text-primary">
                Iscriviti
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <Truck className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold">Spedizione Gratuita</h3>
              <p className="text-sm text-white/80">Ordini superiori a €150</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold">Garanzia 2 anni</h3>
              <p className="text-sm text-white/80">Su tutti i ricambi originali</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold">Assistenza 24/7</h3>
              <p className="text-sm text-white/80">Supporto tecnico dedicato</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}