"use client"
import Image from "next/image"
import { Download, Shield, Eye, Smartphone } from "lucide-react"

export default function WalletHero() {
  return (
    <section className="relative bg-black pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image src="/nordic-pattern-white.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-8 h-8 text-white" />
              <span className="text-sm uppercase tracking-wider text-zinc-400">Bull Wallet</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter">
              Your Bitcoin.
              <br />
              <span className="text-zinc-400">Your Keys.</span>
              <br />
              Your Rules.
            </h1>

            <div className="h-px w-24 bg-white opacity-30 mb-8"></div>

            <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl">
              Take complete control of your Bitcoin with Bull Wallet. Built for Bitcoiners who refuse to compromise on
              privacy, security, or sovereignty.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-white" />
                <span className="text-sm text-zinc-300">Self-Custody</span>
              </div>
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-white" />
                <span className="text-sm text-zinc-300">Enhanced Privacy</span>
              </div>
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-white" />
                <span className="text-sm text-zinc-300">Easy Setup</span>
              </div>
            </div>

            {/* Download CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-4 font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download for iOS
              </button>
              <button className="border border-white text-white px-8 py-4 font-medium hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download for Android
              </button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-96 bg-zinc-900 rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
                <Image src="/bitcoin-wallet-dark.png" alt="Bull Wallet Interface" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
