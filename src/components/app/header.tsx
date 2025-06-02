'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useIsMobile } from '../hooks/use-mobile'
import { cn } from '@/lib/utils'
import { DemoRequestModal } from './demo-request-modal'

// Burger menu icon component
const BurgerIcon = ({ className }: { className?: string }) => (
  <svg
    className={cn('h-6 w-6', className)}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
)

// Mobile menu component
const MobileMenu = ({
  isOpen,
  onClose,
  onRequestDemo,
}: {
  isOpen: boolean
  onClose: () => void
  onRequestDemo: () => void
}) => {
  if (!isOpen) return null

  return (
    <div className="absolute top-full left-0 right-0 bg-tertiary border-t border-border shadow-lg z-50 mx-4 sm:mx-6 lg:mx-8 rounded-b-lg">
      <div className="flex flex-col p-4 space-y-4">
        <a href="https://app.thewatchdog.no" rel="noopener noreferrer">
          <Button
            variant="ghost"
            className="justify-start w-full h-12 text-base"
            onClick={onClose}
          >
            Sign in
          </Button>
        </a>
        <Button
          className="justify-start bg-tertiary text-tertiary-foreground h-12 text-base"
          onClick={() => {
            onRequestDemo()
            onClose()
          }}
        >
          Request Demo
        </Button>
      </div>
    </div>
  )
}

export function Header() {
  const isMobile = useIsMobile()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const openDemoModal = () => {
    setIsDemoModalOpen(true)
  }

  const closeDemoModal = () => {
    setIsDemoModalOpen(false)
  }

  // Close mobile menu when switching to desktop
  React.useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false)
    }
  }, [isMobile])

  return (
    <>
      <header className="relative w-full bg-tertiary rounded-t-lg">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <h1 className="text-xl font-serif font-semibold text-tertiary-foreground hover:text-foreground transition-colors cursor-pointer">
                Watchdog
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-4">
              <a
                href="https://app.thewatchdog.no/sign-in"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-transparent"
                >
                  Sign in
                </Button>
              </a>
              <Button variant="accent" onClick={openDemoModal}>
                Request Demo
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <BurgerIcon />
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={closeMobileMenu}
            onRequestDemo={openDemoModal}
          />
        )}
      </header>

      {/* Demo Request Modal */}
      <DemoRequestModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </>
  )
}
