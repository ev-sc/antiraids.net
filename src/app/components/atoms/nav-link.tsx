"use client"

interface NavLinkProps {
  href: string
  variant?: "default" | "red"
  children: React.ReactNode
  underline?: boolean
}

export function NavLink({ href, variant = "default", children, underline = false }: NavLinkProps) {
  const color = variant === "red" ? "text-[#D71D00]" : "text-[#030020]"
  const underlineClass = underline ? "underline" : ""

  return (
    <a
      href={href}
      className={`text-[16px] font-normal tracking-[-0.02em] hover:opacity-70 transition-opacity ${color} ${underlineClass}`}
    >
      {children}
    </a>
  )
}
