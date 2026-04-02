"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "../components/Footer"
import TabFadeIn from "../components/TabFadeIn"
import { TrendingUp, Users, Target, Building2, GraduationCap, FileText, Rocket, Shield, BarChart3 } from "lucide-react"

interface Project {
  name: string
  description: string
  icon: React.ReactNode
  color: string
  gradient: string
}

interface AnimatedStat {
  icon: React.ReactNode
  value: string
  label: string
  color: string
}

interface ImpactArea {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  gradient: string
}

interface ClientIndustry {
  name: string
  icon: string
  color: string
}

interface MentoringPartner {
  name: string
  logo: string
}

const projects: Project[] = [
  {
    name: "VeneerVision AI",
    description: "AI-powered dental imaging",
    icon: <Target className="w-8 h-8" />,
    color: "text-blue-400",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    name: "Media and Newsletter Bots",
    description: "Automated content distribution",
    icon: <Users className="w-8 h-8" />,
    color: "text-green-400",
    gradient: "from-green-600 to-green-400",
  },
  {
    name: "AI Security and Testing Bot",
    description: "Advanced cybersecurity solutions",
    icon: <Shield className="w-8 h-8" />,
    color: "text-purple-400",
    gradient: "from-purple-600 to-purple-400",
  },
  {
    name: "AI Security and Testing Bot",
    description: "Enterprise AI solutions",
    icon: <Building2 className="w-8 h-8" />,
    color: "text-orange-400",
    gradient: "from-orange-600 to-orange-400",
  },
  {
    name: "Exploring the World of Trading and AI",
    description: "Financial technology innovations",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "text-pink-400",
    gradient: "from-pink-600 to-pink-400",
  },
  {
    name: "Generative AI Platforms",
    description: "Next-generation AI platforms",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "text-yellow-400",
    gradient: "from-yellow-600 to-yellow-400",
  },
]

const animatedStats: AnimatedStat[] = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: "150%",
    label: "Average ROI for Clients",
    color: "text-green-400",
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "20+",
    label: "Projects Completed",
    color: "text-blue-400",
  },
  {
    icon: <Target className="w-8 h-8" />,
    value: "95%",
    label: "Client Satisfaction Rate",
    color: "text-purple-400",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    value: "50+",
    label: "Startups Reached",
    color: "text-orange-400",
  },
]

const impactAreas: ImpactArea[] = [
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Student Success Stories",
    description:
      "Empowering students with real-world experience to launch their careers and startups. Our members gain the skills, network, and confidence needed to succeed in competitive industries.",
    color: "text-blue-400",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: <Building2 className="w-12 h-12" />,
    title: "Austin Startup Ecosystem",
    description:
      "Supporting Austin's thriving startup community with strategic consulting, technology solutions, and business development. We help local entrepreneurs scale their ventures and attract investment.",
    color: "text-green-400",
    gradient: "from-green-600 to-green-400",
  },
  {
    icon: <FileText className="w-12 h-12" />,
    title: "Research & Publications",
    description:
      "Conducting cutting-edge research for leading companies and publishing insights that shape industry standards. Our research drives innovation and informs strategic decisions.",
    color: "text-purple-400",
    gradient: "from-purple-600 to-purple-400",
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "Innovation Catalyst",
    description:
      "Bridging the gap between academic research and practical business applications. We transform theoretical concepts into market-ready solutions that drive growth and efficiency.",
    color: "text-orange-400",
    gradient: "from-orange-600 to-orange-400",
  },
]

const clientIndustries: ClientIndustry[] = [
  { name: "Technology", icon: "", color: "text-white" },
  { name: "Healthcare", icon: "", color: "text-white" },
  { name: "Media & Entertainment", icon: "", color: "text-white" },
  { name: "Sports & Recreation", icon: "", color: "text-white" },
  { name: "Hospitality", icon: "", color: "text-white" },
  { name: "Retail & E-commerce", icon: "", color: "text-white" },
  { name: "Financial Services", icon: "", color: "text-white" },
  { name: "Manufacturing", icon: "", color: "text-white" },
  { name: "Education", icon: "", color: "text-white" },
  { name: "Real Estate", icon: "", color: "text-white" },
]

// Removed mentoringPartners array as the section is being removed
// const mentoringPartners: MentoringPartner[] = [...]

function AnimatedCounter({ targetValue, duration = 2000 }: { targetValue: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`counter-${targetValue}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [targetValue])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * Number.parseInt(targetValue.replace(/\D/g, ""))))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, targetValue, duration])

  const suffix = targetValue.replace(/\d/g, "")

  return (
    <span id={`counter-${targetValue}`} className="font-bold text-3xl sm:text-4xl">
      {count}
      {suffix}
    </span>
  )
}

export default function ImpactAndPurpose() {
  return (
    <div className="flex flex-col pt-4">
      {/* Hero Section */}
      <section className="py-20 px-6 relative z-10">
        <TabFadeIn direction="top">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Impact</h1>
            <p className="text-xl text-gray-300 mb-8">
              Transforming lives, empowering startups, and driving innovation through cutting-edge research and strategic
              consulting.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600"></div>
            </div>
          </div>
        </TabFadeIn>
      </section>

      {/* What We Offer Section - Similar to USIT Membership */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <TabFadeIn direction="left">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-white">What We Offer</h2>
          </TabFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {impactAreas.map((area, index) => (
              <TabFadeIn key={index} direction={index % 2 === 0 ? "left" : "right"} delay={100 + index * 120}>
                <div className="group bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-glow relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  {/* Floating icon animation */}
                  <div
                    className={`${area.color} mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2`}
                  >
                    <div className="relative">
                      {area.icon}
                      <div
                        className={`absolute inset-0 ${area.color} opacity-30 blur-lg scale-150 group-hover:opacity-60 transition-opacity duration-500`}
                      >
                        {area.icon}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-300">
                    {area.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {area.description}
                  </p>

                  {/* Animated border */}
                  <div
                    className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-current ${area.color} opacity-0 group-hover:opacity-30 transition-all duration-500`}
                  ></div>
                </div>
              </TabFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Impact Stats */}
      <section className="py-16 sm:py-20 relative z-10 bg-black bg-opacity-20">
        <div className="container mx-auto px-4 sm:px-6">
          <TabFadeIn direction="right">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">
              Our Impact by the Numbers
            </h2>
          </TabFadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {animatedStats.map((stat, index) => (
              <TabFadeIn key={index} direction="bottom" delay={100 + index * 100}>
              <div
                className="group bg-black bg-opacity-30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-glow"
              >
                <div
                  className={`${stat.color} mb-4 flex justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2`}
                >
                  <div className="relative">
                    {stat.icon}
                    <div
                      className={`absolute inset-0 ${stat.color} opacity-30 blur-lg scale-150 group-hover:opacity-60 transition-opacity duration-500`}
                    >
                      {stat.icon}
                    </div>
                  </div>
                </div>

                <div className={`${stat.color} mb-2`}>
                  <AnimatedCounter targetValue={stat.value} />
                </div>

                <p className="text-sm sm:text-base text-gray-300 font-medium">{stat.label}</p>
              </div>
              </TabFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 sm:py-20 relative z-10 bg-black bg-opacity-20">
        <div className="container mx-auto px-4 sm:px-6">
          <TabFadeIn direction="left">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">
              We serve clients across diverse industries
            </h2>
            <p className="text-lg text-center mb-12 text-gray-300 max-w-3xl mx-auto">
              From innovative startups to established enterprises, our expertise spans across multiple sectors
            </p>
          </TabFadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {clientIndustries.map((industry, index) => (
              <TabFadeIn key={index} direction="bottom" delay={50 + index * 30}>
                <div className="group bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-glow border border-white/10 hover:border-white/30">
                  <h3 className="text-sm sm:text-base font-medium text-white group-hover:text-blue-300 transition-colors">{industry.name}</h3>
                </div>
              </TabFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Projects - Showcase Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <TabFadeIn direction="right">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">Our Featured Projects</h2>
            <p className="text-lg text-center mb-16 text-gray-300 max-w-3xl mx-auto">
              Innovative AI solutions transforming industries and driving the future of technology
            </p>
          </TabFadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <TabFadeIn key={index} direction="bottom" delay={100 + index * 100}>
                <div className="group bg-black bg-opacity-30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-glow relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  <div className="flex flex-col items-center text-center h-full relative z-10">
                    <div className="w-full h-20 sm:h-24 flex items-center justify-center mb-4 sm:mb-6">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
                      >
                        {project.icon}
                        <div
                          className={`absolute inset-0 text-white opacity-30 blur-lg scale-150 group-hover:opacity-60 transition-opacity duration-500`}
                        >
                          {project.icon}
                        </div>
                      </div>
                    </div>
                    <h3
                      className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${project.color} leading-tight transition-colors duration-300`}
                    >
                      {project.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Animated border */}
                  <div
                    className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-current ${project.color} opacity-0 group-hover:opacity-30 transition-all duration-500`}
                  ></div>
                </div>
              </TabFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond What You See - Hidden Projects CTA */}
      <section className="py-20 px-6 bg-black bg-opacity-20 relative z-10">
        <TabFadeIn direction="bottom">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-3xl p-8 sm:p-12 relative overflow-hidden group">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>

              <div className="relative z-10 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                  There's Much More <span className="animated-gradient-text">Behind the Scenes</span>
                </h3>
                <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                  We're constantly working on groundbreaking projects that will reshape entire industries. The future of AI consulting is being written right now.
                </p>
                <Link href="/recruitment" className="button-ellipse group">
                  <span className="button-text">Explore More & Join Us</span>
                </Link>
              </div>
            </div>
          </div>
        </TabFadeIn>
      </section>

      {/* Ready for Impact - Call to Action */}
      <section className="py-20 px-6 relative z-10">
        <TabFadeIn direction="bottom">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to Make an Impact?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you're looking to transform your business or join our mission, we're excited to connect with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="button-ellipse">
                <span className="button-text">Work With Us</span>
              </Link>
              <Link href="/recruitment" className="button-ellipse">
                <span className="button-text">Join Our Team</span>
              </Link>
            </div>
          </div>
        </TabFadeIn>
      </section>

      <Footer />
    </div>
  )
}
