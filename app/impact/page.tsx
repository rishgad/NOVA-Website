import Image from "next/image"
import Link from "next/link"
import Footer from "../components/Footer"

interface ImpactProject {
  title: string
  description: string
  impact: string[]
  imageUrl: string
}

interface Project {
  name: string
  description: string
  logo: string
}

const impactProjects: ImpactProject[] = [
  {
    title: "Education Technology Initiative",
    description:
      "We partnered with a local school district to implement a new technology platform that enhances student engagement and learning outcomes. Our team analyzed the district's needs, researched potential solutions, and managed the implementation process.",
    impact: [
      "Improved student engagement by 35%",
      "Increased teacher productivity by 25%",
      "Reduced technology-related issues by 40%",
    ],
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop&q=80&auto=format",
  },
  {
    title: "Nonprofit Efficiency Overhaul",
    description:
      "We helped a local nonprofit organization streamline their operations and improve their fundraising strategies. Our team conducted a comprehensive analysis of their processes and implemented new systems to increase efficiency.",
    impact: [
      "Reduced administrative costs by 30%",
      "Increased fundraising revenue by 45%",
      "Expanded community reach by 60%",
    ],
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop&q=80&auto=format",
  },
  {
    title: "Sustainable Business Transformation",
    description:
      "We worked with a small business to develop and implement sustainable practices that reduce environmental impact while improving profitability. Our team created a comprehensive sustainability roadmap and provided implementation support.",
    impact: [
      "Reduced carbon footprint by 50%",
      "Decreased operational costs by 20%",
      "Improved customer satisfaction and loyalty",
    ],
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=500&fit=crop&q=80&auto=format",
  },
]

const projects: Project[] = [
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

export default function ImpactAndPurpose() {
  return (
    <div className="flex flex-col pt-4">
      {/* Hero Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Impact and Purpose</h1>
          <p className="text-xl text-gray-300 mb-8">
            At NOVA Consulting, our mission is to empower businesses to thrive in an ever-changing world. We are
            committed to delivering innovative, sustainable, and impactful solutions that drive growth and create
            lasting value for our clients and communities.
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600"></div>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-20 px-6 bg-black bg-opacity-30 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-white">Our Purpose</h2>
              <p className="text-gray-300 mb-6">
                We believe in the power of innovative thinking and collaborative problem-solving to create meaningful
                change. Our purpose is to bridge the gap between academic knowledge and real-world business challenges.
              </p>
              <p className="text-gray-300 mb-6">
                As a student-led consulting organization, we're uniquely positioned to bring fresh perspectives and
                cutting-edge ideas to the table. We're committed to delivering exceptional value to our clients while
                providing our team members with valuable professional experience.
              </p>
              <p className="text-gray-300">
                We strive to make a positive impact not just for our clients, but for our community and the world at
                large. We believe that business can be a force for good, and we're dedicated to helping organizations
                achieve their goals in a way that benefits all stakeholders.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-glow">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop&q=80&auto=format"
                  alt="NOVA team purpose"
                  width={800}
                  height={600}
                  className="w-full h-auto brightness-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <div className="w-16 h-16 rounded-full bg-white bg-opacity-10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl animated-gradient-text">01</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">Innovation</h3>
              <p className="text-gray-300 text-center">
                We constantly seek new ideas and approaches to solve complex business challenges.
              </p>
            </div>

            <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <div className="w-16 h-16 rounded-full bg-white bg-opacity-10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl animated-gradient-text">02</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">Integrity</h3>
              <p className="text-gray-300 text-center">
                We uphold the highest ethical standards in all our interactions and decisions.
              </p>
            </div>

            <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <div className="w-16 h-16 rounded-full bg-white bg-opacity-10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl animated-gradient-text">03</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">Collaboration</h3>
              <p className="text-gray-300 text-center">
                We believe in the power of teamwork and partnership with our clients.
              </p>
            </div>

            <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <div className="w-16 h-16 rounded-full bg-white bg-opacity-10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl animated-gradient-text">04</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">Excellence</h3>
              <p className="text-gray-300 text-center">
                We strive for excellence in everything we do, delivering high-quality results consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-20 px-6 bg-black bg-opacity-30 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Our Projects</h2>
          <p className="text-xl text-center mb-16 text-gray-300 max-w-3xl mx-auto">
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

      {/* Impact Projects Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Impact</h2>

          <div className="space-y-20">
            {impactProjects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-glow">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="w-full h-auto brightness-90"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-xl p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Impact:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.impact.map((item, i) => (
                        <li key={i} className="text-gray-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-black bg-opacity-30 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Make an Impact?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're looking to transform your business or join our team, we're excited to connect with you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="button-ellipse">
              <span className="button-text">Work With Us</span>
            </Link>
            <Link href="/recruitment" className="button-ellipse">
              <span className="button-text">Join Our Team</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
