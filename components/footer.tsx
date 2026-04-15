"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-semibold tracking-tight">
              Cajon Serrano
            </span>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/about"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/services"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t.nav.services}
              </Link>
              <Link
                href="/contact"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t.nav.contact}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              {t.nav.contact}
            </h3>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <p>{t.contact.info.phone}</p>
              <p>{t.contact.info.email}</p>
              <p>{t.contact.info.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/60 text-center">
            © {new Date().getFullYear()} Cajon Serrano. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  )
}
