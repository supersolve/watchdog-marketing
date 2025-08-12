'use client'

import React, { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

function isAllowedGoogleSchedulingUrl(value: string): boolean {
  try {
    const parsed = new URL(value)
    if (parsed.protocol !== 'https:') return false
    const allowedHosts = ['calendar.google.com']
    return allowedHosts.some(
      (host) => parsed.hostname === host || parsed.hostname.endsWith(`.${host}`)
    )
  } catch {
    return false
  }
}

export interface GoogleSchedulerButtonProps {
  url: string
  color?: string // kept for compatibility but unused in iframe mode
  label?: string
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'accent'
    | 'ghost'
    | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  nonce?: string // kept for compatibility but unused in iframe mode
}

export function GoogleSchedulerButton({
  url,
  label = 'Book an appointment',
  variant = 'accent',
  size = 'lg',
}: GoogleSchedulerButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const isAllowedUrl = useMemo(() => isAllowedGoogleSchedulingUrl(url), [url])

  const handleClick = () => {
    if (!isAllowedUrl) return
    setIsOpen(true)
  }

  return (
    <div className="inline-flex flex-col items-center gap-3">
      <Button
        onClick={handleClick}
        variant={variant}
        size={size}
        type="button"
        aria-label={label}
        aria-busy={!hasLoaded && isOpen}
        disabled={!isAllowedUrl}
      >
        {label}
      </Button>

      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="w-full max-w-5xl"
      >
        <DialogHeader>
          <DialogTitle>{label}</DialogTitle>
        </DialogHeader>
        <DialogContent>
          {isAllowedUrl ? (
            <div className="flex flex-col gap-3">
              <div className="w-full h-[70vh] rounded-lg overflow-hidden border">
                <iframe
                  src={url}
                  title={label}
                  className="w-full h-full"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
                  onLoad={() => setHasLoaded(true)}
                />
              </div>
              <p className="text-xs text-stone-500">
                If the calendar does not appear (some browsers block embedding),
                you can open it in a new tab:{' '}
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Open Google Calendar scheduling
                </a>
                .
              </p>
            </div>
          ) : (
            <p className="text-sm text-red-600">
              Invalid or unsupported scheduling URL.
            </p>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
