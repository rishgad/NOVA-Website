"use client"

import { useState } from "react"
import Link from "next/link"
import Footer from "../components/Footer"
import FadeIn from "../components/FadeIn"
import TabFadeIn from "../components/TabFadeIn"
import { ChevronDown, ChevronUp } from "lucide-react"
import { trackClick } from "@/lib/analytics"

const benefits = [
  {
    title: "Professional Development",
    description:
      "Gain hands-on consulting experience working with real clients. Develop analytical, communication, and project management skills that employers value.",
  },
  {
    title: "Networking",
    description:
      "Build relationships with business leaders, industry professionals, and a community of ambitious, like-minded students.",
  },
  {
    title: "Real Projects",
    description:
      "Work on meaningful engagements with measurable outcomes. Our projects span AI, strategy, and analytics across diverse industries.",
  },
  {
    title: "Flexible Commitment",
    description:
      "We understand student life. Our flexible structure works around your academic schedule, typically requiring 2-3 hours per week.",
  },
  {
    title: "Mentorship",
    description:
      "Receive guidance from experienced team members and industry mentors who are invested in your personal and professional growth.",
  },
  {
    title: "Leadership Track",
    description:
      "Take on increasing responsibility as you grow. Our leadership pipeline develops the next generation of consulting leaders.",
  },
]

const steps = [
  {
    number: "01",
    title: "Submit Application",
    description:
      "Complete our application form with your resume and a brief statement of interest. We want to understand your motivation and what you'll bring to NOVA.",
    timeline: "Open now",
  },
  {
    number: "02",
    title: "Application Review",
    description:
      "Our recruitment team reviews every application carefully. We evaluate potential, enthusiasm, and alignment with NOVA's mission — prior consulting experience is not required.",
    timeline: "1–2 weeks",
  },
  {
    number: "03",
    title: "Interview",
    description:
      "Qualified candidates are invited for a conversational interview with our team. This is a chance for us to get to know you and for you to learn more about NOVA.",
    timeline: "30 minutes",
  },
]

const faqs = [
  {
    question: "Do I need prior consulting experience to apply?",
    answer:
      "No. We value potential and enthusiasm over experience. We provide comprehensive training and mentorship to help you develop the skills needed to succeed.",
  },
  {
    question: "What is the time commitment?",
    answer:
      "The typical commitment is 2-3 hours per week, depending on the project phase. We offer flexibility around academic schedules and exam periods.",
  },
  {
    question: "Can I apply if I'm a freshman?",
    answer:
      "Absolutely. We welcome students from all class levels. Some of our strongest contributors joined as freshmen.",
  },
  {
    question: "Can I apply if I'm a graduate student?",
    answer:
      "Yes. We have positions well-suited for graduate students, particularly in specialized technical and strategic roles where deeper expertise adds significant value.",
  },
]

export default function ApplyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {/* Hero */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <FadeIn>
              <p className="section-label">01 — Join NOVA</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[-0.04em] mt-2 mb-8 max-w-3xl leading-[0.95]">
                Ready to do real work?
              </h1>
              <p className="text-lg text-white/55 max-w-xl leading-relaxed">
                Be part of a dynamic, student-led consulting team making real impact.
                We're looking for talented, ambitious students ready to grow.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Why NOVA */}
        <section className="py-24 px-6 bg-[#0d1f38]">
          <div className="container mx-auto max-w-5xl">
            <TabFadeIn direction="left">
              <div className="max-w-3xl mb-12">
                <p className="section-label">02 — Why NOVA</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-4 leading-tight">
                  Build experience that matters.
                </h2>
                <p className="text-white/55 leading-relaxed">
                  Joining NOVA means more than a line on your resume. It means working on
                  real problems, building real skills, and connecting with people who will
                  shape your career.
                </p>
              </div>
            </TabFadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <TabFadeIn key={index} direction="bottom" delay={100 + index * 80}>
                  <div className="bg-[#0f2035] border border-white/8 rounded-lg p-6 hover:bg-white/[0.04] transition-colors duration-200 h-full">
                    <h3 className="text-base font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{benefit.description}</p>
                  </div>
                </TabFadeIn>
              ))}
            </div>

            <TabFadeIn direction="bottom" delay={200}>
              <div className="mt-16 pt-12">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="text-3xl font-bold text-white tracking-[-0.03em] mb-1">2–3 hrs</p>
                    <p className="text-sm text-white/40">Weekly time commitment</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white tracking-[-0.03em] mb-1">All levels</p>
                    <p className="text-sm text-white/40">Freshmen through grad students</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white tracking-[-0.03em] mb-1">No experience</p>
                    <p className="text-sm text-white/40">Required to apply</p>
                  </div>
                </div>
              </div>
            </TabFadeIn>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <TabFadeIn direction="left">
              <div className="max-w-3xl mb-12">
                <p className="section-label">03 — Application Process</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-4 leading-tight">
                  Three steps to joining NOVA.
                </h2>
                <p className="text-white/55 leading-relaxed">
                  Our process is straightforward and designed to be respectful of your
                  time. We're looking for people with drive and curiosity, not perfect resumes.
                </p>
              </div>
            </TabFadeIn>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <TabFadeIn key={index} direction="right" delay={150 + index * 150}>
                  <div className="flex gap-8 items-start">
                    <div className="flex-shrink-0">
                      <p className="text-4xl font-bold text-white/15">{step.number}</p>
                    </div>
                    <div className="flex-1 pb-8 border-b border-white/8 last:border-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                        <span className="text-xs px-3 py-1 rounded-full bg-[#0f2035] border border-white/8 text-white/40">
                          {step.timeline}
                        </span>
                      </div>
                      <p className="text-sm text-white/55 leading-relaxed max-w-2xl">{step.description}</p>
                    </div>
                  </div>
                </TabFadeIn>
              ))}
            </div>

            <TabFadeIn direction="bottom" delay={200}>
              <div className="mt-12 bg-[#0f2035] border border-white/8 rounded-lg p-8">
                <p className="text-sm text-white/40 mb-4">What we look for</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Intellectual curiosity and willingness to learn",
                    "Strong communication and collaboration skills",
                    "Initiative and a bias toward action",
                    "Interest in technology, strategy, or analytics",
                  ].map((trait, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-white/30 mt-0.5">&mdash;</span>
                      <p className="text-sm text-white/55">{trait}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabFadeIn>
          </div>
        </section>

        {/* Apply Now */}
        <section className="py-24 px-6 bg-[#0d1f38]">
          <div className="container mx-auto max-w-3xl">
            <TabFadeIn direction="top">
              <div className="mb-12">
                <p className="section-label">04 — Apply Now</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-4 leading-tight">
                  Applications are open.
                </h2>
                <p className="text-white/55 leading-relaxed max-w-xl">
                  If you want to make a difference and be part of the team that shapes
                  this organization, we want to hear from you.
                </p>
              </div>
            </TabFadeIn>

            <TabFadeIn direction="bottom" delay={200}>
              <div className="bg-[#0f2035] border border-white/8 rounded-lg p-8 md:p-12">
                <p className="text-white/55 mb-8 leading-relaxed">
                  Our application takes approximately 5–10 minutes to complete. You'll
                  need your resume and a brief statement about why you're interested in NOVA.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdZPS2PVLQmNeeAzQ7rWUO9ym5bKcuKMIunFy6qGjVIcB1TrA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-filled"
                  onClick={() => trackClick("application_form_apply_page")}
                >
                  Complete Application Form
                </a>
                <p className="text-xs text-white/30 mt-4">Opens in a new tab</p>
              </div>
            </TabFadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-3xl">
            <TabFadeIn direction="left">
              <div className="mb-12">
                <p className="section-label">05 — FAQ</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-4 leading-tight">
                  Common questions, answered.
                </h2>
              </div>
            </TabFadeIn>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <TabFadeIn key={index} direction="right" delay={100 + index * 100}>
                  <div className="border border-white/8 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex justify-between items-center w-full text-left p-5 hover:bg-white/[0.03] transition-colors duration-200"
                    >
                      <span className="text-base font-medium text-white pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-white/40 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white/40 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-sm text-white/55 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </TabFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 px-6 bg-[#0d1f38]">
          <TabFadeIn direction="bottom">
            <div className="container mx-auto max-w-3xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0f2035] border border-white/8 rounded-lg p-6">
                  <p className="text-sm text-white/40 mb-2">Questions?</p>
                  <p className="text-sm text-white/55 leading-relaxed mb-4">
                    Reach out to our team directly if you have any questions about the application process.
                  </p>
                  <Link href="/contact" className="text-sm text-white hover:text-white/55 transition-colors duration-200">
                    Contact us &rarr;
                  </Link>
                </div>
                <div className="bg-[#0f2035] border border-white/8 rounded-lg p-6">
                  <p className="text-sm text-white/40 mb-2">Not sure yet?</p>
                  <p className="text-sm text-white/55 leading-relaxed mb-4">
                    Learn more about what we do and the impact our members make before deciding to apply.
                  </p>
                  <Link href="/impact" className="text-sm text-white hover:text-white/55 transition-colors duration-200">
                    See our impact &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </TabFadeIn>
        </section>
      </div>
      <Footer />
    </div>
  )
}
