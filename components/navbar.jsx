"use client"

import Link from "next/link"
import CustomButton from "../components/custom-button"

export default function Navbar() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="shrink-0">
            <Link href="/" className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
              Aura AI
            </Link>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, "features")}
              className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium cursor-pointer"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleSmoothScroll(e, "pricing")}
              className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium cursor-pointer"
            >
              Pricing
            </a>
            <a
              href="#solutions"
              onClick={(e) => handleSmoothScroll(e, "solutions")}
              className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium cursor-pointer"
            >
              Solutions
            </a>
            <a
              href="#resources"
              onClick={(e) => handleSmoothScroll(e, "resources")}
              className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium cursor-pointer"
            >
              Resources
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <CustomButton label="Start Free Trial" variant="primary" size="md" className="rounded-full px-6" />
          </div>
        </div>
      </div>
    </nav>
  )
}
