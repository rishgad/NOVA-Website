"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { trackClick } from "@/lib/analytics"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, linkName: string, href: string) => {
    e.preventDefault()
    trackClick(`nav_${linkName}`)
    setIsOpen(false)

    // Smooth scroll to top then navigate
    window.scrollTo({ top: 0, behavior: "smooth" })

    // Navigate after a short delay so the scroll is visible
    setTimeout(() => {
      router.push(href)
    }, 300)
  }

  const navItems = [
    { name: "Home", href: "/", key: "home" },
    { name: "Meet the Team", href: "/about", key: "about" },
    { name: "Our Impact", href: "/impact", key: "impact" },
    { name: "Join Us", href: "/recruitment", key: "recruitment" },
    { name: "Contact Us", href: "/contact", key: "contact" },
  ]

  return (
    <header className="bg-[rgb(0,47,74)] border-b border-white/10 fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-center items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 font-space-grotesk">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-lg text-white hover:text-gray-200 transition-colors duration-300 nav-link-underline-glow"
                onClick={(e) => handleNavClick(e, item.key, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden w-full flex justify-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white h-10 w-10 rounded hover:bg-white/10 transition-colors duration-200"
                  onClick={() => trackClick("mobile_menu")}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[rgb(0,37,59)] border-l border-white/10 w-[250px] sm:w-[300px]"
              >
                <div className="flex flex-col gap-6 pt-8 font-space-grotesk text-lg">
                  {navItems.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="text-lg text-white hover:text-gray-200 transition-colors duration-300"
                      onClick={(e) => handleNavClick(e, item.key, item.href)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
