import FeaturesSection from "@/components/features/features-section"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features | Bull Bitcoin",
  description: "Explore the powerful features of Bull Bitcoin's platform.",
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Navigation alwaysVisible={true} />

      <div className="pt-24 pb-12 bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Bitcoin Features</h1>
            <p className="text-xl text-white/70">
              Discover our comprehensive suite of Bitcoin features designed for security, efficiency, and ease of use.
            </p>
          </div>
        </div>
      </div>

      <FeaturesSection />

      <div className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Experience True Bitcoin Sovereignty?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Join thousands of Bitcoiners who have taken control of their financial future with Bull Bitcoin.
          </p>
          <a
            href="/signup"
            className="inline-block px-8 py-4 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
