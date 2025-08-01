"use client"

import { useEffect, useRef } from 'react'

interface TrustpilotProps {
  className?: string
  businessunitId?: string
  templateId?: string
  locale?: string
  theme?: 'light' | 'dark'
  height?: string
  width?: string
  stars?: string
  reviewLanguages?: string
}

const loadScript = (src: string): Promise<void> =>
  new Promise((resolve) => {
    // Check if script is already loaded
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }
    
    const script = document.createElement('script')
    script.onload = () => resolve()
    script.onerror = () => resolve() // Resolve even on error to prevent hanging
    script.src = src
    script.async = true
    document.head.appendChild(script)
  })

export default function Trustpilot({
  className = "",
  businessunitId = "5d07ba5f79256400013b6808", // Bull Bitcoin's business unit ID
  templateId = "53aa8912dec7e10d38f59f36", // Carousel template
  locale = "en-US",
  theme = "light",
  height = "140px",
  width = "100%",
  stars = "5",
  reviewLanguages = "en"
}: TrustpilotProps) {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!divRef.current) return

    const initializeTrustpilot = async () => {
      try {
        // Load Trustpilot script if not already loaded
        await loadScript('//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js')
        
        // Wait a bit for the script to initialize
        setTimeout(() => {
          const { Trustpilot } = (window as any) || {}
          if (Trustpilot && divRef.current) {
            Trustpilot.loadFromElement(divRef.current, true)
          }
        }, 100)
      } catch (error) {
        console.warn('Failed to load Trustpilot widget:', error)
      }
    }

    initializeTrustpilot()
  }, [])

  return (
    <div className={`trustpilot-container ${className}`}>
      <div
        ref={divRef}
        className="trustpilot-widget"
        data-locale={locale}
        data-template-id={templateId}
        data-businessunit-id={businessunitId}
        data-style-height={height}
        data-style-width={width}
        data-stars={stars}
        data-review-languages={reviewLanguages}
      >
        {/* Fallback content while widget loads */}
        <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-green-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-1">Excellent</p>
            <p className="text-xs text-gray-500">Based on customer reviews</p>
            <a
              href="https://www.trustpilot.com/review/bullbitcoin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2"
            >
              <svg
                className="h-6 w-auto"
                viewBox="0 0 126 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0h126v31H0z"
                  fill="#00B67A"
                />
                <path
                  d="M25.5 23.5L20 18l-5.5 5.5L20 29l5.5-5.5z"
                  fill="#fff"
                />
                <path
                  d="M35 8h8v2h-8V8zM35 12h8v2h-8v-2zM35 16h5v2h-5v-2z"
                  fill="#fff"
                />
                <text
                  x="50"
                  y="20"
                  fill="#fff"
                  fontSize="12"
                  fontFamily="Arial, sans-serif"
                  fontWeight="bold"
                >
                  Trustpilot
                </text>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 