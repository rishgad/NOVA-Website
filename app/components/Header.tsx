import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-black bg-opacity-30 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="w-24">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_2-12-25_at_8.04_PM-removebg-preview-a4vRtTrLEtOfSa8Zmq0ImD0l80z6b9.png"
              alt="NOVA Consulting"
              width={200}
              height={100}
              className="w-full h-auto opacity-90 mix-blend-screen"
            />
          </Link>
          <div className="space-x-4 text-sm font-orbitron tracking-wider">
            <Link href="/" className="text-white hover:text-gray-300 opacity-80 hover:opacity-100 transition-opacity">
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 opacity-80 hover:opacity-100 transition-opacity"
            >
              Meet the Team
            </Link>
            <Link
              href="/impact"
              className="text-white hover:text-gray-300 opacity-80 hover:opacity-100 transition-opacity"
            >
              Our Impact
            </Link>
            <Link
              href="/recruitment"
              className="text-white hover:text-gray-300 opacity-80 hover:opacity-100 transition-opacity"
            >
              Join Us
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 opacity-80 hover:opacity-100 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
