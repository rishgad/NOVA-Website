"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Footer from "./components/Footer"
import { Briefcase, Users, Rocket, TrendingUp, Star, Zap } from "lucide-react"

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
    color: "text-blue-400",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Job Offers",
    description: "Alumni consistently receive offers from top tech companies and consulting firms",
    color: "text-green-400",
    gradient: "from-green-600 to-green-400",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Startup Co-Founder",
    description: "Launch your own venture with fellow NOVA members and access to investor networks",
    color: "text-purple-400",
    gradient: "from-purple-600 to-purple-400",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Elite Referrals",
    description: "Leverage our client network across Silicon Valley, Wall Street, and beyond",
    color: "text-orange-400",
    gradient: "from-orange-600 to-orange-400",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Real Projects",
    description: "Work on cutting-edge AI projects with real clients and measurable impact",
    color: "text-yellow-400",
    gradient: "from-yellow-600 to-yellow-400",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Industry Recognition",
    description: "Build a portfolio that gets noticed by recruiters and industry leaders",
    color: "text-pink-400",
    gradient: "from-pink-600 to-pink-400",
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
      <section className="min-h-screen flex flex-col justify-center items-center relative z-10 px-4 sm:px-6">
        <div
          className={`w-48 sm:w-64 md:w-80 mb-12 sm:mb-16 md:mb-8 transition-all duration-1000 ease-out ${
            logoVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"
          }`}
        >
          <div className={`relative ${logoVisible ? "logo-glow" : ""}`}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_2-12-25_at_8.04_PM-removebg-preview-a4vRtTrLEtOfSa8Zmq0ImD0l80z6b9.png"
              alt="NOVA Consulting"
              width={400}
              height={200}
              className="w-full h-auto opacity-90 mix-blend-screen"
              priority
            />
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ease-out text-center px-4 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
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
      <section className="py-16 sm:py-20 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
            Our partners come from the top companies in the US
          </h2>

          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center">
                  <div className="h-8 sm:h-12 w-24 sm:w-32 bg-white bg-opacity-70 rounded flex items-center justify-center">
                    <span className="text-black font-bold text-xs sm:text-sm">{partner.name}</span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center">
                  <div className="h-8 sm:h-12 w-24 sm:w-32 bg-white bg-opacity-70 rounded flex items-center justify-center">
                    <span className="text-black font-bold text-xs sm:text-sm">{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-16 sm:py-20 relative z-10 px-4 sm:px-6 bg-black bg-opacity-30">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Your Gateway to <span className="animated-gradient-text">Extraordinary Opportunities</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join NOVA and unlock doors that others can only dream of. Our members don't just build careers—they shape
              the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="group bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-glow relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${opportunity.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Floating icon animation */}
                <div
                  className={`${opportunity.color} mb-4 sm:mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2`}
                >
                  <div className="relative">
                    {opportunity.icon}
                    <div
                      className={`absolute inset-0 ${opportunity.color} opacity-30 blur-lg scale-150 group-hover:opacity-60 transition-opacity duration-500`}
                    >
                      {opportunity.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white group-hover:text-white transition-colors duration-300">
                  {opportunity.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {opportunity.description}
                </p>

                {/* Animated border */}
                <div
                  className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-current ${opportunity.color} opacity-0 group-hover:opacity-30 transition-all duration-500`}
                ></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Ready to transform your future? The next chapter of your success story starts here.
            </p>
            <Link href="/recruitment" className="button-ellipse group">
              <span className="button-text">Join NOVA Today</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 flex flex-col justify-center items-center relative z-10 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">Who We Are</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-10 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <span className="text-xl sm:text-2xl animated-gradient-text">01</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 text-white">Innovation Leaders</h3>
            <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed">
              We're a team of forward-thinking consultants dedicated to pushing boundaries and finding innovative
              solutions.
            </p>
          </div>

          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-10 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <span className="text-xl sm:text-2xl animated-gradient-text">02</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 text-white">Student-Led</h3>
            <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed">
              Founded and operated by passionate students bringing fresh perspectives and cutting-edge knowledge.
            </p>
          </div>

          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-10 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <span className="text-xl sm:text-2xl animated-gradient-text">03</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 text-white">Results-Driven</h3>
            <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed">
              We measure our success by the tangible results and value we create for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 sm:py-20 flex flex-col justify-center items-center relative z-10 px-4 sm:px-6 bg-black bg-opacity-30">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">Our Services</h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <div className="h-48 sm:h-56 relative">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&q=80&auto=format"
                  alt="Strategic Consulting"
                  fill
                  className="object-cover brightness-75"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Strategic Consulting</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  Comprehensive strategic consulting services to help your business navigate complex challenges and
                  capitalize on new opportunities.
                </p>
                <div className="flex justify-center">
                  <Link href="/strategic-consulting" className="button-ellipse">
                    <span className="button-text">View Projects</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <div className="h-48 sm:h-56 relative">
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop&q=80&auto=format"
                  alt="Technology Solutions"
                  fill
                  className="object-cover brightness-75"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Technology Solutions</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  Modern technology solutions designed to give your business a competitive edge in today's digital
                  landscape.
                </p>
                <div className="flex justify-center">
                  <Link href="/technology-solutions" className="button-ellipse">
                    <span className="button-text">View Projects</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-16 sm:py-20 flex flex-col justify-center items-center relative z-10 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">Get In Touch</h2>

        <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto text-center">
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
