"use client"

import { createContext, useContext, useEffect, type ReactNode } from "react"
import { analytics, trackPageView } from "@/lib/analytics"
import { usePathname } from "next/navigation"

interface AnalyticsContextType {
  analytics: typeof analytics
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view on route change
    trackPageView(pathname, document.referrer)
  }, [pathname])

  return <AnalyticsContext.Provider value={{ analytics }}>{children}</AnalyticsContext.Provider>
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext)
  if (context === undefined) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider")
  }
  return context.analytics
}
