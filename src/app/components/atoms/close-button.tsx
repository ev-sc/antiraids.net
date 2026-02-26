"use client"

import { Icon } from "./icon"

interface CloseButtonProps {
  variant?: "default" | "red"
  onClick?: () => void
  size?: number
}

export function CloseButton({ variant = "default", onClick, size = 24 }: CloseButtonProps) {
  const iconColor = variant === "red" ? "#D71D00" : "#030020"

  return (
    <button
      type="button"
      onClick={onClick}
      className="hover:opacity-70 transition-opacity"
      aria-label="Close"
    >
      <Icon type="close" size={size} color={iconColor} />
    </button>
  )
}
