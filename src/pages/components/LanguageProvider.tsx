"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "rw"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  // ... keep all existing translations unchanged
  en: {
    // Navigation
    "nav.features": "Features",
    "nav.howItWorks": "How It Works",
    "nav.pricing": "Pricing",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",
    "nav.language": "Language",

    // Hero Section
    "hero.badge": "🚀 Revolutionizing Fleet Management",
    "hero.title.connect": "Connect. Optimize.",
    "hero.title.deliver": "Deliver.",
    "hero.subtitle":
      "The ultimate fleet management platform that connects clients ready to ship with truck owners and companies. Optimize your routes, manage operations, and grow your business with our intelligent logistics solution.",
    "hero.startConnecting": "Start Connecting",
    "hero.watchDemo": "Watch Demo",

    // Stats Section
    "stats.activeTrucks": "Active Trucks",
    "stats.deliveriesMade": "Deliveries Made",
    "stats.onTimeDelivery": "On-Time Delivery",
    "stats.supportAvailable": "Support Available",

    // How It Works
    "howItWorks.title": "How It Works",
    "howItWorks.subtitle": "Simple steps to connect, optimize, and deliver with FleetConnect",
    "howItWorks.step1.title": "Register & Connect",
    "howItWorks.step1.desc": "Sign up as a truck owner or shipper. Complete your profile and get verified in minutes.",
    "howItWorks.step2.title": "Smart Matching",
    "howItWorks.step2.desc":
      "Our AI algorithm matches available trucks with shipping requests based on location, capacity, and preferences.",
    "howItWorks.step3.title": "Track & Deliver",
    "howItWorks.step3.desc":
      "Monitor shipments in real-time, optimize routes automatically, and ensure timely deliveries.",

    // Features
    "features.title": "What We Do",
    "features.subtitle": "Comprehensive fleet management solutions designed to streamline your logistics operations",
    "features.matching.title": "Client-Truck Owner Matching",
    "features.matching.desc":
      "Intelligent matching system that connects clients ready to ship with available truck owners and companies",
    "features.routing.title": "Route Optimization",
    "features.routing.desc":
      "Advanced algorithms to optimize delivery routes, reduce fuel costs, and improve delivery times",
    "features.fleet.title": "Fleet Management",
    "features.fleet.desc":
      "Complete fleet oversight with real-time tracking, maintenance scheduling, and performance analytics",
    "features.analytics.title": "Analytics & Insights",
    "features.analytics.desc":
      "Comprehensive analytics dashboard with performance metrics, cost analysis, and business intelligence",
    "features.security.title": "Security & Compliance",
    "features.security.desc":
      "Advanced security features, compliance monitoring, and insurance integration for peace of mind",
    "features.api.title": "API Integration",
    "features.api.desc": "Seamless integration with existing systems through our robust API and third-party connectors",

    // Benefits
    "benefits.title": "Why Choose FleetConnect?",
    "benefits.revenue.title": "Increase Revenue by 30%",
    "benefits.revenue.desc": "Optimize routes and reduce empty miles to maximize your earning potential",
    "benefits.time.title": "Save 5+ Hours Daily",
    "benefits.time.desc": "Automate dispatching, route planning, and administrative tasks",
    "benefits.costs.title": "Reduce Costs by 25%",
    "benefits.costs.desc": "Lower fuel consumption, maintenance costs, and operational overhead",
    "benefits.support.title": "Industry-Leading Support",
    "benefits.support.desc": "24/7 customer support with dedicated account managers for enterprise clients",
    "benefits.dashboard.title": "Smart Dashboard",
    "benefits.dashboard.desc": "Real-time insights at your fingertips",

    // Testimonials
    "testimonials.title": "What Our Customers Say",
    "testimonials.subtitle": "Join thousands of satisfied truck owners and shippers who trust FleetConnect",

    // Pricing
    "pricing.title": "Simple, Transparent Pricing",
    "pricing.subtitle": "Choose the plan that fits your business needs. No hidden fees, cancel anytime.",
    "pricing.starter.title": "Starter",
    "pricing.starter.desc": "Perfect for independent truck owners",
    "pricing.professional.title": "Professional",
    "pricing.professional.desc": "Ideal for growing fleet companies",
    "pricing.enterprise.title": "Enterprise",
    "pricing.enterprise.desc": "For large fleet operations",
    "pricing.mostPopular": "Most Popular",
    "pricing.month": "/month",
    "pricing.custom": "Custom",
    "pricing.contactSales": "Contact Sales",

    // Coming Soon
    "comingSoon.badge": "🚧 Coming Soon",
    "comingSoon.title": "Driver Full Operation Management System",
    "comingSoon.subtitle":
      "The next evolution in fleet management - a comprehensive driver operation system that will revolutionize how drivers manage their daily operations, routes, and communications.",
    "comingSoon.mobile.title": "Mobile App",
    "comingSoon.mobile.desc": "Dedicated mobile app for drivers with offline capabilities",
    "comingSoon.gps.title": "GPS Navigation",
    "comingSoon.gps.desc": "Advanced GPS with traffic updates and route optimization",
    "comingSoon.time.title": "Time Management",
    "comingSoon.time.desc": "Hours of service tracking and compliance management",
    "comingSoon.safety.title": "Safety Features",
    "comingSoon.safety.desc": "Emergency alerts, safety checks, and incident reporting",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Get answers to common questions about FleetConnect",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Ready to transform your fleet operations? Contact us today for a personalized demo.",
    "contact.form.title": "Send us a message",
    "contact.form.subtitle": "Fill out the form below and we'll get back to you within 24 hours.",
    "contact.firstName": "First Name",
    "contact.lastName": "Last Name",
    "contact.email": "Email",
    "contact.company": "Company",
    "contact.message": "Tell us about your fleet management needs...",
    "contact.sendMessage": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.phone": "Phone",
    "contact.liveChat": "Live Chat",
    "contact.businessHours": "Business Hours",

    // CTA
    "cta.title": "Ready to Transform Your Fleet Management?",
    "cta.subtitle":
      "Join thousands of truck owners and companies who are already optimizing their operations with FleetConnect. Start connecting with clients and growing your business today.",
    "cta.startTrial": "Start Free Trial",
    "cta.scheduleDemo": "Schedule Demo",

    // Footer
    "footer.tagline": "Revolutionizing fleet management through intelligent connections and optimization.",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.support": "Support",
    "footer.about": "About",
    "footer.blog": "Blog",
    "footer.careers": "Careers",
    "footer.helpCenter": "Help Center",
    "footer.documentation": "Documentation",
    "footer.status": "Status",
    "footer.community": "Community",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    "footer.rights": "All rights reserved.",
  },
  rw: {
    // Navigation
    "nav.features": "Ibiranga",
    "nav.howItWorks": "Uburyo Bikora",
    "nav.pricing": "Ibiciro",
    "nav.reviews": "Ibitekerezo",
    "nav.contact": "Twandikire",
    "nav.getStarted": "Tangira",
    "nav.language": "Ururimi",

    // Hero Section
    "hero.badge": "🚀 Guhindura Ubuyobozi bw'Amakamyo",
    "hero.title.connect": "Guhuza. Gutunganya.",
    "hero.title.deliver": "Gutanga.",
    "hero.subtitle":
      "Urubuga rukomeye rw'ubuyobozi bw'amakamyo ruhuza abakiriya biteguye kohereza n'abafite amakamyo n'amasosiyete. Menya inzira nziza, genzura ibikorwa, kandi teza imbere ubucuruzi bwawe ukoresheje ikoranabuhanga ryubwenge.",
    "hero.startConnecting": "Tangira Guhuza",
    "hero.watchDemo": "Reba Icyitegererezo",

    // Stats Section
    "stats.activeTrucks": "Amakamyo Akora",
    "stats.deliveriesMade": "Ibicuruzwa Byoherejwe",
    "stats.onTimeDelivery": "Gutanga ku Gihe",
    "stats.supportAvailable": "Ubufasha Buhari",

    // How It Works
    "howItWorks.title": "Uburyo Bikora",
    "howItWorks.subtitle": "Intambwe zoroshye zo guhuza, gutunganya, no gutanga hamwe na FleetConnect",
    "howItWorks.step1.title": "Kwiyandikisha no Guhuza",
    "howItWorks.step1.desc":
      "Iyandikishe nk'umufite ikamyo cyangwa uwohereza. Uzuza umwirondoro wawe ukemezwe mu minota mike.",
    "howItWorks.step2.title": "Guhuza Ubwenge",
    "howItWorks.step2.desc":
      "Algorithm yacu y'ubwenge ihuza amakamyo aboneka n'ibisabwa byo kohereza ukurikije aho biherereye, ubushobozi, n'ibyo ukunda.",
    "howItWorks.step3.title": "Gukurikirana no Gutanga",
    "howItWorks.step3.desc":
      "Genzura ibicuruzwa mu gihe nyacyo, menya inzira nziza mu buryo bwikora, kandi wemeze ko bitangwa ku gihe.",

    // Features
    "features.title": "Icyo Dukora",
    "features.subtitle": "Ibisubizo byuzuye by'ubuyobozi bw'amakamyo byagenewe koroshya ibikorwa by'ubucuruzi",
    "features.matching.title": "Guhuza Abakiriya n'Abafite Amakamyo",
    "features.matching.desc": "Sisitemu y'ubwenge ihuza abakiriya biteguye kohereza n'abafite amakamyo n'amasosiyete",
    "features.routing.title": "Gutunganya Inzira",
    "features.routing.desc":
      "Algorithm zigezweho zo gutunganya inzira zo gutanga, kugabanya ibiciro bya lisansi, no kunoza igihe cyo gutanga",
    "features.fleet.title": "Ubuyobozi bw'Amakamyo",
    "features.fleet.desc":
      "Ubuyobozi buzuye bw'amakamyo hamwe no gukurikirana mu gihe nyacyo, gushyiraho gahunda yo kubungabunga, n'isesengura ry'imikorere",
    "features.analytics.title": "Isesengura n'Ubumenyi",
    "features.analytics.desc":
      "Ikibaho cy'isesengura cyuzuye hamwe n'ibipimo by'imikorere, isesengura ry'ibiciro, n'ubwenge bw'ubucuruzi",
    "features.security.title": "Umutekano n'Ubwiyunge",
    "features.security.desc":
      "Ibintu by'umutekano bigezweho, gukurikirana ubwiyunge, n'ubwishingizi bwo guhuza kugira ngo ube mu mahoro",
    "features.api.title": "Guhuza API",
    "features.api.desc": "Guhuza nta nkomyi n'ibisanzwe bisanzwe binyuze muri API yacu ikomeye n'abahuza b'abandi",

    // Benefits
    "benefits.title": "Kuki Uhitamo FleetConnect?",
    "benefits.revenue.title": "Kongera Inyungu ku 30%",
    "benefits.revenue.desc":
      "Menya inzira nziza kandi ugabanye inzira zubusa kugira ngo wongere ubushobozi bwawe bwo kwinjiza amafaranga",
    "benefits.time.title": "Bika Amasaha 5+ Buri Munsi",
    "benefits.time.desc": "Kora mu buryo bwikora kohereza, gutegura inzira, n'imirimo y'ubuyobozi",
    "benefits.costs.title": "Kugabanya Ibiciro ku 25%",
    "benefits.costs.desc": "Kugabanya ikoreshwa rya lisansi, ibiciro byo kubungabunga, n'ibiciro by'ibikorwa",
    "benefits.support.title": "Ubufasha Bukomeye mu Nganda",
    "benefits.support.desc": "Ubufasha bwa 24/7 hamwe n'abayobozi b'amakonti bwihariye ku bakiriya b'amasosiyete",
    "benefits.dashboard.title": "Ikibaho cy'Ubwenge",
    "benefits.dashboard.desc": "Ubumenyi bw'igihe nyacyo mu ntoki zawe",

    // Testimonials
    "testimonials.title": "Icyo Abakiriya Bacu Bavuga",
    "testimonials.subtitle": "Jya mu bihumbi by'abafite amakamyo n'abohereza banyuzwe bizera FleetConnect",

    // Pricing
    "pricing.title": "Ibiciro Byoroshye, Bisobanutse",
    "pricing.subtitle":
      "Hitamo gahunda ikwiriye ubucuruzi bwawe. Nta biciro bihishe, hagarika igihe icyo ari cyo cyose.",
    "pricing.starter.title": "Intangiriro",
    "pricing.starter.desc": "Byiza ku bafite amakamyo bonyine",
    "pricing.professional.title": "Umwuga",
    "pricing.professional.desc": "Byiza ku masosiyete y'amakamyo akura",
    "pricing.enterprise.title": "Ikigo",
    "pricing.enterprise.desc": "Ku bikorwa binini by'amakamyo",
    "pricing.mostPopular": "Bikunzwe Cyane",
    "pricing.month": "/ukwezi",
    "pricing.custom": "Byihariye",
    "pricing.contactSales": "Vugana n'Abacuruzi",

    // Coming Soon
    "comingSoon.badge": "🚧 Biza Vuba",
    "comingSoon.title": "Sisitemu y'Ubuyobozi bw'Ibikorwa byose by'Abashoferi",
    "comingSoon.subtitle":
      "Ubwiyongere bukurikira mu buyobozi bw'amakamyo - sisitemu y'ibikorwa by'abashoferi izahindura uburyo abashoferi bayobora ibikorwa byabo bya buri munsi, inzira, n'itumanaho.",
    "comingSoon.mobile.title": "Porogaramu y'Igikoresho",
    "comingSoon.mobile.desc": "Porogaramu yihariye y'abashoferi ifite ubushobozi bwo gukora nta murandamubano",
    "comingSoon.gps.title": "Ubuyobozi bwa GPS",
    "comingSoon.gps.desc": "GPS igezweho hamwe n'amakuru y'ubwikorezi n'ubwiyongere bw'inzira",
    "comingSoon.time.title": "Ubuyobozi bw'Igihe",
    "comingSoon.time.desc": "Gukurikirana amasaha y'akazi n'ubuyobozi bw'ubwiyunge",
    "comingSoon.safety.title": "Ibintu by'Umutekano",
    "comingSoon.safety.desc": "Ibimenyetso by'ihutirwa, kugenzura umutekano, no gutanga raporo z'ibintu byabaye",

    // FAQ
    "faq.title": "Ibibazo Bikunze Kubazwa",
    "faq.subtitle": "Bonera ibisubizo ku bibazo bikunze kubazwa kuri FleetConnect",

    // Contact
    "contact.title": "Twandikire",
    "contact.subtitle":
      "Witeguye guhindura ibikorwa by'amakamyo yawe? Twandikire uyu munsi kugira ngo ubone icyitegererezo cyihariye.",
    "contact.form.title": "Twoherereze ubutumwa",
    "contact.form.subtitle": "Uzuza ifishi iri hepfo kandi tuzagusubiza mu masaha 24.",
    "contact.firstName": "Izina ry'Ubanza",
    "contact.lastName": "Izina rya Nyuma",
    "contact.email": "Imeyili",
    "contact.company": "Ikigo",
    "contact.message": "Tubwire ku bikenewe byo gucunga amakamyo yawe...",
    "contact.sendMessage": "Ohereza Ubutumwa",
    "contact.info.title": "Amakuru yo Kuvugana",
    "contact.phone": "Telefoni",
    "contact.liveChat": "Ikiganiro Kizima",
    "contact.businessHours": "Amasaha y'Akazi",

    // CTA
    "cta.title": "Witeguye Guhindura Ubuyobozi bw'Amakamyo Yawe?",
    "cta.subtitle":
      "Jya mu bihumbi by'abafite amakamyo n'amasosiyete amaze gutunganya ibikorwa byabo na FleetConnect. Tangira guhuza n'abakiriya no guteza imbere ubucuruzi bwawe uyu munsi.",
    "cta.startTrial": "Tangira Ikizamini cy'Ubuntu",
    "cta.scheduleDemo": "Shyiraho Icyitegererezo",

    // Footer
    "footer.tagline": "Guhindura ubuyobozi bw'amakamyo binyuze mu guhuza ubwenge n'ubwiyongere.",
    "footer.product": "Igicuruzwa",
    "footer.company": "Ikigo",
    "footer.support": "Ubufasha",
    "footer.about": "Kuri Twe",
    "footer.blog": "Blog",
    "footer.careers": "Akazi",
    "footer.helpCenter": "Ikigo cy'Ubufasha",
    "footer.documentation": "Inyandiko",
    "footer.status": "Uko Bimeze",
    "footer.community": "Umuryango",
    "footer.privacy": "Politiki y'Ubwoba",
    "footer.terms": "Amabwiriza y'Ubukoresha",
    "footer.cookies": "Politiki ya Cookies",
    "footer.rights": "Uburenganzira bwose burarinzwe.",
  },
}

const LANGUAGE_STORAGE_KEY = "fleetconnect-language"

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Helper function to get saved language from localStorage
const getSavedLanguage = (): Language => {
  if (typeof window === "undefined") return "en" // Default for SSR

  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (saved && (saved === "en" || saved === "rw")) {
      return saved as Language
    }
  } catch (error) {
    console.warn("Failed to read language preference from localStorage:", error)
  }

  return "en" // Default fallback
}

// Helper function to save language to localStorage
const saveLanguage = (language: Language): void => {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  } catch (error) {
    console.warn("Failed to save language preference to localStorage:", error)
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize language from localStorage on client side
  useEffect(() => {
    const savedLanguage = getSavedLanguage()
    setLanguageState(savedLanguage)
    setIsInitialized(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    saveLanguage(lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  // Don't render until we've initialized the language from localStorage
  // This prevents hydration mismatches
  if (!isInitialized) {
    return null
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}