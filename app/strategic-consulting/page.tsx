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
    title: "Market Expansion Strategy",
    client: "TechGrowth Inc.",
    description:
      "Developed a comprehensive market expansion strategy for a tech startup looking to enter new regional markets.",
    outcome: "Successful expansion into 3 new markets with 45% revenue growth within the first year.",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=500&fit=crop&q=80&auto=format",
  },
  {
    title: "Operational Efficiency Overhaul",
    client: "Manufacturing Solutions Co.",
    description:
      "Analyzed and restructured core business processes to eliminate inefficiencies and reduce operational costs.",
    outcome: "30% reduction in operational costs and 25% improvement in production throughput.",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop&q=80&auto=format",
  },
  {
    title: "Competitive Positioning Strategy",
    client: "Retail Innovations LLC",
    description: "Created a differentiation strategy to help a retail client stand out in a saturated market.",
    outcome: "Market share increased by 15% and customer acquisition costs reduced by 22%.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop&q=80&auto=format",
  },
]

export default function StrategicConsulting() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">Strategic Consulting</h1>
        <p className="text-xl text-center mb-16 text-white/55 max-w-3xl mx-auto">
          We help businesses navigate complex challenges and capitalize on new opportunities through data-driven
          strategic planning.
        </p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden">
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
                <p className="text-white/40">Client: {project.client}</p>
                <p className="text-white/55">{project.description}</p>
                <div className="bg-[#0f2035] border border-white/8 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Outcome:</h3>
                  <p className="text-white/55">{project.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-white/55 mb-8">Ready to transform your business strategy?</p>
          <Link href="/contact" className="btn-filled">
            Contact Us
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
