"use client"

import { useState, useEffect, useRef } from 'react'

const stats = [
  { label: "Established", value: 2013, suffix: "", isYear: true },
  { label: "Bitcoins Sold", value: 50000, suffix: "+", isYear: false },
  { label: "Countries Supported", value: 40, suffix: "+", isYear: false },
  { label: "Employees", value: 35, suffix: "+", isYear: false },
  { label: "Client Funds Lost", value: 0, suffix: "", isYear: false },
  { label: "Review Rating", value: 4.7, suffix: "", isDecimal: true },
  { label: "Transaction Success Rate", value: 99.9, suffix: "%", isDecimal: true },
  { label: "transaction volume", value: 5, suffix: "$ billions", isYear: false },
]

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting) {
          setIsVisible(true)
          
          // Animate counters
          stats.forEach((stat, index) => {
            let current = 0
            const increment = stat.value / 100
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.value) {
                current = stat.value
                clearInterval(timer)
              }
              setAnimatedValues(prev => {
                const newValues = [...prev]
                newValues[index] = stat.isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current)
                return newValues
              })
            }, 20)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-black text-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Proven Track Record
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Over a decade of excellence in Bitcoin services. Our numbers speak for themselves.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center fade-in-up">
              <div className="stat-counter text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                {isVisible ? (
                  stat.suffix === "$ billions" ? (
                    `$${(animatedValues[index] || 0)} billions`
                  ) : stat.isDecimal ? (
                    `${(animatedValues[index] || 0).toFixed(1)}${stat.suffix}`
                  ) : stat.isYear ? (
                    `${animatedValues[index] || 0}${stat.suffix}`
                  ) : (
                    `${(animatedValues[index] || 0).toLocaleString()}${stat.suffix}`
                  )
                ) : (
                  stat.suffix === "$ billions" ? "$0 billions" : stat.isDecimal ? `0.0${stat.suffix}` : `0${stat.suffix}`
                )}
              </div>
              <p className="text-gray-400 uppercase text-sm tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 