import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import I18nProvider from '@/components/i18n-provider'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Bull Bitcoin | Own Your Money',
  description: 'Buy, sell, hold, and spend Bitcoin—without compromise. Non-custodial Bitcoin exchange service focused on security, privacy, and sovereignty.',
  keywords: ['Bitcoin', 'cryptocurrency', 'exchange', 'non-custodial', 'privacy', 'sovereignty'],
  authors: [{ name: 'Bull Bitcoin' }],
  creator: 'Bull Bitcoin',
  publisher: 'Bull Bitcoin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bullbitcoin.com'),
  openGraph: {
    title: 'Bull Bitcoin | Own Your Money',
    description: 'Buy, sell, hold, and spend Bitcoin—without compromise.',
    url: 'https://bullbitcoin.com',
    siteName: 'Bull Bitcoin',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bull Bitcoin | Own Your Money',
    description: 'Buy, sell, hold, and spend Bitcoin—without compromise.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
