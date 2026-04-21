import Link from "next/link"
import Footer from "../components/Footer"
import FadeIn from "../components/FadeIn"
import TabFadeIn from "../components/TabFadeIn"
import { Linkedin } from "lucide-react"

const programFeatures = [
  {
    num: "01",
    title: "Real Client Work",
    body: "Analysts work directly on live engagements — from AI strategy to data analysis — with real startups and companies.",
  },
  {
    num: "02",
    title: "Skills Development",
    body: "Learn consulting frameworks, AI tools, data science, and communication skills through hands-on practice.",
  },
  {
    num: "03",
    title: "Flexible Commitment",
    body: "Typically 2–3 hours per week. We work around your academic schedule, not against it.",
  },
]

const execBoard = [
  {
    name: "Exec Name",
    role: "President",
    major: "Computer Science",
    linkedinUrl: "#",
  },
  {
    name: "Exec Name",
    role: "Vice President",
    major: "Business Honors",
    linkedinUrl: "#",
  },
  {
    name: "Exec Name",
    role: "VP of Operations",
    major: "Information Systems",
    linkedinUrl: "#",
  },
  {
    name: "Exec Name",
    role: "VP of Business Development",
    major: "Finance",
    linkedinUrl: "#",
  },
  {
    name: "Exec Name",
    role: "Head of Technology",
    major: "Electrical & Computer Engineering",
    linkedinUrl: "#",
  },
  {
    name: "Exec Name",
    role: "Head of Analytics",
    major: "Statistics & Data Science",
    linkedinUrl: "#",
  },
]

const analysts = [
  {
    name: "Analyst Name",
    role: "AI Analyst",
    major: "Computer Science",
    linkedinUrl: "#",
  },
  {
    name: "Analyst Name",
    role: "Strategy Analyst",
    major: "Business Honors",
    linkedinUrl: "#",
  },
  {
    name: "Analyst Name",
    role: "Data Analyst",
    major: "Statistics",
    linkedinUrl: "#",
  },
  {
    name: "Analyst Name",
    role: "AI Analyst",
    major: "Electrical Engineering",
    linkedinUrl: "#",
  },
  {
    name: "Analyst Name",
    role: "Strategy Analyst",
    major: "Finance",
    linkedinUrl: "#",
  },
  {
    name: "Analyst Name",
    role: "Data Analyst",
    major: "Mathematics",
    linkedinUrl: "#",
  },
]

export default function AnalystsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {/* Hero */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <FadeIn>
              <p className="section-label">01 — Analysts Program</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[-0.04em] mt-2 mb-8 max-w-3xl leading-[0.95]">
                The people doing the work.
              </h1>
              <p className="text-lg text-white/55 max-w-xl leading-relaxed">
                NOVA Analysts are the core of everything we do — working on real engagements, building real skills, and launching real careers.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-24 px-6 bg-[#0d1f38]">
          <div className="container mx-auto max-w-6xl">
            <FadeIn>
              <p className="section-label">02 — The Program</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-16 max-w-2xl">
                What being an analyst means.
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8">
              {programFeatures.map((feature, i) => (
                <TabFadeIn key={feature.num} direction="bottom" delay={i * 100}>
                  <div className="bg-[#0a1628] p-8 md:p-10 h-full">
                    <span className="section-number">{feature.num}</span>
                    <h3 className="text-xl font-semibold text-white mt-4 mb-3">{feature.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{feature.body}</p>
                  </div>
                </TabFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <FadeIn>
              <p className="section-label">03 — The Team</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-16 max-w-2xl">
                Meet the team.
              </h2>
            </FadeIn>

            {/* Executive Board */}
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.12em] text-white/25 mb-6">Executive Board</p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
              {execBoard.map((member, index) => (
                <TabFadeIn key={index} direction="bottom" delay={60 + index * 60}>
                  <div className="bg-[#0f2035] border border-white/8 rounded-lg p-7 hover:bg-white/[0.04] transition-colors duration-200 h-full">
                    <div className="w-12 h-12 rounded-full bg-white/8 mb-5" />
                    <h3 className="text-base font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-[#2563eb] mb-1">{member.role}</p>
                    <p className="text-sm text-white/40 mb-5">{member.major}</p>
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors duration-200"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                  </div>
                </TabFadeIn>
              ))}
            </div>

            {/* Analysts */}
            <div className="border-t border-white/8 pt-16">
              <FadeIn>
                <p className="text-xs uppercase tracking-[0.12em] text-white/25 mb-6">Analysts</p>
              </FadeIn>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {analysts.map((analyst, index) => (
                  <TabFadeIn key={index} direction="bottom" delay={40 + index * 40}>
                    <div className="bg-[#0f2035] border border-white/8 rounded-lg p-5 hover:bg-white/[0.04] transition-colors duration-200 h-full">
                      <div className="w-8 h-8 rounded-full bg-white/8 mb-4" />
                      <h3 className="text-sm font-semibold text-white mb-1">{analyst.name}</h3>
                      <p className="text-xs text-[#2563eb] mb-1">{analyst.role}</p>
                      <p className="text-xs text-white/40 mb-4">{analyst.major}</p>
                      <a
                        href={analyst.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-white transition-colors duration-200"
                      >
                        <Linkedin className="w-3 h-3" />
                        LinkedIn
                      </a>
                    </div>
                  </TabFadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-24 px-6 bg-[#0d1f38]">
          <FadeIn>
            <div className="container mx-auto max-w-4xl">
              <p className="section-label">04 — Join Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-6 max-w-2xl">
                Want to be on this list?
              </h2>
              <p className="text-white/55 text-lg mb-10 max-w-xl leading-relaxed">
                Applications are open. No prior experience required — just drive, curiosity, and a willingness to do real work.
              </p>
              <Link href="/apply" className="btn-filled">Apply Now</Link>
            </div>
          </FadeIn>
        </section>
      </div>
      <Footer />
    </div>
  )
}
