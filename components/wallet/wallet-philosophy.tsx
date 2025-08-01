"use client"
import Image from "next/image"
import { Shield, Eye, Key, Zap } from "lucide-react"

export default function WalletPhilosophy() {
  const principles = [
    {
      icon: Key,
      title: "Self-Sovereignty",
      description: "Your Bitcoin, your keys, your control. We believe in true ownership without intermediaries.",
    },
    {
      icon: Eye,
      title: "Privacy by Design",
      description:
        "Privacy isn't a feature—it's a fundamental right. Every aspect of Bull Wallet protects your financial privacy.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Built with security as the foundation, not an afterthought. Your Bitcoin deserves military-grade protection.",
    },
    {
      icon: Zap,
      title: "Simplicity",
      description: "Complex security made simple. Advanced features accessible to everyone, from beginners to experts.",
    },
  ]

  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter">Our Philosophy</h2>
            <div className="h-px w-24 bg-white opacity-30 mb-8"></div>

            <p className="text-lg text-zinc-400 mb-8">
              Bull Wallet embodies the core principles of Bitcoin: decentralization, privacy, and individual
              sovereignty. We believe that financial freedom requires tools that respect your privacy and put you in
              complete control.
            </p>

            <div className="space-y-6">
              {principles.map((principle, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                    <p className="text-zinc-400">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative aspect-square bg-zinc-900 rounded-2xl overflow-hidden">
              <Image src="/bitcoin-privacy-dark.png" alt="Bitcoin Privacy and Security" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Floating Quote */}
            <div className="absolute -bottom-8 -left-8 bg-black border border-zinc-800 p-6 rounded-lg max-w-sm">
              <blockquote className="text-sm text-zinc-300 italic">
                "Not your keys, not your Bitcoin. Bull Wallet ensures you always maintain complete control over your
                financial sovereignty."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
