"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

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
        <section
          className="relative py-24 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/contactUsBk.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-white mb-4">
              Cajon Serrano
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
              {t.contact.title}
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">
              {pageSubtitle[language]}
            </p>
          </div>
        </section>


        

        {/* Contact Content */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">



                {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mx-auto max-w-xl bg-gradient-to-br from-black/5 to-black/10 pt-35 px-12 pb-12 rounded-xl border border-black/10 text-center"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {language === "sv" && "Redo att komma igång?"}
                  {language === "es" && "¿Listo para comenzar?"}
                  {language === "en" && "Ready to get started?"}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {language === "sv" && "Kontakta oss redan idag för att diskutera era behov inom bygg eller bemanning. Vi tar fram en personlig offert och tidsplan utifrån era önskemål."}
                  {language === "es" && "Contáctanos hoy mismo para discutir tus necesidades de construcción o personal. Prepararemos una cotización personalizada y un cronograma según tus preferencias."}
                  {language === "en" && "Contact us today to discuss your construction or staffing needs. We'll create a personalized quote and timeline based on your requirements."}
                </p>
                <a
                  href={`mailto:${t.contact.info.email}`}
                  className="inline-block bg-black hover:bg-black/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 w-full text-center"
                >
                  {language === "sv" && "Kontakta oss"}
                  {language === "es" && "Contáctanos"}
                  {language === "en" && "Contact Us"}
                </a>
              </motion.div>


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
                <div className="flex-1 min-h-[200px] bg-muted rounded-lg flex items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: "url('/Fuengirola.png')" }}>
                  <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                  <div className="relative z-10 text-center text-white">
                    <MapPin className="w-12 h-12 mx-auto mb-2 opacity-90" />
                    <p className="text-sm font-medium">Fuengirola</p>
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
