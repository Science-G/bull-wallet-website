"use client"
import { Download, Smartphone, Monitor, FileDown } from "lucide-react"

export default function WalletDownload() {
  const downloadOptions = [
    {
      platform: "iOS",
      icon: Smartphone,
      description: "Download from the App Store",
      link: "#",
      primary: true,
    },
    {
      platform: "Android",
      icon: Smartphone,
      description: "Download from Google Play",
      link: "#",
      primary: true,
    },
    {
      platform: "APK",
      icon: FileDown,
      description: "Direct APK download",
      link: "#",
      primary: false,
    },
  ]

  return (
    <section className="bg-black py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter">Get Bull Wallet Today</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Start your journey to Bitcoin sovereignty. Download Bull Wallet and take control of your financial future.
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          {downloadOptions.map((option, index) => (
            <a
              key={index}
              href={option.link}
              className={`group flex items-center gap-4 px-8 py-4 rounded-lg font-medium transition-all duration-300 ${
                option.primary
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "border border-zinc-700 text-white hover:border-white hover:bg-zinc-900"
              }`}
            >
              <option.icon className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">{option.platform}</div>
                <div className={`text-sm ${option.primary ? "text-zinc-600" : "text-zinc-400"}`}>
                  {option.description}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Free Download</h3>
            <p className="text-zinc-400">Bull Wallet is completely free with no hidden fees or subscriptions</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Cross-Platform</h3>
            <p className="text-zinc-400">Available on iOS and Android with synchronized features</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Regular Updates</h3>
            <p className="text-zinc-400">Continuous improvements and new features based on user feedback</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Own Your Bitcoin?</h3>
          <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
            Join thousands of Bitcoiners who have taken control of their financial sovereignty with Bull Wallet. Your
            journey to true Bitcoin ownership starts here.
          </p>
          <button className="bg-white text-black px-8 py-4 font-medium hover:bg-zinc-200 transition-colors inline-flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Now
          </button>
        </div>
      </div>
    </section>
  )
}
