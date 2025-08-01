"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Zap, Users, TrendingUp, Lock, UserCheck } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

// Import only the truly interactive components
import Navigation from '@/components/layout/navigation'
import Statistics from '@/components/statistics'
import AppShowcase from '@/components/app-showcase'
import Footer from '@/components/footer'

// All static data consolidated here
const products = [
  {
    id: 1,
    title: "BULL EXCHANGE",
    summary: "Buy, sell and pay bills with Bitcoin instantly",
    description: "Easy-to-use portal to buy Bitcoin, sell Bitcoin and send bank transfers to and from Bitcoin wallets, with built-in customer service and powerful features.",
    primaryAction: { label: "JOIN NOW", href: "/rates" },
    secondaryAction: { label: "FEATURES", href: "/features" },
    featured: true,
  },
  {
    id: 2,
    title: "PRIME OTC",
    summary: "Large or corporate transactions",
    description: "VIP service for large transactions and corporate clients with dedicated account managers and custom solutions.",
    primaryAction: { label: "BOOK A CALL", href: "/otc" },
    secondaryAction: { label: "LEARN MORE", href: "/otc" },
    featured: false,
  },
  {
    id: 3,
    title: "BULL WALLET",
    summary: "Self-custody Bitcoin wallet",
    description: "Advanced Bitcoin wallet with cutting-edge privacy features and seamless integration with Bull Bitcoin services.",
    primaryAction: { label: "DOWNLOAD", href: "/wallet" },
    secondaryAction: { label: "FEATURES", href: "/wallet" },
    featured: false,
  },
]

const principles = [
  {
    title: "Privacy and security by default",
    description: "No other crypto exchange has the technology, skill, ethical code and courage. Our non-custodial model and software infrastructure is designed to protect you at all costs."
  },
  {
    title: "Operational excellence", 
    description: "We hold ourselves to the highest standard of professionalism, and so should you. As our client, your experience is that with Bull Bitcoin everything always just works flawlessly."
  },
  {
    title: "Integrity and honesty",
    description: "We are driven by a strict moral code. We do not have investors pressuring us to cut corners and compromise our values. We do not mislead or misdirect our clients. Unlike other exchanges, we do not have hidden fees and hidden spreads."
  },
  {
    title: "Customer obsession",
    description: "We treat our clients like we would members of our own family. No chatbot, no support tickets: you always talk to a real human. We go above and beyond because we truly care about making your Bitcoin experience a success, secure and pleasant."
  },
  {
    title: "Technological mastery",
    description: "Bull Bitcoin distinguishes itself by having the highest technical sophistication of any crypto exchange on the planet. We are the fountainhead others follow, always on the bleeding edge."
  },
  {
    title: "Flexibility and creativity",
    description: "We accommodate complicated needs and transactions. We care only about delivering results, even if it means changing our processes or inventing new technologies to do it."
  }
]

const features = [
  {
    number: "01",
    icon: Shield,
    title: "Non-custodial security",
    description: "Your Bitcoin, your keys. We never hold your funds, ensuring complete control and security over your digital assets."
  },
  {
    number: "02", 
    icon: Zap,
    title: "Lightning-fast transactions",
    description: "Experience instant Bitcoin payments with our Lightning Network integration, perfect for everyday transactions."
  },
  {
    number: "03",
    icon: Lock,
    title: "Privacy by design",
    description: "Built-in privacy features including Tor integration and CoinJoin support to keep your transactions confidential."
  },
  {
    number: "04",
    icon: UserCheck,
    title: "Human customer support",
    description: "No bots, no tickets. Talk directly to our Bitcoin experts who understand your needs and provide personalized assistance."
  },
  {
    number: "05",
    icon: Users,
    title: "Community-driven",
    description: "Join a thriving community of Bitcoin enthusiasts, educators, and advocates working towards financial sovereignty."
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Automated investment strategies",
    description: "We enable four different Bitcoin investment strategies: Dollar Cost Averaging (DCA), Value Averaging, Lump Sum and HODL. Set it and forget it - let our algorithms do the work while you focus on what matters most."
  },
]

const countries = [
  { flag: "🇨🇦", name: "Canada", description: "Our home base with full regulatory compliance" },
  { flag: "🇪🇺", name: "Europe", description: "Serving the European Bitcoin community" },
  { flag: "🇨🇷", name: "Costa Rica", description: "Expanding Bitcoin adoption in Central America" },
  { flag: "🇲🇽", name: "Mexico", description: "Bringing Bitcoin to Latin America" },
  { flag: "🇦🇷", name: "Argentina", description: "Supporting financial sovereignty in South America" },
]

const testimonials = [
  {
    text: "Bull Bitcoin is hands down the best Bitcoin exchange I've used. The customer service is exceptional and the platform is incredibly secure.",
    author: "Alex Thompson",
    timeAgo: "2 days ago"
  },
  {
    text: "Finally found a Bitcoin service that actually cares about privacy and security. The non-custodial approach gives me peace of mind.",
    author: "Maria Rodriguez", 
    timeAgo: "1 week ago"
  },
  {
    text: "The Lightning Network integration is seamless. I can make instant Bitcoin payments without any hassle. Highly recommended!",
    author: "David Chen",
    timeAgo: "2 weeks ago"
  },
]

const blogPosts = [
  {
    category: "Technology",
    readTime: "5 min read",
    title: "The Future of Bitcoin Privacy",
    description: "Exploring the latest developments in Bitcoin privacy technology and what they mean for financial sovereignty.",
    date: "January 15, 2024",
    href: "/blog/future-of-bitcoin-privacy"
  },
  {
    category: "Education",
    readTime: "7 min read", 
    title: "Why Self-Custody Matters More Than Ever",
    description: "Understanding the importance of controlling your own Bitcoin keys in an increasingly uncertain financial world.",
    date: "January 10, 2024",
    href: "/blog/self-custody-matters"
  },
  {
    category: "Technology",
    readTime: "6 min read",
    title: "Lightning Network: The Scaling Solution", 
    description: "How the Lightning Network is revolutionizing Bitcoin payments with instant, low-cost transactions.",
    date: "January 5, 2024",
    href: "/blog/lightning-network-scaling"
  },
]

export default function Home() {
  const { t } = useTranslation()
  
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    let hasScrolled = false;

    const handleScroll = () => {
      if (!hasScrolled) {
        hasScrolled = true;
        // Enable scroll-snap on first scroll
        document.documentElement.classList.add('scroll-snap-enabled');
        
        // Disable scroll-snap after 2 seconds
        scrollTimer = setTimeout(() => {
          document.documentElement.classList.remove('scroll-snap-enabled');
          document.documentElement.classList.add('scroll-snap-disabled');
        }, 2000);
        
        // Remove scroll listener after first use
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in-up class
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      {/* Hero Section - Inline */}
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

      {/* Mission Text - Engineering Sovereignty */}
      <section className="engineering-sovereignty-section">
        <div className="absolute inset-0 bg-gradient-radial from-zinc-900/20 via-black to-black"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="engineering-content">
            {/* Company Slogan - Massive and Prominent */}
            <h1 className="text-5xl md:text-7xl lg:text-[10rem] font-black mb-16 tracking-tight leading-tight">
              {t('engineering_sovereignty.title')}
            </h1>
            
            {/* Call to Action Slogan - Much Larger with Highlighted Actions */}
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
            
            {/* Legacy Statement - Larger and More Elegant */}
            <p className="text-xl md:text-2xl lg:text-4xl text-white/80 font-light italic leading-relaxed max-w-4xl mx-auto mb-20">
              {t('engineering_sovereignty.legacy')}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/app"
                className="inline-flex items-center justify-center bg-white text-black px-12 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors duration-300 min-w-[200px]"
              >
                {t('engineering_sovereignty.download_app')}
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center bg-white text-black px-12 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors duration-300 min-w-[200px]"
              >
                {t('engineering_sovereignty.create_account')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Product Section - Inline */}
      <section className="section-isolated py-16 md:py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 nordic-pattern"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white fade-in-up">
              {t('products.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 fade-in-up">
              {t('products.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="product-card bg-white border border-gray-200 rounded-lg p-8 relative overflow-hidden flex flex-col fade-in-up" style={{ transitionDelay: '0ms' }}>
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">
                  {t('products.bull_exchange.title')}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {t('products.bull_exchange.summary')}
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed flex-1">
                  {t('products.bull_exchange.description')}
                </p>
                
                <div className="flex gap-3 mt-auto">
                  <Link
                    href="/rates"
                    className="flex-1 inline-flex items-center justify-center bg-black text-white px-4 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300"
                  >
                    {t('products.bull_exchange.primary_action')}
                  </Link>
                  <Link
                    href="/features"
                    className="flex-1 inline-flex items-center justify-center border border-gray-300 bg-transparent text-black px-4 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                  >
                    {t('products.bull_exchange.secondary_action')}
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="product-card bg-white border border-gray-200 rounded-lg p-8 relative overflow-hidden flex flex-col fade-in-up" style={{ transitionDelay: '150ms' }}>
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">
                  {t('products.prime_otc.title')}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {t('products.prime_otc.summary')}
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed flex-1">
                  {t('products.prime_otc.description')}
                </p>
                
                <div className="flex gap-3 mt-auto">
                  <Link
                    href="/otc"
                    className="flex-1 inline-flex items-center justify-center bg-black text-white px-4 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300"
                  >
                    {t('products.prime_otc.primary_action')}
                  </Link>
                  <Link
                    href="/otc"
                    className="flex-1 inline-flex items-center justify-center border border-gray-300 bg-transparent text-black px-4 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                  >
                    {t('products.prime_otc.secondary_action')}
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="product-card bg-white border border-gray-200 rounded-lg p-8 relative overflow-hidden flex flex-col fade-in-up" style={{ transitionDelay: '300ms' }}>
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">
                  {t('products.bull_wallet.title')}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {t('products.bull_wallet.summary')}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                  {t('products.bull_wallet.description')}
                </p>
                
                {/* Highlight text - Available worldwide */}
                <div className="mb-8">
                  <p className="text-sm text-gray-500 bg-gray-100 px-3 py-2 rounded-md border-l-2 border-gray-400 italic">
                    {t('products.bull_wallet.highlight')}
                  </p>
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <Link
                    href="/wallet"
                    className="flex-1 inline-flex items-center justify-center bg-black text-white px-4 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300"
                  >
                    {t('products.bull_wallet.primary_action')}
                  </Link>
                  <Link
                    href="/wallet"
                    className="flex-1 inline-flex items-center justify-center border border-gray-300 bg-transparent text-black px-4 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                  >
                    {t('products.bull_wallet.secondary_action')}
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section - Moved up after Products */}
      <section className="py-16 md:py-24 bg-zinc-900 text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white fade-in-up">
              Uncompromising Principles
            </h2>
            <p className="text-lg md:text-xl text-gray-300 fade-in-up">
              The fiat banking system is collapsing. We are leading civilization change: the transition to Bitcoin as a universal sound money and decentralized payment system. We take this responsibility seriously. All of our projects and services align with these principles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="fade-in-up bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{principle.title}</h3>
                <p className="text-base md:text-lg text-gray-300">{principle.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center fade-in-up">
            <Link href="/mission">
              <span className="inline-flex items-center justify-center border border-white/30 bg-transparent text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
                Learn About Our Principles
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics - Keep as Interactive Component */}
      <Statistics />

      {/* App Showcase - Keep as Interactive Component */}
      <AppShowcase />

      {/* Features Preview - Inline */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white fade-in-up">
              Features that set us apart
          </h2>
            <p className="text-lg md:text-xl text-gray-400 fade-in-up">
              Discover the core advantages that make our platform unique and powerful for your Bitcoin journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="fade-in-up bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                        {feature.number}
                      </span>
                      <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center fade-in-up">
            <Link
              href="/features"
              className="inline-flex items-center justify-center border border-white/30 bg-transparent text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
            >
              Explore All Features
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview - Inline */}
      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Bull Bitcoin</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Founded in 2013, Bull Bitcoin has been at the forefront of Bitcoin innovation in Canada and beyond. 
                We are a team of Bitcoin maximalists, cypherpunks, and freedom advocates dedicated to making Bitcoin accessible to everyone.
              </p>
              <p className="text-base md:text-lg text-gray-400 mb-8">
                Our mission is simple: to provide the most secure, private, and user-friendly Bitcoin services on the planet. 
                We believe that Bitcoin is the future of money, and we're here to help you navigate that future with confidence.
              </p>
              <div className="border-l-4 border-white/20 pl-6 mb-8">
                <p className="text-lg font-semibold mb-2">Francis Pouliot</p>
                <p className="text-sm text-gray-400 mb-3">CEO & Founder</p>
                <p className="text-sm text-gray-300 italic">
                  "Bitcoin is not just a technology—it's a movement toward individual sovereignty and financial freedom. 
                  At Bull Bitcoin, we're building the tools to make that vision a reality."
                </p>
              </div>
              <div className="fade-in-up">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center border border-white/30 bg-transparent text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end fade-in-up">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-black/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4"></div>
                      <p className="text-white font-semibold">Francis Pouliot</p>
                      <p className="text-gray-400 text-sm">CEO & Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Presence - Inline */}
      <section className="py-16 md:py-24 bg-zinc-900 text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Global Bitcoin Access</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              We're expanding Bitcoin access across multiple countries, bringing financial sovereignty to people worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <div
                key={index}
                className="fade-in-up bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:border-white/20 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{country.flag}</div>
                <h3 className="text-xl font-semibold mb-3">{country.name}</h3>
                <p className="text-gray-400 text-sm">{country.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talk to Human - Inline */}
      <section className="py-16 md:py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-black to-zinc-900"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Talk to a Human</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                No chatbots, no support tickets, no automated responses. When you need help, 
                you talk directly to a real person who cares about solving your problem.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center fade-in-up">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                  <p className="text-gray-400 text-sm">Instant support during business hours with knowledgeable team members</p>
                </div>
                
                <div className="text-center fade-in-up">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-400 text-sm">Detailed responses from our expert team within 24 hours</p>
                </div>
                
                <div className="text-center fade-in-up">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                  <p className="text-gray-400 text-sm">Direct phone line for urgent matters and complex transactions</p>
                </div>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 mb-8">
                <blockquote className="text-lg md:text-xl italic text-gray-300 mb-4">
                  "We treat our clients like we would members of our own family. No chatbot, no support tickets: you always talk to a real human."
                </blockquote>
                <cite className="text-sm text-gray-400">— Bull Bitcoin Customer Promise</cite>
              </div>
              
              <div className="fade-in-up">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-black px-8 py-3 uppercase text-sm tracking-wider hover:bg-gray-100 transition-colors duration-300 mr-4"
                >
                  Contact Support
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center border border-white/30 bg-transparent text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Log in and chat with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trustpilot Reviews - Inline */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">What Our Users Say</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. See what thousands of satisfied customers have to say about their Bull Bitcoin experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="fade-in-up bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-4 italic">"{testimonial.text}"</blockquote>
                <div className="flex items-center justify-between">
                  <cite className="text-sm font-semibold text-white not-italic">{testimonial.author}</cite>
                  <span className="text-xs text-gray-500">{testimonial.timeAgo}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center fade-in-up">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-lg font-semibold">4.9/5</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">Based on 2,847 reviews</span>
            </div>
            <p className="text-sm text-gray-500">Excellent rating on Trustpilot</p>
          </div>
        </div>
      </section>

      {/* Join the Mission - Inline */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 nordic-pattern"></div>
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tight">JOIN THE MISSION</h2>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 leading-relaxed">
                Be part of the Bitcoin revolution. Own your money, control your future, and help build a more sovereign world.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center fade-in-up">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Own Your Keys</h3>
                  <p className="text-gray-400">True financial sovereignty starts with controlling your own Bitcoin</p>
                </div>
                
                <div className="text-center fade-in-up">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
                  <p className="text-gray-400">Instant Bitcoin transactions with cutting-edge technology</p>
                </div>
                
                <div className="text-center fade-in-up">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Join Thousands</h3>
                  <p className="text-gray-400">Be part of a growing community of Bitcoin sovereignty advocates</p>
                </div>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
                <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 italic">
                  "Bitcoin is not just a technology—it's a movement toward individual sovereignty and financial freedom."
                </blockquote>
                <cite className="text-lg text-gray-400">— Francis Pouliot, Founder & CEO</cite>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center bg-white text-black px-12 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors duration-300 min-w-[200px]"
                >
                  Start Today
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center border-2 border-white/30 bg-transparent text-white px-12 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300 min-w-[200px]"
                >
                  Learn More
                </Link>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-500 text-sm">Join 50,000+ users who have chosen financial sovereignty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview - Inline */}
      <section className="py-16 md:py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 nordic-pattern"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Latest Insights</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest Bitcoin news, educational content, and insights from our team of experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="fade-in-up bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300 group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-gray-400 bg-white/5 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gray-200 transition-colors">
                    <Link href={post.href} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <Link
                      href={post.href}
                      className="text-sm text-white/80 hover:text-white transition-colors group-hover:text-white flex items-center"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center fade-in-up">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center border border-white/30 bg-transparent text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
