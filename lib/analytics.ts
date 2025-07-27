// Analytics utility functions
export interface AnalyticsEvent {
  name: string
  properties?: Record<string, any>
  timestamp?: Date
}

export interface PageView {
  page: string
  referrer?: string
  timestamp: Date
  sessionId: string
  userId?: string
}

export interface UserInteraction {
  type: "click" | "form_submit" | "scroll" | "download" | "contact"
  element: string
  page: string
  timestamp: Date
  sessionId: string
  userId?: string
  metadata?: Record<string, any>
}

class Analytics {
  private sessionId: string
  private userId?: string
  private events: AnalyticsEvent[] = []
  private pageViews: PageView[] = []
  private interactions: UserInteraction[] = []

  constructor() {
    this.sessionId = this.generateSessionId()
    this.initializeTracking()
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  private initializeTracking() {
    if (typeof window !== "undefined") {
      // Track page visibility changes
      document.addEventListener("visibilitychange", () => {
        this.track("page_visibility_change", {
          visible: !document.hidden,
        })
      })

      // Track scroll depth
      let maxScrollDepth = 0
      window.addEventListener("scroll", () => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth
          if (scrollDepth % 25 === 0) {
            // Track at 25%, 50%, 75%, 100%
            this.track("scroll_depth", { depth: scrollDepth })
          }
        }
      })
    }
  }

  setUserId(userId: string) {
    this.userId = userId
  }

  track(eventName: string, properties?: Record<string, any>) {
    const event: AnalyticsEvent = {
      name: eventName,
      properties: {
        ...properties,
        sessionId: this.sessionId,
        userId: this.userId,
        userAgent: typeof window !== "undefined" ? navigator.userAgent : undefined,
        timestamp: new Date().toISOString(),
      },
      timestamp: new Date(),
    }

    this.events.push(event)

    // In a real app, you'd send this to your analytics service
    console.log("Analytics Event:", event)

    // Store in localStorage for demo purposes
    if (typeof window !== "undefined") {
      const storedEvents = JSON.parse(localStorage.getItem("nova_analytics") || "[]")
      storedEvents.push(event)
      localStorage.setItem("nova_analytics", JSON.stringify(storedEvents.slice(-100))) // Keep last 100 events
    }
  }

  trackPageView(page: string, referrer?: string) {
    const pageView: PageView = {
      page,
      referrer,
      timestamp: new Date(),
      sessionId: this.sessionId,
      userId: this.userId,
    }

    this.pageViews.push(pageView)
    this.track("page_view", { page, referrer })
  }

  trackInteraction(type: UserInteraction["type"], element: string, metadata?: Record<string, any>) {
    const interaction: UserInteraction = {
      type,
      element,
      page: typeof window !== "undefined" ? window.location.pathname : "",
      timestamp: new Date(),
      sessionId: this.sessionId,
      userId: this.userId,
      metadata,
    }

    this.interactions.push(interaction)
    this.track("user_interaction", {
      interaction_type: type,
      element,
      ...metadata,
    })
  }

  getEvents(): AnalyticsEvent[] {
    return this.events
  }

  getPageViews(): PageView[] {
    return this.pageViews
  }

  getInteractions(): UserInteraction[] {
    return this.interactions
  }

  // Get analytics data from localStorage for demo
  getStoredAnalytics(): AnalyticsEvent[] {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("nova_analytics") || "[]")
    }
    return []
  }

  clearAnalytics() {
    this.events = []
    this.pageViews = []
    this.interactions = []
    if (typeof window !== "undefined") {
      localStorage.removeItem("nova_analytics")
    }
  }
}

// Create singleton instance
export const analytics = new Analytics()

// Convenience functions
export const trackEvent = (name: string, properties?: Record<string, any>) => {
  analytics.track(name, properties)
}

export const trackPageView = (page: string, referrer?: string) => {
  analytics.trackPageView(page, referrer)
}

export const trackClick = (element: string, metadata?: Record<string, any>) => {
  analytics.trackInteraction("click", element, metadata)
}

export const trackFormSubmit = (formName: string, metadata?: Record<string, any>) => {
  analytics.trackInteraction("form_submit", formName, metadata)
}

export const trackContact = (method: string, metadata?: Record<string, any>) => {
  analytics.trackInteraction("contact", method, metadata)
}
