import { CountryPageTemplate } from "@/components/countries/country-page-template"

export default function CostaRicaPage() {
  return (
    <CountryPageTemplate
      country="Costa Rica"
      flagImage="/country-logos/costa-rica-logo.png"
      coatOfArmsImage="/country-logos/costa-rica-coat-of-arms.svg"
      paymentAdvantageText="Bull Bitcoin offers tailored payment solutions for Costa Rica, with direct integration to local banking systems that provide faster and more reliable transactions than our competitors. Our SINPE connections enable seamless transfers that other platforms simply can't match."
      paymentMethods={[
        {
          name: "SINPE Transfers",
          description:
            "Instant transfers using Costa Rica's National Electronic Payment System with higher limits and faster processing than competitors.",
          icon: "⚡",
        },
        {
          name: "Local Bank Transfers",
          description:
            "Direct connections with all major Costa Rican banks including BAC, Banco Nacional, and Banco de Costa Rica.",
          icon: "🏦",
        },
        {
          name: "TUCAN Mobile Payments",
          description: "Integration with Costa Rica's popular mobile payment system for instant Bitcoin purchases.",
          icon: "📱",
        },
        {
          name: "Colón-Optimized Pricing",
          description: "Special pricing in Costa Rican colones with minimal spread and competitive rates.",
          icon: "💰",
        },
      ]}
      uniqueFeatures={[
        {
          title: "Tourism Integration",
          description:
            "Special features for tourists and expats in Costa Rica, including dollar-to-colón conversion and Bitcoin spending options at tourist destinations.",
          icon: "🏝️",
        },
        {
          title: "Eco-Friendly Mining",
          description:
            "Support for Costa Rica's renewable energy Bitcoin mining initiatives, with options to purchase eco-friendly mined Bitcoin.",
          icon: "♻️",
        },
        {
          title: "Cross-Border Payments",
          description:
            "Optimized solutions for businesses handling transactions between Costa Rica and other Central American countries.",
          icon: "🌎",
        },
      ]}
      languageName="Spanish"
      teamMembers={[
        {
          name: "Elena Jiménez",
          role: "Costa Rica Country Manager",
          image: "/placeholder-78slp.png",
          bio: "Elena has deep experience in Costa Rican fintech and has been instrumental in establishing Bull Bitcoin's presence in the country.",
        },
        {
          name: "Roberto Campos",
          role: "Technical Support Lead",
          image: "/placeholder-bm9ub.png",
          bio: "Based in San José, Roberto ensures all Costa Rican customers receive prompt technical support in Spanish with local context.",
        },
        {
          name: "Isabella Mora",
          role: "Business Development",
          image: "/placeholder-prhxx.png",
          bio: "Isabella focuses on building partnerships with Costa Rican businesses and promoting Bitcoin adoption throughout the country.",
        },
      ]}
    />
  )
}
