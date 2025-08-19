import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import I18nProvider from "@/components/i18n-provider"
import ScrollHeader from "@/components/scroll-header"

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
        <ScrollHeader />
        <div className="pt-24 md:pt-28">
          <I18nProvider>
            {children}
          </I18nProvider>
        </div>
      </body>
    </html>
  )
}
