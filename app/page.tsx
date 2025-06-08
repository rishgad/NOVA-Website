"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Footer from "./components/Footer"

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
      <section className="min-h-screen flex flex-col justify-center items-center relative z-10 px-6">
        <div
          className={`w-64 md:w-80 mb-8 transition-all duration-1000 ease-out ${
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
          className={`transition-all duration-1000 delay-300 ease-out ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl text-center mb-12 text-gray-300">UT Austin's Premier AI Consulting Organization</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="button-ellipse">
              <span className="button-text">Meet the Team</span>
            </Link>
            <Link href="/impact" className="button-ellipse">
              <span className="button-text">Our Impact</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative z-10 px-6 py-20 bg-black bg-opacity-30">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Who We Are</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-10 flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl animated-gradient-text">01</span>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-white">Innovation Leaders</h3>
            <p className="text-gray-300 text-center">
              We're a team of forward-thinking consultants dedicated to pushing boundaries and finding innovative
              solutions.
            </p>
          </div>

          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-10 flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl animated-gradient-text">02</span>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-white">Student-Led</h3>
            <p className="text-gray-300 text-center">
              Founded and operated by passionate students bringing fresh perspectives and cutting-edge knowledge.
            </p>
          </div>

          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-10 flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl animated-gradient-text">03</span>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-white">Results-Driven</h3>
            <p className="text-gray-300 text-center">
              We measure our success by the tangible results and value we create for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative z-10 px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Services</h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&q=80&auto=format"
                  alt="Strategic Consulting"
                  fill
                  className="object-cover brightness-75"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Strategic Consulting</h3>
                <p className="text-gray-300 mb-6">
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
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop&q=80&auto=format"
                  alt="Technology Solutions"
                  fill
                  className="object-cover brightness-75"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Technology Solutions</h3>
                <p className="text-gray-300 mb-6">
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
      <section className="min-h-screen flex flex-col justify-center items-center relative z-10 px-6 py-20 bg-black bg-opacity-30">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Get In Touch</h2>

        <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Ready to transform your business?</h3>
          <p className="text-xl text-gray-300 mb-8">
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
