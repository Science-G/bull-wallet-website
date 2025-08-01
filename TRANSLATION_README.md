# Bull Bitcoin Translation System

## Overview

The Bull Bitcoin website now includes a comprehensive translation system with French as the first additional language. The system is built with a dictionary-based approach using JSON locale files.

## Architecture

### Core Files

- **`lib/i18n.ts`** - Translation utilities and hooks
- **`public/locales/en.json`** - English translations (default)
- **`public/locales/fr.json`** - French translations
- **`components/language-switcher.tsx`** - Language selection component
- **`components/i18n-provider.tsx`** - Translation initialization provider

### Supported Languages

- **English (en)** - Default language
- **French (fr)** - Full translation available

## Usage

### In Components

```tsx
import { useTranslation } from '@/lib/i18n'

function MyComponent() {
  const { t } = useTranslation()
  
  return (
    <div>
      <h1>{t('navigation.products')}</h1>
      <p>{t('hero.title')}</p>
    </div>
  )
}
```

### With Dynamic Content

```tsx
// For content with placeholders
const description = t('engineering_sovereignty.description', {
  buy: t('engineering_sovereignty.actions.buy'),
  sell: t('engineering_sovereignty.actions.sell'),
  hold: t('engineering_sovereignty.actions.hold'),
  spend: t('engineering_sovereignty.actions.spend')
})
```

### With HTML Content

```tsx
// For content that includes HTML tags
<p 
  dangerouslySetInnerHTML={{
    __html: t('engineering_sovereignty.description', {
      buy: `<span class="bitcoin-action">${t('actions.buy')}</span>`
    })
  }}
/>
```

## Translation Keys Structure

The translation keys follow a hierarchical structure:

```
navigation.products
navigation.features
navigation.about
hero.title
engineering_sovereignty.title
engineering_sovereignty.description
products.title
products.bull_exchange.title
products.bull_exchange.summary
...
```

## Language Switching

Users can switch languages using:

1. **Desktop**: Language switcher in the top navigation
2. **Mobile**: Language switcher in the mobile menu
3. **Automatic**: Browser language detection on first visit
4. **Persistent**: Language preference stored in localStorage

## Features

- **Automatic Detection**: Detects browser language on first visit
- **Persistent Storage**: Remembers user's language choice
- **Fallback System**: Falls back to English if translation missing
- **Loading States**: Shows loading indicator during language switches
- **SEO Ready**: Can be extended for URL-based localization

## Adding New Languages

1. Create a new locale file: `public/locales/[code].json`
2. Add the language to `LOCALES` in `lib/i18n.ts`:
   ```ts
   export const LOCALES = {
     en: 'English',
     fr: 'Français',
     es: 'Español' // New language
   } as const
   ```
3. Translate all keys from `en.json` to the new language

## Implementation Status

### Fully Translated Sections
- Navigation (desktop & mobile)
- Hero section
- Engineering Sovereignty section
- Products section

### Remaining Sections
- Principles section
- Features section
- About section
- Geographic presence
- Talk to Human section
- Testimonials section
- Join the Mission section
- Blog section
- Footer

## Technical Details

- **Framework**: Next.js 15.2.4 with React 19
- **Storage**: Browser localStorage for persistence
- **Loading**: Client-side translation loading
- **Performance**: Translations cached after first load
- **Bundle Size**: Minimal impact (translations loaded on demand)

## Future Enhancements

- Server-side rendering for translations
- URL-based localization (`/fr/`, `/en/`)
- Right-to-left (RTL) language support
- Translation management system integration
- Automatic translation updates via CI/CD 