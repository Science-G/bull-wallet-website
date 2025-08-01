"use client"
import Image from "next/image"
import FadeInSection from "../animations/fade-in-section"
import SectionTransition from "../animations/section-transition"
import Navigation from "../navigation"
import Footer from "../footer"

export interface CountryTeamMember {
  name: string
  role: string
  image: string
  bio: string
}

export interface CountryPaymentMethod {
  name: string
  description: string
  icon: string
}

export interface CountryFeature {
  title: string
  description: string
  icon: string
}

interface CountryPageTemplateProps {
  country: string
  flagImage: string
  coatOfArmsImage?: string
  paymentMethods: CountryPaymentMethod[]
  uniqueFeatures: CountryFeature[]
  languageName: string
  teamMembers: CountryTeamMember[]
  paymentAdvantageText: string
}

export function CountryPageTemplate({
  country,
  flagImage,
  coatOfArmsImage,
  paymentMethods,
  uniqueFeatures,
  languageName,
  teamMembers,
  paymentAdvantageText,
}: CountryPageTemplateProps) {
  return (
    <>
      <Navigation alwaysVisible={true} />
      <main className="min-h-screen bg-black text-white pt-24">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src={flagImage || "/placeholder.svg"}
              alt={`${country} flag`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Bull Bitcoin {country}</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">Bitcoin services tailored for {country}</p>
          </div>
        </section>

        {/* Section 1: Banking and Payment Options */}
        <SectionTransition startColor="#000000" endColor="#000000">
          <FadeInSection>
            <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="md:w-1/3">
                  <h2 className="text-3xl font-bold mb-6">Local Banking & Payment Options</h2>
                  <p className="text-gray-300 mb-6">{paymentAdvantageText}</p>
                  {coatOfArmsImage && (
                    <div className="relative h-40 w-40 mx-auto md:mx-0 mt-8 opacity-70">
                      <Image
                        src={coatOfArmsImage || "/placeholder.svg"}
                        alt={`${country} coat of arms`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 mr-4 flex items-center justify-center bg-zinc-800 rounded-full">
                          <span className="text-xl">{method.icon}</span>
                        </div>
                        <h3 className="text-xl font-semibold">{method.name}</h3>
                      </div>
                      <p className="text-gray-400">{method.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </FadeInSection>
        </SectionTransition>

        {/* Section 2: Country-Specific Features */}
        <SectionTransition startColor="#000000" endColor="#18181b">
          <FadeInSection>
            <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Features Unique to {country}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {uniqueFeatures.map((feature, index) => (
                  <div key={index} className="p-6 border border-zinc-800 rounded-lg bg-zinc-900">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center bg-zinc-800 rounded-full">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeInSection>
        </SectionTransition>

        {/* Section 3: Local Language Support */}
        <SectionTransition startColor="#18181b" endColor="#000000">
          <FadeInSection>
            <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6">Support in {languageName}</h2>
                  <p className="text-gray-300 mb-4">
                    We believe in providing support that truly understands your needs. That's why our {country} team
                    consists of native {languageName} speakers who understand both the language and the local context.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Our support team is available during local business hours and understands the specific challenges
                    and opportunities in the {country} market.
                  </p>
                  <p className="text-gray-300">
                    Whether you need help with transactions, account setup, or have questions about Bitcoin, our team is
                    ready to assist you in your language.
                  </p>
                </div>
                <div className="md:w-1/2 relative h-80 w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent z-10"></div>
                  <Image
                    src="/bitcoin-office-meeting.png"
                    alt="Support team meeting"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </section>
          </FadeInSection>
        </SectionTransition>

        {/* Section 4: Local Team Members */}
        <SectionTransition startColor="#000000" endColor="#18181b">
          <FadeInSection>
            <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Meet Your {country} Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-black p-6 rounded-lg border border-zinc-800">
                    <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-400 mb-4">{member.role}</p>
                    <p className="text-gray-300">{member.bio}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeInSection>
        </SectionTransition>
      </main>
      <Footer />
    </>
  )
}
