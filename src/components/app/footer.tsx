'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import dynamic from 'next/dynamic'

const DemoRequestModal = dynamic(
  () => import('./demo-request-modal').then((m) => m.DemoRequestModal),
  { ssr: false }
)

export function Footer() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <footer className="bg-tertiary text-tertiary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-serif font-semibold mb-4">
              Watchdog
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
              Watchdog automatically scans your invoices, compares them to your
              agreements, and alerts you of discrepancies before they impact
              your bottom line.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="accent"
                size="sm"
                onClick={() => setIsDemoModalOpen(true)}
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-sm text-muted-foreground">
                © 2025 Watchdog. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
                <a
                  href="/legal/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="/legal/cookies"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Request Modal */}
      {isDemoModalOpen && (
        <DemoRequestModal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
          buttonSource="footer"
        />
      )}
    </footer>
  )
}
