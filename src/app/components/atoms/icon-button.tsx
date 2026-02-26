"use client"

interface IconButtonProps {
  icon: React.ReactNode
  variant?: "default" | "red"
  onClick?: () => void
  ariaLabel?: string
}

export function IconButton({ icon, variant = "default", onClick, ariaLabel }: IconButtonProps) {
  const color = variant === "red" ? "text-[#D71D00]" : "text-[#030020]"

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center w-6 h-6 hover:opacity-70 transition-opacity ${color}`}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  )
}
