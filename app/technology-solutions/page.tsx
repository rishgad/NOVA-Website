import Image from "next/image"
import Link from "next/link"
import Footer from "../components/Footer"

interface Project {
  title: string
  client: string
  description: string
  outcome: string
  imageUrl: string
}

const projects: Project[] = [
  {
    title: "Digital Transformation Initiative",
    client: "FinTech Enterprises",
    description:
      "Led a comprehensive digital transformation project to modernize legacy systems and implement cloud-based solutions.",
    outcome: "70% improvement in system performance and 40% reduction in IT maintenance costs.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&q=80&auto=format",
  },
  {
    title: "Custom CRM Implementation",
    client: "Global Services Group",
    description:
      "Designed and implemented a custom CRM solution tailored to the client's unique business processes and customer journey.",
    outcome: "35% increase in customer retention and 28% improvement in sales team efficiency.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop&q=80&auto=format",
  },
  {
    title: "Data Analytics Platform",
    client: "Research Innovations Inc.",
    description:
      "Developed a comprehensive data analytics platform to help the client extract actionable insights from their vast data resources.",
    outcome: "Identified new market opportunities worth $2.5M and optimized marketing spend by 30%.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80&auto=format",
  },
]

export default function TechnologySolutions() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">Technology Solutions</h1>
        <p className="text-xl text-center mb-16 text-gray-300 max-w-3xl mx-auto">
          We leverage cutting-edge technologies to create innovative solutions that drive efficiency, growth, and
          competitive advantage.
        </p>

        <div className="space-y-16">
          {projects.map((project, index) => (
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
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                <p className="text-gray-400">Client: {project.client}</p>
                <p className="text-gray-300">{project.description}</p>
                <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Outcome:</h3>
                  <p className="text-gray-300">{project.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-8">Ready to transform your technology infrastructure?</p>
          <Link href="/contact" className="button-ellipse">
            <span className="button-text">Contact Us</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
