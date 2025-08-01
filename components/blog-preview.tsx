"use client"

const articles = [
  {
    category: "Technology",
    title: "The Future of Bitcoin Privacy",
    excerpt: "Exploring the latest developments in Bitcoin privacy technology and what they mean for financial sovereignty.",
    readTime: "5 min read",
    date: "January 15, 2024",
    href: "/blog/future-of-bitcoin-privacy"
  },
  {
    category: "Education", 
    title: "Why Self-Custody Matters More Than Ever",
    excerpt: "Understanding the importance of controlling your own Bitcoin keys in an increasingly uncertain financial world.",
    readTime: "7 min read",
    date: "January 10, 2024",
    href: "/blog/self-custody-matters"
  },
  {
    category: "Technology",
    title: "Lightning Network: The Scaling Solution",
    excerpt: "How the Lightning Network is revolutionizing Bitcoin payments with instant, low-cost transactions.",
    readTime: "6 min read", 
    date: "January 5, 2024",
    href: "/blog/lightning-network-scaling"
  }
]

export default function BlogPreview() {
  return (
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
          {articles.map((article, index) => (
            <article 
              key={index}
              className="fade-in-up bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300 group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-gray-400 bg-white/5 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-gray-200 transition-colors">
                  <a href={article.href} className="hover:underline">
                    {article.title}
                  </a>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-gray-500">{article.date}</span>
                  <a 
                    href={article.href}
                    className="text-sm text-white/80 hover:text-white transition-colors group-hover:text-white flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center fade-in-up">
          <a 
            href="/blog" 
            className="inline-flex items-center justify-center border border-white/30 bg-transparent text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  )
} 