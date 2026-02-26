"use client"

import { Icon } from "./icon"

interface SearchInputProps {
  placeholder?: string
  variant?: "default" | "red"
  value?: string
  onChange?: (value: string) => void
  onSubmit?: (value: string) => void
}

export function SearchInput({
  placeholder = "Search...",
  variant = "default",
  value,
  onChange,
  onSubmit,
}: SearchInputProps) {
  const borderColor = variant === "red" ? "border-[#D71D00]" : "border-[#BEC4CE]"
  const textColor = variant === "red" ? "text-[#D71D00]" : "text-[#030020]"
  const placeholderColor = variant === "red" ? "placeholder-[#D71D00]" : "placeholder-gray-400"
  const iconColor = variant === "red" ? "#D71D00" : "#030020"

  return (
    <div className={`flex items-center gap-2 border-b ${borderColor} pb-2`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit?.(e.currentTarget.value)
        }}
        className={`flex-1 bg-transparent text-[16px] font-normal focus:outline-none ${textColor} ${placeholderColor}`}
      />
      <button
        type="button"
        onClick={() => onSubmit?.(value || "")}
        className="hover:opacity-70 transition-opacity"
        aria-label="Search"
      >
        <Icon type="search" size={18} color={iconColor} />
      </button>
    </div>
  )
}
