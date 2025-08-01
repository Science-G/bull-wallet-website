"use client"

export default function TalkToHuman() {
  return (
    <section className="py-16 md:py-24 bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-black to-zinc-900"></div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Talk to a Human
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              No chatbots, no support tickets, no automated responses. When you need help, you talk directly to a real person who cares about solving your problem.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center fade-in-up">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-400 text-sm">
                  Instant support during business hours with knowledgeable team members
                </p>
              </div>
              
              <div className="text-center fade-in-up">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-gray-400 text-sm">
                  Detailed responses from our expert team within 24 hours
                </p>
              </div>
              
              <div className="text-center fade-in-up">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-400 text-sm">
                  Direct phone line for urgent matters and complex transactions
                </p>
              </div>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 mb-8">
              <blockquote className="text-lg md:text-xl italic text-gray-300 mb-4">
                "We treat our clients like we would members of our own family. No chatbot, no support tickets: you always talk to a real human."
              </blockquote>
              <cite className="text-sm text-gray-400">— Bull Bitcoin Customer Promise</cite>
            </div>
            
            <div className="fade-in-up">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center bg-white text-black px-8 py-3 uppercase text-sm tracking-wider hover:bg-gray-100 transition-colors duration-300 mr-4"
              >
                Contact Support
              </a>
              <a 
                href="/login" 
                className="inline-flex items-center justify-center border border-white/30 bg-transparent text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
              >
                Log in and chat with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 