"use client"

import type React from "react"
import { Crown, Cpu, Network } from "lucide-react"
import ProfileCard from "../../profile-card-GxyKR39w51bTfNfmP1ZjQliDrNCrvZ"

interface TeamMember {
  name: string
  role: string
  description: string
  icon: React.ReactNode
  color: string
  gradient: string
  behindGradient: string
  linkedinUrl: string
  skills: string[]
  handle: string
}

// Update team members array with enhanced details for profile cards
const teamMembers: TeamMember[] = [
  {
    name: "Ryan Thomas",
    role: "President",
    description:
      "Ryan oversees NOVA's overall operations, driving our mission to deliver innovative consulting solutions.",
    icon: <Crown className="w-16 h-16" />,
    color: "text-purple-400",
    gradient: "from-purple-600 via-purple-400 to-purple-600",
    behindGradient:
      "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), hsla(266,100%,90%,var(--card-opacity)) 4%, hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%, hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%, hsla(266,0%,60%,0) 100%)",
    linkedinUrl: "https://linkedin.com/in/ryanthomas223",
    skills: ["Leadership", "Vision", "Team Building", "AI"],
    handle: "ryanthomas",
  },
  {
    name: "Rishi Gadiyar",
    role: "VP of Technology",
    description: "Rishi leads our technology initiatives, keeping NOVA at the forefront of innovative solutions.",
    icon: <Cpu className="w-16 h-16" />,
    color: "text-blue-400",
    gradient: "from-blue-600 via-blue-400 to-blue-600",
    behindGradient:
      "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), hsla(220,100%,90%,var(--card-opacity)) 4%, hsla(220,50%,80%,calc(var(--card-opacity)*0.75)) 10%, hsla(220,25%,70%,calc(var(--card-opacity)*0.5)) 50%, hsla(220,0%,60%,0) 100%)",
    linkedinUrl: "https://linkedin.com/in/rishavgadiyar",
    skills: ["AI", "Cloud Computing", "Software Architecture", "Innovation"],
    handle: "rishigadiyar",
  },
  {
    name: "Haris Isam",
    role: "VP of Strategy and Analytics",
    description: "Haris oversees all analytics based work and relationships with clients",
    icon: <Network className="w-16 h-16" />,
    color: "text-green-400",
    gradient: "from-green-600 via-green-400 to-green-600",
    behindGradient:
      "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), hsla(120,100%,90%,var(--card-opacity)) 4%, hsla(120,50%,80%,calc(var(--card-opacity)*0.75)) 10%, hsla(120,25%,70%,calc(var(--card-opacity)*0.5)) 50%, hsla(120,0%,60%,0) 100%)",
    skills: ["Analytics", "Strategy", "Data Science", "Client Relations"],
    linkedinUrl: "https://linkedin.com/in/harisisam",
    handle: "harisisam",
  },
]

// Custom Team Card Component that integrates the profile card properly
const TeamCard = ({ member }: { member: TeamMember }) => {
  const handleContactClick = () => {
    window.open(member.linkedinUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="team-card-wrapper">
      <ProfileCard
        avatarUrl="" // We'll hide this and use our custom content
        name={member.name}
        title={member.role}
        handle={member.handle}
        status="Available"
        contactText="Connect"
        behindGradient={member.behindGradient}
        innerGradient="linear-gradient(145deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)"
        showBehindGradient={true}
        enableTilt={true}
        showUserInfo={false} // We'll create our own user info section
        onContactClick={handleContactClick}
        className="nova-team-card"
      />

      {/* Custom content overlay */}
      <div className="team-card-content">
        {/* Icon Section */}
        <div className="team-icon-section">
          <div className={`team-role-icon ${member.color}`}>{member.icon}</div>
        </div>

        {/* Info Section */}
        <div className="team-info-section">
          <h3 className="team-member-name">{member.name}</h3>
          <p className={`team-member-role ${member.color}`}>{member.role}</p>
          <p className="team-member-description">{member.description}</p>

          {/* Skills */}
          <div className="team-skills">
            {member.skills.map((skill, index) => (
              <span key={index} className={`skill-tag ${member.color}`}>
                {skill}
              </span>
            ))}
          </div>

          {/* Connect Button */}
          <button onClick={handleContactClick} className={`team-connect-btn ${member.color}`}>
            Connect on LinkedIn
          </button>
        </div>
      </div>
    </div>
  )
}

export default function MeetTheTeam() {
  return (
    <div className="container mx-auto px-4 py-12 pt-20">
      <h1 className="text-4xl font-bold text-center mb-4 text-white team-title">Meet The Team</h1>
      <p className="text-xl text-center mb-16 text-gray-300 max-w-3xl mx-auto">
        Our leadership team brings diverse expertise and a shared vision to drive NOVA's success.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  )
}
