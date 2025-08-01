"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"

export default function MinimalistMonochromeCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const products = [
    {
      id: 1,
      title: "EXCHANGE WEBSITE",
      summary: "Buy, sell and pay bills with Bitcoin instantly",
      description:
        "Easy-to-use portal to buy Bitcoin, sell Bitcoin and send bank transfers to and from Bitcoin wallets, with built-in customer service and powerful features.",
      primaryAction: { label: "JOIN NOW", href: "/rates" },
      secondaryAction: { label: "FEATURES", href: "/features" },
      accent: "#ffffff",
      featured: true,
    },
    {
      id: 2,
      title: "PRIME DESK",
      summary: "Large or corporate transactions with VIP service",
      description:
        "VIP advisory service with an OTC experience for high-net-worth individuals and business clients with specific requirements. From real estate to corporate treasure, and simple large transactions.",
      primaryAction: { label: "CONTACT US", href: "/prime" },
      secondaryAction: { label: "CASE STUDIES", href: "/case-studies" },
      accent: "#ffffff",
      featured: false,
    },
    {
      id: 3,
      title: "BULL WALLET",
      summary: "Powerful self-custody tool to hold, spend and trade Bitcoin",
      description:
        "The world's best self-custodial Bitcoin wallets for day-to-day payments, with cold storage options. Suitable for beginners and pros alike. Fully open-source, with security and privacy focus.",
      primaryAction: { label: "DOWNLOAD", href: "/wallet" },
      secondaryAction: { label: "FEATURES", href: "/features" },
      accent: "#ffffff",
      featured: false,
    },
  ]

  return (
    <section className="section-spacing bg-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 md:mb-24 tracking-tighter">Our Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-black relative product-card"
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`
                mono-product-card border-t border-zinc-800 h-full flex flex-col
                ${hoveredCard === product.id ? "border-t-white" : "border-t-zinc-800"}
                transition-all duration-300
              `}
              >
                {/* Product number */}
                <div className="absolute top-6 right-6 text-xs font-mono text-zinc-600">
                  {String(product.id).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="pt-16 pb-8 px-6 md:px-8 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold tracking-wider mb-4">{product.title}</h3>

                  {/* Summary */}
                  <p className="text-base md:text-lg text-zinc-300 mb-6">{product.summary}</p>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 mb-auto leading-relaxed">{product.description}</p>

                  {/* Actions - Now at the bottom with mt-auto */}
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link
                      href={product.primaryAction.href}
                      className={`
                      group flex items-center justify-between py-4 px-5 border 
                      ${hoveredCard === product.id ? "border-white text-white" : "border-zinc-800 text-zinc-400"}
                      transition-all duration-300 hover:border-white hover:text-white
                    `}
                    >
                      <span className="text-sm tracking-wider font-medium">{product.primaryAction.label}</span>
                      <ArrowRight
                        size={18}
                        className={`
                        transform transition-transform duration-300
                        ${hoveredCard === product.id ? "translate-x-1" : ""}
                        group-hover:translate-x-1
                      `}
                      />
                    </Link>

                    <Link
                      href={product.secondaryAction.href}
                      className="group flex items-center justify-between py-4 px-5 text-zinc-600 hover:text-zinc-300 transition-colors duration-300"
                    >
                      <span className="text-sm tracking-wider font-medium">{product.secondaryAction.label}</span>
                      <ChevronRight
                        size={18}
                        className="opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </Link>
                  </div>
                </div>

                {/* Bottom accent line that expands on hover */}
                <div
                  className={`
                  absolute bottom-0 left-0 h-px bg-white transition-all duration-500 ease-out
                  ${hoveredCard === product.id ? "w-full" : "w-0"}
                `}
                ></div>

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-6 h-px bg-zinc-800"></div>
                <div className="absolute top-0 right-0 h-6 w-px bg-zinc-800"></div>
                <div className="absolute bottom-0 left-0 w-6 h-px bg-zinc-800"></div>
                <div className="absolute bottom-0 left-0 h-6 w-px bg-zinc-800"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
