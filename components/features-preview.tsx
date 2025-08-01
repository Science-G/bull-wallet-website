"use client"

import { Shield, Zap, Users, TrendingUp, Lock, UserCheck } from "lucide-react"

const features = [
  {
    number: "01",
    icon: Shield,
    title: "Non-custodial security",
    description: "Your Bitcoin, your keys. We never hold your funds, ensuring complete control and security over your digital assets."
  },
  {
    number: "02", 
    icon: Zap,
    title: "Lightning-fast transactions",
    description: "Experience instant Bitcoin payments with our Lightning Network integration, perfect for everyday transactions."
  },
  {
    number: "03",
    icon: Lock,
    title: "Privacy by design", 
    description: "Built-in privacy features including Tor integration and CoinJoin support to keep your transactions confidential."
  },
  {
    number: "04",
    icon: UserCheck,
    title: "Human customer support",
    description: "No bots, no tickets. Talk directly to our Bitcoin experts who understand your needs and provide personalized assistance."
  },
  {
    number: "05",
    icon: Users,
    title: "Community-driven",
    description: "Join a thriving community of Bitcoin enthusiasts, educators, and advocates working towards financial sovereignty."
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Automated investment strategies", 
    description: "We enable four different Bitcoin investment strategies: Dollar Cost Averaging (DCA), Value Averaging, Lump Sum and HODL. Set it and forget it - let our algorithms do the work while you focus on what matters most."
  }
]

export default function FeaturesPreview() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white fade-in-up">
            Features that set us apart
          </h2>
          <p className="text-lg md:text-xl text-gray-400 fade-in-up">
            Discover the core advantages that make our platform unique and powerful for your Bitcoin journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index} 
                className="fade-in-up bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                        {feature.number}
                      </span>
                      <h3 className="text-lg font-semibold text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="text-center fade-in-up">
          <a 
            href="/features" 
            className="inline-flex items-center justify-center border border-white/30 bg-transparent text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
          >
            Explore All Features
          </a>
        </div>
      </div>
    </section>
  )
} 