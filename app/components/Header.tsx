"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { trackClick } from "@/lib/analytics"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, linkName: string, href: string) => {
    e.preventDefault()
    trackClick(`nav_${linkName}`)
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
    setTimeout(() => {
      router.push(href)
    }, 300)
  }

  const navItems = [
    { name: "Home", href: "/", key: "home" },
    { name: "Meet the Team", href: "/analysts", key: "analysts" },
    { name: "Our Impact", href: "/impact", key: "impact" },
    { name: "Join Us", href: "/apply", key: "apply" },
    { name: "Contact Us", href: "/contact", key: "contact" },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628]/90 backdrop-blur-sm border-b border-white/8"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Wordmark */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "home", "/")}
            className="text-white font-semibold tracking-[0.15em] text-sm uppercase hover:text-white/80 transition-colors duration-200"
          >
            NOVA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 font-space-grotesk">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200 nav-link-underline-glow"
                onClick={(e) => handleNavClick(e, item.key, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white h-10 w-10 rounded hover:bg-white/10 transition-colors duration-200"
                  onClick={() => trackClick("mobile_menu")}
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#0a1628] border-l border-white/8 w-[250px] sm:w-[300px]"
              >
                <div className="flex flex-col gap-8 pt-12 font-space-grotesk">
                  {navItems.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
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
