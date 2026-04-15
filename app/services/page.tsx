"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { useLanguage } from "@/lib/language-context"
import { Building2, Truck, Wrench, HardHat, Package, Clock } from "lucide-react"

const serviceDetails = {
  construction: {
    icon: Building2,
    features: {
      sv: [
        { icon: HardHat, text: "Nybyggnation och renovering" },
        { icon: Wrench, text: "Precisions snickeri" },
        { icon: Clock, text: "Projektledning" },
      ],
      es: [
        { icon: HardHat, text: "Nueva construcción y renovación" },
        { icon: Wrench, text: "Carpintería de precisión" },
        { icon: Clock, text: "Gestión de proyectos" },
      ],
      en: [
        { icon: HardHat, text: "New construction and renovation" },
        { icon: Wrench, text: "Precision carpentry" },
        { icon: Clock, text: "Project management" },
      ],
    },
  },
  transport: {
    icon: Truck,
    features: {
      sv: [
        { icon: Package, text: "Materialtransport" },
        { icon: Truck, text: "Utrustningsleverans" },
        { icon: Clock, text: "Punktlig service" },
      ],
      es: [
        { icon: Package, text: "Transporte de materiales" },
        { icon: Truck, text: "Entrega de equipos" },
        { icon: Clock, text: "Servicio puntual" },
      ],
      en: [
        { icon: Package, text: "Material transport" },
        { icon: Truck, text: "Equipment delivery" },
        { icon: Clock, text: "Punctual service" },
      ],
    },
  },
}

export default function ServicesPage() {
  const { t, language } = useLanguage()

  const pageSubtitle = {
    sv: "Vi erbjuder ett komplett utbud av bygg- och transporttjänster med fokus på svensk kvalitet och precision.",
    es: "Ofrecemos una gama completa de servicios de construcción y transporte con enfoque en la calidad y precisión sueca.",
    en: "We offer a complete range of construction and transport services with a focus on Swedish quality and precision.",
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
              {t.services.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {pageSubtitle[language]}
            </p>
          </div>
        </section>

        {/* Construction Services */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
                  <Building2 className="w-8 h-8 text-foreground" />
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-4">
                  {t.services.construction.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t.services.construction.description}
                </p>
                <ul className="space-y-4">
                  {serviceDetails.construction.features[language].map((feature, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <span className="text-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-square bg-gradient-to-br from-muted to-border rounded-lg flex items-center justify-center">
                <Building2 className="w-32 h-32 text-foreground/10" />
              </div>
            </div>
          </div>
        </section>

        {/* Transport Services */}
        <section className="py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 aspect-square bg-gradient-to-br from-muted to-border rounded-lg flex items-center justify-center">
                <Truck className="w-32 h-32 text-foreground/10" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background mb-6">
                  <Truck className="w-8 h-8 text-foreground" />
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-4">
                  {t.services.transport.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t.services.transport.description}
                </p>
                <ul className="space-y-4">
                  {serviceDetails.transport.features[language].map((feature, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <span className="text-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
