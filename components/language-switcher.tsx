"use client"

import { useState } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { useTranslation, LOCALES, type Locale } from '@/lib/i18n'

export default function LanguageSwitcher() {
  const { locale, switchLocale, isLoading, availableLocales } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const handleLocaleChange = async (newLocale: Locale) => {
    setIsOpen(false)
    if (newLocale !== locale) {
      await switchLocale(newLocale)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isLoading}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 disabled:opacity-50"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase">{locale}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-40 bg-black/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg z-20">
            <div className="py-2">
              {Object.entries(availableLocales).map(([code, name]) => (
                <button
                  key={code}
                  onClick={() => handleLocaleChange(code as Locale)}
                  className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 hover:bg-white/10 ${
                    locale === code 
                      ? 'text-white bg-white/5' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  disabled={isLoading}
                >
                  <div className="flex items-center justify-between">
                    <span>{name}</span>
                    {locale === code && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
} 