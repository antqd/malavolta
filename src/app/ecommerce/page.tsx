import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ShoppingCart, Truck, CreditCard, Shield, Clock, Users, CheckCircle, Star, Package, HeadphonesIcon, ArrowRight, Search, Filter } from 'lucide-react'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: string
  originalPrice?: string
  image: string
  category: string
  rating: number
  reviews: number
  badge?: string
}

interface Category {
  id: number
  name: string
  image: string
  productCount: number
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Trattore Compatto 35HP',
    price: '€24.500',
    originalPrice: '€26.000',
    image: '/api/placeholder/300/250',
    category: 'Trattori',
    rating: 4.8,
    reviews: 24,
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Seminatrice Precisione',
    price: '€8.200',
    image: '/api/placeholder/300/250',
    category: 'Attrezzature',
    rating: 4.9,
    reviews: 18,
    badge: 'Nuovo'
  },
  {
    id: 3,
    name: 'Kit Ricambi Completo',
    price: '€450',
    originalPrice: '€520',
    image: '/api/placeholder/300/250',
    category: 'Ricambi',
    rating: 4.7,
    reviews: 89,
    badge: 'Offerta'
  },
  {
    id: 4,
    name: 'Fertilizzante Bio Premium',
    price: '€85',
    image: '/api/placeholder/300/250',
    category: 'Fertilizzanti',
    rating: 4.6,
    reviews: 156,
  }
]

const categories: Category[] = [
  {
    id: 1,
    name: 'Trattori e Macchine',
    image: '/api/placeholder/200/150',
    productCount: 45
  },
  {
    id: 2,
    name: 'Attrezzature Agricole',
    image: '/api/placeholder/200/150',
    productCount: 127
  },
  {
    id: 3,
    name: 'Ricambi e Componenti',
    image: '/api/placeholder/200/150',
    productCount: 234
  },
  {
    id: 4,
    name: 'Fertilizzanti e Semi',
    image: '/api/placeholder/200/150',
    productCount: 89
  },
  {
    id: 5,
    name: 'Irrigazione',
    image: '/api/placeholder/200/150',
    productCount: 67
  },
  {
    id: 6,
    name: 'Attrezzi da Lavoro',
    image: '/api/placeholder/200/150',
    productCount: 156
  }
]

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-accent text-white">Shop Online</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Acquista Direttamente
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Il tuo negozio agricolo online di fiducia. Prodotti professionali, 
              prezzi competitivi e consegna rapida direttamente in azienda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Cerca prodotti agricoli..." 
                  className="pl-10 pr-4 py-3 bg-white border-0"
                />
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8">
                <Filter className="w-5 h-5 mr-2" />
                Filtra
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
              <div className="text-center">
                <Package className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">5000+ Prodotti</p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Consegna 24-48h</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Pagamenti Sicuri</p>
              </div>
              <div className="text-center">
                <HeadphonesIcon className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Supporto Dedicato</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Prodotti in Evidenza
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Scopri i nostri prodotti più richiesti, selezionati per qualità e affidabilità
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge className="absolute top-2 left-2 bg-accent text-white">
                      {product.badge}
                    </Badge>
                  )}
                  <Button
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-text-secondary ml-2">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Vedi Tutti i Prodotti
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Categorie Prodotti
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Naviga facilmente tra le nostre categorie specializzate per trovare esattamente quello che cerchi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
                <div className="relative overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 text-white">
                    <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                    <p className="text-xs opacity-90">{category.productCount} prodotti</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Perché Scegliere il Nostro E-commerce
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Offriamo un'esperienza di acquisto completa e sicura per professionisti del settore agricolo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Catalogo Completo</h3>
              <p className="text-text-secondary">
                Oltre 5000 prodotti agricoli professionali sempre disponibili
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prezzi Competitivi</h3>
              <p className="text-text-secondary">
                Offerte speciali e prezzi all'ingrosso per professionisti
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Spedizione Rapida</h3>
              <p className="text-text-secondary">
                Consegna in 24-48h direttamente presso la tua azienda
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Supporto Dedicato</h3>
              <p className="text-text-secondary">
                Team di esperti agricoli sempre a tua disposizione
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment and Shipping */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Pagamenti Sicuri
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card className="p-4 text-center border-0 shadow-md">
                  <CreditCard className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="font-medium">Carte di Credito</p>
                  <p className="text-sm text-text-secondary">Visa, Mastercard</p>
                </Card>
                <Card className="p-4 text-center border-0 shadow-md">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="font-medium">PayPal</p>
                  <p className="text-sm text-text-secondary">Pagamento sicuro</p>
                </Card>
                <Card className="p-4 text-center border-0 shadow-md">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="font-medium">Bonifico</p>
                  <p className="text-sm text-text-secondary">Bancario</p>
                </Card>
                <Card className="p-4 text-center border-0 shadow-md">
                  <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="font-medium">Finanziamenti</p>
                  <p className="text-sm text-text-secondary">Rateizzazione</p>
                </Card>
              </div>
              <div className="flex items-center gap-4 text-sm text-text-secondary">
                <Shield className="w-5 h-5" />
                <span>SSL 256-bit - Transazioni crittografate</span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Spedizione e Consegna
              </h2>
              <div className="space-y-4">
                <Card className="p-4 border-0 shadow-md">
                  <div className="flex items-center gap-3">
                    <Truck className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium">Consegna Standard</p>
                      <p className="text-sm text-text-secondary">3-5 giorni lavorativi - Gratuita sopra €500</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-0 shadow-md">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-accent" />
                    <div>
                      <p className="font-medium">Consegna Express</p>
                      <p className="text-sm text-text-secondary">24-48h - €50 (gratuita sopra €1000)</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-0 shadow-md">
                  <div className="flex items-center gap-3">
                    <Package className="w-6 h-6 text-secondary" />
                    <div>
                      <p className="font-medium">Ritiro in Magazzino</p>
                      <p className="text-sm text-text-secondary">Gratuito - Disponibile dal lunedì al venerdì</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Vantaggi Account Cliente
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Registrati gratuitamente e accedi a servizi esclusivi per la tua azienda agricola
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Storico Ordini</h3>
              <p className="text-text-secondary mb-4">
                Accedi facilmente a tutti i tuoi acquisti precedenti e riordina con un click
              </p>
              <ul className="text-sm text-left space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Cronologia completa acquisti
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Riordino veloce
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Tracking in tempo reale
                </li>
              </ul>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sconti Esclusivi</h3>
              <p className="text-text-secondary mb-4">
                Offerte personalizzate e sconti progressivi in base al volume di acquisto
              </p>
              <ul className="text-sm text-left space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Sconti fino al 15%
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Offerte stagionali
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Promozioni dedicate
                </li>
              </ul>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Supporto Prioritario</h3>
              <p className="text-text-secondary mb-4">
                Assistenza dedicata con consulenti specializzati nel settore agricolo
              </p>
              <ul className="text-sm text-left space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Consulenza tecnica gratuita
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Supporto prioritario
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Configurazioni personalizzate
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 mr-4">
              Registrati Gratuitamente
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Accedi al tuo Account
            </Button>
          </div>
        </div>
      </section>

      {/* Trust and Security */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Garanzia e Sicurezza
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              La tua soddisfazione è la nostra priorità. Acquista con fiducia grazie alle nostre garanzie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border-0 shadow-md">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Garanzia Soddisfazione</h3>
              <p className="text-sm text-text-secondary">100% soddisfatto o rimborsato entro 30 giorni</p>
            </Card>

            <Card className="p-6 text-center border-0 shadow-md">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Prodotti Certificati</h3>
              <p className="text-sm text-text-secondary">Solo marchi leader con certificazioni europee</p>
            </Card>

            <Card className="p-6 text-center border-0 shadow-md">
              <CreditCard className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="font-semibold mb-2">Pagamenti Sicuri</h3>
              <p className="text-sm text-text-secondary">Crittografia SSL 256-bit per ogni transazione</p>
            </Card>

            <Card className="p-6 text-center border-0 shadow-md">
              <HeadphonesIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Assistenza 24/7</h3>
              <p className="text-sm text-text-secondary">Supporto tecnico sempre disponibile</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Footer */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Resta Aggiornato sulle Novità
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Iscriviti alla nostra newsletter per ricevere offerte esclusive, 
            nuovi prodotti e consigli agricoli direttamente nella tua email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Input
              placeholder="La tua email aziendale"
              className="bg-white border-0 flex-1"
            />
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Iscriviti Gratis
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-4">
            Rispettiamo la tua privacy. Cancellazione facile in qualsiasi momento.
          </p>
        </div>
      </section>
    </div>
  )
}