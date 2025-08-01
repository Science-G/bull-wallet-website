"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const features = [
  {
    title: "Lightning Network Integration",
    description: "Instant Bitcoin payments with minimal fees through Lightning Network channels."
  },
  {
    title: "Advanced Security",
    description: "Multi-signature wallets, hardware wallet support, and end-to-end encryption."
  },
  {
    title: "Privacy Features",
    description: "CoinJoin integration and Tor support for maximum transaction privacy."
  },
  {
    title: "DCA Automation",
    description: "Automated dollar-cost averaging with customizable schedules and amounts."
  }
]

export default function AppShowcase() {
  const [openFeature, setOpenFeature] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-zinc-900 text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-[500px] bg-black rounded-3xl border-4 border-gray-700 p-4 shadow-2xl">
                <div className="w-full h-full bg-zinc-900 rounded-2xl flex flex-col">
                  <div className="h-6 bg-zinc-800 rounded-t-2xl flex items-center justify-center">
                    <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                  <div className="flex-1 p-4 text-center flex flex-col justify-center">
                    <div className="text-2xl font-bold mb-2">Bull Bitcoin</div>
                    <div className="text-sm text-gray-400 mb-6">Your Bitcoin, Your Way</div>
                    <div className="space-y-3">
                      <div className="h-8 bg-white/10 rounded"></div>
                      <div className="h-8 bg-white/10 rounded"></div>
                      <div className="h-8 bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Experience Bitcoin Like Never Before
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Our mobile app brings the full power of Bitcoin to your fingertips. Trade, store, and spend Bitcoin with confidence.
            </p>

            {/* Testimonial */}
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-8">
              <blockquote className="text-lg italic text-gray-300 mb-4">
                "Bull Bitcoin's app is the most intuitive Bitcoin wallet I've ever used. The Lightning integration is seamless."
              </blockquote>
              <cite className="text-sm text-gray-400">— Sarah M., Long-time Bitcoin user</cite>
            </div>

            {/* Features Accordion */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="border border-white/10 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFeature(openFeature === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-semibold">{feature.title}</span>
                    {openFeature === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {openFeature === index && (
                    <div className="px-4 pb-4 text-gray-300">
                      {feature.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 