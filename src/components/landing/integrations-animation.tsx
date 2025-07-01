'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import styles from './integrations-animation.module.css'
import { SectionTitle } from '../ui/section-title'

// --- CONSTANTS ---

const ICON_DATA = [
  { src: '/logo-tripletex.png', name: 'Tripletex' },
  { src: '/logo-poweroffice.png', name: 'PowerOffice' },
  { src: '/logo-fiken.svg', name: 'Fiken' },
  { src: '/logo-intuit.svg', name: 'QuickBooks' },
  { src: '/logo-cognite.png', name: 'Cognite' },
  { src: '/logo-openAI.svg', name: 'OpenAI' },
]

const ICON_CONTAINER_SIZE = 88 // Increased for better visual presence

// --- TYPES ---

interface Icon {
  src: string
  name: string
}

interface PositionedIcon extends Icon {
  style: React.CSSProperties
}

// --- COMPONENT ---

export const IntegrationsAnimation = () => {
  // --- STATE AND REFS ---

  const [iconPositions, setIconPositions] = useState<PositionedIcon[]>([])
  const orbitRef = useRef<HTMLDivElement>(null)

  // --- LOGIC ---

  const placeIcons = useCallback(() => {
    if (!orbitRef.current) return

    const orbitWidth = orbitRef.current.offsetWidth
    const radius = orbitWidth / 2

    const newPositions = ICON_DATA.map((icon, index) => {
      const angle = (index / ICON_DATA.length) * 2 * Math.PI
      const x = radius * Math.cos(angle) + radius - ICON_CONTAINER_SIZE / 2
      const y = radius * Math.sin(angle) + radius - ICON_CONTAINER_SIZE / 2

      return {
        ...icon,
        style: { left: `${x}px`, top: `${y}px` },
      }
    })

    setIconPositions(newPositions)
  }, [])

  useEffect(() => {
    placeIcons()
    window.addEventListener('resize', placeIcons)
    return () => window.removeEventListener('resize', placeIcons)
  }, [placeIcons])

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.onerror = null
    e.currentTarget.src = 'https://placehold.co/40x40/e2e8f0/78716c?text=..'
  }

  // --- RENDER ---

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Get started in 1 hour"
          subtitle="Connect Watchdog to your current accounting systems"
        />

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8">
            <h3 className="text-xl font-md tracking-tight text-stone-900 sm:text-3xl">
              No replacements needed
            </h3>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Watchdog can easily be connected to your existing accounting and
              ERP systems - no replacements needed.
            </p>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Get started by either uploading agreements and invoices directly,
              or let us help you connect Watchdog to your current system.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className={styles.integrationsContainer}>
              {/* Background gradient blur */}
              <div className={styles.backgroundGlow} />

              {/* Orbit lines */}
              <div className={`${styles.orbitLine} ${styles.outerOrbitLine}`} />
              <div className={`${styles.orbitLine} ${styles.innerOrbitLine}`} />

              {/* Center logo */}
              <div className={styles.centerLogo}>
                <div className={styles.centerLogoInner}>
                  <Image
                    src="/watchdog.svg"
                    alt="Watchdog Logo"
                    width={96}
                    height={96}
                    className="relative z-10"
                    onError={handleImageError}
                  />
                </div>
                <div className={styles.centerGlow} />
              </div>

              {/* Orbiting icons */}
              <div className={styles.iconsOrbit} ref={orbitRef}>
                {iconPositions.map((icon, index) => (
                  <div
                    key={index}
                    className={styles.integrationIcon}
                    style={icon.style}
                    title={icon.name}
                  >
                    <div className={styles.iconContainer}>
                      <Image
                        src={icon.src}
                        alt={`${icon.name} Logo`}
                        width={60}
                        height={60}
                        className={styles.iconImage}
                        onError={handleImageError}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
