"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const features = [
  {
    title: "Invest in real Bitcoin",
    description: "We offer multiple ways to acquire Bitcoin:\n• Buy on-chain, with Lightning or Liquid Network\n• Purchases sent straight to your wallet\n• Dollar-cost averaging strategies\n• Limit orders to buy the dip\n• Automated buying from your bank account"
  },
  {
    title: "Hold Bitcoin for long term",
    description: "The Bull Bitcoin wallet allows you to:\n• Secure your wealth without trusting a custodian\n• Easily protect yourself against loss and theft\n• Connect to your hardware wallet\n• View your holdings in real time"
  },
  {
    title: "Use Bitcoin for payments",
    description: "Straight from your Bitcoin wallet, you can:\n• Send bank transfers to anyone\n• Pay your bills (yes, really!)\n• Send and receive Bitcoin payments\n• Automatically convert Bitcoin transaction to fiat"
  },
  {
    title: "Your business on a Bitcoin standard",
    description: "We help our business clients:\n• Accumulate Bitcoin for their corporate treasury\n• Accept Bitcoin payments for their business\n• Pay suppliers and staff with Bitcoin\n• Large commercial transactions\n• Automatically convert Bitcoin to fiat payments and vice-versa\n• Consulting for all types of Bitcoin integrations"
  }
]

export default function AppShowcase() {
  const [openFeature, setOpenFeature] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-white text-black">
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
                    <div className="text-2xl font-bold mb-2 text-white">Bull Bitcoin</div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
              Full-stack toolkit for your Bitcoin journey
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Experience Bitcoin the right way, without giving up self-custody.
            </p>

            {/* Features Accordion */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFeature(openFeature === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors text-black"
                  >
                    <span className="font-semibold">{feature.title}</span>
                    {openFeature === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {openFeature === index && (
                    <div className="px-4 pb-4 text-gray-600">
                      {feature.description.split('\n').map((line, lineIndex) => (
                        <div key={lineIndex} className={lineIndex === 0 ? "mb-3" : "mb-1"}>
                          {line.startsWith('•') ? (
                            <div className="flex items-start">
                              <span className="mr-2 text-gray-400">•</span>
                              <span>{line.substring(1).trim()}</span>
                            </div>
                          ) : (
                            <span className={lineIndex === 0 ? "font-medium" : ""}>{line}</span>
                          )}
                        </div>
                      ))}
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