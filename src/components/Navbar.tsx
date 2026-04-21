"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Download } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#1B2B5E]">
                JARMEX
              </span>
              <span className="text-xs text-[#C9A84C] tracking-wider">
                OVERSEAS PVT. LTD.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-colors font-medium ${
                  isActive(link.path)
                    ? "text-[#C9A84C]"
                    : "text-[#1A1A2E] hover:text-[#C9A84C]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/documents/jarmex-brochure.pdf"
              className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b89740] text-white px-4 py-2 rounded-md transition-colors font-medium"
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1B2B5E] p-2"
          >
            {isOpen
              ? <X className="w-6 h-6" />
              : <Menu className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md font-medium ${
                  isActive(link.path)
                    ? "bg-[#1B2B5E] text-white"
                    : "text-[#1A1A2E] hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/documents/jarmex-brochure.pdf"
              className="flex items-center justify-center gap-2 w-full bg-[#C9A84C] hover:bg-[#b89740] text-white px-4 py-2 rounded-md mt-2 font-medium"
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}