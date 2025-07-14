"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavigationItem {
  href: string
  label: string
}

interface HeaderProps {
  navigationItems?: NavigationItem[]
  logo?: string
  contactButtonText?: string
}

export function Header({
  navigationItems = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "Über uns" },
    { href: "#certificates", label: "Zertifikate" },
  ],
  logo = "SköldGuard",
  contactButtonText = "Kontaktiere uns",
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="px-4 sm:px-6 lg:px-8 py-6 relative z-50">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-white font-bold text-xl sm:text-2xl">{logo}</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-white/80 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              {contactButtonText}
            </Button>
          </div>

          {/* Mobile Burger Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-white hover:bg-white/10 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-0 z-40 bg-red-600/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-4 py-6 pt-20">
          <nav className="space-y-6">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="block text-white text-lg py-3 hover:text-white/80 transition-colors duration-200 border-b border-white/10 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <Button
                variant="outline"
                onClick={closeMobileMenu}
                className="w-full bg-transparent border-white text-white hover:bg-white hover:text-red-600 transition-all duration-200"
              >
                {contactButtonText}
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="md:hidden fixed inset-0 bg-black/20 z-30" onClick={closeMobileMenu} />}
    </>
  )
}
