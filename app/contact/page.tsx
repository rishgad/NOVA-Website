"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Phone, MapPin, Clock, MessageCircle, Send, Linkedin } from "lucide-react" // Added Linkedin icon

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    description: "Quick questions or urgent matters",
    contact: "(717) 704-7895",
    action: "tel:+17177047895",
    color: "text-green-400",
    gradient: "from-green-600 to-green-400",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Text Message",
    description: "Fast and convenient communication",
    contact: "(717) 704-7895",
    action: "sms:+17177047895",
    color: "text-purple-400",
    gradient: "from-purple-600 to-purple-400",
  },
  {
    icon: <Linkedin className="w-6 h-6" />, // LinkedIn icon
    title: "Connect on LinkedIn",
    description: "Follow our journey and message us",
    contact: "linkedin.com/company/texas-nova",
    action: "https://www.linkedin.com/company/texas-nova/",
    color: "text-blue-400",
    gradient: "from-blue-600 to-blue-400",
  },
]

const officeInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Location",
    info: "Austin, Texas",
    color: "text-orange-400",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Response Time",
    info: "Within 24 hours",
    color: "text-cyan-400",
  },
]

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const mailtoSubject = encodeURIComponent(subject || "Contact from NOVA Website")
    const mailtoBody = encodeURIComponent(`
Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from NOVA Consulting website contact form
`)

    const mailtoLink = `mailto:ryanthomas2271@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`
    window.location.href = mailtoLink

    toast({
      title: "Message prepared!",
      description: "Your email client will open with the message ready to send.",
    })

    // Reset form
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
  }

  return (
    <div className="container mx-auto px-4 py-12 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge AI solutions? Have questions about joining our team? We'd
            love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-3xl p-8 shadow-glow">
            <div className="flex items-center mb-6">
              <Send className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your full name"
                    className="bg-white bg-opacity-20 text-white placeholder-gray-400 rounded-xl border-gray-600 focus:border-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your.email@example.com"
                    className="bg-white bg-opacity-20 text-white placeholder-gray-400 rounded-xl border-gray-600 focus:border-blue-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What's this about?"
                  className="bg-white bg-opacity-20 text-white placeholder-gray-400 rounded-xl border-gray-600 focus:border-blue-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  placeholder="Tell us about your project, questions, or how we can help..."
                  className="bg-white bg-opacity-20 text-white placeholder-gray-400 rounded-xl border-gray-600 focus:border-blue-400 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Logo and Description */}
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-3xl p-8 text-center">
              <div className="w-32 mx-auto mb-6">
                <Image
                  src="/images/nova-network-logo.png"
                  alt="NOVA Consulting"
                  width={200}
                  height={200}
                  className="w-full h-auto opacity-90 mix-blend-screen"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">NOVA Consulting</h3>
              <p className="text-gray-300 leading-relaxed">
                UT Austin's premier AI consulting organization, transforming businesses through innovative technology
                solutions and strategic insights.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Contact Methods</h3>
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="group bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 block transform transition-all duration-300 hover:scale-105 hover:shadow-glow relative overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                  ></div>

                  <div className="flex items-center relative z-10">
                    <div className={`${method.color} mr-4 transform transition-all duration-300 group-hover:scale-110`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">{method.title}</h4>
                      <p className="text-gray-300 text-sm mb-2">{method.description}</p>
                      <p className={`${method.color} font-medium`}>{method.contact}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Office Information */}
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Office Information</h3>
              <div className="space-y-4">
                {officeInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`${info.color} mr-3`}>{info.icon}</div>
                    <div>
                      <p className="text-gray-300 text-sm">{info.title}</p>
                      <p className="text-white font-medium">{info.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="/recruitment"
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Join Our Team
                </a>
                <a
                  href="/impact"
                  className="block w-full text-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold py-3 rounded-xl transition-all duration-300 border border-white border-opacity-20"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
