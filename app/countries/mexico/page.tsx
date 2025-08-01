import { CountryPageTemplate } from "@/components/countries/country-page-template"

export default function MexicoPage() {
  return (
    <CountryPageTemplate
      country="Mexico"
      flagImage="/country-logos/mexico-logo.png"
      coatOfArmsImage="/country-logos/mexico-coat-of-arms.png"
      paymentAdvantageText="Bull Bitcoin provides specialized payment solutions for the Mexican market, offering faster and more reliable connections to local banking systems than competitors. Our integration with SPEI enables instant transfers that other platforms can't match."
      paymentMethods={[
        {
          name: "SPEI Transfers",
          description:
            "Instant transfers using Mexico's Interbank Electronic Payment System with higher limits and faster processing than competitors.",
          icon: "⚡",
        },
        {
          name: "Oxxo Payments",
          description:
            "Cash deposits at thousands of Oxxo locations throughout Mexico, making Bitcoin accessible to everyone regardless of banking status.",
          icon: "🏪",
        },
        {
          name: "Mexican Debit Cards",
          description:
            "Direct connections with all major Mexican banks for seamless debit card purchases with lower fees.",
          icon: "💳",
        },
        {
          name: "Mobile Banking Apps",
          description: "Integrations with popular Mexican mobile banking applications for one-click Bitcoin purchases.",
          icon: "📱",
        },
      ]}
      uniqueFeatures={[
        {
          title: "Peso Protection",
          description:
            "Special features to protect against peso volatility when buying and holding Bitcoin, designed specifically for the Mexican market.",
          icon: "🔒",
        },
        {
          title: "Remittance Optimization",
          description:
            "Tools designed for Mexicans receiving remittances from abroad, with competitive rates and instant conversion options.",
          icon: "🌎",
        },
        {
          title: "Mexican Tax Compliance",
          description:
            "Automated reporting tools that comply with SAT requirements and Mexican tax regulations for cryptocurrency.",
          icon: "📊",
        },
      ]}
      languageName="Spanish"
      teamMembers={[
        {
          name: "Carlos Mendoza",
          role: "Mexico Regional Manager",
          image: "/placeholder-rcmhy.png",
          bio: "Carlos has extensive experience in Mexican fintech and has been instrumental in building our payment infrastructure throughout Mexico.",
        },
        {
          name: "Lucia Hernandez",
          role: "Customer Support Lead",
          image: "/placeholder-72gvg.png",
          bio: "Based in Mexico City, Lucia leads our Spanish-language support team and ensures all Mexican customers receive prompt, helpful assistance.",
        },
        {
          name: "Miguel Fuentes",
          role: "Regulatory Compliance Officer",
          image: "/placeholder-ppeky.png",
          bio: "Miguel specializes in Mexican cryptocurrency regulations and ensures Bull Bitcoin remains compliant with all local laws and requirements.",
        },
      ]}
    />
  )
}
