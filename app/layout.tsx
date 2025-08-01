import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import I18nProvider from "@/components/i18n-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bull Bitcoin - Own Your Money",
  description: "Canada's premier Bitcoin exchange. Buy, sell, and store Bitcoin with complete security and privacy. Non-custodial solutions for true financial sovereignty.",
  keywords: "Bitcoin, cryptocurrency, exchange, Canada, non-custodial, privacy, security",
  authors: [{ name: "Bull Bitcoin" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Trustpilot Script */}
        <Script
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          strategy="afterInteractive"
          async
        />
      </head>
      <body className={inter.className}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
