"use client"

import type React from "react"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function RefinedSwissPrecisionCards() {
  const [downloadOpen, setDownloadOpen] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const toggleDownload = (e: React.MouseEvent) => {
    e.preventDefault()
    setDownloadOpen(!downloadOpen)
  }

  const products = [
    {
      id: 1,
      title: "EXCHANGE WEBSITE",
      summary: "Buy, sell and pay bills with Bitcoin instantly",
      description:
        "Easy-to-use portal to buy Bitcoin, sell Bitcoin and send bank transfers to and from Bitcoin wallets, with built-in customer service and powerful features.",
      primaryAction: { label: "JOIN NOW", href: "/rates" },
      secondaryAction: { label: "FEATURES", href: "/features" },
      accent: "#c0a080",
      featured: true,
    },
    {
      id: 2,
      title: "PRIME DESK",
      summary: "Large or corporate transations with VIP service",
      description:
        "VIP advisory service with an OTC experience for high-net-worth individuals and business clients with specific requirements. From real estate to corporate treasure, and simple large transactions.",
      primaryAction: { label: "CONTACT US", href: "/prime" },
      secondaryAction: { label: "CASE STUDIES", href: "/case-studies" },
      accent: "#a0a0a0",
      featured: false,
    },
    {
      id: 3,
      title: "BULL WALLET",
      summary: "Powerful self-custory tool to hold, spend and trade Bitcoin",
      description:
        "The world's best self-custodial Bitcoin wallets for day-to-day payments, with cold storage options. Suitable for beginners and pros alike. Fully open-source, with security and privacy focus.",
      primaryAction: {
        label: "DOWNLOAD",
        href: "#",
        hasDropdown: true,
        options: [
          { label: "Google Play", href: "/download/android" },
          { label: "App Store", href: "/download/ios" },
          { label: "Direct .apk", href: "/download/apk" },
        ],
      },
      secondaryAction: { label: "FEATURES", href: "/features" },
      accent: "#b0b0b0",
      featured: false,
    },
  ]

  return (
    <section className="section-spacing bg-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-16 precision-header">
          <div
            className="precision-accent-line"
            style={{ width: "40%", backgroundColor: "#c0a080", marginBottom: "1.5rem" }}
          ></div>
          <h2 className="precision-section-title">Our Products</h2>
          <div className="precision-markers mb-4">
            <div className="precision-marker"></div>
            <div className="precision-marker"></div>
            <div className="precision-marker"></div>
          </div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="precision-card"
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Subtle top accent line */}
              <div
                className="precision-accent-line"
                style={{
                  backgroundColor: product.accent,
                  width: hoveredCard === product.id ? "100%" : "40%",
                }}
              ></div>

              {/* Content */}
              <div className="precision-content">
                {/* Product identifier */}
                <div className="precision-identifier">
                  <div className="precision-index">{String(product.id).padStart(2, "0")}</div>
                </div>

                {/* Title */}
                <h3 className="precision-title">{product.title}</h3>

                {/* Feature Summary */}
                <p className="precision-summary">{product.summary}</p>

                {/* Description */}
                <p className="precision-description">{product.description}</p>

                {/* Precision markers */}
                <div className="precision-markers">
                  <div className="precision-marker"></div>
                  <div className="precision-marker"></div>
                  <div className="precision-marker"></div>
                </div>

                {/* Buttons */}
                <div className="precision-actions">
                  {product.primaryAction.hasDropdown ? (
                    <div className="precision-dropdown-container">
                      <button
                        onClick={toggleDownload}
                        className="precision-button primary"
                        style={{
                          backgroundColor: hoveredCard === product.id ? product.accent : "transparent",
                          color: hoveredCard === product.id ? "#000" : "#fff",
                          borderColor: product.accent,
                        }}
                      >
                        <span>{product.primaryAction.label}</span>
                        <ChevronDown
                          size={14}
                          className={`ml-2 transition-transform ${downloadOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {downloadOpen && (
                        <div className="precision-dropdown">
                          {product.primaryAction.options?.map((option, index) => (
                            <Link key={index} href={option.href} className="precision-dropdown-item">
                              {option.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={product.primaryAction.href}
                      className="precision-button primary"
                      style={{
                        backgroundColor: hoveredCard === product.id ? product.accent : "transparent",
                        color: hoveredCard === product.id ? "#000" : "#fff",
                        borderColor: product.accent,
                      }}
                    >
                      {product.primaryAction.label}
                    </Link>
                  )}
                  <Link
                    href={product.secondaryAction.href}
                    className="precision-button secondary"
                    style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    {product.secondaryAction.label}
                  </Link>
                </div>
              </div>

              {/* Corner details */}
              <div className="precision-corner top-left"></div>
              <div className="precision-corner top-right"></div>
              <div className="precision-corner bottom-left"></div>
              <div className="precision-corner bottom-right"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
  .product-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (min-width: 768px) {
    .product-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .product-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .precision-card {
    background-color: #0a0a0a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .precision-card:hover {
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  
  .precision-accent-line {
    height: 2px;
    transition: width 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  }
  
  .precision-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .precision-identifier {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1.5rem;
  }
  
  .precision-index {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 0.75rem;
    font-weight: 300;
    letter-spacing: 1px;
    opacity: 0.5;
  }
  
  .precision-title {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 0.75rem;
  }
  
  .precision-title:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 2rem;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .precision-summary {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }
  
  .precision-description {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 0.875rem;
    line-height: 1.6;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
    flex-grow: 1;
  }
  
  .precision-markers {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
  
  .precision-marker {
    width: 2rem;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .precision-actions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: auto;
  }
  
  .precision-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 1px;
    border: 1px solid;
    transition: all 0.3s ease;
    cursor: pointer;
    text-align: center;
  }
  
  .precision-button.primary {
    border-width: 1px;
  }
  
  .precision-button.secondary {
    background-color: transparent;
  }
  
  .precision-button.secondary:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  .precision-dropdown-container {
    position: relative;
  }
  
  .precision-dropdown {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    margin-top: 0.5rem;
    background-color: #0a0a0a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 10;
  }
  
  .precision-dropdown-item {
    display: block;
    padding: 0.75rem 1rem;
    font-size: 0.75rem;
    transition: background-color 0.2s;
  }
  
  .precision-dropdown-item:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  .precision-corner {
    position: absolute;
    width: 6px;
    height: 6px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.2);
    border-width: 0;
  }
  
  .precision-corner.top-left {
    top: 10px;
    left: 10px;
    border-top-width: 1px;
    border-left-width: 1px;
  }
  
  .precision-corner.top-right {
    top: 10px;
    right: 10px;
    border-top-width: 1px;
    border-right-width: 1px;
  }
  
  .precision-corner.bottom-left {
    bottom: 10px;
    left: 10px;
    border-bottom-width: 1px;
    border-left-width: 1px;
  }
  
  .precision-corner.bottom-right {
    bottom: 10px;
    right: 10px;
    border-bottom-width: 1px;
    border-right-width: 1px;
  }
  
  @media (min-width: 768px) {
    .precision-actions {
      flex-direction: row;
    }
    
    .precision-button {
      flex: 1;
    }
  }

  .precision-section-title {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 0.75rem;
  }
  
  .precision-section-title:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 3rem;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .precision-header {
    position: relative;
  }
  
  @media (min-width: 768px) {
    .precision-section-title {
      font-size: 2.5rem;
    }
  }
`}</style>
    </section>
  )
}
