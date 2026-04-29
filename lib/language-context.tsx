"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "sv" | "es" | "en"

type Translations = {
  nav: {
    home: string
    about: string
    services: string
    contact: string
  }
  hero: {
    headline: string
    subheadline: string
    cta: string
  }
  about: {
    title: string
    description: string
  }
  services: {
    title: string
    subtitle: string
    construction: {
      title: string
      description: string
    }
    transport: {
      title: string
      description: string
    }
  }
  contact: {
    title: string
    subtitle: string
    form: {
      name: string
      email: string
      message: string
      submit: string
      success: string
    }
    info: {
      phone: string
      email: string
      address: string
    }
  }
  footer: {
    rights: string
    tagline: string
  }
}

const translations: Record<Language, Translations> = {
  sv: {
    nav: {
      home: "Hem",
      about: "Om oss",
      services: "Tjänster",
      contact: "Kontakt",
    },
    hero: {
      headline: "Svensk kvalitet i varje projekt",
      subheadline: "Bygg- och transporttjänster med precision och excellens",
      cta: "Kontakta oss",
    },
    about: {
      title: "Om oss",
      description:
        "På Cajón Serrano har vi arbetat i Sverige i många år, ett land känt för sin excellens inom konstruktion och design. Tack vare denna erfarenhet erbjuder vi bygg- och transporttjänster med samma kvalitet, precision och uppmärksamhet på detaljer som kännetecknar Sverige. Lita på oss för att förverkliga dina projekt med en nivå av excellens som gör skillnad. Kontakta oss och upptäck kvaliteten som utmärker oss!",
    },
    services: {
      title: "Våra tjänster",
      subtitle: "Professionella lösningar för dina behov",
      construction: {
        title: "Byggtjänster",
        description:
          "Omfattande bygglösningar med svenskt kvalitetstänkande. Från renovering till nybyggnation, vi levererar precision i varje projekt.",
      },
      transport: {
        title: "Transporttjänster",
        description:
          "Pålitliga transportlösningar för material och utrustning. Säker och effektiv leverans till ditt byggprojekt.",
      },
    },
    contact: {
      title: "Kontakta oss",
      subtitle: "Vi ser fram emot att höra från dig",
      form: {
        name: "Namn",
        email: "E-post",
        message: "Meddelande",
        submit: "Skicka meddelande",
        success: "Tack för ditt meddelande! Vi återkommer snart.",
      },
      info: {
        phone: "+46 70 875 55 38",
        email: "Carlosserrano@hotmail.se ",
        address: "España, Fuengirola",
      },
    },
    footer: {
      rights: "Alla rättigheter förbehållna",
      tagline: "Svensk kvalitet, global excellens",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      contact: "Contacto",
    },
    hero: {
      headline: "Calidad sueca en cada proyecto",
      subheadline: "Servicios de construcción y transporte con precisión y excelencia",
      cta: "Contáctanos",
    },
    about: {
      title: "Sobre nosotros",
      description:
        "En Cajón Serrano, llevamos años trabajando en Suecia, país reconocido por su excelencia en construcción y diseño. Gracias a esa experiencia, ofrecemos servicios de construcción y transporte con la misma calidad, precisión y atención al detalle que caracteriza a Suecia. Confía en nosotros para hacer realidad tus proyectos con un nivel de excelencia que marca la diferencia. ¡Contáctanos y descubre la calidad que nos distingue!",
    },
    services: {
      title: "Nuestros servicios",
      subtitle: "Soluciones profesionales para tus necesidades",
      construction: {
        title: "Servicios de construcción",
        description:
          "Soluciones integrales de construcción con mentalidad de calidad sueca. Desde renovaciones hasta nuevas edificaciones, entregamos precisión en cada proyecto.",
      },
      transport: {
        title: "Servicios de transporte",
        description:
          "Soluciones de transporte confiables para materiales y equipos. Entrega segura y eficiente para tu proyecto de construcción.",
      },
    },
    contact: {
      title: "Contáctanos",
      subtitle: "Esperamos saber de ti",
      form: {
        name: "Nombre",
        email: "Correo electrónico",
        message: "Mensaje",
        submit: "Enviar mensaje",
        success: "¡Gracias por tu mensaje! Te responderemos pronto.",
      },
      info: {
        phone: "+34 603 115 415",
        email: "Carlosserrano@hotmail.se",
        address: "España, Fuengirola",
      },
    },
    footer: {
      rights: "Todos los derechos reservados",
      tagline: "Calidad sueca, excelencia global",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      headline: "Swedish quality in every project",
      subheadline: "Construction and transport services with precision and excellence",
      cta: "Contact us",
    },
    about: {
      title: "About us",
      description:
        "At Cajón Serrano, we have been working in Sweden for many years, a country renowned for its excellence in construction and design. Thanks to this experience, we offer construction and transport services with the same quality, precision, and attention to detail that characterizes Sweden. Trust us to make your projects a reality with a level of excellence that makes a difference. Contact us and discover the quality that sets us apart!",
    },
    services: {
      title: "Our services",
      subtitle: "Professional solutions for your needs",
      construction: {
        title: "Construction services",
        description:
          "Comprehensive construction solutions with Swedish quality mindset. From renovations to new builds, we deliver precision in every project.",
      },
      transport: {
        title: "Transport services",
        description:
          "Reliable transport solutions for materials and equipment. Safe and efficient delivery to your construction project.",
      },
    },
    contact: {
      title: "Contact us",
      subtitle: "We look forward to hearing from you",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send message",
        success: "Thank you for your message! We will get back to you soon.",
      },
      info: {
        phone: "+46 70 875 55 38",
        email: "Carlosserrano@hotmail.se",
        address: "España, Fuengirola",
      },
    },
    footer: {
      rights: "All rights reserved",
      tagline: "Swedish quality, global excellence",
    },
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && ["sv", "es", "en"].includes(savedLang)) {
      setLanguage(savedLang)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
