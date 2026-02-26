import { TriangleAlert } from "lucide-react"

export function AlertBanner() {
  return (
    <div className="flex items-center justify-between bg-[#FFF9D3] border-b border-[#BEC4CE] px-[20px] py-[10px]">
      <a
        href="#"
        className="text-[18px] font-normal leading-[140%] tracking-[-0.02em] underline text-[#030020]"
      >
        What to do during a raid
      </a>
      <TriangleAlert size={20} color="#D71D00" />
    </div>
  )
}
