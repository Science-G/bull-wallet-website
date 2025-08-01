"use client"

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

export default function Principles() {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 nordic-pattern"></div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            <span className="inline-block">Driven by our Mission.</span>{" "}
            <span className="inline-block bg-gradient-to-r from-white via-white/80 to-white bg-clip-text text-transparent">
              Guided by our values.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-16 text-center leading-relaxed">
            we do not believe in compromise. We prioritize upholding ethic over easy profits. 100% self-funded (no outside funding), we are Bitcoin Maximalists that have never touched shitcoins. We are cypherpunks that write open-source software for individual liberty and freedom. We have our soul and our skin in the game.
          </p>
        </div>

        <div className="fade-in-up">
          <div className="grid grid-cols-1 gap-12">
            <div className="max-w-4xl mx-auto flex flex-col h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                {principles.map((principle, index) => (
                  <div key={index} className="principle-card relative p-6 border border-white/10 rounded-sm bg-black/50 backdrop-blur-sm hover:border-white/30 transition-all duration-500">
                    <div className="absolute -inset-[1px] rounded-sm bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 animate-shimmer overflow-hidden pointer-events-none"></div>
                    <h3 className="text-lg md:text-xl font-bold uppercase mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-300">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center fade-in-up">
          <a href="/mission">
            <span className="inline-flex items-center justify-center border border-white/30 bg-transparent text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
              Learn About Our Principles
            </span>
          </a>
        </div>
      </div>
    </section>
  )
} 