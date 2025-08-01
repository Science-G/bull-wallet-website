import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WalletHero from "@/components/wallet/wallet-hero"
import WalletFeatures from "@/components/wallet/wallet-features"
import WalletPhilosophy from "@/components/wallet/wallet-philosophy"
import WalletDownload from "@/components/wallet/wallet-download"
import WalletScreenshots from "@/components/wallet/wallet-screenshots"

export const metadata = {
  title: "Bull Wallet | Self-Custody Bitcoin Wallet",
  description:
    "Take control of your Bitcoin with Bull Wallet. Enhanced privacy, security, and sovereignty in a beautiful mobile app.",
}

export default function WalletPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <WalletHero />
      <WalletScreenshots />
      <WalletFeatures />
      <WalletPhilosophy />
      <WalletDownload />
      <Footer />
    </main>
  )
}
