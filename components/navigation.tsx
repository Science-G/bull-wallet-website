"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [countriesOpen, setCountriesOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)

  // Optimized scroll listener with throttling
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { href: "/features", label: "Features" },
    { href: "/otc", label: "Prime" },
    { href: "/wallet", label: "Wallet" },
    { href: "/about", label: "About" },
  ]

  const helpItems = [
    { href: "/instructions", label: "Instructions" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
  ]

  const countryItems = [
    { href: "/countries/canada", label: "Canada" },
    { href: "/countries/europe", label: "Europe" },
    { href: "/countries/costa-rica", label: "Costa Rica" },
    { href: "/countries/mexico", label: "Mexico" },
    { href: "/countries/argentina", label: "Argentina" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      isScrolled ? "nav-visible bg-black/90 backdrop-blur-sm" : "nav-hidden bg-transparent"
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <div className="z-50">
          <Link href="/">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20red%20bull_b7000b%20%2B%20white%20horizontal%20text_f5f5f5-wzDuOzgChZLZZpPerAu3QEtIpeQACB.png"
              alt="Bull Bitcoin"
              width={180}
              height={48}
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center text-sm uppercase tracking-wider font-medium text-white/90 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}

          {/* Help Dropdown */}
          <div className="relative">
            <button
              onClick={() => setHelpOpen(!helpOpen)}
              className="flex items-center text-sm uppercase tracking-wider font-medium text-white/90 hover:text-white transition-colors"
            >
              Help
              <ChevronDown className="ml-1 w-4 h-4 opacity-80" />
            </button>
            {helpOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-sm border border-white/10 rounded-sm">
                {helpItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Countries Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCountriesOpen(!countriesOpen)}
              className="flex items-center text-sm uppercase tracking-wider font-medium text-white/90 hover:text-white transition-colors"
            >
              Countries
              <ChevronDown className="ml-1 w-4 h-4 opacity-80" />
            </button>
            {countriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-sm border border-white/10 rounded-sm">
                {countryItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Login Button */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/login"
            className="button-hover inline-flex items-center justify-center bg-zinc-800 text-white px-6 py-2 uppercase text-sm tracking-wider"
          >
            Login/Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm md:hidden">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-medium text-white/90 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="text-2xl font-medium text-white/90 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
