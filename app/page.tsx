"use client"

import Link from "next/link"
import Image from "next/image"
import Footer from "./components/Footer"
import FadeIn from "./components/FadeIn"
import { Briefcase, Users, Rocket, TrendingUp, Star, Zap, MapPin, Globe, Trophy } from "lucide-react"
import { SiGoogle, SiMeta, SiApple, SiNvidia, SiOpenai, SiSalesforce, SiStripe, SiPalantir, SiVisa, SiCisco } from "react-icons/si"

type Placement =
  | { name: string; kind: "image"; file: string; height?: string; filter?: string }
  | { name: string; kind: "icon";  icon: React.ReactNode }
  | { name: string; kind: "text";  style: string }

const placements: Placement[] = [
  { name: "Raytheon Technologies",    kind: "image", file: "Raytheon-Logo.png",                          height: "h-20" },
  { name: "Visa",                     kind: "icon",  icon: <SiVisa className="text-6xl" /> },
  { name: "IBM",                      kind: "image", file: "ibm-transparent.svg", filter: "grayscale brightness-150 opacity-70 hover:opacity-100" },
  { name: "PwC",                      kind: "image", file: "PwC-logo.png" },
  { name: "Cisco",                    kind: "icon",  icon: <SiCisco className="text-6xl" /> },
  { name: "Accenture",                kind: "image", file: "accenturelogo.png" },
  { name: "AMD",                      kind: "image", file: "AMD-Logo.png" },
  { name: "U.S. Chamber of Commerce", kind: "image", file: "United_States_Chamber_of_Commerce_logo.svg.png" },
  { name: "Pinterest",                kind: "image", file: "Pinterest-logo.png" },
  { name: "PepsiCo",                  kind: "image", file: "PepsiCo-Logo-1.png" },
  { name: "Wex",                      kind: "image", file: "wexlogo.png" },
  { name: "Johnson & Johnson",        kind: "image", file: "The_new_logo_of_Johnson_&_Johnson.png" },
  { name: "Capital One",              kind: "image", file: "Capital_One_logo.svg.png" },
]

const partners = [
  { name: "Google",     icon: <SiGoogle     className="w-auto h-auto" /> },
  { name: "Meta",       icon: <SiMeta       className="w-auto h-auto" /> },
  { name: "Apple",      icon: <SiApple      className="w-auto h-auto" /> },
  { name: "NVIDIA",     icon: <SiNvidia     className="w-auto h-auto" /> },
  { name: "OpenAI",     icon: <SiOpenai     className="w-auto h-auto" /> },
  { name: "Salesforce", icon: <SiSalesforce className="w-auto h-auto" /> },
  { name: "Stripe",     icon: <SiStripe     className="w-auto h-auto" /> },
  { name: "Palantir",   icon: <SiPalantir   className="w-auto h-auto" /> },
]


const opportunities = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Exclusive Internships",
    description: "Direct pathways to internships at Fortune 500 companies through our extensive network.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Job Offers",
    description: "Alumni consistently receive offers from top tech companies and consulting firms.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Startup Co-Founder",
    description: "Launch your own venture with fellow NOVA members and access to investor networks.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Elite Referrals",
    description: "Leverage our client network across Silicon Valley, Wall Street, and beyond.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Real Projects",
    description: "Work on cutting-edge AI projects with real clients and measurable impact.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Industry Recognition",
    description: "Build a portfolio that gets noticed by recruiters and industry leaders.",
  },
]

const expansionHighlights = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "UT Austin Founding Chapter",
    description: "Born in the heart of innovation at one of America's top universities.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "National Expansion",
    description: "Expanding to elite universities across the nation — be part of the movement.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Pioneer Advantage",
    description: "Join the founding generation and shape the future of student consulting.",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <FadeIn delay={0}>
            <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
              <Image
                src="/images/nova-network-logo.png"
                alt="NOVA"
                width={256}
                height={256}
                className="w-full h-full object-cover opacity-70 mix-blend-screen"
                priority
              />
            </div>
            <p className="section-label">01 — Texas NOVA Consulting Group</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-[-0.04em] mt-4 mb-8 max-w-4xl">
              Where Ambition<br />Meets Real Work.
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-white/55 max-w-xl leading-relaxed mb-12">
              UT Austin's premier AI consulting organization. Real clients. Real projects. Real careers.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link href="/analysts" className="btn-filled">Meet the Team</Link>
              <Link href="/apply" className="btn-outline">Apply Now</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="py-16 relative z-10 overflow-hidden bg-[#0d1f38]">
        <div className="container mx-auto px-6 mb-10">
          <p className="section-label text-center">02 — Partners</p>
          <p className="text-center text-white/40 text-sm">Our partners come from the top companies in the US</p>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#0d1f38] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#0d1f38] to-transparent" />
          <div className="animate-scroll">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-10 flex items-center justify-center text-white/35 hover:text-white/70 transition-colors duration-200">
                <span className="text-5xl">{partner.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements */}
      <section className="py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl mb-10">
          <FadeIn>
            <p className="section-label">03 — Placements</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-4 max-w-2xl">
              Where Our Members Land.
            </h2>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              NOVA members have gone on to intern and work at some of the world's most prestigious organizations.
            </p>
          </FadeIn>
        </div>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#0a1628] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#0a1628] to-transparent" />
          <div className="animate-scroll">
            {[...placements, ...placements, ...placements].map((item, index) => (
              <div key={index} className="flex-shrink-0 mx-10 flex items-center justify-center">
                {item.kind === "image" && (
                  <img
                    src={`/images/logos/${item.file}`}
                    alt={item.name}
                    className={`${item.height ?? "h-16"} w-auto max-w-[200px] object-contain transition-opacity duration-200 ${item.filter ?? "grayscale invert mix-blend-screen opacity-60 hover:opacity-100"}`}
                  />
                )}
                {item.kind === "icon" && (
                  <span className="text-white/50 hover:text-white/90 transition-colors duration-200">
                    {item.icon}
                  </span>
                )}
                {item.kind === "text" && (
                  <span className={`${item.style} text-white/50 hover:text-white/90 transition-colors duration-200`}>
                    {item.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6 relative z-10 bg-[#0d1f38]">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <p className="section-label">04 — Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-10 max-w-2xl">
              Built different, from the ground up.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8">
            {[
              {
                num: "01",
                title: "Innovation Leaders",
                body: "We're a team of forward-thinking consultants dedicated to pushing boundaries and finding innovative solutions.",
              },
              {
                num: "02",
                title: "Student-Led",
                body: "Founded and operated by passionate students bringing fresh perspectives and cutting-edge knowledge.",
              },
              {
                num: "03",
                title: "Results-Driven",
                body: "We measure our success by the tangible results and value we create for our clients.",
              },
            ].map((card, i) => (
              <FadeIn key={card.num} delay={i * 100}>
                <div className="bg-[#0f2a45] p-8 md:p-10 h-full">
                  <span className="section-number">{card.num}</span>
                  <h3 className="text-xl font-semibold text-white mt-4 mb-3">{card.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{card.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <p className="section-label">05 — Opportunities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-4 max-w-2xl">
              Your gateway to extraordinary.
            </h2>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed mb-10">
              Join NOVA and unlock doors that others can only dream of.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {opportunities.map((opportunity, index) => (
              <FadeIn key={index} delay={index * 60}>
                <div className="bg-[#0f2035] border border-white/8 rounded-lg p-7 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-200 h-full">
                  <div className="text-white/40 mb-5">{opportunity.icon}</div>
                  <h3 className="text-base font-semibold text-white mb-2">{opportunity.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{opportunity.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={400}>
            <div className="mt-12">
              <Link href="/apply" className="btn-filled">Join NOVA Today</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Expansion */}
      <section className="py-16 px-6 relative z-10 bg-[#0d1f38]">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <p className="section-label">06 — Our Expansion</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-4 max-w-2xl">
              Be part of something revolutionary.
            </h2>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed mb-10">
              NOVA started at UT Austin and is rapidly expanding nationwide.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {expansionHighlights.map((highlight, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-[#0f2035] border border-white/8 rounded-lg p-8 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-200 h-full">
                  <div className="text-white/40 mb-5">{highlight.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{highlight.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{highlight.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch CTA */}
      <section className="py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <p className="section-label">07 — Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-6 max-w-2xl">
              Ready to transform<br />your business?
            </h2>
            <p className="text-white/55 text-lg mb-10 max-w-xl leading-relaxed">
              Our team of experts is ready to help you navigate challenges and seize new opportunities.
            </p>
            <Link href="/contact" className="btn-filled">Contact Us</Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
