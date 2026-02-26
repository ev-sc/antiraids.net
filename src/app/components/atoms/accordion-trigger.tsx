"use client"

import { useState } from "react"
import { Icon } from "./icon"

interface AccordionTriggerProps {
  label: string
  variant?: "default" | "red"
  onToggle?: (isOpen: boolean) => void
  isOpen?: boolean
}

export function AccordionTrigger({
  label,
  variant = "default",
  onToggle,
  isOpen: controlledOpen,
}: AccordionTriggerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const open = controlledOpen !== undefined ? controlledOpen : isOpen

  const color = variant === "red" ? "text-[#D71D00]" : "text-[#030020]"
  const borderColor = variant === "red" ? "border-[#D71D00]" : "border-[#030020]"
  const iconColor = variant === "red" ? "#D71D00" : "#030020"

  const handleClick = () => {
    const newState = !open
    if (controlledOpen === undefined) setIsOpen(newState)
    onToggle?.(newState)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex items-center justify-between w-full pb-2 border-b ${borderColor}`}
    >
      <span className={`text-[16px] font-bold underline tracking-[-0.02em] ${color}`}>{label}</span>
      <Icon type="plus" size={20} color={iconColor} />
    </button>
  )
}
