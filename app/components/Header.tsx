"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { trackClick } from "@/lib/analytics"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (linkName: string) => {
    trackClick(`nav_${linkName}`)
    setIsOpen(false)
  }

  const navLinks = (
    <>
      <Link
        href="/"
        className="text-lg text-white hover:text-gray-200 transition-colors duration-300 nav-link-underline-glow"
        onClick={() => handleNavClick("home")}
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-lg text-white hover:text-gray-200 transition-colors duration-300 nav-link-underline-glow"
        onClick={() => handleNavClick("about")}
      >
        Meet the Team
      </Link>
      <Link
        href="/impact"
        className="text-lg text-white hover:text-gray-200 transition-colors duration-300 nav-link-underline-glow"
        onClick={() => handleNavClick("impact")}
      >
        Our Impact
      </Link>
      <Link
        href="/recruitment"
        className="text-lg text-white hover:text-gray-200 transition-colors duration-300 nav-link-underline-glow"
        onClick={() => handleNavClick("recruitment")}
      >
        Join Us
      </Link>
      <Link
        href="/contact"
        className="text-lg text-white hover:text-gray-200 transition-colors duration-300 nav-link-underline-glow"
        onClick={() => handleNavClick("contact")}
      >
        Contact Us
      </Link>
    </>
  )

  return (
    <header className="bg-black bg-opacity-20 backdrop-blur-sm border-b border-white border-opacity-10 fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-center items-center">
          {/* Desktop Navigation - Centered with professional spacing */}
          <div className="hidden md:flex space-x-12 font-space-grotesk">{navLinks}</div>
          {/* Mobile Navigation */}
          <div className="md:hidden w-full flex justify-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white h-10 w-10 rounded bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
                  onClick={() => trackClick("mobile_menu")}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black bg-opacity-95 backdrop-blur-lg border-l border-gray-700 w-[250px] sm:w-[300px]"
              >
                <div className="flex flex-col gap-6 pt-8 font-space-grotesk text-lg">{navLinks}</div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
