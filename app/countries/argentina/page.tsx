import { CountryPageTemplate } from "@/components/countries/country-page-template"

export default function ArgentinaPage() {
  return (
    <CountryPageTemplate
      country="Argentina"
      flagImage="/country-logos/argentina-logo.png"
      coatOfArmsImage="/country-logos/argentina-coat-of-arms.png"
      paymentAdvantageText="Bull Bitcoin provides specialized solutions for Argentina's unique financial landscape, offering more reliable and inflation-resistant options than competitors. Our local payment integrations are designed to work seamlessly even during periods of economic volatility."
      paymentMethods={[
        {
          name: "Mercado Pago Integration",
          description:
            "Seamless connection with Argentina's most popular payment platform for instant Bitcoin purchases with lower fees than competitors.",
          icon: "💳",
        },
        {
          name: "Rapipago & Pago Fácil",
          description:
            "Cash deposit options at thousands of locations throughout Argentina, making Bitcoin accessible to everyone regardless of banking status.",
          icon: "🏪",
        },
        {
          name: "CBU/CVU Transfers",
          description:
            "Direct bank transfers using Argentina's Uniform Banking Codes with higher limits and faster processing.",
          icon: "🏦",
        },
        {
          name: "Stablecoin Bridges",
          description:
            "USD stablecoin options to protect against peso volatility, with instant conversion to and from Bitcoin.",
          icon: "🔄",
        },
      ]}
      uniqueFeatures={[
        {
          title: "Inflation Protection",
          description:
            "Specialized tools designed specifically to help Argentinians protect their savings from peso inflation through Bitcoin.",
          icon: "🛡️",
        },
        {
          title: "Blue Dollar Rates",
          description:
            "Transparent pricing that accounts for Argentina's parallel exchange rates, offering fair value compared to the 'dólar blue'.",
          icon: "💱",
        },
        {
          title: "Regulatory Navigation",
          description:
            "Tools and guidance to help users navigate Argentina's evolving cryptocurrency regulations and tax requirements.",
          icon: "📝",
        },
      ]}
      languageName="Spanish"
      teamMembers={[
        {
          name: "Martín Rodriguez",
          role: "Argentina Regional Director",
          image: "/placeholder-gpiyf.png",
          bio: "Martín has extensive experience in Argentine fintech and understands the unique challenges of the local financial system.",
        },
        {
          name: "Valentina Gómez",
          role: "Customer Support Manager",
          image: "/placeholder-b0b9o.png",
          bio: "Based in Buenos Aires, Valentina leads our Argentine support team and ensures all customers receive assistance that understands local context.",
        },
        {
          name: "Alejandro Blanco",
          role: "Economic Advisor",
          image: "/placeholder-322xz.png",
          bio: "Alejandro specializes in Argentine monetary policy and helps develop features that protect users from local economic volatility.",
        },
      ]}
    />
  )
}
