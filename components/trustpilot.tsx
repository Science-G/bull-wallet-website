"use client"

interface TrustpilotProps {
  className?: string
}

export default function Trustpilot({ className = "" }: TrustpilotProps) {
  return (
    <div className={className}>
      <div
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="53aa8912dec7e10d38f59f36"
        data-businessunit-id="5d07ba5f79256400013b6808"
        data-style-height="140px"
        data-style-width="100%"
        data-stars="5"
        data-review-languages="en"
      >
        <a href="https://www.trustpilot.com/review/bullbitcoin.com" target="_blank" rel="noopener">
          Trustpilot
        </a>
      </div>
    </div>
  )
} 