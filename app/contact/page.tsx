import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation alwaysVisible={true} />

      {/* Page Content */}
      <section className="pt-32 pb-16 bg-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <h1 className="text-heading-1-mobile md:text-heading-1 font-bold mb-6">Contact Us</h1>
          <p className="text-body-mobile md:text-body text-lightgray max-w-3xl">Contact page placeholder.</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
