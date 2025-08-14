import Link from 'next/link'
import * as React from 'react'

export type CareersPromptProps = {
  href?: string
  className?: string
}

/**
 * Simple careers link used in the header.
 */
export function CareersPrompt({
  href = '/careers',
  className,
}: CareersPromptProps) {
  return (
    <div className={`flex items-center ${className ?? ''}`}>
      <Link
        href={href}
        className="text-sm font-medium underline-offset-4 hover:underline"
      >
        Careers
      </Link>
    </div>
  )
}
