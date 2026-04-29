"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const highlights = [
  { sv: "Svensk kvalitetsstandard", es: "Estándar de calidad sueco", en: "Swedish quality standard" },
  { sv: "Erfaret team", es: "Equipo experimentado", en: "Experienced team" },
  { sv: "Precision i varje detalj", es: "Precisión en cada detalle", en: "Precision in every detail" },
  { sv: "Pålitlig service", es: "Servicio confiable", en: "Reliable service" },
]

export function AboutPreview() {
  const { t, language } = useLanguage()

  return (
    <section className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              {t.about.title}
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-6">
              {language === "sv" && "Bygg med oss, bygg med kvalitet"}
              {language === "es" && "Construye con nosotros, construye con calidad"}
              {language === "en" && "Build with us, build with quality"}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t.about.description}
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{highlight[language]}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/about" className="flex items-center gap-2">
                {t.nav.about}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-muted to-border rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-75 h-75 rounded-full overflow-hidden mb-6">
                                                <Image
                                                  src="/ProfilBild1.1.jpeg"
                                                  alt="Profile"
                                                  width={128}
                                                  height={128}
                                                  className="object-cover w-full h-full"
                                                />
                                              </div>
                  
                  <p className="text-2xl font-semibold text-foreground">Cajón Serrano</p>
                  <p className="text-muted-foreground mt-2">{t.footer.tagline}</p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-foreground/10 rounded-full" />
              <div className="absolute bottom-8 left-8 w-8 h-8 bg-foreground/5 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
