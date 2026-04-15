"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const { t, language } = useLanguage()

  const headline = {
    sv: "Redo att starta ditt projekt?",
    es: "¿Listo para comenzar tu proyecto?",
    en: "Ready to start your project?",
  }

  const subtext = {
    sv: "Kontakta oss idag för en kostnadsfri konsultation",
    es: "Contáctanos hoy para una consulta gratuita",
    en: "Contact us today for a free consultation",
  }

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
          {headline[language]}
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          {subtext[language]}
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
        >
          <Link href="/contact" className="flex items-center gap-2">
            {t.hero.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
