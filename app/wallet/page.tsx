"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { Shield, EyeOff, Zap, DollarSign, Lock, User, Network, Settings } from "lucide-react"

// Wallet features (translated via i18n)
const featureKeys = [
	"instant_lightning",
	"cross_network_swaps",
	"confidential_transactions",
	"smart_fee",
	"mobile_security",
	"privacy_first",
	"encrypted_backups",
	"own_node",
	"payjoin",
	"watch_only",
	"coldcard_q",
	"coin_control",
	"multi_currency",
	"advanced_details",
	"recover_backup",
	"customer_support",
	"open_source"
] as const

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
						{t('hero.title')}
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
							{t('wallet.title')}
						</h2>
						<p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-10 leading-tight font-semibold">
							{t('wallet.subtitle')}
						</p>
						<div className="flex flex-wrap gap-3 md:gap-4">
							<span className="text-sm md:text-base lg:text-lg uppercase tracking-wider px-4 py-2 rounded-[4px] border border-brandRed bg-white text-black">{t('wallet.labels.self_custodial')}</span>
							<span className="text-sm md:text-base lg:text-lg uppercase tracking-wider px-4 py-2 rounded-[4px] border border-brandRed bg-white text-black">{t('wallet.labels.open_source')}</span>
							<span className="text-sm md:text-base lg:text-lg uppercase tracking-wider px-4 py-2 rounded-[4px] border border-brandRed bg-white text-black">{t('wallet.labels.bitcoin_only')}</span>
							<span className="text-sm md:text-base lg:text-lg uppercase tracking-wider px-4 py-2 rounded-[4px] border border-brandRed bg-white text-black">{t('wallet.labels.no_kyc')}</span>
						</div>

						{/* CTAs */}
						<div className="mt-8">
							<p className="text-sm md:text-base uppercase tracking-wider text-white text-center mb-5">{t('wallet.cta')}</p>
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
							<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">{t('founder_quote.title')}</h3>
							<p className="text-lg md:text-2xl lg:text-3xl text-gray-700 italic leading-relaxed">{t('founder_quote.quote')}</p>
							<p className="mt-4 text-sm md:text-base text-gray-500">{t('founder_quote.author')}</p>
						</div>

						{/* Multi-network compatibility */}
						<div className="fade-in-up text-center lg:text-left p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-gray-200">
							<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">{t('networks.title')}</h3>
							<p className="text-lg md:text-2xl text-gray-700 leading-relaxed max-w-3xl lg:max-w-none mx-auto lg:mx-0" dangerouslySetInnerHTML={{ __html: t('networks.description') }} />
							<div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12">
								<Image src="/network-logos/Bitcoin.svg.webp" alt="Bitcoin" width={120} height={120} className="h-12 w-auto md:h-16 opacity-90" />
								<Image src="/network-logos/Bitcoin_lightning_logo.png" alt="Lightning Network" width={120} height={120} className="h-12 w-auto md:h-16 opacity-90" />
								<Image src="/network-logos/logo.28b5ba97.svg" alt="Liquid Network" width={140} height={120} className="h-12 w-auto md:h-16 opacity-90" />
							</div>
						</div>

						{/* Exchange integration */}
						<div className="fade-in-up text-center lg:text-left p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-gray-200">
							<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">{t('exchange.title')}</h3>
							<p className="text-lg md:text-xl text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('exchange.description') }} />
						</div>
					</div>
				</div>
			</section>

			{/* Wallet Features - mimic home features card style */}
			<section className="py-16 md:py-24 bg-black text-white">
				<div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
					<div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white fade-in-up">{t('wallet.features_title')}</h2>
						<p className="text-lg md:text-xl text-gray-300 fade-in-up">{t('wallet.features_subtitle')}</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						{featureKeys.map((key, index) => {
							const title = t(`features_list.${key}.title`)
							const description = t(`features_list.${key}.description`)
							let Icon: any = null
							switch (key) {
								case 'confidential_transactions':
								case 'privacy_first':
								case 'payjoin':
									Icon = EyeOff; break
								case 'mobile_security':
								case 'watch_only':
								case 'coldcard_q':
								case 'open_source':
									Icon = Shield; break
								case 'instant_lightning':
								case 'cross_network_swaps':
									Icon = Zap; break
								case 'smart_fee':
								case 'multi_currency':
									Icon = DollarSign; break
								case 'own_node':
									Icon = Network; break
								case 'advanced_details':
									Icon = Settings; break
								default:
									Icon = null
							}
							return (
								<div
									key={key}
									className="fade-in-up bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
									style={{ transitionDelay: `${index * 50}ms` }}
								>
									<div className="flex items-center gap-3 mb-3">
										{Icon && (
											<span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-brandRed/40 bg-white">
												<Icon className="w-5 h-5 text-brandRed" />
											</span>
										)}
										<h3 className="text-lg font-semibold text-black">{title}</h3>
									</div>
									<p className="text-gray-600 text-sm leading-relaxed">{description}</p>
									{key === 'encrypted_backups' && (
										<a
											href="https://recoverbull.com"
											target="_blank"
											rel="noopener noreferrer"
											className="mt-3 inline-block text-sm font-semibold text-black underline underline-offset-2 hover:opacity-80"
										>
											{t('features_list.encrypted_backups.cta')}
										</a>
									)}
								</div>
							)
						})}
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
							<h3 className="text-xl md:text-2xl font-bold mb-2">{t('open_source.title')}</h3>
							<p className="text-gray-700 mb-2">{t('open_source.subtitle')}</p>
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
