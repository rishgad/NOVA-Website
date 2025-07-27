// Vercel Analytics integration with custom events
import { track } from "@vercel/analytics"

// Custom event tracking for Vercel Analytics
export const trackVercelEvent = (eventName: string, properties?: Record<string, any>) => {
  track(eventName, properties)
}

// Specific tracking functions for NOVA
export const trackRecruitmentInterest = () => {
  track("recruitment_interest", {
    page: "recruitment",
    action: "application_started",
  })
}

export const trackContactSubmission = (method: string) => {
  track("contact_submission", {
    method,
    timestamp: new Date().toISOString(),
  })
}

export const trackServiceInquiry = (service: string) => {
  track("service_inquiry", {
    service,
    page: window.location.pathname,
  })
}

export const trackTeamMemberView = (memberName: string) => {
  track("team_member_view", {
    member: memberName,
    page: "about",
  })
}

export const trackProjectView = (projectName: string) => {
  track("project_view", {
    project: projectName,
    page: "impact",
  })
}
