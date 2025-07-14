"use client" // This component needs to be a client component for interactivity

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu } from "lucide-react" // Import icons for menu
import { Button } from "@/components/ui/button" // Assuming shadcn/ui button is available
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet" // Assuming shadcn/ui sheet is available

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = (
    <>
      <Link
        href="/"
        className="text-white hover:text-gray-300 opacity-80 hover:opacity-100 transition-opacity"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-white hover:text-gray-300 opacity-80 hover:opacity-100 transition-opacity"
        onClick={() => setIsOpen(false)}
      >
        Meet the Team
      </Link>
      <Link
        href="/impact"
        className="text-white hover:text-gray-300 opacity-80 hover:opacity-100 transition-opacity"
        onClick={() => setIsOpen(false)}
      >
        Our Impact
      </Link>
      <Link
        href="/recruitment"
        className="text-white hover:text-gray-300 opacity-80 hover:opacity-100 transition-opacity"
        onClick={() => setIsOpen(false)}
      >
        Join Us
      </Link>
      <Link
        href="/contact"
        className="text-white hover:text-gray-300 opacity-80 hover:opacity-100 transition-opacity"
        onClick={() => setIsOpen(false)}
      >
        Contact Us
      </Link>
    </>
  )

  return (
    <header className="bg-black bg-opacity-30 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="w-20 sm:w-24">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_2-12-25_at_8.04_PM-removebg-preview-a4vRtTrLEtOfSa8Zmq0ImD0l80z6b9.png"
              alt="NOVA Consulting"
              width={200}
              height={100}
              className="w-full h-auto opacity-90 mix-blend-screen"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 text-sm font-orbitron tracking-wider">{navLinks}</div>

          {/* Mobile Navigation (Hamburger Menu) */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
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
