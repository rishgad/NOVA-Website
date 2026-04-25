import Link from "next/link"
import Footer from "../components/Footer"
import FadeIn from "../components/FadeIn"
import TabFadeIn from "../components/TabFadeIn"
import { Linkedin } from "lucide-react"

const programFeatures = [
  {
    num: "01",
    title: "Real Client Work",
    body: "Analysts work directly on live engagements — from AI strategy to data analysis — with real startups and companies.",
  },
  {
    num: "02",
    title: "Skills Development",
    body: "Learn consulting frameworks, AI tools, data science, and communication skills through hands-on practice.",
  },
  {
    num: "03",
    title: "Flexible Commitment",
    body: "Typically 2–3 hours per week. We work around your academic schedule, not against it.",
  },
]

const execBoard = [
  {
    name: "Haris Isam",
    role: "President",
    major: "Economics and Applied Mathematics",
    linkedinUrl: "https://www.linkedin.com/in/harisisam/",
    image: "/images/headshots/harisHS.jpg",
  },
  {
    name: "Angela Stables",
    role: "Vice President",
    major: "International Political Economy",
    linkedinUrl: "https://www.linkedin.com/in/angela-stables-9a639a300/",
    image: "/images/headshots/angelaHS.JPG",
  },
  {
    name: "Rishav Gadiyar",
    role: "Vice President of Technology",
    major: "Computer Science",
    linkedinUrl: "https://www.linkedin.com/in/rishavgadiyar/",
    image: "/images/headshots/rishavgadiyarHS.JPG",
  },
  {
    name: "Laela Million",
    role: "Secretary",
    major: "Computer Science",
    linkedinUrl: "https://www.linkedin.com/in/laelamillion/",
    image: "/images/headshots/laelaHS.jpeg",
  },
  { name: "Rishi Matharasi", role: "Board Developer", major: "Computer Science", linkedinUrl: "https://www.linkedin.com/in/rishi-matharasi/", image: "/images/headshots/rishimHS.JPG" },
  { name: "Abhinav Bulusu", role: "Board Developer", major: "Electrical and Computer Engineering", linkedinUrl: "https://www.linkedin.com/in/abhinav-bulusu/", image: "/images/headshots/abhiHS.JPG" },
  { name: "Lakshmi Gorthi", role: "Board Developer", major: "Computer Science", linkedinUrl: "https://www.linkedin.com/in/lakshmi-g-a55155294/", image: "/images/headshots/shriyaHS.JPG" },
  { name: "Akhilesh Singu", role: "Client Acquisition", major: "Management Information Systems + Computer Science", linkedinUrl: "https://www.linkedin.com/in/akhileshsingu/", image: "/images/headshots/akileshHS.jpeg" },
  { name: "Arnav Shah", role: "Client Acquisition", major: " Finance + Informatics ", linkedinUrl: "https://www.linkedin.com/in/arnavshah1/", image: "/images/headshots/arnavHS.jpg" },
  { name: "Ketaki Bakre", role: "Director of Marketing", major: "Business + Information Science", linkedinUrl: "https://www.linkedin.com/in/ketakibakre/", image: "/images/headshots/ketakiHS.JPG" },
  { name: "Kennady Cheng", role: "Director of Socials", major: "Management Information Systems", linkedinUrl: "https://www.linkedin.com/in/kennadycheng/", image: "/images/headshots/kennadycheng.JPG" },]


export default function AnalystsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {/* Hero */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <FadeIn>
              <p className="section-label">01 — Analysts Program</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[-0.04em] mt-2 mb-8 max-w-3xl leading-[0.95]">
                The people doing the work.
              </h1>
              <p className="text-lg text-white/55 max-w-xl leading-relaxed">
                NOVA Analysts are the core of everything we do — working on real engagements, building real skills, and launching real careers.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-24 px-6 bg-[#0d1f38]">
          <div className="container mx-auto max-w-6xl">
            <FadeIn>
              <p className="section-label">02 — The Program</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-16 max-w-2xl">
                What being an analyst means.
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8">
              {programFeatures.map((feature, i) => (
                <TabFadeIn key={feature.num} direction="bottom" delay={i * 100}>
                  <div className="bg-[#0a1628] p-8 md:p-10 h-full">
                    <span className="section-number">{feature.num}</span>
                    <h3 className="text-xl font-semibold text-white mt-4 mb-3">{feature.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{feature.body}</p>
                  </div>
                </TabFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <FadeIn>
              <p className="section-label">03 — Leadership</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-16 max-w-2xl">
                Executive Board.
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {execBoard.map((member, index) => (
                <TabFadeIn key={index} direction="bottom" delay={60 + index * 60}>
                  <div className="bg-[#0f2035] border border-white/8 rounded-lg p-7 hover:bg-white/[0.04] transition-colors duration-200 h-full">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-72 rounded-lg object-cover object-center mb-6" style={{objectPosition: "50% 30%"}} />
                    ) : (
                      <div className="w-full h-72 rounded-lg bg-white/8 mb-6" />
                    )}
                    <h3 className="text-base font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-[#2563eb] mb-1">{member.role}</p>
                    <p className="text-sm text-white/40 mb-5">{member.major}</p>
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors duration-200"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </TabFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-24 px-6 bg-[#0d1f38]">
          <FadeIn>
            <div className="container mx-auto max-w-4xl">
              <p className="section-label">04 — Join Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] mt-2 mb-6 max-w-2xl">
                Want to be on this list?
              </h2>
              <p className="text-white/55 text-lg mb-10 max-w-xl leading-relaxed">
                Applications are open. No prior experience required — just drive, curiosity, and a willingness to do real work.
              </p>
              <Link href="/apply" className="btn-filled">Apply Now</Link>
            </div>
          </FadeIn>
        </section>
      </div>
      <Footer />
    </div>
  )
}
