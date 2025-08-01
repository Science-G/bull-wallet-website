"use client"
import { Shield, Eye, Lock, Zap, QrCode, Smartphone, Key, Globe, Clock, Users, CreditCard, Wifi } from "lucide-react"

export default function WalletFeatures() {
  const featureCategories = [
    {
      title: "General Features",
      icon: Smartphone,
      features: [
        {
          icon: QrCode,
          title: "QR Code Scanning",
          description: "Instantly scan Bitcoin addresses and payment requests",
        },
        {
          icon: Clock,
          title: "Transaction History",
          description: "Complete history with detailed transaction information",
        },
        {
          icon: Globe,
          title: "Multi-Language Support",
          description: "Available in multiple languages for global users",
        },
        {
          icon: Smartphone,
          title: "Mobile Optimized",
          description: "Native iOS and Android apps with smooth performance",
        },
      ],
    },
    {
      title: "Privacy Features",
      icon: Eye,
      features: [
        {
          icon: Eye,
          title: "Address Reuse Prevention",
          description: "Automatically generates new addresses for each transaction",
        },
        {
          icon: Shield,
          title: "Coin Control",
          description: "Advanced UTXO management for enhanced privacy",
        },
        {
          icon: Lock,
          title: "No Data Collection",
          description: "We don't track, store, or share your personal information",
        },
        {
          icon: Globe,
          title: "Tor Support",
          description: "Route transactions through Tor for network-level privacy",
        },
      ],
    },
    {
      title: "Security Features",
      icon: Shield,
      features: [
        {
          icon: Key,
          title: "Self-Custody",
          description: "You control your private keys, we never have access",
        },
        {
          icon: Lock,
          title: "Biometric Security",
          description: "Fingerprint and Face ID protection for app access",
        },
        {
          icon: Shield,
          title: "Multi-Signature Support",
          description: "Enhanced security with multi-signature wallet options",
        },
        {
          icon: Zap,
          title: "Hardware Wallet Integration",
          description: "Connect with popular hardware wallets for cold storage",
        },
      ],
    },
    {
      title: "Payment Features",
      icon: CreditCard,
      features: [
        {
          icon: Zap,
          title: "Lightning Network",
          description: "Instant, low-cost Bitcoin payments via Lightning",
        },
        {
          icon: CreditCard,
          title: "Bill Payments",
          description: "Pay bills directly with Bitcoin from your wallet",
        },
        {
          icon: Users,
          title: "Contact Management",
          description: "Save frequently used addresses with custom labels",
        },
        {
          icon: Wifi,
          title: "Offline Signing",
          description: "Sign transactions offline for maximum security",
        },
      ],
    },
  ]

  return (
    <section className="bg-black py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter">Built for Bitcoiners</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Every feature designed with privacy, security, and sovereignty in mind
          </p>
        </div>

        <div className="space-y-16">
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="bg-zinc-950 border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-colors"
                  >
                    <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-zinc-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
