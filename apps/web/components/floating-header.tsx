"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Wallet } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function FloatingHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)

    // Set visible after a small delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const navItems = [
    { label: "Features", href: "/#features" },
    { label: "Security", href: "/#security" },
    { label: "Docs", href: "/#docs" },
    { label: "Community", href: "/#community" },
  ]

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <nav
        className={`
        relative bg-white/80 backdrop-blur-md border border-white/20 
        rounded-full px-6 py-3 shadow-lg transition-all duration-500
        ${isScrolled ? "shadow-xl bg-white/90" : ""}
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
        animate-float
      `}
      >
        <div className="flex items-center justify-between">
          {/* Logo with animation */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
              <Wallet className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wider">
              Noyra
            </span>
          </Link>

          {/* Desktop Navigation with animations */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-gray-700 hover:text-blue-600 transition-all duration-50 hover:scale-105 relative
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
                  ${pathname === item.href ? "text-blue-600 font-medium" : ""}
                `}
                style={{ transitionDelay: `${index * 50 + 100}ms` }}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-50 ${pathname === item.href ? "w-full" : "w-0"}`}
                ></span>
              </Link>
            ))}
          </div>

          {/* CTA Button with animation */}
          <div className="hidden md:block">
            <Link href="/auth/login">
              <Button
                className={`
                  bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 
                  text-white rounded-full px-6 transition-all duration-500 hover:scale-105 hover:shadow-lg
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  animate-pulse-subtle
                `}
                style={{ transitionDelay: "600ms" }}
              >
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            className={`md:hidden p-2 transition-all duration-300 hover:bg-blue-50 rounded-full
              ${isVisible ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-700 transition-transform duration-300 rotate-90 animate-in" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700 transition-transform duration-300 hover:rotate-12" />
            )}
          </button>
        </div>

        {/* Mobile Menu with animation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl transition-all duration-300 animate-in slide-in-from-top-5">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 hover:translate-x-1 transition-transform
                    ${pathname === item.href ? "text-blue-600" : ""}
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/auth/login">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full transition-all duration-300 hover:scale-105 w-full">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
