"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslation } from "@/lib/i18n"
import { ChevronDown, Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { locale, switchLocale, availableLocales, isLoading } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLanguageChange = async (newLocale: string) => {
    await switchLocale(newLocale as any)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-white/90 hover:text-white transition-colors rounded-md hover:bg-white/10"
        disabled={isLoading}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline text-sm font-medium">
          {availableLocales[locale]}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/15 rounded-lg shadow-xl z-50">
          <div className="py-2">
            {Object.entries(availableLocales).map(([code, name]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  locale === code
                    ? "text-brandRed bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
                disabled={isLoading}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}


