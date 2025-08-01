"use client"
import Image from "next/image"

export default function WalletScreenshots() {
  const screenshots = [
    {
      title: "Dashboard",
      description: "Clean, intuitive interface showing your Bitcoin balance and recent transactions",
      image: "/bitcoin-wallet-dark.png",
    },
    {
      title: "Send Bitcoin",
      description: "Simple and secure Bitcoin sending with QR code scanning and address validation",
      image: "/bitcoin-privacy-dark.png",
    },
    {
      title: "Receive Bitcoin",
      description: "Generate fresh addresses for enhanced privacy with customizable labels",
      image: "/bitcoin-wallet-security.png",
    },
    {
      title: "Transaction History",
      description: "Detailed transaction history with privacy-preserving labels and notes",
      image: "/bitcoin-office-meeting.png",
    },
  ]

  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter">Experience Bull Wallet</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            See how Bull Wallet makes Bitcoin management simple, secure, and private
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[9/16] bg-zinc-900 rounded-2xl p-3 mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-black rounded-xl overflow-hidden relative">
                  <Image
                    src={screenshot.image || "/placeholder.svg"}
                    alt={screenshot.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{screenshot.title}</h3>
              <p className="text-sm text-zinc-400">{screenshot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
