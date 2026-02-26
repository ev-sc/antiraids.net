"use client"
import type { SocialButtonProps } from "./contact-section"

export function SocialButton({
  href,
  icon,
  label,
  width,
  isActive = false,
  target,
  rel,
}: SocialButtonProps) {
  const textColor = isActive ? "text-[#D71D00]" : "text-[#030020]"
  const borderColor = isActive ? "border-[#D71D00]" : "border-[#BEC4CE]"
  const shadowColor = isActive ? "2px 2px 0px #D71D00" : "2px 2px 0px #030020"

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`flex flex-row items-center gap-[8px] px-[12px] h-[48px] bg-white border ${borderColor}`}
      style={{ width, boxShadow: shadowColor }}
    >
      <div className={`${textColor} flex items-center justify-center`}>{icon}</div>
      <span
        className={`text-[18px] font-normal leading-[140%] tracking-[-0.02em] underline ${textColor}`}
      >
        {label}
      </span>
    </a>
  )
}
