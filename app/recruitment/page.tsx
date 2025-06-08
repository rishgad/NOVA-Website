"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"
import Footer from "../components/Footer"
import { ChevronDown, ChevronUp } from "lucide-react"

interface JobPosition {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
}

const jobPositions: JobPosition[] = [
  {
    id: "tech-consultant-1",
    title: "Technical Consultant",
    department: "Technology Solutions",
    location: "Austin, TX (Remote options available)",
    type: "Part-time",
    description:
      "Join our technical consulting team and work directly with clients to solve complex technology challenges. You'll help analyze systems, develop technical recommendations, and implement innovative solutions.",
    requirements: [
      "Currently enrolled in undergraduate program (sophomore or junior preferred)",
      "Strong technical and problem-solving skills",
      "Experience with programming languages and technology platforms",
      "Interest in consulting and client-facing work",
      "Ability to commit 10-15 hours per week",
    ],
  },
]

const benefits = [
  {
    title: "Professional Development",
    description:
      "Gain valuable consulting experience and develop professional skills that will set you apart in your career.",
    icon: "🚀",
  },
  {
    title: "Networking Opportunities",
    description: "Connect with business leaders, industry professionals, and fellow ambitious students.",
    icon: "🤝",
  },
  {
    title: "Meaningful Projects",
    description: "Work on real projects with real impact, solving actual business challenges for our clients.",
    icon: "💼",
  },
  {
    title: "Flexible Schedule",
    description: "We understand student life. Our flexible hours work around your academic commitments.",
    icon: "⏰",
  },
  {
    title: "Mentorship",
    description: "Receive guidance from experienced team members who are invested in your growth.",
    icon: "🧠",
  },
  {
    title: "Leadership Opportunities",
    description: "Take on increasing responsibility and develop leadership skills as you grow with us.",
    icon: "⭐",
  },
]

const steps = [
  {
    number: "01",
    title: "Application",
    description: "Submit your application with your resume and tell us why you're interested in joining NOVA.",
  },
  {
    number: "02",
    title: "Initial Review",
    description:
      "Our team will review your application and reach out to qualified candidates for a first-round interview.",
  },
  {
    number: "03",
    title: "First Interview",
    description: "Meet with our recruitment team to discuss your experience, skills, and interest in NOVA.",
  },
  {
    number: "04",
    title: "Case Study",
    description: "Complete a small case study or project relevant to the position you're applying for.",
  },
  {
    number: "05",
    title: "Team Interview",
    description: "Meet with potential team members and department leaders for a more in-depth conversation.",
  },
  {
    number: "06",
    title: "Offer",
    description: "Successful candidates will receive an offer to join the NOVA team!",
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
      "Most positions require 10-15 hours per week, but we offer flexibility around academic schedules and exam periods.",
  },
  {
    question: "Can I apply if I'm a freshman?",
    answer: "Yes, freshmen are welcome to apply! We encourage students from all class levels to join our team.",
  },
  {
    question: "Can I apply if I'm a graduate student?",
    answer:
      "Yes, we have positions suitable for graduate students, particularly in specialized technical or strategic roles.",
  },
]

export default function Recruitment() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [resume, setResume] = useState<File | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ fullName, email, resume })
    toast({
      title: "Application submitted!",
      description: "We'll review your application and get back to you soon.",
    })
    setFullName("")
    setEmail("")
    setResume(null)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0])
    }
  }

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null)
    } else {
      setOpenFaq(index)
    }
  }

  return (
    <div className="flex flex-col pt-4">
      {/* Hero Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Join Our Team</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of a dynamic student-led consulting team making real impact. We're looking for talented, ambitious
            students to join us on our mission.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-6 bg-black bg-opacity-30 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-white">Our Culture</h2>
              <p className="text-gray-300 mb-6">
                At NOVA, we believe in fostering an environment of innovation, collaboration, and growth. Our team
                members are passionate about making a difference and developing their professional skills.
              </p>
              <p className="text-gray-300 mb-6">
                We value diversity of thought, background, and experience. Everyone's voice is heard, and we encourage
                our team members to bring their unique perspectives to the table.
              </p>
              <p className="text-gray-300">
                As a student-led organization, we understand the importance of balancing academic commitments with
                professional development. We offer flexible schedules and a supportive community.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-glow">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80&auto=format"
                  alt="NOVA team culture"
                  width={800}
                  height={600}
                  className="w-full h-auto brightness-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-black bg-opacity-30 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Why Join NOVA?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Application Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center mb-4">
                  <span className="text-lg animated-gradient-text">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-20 px-6 bg-black bg-opacity-30 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Apply Now</h2>

          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-8 shadow-glow">
            <h3 className="text-xl font-bold mb-6 text-white">Application for Technical Consultant</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="bg-white bg-opacity-20 text-white placeholder-gray-400 rounded-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white bg-opacity-20 text-white placeholder-gray-400 rounded-full"
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-1">
                  Resume (PDF)
                </label>
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                  className="bg-white bg-opacity-20 text-white placeholder-gray-400 rounded-full"
                />
              </div>

              <div className="flex justify-center">
                <Button type="submit" className="bg-white text-black hover:bg-gray-200 rounded-full">
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-6 transform transition-all duration-300 hover:shadow-glow"
              >
                <button onClick={() => toggleFaq(index)} className="flex justify-between items-center w-full text-left">
                  <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                  {openFaq === index ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
                </button>

                {openFaq === index && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">Have more questions? We're happy to help!</p>
            <Link href="/contact" className="button-ellipse inline-block">
              <span className="button-text">Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
