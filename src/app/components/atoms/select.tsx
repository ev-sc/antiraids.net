"use client"

import { Icon } from "./icon"

interface SelectProps {
  options: string[]
  value?: string
  variant?: "default" | "red"
  onChange?: (value: string) => void
  placeholder?: string
}

export function Select({
  options,
  value,
  variant = "default",
  onChange,
  placeholder = "Select...",
}: SelectProps) {
  const borderColor = variant === "red" ? "border-[#D71D00]" : "border-[#030020]"
  const textColor = variant === "red" ? "text-[#D71D00]" : "text-[#030020]"
  const iconColor = variant === "red" ? "#D71D00" : "#030020"

  return (
    <div className={`relative flex items-center border-b ${borderColor}`}>
      <select
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
        className={`flex-1 px-0 py-2 bg-transparent text-[16px] font-normal appearance-none cursor-pointer ${textColor} focus:outline-none`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Icon type="chevron-down" size={18} color={iconColor} className="pointer-events-none" />
    </div>
  )
}
