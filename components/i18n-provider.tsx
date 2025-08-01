"use client"

import { useEffect, useState } from 'react'
import { initializeI18n, getStoredLocale, detectBrowserLocale, type Locale } from '@/lib/i18n'

interface I18nProviderProps {
  children: React.ReactNode
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const initializeTranslations = async () => {
      try {
        // Determine initial locale
        const storedLocale = getStoredLocale()
        const browserLocale = detectBrowserLocale()
        const initialLocale: Locale = storedLocale || browserLocale

        // Initialize translations
        await initializeI18n(initialLocale)
        setIsInitialized(true)
      } catch (error) {
        console.error('Failed to initialize translations:', error)
        // Initialize with English as fallback
        await initializeI18n('en')
        setIsInitialized(true)
      }
    }

    initializeTranslations()
  }, [])

  // Show loading state while translations are loading
  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Loading...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
} 