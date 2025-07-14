"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = (
    <>
      <Link
        href="/"
        className="group text-lg text-white hover:text-purple-400 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link
        href="/about"
        className="group text-lg text-white hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]"
        onClick={() => setIsOpen(false)}
      >
        Meet the Team
      </Link>
      <Link
        href="/impact"
        className="group text-lg text-white hover:text-green-400 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"
        onClick={() => setIsOpen(false)}
      >
        Our Impact
      </Link>
      <Link
        href="/recruitment"
        className="group text-lg text-white hover:text-orange-400 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]"
        onClick={() => setIsOpen(false)}
      >
        Join Us
      </Link>
      <Link
        href="/contact"
        className="group text-lg text-white hover:text-pink-400 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.5)]"
        onClick={() => setIsOpen(false)}
      >
        Contact Us
      </Link>
    </>
  )

  return (
    <header className="bg-black bg-opacity-30 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-center items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 font-orbitron tracking-wider">
            {" "}
            {/* Increased space-x from 4 to 8 */}
            {navLinks}
          </div>
          {/* Mobile Navigation (Hamburger Menu) - Always visible and centered on mobile */}
          <div className="md:hidden w-full flex justify-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white h-12 w-12 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 relative overflow-hidden group"
                >
                  <Menu className="h-7 w-7 relative z-10" />
                  <span className="sr-only">Toggle navigation menu</span>
                  {/* Cool effect for the button */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"></div>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black bg-opacity-90 backdrop-blur-lg border-l border-gray-700 w-[250px] sm:w-[300px]"
              >
                <div className="flex flex-col gap-6 pt-8 font-orbitron tracking-wider text-lg">{navLinks}</div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
