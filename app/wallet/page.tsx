"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

// Wallet features (mimic home features card style)
const walletFeatures: { title: string; description: string; ctaLabel?: string; ctaHref?: string }[] = [
	{
		title: "Instant and cheap lightning payments",
		description:
			"Lightning payments without liquidity and channel management. Send and receive payments seamlessly with one click.",
	},
	{
		title: "Automatic cross-network swaps",
		description:
			"Receive small payments in your Liquid Network wallet that are automatically swapped for a secure Bitcoin wallet once you reach a customisable threshold.",
	},
	{
		title: "Confidential transactions",
		description:
			"Sending and receiving payments over the Liquid Network using the built-in confidential transactions technology hides the amount and asset type of your transactions.",
	},
	{
		title: "Smart fee management",
		description:
			"Customizable mempool-based fee calculations and RBF technologies ensure you never overpay mining fees.",
	},
	{
		title: "Security for mobile devices",
		description:
			"Using secure-storage for private keys, with vetted open-source cryptographic libraries, screenshot prevention and secure in-app keyboard to prevent attacks from malicious apps.",
	},
	{
		title: "Privacy first approach",
		description:
			"No KYC email or phone required, no data collection, no push notifications, no IP tracking. Every feature we build has privacy in mind.",
	},
	{
		title: "Easy and secure encrypted cloud backups",
		description:
			"We invented recoverbull (encrypted vault) wallet backups to prevent beginners from losing access to their Bitcoin wallets or getting physical backups stolen.",
		ctaLabel: "learn more",
		ctaHref: "https://recoverbull.com",
	},
	{
		title: "Connect to your own node",
		description:
			"Maintain self-sovereignty by connecting to your own electrum server, getting direct access to the Bitcoin network without intermediaries.",
	},
	{
		title: "Payjoin protection from chain analysis",
		description:
			"Seamlessly create collaborative transactions when sending or receiving payments to mitigate malicious spying of your on-chain wallet activity.",
	},
	{
		title: "Watch-only hardware wallets (cold storage)",
		description:
			"Receive funds to any offline wallet, monitor the balances and transaction history of your hardware wallets.",
	},
	{
		title: "Coldcard Q airgapped integration",
		description:
			"Connect your Coldcard Q to easily spend funds from your long-term cold storage without putting your funds at risk.",
	},
	{
		title: "Coin control and labelling",
		description:
			"Smart labeling of your addresses, transactions and UTXOs gives you control over how you create transactions, allowing you to protect your privacy and manage your UTXOs.",
	},
	{
		title: "Multi-currency",
		description:
			"We support multiple currencies, and you can choose to view amounts as SATS or BTC.",
	},
	{
		title: "Advanced wallet details",
		description:
			"View your descriptors, xpubs and derivation paths to your Bull Bitcoin wallet elsewhere.",
	},
	{
		title: "Securely recover from backup",
		description:
			"You have a wallet mnemonic you want to restore? Use the Bull Bitcoin wallet to import backups, discover if there are funds and sweep them to a new wallet.",
	},
	{
		title: "Customer support",
		description:
			"Ask questions in our active telegram channel and our team will help you understand how to use Bitcoin, fix any issue you’re having and develop new feature ideas you may have.",
	},
	{
		title: "Fully free and open-source",
		description:
			"How do you know that we aren’t lying? All of our software is publicly viewable, and it is also reproducible. That means that if there was a backdoor or we were leaking your data, we wouldn’t be able to hide that from you.",
		ctaLabel: "View our code",
		ctaHref: "https://github.com/SatoshiPortal/bullbitcoin-mobile",
	},
]

export default function WalletPage() {
	// Replicate homepage scroll/animation behavior
	useEffect(() => {
		let scrollTimer: NodeJS.Timeout
		let hasScrolled = false

		const handleScroll = () => {
			if (!hasScrolled) {
				hasScrolled = true
				document.documentElement.classList.add('scroll-snap-enabled')
				scrollTimer = setTimeout(() => {
					document.documentElement.classList.remove('scroll-snap-enabled')
					document.documentElement.classList.add('scroll-snap-disabled')
				}, 2000)
				window.removeEventListener('scroll', handleScroll)
			}
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => {
			window.removeEventListener('scroll', handleScroll)
			if (scrollTimer) clearTimeout(scrollTimer)
		}
	}, [])

	useEffect(() => {
		const observerOptions = { threshold: 0.1, rootMargin: '0px 0px 200px 0px' }
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add('visible')
			})
		}, observerOptions)

		const fadeElements = document.querySelectorAll('.fade-in-up')
		fadeElements.forEach((el) => observer.observe(el))
		return () => {
			fadeElements.forEach((el) => observer.unobserve(el))
		}
	}, [])

	const { t } = useTranslation()

	return (
		<main className="flex min-h-screen flex-col">

			{/* Hero Section (same style as homepage) */}
			<section className="hero-section">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-453469333-612x612.jpg-4pY7TnDJCoA7GoCt4zpoRhsKpIZuG6.jpeg"
						alt="Bison grazing with mountains in background"
						fill
						priority
						className="object-cover opacity-40 filter grayscale"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
				</div>

				<div className="relative z-10 text-center px-4 w-full h-full flex flex-col items-center justify-center">
					<h1 className="hero-text font-black tracking-tighter text-white whitespace-pre-line">
						OWN<br />YOUR<br />MONEY
					</h1>
				</div>
			</section>

			{/* Wallet intro with phone mockup (engineering section effects) */}
			<section className="engineering-sovereignty-section wallet-snap">
				<div className="absolute inset-0 bg-gradient-radial from-zinc-900/20 via-black to-black"></div>
				<div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Phone mockup (left) */}
					<div className="flex justify-center lg:justify-start fade-in-up order-2 lg:order-1 mt-10 sm:mt-0 overflow-visible">
						<Image
							src="/mockups/screen.jpg"
							alt="Bull Wallet app screenshot"
							width={420}
							height={780}
							priority
							className="w-full max-w-[420px] h-auto rounded-[1.5rem] border border-white/10 shadow-2xl"
						/>
					</div>

					{/* Copy (right) */}
					<div className="engineering-content order-1 lg:order-2">
						<h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight">
							The greatest mobile Bitcoin wallet of all time
						</h2>
						<p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-10 leading-tight font-semibold">
							Focused on privacy, security and usability for day-to-day Bitcoin transactions.
						</p>
						<div className="flex flex-wrap gap-4">
							<span className="text-sm md:text-base lg:text-lg uppercase tracking-wider px-4 py-2 rounded-full border border-white/15 bg-white/5 text-gray-200">Self-custodial</span>
							<span className="text-sm md:text-base lg:text-lg uppercase tracking-wider px-4 py-2 rounded-full border border-white/15 bg-white/5 text-gray-200">Open-Source</span>
							<span className="text-sm md:text-base lg:text-lg uppercase tracking-wider px-4 py-2 rounded-full border border-white/15 bg-white/5 text-gray-200">Bitcoin-only</span>
							<span className="text-sm md:text-base lg:text-lg uppercase tracking-wider px-4 py-2 rounded-full border border-white/15 bg-white/5 text-gray-200">No-KYC</span>
						</div>

						{/* CTAs */}
						<div className="mt-8">
							<p className="text-sm md:text-base uppercase tracking-wider text-white text-center mb-5">Start using Bull wallet</p>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center justify-items-center">
								<a href="https://play.google.com/store/apps/details?id=com.bullbitcoin.mobile&hl=en" target="_blank" rel="noopener noreferrer" className="block">
									<Image src="/badges/play-store-badge-bull.svg" alt="Get it on Google Play" width={240} height={70} className="w-[220px] sm:w-[240px] h-auto" />
								</a>
								<a href="https://testflight.apple.com/join/FJbE4JPN" target="_blank" rel="noopener noreferrer" className="block">
									<Image src="/badges/app-store-badge-bull.svg" alt="Download on the App Store" width={240} height={70} className="w-[220px] sm:w-[240px] h-auto" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Founder quote + network + exchange cards */}
			<section className="py-16 md:py-24 bg-white text-black">
				<div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
					<div className="grid grid-cols-1 lg:grid-cols-3 items-stretch bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
						{/* Founder quote */}
						<div className="fade-in-up text-center lg:text-left p-8 md:p-12">
							<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
								Suitable for beginners and experts alike.
							</h3>
							<p className="text-lg md:text-2xl lg:text-3xl text-gray-700 italic leading-relaxed">
								“ I built this wallet so that it would offer all the advanced features I want, but also that my mom could use it without being confused. ”
							</p>
							<p className="mt-4 text-sm md:text-base text-gray-500">
								— Francis Pouliot, founder of Bull Bitcoin
							</p>
						</div>

						{/* Multi-network compatibility */}
						<div className="fade-in-up text-center lg:text-left p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-gray-200">
							<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
								Multi-network compatibility
							</h3>
							<p className="text-lg md:text-2xl text-gray-700 leading-relaxed max-w-3xl lg:max-w-none mx-auto lg:mx-0">
								Transact seamlessly on the <span className="bitcoin-action">Bitcoin Network</span>, <span className="bitcoin-action">Lightning Network</span> and <span className="bitcoin-action">Liquid Network</span>. Using non-custodial atomic-swap technologies, you can move funds between networks anonymously and securely.
							</p>
							<div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12">
								<Image src="/network-logos/Bitcoin.svg.webp" alt="Bitcoin" width={120} height={120} className="h-12 w-auto md:h-16 opacity-90" />
								<Image src="/network-logos/Bitcoin_lightning_logo.png" alt="Lightning Network" width={120} height={120} className="h-12 w-auto md:h-16 opacity-90" />
								<Image src="/network-logos/logo.28b5ba97.svg" alt="Liquid Network" width={140} height={120} className="h-12 w-auto md:h-16 opacity-90" />
							</div>
						</div>

						{/* Exchange integration */}
						<div className="fade-in-up text-center lg:text-left p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-gray-200">
							<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
								Native integration with the Bull Bitcoin exchange
							</h3>
							<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
								Connect your Bull Bitcoin account to buy bitcoin, sell bitcoin and make fiat payments directly with your self-custodial wallet. This is <span className="bitcoin-action">optional</span>, and you don’t have to link an account if you don’t want to. It's so easy, it feels like using a custodial app!
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Wallet Features - mimic home features card style */}
			<section className="py-16 md:py-24 bg-black text-white">
				<div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
					<div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white fade-in-up">Wallet features</h2>
						<p className="text-lg md:text-xl text-gray-300 fade-in-up">Many said it couldn’t be done, but we’ve achieved our impossible dream: the perfect Bitcoin wallet, for anyone.</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						{walletFeatures.map((feature, index) => (
							<div
								key={index}
								className="fade-in-up bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
								style={{ transitionDelay: `${index * 50}ms` }}
							>
								<h3 className="text-lg font-semibold text-black mb-3">{feature.title}</h3>
								<p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
								{feature.ctaHref && (
									<a
										href={feature.ctaHref}
										target="_blank"
										rel="noopener noreferrer"
										className="mt-3 inline-block text-sm font-semibold text-black underline underline-offset-2 hover:opacity-80"
									>
										{feature.ctaLabel}
									</a>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Engineering Sovereignty (copied from home; no scroll-snap) */}
			<section className="py-24 bg-black text-white relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-radial from-zinc-900/20 via-black to-black"></div>
				<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
					<div className="engineering-content">
						<h1 className="text-5xl md:text-7xl lg:text-[10rem] font-black mb-16 tracking-tight leading-tight">
							{t('engineering_sovereignty.title')}
						</h1>
						<div className="max-w-6xl mx-auto mb-16">
							<p
								className="text-2xl md:text-3xl lg:text-5xl text-gray-200 leading-relaxed font-medium text-center"
								dangerouslySetInnerHTML={{
									__html: t('engineering_sovereignty.description', {
										buy: `<span class="bitcoin-action">${t('engineering_sovereignty.actions.buy')}</span>`,
										sell: `<span class="bitcoin-action">${t('engineering_sovereignty.actions.sell')}</span>`,
										hold: `<span class="bitcoin-action">${t('engineering_sovereignty.actions.hold')}</span>`,
										spend: `<span class="bitcoin-action">${t('engineering_sovereignty.actions.spend')}</span>`
									})
								}}
							/>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center justify-items-center">
							<a href="https://play.google.com/store/apps/details?id=com.bullbitcoin.mobile&hl=en" target="_blank" rel="noopener noreferrer" className="block">
								<Image src="/badges/play-store-badge-bull.svg" alt="Get it on Google Play" width={240} height={70} className="w-[220px] sm:w-[240px] h-auto" />
							</a>
							<a href="https://testflight.apple.com/join/FJbE4JPN" target="_blank" rel="noopener noreferrer" className="block">
								<Image src="/badges/app-store-badge-bull.svg" alt="Download on the App Store" width={240} height={70} className="w-[220px] sm:w-[240px] h-auto" />
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Subtle Open-Source Footer Section */}
			<section className="py-12 md:py-16 bg-white text-black border-t border-gray-200">
				<div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
					<div className="grid grid-cols-1 items-center">
						<div className="fade-in-up text-center md:text-left">
							<h3 className="text-xl md:text-2xl font-bold mb-2">Fully free and open source under MIT license</h3>
							<p className="text-gray-700 mb-2">Developer contributions welcome</p>
							{/* Hiring blurb removed per request */}
							<div className="mt-2 flex justify-center md:justify-start">
								<a href="https://github.com/SatoshiPortal/bullbitcoin-mobile" target="_blank" rel="noopener noreferrer" aria-label="Visit the bullbitcoin-mobile repository on GitHub">
									<img
										src="https://img.shields.io/badge/GitHub-bullbitcoin--mobile-181717?style=for-the-badge&logo=github&logoColor=white"
										alt="GitHub – bullbitcoin-mobile"
										width="240"
										height="40"
									/>
								</a>
							</div>

						</div>
					</div>
				</div>
			</section>

		</main>
	)
}
