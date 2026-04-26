import Link from "next/link"
import { Linkedin, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-white/8 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Wordmark + Description */}
          <div>
            <span className="text-white font-semibold tracking-[0.15em] text-sm uppercase block mb-4">
              NOVA
            </span>
            <p className="text-sm text-white/50 leading-relaxed">
              UT Austin's premier AI consulting organization. Transforming
              businesses through innovative technology solutions.
            </p>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/60 mb-4">
              Programs
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/analysts"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  Analysts
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/60 mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/apply"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  Apply
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/60 mb-4">
              Follow
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/company/texas-nova/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
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
                  className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:ryanthomas2271@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
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
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Texas NOVA. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/60 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
