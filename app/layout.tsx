import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import Header from "./components/Header"
import { AnalyticsProvider } from "./components/AnalyticsProvider"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

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
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-space-grotesk text-white min-h-screen`}>
        <AnalyticsProvider>
          <Header />
          <main className="pt-16">{children}</main>
          <Analytics />
          <SpeedInsights />
        </AnalyticsProvider>
      </body>
    </html>
  )
}
