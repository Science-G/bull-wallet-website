import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FaqLayout from "@/components/faq/faq-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | Bull Bitcoin",
  description: "Frequently asked questions about Bull Bitcoin services and Bitcoin.",
}

export default function FaqPage() {
  return (
    <>
      <Navigation alwaysVisible={true} />
      <main className="pt-24 min-h-screen bg-black">
        <FaqLayout />
      </main>
      <Footer />
    </>
  )
}
