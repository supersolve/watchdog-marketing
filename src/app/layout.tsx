import type { Metadata } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import { Header } from '@/components/app/header'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Watchdog',
  description: 'Stop overcharging.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${playfair.variable} antialiased bg-secondary`}
      >
        <Header />
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  )
}
