"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Footer from "./components/Footer"

const projects = [
  {
    name: "VeneerVision AI",
    description: "AI-powered dental imaging",
    logo: "/placeholder.svg?height=80&width=200&text=VeneerVision+AI",
  },
  {
    name: "Media and Newsletter Bots",
    description: "Automated content distribution",
    logo: "/placeholder.svg?height=80&width=200&text=Media+Bots",
  },
  {
    name: "MGOIT AI Research Publications",
    description: "Cutting-edge AI research",
    logo: "/placeholder.svg?height=80&width=200&text=MGOIT+Research",
  },
  {
    name: "Right Technology Partners AI Integration",
    description: "Enterprise AI solutions",
    logo: "/placeholder.svg?height=80&width=200&text=Right+Tech",
  },
  {
    name: "Outerscope",
    description: "Expanding AI ventures",
    logo: "/placeholder.svg?height=80&width=200&text=Outerscope",
  },
  {
    name: "Generative AI Platforms",
    description: "Next-generation AI platforms",
    logo: "/placeholder.svg?height=80&width=200&text=GenAI+Platform",
  },
]

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
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="h-8 sm:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity filter grayscale"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="h-8 sm:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity filter grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Clients Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-black bg-opacity-30 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">Our Projects</h2>
          <p className="text-lg sm:text-xl text-center mb-12 sm:mb-16 text-gray-300 max-w-3xl mx-auto">
            Innovative AI solutions transforming industries and driving the future of technology
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-glow group"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-full h-20 sm:h-24 flex items-center justify-center mb-4 sm:mb-6">
                    <Image
                      src={project.logo || "/placeholder.svg"}
                      alt={project.name}
                      width={200}
                      height={80}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white leading-tight">{project.name}</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
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
