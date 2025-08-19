"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { externalHomeUrl } from "@/lib/config"

export default function ScrollHeader() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!hasScrolled) return null

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-md opacity-100 translate-y-0 transition-all duration-500">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-20 md:h-24">
        <a href={externalHomeUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20red%20bull_b7000b%20%2B%20white%20horizontal%20text_f5f5f5-wzDuOzgChZLZZpPerAu3QEtIpeQACB.png"
            alt="Bull Bitcoin"
            width={180}
            height={48}
            className="opacity-90 hover:opacity-100 transition-opacity"
          />
        </a>
      </div>
    </header>
  )
}


