"use client"

import { useState } from "react"

export default function ResumeComparison() {
  const [activeTab, setActiveTab] = useState<"with" | "without">("with")

  return (
    <div className="w-full">
      {/* Mobile Tabs - Only visible on small screens */}
      <div className="lg:hidden mb-6">
        <div className="resume-tabs">
          <div className={`resume-tab ${activeTab === "with" ? "active" : ""}`} onClick={() => setActiveTab("with")}>
            With NOVA
          </div>
          <div
            className={`resume-tab ${activeTab === "without" ? "active" : ""}`}
            onClick={() => setActiveTab("without")}
          >
            Without NOVA
          </div>
        </div>
      </div>

      {/* Desktop View - Side by side */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-8">
        {/* Resume With NOVA */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-400 mb-8">Resume With NOVA</h3>
          <ResumeWithNOVA />
        </div>

        {/* Resume Without NOVA */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-400 mb-8">Resume Without NOVA</h3>
          <ResumeWithoutNOVA />
        </div>
      </div>

      {/* Mobile View - Tabbed */}
      <div className="lg:hidden">
        {activeTab === "with" ? (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-center text-blue-400 mb-4">Resume With NOVA</h3>
            <ResumeWithNOVA />
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-center text-gray-400 mb-4">Resume Without NOVA</h3>
            <ResumeWithoutNOVA />
          </div>
        )}
      </div>
    </div>
  )
}

function ResumeWithNOVA() {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg resume-card resume-comparison-mobile">
      <div className="resume-card-header">
        <h4 className="font-bold text-gray-800 text-lg">WORK EXPERIENCE</h4>
      </div>

      <div className="resume-card-content">
        <div className="resume-experience">
          <div className="resume-experience-header">
            <h5 className="font-semibold text-gray-800">NOVA Consulting | Technical Consultant</h5>
            <div className="flex justify-between items-center">
              <p className="text-gray-600 text-sm">Austin, TX</p>
              <p className="text-gray-600 text-sm">Sep. 2024 - Present</p>
            </div>
          </div>
          <ul className="space-y-2 mt-2">
            <li className="flex">
              <span className="text-gray-800 mr-2">•</span>
              <span className="text-gray-700 text-sm">
                Led AI implementation project for local startup, resulting in 30% efficiency improvement and $50K cost
                savings
              </span>
            </li>
            <li className="flex">
              <span className="text-gray-800 mr-2">•</span>
              <span className="text-gray-700 text-sm">
                Conducted market analysis for tech client, identifying 3 new target segments with $500K potential
              </span>
            </li>
            <li className="flex">
              <span className="text-gray-800 mr-2">•</span>
              <span className="text-gray-700 text-sm">
                Developed custom data analytics dashboard that increased client's customer retention by 25%
              </span>
            </li>
            <li className="flex">
              <span className="text-gray-800 mr-2">•</span>
              <span className="text-gray-700 text-sm">
                Presented findings to executive team at Austin-based company, securing follow-up project worth $15K
              </span>
            </li>
          </ul>
        </div>

        <div className="resume-experience mt-4 pt-4 border-t border-gray-200">
          <div className="resume-experience-header">
            <h5 className="font-semibold text-gray-800">NexusAI Labs | Project Lead</h5>
            <div className="flex justify-between items-center">
              <p className="text-gray-600 text-sm">Austin, TX</p>
              <p className="text-gray-600 text-sm">Jan. 2024 - Aug. 2024</p>
            </div>
          </div>
          <ul className="space-y-2 mt-2">
            <li className="flex">
              <span className="text-gray-800 mr-2">•</span>
              <span className="text-gray-700 text-sm">
                Built AI-powered content recommendation system used by 5 local businesses
              </span>
            </li>
            <li className="flex">
              <span className="text-gray-800 mr-2">•</span>
              <span className="text-gray-700 text-sm">Secured $20K in funding through university innovation grant</span>
            </li>
            <li className="flex">
              <span className="text-gray-800 mr-2">•</span>
              <span className="text-gray-700 text-sm">
                Led team of 4 student developers to deliver working prototype in 8 weeks
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function ResumeWithoutNOVA() {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg opacity-75 resume-card resume-comparison-mobile">
      <div className="resume-card-header">
        <h4 className="font-bold text-gray-800 text-lg">WORK EXPERIENCE</h4>
      </div>

      <div className="resume-card-content">
        <div className="resume-experience">
          <div className="resume-experience-header">
            <h5 className="font-semibold text-gray-800">Campus Tech Store | Sales Associate</h5>
            <div className="flex justify-between items-center">
              <p className="text-gray-600 text-sm">Austin, TX</p>
              <p className="text-gray-600 text-sm">Sep. 2024 - Present</p>
            </div>
          </div>
          <ul className="space-y-2 mt-2">
            <li className="flex">
              <span className="text-gray-800 mr-2">•</span>
              <span className="text-gray-700 text-sm">
                Assist customers with technology purchases and provide product recommendations
              </span>
            </li>
            <li className="flex">
              <span className="text-gray-800 mr-2">•</span>
              <span className="text-gray-700 text-sm">
                Process transactions and maintain inventory of tech products
              </span>
            </li>
            <li className="flex">
              <span className="text-gray-800 mr-2">•</span>
              <span className="text-gray-700 text-sm">
                Participate in weekly team meetings to discuss sales strategies
              </span>
            </li>
          </ul>
        </div>

        <div className="resume-experience mt-4 pt-4 border-t border-gray-200">
          <div className="resume-experience-header">
            <h5 className="font-semibold text-gray-800">Computer Science Student Association | Member</h5>
            <div className="flex justify-between items-center">
              <p className="text-gray-600 text-sm">University of Texas</p>
              <p className="text-gray-600 text-sm">Jan. 2024 - Present</p>
            </div>
          </div>
          <ul className="space-y-2 mt-2">
            <li className="flex">
              <span className="text-gray-800 mr-2">•</span>
              <span className="text-gray-700 text-sm">Attend weekly meetings and participate in coding workshops</span>
            </li>
            <li className="flex">
              <span className="text-gray-800 mr-2">•</span>
              <span className="text-gray-700 text-sm">
                Volunteer at department events and help with organization activities
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
