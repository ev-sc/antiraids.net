"use client"

import { Icon } from "./icon"

interface EmailLinkProps {
  email: string
  variant?: "default" | "red"
}

export function EmailLink({ email, variant = "default" }: EmailLinkProps) {
  const color = variant === "red" ? "text-[#D71D00]" : "text-[#030020]"
  const iconColor = variant === "red" ? "#D71D00" : "#030020"

  return (
    <a
      href={`mailto:${email}`}
      className={`flex items-center gap-2 text-[16px] font-normal underline tracking-[-0.02em] ${color} hover:opacity-70 transition-opacity`}
    >
      <Icon type="envelope" size={20} color={iconColor} />
      {email}
    </a>
  )
}
