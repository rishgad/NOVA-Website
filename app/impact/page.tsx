"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "../components/Footer"
import TabFadeIn from "../components/TabFadeIn"
import FadeIn from "../components/FadeIn"
import { TrendingUp, Users, Target, Building2, GraduationCap, FileText, Rocket, Shield, BarChart3 } from "lucide-react"

const projects = [
  {
    name: "VeneerVision AI",
    description: "AI-powered dental imaging solution",
    icon: <Target className="w-6 h-6" />,
  },
  {
    name: "Media and Newsletter Bots",
    description: "Automated content distribution platform",
    icon: <Users className="w-6 h-6" />,
  },
  {
    name: "AI Security and Testing Bot",
    description: "Advanced cybersecurity solutions",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    name: "Enterprise AI Solutions",
    description: "Enterprise-scale AI deployment",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    name: "Trading and AI",
    description: "Financial technology innovations",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    name: "Generative AI Platforms",
    description: "Next-generation AI platforms",
    icon: <TrendingUp className="w-6 h-6" />,
  },
]

const animatedStats = [
  { icon: <TrendingUp className="w-6 h-6" />, value: "150%", label: "Average ROI for Clients" },
  { icon: <Users className="w-6 h-6" />, value: "20+", label: "Projects Completed" },
  { icon: <Target className="w-6 h-6" />, value: "95%", label: "Client Satisfaction Rate" },
  { icon: <Building2 className="w-6 h-6" />, value: "50+", label: "Startups Reached" },
]

const impactAreas = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Student Success Stories",
    description:
      "Empowering students with real-world experience to launch their careers and startups. Our members gain the skills, network, and confidence needed to succeed in competitive industries.",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Austin Startup Ecosystem",
    description:
      "Supporting Austin's thriving startup community with strategic consulting, technology solutions, and business development. We help local entrepreneurs scale their ventures and attract investment.",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Research & Publications",
    description:
      "Conducting cutting-edge research for leading companies and publishing insights that shape industry standards. Our research drives innovation and informs strategic decisions.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Innovation Catalyst",
    description:
      "Bridging the gap between academic research and practical business applications. We transform theoretical concepts into market-ready solutions that drive growth and efficiency.",
  },
]

const clientIndustries = [
  "Technology", "Healthcare", "Media & Entertainment", "Sports & Recreation",
  "Hospitality", "Retail & E-commerce", "Financial Services", "Manufacturing",
  "Education", "Real Estate",
]

function AnimatedCounter({ targetValue, duration = 2000 }: { targetValue: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
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
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isVisible, targetValue, duration])

  const suffix = targetValue.replace(/\d/g, "")
  return (
    <span id={`counter-${targetValue}`} className="font-bold text-4xl tracking-[-0.03em]">
      {count}{suffix}
    </span>
  )
}

export default function ImpactAndPurpose() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 relative z-10">
        <FadeIn>
          <div className="container mx-auto max-w-5xl">
            <p className="section-label">01 — Our Impact</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[-0.04em] mt-2 mb-8 max-w-3xl leading-[0.95]">
              Transforming lives, driving innovation.
            </h1>
            <p className="text-lg text-white/55 max-w-xl leading-relaxed">
              Empowering startups and driving innovation through strategic consulting and cutting-edge research.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-6 relative z-10 bg-[#0d1f38]">
        <div className="container mx-auto max-w-6xl">
          <TabFadeIn direction="left">
            <p className="section-label">02 — What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-16 max-w-2xl">
              Four pillars of impact.
            </h2>
          </TabFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {impactAreas.map((area, index) => (
              <TabFadeIn key={index} direction={index % 2 === 0 ? "left" : "right"} delay={100 + index * 100}>
                <div className="bg-[#0f2035] border border-white/8 rounded-lg p-8 hover:bg-white/[0.04] transition-colors duration-200 h-full">
                  <div className="text-white/40 mb-6">{area.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{area.description}</p>
                </div>
              </TabFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <TabFadeIn direction="right">
            <p className="section-label">03 — By the Numbers</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-16 max-w-2xl">
              Impact that's measurable.
            </h2>
          </TabFadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {animatedStats.map((stat, index) => (
              <TabFadeIn key={index} direction="bottom" delay={100 + index * 80}>
                <div className="bg-[#0f2035] border border-white/8 rounded-lg p-8 text-center">
                  <div className="text-white/30 mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-white mb-2">
                    <AnimatedCounter targetValue={stat.value} />
                  </div>
                  <p className="text-sm text-white/50 leading-snug">{stat.label}</p>
                </div>
              </TabFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6 relative z-10 bg-[#0d1f38]">
        <div className="container mx-auto max-w-6xl">
          <TabFadeIn direction="left">
            <p className="section-label">04 — Industries We Serve</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-16 max-w-2xl">
              Expertise across sectors.
            </h2>
          </TabFadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {clientIndustries.map((industry, index) => (
              <TabFadeIn key={index} direction="bottom" delay={50 + index * 30}>
                <div className="bg-[#0f2035] border border-white/8 rounded-lg p-5 text-center hover:bg-white/[0.04] hover:border-white/20 transition-colors duration-200">
                  <p className="text-sm font-medium text-white/70 hover:text-white transition-colors">{industry}</p>
                </div>
              </TabFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <TabFadeIn direction="right">
            <p className="section-label">05 — Featured Projects</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-16 max-w-2xl">
              Work that speaks for itself.
            </h2>
          </TabFadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <TabFadeIn key={index} direction="bottom" delay={80 + index * 80}>
                <div className="bg-[#0f2035] border border-white/8 rounded-lg p-7 hover:bg-white/[0.04] transition-colors duration-200 h-full">
                  <div className="text-white/30 mb-5">{project.icon}</div>
                  <h3 className="text-base font-semibold text-white mb-2">{project.name}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{project.description}</p>
                </div>
              </TabFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative z-10 bg-[#0d1f38]">
        <FadeIn>
          <div className="container mx-auto max-w-4xl">
            <p className="section-label">06 — Get Involved</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-6 max-w-2xl">
              Ready to make an impact?
            </h2>
            <p className="text-white/55 text-lg mb-10 max-w-xl leading-relaxed">
              Whether you're looking to transform your business or join our mission, we're excited to connect.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-filled">Work With Us</Link>
              <Link href="/apply" className="btn-outline">Join Our Team</Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  )
}
