"use client"

import { useState } from "react"
import Link from "next/link"
import Footer from "../components/Footer"
import { ChevronDown, ChevronUp } from "lucide-react"
import { trackClick } from "@/lib/analytics"

const benefits = [
  {
    title: "Professional Development",
    description:
      "Gain valuable consulting experience and develop professional skills that will set you apart in your career.",
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with business leaders, industry professionals, and fellow ambitious students.",
  },
  {
    title: "Meaningful Projects",
    description:
      "Work on real projects with real impact, solving actual business challenges for our clients.",
  },
  {
    title: "Flexible Schedule",
    description:
      "We understand student life. Our flexible hours work around your academic commitments.",
  },
  {
    title: "Mentorship",
    description:
      "Receive guidance from experienced team members who are invested in your growth.",
  },
  {
    title: "Leadership Opportunities",
    description:
      "Take on increasing responsibility and develop leadership skills as you grow with us.",
  },
]

const steps = [
  {
    number: "01",
    title: "Application",
    description:
      "Submit your application with your resume and tell us why you're interested in joining NOVA.",
  },
  {
    number: "02",
    title: "Initial Review",
    description:
      "Our team will review your application and reach out to qualified candidates for a first-round interview.",
  },
  {
    number: "03",
    title: "Interview",
    description:
      "Meet with our recruitment team to discuss your experience, skills, and interest in NOVA.",
  },
]

const faqs = [
  {
    question: "Do I need prior consulting experience to apply?",
    answer:
      "No, we value potential and enthusiasm over experience. We provide training and mentorship to help you develop the necessary skills.",
  },
  {
    question: "What is the time commitment?",
    answer:
      "Time commitment depends on the project, but most of the time it's 2-3 hours per week. We offer flexibility around academic schedules and exam periods.",
  },
  {
    question: "Can I apply if I'm a freshman?",
    answer:
      "Yes, freshmen are welcome to apply! We encourage students from all class levels to join our team.",
  },
  {
    question: "Can I apply if I'm a graduate student?",
    answer:
      "Yes, we have positions suitable for graduate students, particularly in specialized technical or strategic roles.",
  },
]

export default function Recruitment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {/* Hero */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Be part of a dynamic student-led consulting team making real
              impact. We're looking for talented, ambitious students to join us
              on our mission.
            </p>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-16 px-6 bg-white/[0.03]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Join NOVA
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Application Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl font-bold text-white/20 mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Apply Now */}
        <section className="py-16 px-6 bg-white/[0.03]">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Apply Now</h2>
            <p className="text-gray-300 mb-2 text-lg font-medium">
              Board applications are open now.
            </p>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
              If you want to make a difference and be part of the board that
              makes this club an even better experience, apply now.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdZPS2PVLQmNeeAzQ7rWUO9ym5bKcuKMIunFy6qGjVIcB1TrA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[rgb(0,57,89)] font-medium rounded text-sm hover:bg-gray-100 transition-colors duration-200"
              onClick={() => trackClick("application_form_external")}
            >
              Complete Application Form
            </a>
            <p className="text-xs text-gray-500 mt-4">
              Opens in a new tab &middot; Takes approximately 5-10 minutes
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left p-5 hover:bg-white/[0.03] transition-colors duration-200"
                  >
                    <span className="text-base font-medium text-white pr-4">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4 text-sm">
                Have more questions?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-medium rounded text-sm hover:bg-white/5 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
