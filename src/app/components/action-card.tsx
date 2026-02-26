import type { LucideIcon } from "lucide-react"

interface ActionCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  isLarge?: boolean
}

export function ActionCard({
  icon: Icon,
  title,
  description,
  href = "#",
  isLarge = false,
}: ActionCardProps) {
  const baseClasses =
    "flex flex-col items-center gap-[10px] p-[20px] border border-[#BEC4CE] bg-[#FFF9D3]"
  const shadowStyle = { boxShadow: "2px 2px 0px #030020" }

  if (isLarge) {
    return (
      <a href={href} className={`${baseClasses}`} style={shadowStyle}>
        <div className="flex h-12 w-12 items-center justify-center bg-[#030020]">
          <Icon size={24} color="#FFF9D3" />
        </div>
        <h2 className="text-[26px] font-bold leading-[110%] tracking-[-0.03em] underline text-[#030020] text-center w-full">
          {title}
        </h2>
        <p className="text-[18px] font-normal leading-[140%] tracking-[-0.02em] text-[#030020] text-center w-full">
          {description}
        </p>
      </a>
    )
  }

  return (
    <a href={href} className={`${baseClasses} flex-1`} style={shadowStyle}>
      <div className="flex h-12 w-12 items-center justify-center bg-[#030020]">
        <Icon size={24} color="#FFF9D3" />
      </div>
      <h3 className="text-[20px] font-semibold leading-[110%] tracking-[-0.02em] underline text-[#030020] text-center w-full">
        {title}
      </h3>
      <p className="text-[14px] font-normal leading-[140%] text-[#030020] text-center w-full">
        {description}
      </p>
    </a>
  )
}
