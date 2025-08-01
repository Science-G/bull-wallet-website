"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProductCards() {
  const products = [
    {
      title: "Exchange",
      description: "Buy and sell Bitcoin with the most trusted exchange in the industry.",
      image: "/bitcoin-wallet-dark.png",
      link: "/exchange",
    },
    {
      title: "Wallet",
      description: "Self-custody solution with enhanced privacy and security features.",
      image: "/bitcoin-privacy-dark.png",
      link: "/wallet",
    },
    {
      title: "Prime",
      description: "Institutional-grade services for high-net-worth individuals and businesses.",
      image: "/placeholder-78slp.png",
      link: "/prime",
    },
  ]

  return (
    <section className="section-spacing bg-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-16 text-center">
          <h2 className="text-heading-2-mobile md:text-heading-2 font-bold mb-6">Our Products</h2>
          <p className="text-body-mobile md:text-body text-lightgray max-w-3xl mx-auto">
            We build Bitcoin products that prioritize security, privacy, and sovereignty. Our solutions are designed for
            Bitcoiners who refuse to compromise on their values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="minimalist-card">
              <div className="minimalist-content">
                <div className="minimalist-number">{(index + 1).toString().padStart(2, "0")}</div>
                <h3 className="minimalist-title">{product.title}</h3>
                <p className="minimalist-description">{product.description}</p>
                <Link href={product.link} className="minimalist-link">
                  <span>Explore</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="minimalist-image-container">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="minimalist-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .minimalist-card {
          background-color: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all 0.3s ease;
        }
        
        .minimalist-card:hover {
          border-color: rgba(255, 255, 255, 0.5);
        }
        
        .minimalist-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        
        .minimalist-number {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 1.5rem;
        }
        
        .minimalist-title {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 1rem;
          text-align: center;
          position: relative;
          padding-bottom: 1rem;
        }
        
        .minimalist-title:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.3);
        }
        
        .minimalist-description {
          font-size: 0.875rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .minimalist-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: white;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .minimalist-link:hover {
          color: rgba(255, 255, 255, 0.7);
        }
        
        .minimalist-image-container {
          padding: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .minimalist-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
        
        .minimalist-card:hover .minimalist-image {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
