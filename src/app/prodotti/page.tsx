import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Wheat, 
  Sprout, 
  Shield, 
  Wrench, 
  Leaf, 
  Award, 
  Search, 
  Filter,
  ShoppingCart,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Truck,
  Clock,
  Users
} from 'lucide-react'

interface Product {
  id: string
  name: string
  category: string
  description: string
  benefits: string[]
  specifications: string[]
  certification: string
  image: string
  featured: boolean
}

const products: Product[] = [
  {
    id: '1',
    name: 'Sementi Grano Duro Senatore Cappelli',
    category: 'sementi',
    description: 'Varietà antica di grano duro di alta qualità, perfetta per terreni del Sud Italia',
    benefits: ['Resistente alla siccità', 'Alto contenuto proteico', 'Sapore tradizionale'],
    specifications: ['Peso ettolitrico: 78-80 kg/hl', 'Contenuto proteico: 14-16%', 'Ciclo: medio-tardivo'],
    certification: 'Biologico Certificato',
    image: '/api/placeholder/400/300',
    featured: true
  },
  {
    id: '2',
    name: 'Fertilizzante Organico NPK 4-3-3',
    category: 'fertilizzanti',
    description: 'Fertilizzante organico completo derivato da letame bovino compostato',
    benefits: ['Migliora la struttura del suolo', 'Rilascio graduale', 'Completamente naturale'],
    specifications: ['Azoto organico: 4%', 'Fosforo: 3%', 'Potassio: 3%', 'Sostanza organica: 65%'],
    certification: 'Consentito in Agricoltura Biologica',
    image: '/api/placeholder/400/300',
    featured: true
  },
  {
    id: '3',
    name: 'Antiparassitario Naturale Olio di Neem',
    category: 'antiparassitari',
    description: 'Insetticida biologico estratto dai semi di Azadirachta indica',
    benefits: ['Non tossico per gli insetti utili', 'Azione sistemica', 'Biodegradabile'],
    specifications: ['Concentrazione: 1%', 'Principio attivo: Azadiractina', 'pH: 6.5-7.5'],
    certification: 'Registrato per Agricoltura Biologica',
    image: '/api/placeholder/400/300',
    featured: true
  },
  {
    id: '4',
    name: 'Trattore Compatto 45 CV 4WD',
    category: 'attrezzature',
    description: 'Trattore compatto ideale per aziende di piccole e medie dimensioni',
    benefits: ['Consumi ridotti', 'Manovrabilità eccellente', 'Comfort di guida'],
    specifications: ['Potenza: 45 CV', 'Trazione: 4WD', 'Sollevatore: 1200 kg'],
    certification: 'Omologazione EU Stage V',
    image: '/api/placeholder/400/300',
    featured: false
  },
  {
    id: '5',
    name: 'Sementi Pomodoro San Marzano DOP',
    category: 'sementi',
    description: 'Varietà tradizionale campana, ideale per conserve e pelati di qualità',
    benefits: ['Polpa soda e compatta', 'Pochi semi', 'Gusto intenso'],
    specifications: ['Ciclo: 120-130 giorni', 'Peso medio: 80-100g', 'Forma: allungata'],
    certification: 'DOP Certificato',
    image: '/api/placeholder/400/300',
    featured: true
  },
  {
    id: '6',
    name: 'Concime Liquido Microelementi',
    category: 'fertilizzanti',
    description: 'Concime fogliare ricco di microelementi chelati per correzioni nutrizionali',
    benefits: ['Assorbimento rapido', 'Previene carenze', 'Compatibile con fitofarmaci'],
    specifications: ['Ferro: 3%', 'Manganese: 2%', 'Zinco: 1%', 'Rame: 0.5%'],
    certification: 'Consentito in Agricoltura Biologica',
    image: '/api/placeholder/400/300',
    featured: false
  }
]

const categories = [
  {
    id: 'sementi',
    name: 'Sementi',
    description: 'Cereali, ortaggi e foraggere',
    icon: Wheat,
    subcategories: ['Cereali', 'Ortaggi', 'Foraggere', 'Leguminose']
  },
  {
    id: 'fertilizzanti',
    name: 'Fertilizzanti',
    description: 'Organici e minerali',
    icon: Sprout,
    subcategories: ['Organici', 'Minerali', 'Fogliari', 'Ammendanti']
  },
  {
    id: 'antiparassitari',
    name: 'Antiparassitari',
    description: 'Fitofarmaci e biologici',
    icon: Shield,
    subcategories: ['Insetticidi', 'Fungicidi', 'Erbicidi', 'Biologici']
  },
  {
    id: 'attrezzature',
    name: 'Attrezzature',
    description: 'Macchinari e strumenti',
    icon: Wrench,
    subcategories: ['Trattori', 'Attrezzi', 'Irrigazione', 'Raccolta']
  },
  {
    id: 'biologici',
    name: 'Prodotti Biologici',
    description: 'Certificati per agricoltura bio',
    icon: Leaf,
    subcategories: ['Sementi Bio', 'Fertilizzanti Bio', 'Antiparassitari Bio']
  }
]

const stats = [
  { label: 'Prodotti in Catalogo', value: '500+', icon: Award },
  { label: 'Anni di Esperienza', value: '25', icon: Clock },
  { label: 'Agricoltori Serviti', value: '1000+', icon: Users },
  { label: 'Consegne Annuali', value: '5000+', icon: Truck }
]

export default function ProdottiPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              I Nostri Prodotti
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Soluzioni complete per l'agricoltura moderna. Qualità garantita, 
              risultati eccellenti per ogni esigenza agricola.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Sfoglia Catalogo
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Consulenza Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-lg mb-3">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Cerca prodotti..." 
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filtri
              </Button>
              <Badge variant="secondary">Tutti i prodotti</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Categorie Prodotti</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Esplora la nostra gamma completa di prodotti per ogni fase del ciclo agricolo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center pb-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-lg mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <category.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {category.subcategories.map((sub, index) => (
                      <div key={index} className="text-xs text-muted-foreground flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-accent" />
                        {sub}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Prodotti in Evidenza</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I nostri prodotti più apprezzati, selezionati per qualità e risultati garantiti
            </p>
          </div>

          <Tabs defaultValue="tutti" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="tutti">Tutti</TabsTrigger>
              <TabsTrigger value="sementi">Sementi</TabsTrigger>
              <TabsTrigger value="fertilizzanti">Fertilizzanti</TabsTrigger>
              <TabsTrigger value="bio">Bio</TabsTrigger>
            </TabsList>

            <TabsContent value="tutti">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.filter(p => p.featured).map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <div className="text-6xl text-primary/30">
                          {product.category === 'sementi' && '🌾'}
                          {product.category === 'fertilizzanti' && '🌱'}
                          {product.category === 'antiparassitari' && '🛡️'}
                          {product.category === 'attrezzature' && '🚜'}
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-2 text-xs">
                            {categories.find(c => c.id === product.category)?.name}
                          </Badge>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {product.name}
                          </CardTitle>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          <Award className="h-3 w-3 mr-1" />
                          {product.certification}
                        </Badge>
                      </div>
                      <CardDescription className="line-clamp-2">
                        {product.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2 text-sm">Benefici Principali:</h4>
                          <div className="space-y-1">
                            {product.benefits.slice(0, 2).map((benefit, index) => (
                              <div key={index} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle className="h-3 w-3 mr-2 text-accent flex-shrink-0" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>

                        <Separator />

                        <div className="flex gap-2">
                          <Button className="flex-1" size="sm">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Aggiungi al Carrello
                          </Button>
                          <Button variant="outline" size="sm">
                            Dettagli
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sementi">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.filter(p => p.category === 'sementi').map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <div className="text-6xl text-primary/30">🌾</div>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-2 text-xs">Sementi</Badge>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {product.name}
                          </CardTitle>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          <Award className="h-3 w-3 mr-1" />
                          {product.certification}
                        </Badge>
                      </div>
                      <CardDescription className="line-clamp-2">
                        {product.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2 text-sm">Benefici Principali:</h4>
                          <div className="space-y-1">
                            {product.benefits.slice(0, 2).map((benefit, index) => (
                              <div key={index} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle className="h-3 w-3 mr-2 text-accent flex-shrink-0" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>

                        <Separator />

                        <div className="flex gap-2">
                          <Button className="flex-1" size="sm">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Aggiungi al Carrello
                          </Button>
                          <Button variant="outline" size="sm">
                            Dettagli
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fertilizzanti">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.filter(p => p.category === 'fertilizzanti').map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <div className="text-6xl text-primary/30">🌱</div>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-2 text-xs">Fertilizzanti</Badge>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {product.name}
                          </CardTitle>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          <Award className="h-3 w-3 mr-1" />
                          {product.certification}
                        </Badge>
                      </div>
                      <CardDescription className="line-clamp-2">
                        {product.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2 text-sm">Benefici Principali:</h4>
                          <div className="space-y-1">
                            {product.benefits.slice(0, 2).map((benefit, index) => (
                              <div key={index} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle className="h-3 w-3 mr-2 text-accent flex-shrink-0" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>

                        <Separator />

                        <div className="flex gap-2">
                          <Button className="flex-1" size="sm">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Aggiungi al Carrello
                          </Button>
                          <Button variant="outline" size="sm">
                            Dettagli
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bio">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.filter(p => p.certification.includes('Biologic')).map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <div className="text-6xl text-primary/30">
                          {product.category === 'sementi' && '🌾'}
                          {product.category === 'fertilizzanti' && '🌱'}
                          {product.category === 'antiparassitari' && '🛡️'}
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-2 text-xs">
                            {categories.find(c => c.id === product.category)?.name}
                          </Badge>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {product.name}
                          </CardTitle>
                        </div>
                        <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent">
                          <Leaf className="h-3 w-3 mr-1" />
                          Biologico
                        </Badge>
                      </div>
                      <CardDescription className="line-clamp-2">
                        {product.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2 text-sm">Benefici Principali:</h4>
                          <div className="space-y-1">
                            {product.benefits.slice(0, 2).map((benefit, index) => (
                              <div key={index} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle className="h-3 w-3 mr-2 text-accent flex-shrink-0" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>

                        <Separator />

                        <div className="flex gap-2">
                          <Button className="flex-1" size="sm">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Aggiungi al Carrello
                          </Button>
                          <Button variant="outline" size="sm">
                            Dettagli
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Qualità e Certificazioni</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Tutti i nostri prodotti rispettano i più alti standard di qualità e sicurezza
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certificazioni EU</h3>
                <p className="text-muted-foreground">
                  Tutti i prodotti sono conformi alle normative europee per l'agricoltura
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full mb-4">
                  <Leaf className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Biologico Certificato</h3>
                <p className="text-muted-foreground">
                  Ampia gamma di prodotti biologici certificati per agricoltura sostenibile
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-white rounded-full mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Qualità Premium</h3>
                <p className="text-muted-foreground">
                  Selezioniamo solo fornitori di eccellenza per garantire risultati superiori
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto per Migliorare la Tua Produzione?</h2>
            <p className="text-xl mb-8 text-white/90">
              Contattaci per una consulenza personalizzata e scopri i prodotti più adatti alle tue esigenze
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Visita E-commerce
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Richiedi Preventivo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Footer */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Resta Aggiornato</h3>
            <p className="text-muted-foreground mb-6">
              Iscriviti alla nostra newsletter per ricevere offerte speciali e consigli agricoli
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="La tua email"
                className="flex-1"
              />
              <Button type="submit">
                <Mail className="mr-2 h-4 w-4" />
                Iscriviti
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}