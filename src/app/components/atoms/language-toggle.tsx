"use client"

interface LanguageToggleProps {
  value?: string
  variant?: "default" | "red"
  onChange?: (lang: string) => void
}

export function LanguageToggle({
  value = "EN",
  variant = "default",
  onChange,
}: LanguageToggleProps) {
  const borderColor = variant === "red" ? "border-[#D71D00]" : "border-[#BEC4CE]"
  const textColor = variant === "red" ? "text-[#D71D00]" : "text-[#030020]"

  return (
    <button
      type="button"
      onClick={() => onChange?.("EN")}
      className={`px-2 py-1 text-[12px] font-medium border ${borderColor} ${textColor} hover:opacity-70 transition-opacity`}
    >
      {value}
    </button>
  )
}
