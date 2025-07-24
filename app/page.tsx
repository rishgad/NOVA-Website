"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Footer from "./components/Footer"
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
      <section className="flex flex-col items-center relative z-10 px-4 sm:px-6 pt-0 pb-16">
        <div
          className={`flex flex-col items-center mb-12 sm:mb-16 md:mb-8 transition-all duration-1000 ease-out ${
            logoVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"
          }`}
        >
          <div className={`relative ${logoVisible ? "logo-glow" : ""} mb-6`}>
            <Image
              src="/images/nova-network-logo.png"
              alt="NOVA Network"
              width={200}
              height={200}
              className="w-48 sm:w-56 md:w-64 h-auto opacity-80 mix-blend-screen"
              priority
            />
          </div>
          <div className="text-center">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
            >
              TEXAS NOVA
            </h1>
            <p
              className="text-lg sm:text-xl text-gray-300 tracking-widest"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
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
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            UT Austin's Premier AI Consulting Organization
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link href="/about" className="button-ellipse">
              <span className="button-text">Meet the Team</span>
            </Link>
            <Link href="/impact" className="button-ellipse">
              <span className="button-text">Our Impact</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Carousel Section */}
      <section className="py-16 sm:py-20 relative z-10 overflow-hidden bg-white bg-opacity-5">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
            Our partners come from the top companies in the US
          </h2>

          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center">
                  <div className="h-8 sm:h-12 w-24 sm:w-32 bg-white rounded flex items-center justify-center shadow-sm">
                    <span className="text-gray-800 font-semibold text-xs sm:text-sm">{partner.name}</span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center">
                  <div className="h-8 sm:h-12 w-24 sm:w-32 bg-white rounded flex items-center justify-center shadow-sm">
                    <span className="text-gray-800 font-semibold text-xs sm:text-sm">{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 flex flex-col justify-center items-center relative z-10 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">Who We Are</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="professional-card rounded-3xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <span className="text-xl sm:text-2xl font-bold text-blue-600">01</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4">Innovation Leaders</h3>
            <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
              We're a team of forward-thinking consultants dedicated to pushing boundaries and finding innovative
              solutions.
            </p>
          </div>

          <div className="professional-card rounded-3xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <span className="text-xl sm:text-2xl font-bold text-green-600">02</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4">Student-Led</h3>
            <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
              Founded and operated by passionate students bringing fresh perspectives and cutting-edge knowledge.
            </p>
          </div>

          <div className="professional-card rounded-3xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <span className="text-xl sm:text-2xl font-bold text-purple-600">03</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4">Results-Driven</h3>
            <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
              We measure our success by the tangible results and value we create for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Chapter & Expansion Section */}
      <section className="py-16 sm:py-20 relative z-10 px-4 sm:px-6 bg-white bg-opacity-5">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Be Part of Something <span className="animated-gradient-text">Revolutionary</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              NOVA started at UT Austin and is rapidly expanding nationwide. Join the founding generation and help us
              redefine student consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {expansionHighlights.map((highlight, index) => (
              <div
                key={index}
                className="professional-card-dark rounded-3xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-glow text-center"
              >
                <div className={`${highlight.color} mb-4 sm:mb-6 flex justify-center`}>{highlight.icon}</div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{highlight.title}</h3>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8">
              Don't just witness the future of consulting—help create it. Your journey to extraordinary begins now.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link href="/recruitment" className="button-ellipse">
                <span className="button-text">Apply Now</span>
              </Link>
              <Link href="/about" className="button-ellipse">
                <span className="button-text">Meet Our Founders</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-16 sm:py-20 relative z-10 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Your Gateway to <span className="animated-gradient-text">Extraordinary Opportunities</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Join NOVA and unlock doors that others can only dream of. Our members don't just build careers—they shape
              the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="professional-card rounded-3xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <div className={`${opportunity.color} mb-4 sm:mb-6`}>{opportunity.icon}</div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{opportunity.title}</h3>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{opportunity.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8">
              Ready to transform your future? The next chapter of your success story starts here.
            </p>
            <Link href="/recruitment" className="button-ellipse">
              <span className="button-text">Join NOVA Today</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-16 sm:py-20 flex flex-col justify-center items-center relative z-10 px-4 sm:px-6 bg-white bg-opacity-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">Get In Touch</h2>

        <div className="professional-card-dark rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Ready to transform your business?</h3>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Our team of experts is ready to help you navigate challenges and seize new opportunities.
          </p>
          <Link href="/contact" className="button-ellipse">
            <span className="button-text">Contact Us</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
