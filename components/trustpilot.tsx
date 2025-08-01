"use client"

import { useEffect, useRef, useState } from 'react'

interface TrustpilotProps {
  className?: string
}

export default function Trustpilot({ className = "" }: TrustpilotProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error' | 'fallback'>('loading')

  useEffect(() => {
    // Function to load Trustpilot script
    const loadTrustpilotScript = () => {
      return new Promise<void>((resolve, reject) => {
        // Check if script already exists
        const existingScript = document.querySelector('script[src*="tp.widget.bootstrap.min.js"]')
        if (existingScript) {
          console.log('Trustpilot script already exists')
          resolve()
          return
        }

        console.log('Loading Trustpilot script...')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
        script.async = true
        
        script.onload = () => {
          console.log('Trustpilot script loaded successfully')
          resolve()
        }
        
        script.onerror = () => {
          console.error('Failed to load Trustpilot script')
          setStatus('error')
          reject(new Error('Failed to load Trustpilot script'))
        }

        document.head.appendChild(script)
      })
    }

    // Initialize Trustpilot widget
    const initializeTrustpilot = async () => {
      try {
        await loadTrustpilotScript()
        
        // Wait for window.Trustpilot to be available
        let attempts = 0
        const maxAttempts = 50 // 5 seconds total
        
        const checkTrustpilot = () => {
          return new Promise<void>((resolve, reject) => {
            const check = () => {
              attempts++
              const trustpilot = (window as any).Trustpilot
              
              console.log(`Attempt ${attempts}: Checking for Trustpilot object...`, !!trustpilot)
              
              if (trustpilot && containerRef.current) {
                console.log('Trustpilot object found, loading widget...')
                trustpilot.loadFromElement(containerRef.current, true)
                setStatus('loaded')
                resolve()
              } else if (attempts >= maxAttempts) {
                console.error('Trustpilot object not found after maximum attempts')
                setStatus('fallback')
                reject(new Error('Trustpilot not available'))
              } else {
                setTimeout(check, 100)
              }
            }
            check()
          })
        }

        await checkTrustpilot()
        console.log('Trustpilot widget initialized successfully')
        
      } catch (error) {
        console.error('Error initializing Trustpilot:', error)
        setStatus('error')
      }
    }

    initializeTrustpilot()
  }, [])

  return (
    <div className={`trustpilot-container ${className}`}>
      <div
        ref={containerRef}
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="53aa8912dec7e10d38f59f36"
        data-businessunit-id="5d07ba5f79256400013b6808"
        data-style-height="140px"
        data-style-width="100%"
        data-stars="5"
        data-review-languages="en"
      >
        {/* Fallback content */}
        <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200 min-h-[140px]">
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
            <p className="text-sm text-gray-600 mb-1">Excellent • 4.7/5</p>
            <p className="text-xs text-gray-500 mb-2">Based on customer reviews</p>
            <a
              href="https://www.trustpilot.com/review/bullbitcoin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs text-green-600 hover:text-green-700 font-medium"
            >
              View on Trustpilot
            </a>
            {/* Debug info */}
            <div className="mt-2 text-xs text-gray-400">
              Status: {status}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 