"use client"

import { Icon } from "./icon"

interface ReadMoreLinkProps {
  href?: string
  variant?: "default" | "red"
  onClick?: () => void
}

export function ReadMoreLink({ href, variant = "default", onClick }: ReadMoreLinkProps) {
  const color = variant === "red" ? "text-[#D71D00]" : "text-[#030020]"
  const borderColor = variant === "red" ? "border-[#D71D00]" : "border-[#030020]"
  const iconColor = variant === "red" ? "#D71D00" : "#030020"

  const Component = href ? "a" : "button"

  return (
    <Component
      type={href ? undefined : "button"}
      href={href}
      onClick={onClick}
      className={`flex items-center gap-2 text-[14px] font-medium border-b ${borderColor} ${color} pb-1 hover:opacity-70 transition-opacity`}
    >
      Read more
      <Icon type="plus" size={16} color={iconColor} />
    </Component>
  )
}
