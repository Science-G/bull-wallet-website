"use client"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-453469333-612x612.jpg-4pY7TnDJCoA7GoCt4zpoRhsKpIZuG6.jpeg"
          alt="Bison grazing with mountains in background"
          fill
          priority
          className="object-cover opacity-40 filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 text-center px-4 w-full my-24 flex flex-col items-center justify-center">
        <h1 className="hero-text text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 text-white">
          OWN YOUR MONEY
        </h1>
      </div>
    </section>
  )
}
