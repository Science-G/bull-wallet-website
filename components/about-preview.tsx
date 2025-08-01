"use client"

import Image from "next/image"

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About Bull Bitcoin
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Founded in 2013, Bull Bitcoin has been at the forefront of Bitcoin innovation in Canada and beyond. 
              We are a team of Bitcoin maximalists, cypherpunks, and freedom advocates dedicated to making Bitcoin accessible to everyone.
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-8">
              Our mission is simple: to provide the most secure, private, and user-friendly Bitcoin services on the planet. 
              We believe that Bitcoin is the future of money, and we're here to help you navigate that future with confidence.
            </p>
            
            {/* Founder Info */}
            <div className="border-l-4 border-white/20 pl-6 mb-8">
              <p className="text-lg font-semibold mb-2">Francis Pouliot</p>
              <p className="text-sm text-gray-400 mb-3">CEO & Founder</p>
              <p className="text-sm text-gray-300 italic">
                "Bitcoin is not just a technology—it's a movement toward individual sovereignty and financial freedom. 
                At Bull Bitcoin, we're building the tools to make that vision a reality."
              </p>
            </div>
            
            <div className="fade-in-up">
              <a 
                href="/about" 
                className="inline-flex items-center justify-center border border-white/30 bg-transparent text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end fade-in-up">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-black/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4"></div>
                    <p className="text-white font-semibold">Francis Pouliot</p>
                    <p className="text-gray-400 text-sm">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 