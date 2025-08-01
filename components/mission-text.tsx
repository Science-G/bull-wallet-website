"use client"

export default function MissionText() {
  return (
    <section className="engineering-sovereignty-section">
      {/* Background gradient for subtle depth */}
      <div className="absolute inset-0 bg-gradient-radial from-zinc-900/20 via-black to-black"></div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="fade-in-up">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 tracking-tight leading-tight">
            Engineering<br />
            <span className="text-white/90">Sovereignty</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            We empower you to reclaim your sovereignty by building the tools and infrastructure you deserve to buy, sell,
            hold, and spend Bitcoin—without compromise.{" "}
            <span className="font-semibold text-white">Let your freedom be our legacy.</span>
          </p>
        </div>
      </div>
    </section>
  )
} 