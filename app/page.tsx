"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertTriangle,
  TrendingUp,
  Shield,
  Target,
  BarChart3,
  Users,
  CheckCircle,
  MessageCircle,
  Calendar,
  Mail,
  Menu,
  X,
  ChevronRight,
  Star,
  Award,
  Clock,
} from "lucide-react"

export default function KevinTradingLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".reveal, .reveal-up, .reveal-blur, .reveal-scale")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Disclaimer Bar */}
      {showDisclaimer && (
        <div className="bg-yellow-600/20 border-b border-yellow-600/30 px-4 py-2 text-center text-sm">
          <div className="flex items-center justify-center gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-400" />
            <span>Contenido educativo. No es asesoría financiera.</span>
            <button onClick={() => setShowDisclaimer(false)} className="ml-4 text-yellow-400 hover:text-yellow-300">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Kevin Trading</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("experiencia")}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
              >
                Experiencia
              </button>
              <button
                onClick={() => scrollToSection("resultados")}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
              >
                Resultados
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("proceso")}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
              >
                Proceso
              </button>
              <button
                onClick={() => scrollToSection("contenido")}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
              >
                Contenido
              </button>
              <button
                onClick={() => scrollToSection("faqs")}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
              >
                FAQs
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
              >
                Contacto
              </button>
            </nav>

            <div className="hidden md:block">
              <Button className="bg-primary hover:bg-primary/90 rounded-full px-6">Agendar Llamada</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("experiencia")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Experiencia
                </button>
                <button
                  onClick={() => scrollToSection("resultados")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Resultados
                </button>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection("proceso")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Proceso
                </button>
                <button
                  onClick={() => scrollToSection("contenido")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Contenido
                </button>
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="text-left hover:text-primary transition-colors"
                >
                  FAQs
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Contacto
                </button>
                <Button className="bg-primary hover:bg-primary/90 w-full">Agendar Llamada</Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/XXXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg ring-1 ring-green-500/40 hover:ring-green-400/70 transition-all duration-300 hover:scale-110"
        aria-label="Chatear por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="inicio" className="section-hero py-20 relative overflow-hidden">
          <div className="spotlight absolute inset-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 reveal text-balance">
                Opera con <span className="text-primary">Confianza</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground reveal-up text-pretty">
                Kevin — Especialista en Binarias y Forex. Setups guiados por datos, riesgo primero.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-12 reveal-blur">
                <Badge variant="secondary" className="px-4 py-2">
                  Binarias
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  Divisas (Forex)
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  Gestión de Riesgo
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  Plan de Trading
                </Badge>
              </div>

              <Card className="glass-card max-w-md mx-auto reveal-scale">
                <CardHeader>
                  <CardTitle>Obtén Más Información</CardTitle>
                  <CardDescription>Sin spam. Puedes darte de baja cuando quieras.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="interest">Interés</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu interés" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="signals">Señales Educativas</SelectItem>
                        <SelectItem value="coaching">Coaching 1:1</SelectItem>
                        <SelectItem value="funding">Preparación para Funding</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Quiero Más Info</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Kevin Section */}
        <section id="sobre-kevin" className="section-about py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="glass-card reveal">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">K</span>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-3xl font-bold mb-4">Sobre Kevin</h2>
                      <p className="text-muted-foreground mb-6 text-pretty">
                        Especialista en trading con enfoque en disciplina, gestión del riesgo y backtesting riguroso. Mi
                        metodología se basa en análisis técnico sólido y psicología del trading para maximizar la
                        consistencia en los mercados financieros.
                      </p>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">5+</div>
                          <div className="text-sm text-muted-foreground">Años Operando</div>
                          <div className="text-xs text-muted-foreground">(Placeholder)</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">75%</div>
                          <div className="text-sm text-muted-foreground">Win-Rate (YTD)</div>
                          <div className="text-xs text-muted-foreground">(Placeholder)</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">1:2.5</div>
                          <div className="text-sm text-muted-foreground">Ratio R:R promedio</div>
                          <div className="text-xs text-muted-foreground">(Placeholder)</div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      >
                        Ver Mi Método
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experiencia" className="section-expertise py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 reveal">Experiencia en Binarias & Divisas</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="glass-card reveal-up">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-6 w-6 text-primary" />
                      Opciones Binarias
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Marcos temporales: M1, M5, M15</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Sesiones: Londres y Nueva York</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Setup: Reversiones en soportes/resistencias</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Riesgo: Máximo 2% por operación</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card reveal-up">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-6 w-6 text-primary" />
                      Forex (Divisas)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Pares: EUR/USD, GBP/USD, USD/JPY</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Estilo: Estructura y Supply/Demand</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Timeframes: H1, H4, Daily</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Risk Management: 1% por trade</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="resultados" className="section-results py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 reveal">Resultados & Social Proof</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="glass-card reveal-scale">
                  <CardHeader>
                    <CardTitle>Curva de Equity</CardTitle>
                    <CardDescription>Desempeño histórico (Sample)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="h-16 w-16 text-primary mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground">Gráfico de rendimiento</p>
                        <p className="text-xs text-muted-foreground mt-2">SAMPLE - Marca de agua</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card reveal-scale">
                  <CardHeader>
                    <CardTitle>Métricas Clave</CardTitle>
                    <CardDescription>Estadísticas de trading (Placeholder)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Profit Factor:</span>
                      <span className="text-primary font-bold">1.85</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Max Drawdown:</span>
                      <span className="text-red-400 font-bold">-8.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Trades Totales:</span>
                      <span className="font-bold">247</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sharpe Ratio:</span>
                      <span className="text-primary font-bold">1.42</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonials */}
              <div className="space-y-6 reveal-up">
                <h3 className="text-2xl font-bold text-center mb-8">Testimonios</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      quote: "Kevin me ayudó a entender la gestión de riesgo. Ahora opero con más confianza.",
                      author: "M.R.",
                      role: "Estudiante",
                    },
                    {
                      quote: "Sus señales educativas son muy claras y bien explicadas. Excelente mentor.",
                      author: "J.L.",
                      role: "Mentorado",
                    },
                    {
                      quote: "Gracias al coaching 1:1 mejoré mi disciplina y consistencia en el trading.",
                      author: "A.S.",
                      role: "Estudiante",
                    },
                  ].map((testimonial, index) => (
                    <Card key={index} className="glass-card">
                      <CardContent className="p-6">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-sm mb-4 text-pretty">"{testimonial.quote}"</p>
                        <div className="text-xs text-muted-foreground">
                          <strong>{testimonial.author}</strong> - {testimonial.role}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-600/20 border border-yellow-600/30 rounded-lg text-center">
                <p className="text-sm text-yellow-200">
                  <strong>Disclaimer:</strong> Los resultados pasados no garantizan rendimientos futuros. Riesgo de
                  pérdida. No es asesoría financiera.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="section-services py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 reveal">Servicios Educativos</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="glass-card hover:scale-105 transition-transform duration-300 reveal-up">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-6 w-6 text-primary" />
                        Señales Educativas
                      </CardTitle>
                      <Badge variant="secondary">Principiante</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground text-pretty">
                      Aprende con setups reales explicados paso a paso. Enfoque 100% didáctico.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Análisis detallado de cada setup
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Explicación de gestión de riesgo
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Seguimiento post-operación
                      </li>
                    </ul>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-primary hover:bg-primary/90">Agendar Llamada</Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white bg-transparent"
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card hover:scale-105 transition-transform duration-300 reveal-up">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-6 w-6 text-primary" />
                        Coaching 1:1
                      </CardTitle>
                      <Badge variant="secondary">Intermedio</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground text-pretty">
                      Mentoría personalizada para desarrollar tu propio estilo de trading.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Sesiones individuales semanales
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Revisión de tu trading journal
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Plan de desarrollo personalizado
                      </li>
                    </ul>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-primary hover:bg-primary/90">Agendar Llamada</Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white bg-transparent"
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card hover:scale-105 transition-transform duration-300 reveal-up">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-6 w-6 text-primary" />
                        Prep. Funding
                      </CardTitle>
                      <Badge variant="secondary">Avanzado</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground text-pretty">
                      Preparación específica para challenges y obtención de funding.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Estrategias para challenges
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Psicología bajo presión
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Gestión de cuentas funded
                      </li>
                    </ul>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-primary hover:bg-primary/90">Agendar Llamada</Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white bg-transparent"
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-4 bg-blue-600/20 border border-blue-600/30 rounded-lg text-center">
                <p className="text-sm text-blue-200">
                  <strong>Nota:</strong> Todos los servicios son únicamente educativos. No vendemos productos
                  financieros ni ofrecemos asesoría de inversión.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="proceso" className="section-process py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 reveal">Cómo Trabajamos</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="glass-card text-center reveal-up">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Diagnóstico</h3>
                    <p className="text-sm text-muted-foreground text-pretty">
                      Evaluamos tu nivel actual, objetivos y estilo de trading preferido.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card text-center reveal-up">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Plan</h3>
                    <p className="text-sm text-muted-foreground text-pretty">
                      Creamos un plan de aprendizaje personalizado con metas claras y medibles.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card text-center reveal-up">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Ejecución</h3>
                    <p className="text-sm text-muted-foreground text-pretty">
                      Implementamos el plan con seguimiento continuo y ajustes según tu progreso.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section id="contenido" className="section-content py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 reveal">Contenido & Ideas</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: "Gestión de Riesgo: La Clave del Éxito",
                    date: "15 Dic 2024",
                    excerpt: "Aprende por qué el 90% de los traders fallan por no gestionar correctamente el riesgo...",
                  },
                  {
                    title: "Elección de Sesión: Londres vs Nueva York",
                    date: "12 Dic 2024",
                    excerpt: "Descubre cuál es la mejor sesión para tu estilo de trading y personalidad...",
                  },
                  {
                    title: "Trading Journal: Tu Mejor Herramienta",
                    date: "10 Dic 2024",
                    excerpt: "Cómo llevar un registro efectivo que te ayude a mejorar consistentemente...",
                  },
                  {
                    title: "Psicología del Trading: Controla tus Emociones",
                    date: "8 Dic 2024",
                    excerpt: "Las técnicas más efectivas para mantener la disciplina en momentos críticos...",
                  },
                  {
                    title: "Backtesting: Valida tu Estrategia",
                    date: "5 Dic 2024",
                    excerpt: "Metodología paso a paso para probar tus setups antes de arriesgar capital real...",
                  },
                  {
                    title: "Money Management: Más Allá del 2%",
                    date: "3 Dic 2024",
                    excerpt: "Estrategias avanzadas de gestión de capital para maximizar el crecimiento...",
                  },
                ].map((post, index) => (
                  <Card
                    key={index}
                    className="glass-card hover:scale-105 transition-transform duration-300 reveal-scale"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-balance">{post.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 text-pretty">{post.excerpt}</p>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        Leer más <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Ver más contenido
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Email Capture Section */}
        <section className="section-email py-20 relative overflow-hidden">
          <div className="spotlight absolute inset-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 reveal">Recibe insights semanales de trading</h2>
              <p className="text-xl text-muted-foreground mb-8 reveal-up text-pretty">
                Estrategias y notas de riesgo. Sin spam.
              </p>

              <Card className="glass-card reveal-scale">
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input type="email" placeholder="tu@email.com" className="flex-1" />
                    <Button className="bg-primary hover:bg-primary/90">Suscribirme</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="section-faqs py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 reveal">Preguntas Frecuentes</h2>

              <Accordion type="single" collapsible className="space-y-4 reveal-up">
                <AccordionItem value="item-1" className="glass-card px-6">
                  <AccordionTrigger>¿Ofreces asesoría financiera?</AccordionTrigger>
                  <AccordionContent>
                    No, todos nuestros servicios son únicamente educativos. No ofrecemos asesoría financiera ni
                    recomendaciones de inversión. Nuestro enfoque es enseñarte a desarrollar tus propias habilidades de
                    análisis y gestión de riesgo.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="glass-card px-6">
                  <AccordionTrigger>¿Qué mercados cubres?</AccordionTrigger>
                  <AccordionContent>
                    Me especializo en Opciones Binarias y Forex (divisas). En binarias trabajo principalmente con marcos
                    temporales cortos (M1, M5, M15) y en Forex con timeframes más amplios (H1, H4, Daily). Los pares
                    principales que analizo son EUR/USD, GBP/USD y USD/JPY.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="glass-card px-6">
                  <AccordionTrigger>¿Cuál es la política de reembolsos?</AccordionTrigger>
                  <AccordionContent>
                    Ofrecemos garantía de satisfacción en los primeros 7 días. Si no estás completamente satisfecho con
                    el contenido educativo, puedes solicitar un reembolso completo. Nuestro objetivo es que tengas una
                    experiencia de aprendizaje valiosa.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="glass-card px-6">
                  <AccordionTrigger>¿Cuál es el tiempo mínimo recomendado?</AccordionTrigger>
                  <AccordionContent>
                    Recomendamos un mínimo de 3 meses para ver resultados significativos en tu desarrollo como trader.
                    El trading requiere tiempo para desarrollar disciplina, entender los mercados y crear un plan sólido
                    de gestión de riesgo.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="glass-card px-6">
                  <AccordionTrigger>¿Qué nivel de experiencia necesito?</AccordionTrigger>
                  <AccordionContent>
                    Trabajamos con todos los niveles, desde principiantes hasta traders avanzados. Para principiantes
                    recomendamos empezar con las señales educativas, mientras que traders con experiencia pueden
                    beneficiarse más del coaching 1:1 o la preparación para funding.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="glass-card px-6">
                  <AccordionTrigger>¿Cuál es la diferencia entre señales educativas y coaching?</AccordionTrigger>
                  <AccordionContent>
                    Las señales educativas son análisis detallados de setups reales con explicaciones paso a paso,
                    ideales para aprender observando. El coaching 1:1 es mentoría personalizada donde revisamos tu
                    progreso individual, tu journal de trading y desarrollamos un plan específico para ti.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-8 p-4 bg-red-600/20 border border-red-600/30 rounded-lg text-center">
                <p className="text-sm text-red-200">
                  <strong>Recordatorio:</strong> El trading implica riesgo de pérdida. Todo nuestro contenido es de
                  naturaleza educativa. Siempre opera con capital que puedas permitirte perder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="section-contact py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 reveal">¿Tienes preguntas? Conversemos.</h2>
                <p className="text-xl text-muted-foreground reveal-up text-pretty">
                  Estoy aquí para ayudarte en tu journey de trading. Elige la forma que prefieras para contactarme.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6 reveal-scale">
                  <div className="flex gap-4">
                    <Button className="flex-1 bg-primary hover:bg-primary/90">
                      <Calendar className="h-4 w-4 mr-2" />
                      Agendar Llamada
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white bg-transparent"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>

                <Card className="glass-card reveal-scale">
                  <CardHeader>
                    <CardTitle>Envíame un mensaje</CardTitle>
                    <CardDescription>Te responderé en menos de 24 horas</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="contact-name">Nombre</Label>
                      <Input id="contact-name" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email</Label>
                      <Input id="contact-email" type="email" placeholder="tu@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="contact-message">Mensaje</Label>
                      <Textarea id="contact-message" placeholder="Cuéntame en qué puedo ayudarte..." rows={4} />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Mail className="h-4 w-4 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="section-footer py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">© 2025 Kevin. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
