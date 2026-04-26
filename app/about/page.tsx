"use client"

import { useState } from "react"
import Link from "next/link"
import { Crown, Cpu, Network, Linkedin, Target, Lightbulb, HandshakeIcon } from "lucide-react"
import Footer from "../components/Footer"
import TabFadeIn from "../components/TabFadeIn"

type AboutTab = "story" | "leadership" | "approach"

interface TeamMember {
  name: string
  role: string
  description: string
  icon: React.ReactNode
  linkedinUrl: string
  skills: string[]
}

const teamMembers: TeamMember[] = [
  {
    name: "Ryan Thomas",
    role: "President",
    description:
      "Ryan oversees NOVA's overall operations, driving our mission to deliver innovative consulting solutions.",
    icon: <Crown className="w-6 h-6" />,
    linkedinUrl: "https://linkedin.com/in/ryanthomas223",
    skills: ["Leadership", "Vision", "Team Building", "AI"],
  },
  {
    name: "Rishi Gadiyar",
    role: "VP of Technology",
    description:
      "Rishi leads our technology initiatives, keeping NOVA at the forefront of innovative solutions.",
    icon: <Cpu className="w-6 h-6" />,
    linkedinUrl: "https://linkedin.com/in/rishavgadiyar",
    skills: ["AI", "Cloud Computing", "Software Architecture", "Innovation"],
  },
  {
    name: "Haris Isam",
    role: "VP of Strategy and Analytics",
    description:
      "Haris oversees all analytics-based work and relationships with clients.",
    icon: <Network className="w-6 h-6" />,
    linkedinUrl: "https://linkedin.com/in/harisisam",
    skills: ["Analytics", "Strategy", "Data Science", "Client Relations"],
  },
]

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Results-Driven",
    description:
      "We measure success by the tangible outcomes we deliver. Every engagement is focused on creating measurable value for our clients.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation-First",
    description:
      "We leverage cutting-edge AI and technology to solve problems in ways traditional consulting cannot. Fresh perspectives drive better solutions.",
  },
  {
    icon: <HandshakeIcon className="w-6 h-6" />,
    title: "Client Partnership",
    description:
      "We work alongside our clients as partners, not vendors. Deep collaboration ensures solutions that truly fit each organization's needs.",
  },
]

function StoryContent() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <TabFadeIn direction="left">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-white/40 mb-4">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Bridging the gap between academic excellence and real-world impact.
            </h2>
          </div>
        </TabFadeIn>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <TabFadeIn direction="left" delay={150}>
            <div className="space-y-6">
              <p className="text-white/55 leading-relaxed">
                NOVA Consulting Group was founded at the University of Texas at Austin
                with a clear mission: to provide students with meaningful consulting
                experience while delivering real value to businesses navigating the
                rapidly evolving landscape of AI and technology.
              </p>
              <p className="text-white/55 leading-relaxed">
                We are a student-led organization that operates like a professional
                consulting firm. Our analysts work on real projects for real clients,
                gaining hands-on experience that sets them apart in competitive job
                markets.
              </p>
              <p className="text-white/55 leading-relaxed">
                From AI-powered solutions to strategic analytics, our work spans
                industries and creates lasting impact for startups and established
                enterprises alike.
              </p>
            </div>
          </TabFadeIn>

          <TabFadeIn direction="right" delay={300}>
            <div className="space-y-8">
              <div className="border-l-2 border-white/20 pl-6">
                <p className="text-3xl font-bold text-white mb-1">20+</p>
                <p className="text-sm text-white/40">Projects delivered across industries</p>
              </div>
              <div className="border-l-2 border-white/20 pl-6">
                <p className="text-3xl font-bold text-white mb-1">50+</p>
                <p className="text-sm text-white/40">Startups and businesses reached</p>
              </div>
              <div className="border-l-2 border-white/20 pl-6">
                <p className="text-3xl font-bold text-white mb-1">95%</p>
                <p className="text-sm text-white/40">Client satisfaction rate</p>
              </div>
            </div>
          </TabFadeIn>
        </div>

        <TabFadeIn direction="bottom" delay={450}>
          <div className="mt-16 pt-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-sm uppercase tracking-widest text-white/40 mb-3">Founded</p>
                <p className="text-white font-medium">University of Texas at Austin</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-white/40 mb-3">Focus Areas</p>
                <p className="text-white font-medium">AI Consulting, Strategy & Analytics</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-white/40 mb-3">Expanding</p>
                <p className="text-white font-medium">Nationwide university chapters</p>
              </div>
            </div>
          </div>
        </TabFadeIn>
      </div>
    </section>
  )
}

function LeadershipContent() {
  return (
    <section className="py-16 px-6 bg-[#0d1f38]">
      <div className="container mx-auto max-w-5xl">
        <TabFadeIn direction="left">
          <div className="max-w-3xl mb-12">
            <p className="text-sm uppercase tracking-widest text-white/40 mb-4">
              Leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Meet the people driving NOVA forward.
            </h2>
            <p className="text-white/55 leading-relaxed">
              Our leadership team brings diverse expertise and a shared commitment to
              excellence in everything we do.
            </p>
          </div>
        </TabFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TabFadeIn key={index} direction="bottom" delay={150 + index * 120}>
              <div className="bg-[#0f2035] border border-white/8 rounded-lg p-8 transition-colors duration-200 hover:bg-white/[0.08] h-full">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
                  {member.icon}
                </div>

                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-[#2563eb] font-medium mb-4">{member.role}</p>

                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-[#0f2035] border border-white/8 text-white/55"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </TabFadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function ApproachContent() {
  const methodologySteps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We start by deeply understanding your business, industry, and the specific challenges you face. This diagnostic phase ensures our solutions are precisely targeted.",
    },
    {
      number: "02",
      title: "Analyze & Design",
      description:
        "Our analysts leverage AI tools, data analysis, and strategic frameworks to develop tailored recommendations and solution architectures.",
    },
    {
      number: "03",
      title: "Deliver & Iterate",
      description:
        "We implement solutions with measurable KPIs, then iterate based on real-world performance to maximize impact and ROI.",
    },
  ]

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <TabFadeIn direction="left">
          <div className="max-w-3xl mb-12">
            <p className="text-sm uppercase tracking-widest text-white/40 mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              How we deliver value.
            </h2>
            <p className="text-white/55 leading-relaxed">
              We combine rigorous analytical thinking with cutting-edge technology to
              solve our clients' most pressing challenges.
            </p>
          </div>
        </TabFadeIn>

        {/* Methodology Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {methodologySteps.map((step, index) => (
            <TabFadeIn key={index} direction="right" delay={150 + index * 120}>
              <div>
                <p className="text-4xl font-bold text-white/15 mb-4">{step.number}</p>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
              </div>
            </TabFadeIn>
          ))}
        </div>

        {/* Values */}
        <TabFadeIn direction="bottom" delay={500}>
          <div className="border-t border-white/10 pt-16">
            <p className="text-sm uppercase tracking-widest text-white/40 mb-8">
              Our Values
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-[#0f2035] border border-white/8 rounded-lg p-6 transition-colors duration-200 hover:bg-white/[0.08]"
                >
                  <div className="text-white mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabFadeIn>
      </div>
    </section>
  )
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<AboutTab>("story")
  const [fadeKey, setFadeKey] = useState(0)

  const handleTabChange = (tab: AboutTab) => {
    if (tab !== activeTab) {
      setActiveTab(tab)
      setFadeKey((prev) => prev + 1)
    }
  }

  const tabs: { id: AboutTab; label: string }[] = [
    { id: "story", label: "Our Story" },
    { id: "leadership", label: "Leadership" },
    { id: "approach", label: "Our Approach" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {/* Hero */}
        <section className="pt-20 pb-12 px-6 bg-[#0d1f38]">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-widest text-white/40 mb-4">
              About NOVA
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              UT Austin's Premier AI Consulting Group
            </h1>
            <p className="text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
              We transform ambitious students into industry-ready consultants while
              delivering measurable results for our clients.
            </p>
          </div>
        </section>

        {/* Tab Bar */}
        <div className="border-b border-white/10 sticky top-16 z-40 bg-[#0a1628]">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="flex gap-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`consulting-tab whitespace-nowrap ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content with Fade-In */}
        <div key={fadeKey}>
          {activeTab === "story" && <StoryContent />}
          {activeTab === "leadership" && <LeadershipContent />}
          {activeTab === "approach" && <ApproachContent />}
        </div>

        {/* CTA */}
        <section className="py-16 px-6">
          <TabFadeIn direction="bottom">
            <div className="container mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Interested in joining our team?
              </h2>
              <p className="text-white/55 mb-8 leading-relaxed">
                We're always looking for talented, ambitious students who want to make
                a real impact.
              </p>
              <Link
                href="/recruitment"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[rgb(0,57,89)] font-medium rounded text-sm hover:bg-gray-100 transition-colors duration-200"
              >
                View Open Positions
              </Link>
            </div>
          </TabFadeIn>
        </section>
      </div>
      <Footer />
    </div>
  )
}
