import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import MinimalistMonochromeCards from "@/components/product-cards/minimalist-monochrome-cards"

export const metadata = {
  title: "Products | Bull Bitcoin",
  description: "Explore Bull Bitcoin's suite of Bitcoin products designed with precision and built with purpose.",
}

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-black pt-32 pb-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter">Our Products</h1>
          <div className="h-px w-24 bg-white opacity-30 mb-8"></div>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl">
            Designed with precision. Built with purpose. Our suite of Bitcoin products delivers uncompromising quality
            and performance.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-black py-16">
        <MinimalistMonochromeCards />
      </section>

      {/* Product Comparison Section */}
      <section className="bg-black py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tighter">Compare Products</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="py-4 px-4 text-left text-sm font-normal text-zinc-400">Feature</th>
                  <th className="py-4 px-4 text-left text-sm font-medium">EXCHANGE WEBSITE</th>
                  <th className="py-4 px-4 text-left text-sm font-medium">PRIME DESK</th>
                  <th className="py-4 px-4 text-left text-sm font-medium">BULL WALLET</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-900">
                  <td className="py-4 px-4 text-sm text-zinc-400">Buy Bitcoin</td>
                  <td className="py-4 px-4 text-sm">✓</td>
                  <td className="py-4 px-4 text-sm">✓</td>
                  <td className="py-4 px-4 text-sm">✓</td>
                </tr>
                <tr className="border-b border-zinc-900">
                  <td className="py-4 px-4 text-sm text-zinc-400">Sell Bitcoin</td>
                  <td className="py-4 px-4 text-sm">✓</td>
                  <td className="py-4 px-4 text-sm">✓</td>
                  <td className="py-4 px-4 text-sm">✓</td>
                </tr>
                <tr className="border-b border-zinc-900">
                  <td className="py-4 px-4 text-sm text-zinc-400">Self-Custody</td>
                  <td className="py-4 px-4 text-sm">✓</td>
                  <td className="py-4 px-4 text-sm">✓</td>
                  <td className="py-4 px-4 text-sm">✓</td>
                </tr>
                <tr className="border-b border-zinc-900">
                  <td className="py-4 px-4 text-sm text-zinc-400">VIP Service</td>
                  <td className="py-4 px-4 text-sm">-</td>
                  <td className="py-4 px-4 text-sm">✓</td>
                  <td className="py-4 px-4 text-sm">-</td>
                </tr>
                <tr className="border-b border-zinc-900">
                  <td className="py-4 px-4 text-sm text-zinc-400">Mobile App</td>
                  <td className="py-4 px-4 text-sm">✓</td>
                  <td className="py-4 px-4 text-sm">-</td>
                  <td className="py-4 px-4 text-sm">✓</td>
                </tr>
                <tr className="border-b border-zinc-900">
                  <td className="py-4 px-4 text-sm text-zinc-400">Cold Storage</td>
                  <td className="py-4 px-4 text-sm">-</td>
                  <td className="py-4 px-4 text-sm">✓</td>
                  <td className="py-4 px-4 text-sm">✓</td>
                </tr>
                <tr className="border-b border-zinc-900">
                  <td className="py-4 px-4 text-sm text-zinc-400">Bill Payments</td>
                  <td className="py-4 px-4 text-sm">✓</td>
                  <td className="py-4 px-4 text-sm">-</td>
                  <td className="py-4 px-4 text-sm">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tighter">Frequently Asked Questions</h2>

          <div className="space-y-8">
            <div className="border-b border-zinc-900 pb-8">
              <h3 className="text-xl font-medium mb-4">Which product is right for me?</h3>
              <p className="text-zinc-400">
                If you're looking for a simple way to buy and sell Bitcoin, our Exchange Website is perfect. For large
                transactions or corporate needs, Prime Desk offers personalized service. If you need a secure wallet to
                store and use your Bitcoin, Bull Wallet provides industry-leading security features.
              </p>
            </div>

            <div className="border-b border-zinc-900 pb-8">
              <h3 className="text-xl font-medium mb-4">Are there any fees?</h3>
              <p className="text-zinc-400">
                Each product has its own fee structure. The Exchange Website has transparent trading fees, Prime Desk
                offers custom pricing based on volume, and Bull Wallet has minimal network fees for transactions. We
                never hide fees or add spreads.
              </p>
            </div>

            <div className="border-b border-zinc-900 pb-8">
              <h3 className="text-xl font-medium mb-4">How secure are Bull Bitcoin products?</h3>
              <p className="text-zinc-400">
                Security is our top priority. All our products implement industry-leading security practices, including
                self-custody models, multi-signature technology, and regular security audits. We've never been hacked
                and maintain the highest standards of security excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
