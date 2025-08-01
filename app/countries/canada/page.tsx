import { CountryPageTemplate } from "@/components/countries/country-page-template"

export default function CanadaPage() {
  return (
    <CountryPageTemplate
      country="Canada"
      flagImage="/country-logos/canada-logo.png"
      coatOfArmsImage="/country-logos/canada-coat-of-arms.png"
      paymentAdvantageText="Bull Bitcoin offers seamless integration with Canadian banking systems, allowing for faster and more reliable transactions than our competitors. Our Interac e-Transfer and direct bank connections are optimized for Canadian financial institutions."
      paymentMethods={[
        {
          name: "Interac e-Transfer",
          description:
            "Instant deposits and withdrawals using Canada's most popular payment method, with higher limits and faster processing than competitors.",
          icon: "💸",
        },
        {
          name: "Direct Bank Deposits",
          description:
            "Connect directly with all major Canadian banks for seamless transfers with lower fees and faster settlement times.",
          icon: "🏦",
        },
        {
          name: "Pre-authorized Debits",
          description:
            "Set up recurring purchases with secure pre-authorized payments directly from your Canadian bank account.",
          icon: "🔄",
        },
        {
          name: "Wire Transfers",
          description: "Secure, high-limit wire transfers for large transactions with Canadian financial institutions.",
          icon: "📤",
        },
      ]}
      uniqueFeatures={[
        {
          title: "CDIC-Eligible Custody",
          description:
            "Our Canadian custody solutions are eligible for CDIC protection, providing an extra layer of security for your Bitcoin.",
          icon: "🛡️",
        },
        {
          title: "CAD Dollar-Cost Averaging",
          description:
            "Automated Bitcoin purchases in CAD with customizable schedules tailored to the Canadian market.",
          icon: "📈",
        },
        {
          title: "Canadian Tax Reporting",
          description:
            "Simplified tax reporting tools designed specifically for Canadian tax regulations and CRA requirements.",
          icon: "📝",
        },
      ]}
      languageName="English and French"
      teamMembers={[
        {
          name: "Sarah Thompson",
          role: "Canada Regional Director",
          image: "/placeholder-gpiyf.png",
          bio: "Sarah has 8 years of experience in Canadian fintech and is an expert in navigating the Canadian regulatory landscape for Bitcoin businesses.",
        },
        {
          name: "Jean-Philippe Gauthier",
          role: "French Language Support Lead",
          image: "/placeholder-b0b9o.png",
          bio: "Based in Quebec, Jean-Philippe ensures our French-speaking customers receive support in their native language with local context.",
        },
        {
          name: "Michael Chen",
          role: "Canadian Banking Relations",
          image: "/placeholder-322xz.png",
          bio: "Michael maintains our relationships with Canadian financial institutions to ensure smooth banking operations for all our Canadian users.",
        },
      ]}
    />
  )
}
