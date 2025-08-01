import { CountryPageTemplate } from "@/components/countries/country-page-template"

export default function EuropePage() {
  return (
    <CountryPageTemplate
      country="Europe"
      flagImage="/country-logos/europe-logo.png"
      paymentAdvantageText="Bull Bitcoin offers comprehensive European payment solutions that work seamlessly across the EU and EEA. Our SEPA integration provides faster transfers and lower fees than competitors, with support for multiple European currencies and banking systems."
      paymentMethods={[
        {
          name: "SEPA Transfers",
          description:
            "Fast and reliable transfers using the Single Euro Payments Area network, covering all EU countries with higher limits than competitors.",
          icon: "🇪🇺",
        },
        {
          name: "SOFORT Banking",
          description:
            "Instant purchases using direct bank authentication in Germany, Austria, Switzerland, and other supported countries.",
          icon: "⚡",
        },
        {
          name: "iDEAL Integration",
          description:
            "Seamless connection with the Netherlands' most popular payment method for instant Bitcoin purchases.",
          icon: "🇳🇱",
        },
        {
          name: "Multi-Currency Support",
          description:
            "Support for EUR, GBP, CHF, and other European currencies with competitive exchange rates and minimal spread.",
          icon: "💶",
        },
      ]}
      uniqueFeatures={[
        {
          title: "GDPR Compliance",
          description:
            "Industry-leading privacy protection that exceeds European data protection requirements, giving you full control over your personal information.",
          icon: "🔒",
        },
        {
          title: "Multi-Language Platform",
          description:
            "Full support for major European languages including German, French, Italian, Spanish, and Dutch throughout our platform.",
          icon: "🌐",
        },
        {
          title: "EU Regulatory Compliance",
          description:
            "Full compliance with MiCA and other European cryptocurrency regulations, ensuring a safe and legal experience.",
          icon: "⚖️",
        },
      ]}
      languageName="Multiple European Languages"
      teamMembers={[
        {
          name: "Thomas Schmidt",
          role: "European Operations Director",
          image: "/placeholder-rcmhy.png",
          bio: "Based in Berlin, Thomas oversees all European operations and ensures compliance with the diverse regulatory requirements across the EU.",
        },
        {
          name: "Sophie Dubois",
          role: "French & Southern Europe Lead",
          image: "/placeholder-72gvg.png",
          bio: "Sophie manages our operations in France, Italy, Spain, and Portugal, providing native language support for Southern European users.",
        },
        {
          name: "Jan Kowalski",
          role: "Eastern Europe Specialist",
          image: "/placeholder-ppeky.png",
          bio: "Jan focuses on Eastern European markets, ensuring our services are optimized for countries like Poland, Czechia, and the Baltic states.",
        },
      ]}
    />
  )
}
