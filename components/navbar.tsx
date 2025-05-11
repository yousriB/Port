"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:w-fit w-[calc(100%-4rem)] mx-auto rounded-xl mt-2",
        scrolled ? "bg-black/80 backdrop-blur-md py-2 shadow-sm" : "bg-transparent py-3",
      )}
    >
      <div className="container mx-auto px-7 py-1">
        <div className="w-full mx-auto flex items-center ">
          

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 w-full justify-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm text-white/80 hover:text-white transition-colors px-2 py-1"
              >
                {link.name}
              </Link>
            ))}
           
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-1" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden rounded-lg mt-2 mx-auto">
            <div className="flex flex-col space-y-2 p-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white transition-colors py-2 px-3 rounded hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                size="sm"
                className="text-sm bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white mt-1"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}