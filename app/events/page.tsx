import Link from "next/link"
import Footer from "../components/Footer"
import FadeIn from "../components/FadeIn"
import TabFadeIn from "../components/TabFadeIn"
import { Linkedin, Instagram, Calendar } from "lucide-react"

const upcomingEvents: {
  date: string
  title: string
  description: string
  location: string
}[] = [
  // Add upcoming events here
]

const pastEvents: {
  date: string
  title: string
  description: string
  location: string
}[] = [
  // Add past events here
]

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {/* Hero */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <FadeIn>
              <p className="section-label">01 — Events</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[-0.04em] mt-2 mb-8 max-w-3xl leading-[0.95]">
                Where the community meets.
              </h1>
              <p className="text-lg text-white/55 max-w-xl leading-relaxed">
                NOVA hosts workshops, speaker events, networking sessions, and more. This is where connections happen.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-24 px-6 border-t border-white/8">
          <div className="container mx-auto max-w-6xl">
            <FadeIn>
              <p className="section-label">02 — Upcoming Events</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-16 max-w-2xl">
                What's coming up.
              </h2>
            </FadeIn>

            {upcomingEvents.length === 0 ? (
              <TabFadeIn direction="bottom">
                <div className="bg-[#0f2035] border border-white/8 rounded-lg p-16 text-center">
                  <Calendar className="w-8 h-8 text-white/20 mx-auto mb-4" />
                  <p className="text-white/40 text-sm">No upcoming events scheduled — check back soon.</p>
                </div>
              </TabFadeIn>
            ) : (
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <TabFadeIn key={index} direction="bottom" delay={index * 80}>
                    <div className="bg-[#0f2035] border border-white/8 rounded-lg p-7 hover:bg-white/[0.04] transition-colors duration-200">
                      <p className="text-[#2563eb] font-mono text-sm mb-3">{event.date}</p>
                      <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                      <p className="text-sm text-white/55 leading-relaxed mb-3">{event.description}</p>
                      <p className="text-xs text-white/30">{event.location}</p>
                    </div>
                  </TabFadeIn>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Past Events */}
        <section className="py-24 px-6 border-t border-white/8">
          <div className="container mx-auto max-w-6xl">
            <FadeIn>
              <p className="section-label">03 — Past Events</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-16 max-w-2xl">
                What we've done.
              </h2>
            </FadeIn>

            {pastEvents.length === 0 ? (
              <TabFadeIn direction="bottom">
                <div className="bg-[#0f2035] border border-white/8 rounded-lg p-16 text-center">
                  <p className="text-white/40 text-sm">Past events will appear here.</p>
                </div>
              </TabFadeIn>
            ) : (
              <div className="space-y-4">
                {pastEvents.map((event, index) => (
                  <TabFadeIn key={index} direction="bottom" delay={index * 80}>
                    <div className="bg-[#0f2035] border border-white/8 rounded-lg p-7">
                      <p className="text-white/30 font-mono text-sm mb-3">{event.date}</p>
                      <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                      <p className="text-sm text-white/55 leading-relaxed mb-3">{event.description}</p>
                      <p className="text-xs text-white/30">{event.location}</p>
                    </div>
                  </TabFadeIn>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Stay Updated */}
        <section className="py-24 px-6 border-t border-white/8">
          <FadeIn>
            <div className="container mx-auto max-w-4xl">
              <p className="section-label">04 — Stay Updated</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-6 max-w-2xl">
                Don't miss the next one.
              </h2>
              <p className="text-white/55 text-lg mb-10 max-w-xl leading-relaxed">
                Follow us on Instagram or LinkedIn to stay in the loop on upcoming events, workshops, and opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://instagram.com/texasnova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/texas-nova/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
      <Footer />
    </div>
  )
}
