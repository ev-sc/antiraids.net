"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { IconButton } from "./atoms"
import { Icon } from "./atoms/icon"
import { LanguageToggle } from "./atoms/language-toggle"
import { Logo } from "./atoms/logo"
import { Button } from "./ui/button"

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#BEC4CE]">
      {/* Desktop layout: flex-row, space-between, items-center */}
      <div className="hidden md:flex items-center justify-between px-[20px] py-[14px] gap-[20px]">
        {/* Left: Logo */}
        <Logo />

        {/* Center: Language toggle */}
        <LanguageToggle />

        {/* Right: Alert banner */}
        <IconButton variant="red" icon="alert" ariaLabel="What to do during a raid" />
      </div>

      {/* Mobile layout */}
      <div className="flex md:hidden items-center justify-between px-[20px] py-[14px]">
        <Logo />
        <div className="flex items-center gap-[10px]">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#030020]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-[#BEC4CE] bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#" className="text-sm font-medium text-[#030020] hover:text-[#D71D00]">
                Home
              </a>
            </li>
            <li>
              <a
                href="#get-involved"
                className="text-sm font-medium text-[#030020] hover:text-[#D71D00]"
              >
                Get involved
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="text-sm font-medium text-[#030020] hover:text-[#D71D00]"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#directory"
                className="text-sm font-medium text-[#030020] hover:text-[#D71D00]"
              >
                Directory
              </a>
            </li>
            <li>
              <a
                href="#find-group"
                className="text-sm font-medium text-[#030020] hover:text-[#D71D00]"
              >
                Find your local group
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm font-medium text-[#030020] hover:text-[#D71D00]"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
