import Link from "next/link"
import Image from "next/image"

const footerSections = [
  {
    title: "Products",
    links: [
      { href: "/features", label: "Exchange" },
      { href: "/otc", label: "Prime Desk" },
      { href: "/wallet", label: "Bull Wallet" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/mission", label: "Mission" },
      { href: "/principles", label: "Principles" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/instructions", label: "Instructions" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Countries",
    links: [
      { href: "/countries/canada", label: "Canada" },
      { href: "/countries/europe", label: "Europe" },
      { href: "/countries/costa-rica", label: "Costa Rica" },
      { href: "/countries/mexico", label: "Mexico" },
      { href: "/countries/argentina", label: "Argentina" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20red%20bull_b7000b%20%2B%20white%20horizontal%20text_f5f5f5-wzDuOzgChZLZZpPerAu3QEtIpeQACB.png"
                alt="Bull Bitcoin"
                width={180}
                height={48}
                className="opacity-90"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Buy, sell, hold, and spend Bitcoin—without compromise. 
              Non-custodial Bitcoin exchange service focused on security, privacy, and sovereignty.
            </p>
            <p className="text-xs text-gray-500">
              © 2024 Bull Bitcoin. All rights reserved.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="text-xs text-gray-400 hover:text-white transition-colors">
              Security
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-xs text-gray-500">Follow us:</span>
            <Link href="https://twitter.com/bullbitcoin_" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
