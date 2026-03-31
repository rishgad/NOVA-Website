"use client"

import Link from "next/link"
import { Crown, Cpu, Network, Linkedin } from "lucide-react"
import Footer from "../components/Footer"

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
    icon: <Crown className="w-8 h-8" />,
    linkedinUrl: "https://linkedin.com/in/ryanthomas223",
    skills: ["Leadership", "Vision", "Team Building", "AI"],
  },
  {
    name: "Rishi Gadiyar",
    role: "VP of Technology",
    description:
      "Rishi leads our technology initiatives, keeping NOVA at the forefront of innovative solutions.",
    icon: <Cpu className="w-8 h-8" />,
    linkedinUrl: "https://linkedin.com/in/rishavgadiyar",
    skills: ["AI", "Cloud Computing", "Software Architecture", "Innovation"],
  },
  {
    name: "Haris Isam",
    role: "VP of Strategy and Analytics",
    description:
      "Haris oversees all analytics-based work and relationships with clients.",
    icon: <Network className="w-8 h-8" />,
    linkedinUrl: "https://linkedin.com/in/harisisam",
    skills: ["Analytics", "Strategy", "Data Science", "Client Relations"],
  },
]

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-8 transition-colors duration-200 hover:bg-white/[0.08]">
      {/* Icon */}
      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
        {member.icon}
      </div>

      {/* Name and Role */}
      <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
      <p className="text-sm text-blue-300 font-medium mb-4">{member.role}</p>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        {member.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {member.skills.map((skill, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* LinkedIn */}
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
  )
}

export default function MeetTheTeam() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {/* Hero */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet the Team
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our leadership team brings diverse expertise and a shared vision
              to drive NOVA's success.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="pb-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-white/10">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Interested in joining our team?
            </h2>
            <p className="text-gray-300 mb-8">
              We're always looking for talented, ambitious students to help us grow.
            </p>
            <Link
              href="/recruitment"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[rgb(0,57,89)] font-medium rounded text-sm hover:bg-gray-100 transition-colors duration-200"
            >
              View Open Positions
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
