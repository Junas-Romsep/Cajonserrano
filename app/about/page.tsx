"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { useLanguage } from "@/lib/language-context"
import { Award, Users, Target, Shield } from "lucide-react"

const values = {
  sv: [
    {
      icon: Award,
      title: "Kvalitet",
      description: "Vi levererar alltid arbete av högsta kvalitet, inspirerat av svensk excellens.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Uppmärksamhet på detaljer i varje aspekt av vårt arbete.",
    },
    {
      icon: Shield,
      title: "Pålitlighet",
      description: "Du kan lita på att vi levererar i tid och inom budget.",
    },
    {
      icon: Users,
      title: "Samarbete",
      description: "Vi arbetar nära våra kunder för att förstå och uppfylla deras behov.",
    },
  ],
  es: [
    {
      icon: Award,
      title: "Calidad",
      description: "Siempre entregamos trabajo de la más alta calidad, inspirado en la excelencia sueca.",
    },
    {
      icon: Target,
      title: "Precisión",
      description: "Atención al detalle en cada aspecto de nuestro trabajo.",
    },
    {
      icon: Shield,
      title: "Confiabilidad",
      description: "Puedes confiar en que entregaremos a tiempo y dentro del presupuesto.",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos estrechamente con nuestros clientes para entender y cumplir sus necesidades.",
    },
  ],
  en: [
    {
      icon: Award,
      title: "Quality",
      description: "We always deliver work of the highest quality, inspired by Swedish excellence.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Attention to detail in every aspect of our work.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "You can trust us to deliver on time and within budget.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to understand and meet their needs.",
    },
  ],
}

export default function AboutPage() {
  const { t, language } = useLanguage()

  const ourStory = {
    sv: {
      title: "Vår historia",
      content:
        "Cajon Serrano grundades med en vision att föra svensk byggkvalitet till varje projekt. Med års erfarenhet av att arbeta i Sverige har vi lärt oss vad som krävs för att leverera excellens - precision, pålitlighet och omsorg om detaljer. Idag fortsätter vi att bygga på dessa värderingar i allt vi gör.",
    },
    es: {
      title: "Nuestra historia",
      content:
        "Cajon Serrano fue fundada con la visión de llevar la calidad de construcción sueca a cada proyecto. Con años de experiencia trabajando en Suecia, hemos aprendido lo que se necesita para entregar excelencia: precisión, confiabilidad y atención al detalle. Hoy continuamos construyendo sobre estos valores en todo lo que hacemos.",
    },
    en: {
      title: "Our story",
      content:
        "Cajon Serrano was founded with a vision to bring Swedish construction quality to every project. With years of experience working in Sweden, we have learned what it takes to deliver excellence - precision, reliability, and attention to detail. Today we continue to build on these values in everything we do.",
    },
  }

  const ourValues = {
    sv: "Våra värderingar",
    es: "Nuestros valores",
    en: "Our values",
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Cajon Serrano
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-6">
              {t.about.title}
            </h1>
          </div>
        </section>

        {/* About Content */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">
                  {ourStory[language].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t.about.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {ourStory[language].content}
                </p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-muted to-border rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary mb-6">
                    <span className="text-5xl font-bold text-primary-foreground">CS</span>
                  </div>
                  <p className="text-2xl font-semibold text-foreground">Cajon Serrano</p>
                  <p className="text-muted-foreground mt-2">{t.footer.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                {ourValues[language]}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values[language].map((value, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 text-center transition-all hover:border-foreground/20 hover:shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                    <value.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
