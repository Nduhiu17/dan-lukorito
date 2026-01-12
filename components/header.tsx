"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Commitments", href: "#commitments" },
    { label: "Vision", href: "#vision" },
    { label: "Values", href: "#values" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <nav className="flex items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center font-bold text-primary">
            DL
          </div>
          <span className="font-bold text-lg hidden sm:inline">Dan Lukorito</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-accent transition-colors text-sm font-medium">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-primary-foreground hover:text-primary rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground border-opacity-10">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
