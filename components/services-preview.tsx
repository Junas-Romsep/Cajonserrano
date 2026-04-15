"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Building2, Truck, ArrowRight } from "lucide-react"

export function ServicesPreview() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Building2,
      title: t.services.construction.title,
      description: t.services.construction.description,
    },
    {
      icon: Truck,
      title: t.services.transport.title,
      description: t.services.transport.description,
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            {t.services.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            {t.services.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-8 transition-all hover:border-foreground/20 hover:shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="absolute top-8 right-8 opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/services" className="flex items-center gap-2">
              {t.nav.services}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
