"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { useLanguage } from "@/lib/language-context"
import { Building2, Truck, Wrench, HardHat, Package, Clock, ChevronLeft, ChevronRight } from "lucide-react"

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
  const [constructionImageIndex, setConstructionImageIndex] = useState(0)

  const constructionImages = [  
  "/ByggaInnevägar.jpeg",
  "/ByggaTakjobb.jpeg",
  "/ByggaTräddgård1.0.jpeg",
  "/ByggaTräddgård1.1.jpeg",
  "/ByggaUteGolv1.0.jpeg",
  "/ByggaUteGolv1.1.jpeg",
  "/ByggaUteGolv2.jpeg",
  "/ByggaUtejobb.jpeg"]

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
        <section
          className="relative py-24 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/hero-construction.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-slate-200 mb-4">
              Cajón Serrano
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
              {t.services.title}
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">
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
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                <button
                  onClick={() => setConstructionImageIndex((prev) => (prev - 1 + constructionImages.length) % constructionImages.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-black" />
                </button>
                <Image
                  src={constructionImages[constructionImageIndex]}
                  alt="Construction work"
                  fill
                  className="object-cover transition-all duration-500"
                  priority
                />
                <button
                  onClick={() => setConstructionImageIndex((prev) => (prev + 1) % constructionImages.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-black" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Transport Services */}
        <section className="py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/TransportPic.jpg"
                  alt="Transport services"
                  fill
                  className="object-cover"
                  priority
                />
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
