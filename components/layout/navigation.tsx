"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Plus, ChevronDown, ChevronUp } from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"
import { useTranslation } from "@/lib/i18n"

interface NavigationProps {
  alwaysVisible?: boolean
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export default function Navigation({ alwaysVisible = false }: NavigationProps) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(alwaysVisible)
  const [countriesOpen, setCountriesOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false)
  const [mobileHelpOpen, setMobileHelpOpen] = useState(false)
  const countriesRef = useRef<HTMLDivElement>(null)
  const helpRef = useRef<HTMLDivElement>(null)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (alwaysVisible) return

      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (countriesRef.current && !countriesRef.current.contains(event.target as Node)) {
        setCountriesOpen(false)
      }
      if (helpRef.current && !helpRef.current.contains(event.target as Node)) {
        setHelpOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("resize", handleResize)

    if (alwaysVisible) {
      setScrolled(true)
    } else {
      handleScroll()
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("resize", handleResize)
    }
  }, [scrolled, alwaysVisible, isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      setMobileCountriesOpen(false)
      setMobileHelpOpen(false)
    }
  }

  const toggleCountries = () => {
    setCountriesOpen(!countriesOpen)
    if (!countriesOpen) {
      setHelpOpen(false)
    }
  }

  const toggleHelp = () => {
    setHelpOpen(!helpOpen)
    if (!helpOpen) {
      setCountriesOpen(false)
    }
  }

  const toggleMobileCountries = () => {
    setMobileCountriesOpen(!mobileCountriesOpen)
    if (!mobileCountriesOpen) {
      setMobileHelpOpen(false)
    }
  }

  const toggleMobileHelp = () => {
    setMobileHelpOpen(!mobileHelpOpen)
    if (!mobileHelpOpen) {
      setMobileCountriesOpen(false)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-black/40 backdrop-blur-md opacity-100 translate-y-0"
            : "bg-transparent opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
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
            <NavItem href="/features" label={t('navigation.features')} />
            <NavItem href="/otc" label="Prime" />
            <NavItem href="/wallet" label="Wallet" />
            <NavItem href="/about" label={t('navigation.about')} />

            {/* Help Dropdown */}
            <div className="relative" ref={helpRef}>
              <button
                onClick={toggleHelp}
                className="flex items-center text-sm uppercase tracking-wider font-medium text-white/90 hover:text-white transition-colors"
              >
                HELP{" "}
                {helpOpen ? (
                  <ChevronUp size={16} className="ml-1 opacity-80" />
                ) : (
                  <ChevronDown size={16} className="ml-1 opacity-80" />
                )}
              </button>

              {helpOpen && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-darkgray border border-white/10 shadow-lg z-10 rounded-md overflow-hidden">
                  <div className="py-2">
                    <HelpItem href="/instructions" label="Instructions" onClick={() => setHelpOpen(false)} />
                    <HelpItem href="/faq" label="FAQ" onClick={() => setHelpOpen(false)} />
                    <HelpItem href={t('navigation.contact')} label={t('navigation.contact')} onClick={() => setHelpOpen(false)} />
                  </div>
                </div>
              )}
            </div>

            {/* Countries Dropdown */}
            <div className="relative" ref={countriesRef}>
              <button
                onClick={toggleCountries}
                className="flex items-center text-sm uppercase tracking-wider font-medium text-white/90 hover:text-white transition-colors"
              >
                Countries{" "}
                {countriesOpen ? (
                  <ChevronUp size={16} className="ml-1 opacity-80" />
                ) : (
                  <ChevronDown size={16} className="ml-1 opacity-80" />
                )}
              </button>

              {countriesOpen && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-darkgray border border-white/10 shadow-lg z-10 rounded-md overflow-hidden">
                  <div className="py-2">
                    <CountryItem href="/countries/canada" label="Canada" onClick={() => setCountriesOpen(false)} />
                    <CountryItem href="/countries/europe" label="Europe" onClick={() => setCountriesOpen(false)} />
                    <CountryItem
                      href="/countries/costa-rica"
                      label="Costa Rica"
                      onClick={() => setCountriesOpen(false)}
                    />
                    <CountryItem href="/countries/mexico" label="Mexico" onClick={() => setCountriesOpen(false)} />
                    <CountryItem
                      href="/countries/argentina"
                      label="Argentina"
                      onClick={() => setCountriesOpen(false)}
                    />
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Side Items */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link
              href="/login"
              onClick={scrollToTop}
              className="button-hover inline-flex items-center justify-center bg-charcoal text-white px-6 py-2 uppercase text-sm tracking-wider"
            >
              {t('navigation.login')}/{t('navigation.signup')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Completely separate from the header */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-30 md:hidden">
          <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
            <nav className="flex flex-col space-y-4">
              <MobileLink href="/features" label={t('navigation.features')} onClick={() => setIsOpen(false)} />
              <MobileLink href="/otc" label="Prime" onClick={() => setIsOpen(false)} />
              <MobileLink href="/wallet" label="Wallet" onClick={() => setIsOpen(false)} />
              <MobileLink href="/about" label={t('navigation.about')} onClick={() => setIsOpen(false)} />

              {/* Mobile Help Dropdown */}
              <div className="py-2 border-b border-white/10">
                <button
                  onClick={toggleMobileHelp}
                  className="flex items-center justify-between w-full text-lg font-medium text-white/90 hover:text-white"
                >
                  <span>HELP</span>
                  {mobileHelpOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {mobileHelpOpen && (
                  <div className="mt-4 ml-4 space-y-3">
                    <MobileLink href="/instructions" label="Instructions" onClick={() => setIsOpen(false)} />
                    <MobileLink href="/faq" label="FAQ" onClick={() => setIsOpen(false)} />
                    <MobileLink href="/contact" label={t('navigation.contact')} onClick={() => setIsOpen(false)} />
                  </div>
                )}
              </div>

              {/* Mobile Countries Dropdown */}
              <div className="py-2 border-b border-white/10">
                <button
                  onClick={toggleMobileCountries}
                  className="flex items-center justify-between w-full text-lg font-medium text-white/90 hover:text-white"
                >
                  <span>COUNTRIES</span>
                  {mobileCountriesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {mobileCountriesOpen && (
                  <div className="mt-4 ml-4 space-y-3">
                    <MobileLink href="/countries/canada" label="Canada" onClick={() => setIsOpen(false)} />
                    <MobileLink href="/countries/europe" label="Europe" onClick={() => setIsOpen(false)} />
                    <MobileLink href="/countries/costa-rica" label="Costa Rica" onClick={() => setIsOpen(false)} />
                    <MobileLink href="/countries/mexico" label="Mexico" onClick={() => setIsOpen(false)} />
                    <MobileLink href="/countries/argentina" label="Argentina" onClick={() => setIsOpen(false)} />
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Language Switcher */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="mb-4">
                <span className="text-sm text-gray-400 uppercase tracking-wider">Language</span>
              </div>
              <LanguageSwitcher />
            </div>

            {/* Mobile Login Button */}
            <div className="mt-auto pt-8">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center bg-charcoal text-white px-6 py-3 text-center uppercase text-sm tracking-wider hover:bg-gray-700 transition-colors"
              >
                {t('navigation.login')}/{t('navigation.signup')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      onClick={scrollToTop}
      className="flex items-center text-sm uppercase tracking-wider font-medium text-white/90 hover:text-white transition-colors"
    >
      {label} <Plus size={16} className="ml-1 opacity-80" />
    </Link>
  )
}

function CountryItem({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  const handleClick = () => {
    scrollToTop()
    onClick()
  }

  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-black/50 transition-colors"
      onClick={handleClick}
    >
      {label}
    </Link>
  )
}

function HelpItem({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  const handleClick = () => {
    scrollToTop()
    onClick()
  }

  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-black/50 transition-colors"
      onClick={handleClick}
    >
      {label}
    </Link>
  )
}

function MobileLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  const handleClick = () => {
    scrollToTop()
    onClick()
  }

  return (
    <Link
      href={href}
      className="block py-2 text-lg font-medium text-white/90 hover:text-white border-b border-white/10"
      onClick={handleClick}
    >
      {label}
    </Link>
  )
}
