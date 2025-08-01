// Define the Feature type
export interface Feature {
  id: string
  title: string
  category: string
  description: string
  differentiator: string // Retained for data structure, but not displayed on card
  icon: string
  country: string | null
}

// New feature data based on your input
export const features: Feature[] = [
  {
    id: "kyc",
    title: "Smooth, fast and respectful KYC",
    category: "Onboarding",
    description:
      "Onboarding takes 5 minutes or less. We value your time and your privacy. We understand how frustrating paperwork can be. We are not robots and we treat you like a human. We make the registration as painless as possible.",
    differentiator: "Human-centric, 5-minute onboarding valuing your time and privacy.",
    icon: "UserCheck",
    country: null,
  },
  {
    id: "bypass-bank",
    title: "Bypass the bank",
    category: "Payments",
    description:
      "You send us Bitcoin and we’ll send a bank transfer to any person or business on your behalf. The funds never touch your bank account. Use Bitcoin to pay bills, suppliers, staff or merchants. The recipient never needs to know about Bitcoin. Life hack!",
    differentiator: "Use Bitcoin to pay anyone via bank transfer, keeping your bank out of the loop.",
    icon: "Send",
    country: null,
  },
  {
    id: "price-lock",
    title: "Price lock-in without deposit",
    category: "Trading",
    description:
      "When converting Bitcoin to fiat, we guarantee the exchange rate as soon as you send the Bitcoin transaction. No need to deposit Bitcoin in advance in order to sell, no need to wait for a confirmation for the price to be locked in.",
    differentiator: "Guaranteed exchange rate upon sending Bitcoin, no pre-deposit or confirmation wait.",
    icon: "Lock",
    country: null,
  },
  {
    id: "transparent-fees",
    title: "Honest and transparent fees",
    category: "Transparency",
    description:
      "Other exchanges confuse (scam?) you by combining spreads, transaction fees, deposit fees and withdrawal fees. It’s hard to even know how much fees you end up paying. Bull Bitcoin has an all-inclusive and publicly visible buy price and sell price: what you see is what you get.",
    differentiator: "All-inclusive, publicly visible pricing. No hidden fees, what you see is what you get.",
    icon: "Eye",
    country: null,
  },
  {
    id: "advanced-tech",
    title: "Advanced Bitcoin technologies",
    category: "Technology",
    description:
      "We support Lightning Network, Liquid Network and Payjoin payments. We never reuse Bitcoin addresses and our technology protects your onchain privacy. Reliably fast transactions with optimized network fees.",
    differentiator: "Support for Lightning, Liquid, Payjoin, plus enhanced privacy and efficiency.",
    icon: "Cpu",
    country: null,
  },
  {
    id: "investment-strategies",
    title: "Automated investment strategies",
    category: "Investing",
    description:
      "We enable four different Bitcoin investment strategies.\n\n- Instant buy: buy Bitcoin at the click of a button.\n- Recurring buy: schedule a buying program (dollar-cost-averaging).\n- Limit order: buy Bitcoin only when the price drops.\n- Auto-buy: trigger Bitcoin purchases from your bank account.",
    differentiator: "Four distinct automated strategies: Instant, Recurring, Limit, and Auto-buy.",
    icon: "TrendingUp",
    country: null,
  },
]

// Country colors for styling (can be kept if used elsewhere, but new features don't use countries)
export const countryColors = {
  Canada: "#ff4b4b",
  "Costa Rica": "#50b83c",
  Mexico: "#47c1bf",
  Argentina: "#5c6ac4",
  Europe: "#9c6ade",
}

// Category colors for styling - these are used by FeatureCard if not overridden there
// These should align with the new categories or be defined in FeatureCard.tsx
export const categoryColors: { [key: string]: { bg: string; text: string } } = {
  Onboarding: { bg: "rgba(220, 235, 255, 0.15)", text: "rgba(100, 150, 255, 1)" },
  Payments: { bg: "rgba(220, 255, 230, 0.15)", text: "rgba(70, 200, 100, 1)" },
  Trading: { bg: "rgba(255, 245, 220, 0.15)", text: "rgba(255, 180, 70, 1)" },
  Transparency: { bg: "rgba(240, 230, 255, 0.15)", text: "rgba(180, 130, 255, 1)" },
  Technology: { bg: "rgba(255, 230, 240, 0.15)", text: "rgba(255, 100, 150, 1)" },
  Investing: { bg: "rgba(255, 240, 224, 0.15)", text: "rgba(255, 160, 80, 1)" },
  Default: { bg: "rgba(51, 51, 51, 0.3)", text: "#fff" },
}

// List of countries for filtering (can be kept if used elsewhere)
export const siteCountries = ["Canada", "Costa Rica", "Mexico", "Argentina", "Europe"]

// Log the features data for debugging
// console.log("Features data loaded:", features.length, "features found")

// Export the features for use in components
export default features
