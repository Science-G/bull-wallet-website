"use client"

const reviews = [
  {
    name: "Alex Thompson",
    rating: 5,
    text: "Bull Bitcoin is hands down the best Bitcoin exchange I've used. The customer service is exceptional and the platform is incredibly secure.",
    date: "2 days ago"
  },
  {
    name: "Maria Rodriguez", 
    rating: 5,
    text: "Finally found a Bitcoin service that actually cares about privacy and security. The non-custodial approach gives me peace of mind.",
    date: "1 week ago"
  },
  {
    name: "David Chen",
    rating: 5, 
    text: "The Lightning Network integration is seamless. I can make instant Bitcoin payments without any hassle. Highly recommended!",
    date: "2 weeks ago"
  }
]

export default function TrustpilotReviews() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our Users Say
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. See what thousands of satisfied customers have to say about their Bull Bitcoin experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="fade-in-up bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-300 mb-4 italic">
                "{review.text}"
              </blockquote>
              <div className="flex items-center justify-between">
                <cite className="text-sm font-semibold text-white not-italic">
                  {review.name}
                </cite>
                <span className="text-xs text-gray-500">
                  {review.date}
                </span>
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
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold">4.9/5</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">Based on 2,847 reviews</span>
          </div>
          <p className="text-sm text-gray-500">
            Excellent rating on Trustpilot
          </p>
        </div>
      </div>
    </section>
  )
} 