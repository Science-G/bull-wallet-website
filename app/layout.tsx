import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import "./globals.css"
import I18nProvider from "@/components/i18n-provider"
import { externalHomeUrl } from "@/lib/config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bull Bitcoin - Own Your Money",
  description: "Canada's premier Bitcoin exchange. Buy, sell, and store Bitcoin with complete security and privacy. Non-custodial solutions for true financial sovereignty.",
  keywords: "Bitcoin, cryptocurrency, exchange, Canada, non-custodial, privacy, security",
  authors: [{ name: "Bull Bitcoin" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-md">
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
        <div className="pt-24 md:pt-28">
          <I18nProvider>
            {children}
          </I18nProvider>
        </div>
      </body>
    </html>
  )
}
