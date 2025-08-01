"use client"

const countries = [
  { name: "Canada", description: "Our home base with full regulatory compliance", flag: "🇨🇦" },
  { name: "Europe", description: "Serving the European Bitcoin community", flag: "🇪🇺" },
  { name: "Costa Rica", description: "Expanding Bitcoin adoption in Central America", flag: "🇨🇷" },
  { name: "Mexico", description: "Bringing Bitcoin to Latin America", flag: "🇲🇽" },
  { name: "Argentina", description: "Supporting financial sovereignty in South America", flag: "🇦🇷" }
]

export default function GeographicPresence() {
  return (
    <section className="py-16 md:py-24 bg-zinc-900 text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Global Bitcoin Access
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We're expanding Bitcoin access across multiple countries, bringing financial sovereignty to people worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <div 
              key={index}
              className="fade-in-up bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:border-white/20 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{country.flag}</div>
              <h3 className="text-xl font-semibold mb-3">{country.name}</h3>
              <p className="text-gray-400 text-sm">{country.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 