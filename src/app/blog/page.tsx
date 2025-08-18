import AnimatedIndicatorNavbar from '@/components/common/animated-indicator-navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, Clock, User, Search, TrendingUp, BookOpen, Eye, ArrowRight, Filter, Mail } from 'lucide-react'

interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  publishDate: string
  readTime: string
  image: string
  views: number
  featured?: boolean
}

interface Category {
  name: string
  slug: string
  count: number
  color: string
}

const categories: Category[] = [
  { name: 'Tecniche Colturali', slug: 'tecniche-colturali', count: 24, color: 'bg-primary' },
  { name: 'Novità Prodotti', slug: 'novita-prodotti', count: 18, color: 'bg-secondary' },
  { name: 'Sostenibilità', slug: 'sostenibilita', count: 16, color: 'bg-accent' },
  { name: 'Analisi Mercato', slug: 'mercato', count: 12, color: 'bg-chart-4' },
  { name: 'Consigli Stagionali', slug: 'stagionali', count: 21, color: 'bg-chart-2' },
  { name: 'Macchinari', slug: 'macchinari', count: 15, color: 'bg-chart-3' },
  { name: 'Normative', slug: 'normative', count: 8, color: 'bg-muted' },
  { name: 'Case Study', slug: 'case-study', count: 10, color: 'bg-chart-1' }
]

const featuredArticles: Article[] = [
  {
    id: '1',
    title: 'Come preparare il terreno per la semina autunnale',
    excerpt: 'Guida completa alle tecniche di preparazione del terreno per ottimizzare la resa delle colture autunnali. Scopri i metodi più efficaci per la lavorazione del suolo.',
    category: 'Tecniche Colturali',
    author: 'Dr. Marco Rossi',
    publishDate: '2024-03-15',
    readTime: '8 min',
    image: '/api/placeholder/400/250',
    views: 1250,
    featured: true
  },
  {
    id: '2',
    title: 'Le nuove varietà di mais: caratteristiche e vantaggi',
    excerpt: 'Analisi approfondita delle ultime varietà di mais disponibili sul mercato, con focus su resa, resistenza e adattabilità climatica.',
    category: 'Novità Prodotti',
    author: 'Ing. Laura Bianchi',
    publishDate: '2024-03-12',
    readTime: '6 min',
    image: '/api/placeholder/400/250',
    views: 980,
    featured: true
  },
  {
    id: '3',
    title: 'Agricoltura di precisione: tecnologie e benefici',
    excerpt: 'Scopri come le nuove tecnologie di precisione stanno rivoluzionando il settore agricolo, migliorando efficienza e sostenibilità.',
    category: 'Macchinari',
    author: 'Prof. Giuseppe Verdi',
    publishDate: '2024-03-10',
    readTime: '10 min',
    image: '/api/placeholder/400/250',
    views: 1450,
    featured: true
  }
]

const recentArticles: Article[] = [
  {
    id: '4',
    title: 'Gestione sostenibile delle risorse idriche',
    excerpt: 'Strategie innovative per ottimizzare l\'uso dell\'acqua in agricoltura, riducendo sprechi e migliorando l\'efficienza irrigua.',
    category: 'Sostenibilità',
    author: 'Dr.ssa Anna Verdi',
    publishDate: '2024-03-08',
    readTime: '7 min',
    image: '/api/placeholder/300/200',
    views: 870
  },
  {
    id: '5',
    title: 'Fertilizzazione organica: guida completa',
    excerpt: 'Tutto quello che devi sapere sulla fertilizzazione organica: tipologie, dosaggi e timing per massimizzare i benefici.',
    category: 'Tecniche Colturali',
    author: 'Dott. Francesco Neri',
    publishDate: '2024-03-05',
    readTime: '9 min',
    image: '/api/placeholder/300/200',
    views: 1120
  },
  {
    id: '6',
    title: 'Prezzi cereali: trend Q1 2024',
    excerpt: 'Analisi dei prezzi dei principali cereali nel primo trimestre 2024 e previsioni per i prossimi mesi.',
    category: 'Analisi Mercato',
    author: 'Econ. Maria Romano',
    publishDate: '2024-03-03',
    readTime: '5 min',
    image: '/api/placeholder/300/200',
    views: 650
  },
  {
    id: '7',
    title: 'Controllo biologico dei parassiti',
    excerpt: 'Metodi naturali ed ecologici per il controllo dei parassiti delle colture, riducendo l\'uso di pesticidi chimici.',
    category: 'Sostenibilità',
    author: 'Dr. Paolo Gialli',
    publishDate: '2024-03-01',
    readTime: '6 min',
    image: '/api/placeholder/300/200',
    views: 920
  },
  {
    id: '8',
    title: 'Nuovi trattori Case IH: recensione completa',
    excerpt: 'Test approfondito della nuova gamma di trattori Case IH, con analisi di prestazioni, consumi e tecnologie integrate.',
    category: 'Macchinari',
    author: 'Ing. Roberto Blu',
    publishDate: '2024-02-28',
    readTime: '12 min',
    image: '/api/placeholder/300/200',
    views: 1580
  },
  {
    id: '9',
    title: 'Rotazione delle colture: best practices',
    excerpt: 'Principi e strategie per una rotazione efficace delle colture che migliori la fertilità del suolo e riduca le malattie.',
    category: 'Tecniche Colturali',
    author: 'Agr. Silvia Rosa',
    publishDate: '2024-02-25',
    readTime: '8 min',
    image: '/api/placeholder/300/200',
    views: 1040
  }
]

const trendingArticles: Article[] = [
  {
    id: '10',
    title: 'Droni in agricoltura: guida pratica',
    excerpt: 'Come utilizzare i droni per il monitoraggio delle colture e l\'ottimizzazione degli interventi.',
    category: 'Macchinari',
    author: 'Ing. Marco Viola',
    publishDate: '2024-02-20',
    readTime: '7 min',
    image: '/api/placeholder/250/150',
    views: 2100
  },
  {
    id: '11',
    title: 'Biologico: certificazioni e mercato',
    excerpt: 'Panoramica completa sul mercato del biologico, certificazioni necessarie e opportunità di business.',
    category: 'Sostenibilità',
    author: 'Dr.ssa Elena Marrone',
    publishDate: '2024-02-18',
    readTime: '9 min',
    image: '/api/placeholder/250/150',
    views: 1890
  },
  {
    id: '12',
    title: 'Sensori IoT per l\'agricoltura smart',
    excerpt: 'Tecnologie IoT per il monitoraggio in tempo reale di parametri ambientali e colturali.',
    category: 'Novità Prodotti',
    author: 'Ing. Davide Azzurro',
    publishDate: '2024-02-15',
    readTime: '6 min',
    image: '/api/placeholder/250/150',
    views: 1650
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <BookOpen className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Blog Agricolo
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Novità, consigli e approfondimenti per l'agricoltura moderna
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto opacity-80">
              Resta aggiornato sulle ultime tendenze, tecnologie e best practices del settore agricolo con i nostri esperti
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
              <div className="flex items-center">
                <Search className="w-5 h-5 ml-4 text-white/70" />
                <Input 
                  placeholder="Cerca articoli..." 
                  className="flex-1 bg-transparent border-0 text-white placeholder:text-white/70 focus-visible:ring-0"
                />
                <Button size="sm" className="bg-white text-primary hover:bg-white/90 rounded-full">
                  Cerca
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Categorie del Blog</h2>
            <p className="text-muted-foreground text-lg">Esplora i nostri contenuti per argomento</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Card key={category.slug} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Articoli in Evidenza</h2>
              <p className="text-muted-foreground">I nostri contenuti più importanti e recenti</p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              <Filter className="w-4 h-4 mr-2" />
              Filtri
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    {article.category}
                  </Badge>
                  {article.featured && (
                    <Badge className="absolute top-4 right-4 bg-accent">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {new Date(article.publishDate).toLocaleDateString('it-IT')}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Eye className="w-4 h-4 mr-1" />
                      {article.views}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Articles Grid */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Articoli Recenti</h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Data
                  </Button>
                  <Button variant="outline" size="sm">
                    Popolarità
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {recentArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-white/90 text-primary text-xs">
                        {article.category}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <span>{article.author}</span>
                        <span>{article.readTime}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {new Date(article.publishDate).toLocaleDateString('it-IT')}
                        </span>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Eye className="w-3 h-3 mr-1" />
                          {article.views}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  Carica Altri Articoli
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Trending Articles */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                    Articoli di Tendenza
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {trendingArticles.map((article) => (
                    <div key={article.id} className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">
                          {article.title}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{article.readTime}</span>
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {article.views}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Subscription */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Mail className="w-5 h-5 mr-2" />
                    Newsletter Blog
                  </CardTitle>
                  <CardDescription>
                    Ricevi i nuovi articoli direttamente nella tua email
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input placeholder="La tua email" type="email" />
                    <Button className="w-full">
                      Iscriviti alla Newsletter
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Niente spam, solo contenuti di qualità
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Tag Popolari</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Mais', 'Sostenibilità', 'Trattori', 'Biologico', 'Irrigazione', 'Semina', 'Fertilizzanti', 'Droni', 'Precision Farming', 'Cereali'].map((tag) => (
                      <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">AgroItalia Blog</h3>
              <p className="text-primary-foreground/80 mb-6">
                Il punto di riferimento per l'agricoltura italiana. Contenuti di qualità, 
                consigli pratici e le ultime novità del settore agricolo.
              </p>
              <div className="flex gap-4">
                <Button variant="secondary" size="sm">Facebook</Button>
                <Button variant="secondary" size="sm">LinkedIn</Button>
                <Button variant="secondary" size="sm">YouTube</Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categorie</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">Tecniche Colturali</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sostenibilità</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Macchinari</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mercato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contatti</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Via Agricola 123</li>
                <li>40000 Bologna, Italia</li>
                <li>Tel: +39 051 123456</li>
                <li>blog@agroitalia.it</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 AgroItalia. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}