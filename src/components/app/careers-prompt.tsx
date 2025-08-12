import Link from 'next/link'
import * as React from 'react'

export type CareersPromptProps = {
  href?: string
  className?: string
}

/**
 * Small decorative prompt for the careers link.
 * Renders: "we're hiring" + a playful squiggle ending in an arrowhead, then the Careers link.
 * Decorative SVG is aria-hidden to avoid noise for assistive tech.
 */
export function CareersPrompt({
  href = '/careers',
  className,
}: CareersPromptProps) {
  const svgWidth = 120
  const svgHeight = 20

  return (
    <div className={`flex items-center gap-1 ${className ?? ''}`}>
      <svg
        aria-hidden="true"
        className="text-muted-foreground/80"
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="0" y="13" fontSize="11" fill="currentColor">
          we&#39;re hiring
        </text>
        <path
          d="M82 10 q 12 -6 24 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M112 10 l-6 -3 v6 z" fill="currentColor" />
      </svg>
      <Link
        href={href}
        className="text-sm font-medium underline-offset-4 hover:underline"
      >
        Careers
      </Link>
    </div>
  )
}
