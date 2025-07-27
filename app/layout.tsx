import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk, Orbitron, Inter } from "next/font/google"
import Header from "./components/Header"
import ParticleBackground from "./components/ParticleBackground"
import { AnalyticsProvider } from "./components/AnalyticsProvider"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Suspense } from "react"

// Define a futuristic primary font
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

// Define a secondary font for body text that's still futuristic but more readable
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

// Add Inter font definition
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "NOVA Consulting",
  description: "Innovative solutions for your business challenges",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${spaceGrotesk.variable} ${inter.variable} text-white min-h-screen`}>
        <AnalyticsProvider>
          {/* Canvas-based Particle Background */}
          <Suspense fallback={<div>Loading...</div>}>
            <ParticleBackground />
            <div className="relative z-10">
              <Header />
              <main className="pt-16 font-space-grotesk">{children}</main>
            </div>
          </Suspense>

          {/* Vercel Analytics - tracks page views and performance */}
          <Analytics />

          {/* Vercel Speed Insights - tracks Core Web Vitals */}
          <SpeedInsights />
        </AnalyticsProvider>
      </body>
    </html>
  )
}
