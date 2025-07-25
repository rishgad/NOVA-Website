"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Footer from "./components/Footer"
import ResumeComparison from "./components/ResumeComparison"
import { Briefcase, Users, Rocket, TrendingUp, Star, Zap, MapPin, Globe, Trophy } from "lucide-react"

const partners = [
  { name: "Google", logo: "/placeholder.svg?height=60&width=120&text=Google" },
  { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120&text=Microsoft" },
  { name: "Meta", logo: "/placeholder.svg?height=60&width=120&text=Meta" },
  { name: "Amazon", logo: "/placeholder.svg?height=60&width=120&text=Amazon" },
  { name: "NVIDIA", logo: "/placeholder.svg?height=60&width=120&text=NVIDIA" },
  { name: "OpenAI", logo: "/placeholder.svg?height=60&width=120&text=OpenAI" },
  { name: "IBM", logo: "/placeholder.svg?height=60&width=120&text=IBM" },
  { name: "Salesforce", logo: "/placeholder.svg?height=60&width=120&text=Salesforce" },
]

const opportunities = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Exclusive Internships",
    description: "Direct pathways to internships at Fortune 500 companies through our extensive network",
    color: "text-blue-600",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Job Offers",
    description: "Alumni consistently receive offers from top tech companies and consulting firms",
    color: "text-green-600",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Startup Co-Founder",
    description: "Launch your own venture with fellow NOVA members and access to investor networks",
    color: "text-purple-600",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Elite Referrals",
    description: "Leverage our client network across Silicon Valley, Wall Street, and beyond",
    color: "text-orange-600",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Real Projects",
    description: "Work on cutting-edge AI projects with real clients and measurable impact",
    color: "text-yellow-600",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Industry Recognition",
    description: "Build a portfolio that gets noticed by recruiters and industry leaders",
    color: "text-pink-600",
  },
]

const expansionHighlights = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "UT Austin Founding Chapter",
    description: "Born in the heart of innovation at one of America's top universities",
    color: "text-orange-600",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "National Expansion",
    description: "Expanding to elite universities across the nation - be part of the movement",
    color: "text-blue-600",
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Pioneer Advantage",
    description: "Join the founding generation and shape the future of student consulting",
    color: "text-purple-600",
  },
]

export default function Home() {
  const [logoVisible, setLogoVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    // Trigger logo animation on page load
    setTimeout(() => {
      setLogoVisible(true)
    }, 300)

    // Trigger content animation after logo animation
    setTimeout(() => {
      setContentVisible(true)
    }, 1200)
  }, [])

  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center relative z-10 px-4 sm:px-6 pt-4 pb-12 sm:pb-16">
        <div
          className={`flex flex-col items-center mb-8 sm:mb-12 md:mb-8 transition-all duration-1000 ease-out ${
            logoVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"
          }`}
          style={{ marginTop: "-3rem" }} // Move the entire logo section higher up
        >
          <div className={`relative flex justify-center ${logoVisible ? "logo-glow" : ""} mb-6 sm:mb-8`}>
            <div className="w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full overflow-hidden">
              <Image
                src="/images/nova-network-logo.png"
                alt="NOVA Network"
                width={256}
                height={256}
                className="w-full h-full object-cover opacity-70 mix-blend-screen"
                priority
              />
            </div>
          </div>
          <div className="text-center" style={{ marginTop: "0.5rem" }}>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-2"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.95,
              }}
            >
              TEXAS NOVA
            </h1>
            <p
              className="text-xs sm:text-sm md:text-base text-gray-300"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginTop: "0.1rem",
                opacity: 0.9,
              }}
            >
              CONSULTING GROUP
            </p>
          </div>
        </div>
        <div
          className={`transition-all duration-1000 delay-300 ease-out text-center px-4 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            UT Austin's Premier AI Consulting Organization
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link href="/about" className="button-ellipse mx-auto sm:mx-0">
              <span className="button-text">Meet the Team</span>
            </Link>
            <Link href="/impact" className="button-ellipse mx-auto sm:mx-0">
              <span className="button-text">Our Impact</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Carousel Section */}
      <section className="py-12 sm:py-16 relative z-10 overflow-hidden bg-white bg-opacity-5">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">
            Our partners come from the top companies in the US
          </h2>

          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-4 sm:mx-6 flex items-center justify-center">
                  <div className="h-8 sm:h-10 w-20 sm:w-28 bg-white rounded flex items-center justify-center shadow-sm">
                    <span className="text-gray-800 font-semibold text-xs">{partner.name}</span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-4 sm:mx-6 flex items-center justify-center">
                  <div className="h-8 sm:h-10 w-20 sm:w-28 bg-white rounded flex items-center justify-center shadow-sm">
                    <span className="text-gray-800 font-semibold text-xs">{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 flex flex-col justify-center items-center relative z-10 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">Who We Are</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <div className="professional-card rounded-3xl p-5 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <span className="text-lg sm:text-xl font-bold text-blue-600">01</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-center mb-2 sm:mb-3">Innovation Leaders</h3>
            <p className="text-sm text-gray-700 text-center leading-relaxed">
              We're a team of forward-thinking consultants dedicated to pushing boundaries and finding innovative
              solutions.
            </p>
          </div>

          <div className="professional-card rounded-3xl p-5 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-100 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <span className="text-lg sm:text-xl font-bold text-green-600">02</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-center mb-2 sm:mb-3">Student-Led</h3>
            <p className="text-sm text-gray-700 text-center leading-relaxed">
              Founded and operated by passionate students bringing fresh perspectives and cutting-edge knowledge.
            </p>
          </div>

          <div className="professional-card rounded-3xl p-5 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-100 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <span className="text-lg sm:text-xl font-bold text-purple-600">03</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-center mb-2 sm:mb-3">Results-Driven</h3>
            <p className="text-sm text-gray-700 text-center leading-relaxed">
              We measure our success by the tangible results and value we create for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Resume Comparison Section - Moved above Opportunities */}
      <section className="py-12 sm:py-16 relative z-10 px-4 sm:px-6 bg-white bg-opacity-5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
              The <span className="animated-gradient-text">NOVA Difference</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              While others are doing interview prep, NOVA members are building careers that speak for themselves.
            </p>
          </div>

          <ResumeComparison />

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
              While everyone else is doing interview prep...
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
              NOVA members are building the experience that makes interviews irrelevant.
            </p>
            <Link href="/recruitment" className="button-ellipse mx-auto">
              <span className="button-text">Start Building Your Future</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-12 sm:py-16 relative z-10 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
              Your Gateway to <span className="animated-gradient-text">Extraordinary Opportunities</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Join NOVA and unlock doors that others can only dream of. Our members don't just build careers—they shape
              the future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="professional-card rounded-3xl p-5 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <div className={`${opportunity.color} mb-3 sm:mb-4`}>{opportunity.icon}</div>

                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">{opportunity.title}</h3>

                <p className="text-sm text-gray-700 leading-relaxed">{opportunity.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-base sm:text-lg text-gray-200 mb-5 sm:mb-6">
              Ready to transform your future? The next chapter of your success story starts here.
            </p>
            <Link href="/recruitment" className="button-ellipse mx-auto">
              <span className="button-text">Join NOVA Today</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-12 sm:py-16 flex flex-col justify-center items-center relative z-10 px-4 sm:px-6 bg-white bg-opacity-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">
          Get In Touch
        </h2>

        <div className="professional-card-dark rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">
            Ready to transform your business?
          </h3>
          <p className="text-base sm:text-lg text-gray-300 mb-5 sm:mb-6 leading-relaxed">
            Our team of experts is ready to help you navigate challenges and seize new opportunities.
          </p>
          <Link href="/contact" className="button-ellipse mx-auto">
            <span className="button-text">Contact Us</span>
          </Link>
        </div>
      </section>

      {/* Be Part of Something Revolutionary - Moved to bottom */}
      <section className="py-12 sm:py-16 relative z-10 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
              Be Part of Something <span className="animated-gradient-text">Revolutionary</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              NOVA started at UT Austin and is rapidly expanding nationwide. Join the founding generation and help us
              redefine student consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {expansionHighlights.map((highlight, index) => (
              <div
                key={index}
                className="professional-card-dark rounded-3xl p-5 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-glow text-center"
              >
                <div className={`${highlight.color} mb-3 sm:mb-4 flex justify-center`}>{highlight.icon}</div>

                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white">{highlight.title}</h3>

                <p className="text-sm text-gray-300 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-base sm:text-lg text-gray-200 mb-5 sm:mb-6">
              Don't just witness the future of consulting—help create it. Your journey to extraordinary begins now.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link href="/recruitment" className="button-ellipse mx-auto sm:mx-0">
                <span className="button-text">Apply Now</span>
              </Link>
              <Link href="/about" className="button-ellipse mx-auto sm:mx-0">
                <span className="button-text">Meet Our Founders</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
