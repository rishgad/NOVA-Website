"use client"

import type React from "react"

import { track } from "@vercel/analytics"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function VercelAnalyticsWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Track custom page views with additional context
    track("page_view", {
      path: pathname,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
    })
  }, [pathname])

  return <>{children}</>
}
