"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const { t, language } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const pageSubtitle = {
    sv: "Har du frågor eller vill diskutera ett projekt? Vi finns här för att hjälpa.",
    es: "¿Tienes preguntas o quieres discutir un proyecto? Estamos aquí para ayudar.",
    en: "Have questions or want to discuss a project? We are here to help.",
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
              {t.contact.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {pageSubtitle[language]}
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card border border-border rounded-lg p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {language === "sv" && "Tack för ditt meddelande!"}
                      {language === "es" && "¡Gracias por tu mensaje!"}
                      {language === "en" && "Thank you for your message!"}
                    </h3>
                    <p className="text-muted-foreground">
                      {t.contact.form.success}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.contact.form.name}</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder={t.contact.form.name}
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t.contact.form.email}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={t.contact.form.email}
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t.contact.form.message}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder={t.contact.form.message}
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          {language === "sv" && "Skickar..."}
                          {language === "es" && "Enviando..."}
                          {language === "en" && "Sending..."}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          {t.contact.form.submit}
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-6">
                    {t.contact.subtitle}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === "sv" &&
                      "Tveka inte att höra av dig. Vi svarar på alla förfrågningar inom 24 timmar."}
                    {language === "es" &&
                      "No dudes en comunicarte. Respondemos a todas las consultas dentro de las 24 horas."}
                    {language === "en" &&
                      "Don't hesitate to reach out. We respond to all inquiries within 24 hours."}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <Phone className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {language === "sv" && "Telefon"}
                        {language === "es" && "Teléfono"}
                        {language === "en" && "Phone"}
                      </h3>
                      <p className="text-muted-foreground">{t.contact.info.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <Mail className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {language === "sv" && "E-post"}
                        {language === "es" && "Correo"}
                        {language === "en" && "Email"}
                      </h3>
                      <p className="text-muted-foreground">{t.contact.info.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {language === "sv" && "Adress"}
                        {language === "es" && "Dirección"}
                        {language === "en" && "Address"}
                      </h3>
                      <p className="text-muted-foreground">{t.contact.info.address}</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="flex-1 min-h-[200px] bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Stockholm, Sweden</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
