"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    title: "EXCHANGE WEBSITE",
    summary: "Buy, sell and pay bills with Bitcoin instantly",
    description: "Easy-to-use portal to buy Bitcoin, sell Bitcoin and send bank transfers to and from Bitcoin wallets, with built-in customer service and powerful features.",
    primaryAction: { label: "JOIN NOW", href: "/rates" },
    secondaryAction: { label: "FEATURES", href: "/features" },
    featured: true,
  },
  {
    id: 2,
    title: "PRIME DESK",
    summary: "Large or corporate transactions",
    description: "VIP service for large transactions and corporate clients with dedicated account managers and custom solutions.",
    primaryAction: { label: "CONTACT US", href: "/otc" },
    secondaryAction: { label: "LEARN MORE", href: "/otc" },
    featured: false,
  },
  {
    id: 3,
    title: "BULL WALLET",
    summary: "Self-custody Bitcoin wallet",
    description: "Advanced Bitcoin wallet with cutting-edge privacy features and seamless integration with Bull Bitcoin services.",
    primaryAction: { label: "DOWNLOAD", href: "/wallet" },
    secondaryAction: { label: "FEATURES", href: "/wallet" },
    featured: false,
  },
]

export default function EnhancedProductSection() {
  return (
    <section className="py-16 md:py-24 bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 nordic-pattern"></div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white fade-in-up">
            Our Products
          </h2>
          <p className="text-lg md:text-xl text-gray-400 fade-in-up">
            We build Bitcoin products that prioritize security, privacy, and sovereignty. Our solutions are designed for Bitcoiners who refuse to compromise on their values.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`product-card bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 relative overflow-hidden ${
                product.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                  {product.title}
                </h3>
                <p className="text-lg text-gray-300 mb-4">
                  {product.summary}
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={product.primaryAction.href}
                    className="inline-flex items-center justify-center bg-white text-black px-6 py-3 font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors duration-300"
                  >
                    {product.primaryAction.label}
                  </Link>
                  <Link
                    href={product.secondaryAction.href}
                    className="inline-flex items-center justify-center border border-white/30 bg-transparent text-white px-6 py-3 font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    {product.secondaryAction.label}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 