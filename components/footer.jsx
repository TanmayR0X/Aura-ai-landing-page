"use client"

import Link from "next/link"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Security", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Docs", href: "#" },
      { label: "Community", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "DPA", href: "#" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-bold text-primary mb-4">Aura AI</h3>
              <p className="text-foreground/70 text-sm mb-6">
                The intelligence layer for modern code development. Write better, faster code with AI.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hello@auraai.com"
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            {footerColumns.map((column, index) => (
              <div key={index}>
                <h4 className="font-semibold text-foreground mb-4 text-sm">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-foreground/70 hover:text-primary text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Bottom Footer */}
          <div className="py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-foreground/60 text-sm">© 2025 Aura AI. All rights reserved.</p>
            <p className="text-foreground/60 text-sm">Made with care for developers by developers.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
