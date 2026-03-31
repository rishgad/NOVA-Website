"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import Footer from "../components/Footer"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoSubject = encodeURIComponent(subject || "Contact from NOVA Website")
    const mailtoBody = encodeURIComponent(
`Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from NOVA Consulting website contact form`
    )

    const mailtoLink = `mailto:ryanthomas2271@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`
    window.location.href = mailtoLink

    toast({
      title: "Message prepared!",
      description: "Your email client will open with the message ready to send.",
    })

    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {/* Header */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Ready to transform your business with cutting-edge AI solutions?
              We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="pb-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Contact Form */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                <h2 className="text-xl font-semibold text-white mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-gray-300 mb-1.5"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Your full name"
                        className="bg-white/5 text-white placeholder-gray-500 rounded border-white/10 focus:border-white/30"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-gray-300 mb-1.5"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="your.email@example.com"
                        className="bg-white/5 text-white placeholder-gray-500 rounded border-white/10 focus:border-white/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm text-gray-300 mb-1.5"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="What's this about?"
                      className="bg-white/5 text-white placeholder-gray-500 rounded border-white/10 focus:border-white/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-gray-300 mb-1.5"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={6}
                      placeholder="Tell us about your project or how we can help..."
                      className="bg-white/5 text-white placeholder-gray-500 rounded border-white/10 focus:border-white/30 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white text-[rgb(0,57,89)] font-medium py-3 rounded hover:bg-gray-100 transition-colors duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info - Single consolidated box */}
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-5">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Phone / Text</p>
                      <a
                        href="tel:+17177047895"
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                      >
                        (717) 704-7895
                      </a>
                    </div>

                    <div>
                      <p className="text-sm text-gray-400 mb-1">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/company/texas-nova/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                      >
                        linkedin.com/company/texas-nova
                      </a>
                    </div>

                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <a
                        href="mailto:ryanthomas2271@gmail.com"
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                      >
                        ryanthomas2271@gmail.com
                      </a>
                    </div>

                    <div className="pt-3 border-t border-white/10">
                      <p className="text-sm text-gray-400 mb-1">Location</p>
                      <p className="text-white">Austin, Texas</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-400 mb-1">Response Time</p>
                      <p className="text-white">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Quick links */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Looking for something else?
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="/recruitment"
                      className="block text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Join Our Team &rarr;
                    </a>
                    <a
                      href="/impact"
                      className="block text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      View Our Work &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
