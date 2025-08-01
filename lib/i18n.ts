import { useState, useEffect } from 'react'

// Supported locales
export const LOCALES = {
  en: 'English',
  fr: 'Français'
} as const

export type Locale = keyof typeof LOCALES
export type TranslationKey = string

// Translation data type
export interface Translations {
  [key: string]: any
}

// Global translation state
let currentLocale: Locale = 'en'
let translations: Translations = {}

// Load translation files
export async function loadTranslations(locale: Locale): Promise<Translations> {
  try {
    const response = await fetch(`/locales/${locale}.json`)
    if (!response.ok) {
      throw new Error(`Failed to load translations for ${locale}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`Error loading translations for ${locale}:`, error)
    // Fallback to English if available
    if (locale !== 'en') {
      return loadTranslations('en')
    }
    return {}
  }
}

// Initialize translations
export async function initializeI18n(locale: Locale = 'en') {
  currentLocale = locale
  translations = await loadTranslations(locale)
  
  // Store locale preference
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-locale', locale)
  }
}

// Get translation by key path (e.g., "navigation.products")
export function getTranslation(key: TranslationKey, replacements?: Record<string, string>): string {
  const keys = key.split('.')
  let value: any = translations
  
  // Navigate through nested object
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      console.warn(`Translation key not found: ${key}`)
      return key // Return the key as fallback
    }
  }
  
  if (typeof value !== 'string') {
    console.warn(`Translation value is not a string: ${key}`)
    return key
  }
  
  // Handle replacements (e.g., {buy}, {sell})
  if (replacements) {
    return Object.entries(replacements).reduce((text, [placeholder, replacement]) => {
      return text.replace(new RegExp(`\\{${placeholder}\\}`, 'g'), replacement)
    }, value)
  }
  
  return value
}

// Get current locale
export function getCurrentLocale(): Locale {
  return currentLocale
}

// Change locale and reload translations
export async function changeLocale(newLocale: Locale) {
  if (newLocale === currentLocale) return
  
  currentLocale = newLocale
  translations = await loadTranslations(newLocale)
  
  // Store preference
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-locale', newLocale)
    // Trigger a page reload to update all components
    window.location.reload()
  }
}

// Get stored locale preference
export function getStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null
  
  const stored = localStorage.getItem('preferred-locale') as Locale
  return stored && stored in LOCALES ? stored : null
}

// Detect browser locale
export function detectBrowserLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  
  const browserLang = navigator.language.split('-')[0] as Locale
  return browserLang in LOCALES ? browserLang : 'en'
}

// Hook for components to use translations
export function useTranslation() {
  const [locale, setLocale] = useState<Locale>(currentLocale)
  const [isLoading, setIsLoading] = useState(false)
  
  const t = (key: TranslationKey, replacements?: Record<string, string>) => {
    return getTranslation(key, replacements)
  }
  
  const switchLocale = async (newLocale: Locale) => {
    if (newLocale === locale) return
    
    setIsLoading(true)
    await changeLocale(newLocale)
    setLocale(newLocale)
    setIsLoading(false)
  }
  
  return {
    t,
    locale,
    switchLocale,
    isLoading,
    availableLocales: LOCALES
  }
} 