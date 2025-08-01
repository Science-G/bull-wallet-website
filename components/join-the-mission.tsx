"use client"

export default function JoinTheMission() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 nordic-pattern"></div>
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"></div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tight">
              JOIN THE MISSION
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 leading-relaxed">
              Be part of the Bitcoin revolution. Own your money, control your future, and help build a more sovereign world.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center fade-in-up">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Own Your Keys</h3>
                <p className="text-gray-400">
                  True financial sovereignty starts with controlling your own Bitcoin
                </p>
              </div>
              
              <div className="text-center fade-in-up">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
                <p className="text-gray-400">
                  Instant Bitcoin transactions with cutting-edge technology
                </p>
              </div>
              
              <div className="text-center fade-in-up">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Join Thousands</h3>
                <p className="text-gray-400">
                  Be part of a growing community of Bitcoin sovereignty advocates
                </p>
              </div>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 italic">
                "Bitcoin is not just a technology—it's a movement toward individual sovereignty and financial freedom."
              </blockquote>
              <cite className="text-lg text-gray-400">— Francis Pouliot, Founder & CEO</cite>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up">
              <a 
                href="/signup" 
                className="inline-flex items-center justify-center bg-white text-black px-12 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors duration-300 min-w-[200px]"
              >
                Start Today
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center justify-center border-2 border-white/30 bg-transparent text-white px-12 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300 min-w-[200px]"
              >
                Learn More
              </a>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                Join 50,000+ users who have chosen financial sovereignty
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 