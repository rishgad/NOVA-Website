import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[rgb(0,32,50)] border-t border-white/10 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo + Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/nova-network-logo.png"
                alt="NOVA"
                width={40}
                height={40}
                className="opacity-80 mix-blend-screen"
              />
              <span className="text-lg font-semibold tracking-wide">NOVA</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              UT Austin's premier AI consulting organization. Transforming
              businesses through innovative technology solutions.
            </p>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Programs
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Analysts
                </Link>
              </li>
              <li>
                <Link
                  href="/impact"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/impact"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Teams
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Follow
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/texas-nova/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/texasnova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:ryanthomas2271@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Texas NOVA. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
