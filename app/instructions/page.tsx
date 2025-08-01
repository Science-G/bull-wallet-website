import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function InstructionsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation alwaysVisible={true} />

      {/* Page Content */}
      <section className="pt-32 pb-16 bg-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <h1 className="text-heading-1-mobile md:text-heading-1 font-bold mb-6">Instructions</h1>
          <p className="text-body-mobile md:text-body text-lightgray max-w-3xl">
            This page contains instructions for using Bull Bitcoin services.
          </p>

          {/* Placeholder content */}
          <div className="mt-12 space-y-8">
            <div className="bg-darkgray p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
              <p className="text-lightgray">Instructions for new users on how to get started with Bull Bitcoin.</p>
            </div>

            <div className="bg-darkgray p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Account Setup</h2>
              <p className="text-lightgray">How to set up and secure your Bull Bitcoin account.</p>
            </div>

            <div className="bg-darkgray p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Making Transactions</h2>
              <p className="text-lightgray">Step-by-step guide for making Bitcoin transactions.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
